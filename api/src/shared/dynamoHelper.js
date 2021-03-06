var aws = require('aws-sdk');
var bluebird = require('bluebird');

var ddb = new aws.DynamoDB(
  {
    region: "us-east-1",
  });

var promiseDDB = bluebird.promisifyAll(ddb);

module.exports = promiseDDB;
