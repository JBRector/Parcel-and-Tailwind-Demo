import React from 'react';

const SingleBeer = (props) => {
  const { beerData } = props;

  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 mb-5">
      <div className="border border-black text-center p-3 mb-3">
        <img className="max-h-beer" src={beerData.image_url} alt=""/>
      </div>
      <div className="flex justify-between">
        <p className="text-sm font-semibold pr-3">{beerData.name}</p>
        <p className="text-sm">{beerData.abv}%</p>
      </div>
    </div>
  )
}

export default SingleBeer;