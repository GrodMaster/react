'use client'
import { useState } from "react"
import nodemailer from "nodemailer";
import './style/form.scss'
// import  style  from './style/modules/Home.module.scss'
export default function Home () {




  const [ name, setName ] = useState( '' )
  const [ email, setEmail ] = useState( '' )
  const [ message, setMessage ] = useState( 'hello' )

  const heandleSubmit = async ( e: any ) => {
    e.preventDefault()
    const transporter = nodemailer.createTransport( {
      host: 'smtp.gmail.com',
      port: 465,
      secure: false,
      auth: {
        user: 'grodmaster2517@gmail.com',
        pass: 'voron2517'
      }
    } )
    const mailOptions = {
      from: email,
      to: 'grodmaster2517@gmail.com',
      subject: `New message from ${ name }`,
      text: message
    }

    await transporter.sendMail( mailOptions );

    setName( '' )
    setEmail( '' )
    setMessage( '' )
  }
  return (
    <div className='row'>
      <div className='form'>
        <form>
          <input
            type="text"
            name="name"
            placeholder="Имя"
            value={ name }
            onChange={ ( e ) => setName( e.target.value ) } />

          <input
            type="text"
            name="email"
            placeholder="Email"
            value={ email }
            onChange={ ( e ) => setEmail( e.target.value ) } />
          <button type='submit' onClick={ heandleSubmit }>Отправить</button>
        </form>
      </div>
      <div className='main'></div>
    </div>
  )
}


