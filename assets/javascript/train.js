$(document).ready(function(){

// Initialize firebase database

var config = {
    apiKey: "AIzaSyDfj5XTDTqwDJluv_VrQMARF2TkgNzfqsg",
    authDomain: "train-schedule-homework.firebaseapp.com",
    databaseURL: "https://train-schedule-homework.firebaseio.com",
    projectId: "train-schedule-homework",
    storageBucket: "",
    messagingSenderId: "693611444551"
  };
  firebase.initializeApp(config);
  console.log(firebase);
// Variables

var trainData = firebase.database();

// variables for moment js 
var randomDate = "01/23/2014";
var convertedDate = moment(new Date(randomDate));
console.log(convertedDate);
// var clickCounter = 0;

// $("#demoButton").on("click", function(){
//  clickCounter++;
//  database.ref().set({
//    clickCount: clickCounter
//  })
// });



// Functions


// Processes

// Take the form field inputs and turn them into an object to be stored in firebase

$('form').submit(function(e){
  e.preventDefault();
  var newTrainName = $("#name").val().trim();
  var newTrainDestination = $("#destination").val().trim();
  var newTrainFirstTrain = $("#firstTrain").val().trim();
  var newTrainFrequency = $("#frequency").val().trim();
  
  var newTrain = {
    name: newTrainName,
    destination: newTrainDestination,
    firstTrain: newTrainFirstTrain,
    frequency: newTrainFrequency,
    dateAdded: firebase.database.ServerValue.TIMESTAMP
  }

  // populate the train schedule with the new values
  var row = $("<tr>");
  var newNameElem = $("<td>").text(newTrainName);
  console.log(newNameElem);
  var newDestElem = $("<td>").text(newTrainDestination);
  var newFirstElem = $("<td>").text(newTrainFirstTrain);
  var newFreqElem = $("<td>").text(newTrainFrequency);

  row.append(newNameElem);
  row.append(newDestElem);
  row.append(newFirstElem);
  row.append(newFreqElem);

  var trainTable = $("#trainTable tbody").append(row);

  console.log(newTrain);

  trainData.ref().push(newTrain);

  // take a snapshot of the database
  trainData.ref().on("child_added", function(childSnapshot, prevChildKey){
    console.log(childSnapshot).val().name;
    console.log(childSnapshot).val().destination;
    console.log(childSnapshot).val().firstTrain;
    console.log(childSnapshot).val().frequency;
    console.log(childSnapshot).val().dateAdded;

  })

  // $("#name").val("");
  // $("#destination").val("");
  // $("#firstTrain").val("");
  // $("#frequency").val("");

  // database.ref().push({
  //  trainName:      newTrainName,
  //  trainDestination:   newTrainDestination,
  //  trainTime:      newTrainFirstTrain,
  //  trainFrequency:   newTrainFrequency 
  })
  // var $inputs = $('#newTrain :input:not(:button)');
  // returns the four input paremeters - name, destination, first train, frequency
  // console.log($inputs);
  // // creates a new object to be stored in the database
 //   $inputs.each(function() {
 //    var newTrain = $(this)[0].id;
 //    console.log(newTrain);
 //    trains[newTrain] = $(this).val();
 //    // trains[name] = $(this).val();
    //  $(this).val('');
   });
    
  // console.log(values);
    //  "destination" = $inputs[1].value,
    //  "firstTrain" = $inputs[2].value,
    //  "frequency" = $inputs[3].value
    // };
    // console.log(train);
    // $inputs.each(function() {
    // var name = $(this)[0].id;
  //    values[id] = $(this).val();
  //    $(this).val('');
  //  });
  // console.log(values);

// }