import '../../global.css'
import './style.css'
import Link from 'next/link'

export default function Nav(){
  return(
    <div className='navigation'>
      <Link href={'/'}><p>  Home </p> </Link>
      <Link href={'/'}><p>  Translate this page </p></Link>
      <Link href={'https://wa.me/5512996791297?text=Olá%20Visitei%20seu%20website'} target='_blank'><p>  Entre em contato</p> </Link>

    </div>
  )
}


module.exports = Nav