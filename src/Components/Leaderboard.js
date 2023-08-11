import React from 'react';
import './Leaderboard.css'; // Import your leaderboard styles here

const Leaderboard = ({ players }) => (
  <div className="leaderboard-container">
    <h2>Leaderboard</h2>
    <ul className="leaderboard-list">
      {players.map((player, index) => (
        <li key={index} className="leaderboard-item">
          <div className="player-avatar">
            <img src={player.avatar} alt={`${player.name}'s Avatar`} />
          </div>
          <div className="player-info">
            <span className="player-name">{player.name}</span>
            <span className="player-score">Score: {player.score}</span>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default Leaderboard;
