// let x;

// const todos = [
//   { id: 1, name: "buy milk" },
//   { id: 2, name: "school" },
//   { id: 3, name: "rubbish" },
// ];

// x = Object.keys(todos);
// console.log(x);

// const todo = { id: 2, name: "clean" };

// x = todo;

// x = Object.keys(todo).length;
// x = Object.entries(todo);

// console.log(x);

// const age = 30;
// const name = "sumin";

// const person = { name, age };

// console.log(person.age);

// const todo = {
//   id: 1,
//   tittle: "take rubbish out",
//   user: { name: "sumin" },
// };

// const { id, title, user } = todo;
// console.log(user);

// const numberss = [12, 45, 67, 88];

// const [first, second, ...rest] = numberss;

// console.log(first, second, rest);

let = x;

const library = [
  {
    title: "yello face",
    author: "Kuang",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: "the fault in our stars",
    author: "john green",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: "secret",
    author: "rhonda",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
];

library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

const { title: firstBook } = library[0];

const libraryJSON = JSON.stringify(library);
console.log(libraryJSON);
