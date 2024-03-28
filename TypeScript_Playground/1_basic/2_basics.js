"use strict";
let helloText = 'Hello';
// helloText = true;
/**
 * JS에 존재하는 타입(7개)
 */
const stringVar = 'String';
const numberVar = 3;
const bigIntVal = BigInt(99999); //"target": "es2020"
const booleanVar = true;
const symbolVar = Symbol(1);
const nullVar = null;
const undefinedVar = undefined;
/**
 * TS에만 존재하는 타입 : any - 아무 타입이나 입력 할 수 있는 치트키같은 타입
 */
let anyVar;
anyVar = 100;
anyVar = 'ralralral';
anyVar = true;
let testNum = anyVar;
let testString = anyVar;
let testBolean = anyVar;
let unKnownType;
// unknownType = 100;
// unknownType = '에러나네';
// unknownType = true;
// let unkonwType2: unknown = unknownType;
// let anyType2: any = unknownType;
// let neverType: never = null;
// let neverType: never = undefined;
// let neverType: never = 'test';
const koreanGirlGroup = ['아이브', '레드벨벳', '블랙핑크'];
const booleanList = [true, false, false, true];
