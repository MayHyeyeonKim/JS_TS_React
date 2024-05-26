/**
 * Union Basics
 * Union is one of the many ways to merge types in TS.
 */
type StringOrBooleanType = string | boolean;

let stringOrBooleanType: StringOrBooleanType = 'Ducky';
stringOrBooleanType = true;

// stringOrBooleanType = undefined;

type StrBoolNullType = string | boolean | null;

type StateTypes = 'DONE' | 'LOADING' | 'ERROR';

let state: StateTypes = 'DONE';
state = 'LOADING';
// state = 'INITIAL';

/**
 * Union of Lists
 */
// a list that consists of strings or a list that consists of booleans.
type StringListOrBooleanList = string[] | boolean[];

let strListOrBooleanList: StringListOrBooleanList = [
    'Goeun',
    'Pamyo',
    'Sodam',
]

strListOrBooleanList = [
    true,
    false,
    false,
    true,
]

// strListOrBooleanList = [
//     true,
//     'Goeun',
// ]

type StrOrNumberList = (string | number)[];

// let stringOrNumberList = [
//     1, 2, 3,
//     'blackPink',
//     'redVelvet',
// ];

// To explicitly specify the types of variables
let stringOrNumberList:StrOrNumberList = [
    1, 2, 3,
    'blackPink',
    'redVelvet',
];
console.log(stringOrNumberList)


stringOrNumberList = [
    1,2,3
]

stringOrNumberList = [
    'blackPink', 'redVelvet',
]

// stringOrNumberList = [
//     true,
//     false,
// ]

/**
 * Using union with interfaces
 */
interface Animal{
    name: string;
    age: number;
}

interface Human {
    name: string;
    age: number;
    address: string;
}

type AnimalOrHuman = Animal | Human;

let animalOrHuman: AnimalOrHuman = {
    name: 'Choi',
    age: 32,
    address: 'Korea',
}

console.log(animalOrHuman);
console.log(animalOrHuman.name);
console.log(animalOrHuman.age);
console.log(animalOrHuman.address);

animalOrHuman = {
    name: '오리',
    age: 9,
}

console.log(animalOrHuman);

console.log(animalOrHuman.name);
console.log(animalOrHuman.age);
// console.log(animalOrHuman.address);

let animalOrHuman2: {
    name: string;
    age: number;
} | {
    name: string;
    age: number;
    address: string;
} ={
    name: 'Choi',
    age: 32,
    address: '대한민국',
};

console.log(animalOrHuman2.address);
console.log(animalOrHuman2.name);
console.log(animalOrHuman2.age);

animalOrHuman2 = {
    name: '오리',
    age: 9,
};

// console.log(animalOrHuman2.address);
console.log(animalOrHuman2.name);
console.log(animalOrHuman2.age);

// 서로 관계가 없는 유니언을 선언하면 어떻게 되는가
type Person = {
    name: string;
    age: number;
}

type Cat = {
    breed: string;
    country: string;
}

type PersonOrCat = Person | Cat;

// const personOrCat: PersonOrCat = {
//     // name: 'Hoho',
//     age: 32,
//     // breed: 'Yorkshire Terrier',
//     country: '영국',
// }