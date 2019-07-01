const express = require('express');
const request = require('request');
const router = express.Router();
const {getGif, loadMoreGif} = require('../config/gif')(request);


/**
* Get gif data
*/

router.get('/', (req, res)=>{
	getGif('G',(error, body)=>{
		res.send(body);
		return;
	});
});

router.get('/:totalCount', (req, res)=>{
	loadMoreGif(req.params.totalCount, 'G',(error, body)=>{
		res.send(body);
		return;
	});
});

module.exports = router