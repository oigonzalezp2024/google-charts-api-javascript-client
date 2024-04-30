
import { configData } from './configData.js'
import { generateChart } from './generateChart.js'

const charts = document.getElementById('charts')
let ii = 1
for (const i of configData) {
    const chart = document.createElement('div')
    chart.setAttribute('class', 'pieChart')
    chart.setAttribute('id', `chart_div${ii}`)
    charts.appendChild(chart)
    ii += 1
}
ii = 1
for (const i of configData) {
    generateChart(i, `chart_div${ii}`)
    ii += 1
}
