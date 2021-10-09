import img from "./img.js";
import Player from "./Player.js";

const canvas = document.createElement("canvas");
document.body.append(canvas);
const ctx = canvas.getContext("2d");
canvas.width = 2000 / 1.5;
canvas.height = 1143 / 1.5;

const background = img("bg.png");
const player = new Player();

function game() {
  ctx.drawImage(background, 0, 0, 2000, 1143, 0, 0, 2000 / 1.5, 1143 / 1.5);
  player.draw(ctx);
}

setInterval(game, 1000 / 60);
