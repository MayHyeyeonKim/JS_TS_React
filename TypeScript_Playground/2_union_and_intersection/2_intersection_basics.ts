/**
 * Intersection
 * 
 * And
 */
interface Human{
    name: string;
    age: number;
}

interface Contacts{
    phone: string;
    address: string;
}

type HumanAndContacts = Human & Contacts;

let humanAndContacts: HumanAndContacts = {
    name: 'Coco',
    age: 32,
    phone: '01012341234',
    address: '서울시'
};

type NumberAndString = number & string; //never타입

// let numberAndString: NumberAndString = never;