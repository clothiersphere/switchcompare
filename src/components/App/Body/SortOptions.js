import React, { Component } from 'react';
import { Button, Icon, Dropdown } from 'semantic-ui-react';

class SortOptions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      release: false,
      price: false,
      score: false,
      sale: false,
      ascending: true,
      descending: true,
    };
  }

  handleClick = (e, { name }) => {
    this.setState({ [`${name}`]: !this.state[`${name}`] });
    this.props.toggleDisplaySort(name);
  };

  render() {
    const { release, price, score, sale, ascending, descending } = this.state;

    // const sortTypes = [release, price, score, sale];
    // const options = [];

    // sortTypes.forEach(type => {
    //   options.push({ type, text: type, value: type });
    // });

    const options = [
      {
        text: 'release date',
        value: 'release date',
        icon: 'calendar',
      },
      {
        text: 'price ascending',
        value: 'price ascending',
        icon: 'sort numeric ascending',
      },
      {
        text: 'price descending',
        value: 'price descending',
        icon: 'sort numeric descending',
      },
      {
        text: 'score ascending',
        value: 'score ascending',
        icon: 'sort ascending',
      },
      {
        text: 'score descending',
        value: 'score descending',
        icon: 'sort descending',
      },
    ];

    console.log(options, 'options');

    return (
      <div className="SortOptions">
        <Dropdown placeholder="Sort by" selection options={options} />
      </div>
    );
    // return (
    //   <div className="sortBar">
    //     <Button name="ascending" toggle floated="left" active={ascending} icon>
    //       <Icon name="chevron up" />
    //     </Button>

    //     <Button.Group>
    //       <Button name="release" toggle active={release} onClick={this.handleClick} as="div" icon>
    //         <Icon name="calendar" />
    //           Release
    //       </Button>
    //       <Button name="price" toggle active={price} onClick={this.handleClick} icon>
    //         <Icon name="dollar" />
    //           Price
    //       </Button>
    //       <Button name="score" toggle active={score} onClick={this.handleClick} icon>
    //         <Icon name="smile" />
    //           Metacritic
    //       </Button>
    //       <Button name="sale" toggle active={sale} onClick={this.handleClick} icon>
    //         <Icon name="percent" />
    //           Off
    //       </Button>
    //     </Button.Group>
    //     <Button name="descending" toggle floated="right" active={descending} icon>
    //       <Icon name="chevron down" />
    //     </Button>
    //   </div>
    // );
  }
}

export default SortOptions;
