import { createChart } from "/scatterplot.js"

function loadData() {
    Papa.parse("data/tarp.csv", {
        download: true,
        header: true,
        dynamicTyping: true,
        complete: results => cleanData(results.data)
    })
}

function cleanData(data) {
    const columns = data.map(tarp => ({
        x: tarp.soil_moisture,
        y: tarp.status,
    }))
    createChart(columns)
}

loadData()