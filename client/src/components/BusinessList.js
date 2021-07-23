import React from 'react';
import Business from './Business.js';

export default function BusinessList(data) {
    if (data.list) {
        return (
            <div className='container'>
                {data.list.slice(0, 5).map((b) => <Business business={b} key={b.id} />)}
            </div>
        );
    }
    return ('Type something');

};