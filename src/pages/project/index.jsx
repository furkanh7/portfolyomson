import React from 'react';
import Title from '../../components/ui/Title';
import { BsGithub } from 'react-icons/bs';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { FiTool } from 'react-icons/fi';

/*
  Renkler proje sırasına göre sabit. Daha önce her render'da Math.random()
  ile seçildiği için kart renkleri sayfa yeniden çizildikçe değişiyordu.
*/
const gradients = [
  'from-indigo-500 to-purple-500',
  'from-emerald-400 to-cyan-500',
  'from-orange-500 to-red-500',
  'from-teal-400 to-blue-600',
  'from-rose-400 to-pink-600',
  'from-violet-500 to-fuchsia-500',
  'from-sky-400 to-indigo-600',
  'from-amber-400 to-orange-600',
];

/* link yoksa proje yapım aşamasında sayılır */
const projects = [
  {
    name: 'usepost-it',
    description: 'notlarını, fikirlerini ve projelerini organize eden retro pixel tasarımlı web uygulaması',
    link: 'https://usepost-it.com',
  },
  {
    name: 'bond',
    description: 'yapım aşamasında olan uygulamam, yakında burada',
  },
  {
    name: 'blog projesi',
    link: 'https://github.com/furkanh7/BlogProject',
  },
  {
    name: 'acun medya festival',
    link: 'https://github.com/furkanh7/AcunMedyaAkademiFestival',
  },
  {
    name: 'otel projesi',
    link: 'https://github.com/furkanh7/HotelProject',
  },
];

const CardBody = ({ project }) => {
  const isGithub = project.link?.includes('github.com');
  const Icon = project.link ? (isGithub ? BsGithub : HiOutlineExternalLink) : FiTool;
  const label = project.link
    ? isGithub
      ? "github'da gör"
      : 'siteye git'
    : 'yapım aşamasında';

  return (
    <>
      <div>
        <h4 className='inline-block border-b border-white/20 text-lg font-semibold
          text-white sm:text-xl'>
          {project.name}
        </h4>
        {project.description && (
          <p className='mt-1 text-xs font-light leading-snug text-white/90'>
            {project.description}
          </p>
        )}
      </div>
      <p
        className={`mt-2 flex items-center justify-end gap-1 text-sm font-semibold
          text-white ${project.link ? 'transition-transform group-hover:translate-x-2' : ''}`}
      >
        <Icon />
        {label}
      </p>
    </>
  );
};

const Project = () => (
  <div>
    <Title>projelerim</Title>
    <div className='mt-4 grid grid-cols-1 gap-4 md:grid-cols-2'>
      {projects.map((project, i) => {
        const gradient = gradients[i % gradients.length];

        /* yapım aşamasındaki proje tıklanabilir değil: <a> yerine <div> */
        if (!project.link) {
          return (
            <div
              key={project.name}
              className={`flex min-h-[100px] flex-col justify-between rounded-xl border-2
                border-dashed border-white/40 bg-gradient-to-r ${gradient} p-4
                opacity-80 shadow-lg`}
            >
              <CardBody project={project} />
            </div>
          );
        }

        return (
          <a
            href={project.link}
            key={project.name}
            target='_blank'
            rel='noopener noreferrer'
            className='rounded-xl focus:outline-none focus-visible:ring-2
              focus-visible:ring-gray-400'
          >
            <div
              className={`group flex h-full min-h-[100px] cursor-pointer flex-col
                justify-between rounded-xl bg-gradient-to-r ${gradient} p-4 shadow-lg
                transition-transform hover:scale-105`}
            >
              <CardBody project={project} />
            </div>
          </a>
        );
      })}
    </div>
  </div>
);

export default Project;
