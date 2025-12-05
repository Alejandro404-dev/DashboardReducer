import {  useState } from "react"
import { useChartContext } from "../context/ChartContext"
import ModalEliminar from "./ModalElimiar"
import useModal from "../hooks/useModal"



export const EditorGraficos = () => {

  const { state, actualizarGrafico } = useChartContext()

  const [selectorTitulo, setSelectorTitulo] = useState('')
  const [valorGrafico,setValorGrafico] = useState(0)
  const [fecha,setFecha] = useState(new Date())

  const {isOpen: isOpenModalEliminar, openModal:openModalModalElimiar , closeModal:closeModalEliminar  } = useModal()

  const listaGrafico = state.datos

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({ selectorTitulo, valorGrafico, fecha })

    const fechaFormateada = fecha.toISOString().split('T')[0]
    const nuevoDato={
      x: fechaFormateada , 
      y:valorGrafico 
    }
    const graficoSeleccionado = state.datos.find((grafico) => grafico.id === selectorTitulo )
    if (graficoSeleccionado){
      let nuevosDatos = [...graficoSeleccionado.series[0].data ]

      const indiceFecha = nuevosDatos.findIndex ( dato => dato.x === nuevoDato.x) 

      if (indiceFecha !==-1) {
        // si no es -1, entonces se encontro un dato con la misma fecha
        nuevosDatos[indiceFecha]=nuevoDato
        
      } else{
        // si es -1, entonces no se encontro un dato con la misma fecha
        nuevosDatos.push (nuevoDato)
      }
      // si me devuelve un numero negativo, entonces fechaA debe ir antes de fechaB
      // si me da 0 fechaA y fechaB son iguales
      // si me devuelve un numero positivo, entonces fechaA debe ir despues de fechaB
      nuevosDatos.sort((fechaA, fechaB ) => fechaA.x.localeCompare(fechaB.x ) ) // ordeno las fechas ascendentemente para que no quede desordenado

      const nuevoGrafico = {
        ...graficoSeleccionado,
        series: [{
          ...graficoSeleccionado.series[0],
          data: nuevosDatos
        }]
      }
      console.log ("Grafico Actualizado en editorGrafico : ", nuevoGrafico)
      actualizarGrafico (nuevoGrafico)

    }

    resetForm()
  }
  const resetForm = () => {
    setSelectorTitulo('')
    setValorGrafico(0)
    setFecha(new Date())

  }


  return (
    <form onSubmit={handleSubmit} >

      <div className="flex justify-around" >
        <select
          className=" w-96 m-5 p-1 rounded shadow-lg border focus:shadow-slate-400 focus:outline-none "
          value={selectorTitulo}
          onChange={(e) => setSelectorTitulo(e.target.value)}
        >
          <option className="text-center" > -- Titulo del Grafico -- </option>
          {listaGrafico.map((grafico) => (

            <option
              key={grafico.id}
              value={grafico.id}
            >
              {grafico.titulo}
            </option>))}
        </select>

        <input
          type="number"
          placeholder="Dato"
          className=" w-24 m-5 p-1 rounded shadow-lg border focus:shadow-slate-400 focus:outline-none "
          value={valorGrafico}
          onChange={(e)=> setValorGrafico(Number(e.target.value))}
        />

        <input
          type="date"
          className=" w-44 m-5 p-1 rounded shadow-lg border focus:shadow-slate-400 focus:outline-none "
          value={fecha.toISOString().split('T')[0]}
          onChange={(e)=> setFecha (new Date (e.target.value)) }
        />

        <button
          type="button"
          className="bg-red-500 hover:bg-red-700 rounded m-5 p-2 text-white hover:cursor-pointer shadow-lg "
          onClick={()=> openModalModalElimiar()}
        >
          Eliminar el Grafico
        </button>

        {isOpenModalEliminar && 
        <ModalEliminar
          conClose={closeModalEliminar}
        
        />
        }

        <button
          type="sudmit"
          className="bg-blue-600 hover:bg-blue-500 rounded m-5 p-2 text-white hover:cursor-pointer shadow-lg "
        >
          Actualizar
        </button>
      </div>
    </form>
  )
}
