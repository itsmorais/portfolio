"use client";

import '../app/global.css';
import Body from './components/Body';
import Buttons from './components/Buttons';
import Header from './components/Header';
import Profile from './components/Profile';
import React, { useState, useEffect } from 'react';

export default function Home() {
  const [isProfessional, setIsProfessional] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleButtonClick = () => {
    setIsProfessional(!isProfessional);
    document.querySelector('.profissional').classList.add('show');
  };

  useEffect(() => {
    setIsLoading(false);
    document.querySelector('.profissional').classList.add('show');
  }, []);

  let bodyData = [
    {
      description:
        'Projeto Desenvolvido com: React, NodeJS, Knex, Sqlite, Html, Css, styled-components, e JWT',
      link: 'https://moraisnotes.netlify.app/',
      img: '/notes.png',
    },
    {
      description:
        'Projeto Desenvolvido com Javascript,Html,Css, swiper, responsivo para web e mobile',
      link: 'https://itsmorais.github.io/SalaoAJ/',
      img: '/aj.png',
    },
  ];

  let hugeText =
    'Estou me graduando em Análise e Desenvolvimento de Sistemas pela Faculdade Tecnológica de São Paulo e sou estagiário de Desenvolvimento Full-Stack na Nexus-GeoEngenharia.Além disso, trabalho como freelancer para empresas locais de São José dos Campos-SP, com foco em design visual e desempenho de site, garantindo que os requisitos não funcionais sejam atendidos para a satisfação do usuário.';

  if (isProfessional) {
    bodyData = [
      {
        description:
          'Falar em público: Já ministrei aulas de inglês para turmas  iniciantes em Dublin e atuei como catequista na paróquia Santa Luzia por 2 anos',
        img: '/port11.png',
      },
      {
        description:
          'Trabalho em equipe: Por onde passei fiz amigos e sempre mantive um bom relacionamento',
        img: '/port22.png',
      },
    ];
    hugeText =

      'Sou natural de São José dos Campos-SP, fã das ciências humanas e tecnologia.Cursei um ano de licenciatura em história na UNIVAP, continuando minha paixão por meio de livros e palestras.Morei por nove meses em Dublin, na Irlanda, a melhor experiência que já tive.Trabalhei por quatro anos no setor aeronáuticoNamoro a mulher mais incrível que já conheci. Planejamos nos formar juntos, viajar bastante e formar uma família.';
  }

  return (
    <div className={`profissional ${isLoading ? 'fade-in hide' : 'fade-in show'}`}>
      <Header />
      <Profile />
      <div className={`profissional ${isLoading ? 'fade-in hide' : 'fade-in show'}`}>
        <Buttons
          onClick={handleButtonClick}
          title={isProfessional ? 'Soft - Skills' : 'Hard - Skills'}
          text={isProfessional ? 'Vida pessoal + Curiosidades' : 'Vida profissional + Habilidades'}
        />
        <Body bodyData={bodyData} hugeText={hugeText} />
      </div>
      <footer id='rodape'>© Michael Morais 2023 All rigths reserved</footer>
    </div>
  );
}
