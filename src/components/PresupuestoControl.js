import React, {Fragment} from 'react';

const PresupuestoControl = ({presupuesto,restante}) => {

    const revisarPresupuesto = (presupuesto,restante) => {
        let clase;
        // Comprobar el 25% 
        if( (presupuesto / 4) > restante) {
             clase = 'alert alert-danger';
        } else if( (presupuesto / 2) > restante) {
            clase = 'alert alert-warning'
        } else {
            clase = 'alert alert alert-success';
        }
        return clase;
    } 

    return (
        <Fragment>
            <div className='alert alert-primary'>
                Presupuesto: ${presupuesto}
            </div>
            <div className={revisarPresupuesto(presupuesto,restante)}>
                Restante: ${restante}
            </div>

            
        </Fragment>
    );
};

export default PresupuestoControl;