const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// middleware
app.use(bodyParser.json());
app.use(cors());

const api = require('./routes/api');

app.use('/api/v1', api);

// handle production
if(process.env.NODE_ENV === 'production')
{
	// Static folder
	app.use(express.static(__dirname+ '/public/'));

	// Handle Spa
	app.get(/.*/, (req, res)=>{
		res.sendFile(__dirname+ '/public/index.html')
	})
}

const port = process.env.PORT || 5000;

app.listen(port, ()=> console.log(`Server started on port ${port}`));