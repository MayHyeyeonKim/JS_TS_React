// 비동기 작업 하는 것들...

// 파일 시스템 작업: 파일을 읽거나 쓰는 작업은 비동기적으로 처리됨.
// 네트워크 요청: 서버로 데이터를 보내거나 받는 작업은 비동기적으로 처리됨.
// 타이머 함수: setTimeout과 setInterval 함수는 비동기적으로 작동함.
// 이벤트 핸들링: 이벤트 발생 시 처리되는 작업은 비동기적으로 처리됨.
// 프로미스와 async/await를 사용한 작업: 프로미스와 async/await를 사용하여 비동기 작업을 처리할 수 있다(?) (<- 비동기작업을 동기적으로 바꿔주는 거지 않나?)
// 웹 워커: 웹 워커는 웹 애플리케이션의 메인 스레드와 별도의 스레드에서 실행되어 비동기적으로 작업을 처리함.

const fs = require('fs');
// 프로듀서: 새로운 프로미스를 생성하는 역할을 합니다.

function readFile(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}
// 컨슈머: 프로미스의 결과를 소비하는 역할을 합니다.
// 예제 파일을 비동기적으로 읽어오는 함수 호출
readFile('example.txt')
  .then(data => {
    console.log('File contents:', data);
  })
  .catch(err => {
    console.error('Error reading file:', err);
  });

// 프로듀서: 새로운 프로미스를 생성하는 역할을 합니다.
let producer = new Promise((resolve, reject) => {
    // 비동기 작업 수행
    let data = fetchData(); // 데이터를 가져오는 비동기 함수 호출
    if (data) {
      resolve(data); // 작업이 성공하면 데이터를 resolve하여 완료됨을 알림
    } else {
      reject("Failed to fetch data"); // 작업이 실패하면 reject하여 오류를 알림
    }
  });
  
  // 컨슈머: 프로미스의 결과를 소비하는 역할을 합니다.
  producer.then(data => {
    console.log("Consuming data:", data); // 성공적으로 완료된 경우 데이터를 소비
  }).catch(error => {
    console.error("Failed to fetch data:", error); // 작업이 실패한 경우 오류를 처리
  });
  












