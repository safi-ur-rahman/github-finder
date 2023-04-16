import React, { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const searchUser = async (event) => {
    event.preventDefault();
    const response = await fetch(
      `https://api.github.com/search/users?q=${searchTerm}`
    );
    const data = await response.json();
    setSearchResults(data.items);
  };

  return (
    <div className="bg">
      <div className="header">
        <img className="github-icon" src={require('./Images/gh.png')}  alt="github-finder"/>
        <h1>GitHub Finder</h1>
      </div>

      <div className="search">
        <form onSubmit={searchUser}>
          <input
            type="text"
            placeholder="Username"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </div>
        <div className="grid-view">
          {searchResults.map((user) => (
            <div className="profile-open">
              <a href={user.html_url}>
              <div className = "profile" key={user.id}>
                <img className="profile-img" src={user.avatar_url} alt={`${user.login}'s avatar`} />
                  <h2>
                    <a href={user.html_url}></a>{user.login}
                  </h2>
                  <img className="profile-open-icon" src={require('./Images/resize.png')}  alt="open-profile"/>
                </div>
              </a>
            </div>      
          ))}
      </div>
    </div>
  );
}

export default App;