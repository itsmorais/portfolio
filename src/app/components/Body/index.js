import Link from 'next/link'
import Image from 'next/image'
import '../../global.css'
import './style.css'


export default function Body(props) {
  const { bodyData } = props
  const { hugeText } = props
  const paragraphs = hugeText.split(".");


  return (
    <div>
      <div className='body'>
        <div className='projects'>
          {bodyData.map((projeto) => (
            <div key={projeto.description} className='project'>
              <p>{projeto.description}</p>
              {projeto.link &&
                <Link href={projeto.link} target={'_blank'}>
                  <span>Clique aqui para ver o projeto</span>
                </Link>}

              <div className={'image-container'}>
                <Image
                  src={projeto.img}
                  alt={'Imagem de projeto web com javascript'}
                  fill
                  className='{image}'
                  sizes="(max-width: 280px) 100vw,(max-width:280px) 50vw,33vw"
                >
                </Image></div>
            </div>
          ))}
        </div>

        <div className="text">
          {/* Render each paragraph as a separate <p> element */}
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>


      </div>
    </div>
  )
}


module.exports = Body