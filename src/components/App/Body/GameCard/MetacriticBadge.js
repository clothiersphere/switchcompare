import React from 'react';

const MetacriticBadge = ({ metaInfo, display }) => {
  const displayScore = () => {
    if (metaInfo.metascore) {
      return (
        <p> {metaInfo.metascore} </p>
      );
    }
    return <p> tbd </p>;
  };

  const badgeColor = () => {
    let className = null;

    if (display === 'gameCard') {
      className = 'metacriticBadge gameCardSQ';
    }

    if (display === 'gameCardModal') {
      className = 'metacriticBadge gameCardModal';
    }

    const checkScore = () => {
      if (metaInfo.metascore) {
        return metaInfo.metascore;
      }
      return 'tbd';
    };

    if (checkScore() === 'tbd') { className += ' tbd'; }
    if (checkScore() >= 61) { className += ' positive'; }
    if (checkScore() <= 60 && checkScore() >= 40) { className += ' mixed'; }
    if (checkScore() <= 39) { className += ' negative'; }
    return className;
  };

  return (
    <div className={badgeColor()}>
      {displayScore()}
    </div>
  );
};

export default MetacriticBadge;
