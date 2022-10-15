import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import photo from '../../assets/foto.png';
import github from '../../assets/github.webp';
import email from '../../assets/email.webp';
import linkedin from '../../assets/linkedin.webp';
import instagram from '../../assets/instagram.png';
import { ReactComponent as Instagram } from '../../assets/instagram.svg';
import { ReactComponent as Github } from '../../assets/github.svg';


import { Card } from '../../components/Card';

export function Home() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  const link = [
    {
      img: github,
      title: 'Github',
      description: 'Link do meu perfil do github. @gui-olperes',
      url: 'https://github.com/gui-olperes',
    },
    {
      img: email,
      title: 'Email',
      description:
        ' fique a vontade para entrar em contato comigo! ',
      url: 'mailto:guilherme.peres061103@gmail.com',
    },
    {
      img: linkedin,
      title: 'Linkedin',
      description: 'Meu perfil do Linkedin para me acompanharem por lá!',
      url: 'https://www.linkedin.com/in/guilherme-olperes/',
    },
    {
      img: instagram,
      title: 'Instagram',
      description: 'Meu perfil do Instagram para seguirem!',
      url: 'https://www.instagram.com/guiiol_/',
    },
  ];
  return (
    <>
      <div className="container p-4 align-items-center text-center ">
        <img src={photo} alt="" width={'190px'} className="px-2" />

        <h5>Guilherme Peres</h5>
        <p className="m-0">@gui-olperes</p>
   
      </div>
     
      <div className="container p-4 col-12 row m-auto">
        {link.map((link) => {
          return <Card links={link} />;
        })}
      </div>
     
     
    </>
  );
}
