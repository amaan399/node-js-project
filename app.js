const myPromise = new Promise((resolve, reject) => {
    const message = "Hii, This is Amaan";
    resolve(message); // Resolving the promise with a message
  });
  
  // Calling the promise and handling the result
  myPromise.then((message) => {
    console.log(message); // Display the message
  }).catch((error) => {
    console.log(error);
  });
  