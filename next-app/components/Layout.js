import styles from "../styles/Layout.module.css";
import Nav from "./Nav";
const { MongoClient } = require("mongodb");

const mongoClient = new MongoClient(process.env.MONGODB_URI);

const clientPromise = mongoClient.connect();

const handler = async (event) => {
  try {
    const database = (await clientPromise).db(process.env.MONGODB_DATABASE);
    const collection = database.collection(process.env.MONGODB_COLLECTION);
    // Function logic here ...
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};

module.exports = { handler };

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <div>
        <main className={styles.main}>{children}</main>
      </div>
    </>
  );
};
export default Layout;
