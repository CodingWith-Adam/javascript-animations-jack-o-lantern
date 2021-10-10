import img from "./img.js";
import Player from "./Player.js";

const canvas = document.querySelector("canvas");

const ctx = canvas.getContext("2d");
canvas.width = 2000 / 2;
canvas.height = 1143 / 2;

const background = img("BG.png");
const player = new Player();

function game() {
  ctx.drawImage(background, 0, 0, 2000, 1143, 0, 0, 2000 / 2, 1143 / 2);
  player.draw(ctx);
}

setInterval(game, 1000 / 60);
