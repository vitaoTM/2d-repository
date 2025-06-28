import { scaleFactor } from "./constant.js";
import { k } from "./kaboomCtx.js"

k.loadSprite("spritesheet", "./spritesheet.png", {
  sliceX: 67,
  sliceY: 21,
  anims: {
    "idle-down": 3348,
    "walk-down": { from: 3348, to: 3350, loop: true, speed: 8 },
    "idle-side": 3356,
    "side-walk": { from: 3356, to: 3357, loop: true, speed: 8 },
    "idle-up": 3351,
    "up-walk": { from: 3351, to: 3353, loop: true, speed: 8 }
  },
});

k.loadSprite("map", "./map.png");

k.setBackground(k.Color.fromHex("#311047"));

k.scene("main", async () => {
  const mapData = await (await fetch("./map.json")).json();
  const layers = mapData.layers;
  const map = k.make([
    k.sprite("map"),
    k.pos(0),
    k.scale(scaleFactor)
  ])
  const player = k.make([
    k.sprite("spritesheet",
    { anim: "idle-down" }),
    k.area({
      shape: new k.Rect(k.vec2(0, 3), 10, 10),
    }),
    k.body(),
    k.anchor("center"),
    k.pos(),
    k.scale(scaleFactor),
    {
      speed: 250,
      direction: "down",
      isInDialogue: false,
    },
    "player",
  ]);

  for (const layer of layers) {
    if (layer.name === "border") {
      for (const boundary of layer.objects) {
        map.add([
          k.area({
            shape: new k.Rect(k.vec2(0), boundary.width, boundary.height),
          }),
          k.body({ isStatic: true }),
          k.pos(boundary.x, boundary.y),
          boundary.name,
        ]);
        if (boundary.name) {
          player.onCollide(boundary.name, () => {
            player.isInDialogue = true;
            // to do
          });
        }
      }
    }
  }
});

 k.go("main")
// import './style.css'
// import javascriptLogo from './javascript.svg'
// import viteLogo from '/vite.svg'
// import { setupCounter } from './counter.js'

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vite.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `

// setupCounter(document.querySelector('#counter'))
