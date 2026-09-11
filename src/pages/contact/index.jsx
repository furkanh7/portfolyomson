import React, { useState } from 'react';
import Title from '../../components/ui/Title';
import Input from '../../components/ui/Input';
import Button from '../../components/ui/Button';
import { FaInstagram, FaMedium } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';
import { BsGithub } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';

import emailjs from 'emailjs-com';
import {
  EMAILJS_PUBLIC_KEY,
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
} from '../../config/emailjs';

emailjs.init(EMAILJS_PUBLIC_KEY);

const EMPTY_FORM = { name: '', surname: '', email: '', message: '' };

const socials = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/furkanhilalogluu/',
    icon: FaInstagram,
    gradient: 'from-yellow-500 to-pink-500',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/furkanhilaloglu/',
    icon: AiFillLinkedin,
    gradient: 'from-blue-500 to-gray-800',
  },
  {
    name: 'Medium',
    href: 'https://medium.com/@furkanhilaloglu',
    icon: FaMedium,
    gradient: 'from-green-600 to-green-800',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/furkanh7',
    icon: BsGithub,
    gradient: 'from-cyan-950 to-gray-950',
  },
];

const Contact = () => {
  const [formData, setFormData] = useState(EMPTY_FORM);
  const [loading, setLoading] = useState(false);
  /* status: 'idle' | 'success' | 'error' — mesajın rengini metne bakarak
     tahmin etmek yerine buradan belirliyoruz. */
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('idle');
    setMessage('');

    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        name: `${formData.name} ${formData.surname}`.trim(),
        email: formData.email,
        message: formData.message,
      });

      setStatus('success');
      setMessage('mesajın bana ulaştı, en kısa sürede döneceğim. teşekkürler!');
      setFormData(EMPTY_FORM);
    } catch (error) {
      setStatus('error');
      setMessage(
        'mesaj gönderilemedi. doğrudan furkanhilaloglu9@gmail.com adresine yazabilirsin.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Title>bana ulaş</Title>
      <div className='mt-4'>
        <p className='text-base font-light sm:text-lg'>
          herhangi bir sorunuz, öneriniz varsa ya da sadece merhaba demek isterseniz,
          benimle iletişime geçmekten çekinmeyin.
        </p>

        <a
          href='mailto:furkanhilaloglu9@gmail.com'
          className='my-4 mx-4 flex justify-center rounded-xl border border-gray-300 p-2
            shadow-lg transition-colors hover:bg-gray-50
            focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400
            sm:mx-auto sm:inline-block
            dark:border-gray-600 dark:hover:bg-gray-700'
        >
          <div className='flex items-center gap-1 text-sm sm:text-base'>
            <HiOutlineMail className='text-2xl' />
            furkanhilaloglu9@gmail.com
          </div>
        </a>

        <div>
          <Title addClass={'!text-xl !font-medium text-center'}>sosyal medyalarım</Title>
          <div className='mt-4 flex flex-col items-center gap-4'>
            <div className='flex flex-row justify-center gap-4'>
              {socials.map(({ name, href, icon: Icon, gradient }) => (
                <a
                  key={name}
                  href={href}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={name}
                  title={name}
                  className='rounded-xl focus:outline-none focus-visible:ring-2
                    focus-visible:ring-gray-400'
                >
                  <div
                    className={`flex cursor-pointer items-center justify-center rounded-xl
                      bg-gradient-to-r ${gradient} px-2 py-2 shadow-lg
                      transition-transform hover:scale-105`}
                  >
                    <Icon className='text-3xl text-white' />
                  </div>
                </a>
              ))}
            </div>
            <div className='my-4 w-1/4 border-b border-gray-300 dark:border-gray-600' />
          </div>
        </div>

        <Title>mesajını bırak</Title>
        <form onSubmit={handleSubmit} noValidate={false}>
          <div className='mt-6 flex flex-col'>
            <div className='mb-2 grid grid-cols-2 gap-4'>
              <Input
                placeholder='adınız'
                required
                name='name'
                autoComplete='given-name'
                value={formData.name}
                onChange={handleInputChange}
              />
              <Input
                placeholder='soyadınız'
                required
                name='surname'
                autoComplete='family-name'
                value={formData.surname}
                onChange={handleInputChange}
              />
            </div>
            <Input
              placeholder='email adresiniz'
              type='email'
              required
              name='email'
              autoComplete='email'
              value={formData.email}
              onChange={handleInputChange}
            />
            <textarea
              name='message'
              value={formData.message}
              onChange={handleInputChange}
              rows={5}
              className='my-2 rounded-xl border border-gray-300 p-4 text-sm outline-none
                transition-colors placeholder:text-gray-400 sm:text-base
                focus:border-gray-500 focus:ring-2 focus:ring-gray-200
                dark:border-gray-600 dark:bg-gray-700 dark:text-white
                dark:placeholder:text-gray-400 dark:focus:border-gray-400
                dark:focus:ring-gray-600'
              placeholder='mesajınız'
              required
            />

            {message && (
              <span
                role='status'
                aria-live='polite'
                className={`my-2 text-center text-xs sm:text-base ${
                  status === 'error' ? 'text-red-500' : 'text-green-600 dark:text-green-400'
                }`}
              >
                {message}
              </span>
            )}

            <Button type='submit' disabled={loading}>
              {loading ? 'gönderiliyor...' : 'gönder'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
