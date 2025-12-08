import { useReducer } from "react"
import { dashboardReducer, initialState } from "../reducers/ChartReducer"


export const UseChart = () => {
  const [state, dispatch ]= useReducer (dashboardReducer, initialState)
  const ids = new Set();

  const agregarGrafico = (grafico)=>{
    console.log("Datos originales del grafico: ", grafico)

    if (!ids.has(grafico.id)) {
      ids.add(grafico.id);
      dispatch({type: 'crear_grafico', payload: grafico })
    }else{
      console.warn("El grafico con ID ", grafico.id, " ya existe y no se puede agregar de nuevo.")
    }

  }

  const actualizarGrafico = (graficoelegido)=>{
    console.log("hook useChart-aactualizado ", graficoelegido)
    dispatch( {type: "actualizar_grafico", payload: graficoelegido} )

  }

  const eliminarGrafico = (id) => {
    dispatch({type: 'eliminar_grafico',payload: {id} })

  }


  return {
    state,
    agregarGrafico,
    actualizarGrafico,
    eliminarGrafico

  }
}
