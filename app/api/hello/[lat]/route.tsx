import { NextResponse } from "next/server";

export async function GET(req: Request){
  let  id = req.url.slice(req.url.lastIndexOf('/')+1)
  let lat = id.split('&')[0]
  let lon = id.split('&')[1]
  
  return NextResponse.json(await getData(lat, lon));
}

async function getData(lat:string, lon:string) {

const key = 'e756c7ea-8334-4b5a-9831-9ddede051bf6';
let url = `https://api.weather.yandex.ru/v2/forecast?lat=${lat}&lon=${lon}&extra=false&limit=1`;
console.log(url);

 let res = await fetch(url,{
    headers:{ 'X-Yandex-API-Key': key}
 })
  return res.json();
}
