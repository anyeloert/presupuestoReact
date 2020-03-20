import React, {Fragment, useState} from 'react';
import Error from './Error'

const Pregunta = (props) => {

    const {guardarPresupuesto, guardarPreguntarPresupuesto, guardarRestante} = props

    const [cantidad, guardarcantidad] = useState(0)
    const [error, guardarError] = useState(false)

    const agregarcantidad = e => {
        e.preventDefault();
        if (cantidad <= 0 || isNaN(cantidad)){
            guardarError(true);
            return;
        }

        guardarError(false)
        guardarPresupuesto(cantidad)
        guardarPreguntarPresupuesto(false)
        guardarRestante(cantidad)
        
    }

    return (
        <Fragment>
            <h2>Coloque su presupuesto</h2>
            {error ? <Error mensaje='Ingrese una cantidad válida' /> : null}
            <form onSubmit={agregarcantidad}>
                <input type='number'
                        className='u-full-width'
                        placeholder='agrega tu presupuesto'
                        onChange={e => guardarcantidad(parseFloat(e.target.value))}
                />
                <input type='submit'
                        className='button-primary u-full-width'
                        value='Definir presupuesto'
                />
            </form>
        </Fragment>
    );
};

export default Pregunta;