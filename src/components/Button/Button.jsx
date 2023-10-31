import './Button.css'
const Button = ({onClick,label})=>{
    return <div className='allBtn'>
        <button onClick={onClick} className='shortbtn'> 
    {label ?? "Click Me" }</button>
    </div>
}
export default Button;