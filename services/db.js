const AWS = require('aws-sdk');
AWS.config.setPromisesDependency(require('bluebird'));

const dbClient = new AWS.DynamoDB.DocumentClient();

module.exports = dbClient;
