import React, {Fragment, useState} from 'react'

 const Contador = () => {


    const [numero, setNumero] = useState(0)
    const Aumentar = () =>{
        setNumero(numero + 1)
    }
    const Reducir = () =>{
        setNumero(numero - 1)
    }

  return (
    <Fragment>
        <h2>Cantidad del contador: {numero} </h2>
        <p>Aplicando useState</p>
        <button onClick={Aumentar}>Aumentar</button>
        <button onClick={Reducir}>Reducir</button>
    </Fragment>
  )
}

export default Contador