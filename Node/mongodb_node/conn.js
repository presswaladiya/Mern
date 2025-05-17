const {MongoClient}=require('mongodb');

const constr='mongodb://localhost:27017';
const client=new MongoClient(constr);

async function run(){
    
        await client.connect();
        console.log("connected successfully...");
        const db=client.db('demo');
        const collection=db.collection('user');
        return collection;


   
}
module.exports={run};
