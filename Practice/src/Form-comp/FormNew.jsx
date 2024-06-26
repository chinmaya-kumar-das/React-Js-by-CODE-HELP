import React from 'react'
import { useState } from 'react';
const FormNew = () => {
  let [name,setName]=useState('');
  let [id,setId]=useState('');
  function printName(e){
    setName(e.target.value)
    
  }
  function printId(e){
    setId(e.target.value)
    
  }
  return (
    <div className='mx-5 flex flex-col gap-2 '>
      <form className='flex flex-col gap-2 mt-2'   >
        <label htmlFor='Fullname'> Name</label>
        <input type='text' name='Fullname' placeholder='Enter the name' onChange={printName}></input>
        <br></br>
        <label htmlFor='ID'>ID</label>
        <input type='text' id='ID' placeholder='Enter ID' onInput={printId}></input>
        <label></label>
     
      </form>
      <p>-----------------------------------------------</p>
      <div>
        <p>Name is :{name}</p>
        <p>Id is :{id}</p>
      </div>
    </div>
  )
}

export default FormNew