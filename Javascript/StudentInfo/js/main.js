// self executing function to wrap code in
(function() {
  // global variable for looping through content in code
  i = 0;
  // DOM element for the button to change later
  var button = document.querySelector(".buttonred");
  // Create array for student with two students
  var students = [{
      name: "jbond",
      address: {
        street: "3300 University Blvd",
        city: "Winter Park",
        state: "FL"
      },
      grades: [2, 2.5, 3.5]
    },
    {
      name: "abraham lincoln",
      address: {
        street: "1600 Pennsylvania Ave",
        city: "Washington",
        state: "DC"
      },
      grades: [2.5, 3, 4]
    }
  ];

// counting the array length as max
  var max = students.length;

  // function that will add new information in the students object
  var addData = function(newName, newStreet, newCity, newState, newGPA, newDate) {
    // passed arguments copy other student objects
    var newStudent = students.push({
      name: newName,
      address: {
        street: newStreet,
        city: newCity,
        state: newState
      },
      grades: newGPA,
      date: newDate
    });

    // student object will be created
    return newStudent;
  };

  // function that calculates average gpa of array with looping
  var calcAvg = function(array) {
    sum = 0;
    for (var i = 0; i < array.length; i++) {
      sum += array[i];
    }
    avgGPA = sum / array.length;
    // return the average gpa for use later
    return avgGPA;
  };

  // Create function that will display the student information in the HTML
  var Data = function() {

    // Define the grabbed DOM elements from earlier
    var innerName = document.getElementById("name");
    var innerAddress = document.getElementById("address");
    var innerGPA = document.getElementById("grades");
    var innerDate = document.getElementById("date");
    var innerAvgGPA = document.getElementById("gpaavg");

    innerName.innerHTML = "NAME:  " + students[i].name;
    innerAddress.innerHTML = "ADDRESS  " + students[i].address.street + ", " +
      students[i].address.city + ", " +
      students[i].address.state;
    innerGPA.innerHTML = "GRADES:  " + students[i].grades;

    var avgGPA = calcAvg(students[i].grades);
    innerAvgGPA.innerHTML = "AVG GPA:  " + avgGPA.toFixed(2);

    // loop threw student array increment by 1
    i++;

    // button.onclick= "return false"; //disable button
// document.querySelector('.buttonred').innerHTML = 'DONE!!!';
// button will show done instead of next
  };

  // Create button to invoke display data function
  // Every time the "NEXT" button is clicked, call the "Data" function
  button.onclick = Data;

  // function call to add new object to student array
  addData('jerry springer', 'jerry springer show the cw', 'Orlando', 'Florida', [1.5, 2.0, 2.2]);

// end code wrapper - self executing function
})();
