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
    var results = /[aeiouAEIOU]$/.test(str);
    return results;
  },

  captureThreeNumbers : function(str) {
    var regex = /\d{3}/;
    if (/\d{3}/.test(str)){
      var match = regex.exec(str);
      return match[0];
    } else {
      return false;
    }
  },

  matchesPattern : function(str) {
    var results = /^\d{3}-\d{3}-\d{4}$/.test(str);
    return results;
  },
  isUSD : function(str) {
    var results = /^$ /.test(str);
  }
};
