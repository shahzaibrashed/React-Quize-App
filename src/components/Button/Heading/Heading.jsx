import './Heading.css'
const Heading = ({label})=>{
return (<h1 className='heading1'>{label ?? "No Headings"}</h1>)
}
export default Heading;