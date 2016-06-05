# butler.js - A Voice-Controlled Personal Assistant as a Web Application

## Description

butler.js is a web-based personal assistant application, that is controlled solely by voice interaction 
(via a web browser).

Its modular architecture allows the custom integration of several REST-APIs that allow knowledge retrieval (Wikipedia API), 
weather information, news, translation or routing (Google Maps/Directions API).

butler.js is a web application and therefore OS/platform independent. 

Two example use cases are:

 - Usage your phone by using a that supports speech recognition (e.g. Google Chrome for Android)
 - Usage as a home system (e.g. on a Raspberry Pi equipped with microphones and speakers), so you have an omnipresent assistant in your room(s)

## Usage

butler.js is a stand alone JavaScript web application that can be hosted on every kind of web server.

It is required to use a browser that supports speech recognition (Vanilla Firefox does not work at the moment, please use Google Chrome).
Additional requirements are a permanent internet connection, a microphone (simple & cheap will do it, for using butler.js as a 
home assistant, i.e. installing it in a room, more expensive conference microphones should be used for solid speech 
recognition, even from the distance) and speakers for audio output.

Development is at an early stage, so this document will be extended with new features.
