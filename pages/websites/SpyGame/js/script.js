const locations = [
  "Кухня",
  "Магазин",
  "Стадион",
  "Библиотека",
  "Барбершоп",
  "Музыкальный магазин",
  "Спортзал",
  "Банк",
  "База на Марсе",
  "Овощебаза",
  "Школа",
  "Наркокартель",
  "Помойка",
  "Коллцентр",
  "Бункер",
  "Багажник",
  "Дом анимешника",
  "Шиномонтажка",
  "Метро",
  "Эйфелева башня",
  "Склад обуви",
  "Магазин парфюмерии",
  "Арендованая квартира",
  "Офис",
  "Ангар",
  "Кофейня",
  "Красти-краб",
];
const spy = "Шпион";
const testCardLocation =
  locations[Math.floor(Math.random() * locations.length)];
const players = document.querySelector("#players");
const spyKol = document.querySelector("#spy");
const cardLocation = document.querySelector(".card");
const game = document.querySelector(".game");
const showCard = document.querySelector(".showCard");
const counter = document.querySelector(".counter");
const submit = document.querySelector("#submit");
showCard.innerHTML = "показать карту";

gameStart();
function gameStart() {
  submit.addEventListener("click", () => {
    const array = [];
    for (let i = 0; i < players.value; i++) {
      array.push(testCardLocation);
    }
    for (let i = 0; i < spyKol.value; i++) {
      array[Math.floor(Math.random() * array.length)] = spy;
    }
    if (
      players.value >= 4 &&
      spyKol.value < players.value / 2 &&
      spyKol.value != 0
    ) {
      game.classList.add("active");
    }
    let numberOfCard = 0;
    cardLocation.innerHTML = array[numberOfCard];
    console.log(array[players.value], players.value);
    showCard.addEventListener("click", () => {
      if (players.value > 0) {
        if (showCard.innerHTML == "показать карту") {
          counter.innerHTML = `Игроков осталось: ${players.value - 1}`;
          cardLocation.classList.add("active");
          showCard.innerHTML = "спрятать карту";
          players.value--;
          cardLocation.innerHTML = array[numberOfCard++];
        } else {
          cardLocation.classList.remove("active");
          showCard.innerHTML = "показать карту";
        }
      } else {
        cardLocation.classList.remove("active");
        counter.innerHTML = "Хорошей игры!";
        cardLocation.remove();
        showCard.innerHTML = "Начать заново";
        showCard.addEventListener("click", () => {
          window.location.reload();
        });
      }
    });
  });
}
