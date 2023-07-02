import { cookies } from "next/dist/client/components/headers";
import { NextResponse } from "next/server";

export async function GET(){
  let lat =  cookies().get('locationLat')?.value??'55.442398'
    
  let lon =  cookies().get('locationLon')?.value??'35.11241'  
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