
google.charts.load('current', { packages: ['corechart'] });
google.charts.setOnLoadCallback(drawGID);

function drawGID() {
  const queryString = encodeURIComponent('SELECT A, H, O, Q, R, U LIMIT 5 OFFSET 8');
  const query = new google.visualization.Query(
    'https://docs.google.com/spreadsheets/d/1XWJLkAwch5GXAt_7zOFDcg8Wm8Xv29_8PWuuW15qmAE/gviz/tq?gid=0&headers=1&tq=' + queryString);
  query.send(handleQueryResponse);
}

function handleQueryResponse(response) {
  if (response.isError()) {
    alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
    return;
  }

  const data = response.getDataTable();
  const chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
  console.log(data)
  chart.draw(data, { height:400 });
}
