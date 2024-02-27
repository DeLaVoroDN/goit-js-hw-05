'use strict'; // Строгий режим, который помогает выявить и предотвратить ошибки в коде

const getUserNames = users => {
  // Функция getUserNames принимает массив пользователей и возвращает массив их имен

  const names = users.map(user => user.name); // Извлекаем имена пользователей с помощью метода map
  return names; // Возвращаем массив имен пользователей
};

console.log(
  getUserNames([
    // Выводим результат вызова getUserNames с набором пользователей
    {
      name: 'Moore Hensley',
      email: 'moorehensley@indexia.com',
      balance: 2811,
    },
    {
      name: 'Sharlene Bush',
      email: 'sharlenebush@tubesys.com',
      balance: 3821,
    },
    {
      name: 'Ross Vazquez',
      email: 'rossvazquez@xinware.com',
      balance: 3793,
    },
    {
      name: 'Elma Head',
      email: 'elmahead@omatom.com',
      balance: 2278,
    },
    {
      name: 'Carey Barr',
      email: 'careybarr@nurali.com',
      balance: 3951,
    },
    {
      name: 'Blackburn Dotson',
      email: 'blackburndotson@furnigeer.com',
      balance: 1498,
    },
    {
      name: 'Sheree Anthony',
      email: 'shereeanthony@kog.com',
      balance: 2764,
    },
  ])
);
