import React from 'react';
import { Link } from 'react-router-dom';
import Title from '../../components/ui/Title';

/*
  Router'da karşılığı olmayan adresler için. public/404.html bilinmeyen bir
  adresi kök adrese yönlendirdiğinde uygulama artık boş içerik göstermek
  yerine bu sayfayı açıyor.
*/
const NotFound = () => (
  <div>
    <Title>sayfa bulunamadı</Title>
    <p className='mt-4 text-lg font-light'>
      aradığın sayfa taşınmış ya da hiç var olmamış olabilir.
    </p>
    <Link
      to='/'
      className='mt-6 inline-block rounded-xl border border-gray-300 px-4 py-2
        transition-colors hover:bg-gray-50
        focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400
        dark:border-gray-600 dark:hover:bg-gray-700'
    >
      ana sayfaya dön
    </Link>
  </div>
);

export default NotFound;
