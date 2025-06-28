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
