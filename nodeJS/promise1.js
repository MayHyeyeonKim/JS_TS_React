// const promise = new Promise() 생성하고,  프로미스 인자로 executor()함수를 전달할 것이다. 
// 이 executor는 Promise객체 인스턴스가 만들어 질 때 자동으로 실행된다.
// executor의 인수 resolve와 reject는 javascript에서 자체 제공하는 콜백함수이다.
// executor에서 인수로 넘겨준 콜백중 하나를 반드시 호출해야 한다. 
// resolve(value)
// reject(error)


//state - Pending, resolve가 호출되면 fulfilled, reject이 호출되면 rejected (state는 이 프로미스 객체의 속성)

function getData(){
    const promise = new Promise((resolve, reject) => {
        console.log("비동기 작업");
        setTimeout(()=>{
            // const data = {name: "Chuchu"};
            const data = null
            if(data){
                console.log("네트워크 요청성공");
                resolve(data);
            } else {
                reject(new Error("네트워크문제!!")); //에러객체만들어서
            }
        }, 1000);
        // console.log("비동기 작업2");
    });

    return promise
}

//프로미스객체는 then(), catch(), finally()라는 api를 제공한다.
// const promise = getData();

// setTimeout(()=>{
//     console.log(promise);
// },2000);

//then이라는 메서드는 콜백함수를 인자로 받는다.
//이 콜백함수는 매개변수를 하나 전달 받는데 그건 resolve의 result인 data가 들어간다.
// promise.then((data)=>{
//     console.log("여기는 then의 콜백함수 안이다:", data);
//     console.log('완료!');
// })

//catch라는 메서드는 콜백함수를 인자로 받는다.
//이 콜백함수는 매개변수를 하나 전달 받는데 그건 reject의 result인 error가 들어간다.

//finally는 성공여부와 상관없이
getData().then((data)=>{
    const name = data.name;
    console.log(`${name}님 안녕하세요`)
}).catch((err)=>{
    console.log("에러처리를 했어요.", err)
}).finally(()=>{
    console.log("finally에서 보내는 메세지")
})
