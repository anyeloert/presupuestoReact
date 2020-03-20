import React from 'react';

const Gasto = (props) => {

    const {gasto, gastos, guardarRestante, guardarGastos, restante} = props

    const EliminarGasto = id => {
        let copiagastos = [...gastos]
        copiagastos.map ((copiagasto, index) => {
            if (copiagasto.id === id){
                copiagastos.splice(index,1)
            }
        })        
        guardarRestante(restante + gasto.cantidadGasto)
        guardarGastos(copiagastos)
    }

    return (
        <li className='gastos'>
            <p>
                {gasto.nombreGasto}
                <span className = 'gasto'>$ {gasto.cantidadGasto} </span>                
            </p>
            <button 
            className="centered"
            onClick={() => EliminarGasto(gasto.id)}
            >Eliminar</button>
        </li>
    );
};

export default Gasto;