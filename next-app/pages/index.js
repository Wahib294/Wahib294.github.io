import Head from "next/head";
import { MongoClient, ServerApiVersion } from "mongodb";

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://wahib:wahibwahib2@cluster0.waqyd8i.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
client.connect((err) => {
  const collection = client.db("chess").collection("user");
  client.close();
});

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next App</title>
      </Head>
      <h1>Welcome to NEXT</h1>
    </div>
  );
}
