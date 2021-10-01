import React from 'react';
import HeroesList from '../heroes/HeroesList'

const DcScreen = () => {

    const publisher = 'DC Comics'

    return (
        <div className="mt-5">
            <h1>Dc Comics</h1>
            <hr />
            <HeroesList publisher={publisher} />
        </div>
    );
};

export default DcScreen;