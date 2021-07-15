// index.js

/**
 * Required External Modules
 * 
 */
 const cors = require("cors");
const express = require("express");
var bodyParser = require("body-parser");
const dotenv = require('dotenv');
const multer = require('multer');
const fs = require("fs");

const morgan = require("morgan");
const mongoose = require("mongoose"); // Require mongoose library
//require("dotenv").config();   // Require the dotenv
var ObjectId = require('mongodb').ObjectID;

var corsOptions = {
	origin: "http://localhost:4200"
  };



/**
 * App Variables
 */

/**
 *  App Configuration
 */

 const app = express();
 const port = process.env.PORT || "8080";

/**
 * Server Activation
 */
app.listen(port, () => {
console.log(`Listening to requests on http://localhost:${port}`);
});

/**
 * Routes Definitions
 */
app.get("/", (req, res) => {
res.status(200).send("WHATABYTE: Food For Devs");
});

  
app.use(cors(corsOptions));


  // for parsing application/json
app.use(bodyParser.json());

// for parsing application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({
	extended: true
}));

app.use(morgan("dev")); //enable incoming request logging in dev mode

//*********************************logger addition ***************************/
// date and time for util
var date_ob = new Date();
// adjust 0 before single digit date
let date = ("0" + date_ob.getDate()).slice(-2);

// current month
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

// current year
let year = date_ob.getFullYear();

// current hours
let hours = date_ob.getHours();

// current minutes
let minutes = date_ob.getMinutes();

// current seconds
let seconds = date_ob.getSeconds();

const myLoggers = require('log4js');

myLoggers.configure({
	appenders: {
		mylogger: {
			type: "file",
			filename: "logs/serverlogs_"+ year + "-" + month + "-" + date+".txt"
		}
	},
	categories: {
		default: {
			appenders: ["mylogger"],
			level: "ALL"
		}
	}
});
const logger = myLoggers.getLogger("default");

// ****************************************************initial declaration state**********************************************************//
const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, './public/uploads/');
	},
	filename: function (req, file, cb) {
		logger.info("file object --------------",file)
		cb(null, file.originalname);
	}
});

var upload = multer({ storage: storage })


//*******************************  checking server is running or not ****************// 
// var dbURI = "mongodb://localhost:27017/digiboat";
// //var dbURI = "mongodb://root:root@139.59.0.106:27017/gbi_db";

// mongoose.connect(dbURI, {
// 	useNewUrlParser: true,
// 	useUnifiedTopology: true
// })
// mongoDB_options = {
// 	useNewUrlParser: true,
// 	useUnifiedTopology: true
// }
// const db = mongoose.connection

// db.on("error", (err) => {
// 	logger.debug(err)
// })
// db.once("open", () => {
// 	logger.info("DB started successfully")
// })


function logRequest(req, res, next) {
	logger.info(req.url)
	next()
}
app.use(logRequest)


app.get('/files',(req, res) => {
	const directoryPath = "./public/uploads/";
	console.log("directoryPath-------------",directoryPath)
	fs.readdir(directoryPath, function (err, files) {
	  if (err) {
		res.status(500).send({
		  message: "Unable to scan files!",
		});
	  }
	  baseUrl = 'http://localhost:8080';
	  let fileInfos = [];
  
	  files.forEach((file) => {
		fileInfos.push({
		  name: file,
		  url: baseUrl + file,
		});
	  });
  
	  res.status(200).send(fileInfos);
	});
  });

app.post('/upload',upload.array('file'),(req, res) => {
	console.log("req files----------",req.files)
	return res.status(200).send({
		statusCode: 0,
		message: "files uploaded successfully"
	});
  });
  
