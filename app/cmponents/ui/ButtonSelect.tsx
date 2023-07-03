// 'use client'
// import style from '../../style/modules/ButtonSelect.module.scss'
// import { useState } from "react"

// export default function Buttons(){
//     const [counter, setCounter] = useState(false)
//     const [text, setText] = useState('Выбрать город')
//     async function setId(num: number){
//         if (num === 0) {
//             document.cookie='locationLat=51.43';
//             document.cookie='locationLon=36.11';
//         }
//         else if(num === 1){
//             document.cookie='locationLat=50.61';
//             document.cookie='locationLon=36.58';
//         }
//         else{
//             document.cookie='locationLat=50.24';
//             document.cookie='locationLon=36.54';
//         }
//     }
//     return(
//     <div className={style.options}>

//         <div className={style.btn} onClick={()=>{setCounter((e)=> e != true)}}>{text}</div>
//         {counter && 
//         <div className={style.item}>
//         <p className={style.par} onClick={()=>{setCounter((e)=> e != true), setText(()=> 'Курск'), setId(0)}} >Курск</p>
//         <p className={style.par} onClick={()=>{setCounter((e)=> e != true), setText(()=> 'Белгород'), setId(1)}}>Белгород</p>
//         <p className={style.par} onClick={()=>{setCounter((e)=> e != true), setText(()=> 'Шебекино'), setId(2)}}>Шебекино</p>
//         </div>}
//     </div>)
// }