import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import BusinessList from './BusinessList.js';
import BusinessLandingPage from './BusinessLandingPage.js';

const Search = () => {
    const [searchField, setSearchField] = useState('');
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        fetch(`/api/${searchField}`)
            .then((res) => res.json())
            .then((data) => setData(data.message))
            .catch(e => console.log(e));
    }, [searchField]);

    return (
        <>
            <Switch>
                <Route exact path='/'>
                    <input
                        type="text"
                        placeholder='Search in Naperville, IL'
                        value={searchField || ''}
                        onChange={(e) => setSearchField(e.target.value)} />
                    <BusinessList list={data} />
                </Route>
                <Route path='/business/:alias'>
                    <BusinessLandingPage query='burger' />
                </Route>
            </Switch>
        </>
    );
};

export default Search;