import React from 'react';
import HeroesList from '../heroes/HeroesList';

const MarvelScreen = () => {

    const publisher = 'Marvel Comics'

    return (
        <div className="mt-5">
            <h1>Marvel</h1>
            <hr />
            <HeroesList publisher={publisher} />
        </div>
    );
};

export default MarvelScreen;