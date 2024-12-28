//Edge Cases
//1. Missing await
    Problem:
    //If you forget the await keyword, the function won’t wait for the promise to resolve, leading to unexpected results.

    const fetchData = async () => {
      return "Hello!";
    };

    const main = async () => {
      const result = fetchData(); // Missing `await`
      console.log(result); // Logs: Promise {<resolved>: 'Hello!'}
    };

    main();

    Solution:
    //Always use await for asynchronous calls.

    const main1 = async () => {
      const result = await fetchData1();
      console.log(result); // Logs: "Hello!"
    };

    main();
//

//2. Unhandled Promise Rejections
    //If a promise is rejected and not handled, it can cause the application to crash.

    const failingPromise = async () => {
      throw new Error("Something went wrong!");
    };

    failingPromise(); // Unhandled rejection

    Solution:
    //Use try...catch or .catch() for every promise or async function.
    const failingPromise1 = async () => {
      try {
        throw new Error("Something went wrong!");
      } catch (error) {
        console.error("Caught Error:", error.message);
      }
    };

    failingPromise1();
//

//3. Nested await in Loops
    //Using await in loops can cause sequential execution instead of parallel, leading to performance issues.

    //Inefficient Example:

    const fetchItems = async (ids) => {
      for (const id of ids) {
        const data = await fetch(`https://api.example.com/item/${id}`).then((res) => res.json());
        console.log(data);
      }
    };

    fetchItems([1, 2, 3]); // Fetches sequentially

    // Optimized Example:
    //Use Promise.all to fetch in parallel.


    const fetchItems1 = async (ids) => {
      const promises = ids.map((id) =>
        fetch(`https://api.example.com/item/${id}`).then((res) => res.json())
      );
      const results = await Promise.all(promises);
      results.forEach((data) => console.log(data));
    };

    fetchItems1([1, 2, 3]); // Fetches concurrently
//

//4. Circular Dependencies
    //Promises can create circular references if not handled correctly.
    const promise1 = new Promise((resolve) => resolve(promise2));
    const promise2 = new Promise((resolve) => resolve(promise1));

    Solution:
    //Avoid self-referencing promises. Ensure a clear resolution path.
//

//Debugging Async Code
//1. Using Developer Tools
    //Chrome/Edge Debugger: Place debugger inside your async function or promise chain.
    //Network Tab: Check API call timings and errors.
    //Console Logs: Add meaningful logs to trace the flow.

    const fetchData2 = async () => {
      console.log("Fetching data...");
      debugger; // Opens debugger in DevTools
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await response.json();
      console.log("Data fetched:", data);
    };

    fetchData2();
//

//2. Tracking Unhandled Rejections
    //Add a global handler for unhandled promise rejections:

    process.on("unhandledRejection", (reason, promise) => {
      console.error("Unhandled Rejection at:", promise, "reason:", reason);
    });
//

//3. Visualize Async Flow
    //Use libraries like Async Hooks in Node.js to trace promise lifecycles.
//

//Performance Optimizations
    //1. Avoid Blocking Code
        //Even with async/await, blocking operations can degrade performance.

    const blockingFunction = async () => {
      const data = await fetch("https://jsonplaceholder.typicode.com/posts");
      console.log("Blocking operation complete");
    };
    Solution:
    //Run heavy computations in a Web Worker or offload them to a separate thread.
//

//2. Cache Results
    //If fetching the same data repeatedly, cache it to avoid redundant network requests.
    const cache = {};

    const fetchWithCache = async (url) => {
      if (cache[url]) return cache[url];
      const response = await fetch(url);
      const data = await response.json();
      cache[url] = data;
      return data;
    };

    fetchWithCache("https://jsonplaceholder.typicode.com/posts");
    fetchWithCache("https://jsonplaceholder.typicode.com/posts"); // Cached
//

//3. Optimize Parallel Execution
    //Instead of fetching everything in parallel, limit concurrency to prevent server overload.
    const fetchWithLimit = async (urls, limit) => {
      const results = [];
      while (urls.length > 0) {
        const batch = urls.splice(0, limit);
        const batchResults = await Promise.all(batch.map((url) => fetch(url).then((res) => res.json())));
        results.push(...batchResults);
      }
      return results;
    };

    fetchWithLimit(["url1", "url2", "url3"], 2);
//

//4. Lazy Loading with Generators
    //Use generator functions for incremental data fetching.

    async function* fetchGenerator(urls) {
      for (const url of urls) {
        const response = await fetch(url);
        yield await response.json();
      }
    }

    (async () => {
      const urls = ["url1", "url2", "url3"];
      for await (const data of fetchGenerator(urls)) {
        console.log(data);
      }
    })();
//
