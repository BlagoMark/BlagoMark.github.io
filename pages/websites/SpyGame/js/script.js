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
  "Психбольница",
  "Планетарий",
  "Икея",
  "Зал с игровыми автоматами",
  "Бассейн",
  "Музей",
  "Студия звукозаписи",
  "Магазин игрушек",
  "Детский сад",
  "Баня",
  "Палатка",
  "Кабинет директора",
  "Отель",
  "Подводная лодка",
  "Казино",
  "Шпионская база",
  "Необитаемый остров",
  "Шахта",
  "Деревня",
  "Столовая",
  "Пещера",
  "Аэропорт",
  "Цирк",
  "Чердак",
  "Зоопарк",
  "Секонд-хенд",
  "Аптека",
  "Завод",
  "Велотрек",
  "Скейтпарк",
  "Кинотеатр",
  "Космодром",
  "Автозаправка",
  "Аквапарк",
  "Почта",
  "Яхта",
  "Полицейский участок",
  "Поезд",
  "Джунгли",
  "Пустыня",
  "Диснейленд",
  "Городская канализция",
  "Заброшенный дом",
  "Сцена",
  "Конюшня",
  "Эверест",
  "Кондитерская",
  "Театр",
  "Вулкан",
  "Пляж",
];
const spy = "Шпион";
const testCardLocation =
  locations[Math.floor(Math.random() * locations.length)];
const players = document.querySelector("#players");
const spyKol = document.querySelector("#spy");
const cardLocation = document.querySelector(".card");
const menu = document.querySelector(".menu");
const game = document.querySelector(".game");
const showCard = document.querySelector(".showCard");
const counter = document.querySelector(".counter");
const submit = document.querySelector("#submit");
const rules = document.querySelector("#rules");
const back = document.querySelector("#back");
const rulesPage = document.querySelector(".rules");
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
      players.value >= 3 &&
      spyKol.value <= players.value / 3 &&
      spyKol.value != 0 &&
      players.value <= 20
    ) {
      menu.classList.remove("active");
      game.classList.add("active");
    } else {
      window.location.reload();
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
        showCard.innerHTML = "Сыграть снова";
        showCard.addEventListener("click", () => {
          window.location.reload();
        });
      }
    });
  });
  rules.addEventListener("click", () => {
    menu.classList.remove("active");
    rulesPage.classList.add("active");
  });
  back.addEventListener("click", () => {
    menu.classList.add("active");
    rulesPage.classList.remove("active");
  });
}
