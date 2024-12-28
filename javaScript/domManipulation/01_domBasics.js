// The Document Object Model (DOM) allows JavaScript to interact with HTML and CSS, 
// making webpages dynamic and interactive. 

// 1. The DOM Tree
  //The DOM represents the HTML structure as a tree, where each element, attribute, and text is a node.

  //<!DOCTYPE html>
  //<html>
  //  <head>
  //    <title>My Webpage</title>
  //  </head>
  //  <body>
  //    <h1 id="main-header">Welcome to My Site</h1>
  //    <p class="description">This is a sample paragraph.</p>
  //    <p class="description">Another paragraph with the same class.</p>
  //    <ul>
  //      <li>Item 1</li>
  //      <li>Item 2</li>
  //    </ul>
  //    <input type="text" value="Sample Input" />
  //    <button id="action-btn">Click Me!</button>
  //  </body>
  //</html>
//

//2. Accessing DOM Elements
  // 2.1 document.getElementById()
    //Returns a single element with the specified id.
    let headerMain = document.getElementById("main-header");
    console.log(headerMain); // Outputs: <h1 id="main-header">Welcome to My Site</h1>
    console.log(document.getElementById("main-header")); // Returns the h1 element.

    // Non-existing ID:
    console.log(document.getElementById("nonexistent")); // Returns null.
  //

  // 2.2 document.getElementsByClassName()
    //Returns a live HTMLCollection of elements with the specified class name.
    let descriptions = document.getElementsByClassName("description");
    console.log(descriptions[0]); // Outputs: <p class="description">This is a sample paragraph.</p>
    
    //Test Cases:
    //Multiple elements with the class:
    console.log(descriptions.length); // Output: 2

    //No elements with the class:
    console.log(document.getElementsByClassName("nonexistent").length); // Output: 0
  //

  // 2.3 document.getElementsByTagName()
    //Returns a live HTMLCollection of elements with the specified tag name.
    let listItems = document.getElementsByTagName("li");
    console.log(listItems); // Outputs a collection of <li> elements.
  
    //Test Cases:
    //Matching tag name:
    console.log(listItems.length); // Output: 2
    console.log(listItems[0].textContent); // Output: Item 1

    //Non-matching tag name:
    console.log(document.getElementsByTagName("article").length); // Output: 0
  //

  // 2.4 document.querySelector()
    //Returns the first element that matches the CSS selector.
    let firstDescription = document.querySelector(".description");
    console.log(firstDescription); // Outputs: <p class="description">This is a sample paragraph.</p>
    
    //Test Cases:
    //Matching element:
    console.log(document.querySelector("h1").textContent); // Output: Welcome to My Site

    //No matching element:
    console.log(document.querySelector(".nonexistent")); // Output: null
  //

  //2.5 document.querySelectorAll()
    // Returns a NodeList of all elements matching the CSS selector.
    let allDescriptions = document.querySelectorAll(".description");
    console.log(allDescriptions); // Outputs NodeList of <p> elements.

    // Test Cases:

    //Multiple matches:
    console.log(allDescriptions.length); // Output: 2
    console.log(allDescriptions[1].textContent); // Output: Another paragraph with the same class.
   
    // No matches:
    console.log(document.querySelectorAll(".nonexistent").length); // Output: 0
  //
//

// 3.Manipulating DOM Elements
  // 3.1 Changing Content
    //textContent: Sets or gets the text inside an element.
    //innerHTML: Gets or sets the HTML content inside an element.

    let header = document.getElementById("main-header");
    header.textContent = "Hello World!";
    console.log(header.textContent); // Output: Hello World!
  //

  //3.2 Changing Attributes
    // Use setAttribute and getAttribute to manage attributes.

    let buttons = document.getElementById("action-btn");
    buttons.setAttribute("disabled", "true");
    console.log(buttons.getAttribute("disabled")); // Output: true
    
    //Test Cases:

      //Add an attribute:
      button.setAttribute("title", "This is a button.");
      console.log(button.getAttribute("title")); // Output: This is a button.
    
      //Modify an existing attribute:
      button.setAttribute("id", "new-id");
      console.log(button.getAttribute("id")); // Output: new-id
    //
  //

  //3.3 Adding and Removing Classes
    //classList.add() adds a class.
    //classList.remove() removes a class.
    //classList.toggle() toggles a class.
  
    let header = document.getElementById("main-header");
    header.classList.add("highlight");
    console.log(header.classList.contains("highlight")); // Output: true
  //
//

//4. Event Handling
  //Events allow interaction with DOM elements (e.g., click, hover).

  // 4.1 Inline Event
    //Defined in HTML.
    <button onclick="alert('Button Clicked!')">Click Me</button>
  //

  //4.2 Event Listeners
    //Attach event handlers dynamically.
    let btn = document.getElementById("action-btn");
      btn.addEventListener("click", () => {
      alert("Button clicked!");
    });
  //
//

// 5. Traversing the DOM
  // 5.1 Parent Node
    //Access the parent of an element using parentNode or parentElement.
    let header = document.getElementById("main-header");
    console.log(header.parentNode); // Outputs: <body>
  //

  //5.2 Child Nodes
    //Access children using childNodes or children.
    let body = document.body;
    console.log(body.childNodes); // Includes all nodes (elements, text, comments).
    console.log(body.children); // Includes only element nodes.
  //

  //5.3 Sibling Nodes
    //Access siblings using nextSibling and previousSibling.
    let header = document.getElementById("main-header");
    console.log(header.nextSibling); // May return text (whitespace).
    console.log(header.nextElementSibling); // Returns the next element.
  //
//

