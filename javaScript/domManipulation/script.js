// For selecting an element with id 
    document.getElementById('element id in html')

    // in our case we have h1 with id title 
    document.getElementById('title')
//

// For selecting element with class 
    document.getElementsByClassName('element class in html')

    // in our case we have h1 with class heading
    document.getElementsByClassName('heading')
//

// for selecting elements with their tag 
    document.getElementsByTagName('tag name')

    // in our case we have different tag 
      // h1 h2 p ul li 
      // input
    
      document.getElementsByTagName('h1')
    //
//

// For selecting elements that match the CSS selector method
    document.querySelectorAll('your element')

    // in our case we wish to select all h2
    document.querySelectorAll('.heading')

    document.querySelector('.title')
    
    // see console in browser for the difference between 
    //both the querySelector's                 
//

// if you wish to change the content of html

    // innerHTML method
        // firstly select that element whose content you wish to change 
        document.getElementById("title")

        // then store it in a variable

        const title = document.getElementById("title")
        title.innerHTML = "your content"
    //

    // innerText
        title.innerText = "your content"
    //
//

