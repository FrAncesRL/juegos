# 🕹️ ARCADE RETRO

Homepage estilo arcade viejita con 4 juegos clásicos jugables en HTML + CSS + JS vanilla. Sin dependencias.

## 🎮 Jugar

Abre `index.html` en tu navegador (doble clic) y pica una cabina:

- **GATO** → `games/gato.html` — 3 en raya, VS CPU o 2 jugadores
- **TETRIS** → `games/tetris.html` — apila, limpia líneas, sube de nivel
- **SNAKE** → `games/snake.html` — come, crece, no choques
- **PONG** → `games/pong.html` — tú vs CPU, primero a 5 gana

Cada juego tiene botón `← VOLVER` a la homepage.

## 📁 Estructura

```
juegos/
  index.html
  css/arcade.css      # único CSS global (tema CRT + neón)
  js/main.js          # efectos homepage, records, sonido 8-bit
  games/
    gato.html + gato.js
    tetris.html + tetris.js
    snake.html + snake.js
    pong.html + pong.js
```

## 🕹️ Controles

- Homepage: clic o `← → + ENTER`
- Gato: clic / tap
- Tetris: `◀ ▶` mover · `▼` bajar · `▲` rotar · `ESPACIO` caer · `P` pausa
- Snake: `WASD / flechas` + botones táctiles en móvil
- Pong: `W / S` o mouse

## ✨ Toque arcade

Fuente `Press Start 2P`, neón rosa/cian/verde/amarillo, scanlines CRT, flicker `INSERT COIN`, sonidos square-wave con WebAudio, records en `localStorage` (`hi-tetris`, `hi-snake`, `hi-gato`, `hi-pong`).

## 🚀 Publicar

Arrastra la carpeta a Netlify / Vercel / GitHub Pages. No requiere build.
