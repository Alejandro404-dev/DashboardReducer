import ReactApexChart from "react-apexcharts"


export default function ApexChartEnlace() {

const options = {
  chart: {
    type: 'bar' //tipo de grafico
  },
  series: [{
    name: 'sales',//nombre de la serie
    data: [30,40,35,50,49,60,70,91,125] //datos para graficar
  }],
  xaxis: {
    categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999] //categorias del eje x
  }
}




  return (
    <div>
        <ReactApexChart
            options={options}
            series={options.series}
            type="bar"      
        />
       

    </div>
  )
}
