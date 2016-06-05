'use strict';
angular.module('butlerjsApp')
  .controller('MainCtrl', function ($scope, textToSpeechService, butlerBasic) {

    function init() {
      $scope.awaitingVoiceInput = true;
      $scope.currentOutput = "";
      $scope.$apply();
    }

    textToSpeechService.onVoiceReady(function () {
      init();

      textToSpeechService.setCustomActionBeforeSpeaking(function (text) {
        $scope.awaitingVoiceInput = false;
        $scope.currentOutput = text;
        //$scope.$apply();
      });

      textToSpeechService.setCustomActionAfterSpeaking(function (text) {
        $scope.awaitingVoiceInput = true;
        $scope.currentOutput = "";
        $scope.$apply();
      });

      // TODO: This has to be in a separate configuration file
      var commands = {
        // ===== Smalltalk =====
        'Hello World': butlerBasic.helloWorld,
        'Hi (there)!': '',
        'How are you (doing)?': '',
        'Thank you (very much)': butlerBasic.thankYou,
        'Thanks': butlerBasic.thankYou,

        // ===== Butler Basics =====
        // TODO: Wiki auf Deutsch vorlesen?
        '(Can you) Tell me (something) about *subject': butlerBasic.tellMeAbout,
        'How long do I need (to get) to *destination': butlerBasic.howLongDoINeedToGetTo,
        'How is the weather in *location?': butlerBasic.howIsTheWeather,
        'Wake me (up) in :minutes (minutes)': butlerBasic.wakeMeUpIn,
        'Remind me in :minutes (minutes)': butlerBasic.remindMe,
        'Remind me about *topic': butlerBasic.remindMeAbout,

        // TODO: Wetter API
        // ===== News =====
        // TODO: Nachrichten vorlesen
        // ===== Translation =====
        // TODO: Translate to german
        'Stop': function () {
          console.log('Canceling speech.');
          textToSpeechService.cancel();
        },
      };

      // TODO: Put personal data in configuration file

      annyang.addCommands(commands);
      annyang.start();

    });


  });
