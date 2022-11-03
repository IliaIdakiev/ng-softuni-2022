// let username = 'Ivan';

// username = 1;

// console.log(username);

// let isOpenArray: boolean[] = [false, ''];


// function createUser(username: string, age: number = 0) {
//   return {
//     username,
//     age
//   };
// }

// const ivan = createUser('Ivan', 100);



// let str = '2313';
// var num = +str;

// str[1] = '1';



function id<T>(item: T): T {
  return item;
}

interface IMyDto {
  prop: string;
  prop1: number
}

type MyDtoOrNumber = IMyDto | number;
type BooleanArray = Array<boolean>;

let num = id<MyDtoOrNumber>({ prop: '1', prop1: 1 });


class MyClass {
  constructor(public name: string, private age: number) { }
}

const ivan = new MyClass('Ivan', 20);


enum UserRole {
  Admin = 'dsada',
  User = 'dsasd',
}


