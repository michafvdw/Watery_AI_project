import { DecisionTree } from "https://michafvdw.github.io/week9/libraries/decisiontree.js"
import { VegaTree } from "https://michafvdw.github.io/week9/libraries/vegatree.js"

//
// DATA
//
const csvFile = "https://michafvdw.github.io/week9/data/tarp.csv"
const trainingLabel = "status"  
const ignored = ["ph", "air_temperature", "wind_speed", "air_humidity", "wind_gust", "rainfall", "p", "k"]
let decisionTree
let accuracy 
let totalAmount 
let amountCorrect = 0 
let accuracyhtml = document.getElementById("accuracy")
let predictionhtml = document.getElementById("prediction")
var voorspelData = []

//
// laad csv data als json
//
function loadData() {
    Papa.parse(csvFile, {
        download: true,
        header: true,
        dynamicTyping: true,
        complete: results => trainModel(results.data)   // gebruik deze data om te trainen
    })
    //trainModel()
}

//
// MACHINE LEARNING - Decision Tree
//

document.querySelector("button").addEventListener("click", () =>{
    alert("forum submitted");
    voorspel()
  })

  function voorspel () {
    let soil_moisture;
    let temperature;
    let air_humidity;

    soil_moisture = document.getElementById("soil_moisture").value
    temperature = document.getElementById("temperature").value
    air_humidity = document.getElementById("air_humidity").value

    voorspelData.push(soil_moisture, temperature, air_humidity);
    console.log(voorspelData)
    showVoorspel()
  }

  function showVoorspel(){
    //console.log(info)

    let tarp = {soil_moisture: voorspelData[0] , temperature: voorspelData[1], air_humidity: voorspelData[2]}
    let prediction = decisionTree.predict(tarp)
        
    if(prediction == 1){
        predictionhtml.innerText = "The data you provided indicates you need to water your plant"
        //alert("The data you provided indicates you need to water your plant")
    }else{
        predictionhtml.innerText = "The data you provided indicates you don't need to water your plant"
        //alert("The data you provided indicates you dont need to water your plant")
    }

    voorspelData = []
    console.log(voorspelData)
}

function trainModel(data) {
    // todo : splits data in traindata en testdata
   
    let trainData = data.slice(0, Math.floor(data.length * 0.8))
    let testData = data.slice(Math.floor(data.length * 0.8) + 1)
    
    totalAmount = testData.length
    


    // maak het algoritme aan
     decisionTree = new DecisionTree({
        // hier kan je aangeven welke kolommen genegeerd moeten worden
        ignoredAttributes: ignored,    
        trainingSet: trainData,
        // dit is het label dat je wil gaan voorspellen
        categoryAttr: trainingLabel          
    })

    // Teken de boomstructuur - DOM element, breedte, hoogte, decision tree
    let json = decisionTree.toJSON()
    let visual = new VegaTree('#view', 2300, 1000, json)
    //data.sort(() => (Math.random() - 0.5)


    // todo : maak een prediction met een sample uit de testdata
    
    let tarp = testData[0]
    let tarpPrediction = decisionTree.predict(tarp)
    console.log(`You can drink the tarp : ${tarpPrediction}`)

    // todo : bereken de accuracy met behulp van alle test data
    for(let i of testData) {
        testTarp(i)
    }
  
    

    
}

function testTarp(tarp) {
    // kopie van passenger maken, zonder het label
    //console.log("werkt")
    const tarpWithoutLabel = Object.assign({}, tarp)
    delete tarpWithoutLabel.status

    // prediction
    let prediction = decisionTree.predict(tarpWithoutLabel)

    // vergelijk de prediction met het echte label
    if (prediction == tarp.status) {
        console.log("Deze voorspelling is goed gegaan!")
        amountCorrect++
        accuracy = Math.round(amountCorrect / totalAmount * 100)
        accuracyhtml.innerText = `${accuracy}%`
    } 
    else {
        //console.log("werkt niet")
    
    }



}
loadData()
