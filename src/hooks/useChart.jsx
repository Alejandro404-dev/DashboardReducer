import { useEffect, useReducer, useState } from "react"
import { dashboardReducer, initialState } from "../reducers/ChartReducer"


export const useChart = () => {
  const [state, dispatch] = useReducer(dashboardReducer, initialState)
  const [graficosCargados, setGraficosCargados] = useState(false)
  const ids = new Set();

  useEffect(() => {
    if (!graficosCargados) {
      const storeData = localStorage.getItem("graficos")

      if (storeData) {
        const graficos = JSON.parse(storeData)

        graficos.forEach((grafico) => {

            if (!ids.has(grafico.id)) {
              ids.add(grafico.id)
              dispatch({ type: 'crear_grafico', payload: grafico })
            }
          });
        }
      }
      setGraficosCargados(true) 
    }, [graficosCargados])

    useEffect(()=> {

      if (graficosCargados) {
        localStorage.setItem("graficos", JSON.stringify(state.datos))
        
      }
    }, [state, graficosCargados])

  const agregarGrafico = (grafico) => {
    console.log("Datos originales del grafico: ", grafico)

    if (!ids.has(grafico.id)) {
      ids.add(grafico.id);
      dispatch({ type: 'crear_grafico', payload: grafico })
    } else {
      console.warn("El grafico con ID ", grafico.id, " ya existe y no se puede agregar de nuevo.")
    }

  }

  const actualizarGrafico = (graficoelegido) => {
    console.log("hook useChart-aactualizado ", graficoelegido)
    dispatch({ type: "actualizar_grafico", payload: graficoelegido })

  }

  const eliminarGrafico = (id) => {
    dispatch({ type: 'eliminar_grafico', payload: { id } })

  }


  return {
    state,
    agregarGrafico,
    actualizarGrafico,
    eliminarGrafico

  }
}
