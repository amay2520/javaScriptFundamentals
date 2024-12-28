// AJAX (Asynchronous JavaScript and XML) in Depth
// AJAX is a technique used to send and retrieve data asynchronously without reloading the webpage. 
// It's a powerful tool for creating dynamic and interactive web applications.

//1. What Does AJAX Mean?
    //AJAX stands for:

    // Asynchronous
    // JavaScript
    // And
    // XML (though modern implementations often use JSON instead of XML).
    // With AJAX, a web application can send and fetch data in the background from a server without interfering 
    // with the current state of the page.
//

//2. How Does AJAX Work?
    //The process typically involves:
    //
    //Client-Side Request: A browser sends an asynchronous request to a server using JavaScript.
    //Server Processing: The server processes the request and sends back a response (e.g., JSON, XML, HTML).
    //Client-Side Update: The browser receives the response and updates the web page dynamically.
//

//3. Core Components of AJAX
    //XMLHttpRequest (XHR): The object used to send and receive data.
    //Modern Fetch API: A newer way to perform AJAX requests, making XHR less common.
    //JavaScript Code: Manages the data transfer and updates the page.
    //Server-Side Logic: Processes the request and returns the response (e.g., PHP, Node.js).
//

//4. Example with XMLHttpRequest
    //Basic Example: Fetching Data from a Server

    const xhr = new XMLHttpRequest();

    // Open a GET request to a server
    xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);

    // Define the callback function
    xhr.onload = function () {
      if (xhr.status === 200) {
        console.log("Response:", JSON.parse(xhr.responseText));
      } else {
        console.error("Error:", xhr.status);
      }
    };

    // Send the request
    xhr.send();
//

//5. Fetch API
    //The Fetch API is a modern and more readable way to handle AJAX requests.

    //Fetch API Example

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
    .then((data) => console.log("Data:", data))
    .catch((error) => console.error("Error:", error.message));
//

//6. Using AJAX with JSON
    //JSON is the most common format used for AJAX today because of its simplicity and efficiency.

    //Fetching JSON Data

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        users.forEach((user) => {
          console.log(`User: ${user.name}, Email: ${user.email}`);
        });
      })
    .catch((error) => console.error("Error fetching users:", error));
//

//7. AJAX and Forms
    //You can use AJAX to submit forms dynamically without a page reload.

    //Example: Submitting Form Data

    document.getElementById("submitBtn").addEventListener("click", function (e) {
      e.preventDefault();

      const data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
      };

      fetch("https://example.com/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((result) => console.log("Success:", result))
        .catch((error) => console.error("Error:", error));
    });
//

//8. Error Handling in AJAX
    //It's crucial to handle errors effectively during AJAX calls.

    //Example with Fetch

    fetch("https://jsonplaceholder.typicode.com/invalid-endpoint")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        return response.json();
      })
    .then((data) => console.log(data))
    .catch((error) => console.error("Caught error:", error.message));
//

//9. Updating DOM with AJAX
    //Dynamically updating page content is one of AJAX's primary uses.

    //Example: Load Data into an HTML Element

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((posts) => {
        const container = document.getElementById("posts");
        posts.forEach((post) => {
          const div = document.createElement("div");
          div.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p>`;
          container.appendChild(div);
        });
      })
      .catch((error) => console.error("Error:", error));
    //});
//

//10. Alternatives to AJAX
    //WebSockets:

    //For real-time, bi-directional communication between client and server.
    //Example: Chat applications.

    //Server-Sent Events (SSE):
    //For pushing updates from the server to the client.
//

//11. AJAX with jQuery
    //jQuery provides simplified methods for making AJAX calls, such as $.ajax, $.get, and $.post.

    $.ajax({
      url: "https://jsonplaceholder.typicode.com/posts",
      method: "GET",
      success: function (data) {
        console.log("Success:", data);
      },
      error: function (error) {
        console.error("Error:", error);
      },
    });
//

//12. Key Points
    //AJAX allows seamless user interactions.
    //The Fetch API is modern and easier to use compared to XHR.
    //JSON is the preferred data format over XML.
    //Error handling is critical for a smooth user experience.
    //Combine AJAX with dynamic DOM manipulation for interactive UIs.
//