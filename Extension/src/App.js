/*global chrome*/

import './App.css';
import like from './images/like.jpeg';
import meh from './images/meh.png';
import dislike from './images/dislike.png';
import { useState, useEffect } from 'react';
import WebsiteDataService from './services/website.server';

function App() {
  const [domain, setDomain] = useState('');
  const [website, setWebsite] = useState({ url: '', likes: 0, neutrals: 0, dislikes: 0 });
  
  chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    let url = tabs[0].url;
    let domain = "";
    let encounteredPeriod = false;
    for (let char of url) {
      if (char === '.') encounteredPeriod = true;
      if (char === '/' && encounteredPeriod) break;
      domain += char;
    }
    if (domain === 'https://www.youtube.com') domain = url;
    setDomain(domain);
  });

  useEffect(() => {
    const loadWebsite = async () => {
      // chrome.storage.local.get(['domain', 'url'], function(result) {
      //   setDomain(result.domain);
      // });
      const websites = await (await WebsiteDataService.findBySearch(domain)).data;
      console.log(websites, domain, 'DOMAINS');
      if (websites.length > 0) {
        setWebsite(websites[0]);
      } else {
        setWebsite(prevWebsite => ({
          ...prevWebsite,
          url: domain
        }));
      }
    };
    loadWebsite();
  }, [domain]);

  const handleLike = e => {
    e.preventDefault();
    setWebsite(prevWebsite => ({
      ...prevWebsite,
      likes: prevWebsite.likes + 1
    }));
    handleClick(e);
  };

  const handleNeutral = e => {
    e.preventDefault();
    setWebsite(prevWebsite => ({
      ...prevWebsite,
      neutrals: prevWebsite.neutrals + 1
    }));
    handleClick(e);
  };

  const handleDislike = e => {
    e.preventDefault();
    setWebsite(prevWebsite => ({
      ...prevWebsite,
      dislikes: prevWebsite.dislikes + 1
    }));
    handleClick(e);
  };

  const handleClick = e => {
    e.preventDefault();
    try {
      const id = website.id;
      if (id) WebsiteDataService.update(id, website);
      else WebsiteDataService.create(website);
    } catch(err) {
      console.error('error: ', err);
    }
  };

  return (
    <div className="App">
      <div>
        <p id="website">Site: {domain}</p>
      </div>
      <div className="buttons">
        <input type="image" src={like} id="like" alt="like" onClick={handleLike} />
        <input type="image" src={meh} id="meh" alt="neutral" onClick={handleNeutral} />
        <input type="image" src={dislike} id="dislike" alt="dislike" onClick={handleDislike} />
      </div>
      <div>
        <p>{website.likes}</p>
        <p>{website.neutrals}</p>
        <p>{website.dislikes}</p>
      </div>
    </div>
  );
}

export default App;
