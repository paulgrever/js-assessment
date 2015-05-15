exports = (typeof window === 'undefined') ? global : window;

exports.modulesAnswers = {
  createModule : function(str1, str2) {
    var module = {
      name : str2,
      greeting : str1,
      sayIt : function(){
        return this.greeting + ', ' + this.name; 
      }
    };
    return module;
  }
};
