const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;

const yelp = require('yelp-fusion');
const apiKey = 'Q4jCHFdYMNkEe05QCQJPfVpRzraLZ50oDWWntSJVjHgRM_kHPgTzJUTC6ejjCPb6MkgcEAD3p8MprCVXPNqfamg3fVOfrVrLIhFx3Slo0jN-ABNKqWS8OlaGjrT1YHYx';
const api = yelp.client(apiKey);

const getBusinesses = async (query) => {
    const searchResults = await api.search({ term: query, location: 'naperville' });
    const businessList = [];
    for (b of searchResults.jsonBody.businesses) {
        businessList.push(b);
    }
    return businessList;
}

app.get("/api", async (req, res) => {
    res.json({ message: await getBusinesses('burger', alias = req.params.query) })
});

app.get('*', (req, res) => {
    res.send('404');
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});