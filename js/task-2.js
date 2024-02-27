'use strict'; // Строгий режим, который помогает выявить и предотвратить ошибки в коде

// Функция getUsersWithFriend принимает массив пользователей и имя друга и возвращает массив пользователей, у которых есть этот друг
const getUsersWithFriend = (users, friendName) => {
  return users.filter(user => user.friends.includes(friendName)); // Фильтруем пользователей, проверяя наличие друга в их списке друзей
};

// Массив всех пользователей
const allUsers = [
  {
    name: 'Moore Hensley',
    friends: ['Sharron Pace'],
  },
  {
    name: 'Sharlene Bush',
    friends: ['Briana Decker', 'Sharron Pace'],
  },
  {
    name: 'Ross Vazquez',
    friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
  },
  {
    name: 'Elma Head',
    friends: ['Goldie Gentry', 'Aisha Tran'],
  },
  {
    name: 'Carey Barr',
    friends: ['Jordan Sampson', 'Eddie Strong'],
  },
  {
    name: 'Blackburn Dotson',
    friends: ['Jacklyn Lucas', 'Linda Chapman'],
  },
  {
    name: 'Sheree Anthony',
    friends: ['Goldie Gentry', 'Briana Decker'],
  },
];

// Вывод результатов вызова функции getUsersWithFriend для нескольких различных имен друзей
console.log(getUsersWithFriend(allUsers, 'Briana Decker')); // Выведет пользователей, у которых есть друг Briana Decker
console.log(getUsersWithFriend(allUsers, 'Goldie Gentry')); // Выведет пользователей, у которых есть друг Goldie Gentry
console.log(getUsersWithFriend(allUsers, 'Adrian Cross')); // Выведет пустой массив, так как нет пользователей с другом Adrian Cross
