

export const EditorGraficos = () => {
  return (
    <form>

      <div className="flex justify-around" >

        <select
          className=" w-96 m-5 p-1 rounded shadow-lg border focus:shadow-slate-400 focus:outline-none "
        >
          <option> -- Titulo del Grafico -- </option>
        </select>

        <input
          type="number"
          placeholder="Dato"
          className=" w-24 m-5 p-1 rounded shadow-lg border focus:shadow-slate-400 focus:outline-none "
        />
        
        <input
          type="date"
          className=" w-44 m-5 p-1 rounded shadow-lg border focus:shadow-slate-400 focus:outline-none "
        />

        <button
          type="button"
          className="bg-red-500 hover:bg-red-700 rounded m-5 p-2 text-white hover:cursor-pointer shadow-lg "
        >
          Eliminar el Grafico
        </button>

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
