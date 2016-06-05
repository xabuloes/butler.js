'use strict';
angular.module('textToSpeechService', [])
  .factory('textToSpeechService', ['$timeout', '$q', function ($timeout, $q) {
    var ready = false;
    var readyCallback;
    responsiveVoice.OnVoiceReady = function () {
      if (ready === false) {
        if (readyCallback !== undefined) {
          readyCallback.call();
        }
        ready = true;
      }
    }
    return {
      // TODO: Make this private?
      _customActionCallbackBeforeSpeaking: function (text) {
        console.log("Called default action callback before speaking.")
      },
      _customActionCallbackAfterSpeaking: function (text) {
        console.log("Called default action callback after speaking.")
      },
      isReady: function () {
        return ready;
      },
      onVoiceReady: function (callback) {
        readyCallback = callback;
      },
      // TODO: Make default voice configurable
      // TODO: Make custom action callback configurable
      setCustomActionBeforeSpeaking: function (customActionCallback) {
        this._customActionCallbackBeforeSpeaking = customActionCallback;
      },
      setCustomActionAfterSpeaking: function (customActionCallback) {
        this._customActionCallbackAfterSpeaking = customActionCallback;
      },
      speak: function (text, options) {
        var q = $q.defer();

        if (options === undefined) {
          options = {};
        }
        if (options.voice === undefined) {
          options.voice = 'UK English Male';
        }

        this._customActionCallbackBeforeSpeaking(text);

        (function (_customActionCallbackAfterSpeaking, text) {
          options.onend = function () {

            _customActionCallbackAfterSpeaking(text);

            q.resolve();
          }
        }(this._customActionCallbackAfterSpeaking, text));

        $timeout(function () {
          try {
            responsiveVoice.speak(text, options.voice, options);
          } catch (err) {
            q.reject(err);
          }
        }, 1);
        return q.promise;
      },
      cancel: function () {
        responsiveVoice.cancel();
      }
    }
  }]);
