# butler.js - A Voice-Controlled Personal Assistant as a Web Application

## Description

butler.js is a web-based personal assistant application, that is controlled solely by voice interaction 
(via a web browser).

Its modular architecture allows the custom integration of several REST-APIs that allow knowledge retrieval (Wikipedia API), 
weather information, news, translation or routing (Google Maps/Directions API).

butler.js is a web application and therefore OS/platform independent. 

Two example use cases are:

 - Usage on your phone by using a that supports speech recognition (e.g. Google Chrome for Android)
 - Usage as a stationary home system (e.g. on a Raspberry Pi equipped with microphones and speakers), so you have an omnipresent assistant in your room(s)

## Compatibility

It is required to use a browser that supports speech recognition (Vanilla Firefox does not work at the moment, please use Google Chrome).
Additional requirements are a permanent internet connection, a microphone (simple & cheap will do it, for using butler.js as a 
home assistant, i.e. installing it in a room, more expensive conference microphones should be used for solid speech 
recognition, even from the distance) and speakers for audio output.

At the moment, there are CORS problems with certain commands (e.g. "How long do I need to get to (destination)?", which is using the Google Directions API), 
so you need to configure your browser's CORS behaviour to allow all REST retrievals (for Chrome use [this](https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi)).

## Usage

butler.js is a stand alone JavaScript web application that can be hosted on every kind of web server.

For using it, checkout the master branch and follow the instructions above:


Install node & bower dependencies:

```
$ npm install && bower install
```


Run testing environment (via Grunt)

```
$ grunt serve
```

This will start a local web server on port 9000. Retrieve http://localhost:9000/ 
with a compatible browser (see section Compatibility) and you should see a "Waiting for voice input" message.

Now say "Hello World!".


## Commands

TODO: A list of speech commands can be found here later.


Development is at an early stage, so some basic modules will be implemented soon.

