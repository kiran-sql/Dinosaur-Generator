const express = require('express');
const app = express();
const port = 3000;
const fetch = require('node-fetch')
app.use(express.static("public"));
require('dotenv').config();

const apiKey = process.env.API_KEY;

app.listen(port, () => {
 console.log("listening to port "+ port);
});

app.get('/dinoname',async (request, response) => {
 const dinoResponse = await fetch("https://alexnormand-dino-ipsum.p.rapidapi.com/?paragraphs=1&words=2&format=json", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "alexnormand-dino-ipsum.p.rapidapi.com",
		"x-rapidapi-key": apiKey
	}
});
const data = await dinoResponse.json();
console.log(data);
response.json(data);
});

app.get('/dinoimage',async (request,response) => {
 const dinoImage = await fetch("https://bing-image-search1.p.rapidapi.com/images/search?q=dinosaur&count=30", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "bing-image-search1.p.rapidapi.com",
		"x-rapidapi-key": apiKey
	}
});
 const image = await dinoImage.json();
 response.json(image)
})
