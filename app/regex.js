exports = (typeof window === 'undefined') ? global : window;

exports.regexAnswers = {
  containsNumber : function(str) {
    var results = /\d/.test(str);
    return results;
  },

  containsRepeatingLetter : function(str) {
    var results = /([A-Za-z])\1/.test(str);
    return results;
  },

  endsWithVowel : function(str) {

  },

  captureThreeNumbers : function(str) {

  },

  matchesPattern : function(str) {

  },
  isUSD : function(str) {

  }
};
