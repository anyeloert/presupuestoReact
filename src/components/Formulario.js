import React, {useState} from 'react';
import Error from './Error'
import shortid from 'shortid';

const Formulario = (props) => {

    const {guardarGasto, guardarHayGasto} = props

    const [nombreGasto, guardarNombreGasto] = useState('')
    const [cantidadGasto, guardarCantidadGasto] = useState(0)
    const [error, guardarError] = useState(false)

    const handleSubmit = e => {
        e.preventDefault()
        // hacer la validacion
        if (cantidadGasto <= 0 || isNaN(cantidadGasto) || nombreGasto === ''){
            guardarError(true);
            return;
        }

        const gasto = {
            nombreGasto,
            cantidadGasto,
            id : shortid.generate()
        }

        //Guardar gasto en el state
        guardarGasto(gasto)
        guardarHayGasto(true)

        //cambiar error
        guardarError(false)

        //Reiniciar Formulario

        guardarNombreGasto('')
        guardarCantidadGasto('')


    }

    return (
        <form
            onSubmit={handleSubmit}
        >
            <h2>Agrega tu gasto aquí</h2>
            {error ? <Error mensaje='Ambos campos son obligatorios o presupuesto incorrecto' /> : null}
            <div className='campo'>
                <label>Nombre Gasto</label>
                <input
                    type='text'
                    className='u-full-width'
                    placeholder='Ej. Transporte'
                    onChange={e => guardarNombreGasto(e.target.value)}
                    value = {nombreGasto}
                />
            </div>
            <div className='campo'>
                <label>Cantidad</label>
                <input
                    type='number'
                    className='u-full-width'
                    placeholder='Ej. 300'
                    onChange={e => guardarCantidadGasto(parseFloat(e.target.value))}
                    value = {cantidadGasto}
                />
            </div>
            <input
                type='submit'
                className='button-primary u-full-width'
                value='Añadir Gasto'
            />
        </form>
    );
};

export default Formulario;