'use strict';
var WIZARDS_QUANTITY = 4;

var showSetup = document.querySelector('.setup');
showSetup.classList.remove('hidden');

var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];

var getRandomInRange = function (array) {
  var min = 0;
  var max = array.length - 1;
  var index = Math.floor(Math.random() * (max - min + 1)) + min;
  return array[index];
};

var randomWizard = function () {
  var wizard = {
    name: getRandomInRange(names),
    surname: getRandomInRange(surnames),
    coatColor: getRandomInRange(coatColors),
    eyesColor: getRandomInRange(eyesColors)
  };
  return wizard;
};

var wizardsInHtml = function (similarWizard, fragment, counterOfWizards) {
  for (var i = 0; i < counterOfWizards; i++) {
    var wizard = randomWizard();
    var wizardElement = similarWizard.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name + ' ' + wizard.surname;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
    fragment.appendChild(wizardElement);
  }
  return fragment;
};

var similarWizard = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var fragment = document.createDocumentFragment();
var listOfWizards = document.querySelector('.setup-similar-list');
listOfWizards.appendChild(wizardsInHtml(similarWizard, fragment, WIZARDS_QUANTITY));
var listContainer = document.querySelector('.setup-similar');
listContainer.classList.remove('hidden');
