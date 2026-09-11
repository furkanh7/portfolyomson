import React from 'react';
import photo from '../../assets/images/profile.jpg';

import Title from '../../components/ui/Title';
import { HiDownload } from 'react-icons/hi';

const skills = [
  '.net',
  'mssql',
  'c#',
  '.net core',
  'redis',
  'docker',
  'python',
  'api',
  'c++',
  'postgresql',
  'mvc',
  'git&github',
];

const About = () => (
  <div>
    <Title>benim hakkımda</Title>

    <div className='mt-6 flex flex-wrap-reverse gap-6'>
      <div className='md:flex-1'>
        <p className='text-lg font-light leading-relaxed'>
          merhaba, ben furkan. backend geliştirme alanında uzmanlaşmaya çalışan bir
          yazılımcıyım. izmir'de yaşıyorum ve sürekli yeni teknolojiler öğrenerek kendimi
          geliştiriyorum.
        </p>

        <a
          href='/furkan_hilaloglu_CV.pdf'
          target='_blank'
          rel='noopener noreferrer'
          className='mt-4 inline-block rounded-lg border border-gray-300 bg-gray-50 p-2
            text-sm text-blue-600 shadow-md transition-colors hover:bg-gray-100
            focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-400
            dark:border-gray-600 dark:bg-gray-700 dark:text-blue-400
            dark:hover:bg-gray-600'
        >
          <span className='flex items-center gap-2'>
            <HiDownload />
            cv'mi görüntüle
          </span>
        </a>
      </div>

      <div className='w-40 md:w-48'>
        <div className='h-40 w-40 rounded-full border border-gray-200 p-1 shadow-lg
          md:h-48 md:w-48 dark:border-gray-600'>
          <div className='h-full w-full overflow-hidden rounded-full'>
            <img
              src={photo}
              alt='Furkan Hilaloğlu portre fotoğrafı'
              loading='lazy'
              className='h-full w-full object-cover'
            />
          </div>
        </div>
      </div>
    </div>

    <div className='mt-6'>
      <Title>yeteneklerim</Title>
      <div className='mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3'>
        {skills.map((skill) => (
          <span
            key={skill}
            className='rounded-md border border-gray-800 px-2 py-1 text-center text-sm
              transition-colors hover:bg-gray-800 hover:text-white md:text-xs
              dark:border-gray-400 dark:hover:bg-white dark:hover:text-black'
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default About;
