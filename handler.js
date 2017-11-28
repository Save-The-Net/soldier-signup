'use strict';
const AWS = require('aws-sdk');
let lambda = new AWS.Lambda({ apiVersion: '2015-03-31' });

module.exports.signupSoldier = (event, context, callback) => {

    var params = {
        Code: {
            S3Bucket: "hello-lambda0",
            S3Key: "test-function.zip"
        },
        Description: "",
        FunctionName: "hello",
        Handler: "handler.hello", // is of the form of the name of your source file and then name of your function handler
        MemorySize: 128,
        Publish: true,
        Role: "arn:aws:iam::420906024005:role/NetNeutrality", // replace with the actual arn of the execution role you created
        Runtime: "nodejs4.3",
        Timeout: 15,
        VpcConfig: {}
    };
    lambda.createFunction(params, function(err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        else console.log(data); // successful response
        /*
        data = {
         CodeSha256: "", 
         CodeSize: 123, 
         Description: "", 
         FunctionArn: "arn:aws:lambda:us-west-2:123456789012:function:MyFunction", 
         FunctionName: "MyFunction", 
         Handler: "source_file.handler_name", 
         LastModified: "2016-11-21T19:49:20.006+0000", 
         MemorySize: 128, 
         Role: "arn:aws:iam::123456789012:role/service-role/role-name", 
         Runtime: "nodejs4.3", 
         Timeout: 123, 
         Version: "1", 
         VpcConfig: {
         }
        }
        */
    });



};