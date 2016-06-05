'use strict';
angular.module('butlerBasic', ['textToSpeechService'])
  .service('butlerBasic', [
    '$http',
    'textToSpeechService',
    function ($http, textToSpeechService) {

      this.helloWorld = function () {
        textToSpeechService.speak('Hello World!');
      };

      this.thankYou = function () {
        textToSpeechService.speak('You\'re welcome!');
      };

      this.tellMeAbout = function (subject) {

        // TODO: Remove obsolete words

        console.log('Looking up information about "' + subject + '"');

        $http({
          method: 'GET',
          url: 'http://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro=&explaintext=&callback=?&titles=' + subject
        }).then(
          function success(response) {
            var data = eval(response.data);
            $.each(data["query"]["pages"], function (k, v) {
              // TODO: Strip extract from obsolete parts (e.g. pronounciation)

              // TODO: Split extract into short sentences & extract functionality to a service

              // 1. Split sentence
              // 2. Iterate through sentences, pausing after each finished sentence

              textToSpeechService.speak(v.extract);
            });
          },
          function error(response) {
            textToSpeechService.speak("Unfortunately, something went wrong with me.");
          });
      };

      this.howLongDoINeedToGetTo = function (destination) {

        // TODO: Map keywords like university, or persons to addresses
        var originalDestinationRequest = destination;

        if (destination === 'University'
          || destination === 'university'
          || destination === 'the University'
          || destination === 'the university') {
          // TODO
          destination = 'Lange G. 20, 90403 Nürnberg';
        } else if( destination === 'Steve' ) {
          destination = 'Pirckheimerstraße 90, 90409 Nürnberg';
        }

        $http({
          method: 'GET',
          url: 'https://maps.googleapis.com/maps/api/directions/json?language=en&origin=Flachsröststraße,Nürnberg,Bayern&destination=' + destination + '&key=AIzaSyDqXkya10APhUiHWD5PWFuV6Yx0QV4m_b4'
        }).then(
          function success(response) {
            // response.data.routes[0].legs[0]["end_address"];

            textToSpeechService.speak("To " + originalDestinationRequest + ", you will currently need " + response.data.routes[0].legs[0]["duration"].text);
          },
          function error(response) {
            textToSpeechService.speak("Unfortunately, something went wrong with me.");
          });

      }

      this.wakeMeUpIn = function (minutes) {
        textToSpeechService.speak('Ok, I will wake you up in ' + minutes + ' minutes.')

        // TODO
        setTimeout(function () {
          textToSpeechService.speak('Hey! Wake up!');
        }, minutes * 60 * 1000);
      }

      this.remindMe = function (minutes) {
        textToSpeechService.speak('Ok, I will remind you in ' + minutes + ' minutes.')

        // TODO
        setTimeout(function () {
          textToSpeechService.speak('Hey! I should remind you about something.');
        }, minutes * 60 * 1000);
      }

      this.remindMeAbout = function (topic) {
        textToSpeechService.speak('Ok, I will remind you about ' + topic)

        // TODO
        setTimeout(function () {
          textToSpeechService.speak('Hey! I should remind you about ' + topic + '. Should I remind you again?')
        }, 1 * 60 * 1000);
      }

      this.howIsTheWeather = function (location) {

        if (location) {
          console.log('Location set');
        } else {
          console.log('Location not set');
        }

      }

    }]);
