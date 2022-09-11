/*
This program parses search request from the url to search the text from the script.jl file
if the given strings are found then the start and end points are returned.
if they are not found then "nothing" is returned
*/

/*
first we have loaded the http and url modules. http module is necessary to create our node.js server and url module is to parse the url from where we will get search string
*/
const http = require('http');
const url = require('url');
const { exec } = require('node:child_process'); //to run the script we need a sub process. the exec command from the child_process module allows the program to create subprocesses and run the script

http
  .createServer(function (req, res) {
    const queryObject = url.parse(req.url, true).query; //here the query part of the url is parsed and stored in the queryobject which is a javascript object
    console.log(queryObject);
    let values = Object.values(queryObject); //here the property values of queryobject is stored in an array which can be passed to the juliascript
    console.log(values);
    exec('julia script.jl ' + values.join(','), (error, stdout, stderr) => { //here the script is executed and three arguments are passed. if the script cannot be executed the error is stored *error*. The output is stored in stdout and errors during script execution is stored in stderror
        if (error) {
          console.error(`exec error: ${error}`);
          return;
        }
        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${stderr}`);
        
        /*
          we have checked here if the script has found any of the query text in the script using regex. The result of search is returned as a string. If a query is found it's starting and ending point are returned. So by checking if the returned string contains any digits we can verify if search was succesful.
        */
        const regex=/\d/; 
        result = stdout.search(regex); //string.search() is built in function to match regex. if it is not matched -1 is returned. the return value is stored in result to check if search was succesful or not
        
        if(result < 0){ 
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.write('<title>Search unsuccessful</title>') 
          res.write('<p>Search <mark>Text</mark> is <mark>not found</mark></p>') //Here we are writing html through the response.write() method to show that the text was not found
          res.end();
        }
        else{
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.write('<title>Search Successful</title>')
          res.write('<p>Search <mark>Text</mark> is <mark>found</mark></p>') //Here we are writing html through the response.write() method to show that the text was found
          res.end();
        }
      });
  })
  .listen(8080);