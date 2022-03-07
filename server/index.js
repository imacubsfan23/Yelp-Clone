const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

const yelp = require('yelp-fusion');
const apiKey = $yelp_api_key;
const api = yelp.client(apiKey);
const path = require('path');

const getBusiness = async (query) => {
    const searchResults = await api.search({ term: query, location: 'naperville' });
    return searchResults.jsonBody.businesses[0];
}

const getBusinesses = async (query) => {
    const searchResults = await api.search({ term: query, location: 'naperville' });
    const businessList = [];
    for (b of searchResults.jsonBody.businesses) {
        businessList.push(b);
    }
    return businessList;
}

app.get('/api/business/:alias', async (req, res) => {
    res.json({ message: await getBusiness(req.params.alias) })
})

app.get('/api/:term', async (req, res) => {
    res.json({ message: await getBusinesses(req.params.term) })
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.use(express.static(path.join(__dirname, '../client/build')));

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});