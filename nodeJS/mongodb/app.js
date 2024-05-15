const { MongoClient } = require("mongodb");
const uri = `mongodb://localhost:27017`;
const client = new MongoClient(uri);

async function run() {
    const database = client.db('practice');
    const users = database.collection('users');

    // const userData = await users.insertOne({name:"Maychu", age: 117});
    // console.log("result", userData);

    // const userList = [{name:"Chuchu", age:333}, {name:"Chusik", age:500}]
    // const userListResult = await users.insertMany(userList)
    // console.log("userListResult => ", userListResult)

    // const findUser = await users.findOne({name:"Chuchu"})
    // console.log("findUser result => ", findUser)

    // const findUser = await users.find({}).toArray();
    // console.log("findUser result => ", findUser)

    const findUser = await users.findOne({age:{$gt: 300}});
    console.log("findUser result => ", findUser)

    // const findUser = await users.find({age:{$gt: 300}}).toArray();
    // console.log("findUser result => ", findUser)

}



run();