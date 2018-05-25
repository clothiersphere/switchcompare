import React from 'react';
import { Dropdown } from 'semantic-ui-react';

const GenreDropdown = ({ games }) => {
  const genre = {};
  const options = [];

  games.forEach((game) => {
    const { Categories } = game;
    Categories.forEach((category) => {
      genre[category] = category;
    });
  });

  Object.entries(genre).forEach(([key, value]) => {
    options.push({ key, text: key, value: key });
  });

  console.log(options);

  return (
    <div>
      <Dropdown placeholder="Filter by one or multiple genres" fluid multiple selection options={options} />
    </div>
  );
};

export default GenreDropdown;
