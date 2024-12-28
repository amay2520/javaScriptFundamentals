//Refactoring Promises with async/await
//The async/await syntax simplifies working with promises by making asynchronous code look more like synchronous code. 
//It is built on top of promises and works seamlessly with try...catch for error handling.

//1. Understanding async/await
    //async Function: Declares a function that always returns a promise.
    //await Expression: Pauses the execution of an async function until the promise is resolved or rejected.
//

//2. Refactoring a Simple Promise
    //Using Promises:
    const fetchData = () =>
      new Promise((resolve, reject) => {
        setTimeout(() => resolve("Data fetched"), 1000);
      });

    fetchData()
    .then((result) => console.log(result))
    .catch((error) => console.error(error));

    //Using async/await:

    const fetchData1 = () =>
      new Promise((resolve, reject) => {
        setTimeout(() => resolve("Data fetched"), 1000);
      });

    const getData = async () => {
      try {
        const result = await fetchData1();
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    };

    getData();
//

//3. Chaining Promises
    //Using Promises:

    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((posts) => {
        console.log("First Post:", posts[0]);
        return fetch(`https://jsonplaceholder.typicode.com/comments?postId=${posts[0].id}`);
      })
    .then((response) => response.json())
    .then((comments) => console.log("Comments:", comments))
    .catch((error) => console.error(error));
    
    //  Using async/await:

    const getPostsAndComments = async () => {
      try {
        const postResponse = await fetch("https://jsonplaceholder.typicode.com/posts");
        const posts = await postResponse.json();
        console.log("First Post:", posts[0]);

        const commentResponse = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${posts[0].id}`);
        const comments = await commentResponse.json();
        console.log("Comments:", comments);
      } catch (error) {
        console.error(error);
      }
    };

    getPostsAndComments();
//

//4. Parallel Execution
    //Sometimes, you want multiple promises to execute concurrently rather than sequentially.

    //Using Promise.all:
    const getUser = () =>
      Promise.resolve({ id: 1, name: "John Doe" });

    const getPosts = (userId) =>
      Promise.resolve([{ id: 101, userId: 1, title: "Post 1" }]);

    Promise.all([getUser(), getPosts(1)])
      .then(([user, posts]) => {
        console.log("User:", user);
        console.log("Posts:", posts);
    })
    .catch((error) => console.error(error));
    
    //Using async/await:
    const getUserAndPosts = async () => {
      try {
        const [user, posts] = await Promise.all([getUser(), getPosts(1)]);
        console.log("User:", user);
        console.log("Posts:", posts);
      } catch (error) {
        console.error(error);
      }
    };

    getUserAndPosts();
//

//5. Error Handling with try...catch
    //Using async/await, you can handle errors at multiple levels.

    const fetchWithError = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/invalid-endpoint");
        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error("Fetch Error:", error);
      }
    };

    fetchWithError();
//

//6. Retry Logic with async/await
    //If a fetch fails, you can retry it a specific number of times.

    const fetchWithRetry = async (url, retries) => {
      for (let i = 0; i <= retries; i++) {
        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
          }
          const data = await response.json();
          return data; // Exit loop if successful
        } catch (error) {
          if (i === retries) {
            throw error; // Rethrow after all retries fail
          }
          console.log(`Retrying... (${i + 1}/${retries})`);
        }
      }
    };

    fetchWithRetry("https://jsonplaceholder.typicode.com/posts", 3)
    .then((data) => console.log(data))
    .catch((error) => console.error("Final Error:", error));
//

//7. Race Condition Handling
    //If you want to handle the first successful promise from multiple sources:

    //Using Promise.race:
    const slowFetch = new Promise((resolve) => setTimeout(() => resolve("Slow fetch"), 2000));
    const fastFetch = new Promise((resolve) => setTimeout(() => resolve("Fast fetch"), 1000));
    Promise.race([slowFetch, fastFetch]).then((result) => console.log(result));
    //Logs: "Fast fetch"

    //Using async/await with Promise.race:
    const raceExample = async () => {
      const slowFetch = new Promise((resolve) => setTimeout(() => resolve("Slow fetch"), 2000));
      const fastFetch = new Promise((resolve) => setTimeout(() => resolve("Fast fetch"), 1000));
      const result = await Promise.race([slowFetch, fastFetch]);
      console.log(result); // Logs: "Fast fetch"
    };
    raceExample();
//

//8. Sequential and Parallel Mix
    //You can mix sequential and parallel tasks in a single async function.
    const fetchSequentialAndParallel = async () => {
      try {
        const response1 = await fetch("https://jsonplaceholder.typicode.com/posts");
        const response2 = await fetch("https://jsonplaceholder.typicode.com/comments");
        const [posts, comments] = await Promise.all([response1.json(), response2.json()]);

        console.log("Posts:", posts);
        console.log("Comments:", comments);

        const firstPost = posts[0];
        const firstComment = comments[0];
        console.log("First Post:", firstPost);
        console.log("First Comment:", firstComment);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSequentialAndParallel();
//

//9. Infinite Loop with Async Functions
    //If you need to fetch data continuously:
    const fetchContinuously = async () => {
      while (true) {
        try {
          const response = await fetch("https://jsonplaceholder.typicode.com/posts");
          const data = await response.json();
          console.log("Fetched Data:", data);
          await new Promise((resolve) => setTimeout(resolve, 5000)); // Wait 5 seconds
        } catch (error) {
          console.error("Fetch failed:", error);
        }
      }
    };

    fetchContinuously();
//

//Key Takeaways
    //Readable Syntax: async/await makes asynchronous code easier to read and write.
    //Error Handling: Use try...catch for robust error handling.
    //Combine Strategies: Mix sequential and parallel tasks using Promise.all and async/await.
    //Infinite Loops: Use while loops for continuous data fetching.
//
