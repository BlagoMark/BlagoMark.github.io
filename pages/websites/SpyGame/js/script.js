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
const cardLocation = document.querySelector(".card");
const btnClick = document.querySelector("#btn-click");
const menu = document.querySelector(".menu");
const game = document.querySelector(".game");
const showCard = document.querySelector(".showCard");
const counter = document.querySelector(".counter");
const submit = document.querySelector("#submit");
const rules = document.querySelector("#rules");
const back = document.querySelector("#back");
const rulesPage = document.querySelector(".rules");
let players = document.querySelector("#players");
let spyKol = document.querySelector("#spy");
showCard.innerHTML = "показать карту";

gameStart();

function gameStart() {
  menu.classList.add("active");
  game.classList.remove("active");
  submit.addEventListener("click", () => {
    document.querySelector("audio").play();
    let players1 = players.value;
    let spyKol1 = spyKol.value;
    const array = [];
    for (let i = 0; i < players1; i++) {
      array.push(testCardLocation);
    }
    for (let i = 0; i < spyKol1; i++) {
      array[Math.floor(Math.random() * array.length)] = spy;
    }
    if (
      players1 >= 3 &&
      spyKol1 <= players1 / 3 &&
      spyKol1 != 0 &&
      players1 <= 20
    ) {
      menu.classList.remove("active");
      game.classList.add("active");
    } else {
      window.location.reload();
    }
    let numberOfCard = 0;
    cardLocation.innerHTML = array[numberOfCard];
    console.log(array[players1], players1);
    showCard.addEventListener("click", () => {
      document.querySelector("audio").play();
      if (players1 > 0) {
        if (showCard.innerHTML == "показать карту") {
          counter.innerHTML = `Игроков осталось: ${players1 - 1}`;
          cardLocation.classList.add("active");
          showCard.innerHTML = "спрятать карту";
          players1--;
          cardLocation.innerHTML = array[numberOfCard++];
        } else {
          document.querySelector("audio").play();
          cardLocation.classList.remove("active");
          showCard.innerHTML = "показать карту";
        }
      } else {
        cardLocation.classList.remove("active");
        counter.innerHTML = "Хорошей игры!";
        showCard.innerHTML = "Сыграть снова";
        players1 = null;
        spyKol1 = null;
        showCard.addEventListener("click", () => {
          document.querySelector("audio").play();
          window.location.reload();
        });
      }
    });
  });
  rules.addEventListener("click", () => {
    document.querySelector("audio").play();
    menu.classList.remove("active");
    rulesPage.classList.add("active");
  });
  back.addEventListener("click", () => {
    document.querySelector("audio").play();
    menu.classList.add("active");
    rulesPage.classList.remove("active");
  });
}
