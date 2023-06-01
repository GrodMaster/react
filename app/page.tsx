import  style  from './style/modules/Home.module.scss'
export default function Home() {
  return (
   <div>
   <h1>Cars catalg</h1>
   <div className={style.item}>
    <h2>Car 1</h2>
    <p>$100 000</p>
    <button>Reade more</button>
   </div>
   </div>
  )
}