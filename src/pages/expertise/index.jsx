// src/pages/expertise/Index.js

import React, { useState } from 'react';
import Title from '../../components/ui/Title'; // Title komponentinizin yolunu kontrol edin
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'; // İkonları import ediyoruz

const ExpertisePage = () => {
  // --- STATE TANIMLAMALARI ---
  
  // İş deneyimi kartlarının açık/kapalı durumu
  const [expandedWork, setExpandedWork] = useState({});
  // Eğitim kartlarının açık/kapalı durumu (YENİ)
  const [expandedEducation, setExpandedEducation] = useState({});

  // --- TOGGLE FONKSİYONLARI ---

  // İş deneyimi kartını aç/kapa
  const toggleWorkExpand = (index) => {
    setExpandedWork(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  // Eğitim kartını aç/kapa (YENİ)
  const toggleEducationExpand = (index) => {
    setExpandedEducation(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  // --- VERİLER ---

  const workExperiences = [
    {
      title: 'acun medya akademi backend developer bootcamp',
      company: 'acun medya akademi - nişantaşı üniversitesi',
      date: 'aralık 2023 - ağustos 2024',
      description: "eğitim sürecinde yazılım geliştirme süreçlerine yönelik algoritmik düşünme becerisi kazandım; takım çalışmasıyla proje yönetimi, .net core tabanlı uygulama geliştirme, mvc mimarisi ile katmanlı yapı kurma, entity framework ile veri tabanı işlemlerini yönetme, restful api tasarımı ve entegrasyonu ile azure platformu üzerinde uygulama yayına alma konularında pratik deneyim edindim.",
      skills: ['.net core', 'c#', 'mssql', 'azure', 'asp.net mvc', 'git']
    },
    {
      title: 'backend developer stajyer',
      company: 'sisbim yazılım teknolojileri a.ş.',
      date: 'haziran 2023 - ağustos 2023',
      description: "scrum metodolojisi ile yürütülen projelerde backend geliştirme süreçlerine aktif olarak katıldım. .net core ile restful api'ler geliştirdim, mevcut projelerin bakım ve geliştirme çalışmalarında görev aldım. veri erişimi için entity framework kullandım, mssql üzerinde veritabanı işlemleri gerçekleştirdim. kod versiyonlamasında git kullandım ve takım içi iş birliğiyle geliştirme süreçlerini yürüttük.",
      skills: ['.net core', 'asp.net', 'asp.net api', 'postgresql', 'git', 'redis']
    },
    {
      title: 'yazılım geliştirici stajyer',
      company: 'belsoft yazılım çözümleri ltd.',
      date: 'temmuz 2022 - ağustos 2022',
      description: 'c# ile yazılım otomasyonu ve süreç iyileştirme çalışmaları gerçekleştirdim. asp.net core ve mvc mimarisi kullanarak web uygulamaları geliştirdim. veri erişim ve yönetimi için entity framework’ten faydalandım. yazılım geliştirme ekibiyle birlikte tam kapsamlı projelerde aktif olarak görev aldım.',
      skills: ['c#', '.net', 'mssql', 'git']
    },
    // buraya kendi iş deneyimlerinizi ekleyebilirsiniz
  ];
  
  const education = [
    {
      degree: 'bilgisayar programcılığı',
      school: 'konya teknik üniversitesi',
      date: '2021 - 2024',
      description: 'başarı bursu ile tamamladım. bitirme projem "işletme takip otomasyonu" üzerineydi.',
      gpa: '3.60 / 4.00',
    },
    {
      degree: 'anadolu lisesi',
      school: 'açı kırşan anadolu lisesi',
      date: '2016 - 2020',
      description: 'sayısal bölümden mezun oldum.',
    },
    // buraya kendi eğitim bilgilerinizi ekleyebilirsiniz
  ];

  // --- RENDER (JSX) ---

  return (
    <div>
      <Title>deneyimlerim</Title>
      <br />

      {/* --- İŞ DENEYİMİ BÖLÜMÜ --- */}
      <div className='mt-6'>
        <h2 className='text-2xl font-semibold mb-6 dark:text-white'>iş deneyimi & stajlar</h2>
        {workExperiences.length > 0 ? (
          workExperiences.map((exp, index) => (
            <div 
              key={index} 
              className='mb-6 p-4 border border-gray-300 dark:border-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'
            >
              {/* Tıklanabilir Başlık Alanı (Her zaman görünür) */}
              <div
                className='cursor-pointer'
                onClick={() => toggleWorkExpand(index)}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') toggleWorkExpand(index); }}
                role="button"
                tabIndex={0}
                aria-expanded={!!expandedWork[index]}
                aria-controls={`work-exp-content-${index}`}
              >
                <div className='flex justify-between items-start'>
                  <h3 className='text-xl font-medium text-gray-900 dark:text-gray-100'>{exp.title}</h3>
                  <span className="text-xl text-gray-600 dark:text-gray-400 p-1">
                    {expandedWork[index] ? <FiChevronUp /> : <FiChevronDown />}
                  </span>
                </div>
                <p className='text-md font-semibold text-blue-600 dark:text-blue-400'>{exp.company}</p>
                <p className='text-sm text-gray-500 dark:text-gray-400 my-1'>{exp.date}</p>
              </div>

              {/* Açılır/Kapanır İçerik (Detaylar) */}
              {expandedWork[index] && (
                <div id={`work-exp-content-${index}`} className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
                  <p className='font-light text-gray-700 dark:text-gray-300 mb-3'>{exp.description}</p>
                  {exp.skills && exp.skills.length > 0 && (
                    <div className='flex flex-wrap gap-2'>
                      {exp.skills.map(skill => (
                        <span key={skill} className='text-xs bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 px-2 py-1 rounded-full'>
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))
        ) : (
          <p className='font-light text-gray-600 dark:text-gray-400'>Henüz iş deneyimi eklenmemiş.</p>
        )}
      </div>

      {/* --- EĞİTİM BÖLÜMÜ (GÜNCELLENDİ) --- */}
      <div className='mt-10'>
        <h2 className='text-2xl font-semibold mb-6 dark:text-white'>eğitim</h2>
        {education.length > 0 ? (
          education.map((edu, index) => (
            <div 
              key={index} 
              className='mb-6 p-4 border border-gray-300 dark:border-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'
            >
              {/* Tıklanabilir Başlık Alanı (Her zaman görünür) */}
              <div
                className='cursor-pointer'
                onClick={() => toggleEducationExpand(index)}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') toggleEducationExpand(index); }}
                role="button"
                tabIndex={0}
                aria-expanded={!!expandedEducation[index]}
                aria-controls={`edu-content-${index}`}
              >
                <div className='flex justify-between items-start'>
                  <h3 className='text-xl font-medium text-gray-900 dark:text-gray-100'>{edu.degree}</h3>
                  <span className="text-xl text-gray-600 dark:text-gray-400 p-1">
                    {expandedEducation[index] ? <FiChevronUp /> : <FiChevronDown />}
                  </span>
                </div>
                <p className='text-md font-semibold text-blue-600 dark:text-blue-400'>{edu.school}</p>
                <p className='text-sm text-gray-500 dark:text-gray-400 my-1'>{edu.date}</p>
              </div>

              {/* Açılır/Kapanır İçerik (Detaylar: GPA ve Açıklama) */}
              {expandedEducation[index] && (
                <div id={`edu-content-${index}`} className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
                  {edu.gpa && <p className='text-sm font-light text-gray-600 dark:text-gray-300 mb-1'>not ortalaması: {edu.gpa}</p>}
                  <p className='font-light text-gray-700 dark:text-gray-300 mt-2'>{edu.description}</p>
                </div>
              )}
            </div>
          ))
        ) : (
          <p className='font-light text-gray-600 dark:text-gray-400'>Henüz eğitim bilgisi eklenmemiş.</p>
        )}
      </div>
    </div>
  );
};

export default ExpertisePage;