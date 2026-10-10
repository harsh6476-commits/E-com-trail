import React, { useState } from 'react'
import axios from 'axios'


const Home =  () => {
  const [data, setdata] = useState([]);
  const get_data = async()=>{const res = await axios.get('http://localhost:4000/');
  setdata(res.data)}
  console.log(data);
  
  return (
    <div className='h-screen w-full bg-blue-900'>
      <button className='border p-2 pl-5 rounded' onClick={()=>{get_data()}}>get</button>
      
    </div>
  )
}

export default Home
