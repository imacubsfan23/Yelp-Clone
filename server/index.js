const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

const yelp = require('yelp-fusion');
const apiKey = 'Zjult5INDvWT3BpD-_S52coL7OBZQ4X7Xhe4-vgSj96XpuOlH2wH6yOP3FHsVUuHtvwWNSZU2mJ3a7KfyFu_nwnTg-_Yoa8sHH9ECmBUiJWTD5EI2X0g1sKZmyb6YHYx';
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