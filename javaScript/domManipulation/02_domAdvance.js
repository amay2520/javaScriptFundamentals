// 1. Advanced Test Cases
    //1.1 Adding New Elements
        //Use createElement and appendChild.
        let newParagraph = document.createElement("p");
        newParagraph.textContent = "This is a dynamically added paragraph.";
        document.body.appendChild(newParagraph);
    //

    //1.2 Removing Elements
        //Use removeChild or remove.
        let head = document.getElementById("main-header");
        head.remove();
    //
    
    //1.3 Dynamic Styling
        //Change styles dynamically.
        let button = document.getElementById("action-btn");
        button.style.backgroundColor = "blue";
        button.style.color = "white";
    //
//

// 2. Advanced DOM Manipulation
    //2.1 Cloning Nodes
        //Use cloneNode() to create a copy of an element.
        //Shallow copy: Clones the element only, without its children (cloneNode(false)).
        //Deep copy: Clones the element and its entire subtree (cloneNode(true)).
        let head1 = document.getElementById("main-header");
        let clonedHeader = header.cloneNode(true);
        document.body.appendChild(clonedHeader);
    //

    //2.2 Inserting Elements
        //insertBefore: Insert a node before another node.
        //insertAdjacentHTML: Add HTML relative to an element.
        let newItem = document.createElement("li");
        newItem.textContent = "Item 3";

        let list = document.querySelector("ul");
        let secondItem = list.children[1];
        list.insertBefore(newItem, secondItem); // Adds "Item 3" before "Item 2".
    //

    //2.3 Replacing Nodes
        //Use replaceChild() to replace one node with another.
        let newHeader = document.createElement("h1");
        newHeader.textContent = "New Header";

        let oldHeader = document.getElementById("main-header");
        document.body.replaceChild(newHeader, oldHeader);
    //
//

//3. Events in Depth
    //3.1 Event Propagation
        //Event Bubbling: Events move from the target element up to the root (child → parent → root).
        //Event Capturing: Events move from the root to the target element (root → parent → child).
        document.body.addEventListener("click", () => console.log("Body clicked!"), true); // Capturing
        document.body.addEventListener("click", () => console.log("Body clicked!")); // Bubbling
        //Click on a child element and observe how the handlers execute in different phases.
    //

    //3.2 stopPropagation and preventDefault
        //stopPropagation: Stops the event from propagating further.
        //preventDefault: Prevents the default action of an event (e.g., form submission, link navigation).
        let link = document.querySelector("a");
        link.addEventListener("click", (e) => {
            e.preventDefault();
            console.log("Default action prevented.");
        });
    //

    //3.3 Event Delegation
        //Attach a single event listener to a parent and use it for child elements.
        document.querySelector("ul").addEventListener("click", (event) => {
            if (event.target.tagName === "LI") {
                console.log(`You clicked on: ${event.target.textContent}`);
            }
        });
    //
//

//4. DOM Performance
    //4.1 Document Fragments
        //Used to minimize reflows and repaints by batching DOM updates.
        let fragment = document.createDocumentFragment();
        for (let i = 1; i <= 5; i++) {
          let newItem = document.createElement("li");
          newItem.textContent = `Item ${i}`;
          fragment.appendChild(newItem);
        }
        document.querySelector("ul").appendChild(fragment);
    //

    //4.2 Debouncing and Throttling
        //Used to optimize event-heavy interactions like scrolling or resizing.
        let resizeTimer;
        window.addEventListener("resize", () => {
          clearTimeout(resizeTimer);
          resizeTimer = setTimeout(() => {
            console.log("Resize event debounced.");
          }, 300);
        });
    //
//

//5. Intersection with Other APIs
    //5.1 Intersection Observer
        //Detects when elements enter or leave the viewport (useful for lazy loading).
        let observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              console.log(`${entry.target.id} is visible.`);
            }
          });
        });

        let target = document.getElementById("main-header");
        observer.observe(target);
    //

    //5.2 Mutation Observer
        //Watches for changes in the DOM (e.g., adding/removing elements).
        let observe = new MutationObserver((mutations) => {
          mutations.forEach((mutation) => console.log(mutation));
        });

        observe.observe(document.body, { childList: true, subtree: true });
        document.body.appendChild(document.createElement("p")); // Triggers the observer.
    //
//

// 6. DOM Styling and Computed Styles
    //6.1 Inline Styles
        //Modify styles directly.
        let header = document.getElementById("main-header");
        header.style.color = "red";
    //

    //6.2 Computed Styles
        //Get styles applied by CSS (including inherited styles).
        let computedStyle = getComputedStyle(header);
        console.log(computedStyle.color); // Outputs computed color.
    //
//

//7. Miscellaneous
    //7.1 Inner vs. Outer Properties
        //innerHTML: Gets/sets the content inside an element.
        //outerHTML: Includes the element itself.

        let header = document.getElementById("main-header");
        console.log(header.innerHTML); // Outputs: Welcome to My Site
        console.log(header.outerHTML); // Outputs: <h1 id="main-header">Welcome to My Site</h1>
    //

    //7.2 hasChildNodes and isEqualNode
        //hasChildNodes: Checks if an element has children.
        //isEqualNode: Compares two nodes for equality.

        let header = document.getElementById("main-header");
        console.log(header.hasChildNodes()); // Output: true
        console.log(header.isEqualNode(header.cloneNode(true))); // Output: true
    //
//













