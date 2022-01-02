let app = new Vue({
  el: "#app",
  data: { text: "Olá <strong>Mundo</strong>!", name: "Ivanildo Cândido" },
});
let name = new Vue({
  el: "#name",
  data: { name: "Ivanildo Cândido" },
});
let score = new Vue({
  el: "#score",
  data: { score: 5, info: "Parabéns você passou de 5 pontos!" },
});
let list = new Vue({
  el: "#list",
  data: {
    people: [
      { name: "Ivanildo", lastName: "Cândido", age: 34 },
      { name: "Marizelma", lastName: "Aragão", age: 26 },
      { name: "Yann", lastName: "Cândido", age: 9 },
      { name: "Sammya", lastName: "Cândido", age: 11 },
    ],
  },
});
