import React, { useEffect, useState } from 'react'
import photo1 from '../../assets/images/photo1.jpg';

import Title from '../../components/ui/Title';
import {HiDownload} from 'react-icons/hi'

const Index = () => {

  const photos = [photo1];
  const [currentPhoto, setCurrentPhoto] = useState(0);

  const skills = [".net","mssql","c#",".net core","redis","docker",
          "python","api","c++","postgresql","mvc","git&github"];

  return (
    <div>
        <Title>benim hakkımda</Title>
        <br />
        {/* Content section with photo */}
        <div className='flex flex-wrap-reverse mt-4 gap-6'>
          <div className='md:flex-1'>
            <p className='font-light text-lg'>merhaba, ben furkan. backend geliştirme alanında uzmanlaşmaya çalışan bir yazılımcıyım. izmir’de yaşıyorum ve sürekli yeni teknolojiler öğrenerek kendimi geliştiriyorum.
            </p>
            <div className='mt-4 p-1 border bg-gray-100 inline-block text-blue-400 dark:text-black sm:text-sm text-sm rounded-lg shadow-md'>
              <a href="/furkan_hilaloglu_CV.pdf" target="_blank" rel="noopener noreferrer">
                  <div className='flex gap-2 items-center'>
                    <HiDownload />
                    cv'mi görüntüle
                  </div>
              </a>
            </div>
          </div>
          <div className='md:w-48 w-40'>
            <div className='w-40 h-40 md:w-48 md:h-48 p-1 border shadow-lg rounded-full'>
              <div className='rounded-full overflow-hidden w-full h-full'>
                <img
                  src={photos[currentPhoto]}
                  alt="Furkan Hilaloğlu"
                  className='object-cover w-full h-full'
                />
              </div>
            </div>
          </div>
        </div>

        <div className='mt-6'>

          <div>
              <Title>yeteneklerim</Title>
              <div className='mt-4 grid grid-cols-3 gap-2'>
                  {
                    skills.map((skill,i) => (
                      <span className='border md:text-xs text-sm border-black dark:border-white text-center
                      py-1 px-2 rounded-md hover:bg-gray-800 hover:text-white transition-colors'
                      key={i}>{skill}</span>
                    ))
                  }
              </div>
          </div>
        </div>
    </div>
  )
}

export default Index