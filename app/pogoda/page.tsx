'use client'
import Image from 'next/image';
import { useState, useEffect } from 'react';
import styleForm from '../style/modules/Pogoda.module.scss'
import styleButton  from '../style/modules/ButtonSelect.module.scss'
import Loading from './loading';


export default function Profile() {
  const [data2, setDate] = useState<any>(null)
  const [counter, setCounter] = useState(false)
  const [text, setText] = useState('Выбрать город')
  const [section, setSection] = useState(false)
  const [time, setTime] = useState(0)
  const [item, setItem] = useState(false)
  
  async function fetchData(lat:any,lon:any){
    let data = await (await fetch(`/api/hello/${lat}&${lon}`)).json()
    setDate(() => data)
          console.log(data);
          
      
      
      
  }
          
  useEffect(() => {fetchData(55.755864, 37.617698)}, []);

  function weatherDetails(data2:any){
    return (<div>
      {data2?.forecasts.map((item: { hours: { [ x: string ]: any; }; })=>(
        
        <div key={item.hours[time].hour_ts} className={styleForm.item}>
          <h3>Подробная информация о погоде на : {item.hours[time].hour}:00</h3>
          <div  className={styleForm.wrapper}>
          <p>Тепература: <b>{item.hours[time].temp}</b></p>
          <p>Ощущается как: <b>{item.hours[time].feels_like}</b></p>
          <p>Погода: 
            <Image 
            src={`https://yastatic.net/weather/i/icons/funky/dark/${item.hours[time].icon}.svg`} 
            alt='img' 
            width={20}
            height={20}/></p>
          <p>Скорость ветра(в м/с): <b>{item.hours[time].wind_speed}</b></p>
          <p>Скорость порывов ветра (в м/с): <b>{item.hours[time].wind_gust}</b></p>
          <p>Напровление ветра: <b>{switchWind(item.hours[time].wind_dir)}</b></p>
          <p>Давление (в мм.рт.ст.): <b>{item.hours[time].pressure_mm}</b></p>
          <p>Давление (в гектопаскалях): <b>{item.hours[time].pressure_pa}</b></p>
          <p>Влажность воздуха (в процентах): <b>{item.hours[time].humidity}</b></p>
          <p>Прогнозируемое количество осадков (в мм): <b>{item.hours[time].prec_mm}</b></p>
          <p>Тип осадков: <b>{precipitation(item.hours[time].prec_type)}</b></p>
          <p>Сила осадков: <b>{powerPrecipitation(item.hours[time].prec_strength)}</b></p>
          <p>Облачность: <b>{cloudCover(item.hours[time].cloudness)}</b></p>
          {/* {console.log(item.hours[time])} */}
          </div>
          <div className={styleButton.btn} onClick={()=>{setItem((e)=> e != true)}}>Назад</div>
        </div>
      ))}
    </div>)
  }


  function weatherToDay(data2:any){     
    return(           <>
    <div className={styleForm.columns}>
    {data2?.forecasts.map((item: { hours: any[]; })=>
      (
        item.hours.map(item =>(
            <div key={item.hour_ts} 
            onClick={()=>{setTime(()=>item.hour), setItem((e)=> e != true)}}
            >
              <h3>Время: {item.hour}:00</h3>
              <p>Температура: <b>{item.temp}</b></p>
              <br />
              <p>Погода: 
                <Image 
                src={`https://yastatic.net/weather/i/icons/funky/dark/${item.icon}.svg`} 
                alt='img'
                width={20}
                height={20}/></p>
            </div>
          )
        )
      )
    )}
    
    </div>
    <div className={styleButton.btnp} onClick={()=>setSection((e)=> e !=true)}>На весь день</div>

  </>)}


  function weatherAll(data2:any){
    return(<div>
      <div className={styleForm.item}>
        <h3>{data2?.geo_object.locality.name}</h3>
        <div className={styleForm.wrapper}>
          <p>Температура: <b>{data2?.fact.temp}</b></p>
          <p>Ощущается: <b>{data2?.fact.feels_like}</b></p>
          <p>Погода: 
            <Image 
            src={`https://yastatic.net/weather/i/icons/funky/dark/${data2?.fact.icon}.svg`}
            alt='img'
            width={20}
            height={20}
              /> <b>{switchWeather(data2?.fact.condition)}</b></p>
          
          <p>Скорость ветра в секунду: <b>{data2?.fact.wind_speed}</b></p>
          <p>Направление ветра: <b>{switchWind(data2?.fact.wind_dir)}</b></p>
          <p>Давление в мм. рт. ст.: <b>{data2?.fact.pressure_mm}</b></p>
          <p>Давление в Па: <b>{data2?.fact?.pressure_pa}</b></p>

        </div>
  
        <div className={styleForm.options}>
          <div className={styleButton.groupBtn}>
            <div className={styleButton.btn} onClick={()=>setSection((e)=> e !=true)}>Подробно на сегодня</div>

            <div className={styleButton.btn} onClick={()=>{setCounter((e)=> e != true)}}>{text}</div>
            {counter && 
      <div className={styleButton.item}>
        <p className={styleButton.par} onClick={()=>{setCounter((e)=> e != true), setText(()=> 'Курск'), fetchData(51.730846, 36.193015)}} >Курск</p>
        <p className={styleButton.par} onClick={()=>{setCounter((e)=> e != true), setText(()=> 'Москва'), fetchData(55.755864, 37.617698)}} >Москва</p>
        <p className={styleButton.par} onClick={()=>{setCounter((e)=> e != true), setText(()=> 'Белгород'),  fetchData(50.595414, 36.587277)}}>Белгород</p>
        <p className={styleButton.par} onClick={()=>{setCounter((e)=> e != true), setText(()=> 'Шебекино'),  fetchData(50.404345, 36.879317)}}>Шебекино</p>
      </div>}
          </div>
        </div>
        
      </div>
  </div>)
  }

  
  function powerPrecipitation(item:number):string{
    switch(item){
      case 0:
        return 'без осадков'
      case 0.25:
        return 'слабый дождь/слабый снег'
      case 0.5:
        return 'дождь/снег'
      case 0.75:
        return 'сильный дождь/сильный снег'
      case 1:
        return 'сильный ливень/очень сильный снег'
      default: return ''
    }
  }
            
  function cloudCover(item: number):string {
    switch (item) {
      case 0:
        return 'ясно'
      case 0.25:
        return 'малооблачно'
      case 0.5:
        return 'облачно с прояснениями'
      case 0.75:
        return 'облачно с прояснениями'
      case 1:
        return 'пасмурно'
      default: return ''
    }
  }

  function switchWind(val: string): string {
    switch (val) {
      case 'n':
        return 'Северное'
      case 'ne':
        return 'Северо-восточное'
      case 'nw':
        return 'Северо-заподное'
      case 'e':
        return 'Восточное'
      case 'se':
        return 'Юго-Восточное'
      case 's':
        return 'Южное'
      case 'sw':
        return 'Юго-заподное'
      case 'w':
        return 'Заподное'
      case 'c':
        return 'Штиль'
        default: return ''
    }
  }

  function precipitation(item:number):string{
    switch(item){
      case 0:
        return 'без осадков'
      case 1:
        return 'дождь'
      case 2:
        return 'дождь со снегом'
      case 3:
        return 'снег'
        default: return ''
    }
  }

  function switchWeather(weather: string): string {
    switch(weather) {
      case 'clear':
        return 'Ясно' 
      case 'partly-cloudy':
        return 'Малооблачно'
      case 'cloudy':
        return 'Облачно с прояснениями'
      case 'overcast':
        return 'Пасмурно'
      case 'drizzle':
        return 'Морось'
      case 'light-rain':
        return 'Небольшой дождь'
      case 'rain':
        return 'Дождь'
      case 'moderate-rain':
        return 'Умеренно сильный дождь'
      case 'heavy-rain':
        return 'Сильный дождь'
      case 'continuous-heavy-rain':
        return 'Длительный сильный дождь'
      case 'showers':
        return 'Ливень'
      case 'wet-snow':
        return 'Дождь со снегом'
      case 'light-snow':
        return 'Небольшой снег'
      case 'snow':
        return 'Снег'
      case 'snow-showers':
        return 'Снегопад'
      case 'hail':
        return 'Град'
      case 'thunderstorm':
        return 'Гроза'
      case 'thunderstorm-with-rain':
        return 'Дождь с грозой'
      case 'thunderstorm-with-hail':
        return 'Гроза с градом'
        default: return ''
    }
  }
  return (
    <>
      {!data2 && <Loading/>}

      {data2 && 
        <>
        {item &&
        weatherDetails(data2)
        }

        {section && !counter && !item &&
        weatherToDay(data2)
        }

        {!section &&
          weatherAll(data2)
        }  
        </>
      }
    </>

  );
}

