import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react';

class SortOptions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      calendar: false,
      price: false,
      score: false,
      percent: false,
    };
  }

  handleClick = (e, { name }) => {
    this.setState({ [`${name}`]: !this.state[`${name}`] });
  }

  render() {
    const {
      calendar,
      price,
      score,
      percent,
    } = this.state;

    return (
      <div>
        Sort by:
        <Button name="calendar" toggle active={calendar} onClick={this.handleClick} as="div" icon>
          <Icon name="calendar" />
            Release Date
        </Button>
        <Button name="price" toggle active={price} onClick={this.handleClick} icon>
          <Icon name="dollar" />
            Price
        </Button>
        <Button name="score" toggle active={score} onClick={this.handleClick} icon>
            Metacritic Score
        </Button>
        <Button toggle active={percent} onClick={this.handleClick} icon>
          <Icon name="percent" />
            Off
        </Button>
      </div>
    );
  }
}

export default SortOptions;
