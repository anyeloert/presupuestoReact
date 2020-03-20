import React from 'react';
import Gasto from './Gasto';


const Gastos = (props) => {

    const {gastos, guardarRestante, guardarGastos, restante} = props

    return (
        <div className = 'gastos-realizados'>
            <h2>Listado</h2>
            {gastos.map(gasto => (
                <Gasto
                    key = {gasto.id}
                    gasto = {gasto}
                    gastos = {gastos}
                    restante = {restante}
                    guardarRestante = {guardarRestante}
                    guardarGastos = {guardarGastos}
                />
            ))}            
        </div>
    );
};

export default Gastos;