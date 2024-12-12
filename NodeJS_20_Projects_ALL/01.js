const { MongoClient } = require('mongodb');
const url = "mongodb+srv://karthikgammath13:karthIK1011SAnt@cluster0.urezgtz.mongodb.net/mdb";
async function main() {
    const client = new MongoClient(url);
    try {
        await client.connect();
        console.log("Connected to MongoDB Atlas");

        const dbo = client.db('mdb');
        const result = await dbo.collection('mcl').insertOne({ name: 'kallu', phno: 888 });
        console.log('Document inserted successfully', result);
    } catch (err) {
        console.error("Connection error:", err);
    } finally {
        await client.close();
    }
}
main().catch(console.error);
