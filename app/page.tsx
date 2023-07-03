import './style/form.scss'
// import  style  from './style/modules/Home.module.scss'
export default function Home() {
  return (
<div className='row'>
  <div className='form'>
<form action='/public.send.php' method='POST'>
<input type="text" name="name" placeholder="Имя"/>  
<input type="text" name="email" placeholder="Email"/>  
<button>Отправить</button>
</form>
</div>
<div className='main'></div>
</div>
  )
}