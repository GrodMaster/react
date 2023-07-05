'use client'
import nodemailer from 'nodemailer';
import { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e:any) => {
    e.preventDefault();

    // Создайте транспорт для отправки писем
    const transporter = nodemailer.createTransport({
        service: "gmail",
      host: 'smtp.gmail.com', // Замените на свой SMTP-сервер
      port: 587,
      secure: false,
      auth: {
        user: 'grodmaster2517@gmail.com', // Замените на свою почту
        pass: 'voron2517', // Замените на свой пароль
      },
    });

    // Определите содержимое письма
    const mailOptions = {
      from: email,
      to: 'grodmaster2517@gmail..com', // Замените на свою почту
      subject: `New message from ${name}`,
      text: message,
    };

    // Отправьте письмо
    await transporter.sendMail(mailOptions);

    // Очистите поля формы после отправки
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div>
      <h1>Contact</h1>
      <form >
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your message"
        />
        <button type="submit" onSubmit={handleSubmit}>Send</button>
      </form>
    </div>
  );
}