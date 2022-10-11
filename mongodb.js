import { MongoClient } from "mongodb"

import {uri, otherSecret} from "./credentials.js"

const client = new MongoClient(uri)//connect to client
const db = client.db("sample_mflix")// connect to 
const moviesCollection = db.collection("movies")//connect to
 
//console.log( await moviesCollection.findOne({}))
let query = {title: { $regex: /terminator/i}}// search for "terminator" anywhere in title, ignor upper/lower case
let firstMovie = await moviesCollection.find(query).limit(3).toArray()

for(let i = 0; i < firstMovie.length; i++){
    console.log(firstMovie[i].title)
}

// console.log(firstMovie[0].title)
// console.log(`there are ${firstMovie.length} movies`)


