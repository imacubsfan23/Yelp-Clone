import React from 'react';

export default function BusinessLandingPage(alias) {
    if (alias) {
        return (
            <>
                <div className='row'>
                    <p>{`${alias}`}</p>
                </div>
            </>
        );
    } else {
        return 'no business landing page';
    }
};