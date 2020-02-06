
'use strict';
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 16;
var BAR_GAP = 50;
var TEXT_WIDTH = 50;
var BAR_HEIGHT = 150;
var barWidth = 40;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = 'PT Mono 16px';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', CLOUD_X + GAP + CLOUD_WIDTH / 4, CLOUD_Y + GAP);
  ctx.fillText('Список результатов:', CLOUD_X + GAP + CLOUD_WIDTH / 5, CLOUD_Y + GAP + FONT_GAP);
  var textHeight = CLOUD_Y + GAP + FONT_GAP + GAP;
  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(players[i], CLOUD_X + GAP + i * (BAR_GAP + TEXT_WIDTH), CLOUD_Y + BAR_HEIGHT + GAP + FONT_GAP * 3);

    var string = 'hsl(210,' + Math.random() * 100 + '%,50%)';
    ctx.fillStyle = string;
    if (players[i] === 'Вы') {
      ctx.fillStyle = '#f00';
    }
    var height = (BAR_HEIGHT * times[i]) / maxTime;
    var y = 0;
    if (height < BAR_HEIGHT) {
      y = BAR_HEIGHT - height;
    }
    ctx.fillText(Math.round(times[i]), CLOUD_X + GAP + i * (BAR_GAP + TEXT_WIDTH), textHeight + y + GAP/2);
    ctx.fillRect(CLOUD_X + GAP + i * (BAR_GAP + TEXT_WIDTH), CLOUD_Y + textHeight + y + GAP, barWidth, height);
  }
};
