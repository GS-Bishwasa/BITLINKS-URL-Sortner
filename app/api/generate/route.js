import clientPromise from "@/lib/mongodb"
import { error } from "console";

export async function POST(request) {

  const body = await request.json()
  const client = await clientPromise;
  const db = client.db("bitlinks")
const collection = db.collection("url")

// check if the sorturl is exist
const doc = await collection.findOne({shorturl:body.shorturl})
if (doc) {
  
  return Response.json({success:false, error:true, message: 'URL Already Exist' })
}

const result = await collection.insertOne({
  url:body.url,
  shorturl:body.shorturl,
})

    return Response.json({success:true, error:false, message: 'URL Generated Successfully' })
  }