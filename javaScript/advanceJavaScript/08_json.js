//JSON (JavaScript Object Notation) is a lightweight data-interchange format that's 
//easy for humans to read and write and easy for machines to parse and generate. 
//JSON is widely used in APIs and data exchange in web applications.
//

//What is JSON?
//A way to store and exchange data.
//Based on JavaScript object syntax, but used in many programming languages.

//{
  //"name": "John Doe",
  //"age": 30,
  //"isStudent": false,
  //"skills": ["JavaScript", "HTML", "CSS"],
  //"address": {
  //  "street": "123 Main St",
  //  "city": "New York",
  //  "zipcode": "10001"
  //}
//}

//JSON Syntax Rules
//Data is in key-value pairs:
//
//Keys must be strings.
//Values can be:
String
Number
Boolean
Null
Array
Object

//Data is separated by commas:

//{
//  "key1": "value1",
//  "key2": "value2"
//}
//Curly braces {} hold objects, and square brackets [] hold arrays.
//
//Strings must be enclosed in double quotes.

//Working with JSON in JavaScript
  //1. Parsing JSON
    //Converts JSON strings into JavaScript objects.

    const jsonString = '{"name": "John", "age": 30}';
    const parsedData = JSON.parse(jsonString);

    console.log(parsedData.name); // Output: John
    console.log(parsedData.age);  // Output: 30
  //

  //2. Stringifying Objects
    //Converts JavaScript objects into JSON strings.
    const jsObject = {
      name: "Jane",
      age: 25,
      isStudent: true
    };

    const jsonString1 = JSON.stringify(jsObject);
    console.log(jsonString1); // Output: '{"name":"Jane","age":25,"isStudent":true}'
    
    //JSON with Arrays
    //JSON can contain arrays as values.
    {
      "students": [
        {
          "name": "Alice",
          "age": 22
        },
        {
          "name": "Bob",
          "age": 24
        }
      ]
    }
  
    //JavaScript Usage:
    const jsonString2 = `
    {
      "students": [
        { "name": "Alice", "age": 22 },
        { "name": "Bob", "age": 24 }
      ]
    }
    `;

    const data = JSON.parse(jsonString2);
    data.students.forEach((student) => {
      console.log(student.name); // Output: Alice, Bob
  });
//

//Advanced Usage

//1. Nested JSON Objects
  //JSON supports nested objects.
  {
    "company": "Tech Corp",
    "employees": [
      {
        "name": "Emma",
        "role": "Developer",
        "skills": ["JavaScript", "React", "Node.js"]
      },
      {
        "name": "Liam",
        "role": "Designer",
        "skills": ["Photoshop", "Illustrator"]
      }
    ]
  }

  //Accessing Nested Data:

  const jsonString3 = `
  {
    "company": "Tech Corp",
    "employees": [
      {
        "name": "Emma",
        "role": "Developer",
        "skills": ["JavaScript", "React", "Node.js"]
      },
      {
        "name": "Liam",
        "role": "Designer",
        "skills": ["Photoshop", "Illustrator"]
      }
    ]
  }
  `;

  const data1 = JSON.parse(jsonString3);
  console.log(data1.employees[0].skills[1]); // Output: React
//

//2. Fetching JSON from APIs
  //JSON is the most common format for API responses.
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json())
    .then((data) => {
      console.log(data.title); // Output: Title of the first post
    })
    .catch((error) => console.error("Error:", error));
//

//3. Handling JSON Errors
  //Invalid JSON:
  const invalidJson = '{"name": "John", "age": 30'; // Missing closing brace
  try {
  const data = JSON.parse(invalidJson);
  } catch (error) {
   console.error("Invalid JSON:", error.message);
  }
//

//4. JSON Pretty Print
  //Use JSON.stringify with spacing for readable output.

  const jsObject1 = {
    name: "Alice",
    age: 30,
    skills: ["HTML", "CSS", "JavaScript"]
  };

  const prettyJson = JSON.stringify(jsObject1, null, 2);
  console.log(prettyJson);

  /* Output:
  {
    "name": "Alice",
    "age": 30,
    "skills": [
      "HTML",
      "CSS",
      "JavaScript"
    ]
  }
  */
//

//Common Use Cases of JSON
  //API Communication:
  //
  //JSON is the default format for REST APIs.
  //Configuration Files:
  //
  //Tools like .eslintrc, package.json, and .prettierrc use JSON.
  //Data Storage:
  //
  //Save structured data in files or databases.
  //Data Interchange:
  //
  //Exchange data between frontend and backend systems.
//
