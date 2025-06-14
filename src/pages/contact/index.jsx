import React, { useState } from 'react';
import Title from '../../components/ui/Title';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import { FaInstagram, FaMedium } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';
import { BsGithub } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';

import emailjs from 'emailjs-com';

// EmailJS'i başlat
emailjs.init('ipF6aclGp6BxGrK'); // Public Key'iniz

const Contact = () => {
  const [message, setMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      console.log('Form data:', formData); // Debug için

      const templateParams = {
        name: `${formData.name} ${formData.surname}`,
        email: formData.email,
        message: formData.message,
      };

      console.log('Template params:', templateParams); // Debug için

      const result = await emailjs.send(
        'service_ewpo9bo',      // Service ID - kontrol edin
        'template_zbj7xko',     // Template ID - kontrol edin  
        templateParams,
        'ipF6aclGp6BxGrKjK'      // Public Key - kontrol edin
      );

      console.log('EmailJS Success:', result);
      setMessage('Mesaj başarıyla gönderildi!');
      setFormData({
        name: '',
        surname: '',
        email: '',
        message: ''
      });

      setTimeout(() => {
        setMessage('');
      }, 3000);
    } catch (error) {
      console.error('EmailJS Full Error:', error);
      console.error('Error status:', error.status);
      console.error('Error text:', error.text);
      setMessage(`Hata: ${error.text || 'Mesaj gönderilemedi'}`);
      setTimeout(() => {
        setMessage('');
      }, 3000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Title>bana ulaş</Title>
      <div className='mt-4'>
        <p className='font-light sm:text-lg text-base'>
          herhangi bir sorunuz, öneriniz varsa ya da sadece merhaba demek isterseniz, benimle iletişime geçmekten çekinmeyin.
        </p>
        <a
          href='mailto:furkanhilaloglu9@gmail.com'
          className='my-4 border p-2 rounded-xl sm:inline-block flex justify-center sm:mx-auto mx-4 shadow-xl'
        >
          <div className='flex gap-1 items-center sm:text-base text-sm '>
            <HiOutlineMail className='text-2xl ' />
            furkanhilaloglu9@gmail.com
          </div>
        </a>
        <div>
          <Title addClass={'!text-xl !font-medium text-center'}>sosyal medyalarım</Title>
          <div className='mt-4 flex flex-col items-center gap-4'>
            <div className='flex flex-row justify-center gap-4'>
              <a href='https://www.instagram.com/furkanhilalogluu/' target='_blank' rel="noopener noreferrer" aria-label="Instagram">
                <div
                  className='flex gap-4 border px-2 py-2 rounded-xl
                  justify-center items-center cursor-pointer shadow-xl
                  bg-gradient-to-r from-yellow-500 to-pink-500
                  hover:scale-105 transition-transform'
                >
                  <FaInstagram className='text-3xl hover:opacity-70 cursor-pointer text-white' />
                </div>
              </a>
              <a href='https://www.linkedin.com/in/furkanhilaloglu/' target='_blank' rel="noopener noreferrer" aria-label="LinkedIn">
                <div
                  className='flex gap-4 border px-2 py-2 rounded-xl
                  justify-center items-center cursor-pointer shadow-xl
                  bg-gradient-to-r from-blue-500 to-gray-800
                  hover:scale-105 transition-transform'
                >
                  <AiFillLinkedin className='text-3xl hover:opacity-70 cursor-pointer text-white' />
                </div>
              </a>
              <a href='https://medium.com/@furkanhilaloglu' target='_blank' rel="noopener noreferrer" aria-label="Medium">
                <div
                  className='flex gap-4 border px-2 py-2 rounded-xl
                  justify-center items-center cursor-pointer shadow-xl
                  bg-gradient-to-r from-green-600 to-green-800
                  hover:scale-105 transition-transform'
                >
                  <FaMedium className='text-3xl hover:opacity-70 cursor-pointer text-white' />
                </div>
              </a>
              <a href='https://github.com/furkanh7' target='_blank' rel="noopener noreferrer" aria-label="GitHub">
                <div
                  className='flex gap-4 border px-2 py-2 rounded-xl
                  justify-center items-center cursor-pointer shadow-xl
                  bg-gradient-to-r from-cyan-950 to-gray-950
                  hover:scale-105 transition-transform'
                >
                  <BsGithub className='text-3xl hover:opacity-70 cursor-pointer text-white' />
                </div>
              </a>
            </div>
            <div className='border-b border-gray-500 w-1/4 my-4'></div>
          </div>
        </div>
        <Title>mesajını bırak</Title>
        <form onSubmit={handleSubmit}>
          <div className='mt-6 flex flex-col'>
            <div className='grid grid-cols-2 gap-4 mb-2'>
              <Input 
                placeholder='adınız' 
                required 
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
              <Input 
                placeholder='soyadınız' 
                required 
                name="surname"
                value={formData.surname}
                onChange={handleInputChange}
              />
            </div>
            <Input 
              placeholder='email adresiniz' 
              type="email"
              required 
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className='border p-4 outline-none rounded-xl my-2 dark:text-black'
              placeholder='mesajınız'
              required
            ></textarea>
            <span 
              className={`sm:text-base text-xs text-center my-2 
                ${message.includes('gönderilemedi') ? 'text-red-500' : 'text-green-500'}`}
            >
              {message}
            </span>
            <Button type="submit" disabled={loading}>
              {loading ? 'Gönderiliyor...' : 'Gönder'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;