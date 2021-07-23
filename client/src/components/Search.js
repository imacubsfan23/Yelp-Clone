import React, { useState } from 'react';
import Scroll from './Scroll.js';
import BusinessList from './BusinessList.js';

const Search = () => {
    const [searchField, setSearchField] = useState('');
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        fetch(`/api/${searchField}`)
            .then((res) => res.json())
            .then((data) => setData(data.message))
            .catch(e => setData(e));
    }, [searchField]);

    const onSubmit = (e) => {
        setSearchField(e.target.value);
        e.preventDefault();
    }

    if (searchField) {
        return (
            <>
                <form action="/" method="get" onSubmit={onSubmit} name='search'>
                    <input
                        type="text"
                        placeholder='Search in Naperville, IL'
                        value={searchField || ''}
                        onChange={(e) => setSearchField(e.target.value)}
                        key='search' />
                </form>
                <Scroll>
                    <BusinessList list={data} />
                </Scroll>
            </>
        );
    } else {
        return (
            <>
                <h1>Yelp Clone</h1>
                <h2>Type something:</h2>
                <form action="/" method="get" onSubmit={onSubmit} name='search'>
                    <input type="text" placeholder='Search in Naperville, IL' value={searchField || ''} onChange={(e) => setSearchField(e.target.value)} />
                </form>
            </>
        );
    }
};

export default Search;