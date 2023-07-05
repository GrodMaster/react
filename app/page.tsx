'use client'
import { useState, useEffect } from 'react';
import './style/form.scss'
// import  style  from './style/modules/Home.module.scss'
export default function Home() {

  return (
<div className='row'>
  <div className='form'>
<form>
<input type="text" name="name" placeholder="Имя" />  
<input type="text" name="email" placeholder="Email" />  
<button type='submit' >Отправить</button>
</form>
</div>
<div className='main'></div>
</div>
  )
}


