
export class GoogleChartAPI {

    googleChartsLoad()
    {
        google.charts.load(
            'current', 
            {
                'packages': ['corechart'] 
            }
        );
    }

    createDataDraw()
    {
        const dataDraw = new google.visualization.DataTable();
        return dataDraw
    }

    configChart(chart_div)
    {
        const element = document.getElementById(chart_div)
        const chart = new google.visualization.PieChart(element);
        return chart
    }
}
