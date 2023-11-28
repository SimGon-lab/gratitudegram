const express = require("express")
const app = express()

// set up mongodb
const { MongoClient, ServerApiVersion } = require('mongodb');
const bodyParser = require("body-parser")

app.use(bodyParser.urlencoded({
    extended: true
}))
app.set('view engine', 'ejs');

const dbPassword = "FGo5XtzWsD3sgMWq"
const uri = `mongodb+srv://sg57335p:${dbPassword}@gratitudegramcluster.xnlfo1z.mongodb.net/?retryWrites=true&w=majority`

const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      useNewUrlParser: true,
      strict: true,
      deprecationErrors: true,
    }
});

var db;
async function setupDb() {
    try {
        await client.connect()
        db = await client.db("db")
        console.log("connected to mongodb")
    } catch (err)
    {
        console.error(err);
    }
}
setupDb().catch(console.log)

app.get("/users", async (req, res) => {
    const usersCollection = db.collection("users");
    const usersCur = await usersCollection.find({});
    const users = await usersCur.toArray();
    return users;
})

app.get("/users/new", async (req, res) => {
    res.render("user");
})

app.post("/users/new", async (req, res) => {
    const usersCollection = db.collection("users")
    await usersCollection.insertOne({
        username: req.body.username,
        password: req.body.password
    })
    res.redirect("back");
})

app.listen(3000, () => {
    console.log("listening on port 3000")
})