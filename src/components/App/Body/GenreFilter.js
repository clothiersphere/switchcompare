import React from 'react';
import { Dropdown } from 'semantic-ui-react';

const GenreFilter = ({ games, filterGenre }) => {
  const genre = {};
  const options = [];

  games.forEach((game) => {
    const { Categories } = game;
    Categories.forEach((category) => {
      genre[category] = category;
    });
  });

  Object.entries(genre).forEach(([key]) => {
    options.push({ key, text: key, value: key });
  });


  return (
    <div>
      <Dropdown
        placeholder="Filter by one or multiple genres"
        fluid
        multiple
        selection
        options={options}
        onChange={(e, data) => filterGenre(data.value)}
      />
    </div>
  );
};

export default GenreFilter;
