import React from 'react'
import './App.css'
import Button from '../Botão/button'
import Escrita from '../Escritas/Escrita'
import Icone from '../../images/icon-star.svg'


const App = () => {

   // const [submit, setSubmit]= React.useState(null)
    
    return(
        <div className='container'>
            <img className='star' src={Icone} alt="" />
            <Escrita 
            h1="How did we do?"
            p="Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!"
            />
            <Button 
            b1='1'
            b2='2'
            b3='3'
            b4='4'
            b5='5'
            />
            <button className='submit'>Submit</button>
        </div>
    )
}

export default App