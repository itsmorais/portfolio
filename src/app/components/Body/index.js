import Link from 'next/link'
import Image from 'next/image'
import '../../global.css'
import './style.css'

export default function Body(props){
  const {bodydate} = props
  console.log(bodydate)

  return(
    <div>
      <div className='body'>
      <div className='projects'>
       {bodydate.map((projeto)=>(
          <div className='project'>
            <p>{projeto.description}</p>
            <Link href={projeto.link} target={'_blank'}>
              <span>Clique aqui para ver o projeto</span></Link>
            <div className={'image-container'}>
            <Image src={projeto.img} fill  className='{image}'></Image></div>
          </div>
        ))}
      </div>

      <div className='text'><p>Estou me graduando em Análise e Desenvolvimento de Sistemas pela Faculdade Tecnológica de São Paulo e sou estagiário de Desenvolvimento Full-Stack na Nexus-GeoEngenharia. <br/> <br/>

Além disso, trabalho como freelancer para empresas locais de São José dos Campos-SP, com foco em design visual e desempenho de site, garantindo que os requisitos não funcionais sejam atendidos para a satisfação do usuário.</p></div>


      </div>
    </div>
  )
}


module.exports = Body