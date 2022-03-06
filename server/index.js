const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

const yelp = require('yelp-fusion');
const apiKey = 'TbOeWHkKg-FRNhZMTcK4vld0w0l0DnjzEHr8x9Gj3qm3F9yOI9TLRIuEs4-GDr1T8wSXUVXGimIzYHGAsbKF2gGt7iibSPduKdsgMxf_7GYtZGcs9FqdQf5XPTX7YHYx';
const api = yelp.client(apiKey);

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

app.get("/api/:term", async (req, res) => {
    res.json({ message: await getBusinesses(req.params.term) })
});

app.get('*', (req, res) => {
    res.send('404');
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});