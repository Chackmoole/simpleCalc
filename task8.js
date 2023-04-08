'use strict'

/*У вас есть массив объектов user, и у каждого из объектов есть name, surname и id.

Напишите код, который создаст ещё один массив объектов с параметрами id и fullName, где fullName – состоит из name
 и surname.*/

const vasya = { name: "Вася", surname: "Пупкин", id: 1 };
const petya = { name: "Петя", surname: "Иванов", id: 2 };
const masha = { name: "Маша", surname: "Петрова", id: 3 };

const users = [ vasya, petya, masha ];

const usersMapped = users.map(item => {
  return  {fullName: `${item.name} ${item.surname}`, id: [item.id]}

})

    /*
    usersMapped = [
      { fullName: "Вася Пупкин", id: 1 },
      { fullName: "Петя Иванов", id: 2 },
      { fullName: "Маша Петрова", id: 3 }
    ]
    */

alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // Вася Пупкин