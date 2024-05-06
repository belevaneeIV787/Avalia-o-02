import './button.css'

const Button = ({b1, b2, b3, b4, b5}) => {
    return(
        <>
        <button className='buttons'>{b1}</button>
        <button className='buttons'>{b2}</button>
        <button className='buttons'>{b3}</button>
        <button className='buttons'>{b4}</button>
        <button className='buttons'>{b5}</button>
        </>
    )
}

export default Button