/*global chrome*/


import './App.css';
import like from './images/like.jpeg';
import meh from './images/meh.png';
import dislike from './images/dislike.png';
import { useState } from 'react';
// import { useEffect } from 'react';
let mysql = require('mysql');
let config = require('./config.js');


function App() {
  const [website, setWebsite] = useState('');
  let connection = mysql.createConnection(config);
  connection.connect(function(err){
    if(err) return console.error('error: ' + err.message);
    console.log('Connected to the MySQL server.');
  });
    // return () => {
    //   connection.end();
    // }

  chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    let url = tabs[0].url;
    let domain = "";
    let encounteredPeriod = false;
    for (let char of url) {
      if (char === '.') encounteredPeriod = true;
      if (char === '/' && encounteredPeriod) break;
      domain += char;
    }
    if (domain === 'https://www.youtube.com') {
      setWebsite(url);
    } else {
      setWebsite(domain);
    }
  });

  function handleLike(e) {
    e.preventDefault();
    // let insertwebsite = `INSERT INTO websites(url) VALUES('www.youtube.com');`;
    // connection.query(insertwebsite);
  }

  return (
    <div className="App">
      <div>
        <p id="website">Site: {website}</p>
      </div>
      <div className="buttons">
        <input type="image" src={like} id="like" alt="like" onClick={handleLike} />
        <input type="image" src={meh} id="meh" alt="neutral" />
        <input type="image" src={dislike} id="dislike" alt="dislike" />
      </div>
    </div>
  );
}

export default App;
