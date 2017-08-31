var translationsEN = {
  HEADLINE: 'What an awesome module!',
  PARAGRAPH: 'Srsly!',
  PASSED_AS_TEXT: 'Hey there! I\'m passed as text value!',
  PASSED_AS_ATTRIBUTE: 'I\'m passed as attribute value, cool ha?',
  PASSED_AS_INTERPOLATION: 'Beginners! I\'m interpolated!',
  VARIABLE_REPLACEMENT: 'Hi {{name}}',
  MISSING_TRANSLATION: 'Oops! I have not been translated into German...',
  BUTTON_LANG_DE: 'German',
  BUTTON_LANG_EN: 'English'
};

var translationsDE= {
  HEADLINE: 'Was für ein großartiges Modul!',
  PARAGRAPH: 'Ernsthaft!',
  PASSED_AS_TEXT: 'Hey! Ich wurde als text übergeben!',
  PASSED_AS_ATTRIBUTE: 'Ich wurde als Attribut übergeben, cool oder?',
  PASSED_AS_INTERPOLATION: 'Anfänger! Ich bin interpoliert!',
  VARIABLE_REPLACEMENT: 'Hi {{name}}',
  // MISSING_TRANSLATION is ... missing :)
  BUTTON_LANG_DE: 'Deutsch',
  BUTTON_LANG_EN: 'Englisch'
};

var app = angular.module('myApp', ['pascalprecht.translate', 'ngCookies']);

app.config(['$translateProvider', function ($translateProvider) {
  // add translation tables
  $translateProvider.translations('en', translationsEN);
  $translateProvider.translations('de', translationsDE);
  // map to handle various values
  $translateProvider.registerAvailableLanguageKeys(['en', 'de'], {
      'en_US': 'en',
      'en_UK': 'en',
      'en-US': 'en',
      'en*': 'en',
      '*': 'en'
  });
  $translateProvider.determinePreferredLanguage(); // via window.navigator
  // $translateProvider.preferredLanguage(ourLocale); // via our own expression
  $translateProvider.fallbackLanguage('en');

  // REMEMBER LANGUAGE ON CLIENT. if no local storage (uses window.localStorage obj), falls back to cookie storage (don't need specify cookie injection or .useCookieStorage method)
  $translateProvider.useLocalStorage(); // don't need inject this dependency
}]);

var ourLocale = window.navigator.language;
console.log(ourLocale);

app.controller('Ctrl', ['$translate', '$scope', function ($translate, $scope) {
  $scope.changeLanguage = function (langKey) {
    $translate.use(langKey);
  };
}]);
