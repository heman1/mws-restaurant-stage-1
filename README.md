# mws-restaurant-stage-1
The project is a Restaurant Reviews App that meets accessibility standards and provides a responsive user experience.
It is designed to be responsive on different sized displays and accessible for screen reader use.

It is a dynamic app that communicates with a backend server and handles asynchronous requests which meets performance standards.
It also leverage offline capabilities with service worker and indexedDb.

### Development local API Server
_Location of server = /server_
Server depends on [node.js LTS Version: v6.11.2 ](https://nodejs.org/en/download/), [npm](https://www.npmjs.com/get-npm), and [sails.js](http://sailsjs.com/)
Please make sure you have these installed before proceeding forward.

# Prerequisite
* nodejs
* python
* gulp
* babel

# Installation
* clone the server repo from [here](https://github.com/heman1/mws-restaurant-stage-2)
 >For Server
  ###### Install project dependancies
  ```Install project dependancies
  # npm i
  ```
  ###### Install Sails.js globally
  ```Install sails global
  # npm i sails -g
  ```
  ###### Start the server
  ```Start server
  # node server
  ```
 >For Client
  ###### Install project dependencies
  ```Install project dependencies
  # npm install
  ```
  ###### Run gulp(optional, to get production code)
  ```Run gulp(optional, to get production code)
  # gulp
  ```
  ###### Run local server
  ``` Run local server
  # python -m http.server 1337
  ```
