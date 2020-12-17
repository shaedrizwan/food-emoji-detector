import React, { useState } from "react";
import "./styles.css";

export default function App() {
  var emojiDictionary = {
    "🍟": "French Fries",
    "🍕": "Pizza",
    "🥑": "Avocado",
    "🍔": "Hamburger",
    "🍫": "Chocolate bar"
  };

  var emojisWeKnow = Object.keys(emojiDictionary);

  var [meaning, getMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;
    meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "We dont have this in our database.";
    }
    getMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    getMeaning(emojiDictionary[emoji]);
  }

  return (
    <div className="App">
      <h1> Food Emoji Detector </h1>
      <input
        placeholder="Put your Emoji here"
        onChange={emojiInputHandler}
      ></input>
      <div className="outputDiv">
        <em>{meaning}</em>
      </div>
      <h2>Emojis we know</h2>
      {
        <span>
          {emojisWeKnow.map((emojis) => {
            return (
              <span
                onClick={() => emojiClickHandler(emojis)}
                key={emojis}
                style={{ padding: "1rem", fontSize: "2rem", cursor: "pointer" }}
              >
                {emojis}
              </span>
            );
          })}
        </span>
      }
    </div>
  );
}
