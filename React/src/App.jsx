import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //renderizaçao de pagina
  const [resultado, setResultado] = useState("")

  function calculadora(tipo, valor){
 
    if (tipo == 'acao'){
        if(valor == 'c'){
            setResultado("")
        }else if(valor == '='){
            try{
              setResultado(eval(resultado))
            }catch{
              setResultado('erro')
            }
            
        }else{
            setResultado(resultado + valor)
        }
        
    }else if (tipo == 'valor'){
            setResultado(resultado + valor)
    }

}
  return (
    <div>
    <div>
      <div>
        <div className='caixa'>
          <input placeholder={resultado}/>
          
          <div >
            <button onClick={()=>{calculadora('acao', 'c')}}>C</button>
            <button onClick={()=>{calculadora('acao', '/')}}>/</button>
            <button onClick={()=>{calculadora('acao', '*')}}>x</button>
          </div>

          <div >
            <button onClick={()=>{calculadora('valor', '7')}}>7</button>
            <button onClick={()=>{calculadora('valor', '8')}}>8</button>
            <button onClick={()=>{calculadora('valor', '9')}}>9</button>
            <button onClick={()=>{calculadora('acao', '-')}}>-</button>
          </div>
          
          <div >
            <button onClick={()=>{calculadora('valor', '4')}}>4</button>
            <button onClick={()=>{calculadora('valor', '5')}}>5</button>
            <button onClick={()=>{calculadora('valor', '6')}}>6</button>
            <button onClick={()=>{calculadora('acao', '+')}}>+</button>
          </div>

          <div >
            <button onClick={()=>{calculadora('valor', '1')}}>1</button>
            <button onClick={()=>{calculadora('valor', '2')}}>2</button>
            <button onClick={()=>{calculadora('valor', '3')}}>3</button>
            <button onClick={()=>{calculadora('acao', '=')}}>=</button>
          </div>

          <div>
            <button onClick={()=>{calculadora('valor', '0')}}>0</button>
            <button onClick={()=>{calculadora('acao', '.')}}>.</button>
          </div>

        </div>
      </div>
    </div>
  </div>  
  ) 
}

export default App
