'use strict'; // Строгий режим, который помогает выявить и предотвратить ошибки в коде

const getTotalBalanceByGender = (users, gender) => {
  // Функция для подсчета общего баланса пользователей определенного пола

  const totalBalanceUsers = users
    .filter(user => user.gender === gender) // Фильтруем пользователей по полу
    .reduce((acc, user) => acc + user.balance, 0); // Считаем суммарный баланс отфильтрованных пользователей

  return totalBalanceUsers; // Возвращаем суммарный баланс
};

// Массив всех пользователей
const allUser = [
  {
    name: 'Moore Hensley',
    gender: 'male',
    balance: 2811,
  },
  {
    name: 'Sharlene Bush',
    gender: 'female',
    balance: 3821,
  },
  {
    name: 'Ross Vazquez',
    gender: 'male',
    balance: 3793,
  },
  {
    name: 'Elma Head',
    gender: 'female',
    balance: 2278,
  },
  {
    name: 'Carey Barr',
    gender: 'male',
    balance: 3951,
  },
  {
    name: 'Blackburn Dotson',
    gender: 'male',
    balance: 1498,
  },
  {
    name: 'Sheree Anthony',
    gender: 'female',
    balance: 2764,
  },
];

// Вывод результатов вызова функции для пользователей каждого пола
console.log(getTotalBalanceByGender(allUser, 'male')); // Выведет суммарный баланс пользователей мужского пола
console.log(getTotalBalanceByGender(allUser, 'female')); // Выведет суммарный баланс пользователей женского пола
