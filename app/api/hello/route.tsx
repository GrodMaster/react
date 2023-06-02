import { cookies } from "next/dist/client/components/headers";
import { NextResponse } from "next/server";

export async function GET(){
  let lat =  cookies().get('locationLat')?.value??'55.442398'
    
  let lon =  cookies().get('locationLon')?.value??'35.11241'  
  return NextResponse.json(await getData(lat, lon));
}

async function getData(lat:string, lon:string) {

const key = '9e13767e-c4fa-4e22-8203-3dfb4942eeb3';
let url = `https://api.weather.yandex.ru/v2/forecast?lat=${lat}&lon=${lon}&extra=false&limit=1`;
console.log(url);

 let res = await fetch(url,{
    headers:{ 'X-Yandex-API-Key': key}
 })
  return res.json();
}