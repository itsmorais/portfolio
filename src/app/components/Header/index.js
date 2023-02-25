import '../../global.css'
import './style.css'
import Link from 'next/link'

export default function Nav(){
  return(
    <div className='navigation'>
      <Link href={'/'}><p>  Home </p> </Link>
      <Link href={'/'}><p>  Translate this page </p></Link>
      <Link href={'/'}><p>  Vida Pessoal</p> </Link>
      <Link href={'/'}><p>  Entre em contato</p> </Link>

    </div>
  )
}


module.exports = Nav