import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const Business = (businessJSON) => {
    const b = businessJSON.business;

    if (b) {
        return (
            <>
                <div className='row'>
                    <div className='row col-6' >
                        <img className='photo' src={b.image_url} alt={b.name}></img>
                    </div>
                    <div className='col-6'>
                        <h1>{b.name}</h1>
                        <Link to={'/business/' + b.alias}>More Info</Link>
                    </div>
                </div>
            </>
        );
    }
    return;
};

export default Business;