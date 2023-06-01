'use client'
import style from '../../style/modules/ButtonSelect.module.scss'
import { useState } from "react"

export default function buttons(){
    const [counter, setCounter] = useState(false)
    const [text, setText] = useState('Выбрать город')
    return(
    <div className={style.options}>

        <button className={style.btn} onClick={()=>{setCounter((e)=> e != true)}}>{text}</button>
        {counter && 
        <div className={style.item}>
        <p className={style.par} onClick={()=>{setCounter((e)=> e != true), setText(()=> 'Курск')}}>Курск</p>
        <p className={style.par} onClick={()=>{setCounter((e)=> e != true), setText(()=> 'Белгород')}}>Белгород</p>
        <p className={style.par} onClick={()=>{setCounter((e)=> e != true), setText(()=> 'Шебекино')}}>Шебекино</p>
        </div>}
    </div>)
}