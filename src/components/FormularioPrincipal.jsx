

export const FormularioPrincipal = () => {
  return (
    <form>
        <div className=" flex justify-around ">

            <input
                type="text"
                placeholder="Nombre del Grafico"
                className=" w-96 m-5 p-1 rounded shadow-lg border focus:shadow-slate-400 focus:outline-none "            
            />

            <input
                type="number"
                placeholder="Dato"
                className=" w-24 m-5 p-1 rounded shadow-lg border focus:shadow-slate-400 focus:outline-none "
            />


            <input
                type="date"
                className=" w-44 m-5 p-1 rounded shadow-lg border focus:shadow-slate-400 focus:outline-none "
            />


            <select
            className=" w-48 m-5 p-1 rounded shadow-lg border focus:shadow-slate-400 focus:outline-none "
            >
                <option value="">-- Tipo de Grafico --</option>

            </select>

            <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-500 rounded m-5 p-2 text-white hover:cursor-pointer shadow-lg "
            >
                Crear Grafico
            </button>


        </div>
    </form>
  
  )
}
