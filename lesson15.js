/* Задание на урок:

1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
возвращаем пользователя к вопросам опять

3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
"Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

4) Потренироваться и переписать цикл еще двумя способами*/

"use strict";

// Код возьмите из предыдущего домашнего задания

let c = +prompt("Сколько фильмов вы уже посмотрели?", "");

let personalMoviesDB = {
  count: c,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

// if (personalMoviesDB.count <= 10) {
//   alert("Просмотрено довольно мало фильмов");
// } else if (personalMoviesDB.count >= 10 && personalMoviesDB.count <= 30) {
//   alert("Вы классический зритель");
// } else if (personalMoviesDB.count >= 30) {
//   alert("Вы киноман");
// } else {
//   alert("Error");
// }

// switch (personalMoviesDB.count) {
//   case 10:
//     alert("Просмотрено довольно мало фильмов");
//     break;
//   case 30:
//     alert("Вы классический зритель");
//     break;
//   case 100:
//     alert("Вы киноман");
//     break;
//   default:
//     alert("Введите другое число!");
//     break;
// }

// for (let i = 0; i < 1; i++) {
//   const a = prompt("Один из последних проссмотренных фильмов?", ""),
//         b = prompt("На сколько оцените его?", "");
// if(a != '' && b != '' && a != null && b != null && a.length < 50) {
//     personalMoviesDB.movies[a] = b;
//     console.log('Done');
// } else {
//     i--;
//     console.log ('Error');
// }
// }

console.log(personalMoviesDB);

// let questionFilms = prompt('Один из последних проссмотренных фильмов?', '');
// let questionValuation = prompt('На сколько оцените его?', );

// personalMoviesDB.movies[questionFilms] = questionValuation;

// console.log(personalMoviesDB);
