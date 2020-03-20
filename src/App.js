import React, {useState, useEffect} from 'react';
import Pregunta from './components/Pregunta'
import Formulario from './components/Formulario'
import Gastos from './components/Gastos';
import PresupuestoControl from './components/PresupuestoControl';


function App() {




  const [presupuesto, guardarPresupuesto] = useState(0)
  const [restante, guardarRestante] = useState(0)
  const [preguntarPresupuesto, guardarPreguntarPresupuesto] = useState(true)
  const [hayGasto, guardarHayGasto] = useState(false)  
  const [gasto, guardarGasto] = useState({})
  const [gastos, guardarGastos] = useState([])

  useEffect(() =>{
    //  evitar que muestre gastos aunque no exista aun ninguno

    if (hayGasto){
      //agregar nuevo gasto a gastos
      const listaGastos = [...gastos, gasto]
      guardarGastos(listaGastos)
      
      // para que el useEffect este pendiente de que 'hayGasto' cambie
      guardarHayGasto(false)

      //Actualizar Restante

      guardarRestante(restante - gasto.cantidadGasto)
    }


  }, [hayGasto, gasto, gastos, restante])

  

  return (
    <div className="App container">
      <header className="App ">
        <h1>Gasto semanal</h1>
        <div className='contenido-principal contenido'>              
          {preguntarPresupuesto 
            ? <Pregunta
                  guardarPresupuesto={guardarPresupuesto}
                  guardarPreguntarPresupuesto={guardarPreguntarPresupuesto}
                  guardarRestante = {guardarRestante}
                />
            : <div className='row'>
                <div className='one-half column'>
                  <Formulario
                    guardarGasto = {guardarGasto}
                    guardarHayGasto = {guardarHayGasto}
                  />
                </div>
                <div className='one-half column'>
                  <Gastos
                    gastos = {gastos}
                    guardarRestante = {guardarRestante}
                    guardarGastos = {guardarGastos}
                    restante = {restante}
                  />
                  <PresupuestoControl
                    presupuesto = {presupuesto}
                    restante = {restante}
                  />
                </div>
              </div>
          }
        </div>
        
      </header>
    </div>
  );
}

export default App;
