export default onmessage = function (event) {
  console.log("Received message from the main thread:", event.data);

  // Perform some computation
  const result = event.data * 2;

  // Send the result back to the main thread
  postMessage(result);
};
