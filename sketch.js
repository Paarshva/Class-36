var player, game, dataase, playerCount;
var form;
var gameState = 0

function setup(){
 
  
  createCanvas(500,500);
  database = firebase.database();
  game = new Game()
  game.getState()
  game.start()
}

function draw(){
  background("white");
  }