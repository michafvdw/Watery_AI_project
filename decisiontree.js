import { DecisionTree } from "/libraries/decisiontree.js"
import { VegaTree } from "/libraries/vegatree.js"

//
// DATA
//
const csvFile = "data/tarp.csv"
const trainingLabel = "status"  
const ignored = ["ph", "air_temperature", "wind_speed", "air_humidity", "wind_gust", "rainfall", "p", "k"]
let decisionTree
let accuracy 
let totalAmount 
let amountCorrect = 0 
let accuracyhtml = document.getElementById("accuracy")


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
