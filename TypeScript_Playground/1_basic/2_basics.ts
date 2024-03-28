let helloText: string = 'Hello';
// helloText = true;

/**
 * JS에 존재하는 타입(7개)
 */

const stringVar: string = 'String';
const numberVar: number = 3;
const bigIntVal: bigint = BigInt(99999); //"target": "es2020"
const booleanVar: boolean = true;
const symbolVar: symbol = Symbol(1);
const nullVar: null = null;
const undefinedVar: undefined = undefined;

/**
 * TS에만 존재하는 타입 : any - 아무 타입이나 입력 할 수 있는 치트키같은 타입
 */

let anyVar: any;
anyVar = 100;
anyVar = 'ralralral'
anyVar = true;

let testNum: number = anyVar;
let testString: string = anyVar;
let testBolean: boolean = anyVar;

let unKnownType: unknown;
// unknownType = 100;
// unknownType = '에러나네';
// unknownType = true;

// let unkonwType2: unknown = unknownType;
// let anyType2: any = unknownType;

// let neverType: never = null;
// let neverType: never = undefined;
// let neverType: never = 'test';

const koreanGirlGroup : string[] = ['아이브', '레드벨벳', '블랙핑크'];
const booleanList: boolean[] = [true, false, false, true];