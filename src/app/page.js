import '../app/global.css'
import Body from './components/Body'
import Buttons from './components/Buttons'
import Header from './components/Header'
import Profile from './components/Profile'


export default function Home() {
  const bodydate = [{description:'Projeto Desenvolvido com: React, NodeJS, Knex, Sqlite, Html, Css, styled-components, e JWT',link:' https://moraisnotes.netlify.app/',img:'/notes.png'},{description:'Projeto Desenvolvido com Javascript,Html,Css, swiper, responsivo para web e mobile',link:' https://itsmorais.github.io/SalaoAJ/',img:'/aj.png'}]

  const profissional = false
  return (
    <div>
    <Header/>
    <Profile/>
    {profissional 
    ? <Buttons title='Skills' text='Vida profissional'></Buttons>
    :  
    <Buttons title='Soft - Skills' text='Vida pessoal + Curiosidades'></Buttons>
  } 
  <Body bodydate={bodydate}></Body>
   
    </div>
      )
}
