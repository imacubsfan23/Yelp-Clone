const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

const yelp = require('yelp-fusion');
const apiKey = '';
const api = yelp.client(apiKey);

const getBusiness = async (query, location = 'naperville') => {
    const searchResults = await api.search({ term: query, location: location });
    return searchResults.jsonBody.businesses[0];
}

const getBusinesses = async (query, location = 'naperville') => {
    const searchResults = await api.search({ term: query, location: location });
    const businessList = [];
    for (b of searchResults.jsonBody.businesses) {
        businessList.push(b);
    }
    return businessList;
}

app.get('/api/business/:alias', async (req, res) => {
    res.json({ message: await getBusiness(req.params.alias) })
})

app.get("/api/:term", async (req, res) => {
    res.json({ message: await getBusinesses(req.params.term) })
});

app.get('*', (req, res) => {
    res.send('404');
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});