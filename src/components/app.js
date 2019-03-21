import React, { Component } from 'react';
import Button from './Button';
import BeerList from './BeerList';

const API_ENDPOINT = 'https://api.punkapi.com/v2/beers';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      beers: []
    }

    this.loadBeers = this.loadBeers.bind(this);
    this.searchFinished = this.searchFinished.bind(this);
  }

  loadBeers() {
    fetch(API_ENDPOINT)
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        this.searchFinished(data);
      })
  }

  searchFinished(data) {
    this.setState({
      beers: data
    });
  }

  render() {
    const { beers } = this.state;

    return (
      <div className="max-w-3xl h-full flex flex-col items-center justify-center p-5">
        <h1 className="text-5xl font-semibold mb-6">Punk API</h1>
        {!beers.length && <Button text="Load some beers" handleClick={this.loadBeers} />}
        {beers.length > 0 && <BeerList beers={beers} />}
      </div>
    )
  }
}