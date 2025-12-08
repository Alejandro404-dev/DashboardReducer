import ReactApexChart from "react-apexcharts"


export default function ApexChartEnlace({datagrafico}) {

 const{tipo,series} = datagrafico

const options = {
  chart: {
    type: tipo //tipo de grafico
  },
  series: series, //datos del grafico
  xaxis: {
    type: 'datetime',
    labels:{ formaT: 'dd/MM/yy'}
  }
}


  return (
    <div>
        <ReactApexChart
            options={options}
            series={options.series}
            type={tipo}      
        />
       

    </div>
  )
}
