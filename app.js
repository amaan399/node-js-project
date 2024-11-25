const fs = require('fs').promises;

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
  
  async function writeToFile() {
    const message = "This is a message written to the file using async/await!";
  
    try {
      // Writing the message to message.txt file
      await fs.writeFile('message.txt', message);
      console.log('Message written to file successfully!');
    } catch (error) {
      console.log('Error writing to file:', error);
    }
  }
  writeToFile();  