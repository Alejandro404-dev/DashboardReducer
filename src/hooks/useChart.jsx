import { useReducer } from "react"
import { dashboardReducer, initialState } from "../reducers/ChartReducer"


export const UseChart = () => {
  const [state, dispatch ]= useReducer (dashboardReducer, initialState)


  return {

  }
}
