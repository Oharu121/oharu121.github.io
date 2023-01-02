import React from 'react';
import './App.css';
import Instructions from './Instructions';

const displayEmojiName = event => alert(event.target.id);
const emojis = [
  {
    emoji: '😀',
    name: "test grinning face"
  },
  {
    emoji: '🎉',
    name: "party popper"
  },
  {
    emoji: '💃',
    name: "woman dancing"
  },
  {
    emoji: '😄',
    name: "笑顔"
  }
];

function App() {
  const greeting = "greeting";
  const displayLove = true;

  return(
    <div className="container">
      <h1 id={greeting}>Hello, World</h1>
      <p>我愛韓寶寶💕</p>
      <Instructions />
      <ul>
        {
          emojis.map(emoji => (
            <li key={emoji.name}>
              <button
                onClick={displayEmojiName}
              >
                <span role="img" aria-label={emoji.name} id={emoji.name}>{emoji.emoji}</span>
              </button>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default App;