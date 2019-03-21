import React from 'react';
import SingleBeer from './SingleBeer';

const BeerList = (props) => {
  const { beers } = props;

  return (
    <div className="flex flex-wrap">
      {beers.map(beer => {
        return <SingleBeer key={beer.id} beerData={beer} />
      })}
    </div>
  )
}

export default BeerList;