/*
	* Mid Terms for PWA-1
	* sean edwards
	* 3/26/14
*/

console.log('********* first try **************');

(function(){  //self executing function to wrap code in

    i = 0; // global variable for looping through content in code
    var button = document.querySelector(".buttonred"); // DOM element for the button to change later

// Create array for student with two students
    var students= [
        {
            name: "jbond",
            address: {street:"3300 University Blvd", city:"Winter Park", state:"FL"},
            gpa: [2,2.5,3.5]
        },
        {
            name: "abraham lincoln",
            address: {street:"1600 Pennsylvania Ave", city:"Washington", state:"DC"},
            gpa: [2.5,3,4]
        }
    ];

    var max = students.length; // counting the array length as max


// function that will add new information in the students object
    var addData= function(newName,newStreet,newCity,newState,newGPA,newDate){
        // passed arguments copy other student objects
        var newStudent= students.push({
            name: newName,
            address: {street:newStreet, city:newCity, state:newState},
            gpa: newGPA,
            date: newDate
        });

        //student object will be created
        return newStudent;
    };

//  function that calculates average gpa of array with looping
    var calcAvg= function(array){
        sum=0;
        for(var i=0; i<array.length;i++){
            sum+=array[i];
        }
        avgGPA= sum/array.length;
        //return the average gpa for use later
        return avgGPA;
    };


// Create function that will display the student information in the HTML
var Data = function(){

    // Define the grabbed DOM elements from earlier
    var innerName = document.getElementById("name");
    var innerAddress = document.getElementById("address");
    var innerGPA = document.getElementById("gpa");
    var innerDate = document.getElementById("date");
    var innerAvgGPA = document.getElementById("gpaavg");

    innerName.innerHTML = "NAME:  "+ students[i].name;
    innerAddress.innerHTML= "ADDRESS  " +students[i].address.street+", "
    +students[i].address.city+", "
    +students[i].address.state;
    innerGPA.innerHTML= "GPA:  " +students[i].gpa;


    var avgGPA= calcAvg(students[i].gpa);
    innerAvgGPA.innerHTML= "AVG GPA:  " +avgGPA.toFixed(2);

    i++ ; // loop threw student array increment by 1


//button.onclick= "return false"; //disable button
   // document.querySelector('.buttonred').innerHTML = 'DONE!!!';  //button will show done instead of next

};

// Create button to invoke display data function
button.onclick = Data;  // Every time the "NEXT" button is clicked, call the "Data" function


    //function call to add new object to student array
    addData('jerry springer', 'jerry springer show the cw', 'Orlando', 'Florida', [1.5, 2.0, 2.2]);



    console.log('********* console logs **************');

    //student 1

    console.log("Name: "+students[i].name);
    console.log("Address: "+students[i].address.street+", "
    +students[i].address.city+", "
    +students[i].address.state);
    console.log("GPA: "+students[i].gpa);

console.log( ' ');

    //student 2

    console.log("Name: "+students[1].name);
    console.log("Address: "+students[1].address.street+", "
    +students[i].address.city+", "
    +students[i].address.state);
    console.log("GPA: "+students[1].gpa);

    //student 3
  //  console.log( ' ');
  //  console.log("Name: " +);
  //  console.log("Address: "+students[1].address.street+", "
   // +students[i].address.city+", "
   // +students[i].address.state);
   // console.log("GPA: "+students[1].gpa);


})();  // end code wrapper - self executing function

