# Yelp-Clone
A simple clone of Yelp using the Yelp Fusion API

* Front End: React.js, Bootstrap
* Back End: Express.js

## Setup

* Create an account with yelp [here](https://www.yelp.com/signup)
* [Follow the instructions here to get started with the Fusion API](https://www.yelp.com/developers/documentation/v3/get_started)
* Clone this repository
* With your favorite editor, find the file `server/index.js` and change the `apiKey` variable to the api key you received from yelp.
* In your terminal, cd into the "yelp-clone" Repository
* Open two terminal windows in the yelp-clone repo
* In the first terminal, while in the root folder, run `npm install`, then `node server/index.js`
* In the second terminal, change directories into the client folder with `cd client`
* While still in the 2nd terminal, run `npm install`, then `npm start`
* Go into your browser and visit `localhost:3000`

## Original Task

Create a two-page application using the Yelp Fusion API.

1. On the first page, you should be able to search for businesses in Naperville, IL.
2. When you select a result, it should take you to a second page where you can see details about the business.

## Purpose

The purpose of this exercise is to give you a chance to show us your ability to code. We will be looking at how you handle making requests to an API, as well as how you handle the JSON responses. We will also be looking for basic understanding of React components, and for proficiency in javascript (usage of ES6 features is encouraged).

## Yelp Fusion API

Documentation on API usage can be found [here](https://www.yelp.com/developers/documentation/v3). For this application, I used the `Search API` and the `Business API`.