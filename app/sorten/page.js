"use client"
import React from 'react'
import { useState } from 'react'
import Link from 'next/link'


const sorten = () => {
  const [url, seturl] = useState("")
  const [shorturl, setshorturl] = useState("")
  const [generated, setgenerated] = useState("")

  const generate = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
  
    const raw = JSON.stringify({
      url: url,
      shorturl: shorturl,
    });
  
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
  
    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        seturl("")
        setshorturl("")
        console.log(result); // Log the response for debugging
        alert(result.message); // Show the success or error message from the server
        setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`); // Update state to reflect successful generation
      })
      .catch((error) => console.error("Error:", error));
  };
  
  return (
    <div className='mx-auto max-w-lg p-8 rounded-lg bg-purple-100 mt-10'>
      <h1 className='text-2xl font-bold'>Generate Your Short Urls</h1>
      <div className='mb-4'>
        <input value={url} className='bg-gray-50 border text-black border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full my-3 p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500' type="text" placeholder='Enter Your URL' onChange={e => { seturl(e.target.value) }} />
        <input className='bg-gray-50 border text-black border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full my-3 p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500' type="text" placeholder='Enter Prefered Short URL Text' onChange={e => { setshorturl(e.target.value) }} />
        <button onClick={generate} value={shorturl} className="my-2 mx-3 mb-6 md:m-0 shadow-lg focus:outline-none text-white bg-purple-700 hover:bg-blue-400 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-purple-600 dark:hover:bg-blue-400 dark:focus:ring-purple-900 w-full">Generate</button>
      </div>

      {generated && <code>Your Link: <Link href={generated}>{generated}</Link></code>}
    </div>
  )
}

export default sorten