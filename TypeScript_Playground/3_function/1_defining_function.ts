function printName(name: string){
    console.log(name);
}

function returnTwoCouples(person1: string, person2: string){
    return `${person1} and ${person2} are dating.`
}

console.log(returnTwoCouples('Coco', 'Chichi'));
// returnTwoCouples(0,1);

function multiplyOrReturn(x: number, y:number=0){
    if(y){
        return x*y;
    }else {
        return x;
    }
}

console.log(multiplyOrReturn(3))

function getInfiniteParameters(...args: string[]){
    return args.map((x)=> `I like ${x}`);
}

console.log(getInfiniteParameters('Coco', 'Cici', 'Cucu'))

function addTwoNumbers(x: number, y: number): number{
    return x + y;
}

let test1 = addTwoNumbers(1,20);
console.log(test1)

function randomNumber() {
    return Math.random() > 0.5 ?
        10 : '랜덤';
}

randomNumber();

function subtractTwoNumbers(x: number, y: number): number{
    // return '이게 반환이 되나?';
    return x - y;
}

/**
 * 특수 반환 타입
 * 
 * void / never
 */
function doNotReturn(): void{
    console.log('저는 반환을 하지 않습니다.');
}

doNotReturn();

function neverEndingLoop() : never{
    while(true){

    }
}

function throwErro2() : never{
    throw Error();
}

// never 타입은 함수가 정상적으로 종료되지 않는다는 것을 나타내기 위해 사용.

// 함수가 무한 루프에 빠지는 경우.
// 함수가 예외를 던져서 종료되는 경우.