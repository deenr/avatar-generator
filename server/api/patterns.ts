import { defineEventHandler } from 'h3'

export default defineEventHandler(() => {
  return [
    { id: "dots", name: "Dots" },
    { id: "lines", name: "Lines" },
    { id: "checkers", name: "Checkers" },
    { id: "circles", name: "Circles" },
    { id: "tic-tac-toe", name: "Tic Tac Toe" },
    { id: "waves", name: "Waves" },
    { id: "zigzag", name: "Zigzag" },
    { id: "grid", name: "Grid" },
    { id: "crosses", name: "Crosses" },
    { id: "diagonal-lines", name: "Diagonal Lines" },
  ]
})
