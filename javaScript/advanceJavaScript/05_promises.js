// A Promise is an object representing the eventual completion (or failure) 
// of an asynchronous operation and its resulting value. 
// It allows you to handle asynchronous tasks more effectively, 
// replacing callback hell with cleaner and more readable code.

//1. What is a Promise?
    //A promise has three states:

    //Pending: The initial state, neither fulfilled nor rejected.
    //Fulfilled: The operation completed successfully.
    //Rejected: The operation failed.

    //A promise is resolved with a value when fulfilled or with a reason (error) when rejected.
//

//2. Creating a Promise
    //The Promise constructor takes a function (executor) with two arguments: resolve and reject.

    //Example 1: Basic Promise
    
    const promise = new Promise((resolve, reject) => {
      const success = true; // Simulate success or failure
      if (success) {
        resolve("Promise fulfilled!");
      } else {
        reject("Promise rejected!");
      }
    });

    // Handling the promise
    promise
    .then((value) => console.log(value)) // Logs: "Promise fulfilled!"
    .catch((error) => console.error(error)); // If rejected, logs the error
//

//3. Using Promises
    //3.1. Chaining Promises
        //You can chain .then() calls for sequential asynchronous operations.
        const fetchData = new Promise((resolve) => {
          setTimeout(() => resolve("Data fetched"), 1000);
        });

        fetchData
        .then((result) => {
            console.log(result); // Logs: "Data fetched"
            return "Processing data";
        })
        .then((result) => {
            console.log(result); // Logs: "Processing data"
            return "Data processed";
        })
        .then((result) => console.log(result)) // Logs: "Data processed"
        .catch((error) => console.error(error));
    //

    //3.2. Handling Errors
        //The .catch() method handles errors that occur in any part of the promise chain.
        const faultyPromise = new Promise((_, reject) => {
          setTimeout(() => reject("Something went wrong!"), 1000);
        });

        faultyPromise
        .then((result) => console.log(result)) // Skipped if rejected
        .catch((error) => console.error(error)) // Logs: "Something went wrong!"
        .finally(() => console.log("Operation completed")); // Always executed
    //
//

//4. Promise Methods
    //4.1. Promise.resolve(value)
        //Returns a promise resolved with the given value.
        Promise.resolve("Resolved immediately").then((value) => console.log(value));
        // Logs: "Resolved immediately"
    //

    //4.2. Promise.reject(reason)
        //Returns a promise rejected with the given reason.
        Promise.reject("Rejected immediately").catch((error) => console.error(error));
        // Logs: "Rejected immediately"
    //

    //4.3. Promise.all(promises)
        //Runs multiple promises in parallel and resolves when all 
        //promises are fulfilled or rejects if any promise fails.
        const p1 = Promise.resolve(10);
        const p2 = Promise.resolve(20);
        const p3 = Promise.resolve(30);

        Promise.all([p1, p2, p3])
          .then((values) => console.log(values)) // Logs: [10, 20, 30]
          .catch((error) => console.error(error));
    //

    //4.4. Promise.race(promises)
        //Resolves or rejects as soon as the first promise in the array settles.
        const slow = new Promise((resolve) => setTimeout(() => resolve("Slow"), 2000));
        const fast = new Promise((resolve) => setTimeout(() => resolve("Fast"), 1000));

        Promise.race([slow, fast]).then((value) => console.log(value)); // Logs: "Fast"
    //

    //4.5. Promise.allSettled(promises)
        //Waits for all promises to settle (fulfilled or rejected) and returns their results.

        const p4 = Promise.resolve(10);
        const p5 = Promise.reject("Error");
        const p6 = Promise.resolve(30);

        Promise.allSettled([p4, p5, p6]).then((results) => console.log(results));
        /* Logs:
        [
          { status: "fulfilled", value: 10 },
          { status: "rejected", reason: "Error" },
          { status: "fulfilled", value: 30 }
        ]
        */
    //
//

//5. Real-World Examples
    //Example 1: Fetching Data from an API
        fetch("https://jsonplaceholder.typicode.com/posts")
          .then((response) => {
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => console.log(data))
        .catch((error) => console.error("Fetch error:", error));
    //
    
    //Example 2: Sequential API Calls

        const fetchUser = () =>
          Promise.resolve({ id: 1, name: "John Doe" });

        const fetchPosts = (userId) =>
          Promise.resolve([{ id: 101, userId: 1, title: "Post 1" }]);

        fetchUser()
        .then((user) => {
          console.log("User:", user);
          return fetchPosts(user.id);
        })
        .then((posts) => console.log("Posts:", posts))
        .catch((error) => console.error(error));
    //
    
    //Example 3: Retry Logic
        const fetchDataWithRetry = (retries) => {
          return new Promise((resolve, reject) => {
            const fetchData = () => {
              fetch("https://jsonplaceholder.typicode.com/invalid-endpoint")
                .then((response) => {
                  if (!response.ok) {
                    throw new Error(`Failed with status: ${response.status}`);
                  }
                  return response.json();
                })
                .then(resolve)
                .catch((error) => {
                  if (retries === 0) {
                    reject(error);
                  } else {
                    console.log(`Retrying... (${retries})`);
                    retries--;
                    fetchData();
                  }
                });
            };
            fetchData();
          });
        };

        fetchDataWithRetry(3)
        .then((data) => console.log(data))
        .catch((error) => console.error("Final error:", error));
    //
//

//6. Key Takeaways
    //Promises simplify asynchronous operations.
    //Always use .catch() to handle errors.
    //Use Promise.all for parallel tasks and Promise.race for the fastest result.
    //Avoid deeply nested .then() chains; consider async/await for better readability.
    //Learn to debug promises by using .finally() and inspecting errors.
//




















