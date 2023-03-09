import '../../global.css'
import './style.css'

export default function Buttons(props){
  return(
    <div>
      <div className='retangle'>
        <button onClick={props.onClick} id='black_retangle'><p>{props.title}</p></button>
        <p>{props.text}</p>
      </div>
    </div>
  )
}


module.exports = Buttons