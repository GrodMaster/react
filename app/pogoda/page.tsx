'use client'
import { useState, useEffect } from 'react';
import styleForm from '../style/modules/Pogoda.module.scss'
import styleButton from '../style/modules/ButtonSelect.module.scss'


    export default function Profile() {
        const [data2, setDate] = useState(null)
          const [counter, setCounter] = useState(false)
          const [text, setText] = useState('Выбрать город')
          const [section, setSection] = useState(false)

          async function fetchData(lat:any,lon:any){
            let data = await (await fetch(`/api/hello/${lat}&${lon}`)).json()
            setDate(() => data)
                 console.log(data);
                
            
            
            
        }
          
          useEffect(() => {fetchData(55.755864, 37.617698)}, []);
                   
            return (
            <>
              {section && !counter &&
                <>
                <div className={styleForm.columns}>
                {data2?.forecasts.map(item=>
                  (
                    item.hours.map(item =>(
                    
                      <div key={item.hour}>
                        <h3>Время: {item.hour}:00</h3>
                        <p>{switchWeather(item.condition)}</p>
                        
                      </div>
                    
                      )
                    )
                  )
                )}
                
                </div>
                <button className={styleButton.btnp} onClick={()=>setSection((e)=> e !=true)}>На весь день</button>

              </>
              }
              { !section &&
                <div>
                  <div className={styleForm.item}>
                    <h3>{data2?.geo_object.locality.name}</h3>
                    <div className={styleForm.wrapper}>
                      <p>Температура: <b>{data2?.fact.temp}</b></p>
                      <p>Ощущается: <b>{data2?.fact.feels_like}</b></p>
                      <p>Погода: <b>{switchWeather(data2?.fact.condition)}</b></p>
                      <p>Скорость ветра в секунду: <b>{data2?.fact.wind_speed}</b></p>
                      <p>Направление ветра: <b>{switchWind(data2?.fact.wind_dir)}</b></p>
                      <p>Давление в мм. рт. ст.: <b>{data2?.fact.pressure_mm}</b></p>
                      <p>Давление в Па: <b>{data2?.fact?.pressure_pa}</b></p>

                    </div>
              
                    <div className={styleForm.options}>
                      <div className={styleButton.groupBtn}>
                        <button className={styleButton.btn} onClick={()=>setSection((e)=> e !=true)}>Подробно на сегодня</button>

                        <button className={styleButton.btn} onClick={()=>{setCounter((e)=> e != true)}}>{text}</button>
                      </div>
                    </div>
                    {counter && 
                  <div className={styleButton.item}>
                    <p className={styleButton.par} onClick={()=>{setCounter((e)=> e != true), setText(()=> 'Курск'), fetchData(51.730846, 36.193015)}} >Курск</p>
                    <p className={styleButton.par} onClick={()=>{setCounter((e)=> e != true), setText(()=> 'Москва'), fetchData(55.755864, 37.617698)}} >Москва</p>
                    <p className={styleButton.par} onClick={()=>{setCounter((e)=> e != true), setText(()=> 'Белгород'),  fetchData(50.595414, 36.587277)}}>Белгород</p>
                    <p className={styleButton.par} onClick={()=>{setCounter((e)=> e != true), setText(()=> 'Шебекино'),  fetchData(50.404345, 36.879317)}}>Шебекино</p>
                  </div>}
                  </div>
              </div>
              }
              
              
                    
              
            </>

              );}
            

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
    }}
