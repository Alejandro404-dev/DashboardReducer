import { createContext, useContext,  } from "react";
import { UseChart } from "../hooks/UseChart";




//1. creo el context
const ChartContext = createContext ()

//2. creo el provedor del context
export const ChartProvider = ({children }) =>{
   const { state, agregarGrafico, actualizarGrafico,eliminarGrafico } = UseChart()

    return(
        <ChartContext.Provider
        value={{ state, agregarGrafico, actualizarGrafico,eliminarGrafico }}
        
        >
        { children }
        </ChartContext.Provider>
    )
}

//3. Hook para usar el context en los componentes

export const useChartContext = () => {
    const context = useContext (ChartContext)

    if(!context){
        throw new Error ("useChartContext debe usarse dentro de un ChartProvider")
    }
    return context
}

