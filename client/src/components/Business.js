import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export function Business(businessJSON) {
    if (businessJSON.business) {
        return (
            <>
                <div className='row'>
                    <div className='row col-6'>
                        <img src={businessJSON.business.image_url} alt={businessJSON.business.name}></img>
                    </div>
                    <div className='col-6'>
                        <h1>{businessJSON.business.name}</h1>
                        <Router>
                            <Link to='/business'>More Info</Link>
                        </Router>
                    </div>
                </div>
            </>
        );
    } else {
        return (<p>no business found</p>)
    }
};