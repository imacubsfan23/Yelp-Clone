import React, { useState } from 'react';
import BusinessList from './BusinessList.js';

const Search = () => {
    const [searchField, setSearchField] = useState('');
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        fetch(`/api/${searchField}`)
            .then((res) => res.json())
            .then((data) => setData(data.message))
            .catch(e => console.log(e));
    }, [searchField]);

    if (searchField) {
        return (
            <>
                <input
                    type="text"
                    placeholder='Search in Naperville, IL'
                    value={searchField || ''}
                    onChange={(e) => setSearchField(e.target.value)} />
                <BusinessList list={data} />
            </>
        );
    } else {
        return (
            <>
                <h1>Yelp Clone</h1>
                <h2>Type something:</h2>
                <input type="text" placeholder='Search in Naperville, IL' value={searchField || ''} onChange={(e) => setSearchField(e.target.value)} />
            </>
        );
    }
};

export default Search;