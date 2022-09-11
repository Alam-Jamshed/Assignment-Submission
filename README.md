
# Project Title And Description

A search program

This program is for searching a julia script file from a Node.js server and showing the output in a browser.


## Deployment

To run this program Node.js and Julia must be installed first.

Download Links: Node.js: https://nodejs.org/en/download/
Julia: https://julialang.org/downloads/

To run the program:

1. Download the project files in a folder.
2. Open CMD in the directory
3. Run the node server by using the following command on cmd: node node_server.js
4. Run the query on a webbrowser using this url: http://localhost:8080/?queryParam= **write your query here**.  example: localhost:8080/?queryParam=known



## Changes

1. Added comments to the node_server.js file to better understand the work
2. Changed the search result from output to a message that informs user if search was successful or not




## Future Work

1. Show user exactly which queries were found in the paragraph and which were not. This can be done by splitting the result from the script file and matching with given query.
## Screenshots

Code:
![Code](https://i.postimg.cc/BbRg7WCY/Screenshot-2022-09-11-114217.png)

**Output 1**
![output1](https://i.postimg.cc/L8KDzp5h/Screenshot-2022-09-11-114211.png)

**Output 2**
![output2](https://i.postimg.cc/g2VDsTLs/Screenshot-2022-09-11-114207.png)