
import { GetData } from './getData.js'
import { GoogleChartAPI } from './googleChartAPI.js'

export function generateChart(configData, chart_div)
{
    const getData = new GetData(configData);
    const googleChartAPI = new GoogleChartAPI();

    function coreChart(chart_div) {
        const dataDraw = googleChartAPI.createDataDraw();
        const data = getData.getData();
        const options = getData.getOptions();
        for (const i of getData.getColumn()) {
            dataDraw.addColumn(i[0], i[1]);
        }
        dataDraw.addRows(data);
        const chart = googleChartAPI.configChart(chart_div);
        chart.draw(dataDraw, options);
    }

    function googleSetOnLoadCallback() {
        google.charts.setOnLoadCallback(drawChart);
    }

    googleChartAPI.googleChartsLoad()
    googleSetOnLoadCallback()
    function drawChart() {
        coreChart(chart_div);
    }
}
