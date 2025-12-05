
import ApexChartEnlace from "./components/ApexChartEnlace"
import { EditorGraficos } from "./components/EditorGraficos"
import { FormularioPrincipal } from "./components/FormularioPrincipal"
import { useChartContext } from "./context/ChartContext"

function App() {

  const {state } = useChartContext()


  return (
    <div className="w-4/5 mx-auto">

      <div className=" flex justify-between items-center my-5 " >

        <h1 className="text-left font-black text-4xl " >
          Dashboard
        </h1>
        <button
          type="button"
          className="bg-red-500 hover:bg-red-700 rounded p-2 text-white hover:cursor-pointer shadow-lg "
        >
          Resetear Aplicacion
        </button>

      </div>
      
      <div className="rounded border shadow-2xl p-5 bg-white " >
        <FormularioPrincipal />
        <EditorGraficos />
      </div>

      <div className="grid grid-cols-3 gap-4 mt-8 justify-center  " >
        {state.datos.map( (grafico) => (
        <div 
          key={grafico.id}
          className=" rounded shadow-xl p-5 bg-slate-200 text-center " 
        >
          <h2 className=" text-center font-bold pb-2 " >{grafico.titulo } </h2>
          <div className=" flex justify-center shadow-xl " >
            <ApexChartEnlace
            datagrafico={grafico}
            />
          </div>
        </div>
        ))}
      </div>

    </div>
  )
}

export default App
