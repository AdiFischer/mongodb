import { MongoClient, ObjectId} from "mongodb"

import {uri, otherSecret} from "./credentials.js"

const client = new MongoClient(uri)//connect to client
const db = client.db("sample_mflix")// connect to file
const moviesCollection = db.collection("movies")//connect to
 
//console.log( await moviesCollection.findOne({}))
let query = {title: { $regex: /terminator/i}}// search for "terminator" anywhere in title, ignor upper/lower case
let firstMovie = await moviesCollection
.find(query)// seperating the lines helps us comented some of the comands
.limit(3)//if we want just a specific amount of items
.toArray()// make it into aaray

for(let i = 0; i < firstMovie.length; i++){
    console.log(firstMovie[i].title)
}

// console.log(firstMovie[0].title)
// console.log(`there are ${firstMovie.length} movies`)


//add a new movie

const newMovie = {
    title: "The Boca Code Story",
    rating: "R",
    genre: ["Comedy"],
    rleaseDate: "2022/12/16",

}
// const results = await moviesCollection.insertOne(newMovie)
// console.log("Results of insert", results)
// we can search for our new entry in mongodb compass by copy from terminal-
// new ObjectId("6345ca99f4c9bd1623d39ef6").putit in {_id then paste}

const updateQuery = { _id: new ObjectId("6345ca99f4c9bd1623d39ef6")};
const update = { $set: {title: "the new boca"}}
const results = await moviesCollection.findOneAndUpdate(updateQuery,update);
console.log(results)
