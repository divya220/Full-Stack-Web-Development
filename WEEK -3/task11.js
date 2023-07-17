const os = require('os');

function displayMemoryInformation() {
  // Get the total system memory in bytes
  const totalMemoryBytes = os.totalmem();
  // Convert total memory to GB for readability
  const totalMemoryGB = (totalMemoryBytes / 1024 / 1024 / 1024).toFixed(2);

  // Get the free memory in bytes
  const freeMemoryBytes = os.freemem();
  // Convert free memory to GB for readability
  const freeMemoryGB = (freeMemoryBytes / 1024 / 1024 / 1024).toFixed(2);

  // Calculate the percentage of free memory
  const freeMemoryPercentage = ((freeMemoryBytes / totalMemoryBytes) * 100).toFixed(2);

  // Display the memory information
  console.log(`Total Memory: ${totalMemoryGB} GB`);
  console.log(`Free Memory: ${freeMemoryGB} GB`);
  console.log(`Percentage of Free Memory: ${freeMemoryPercentage}%`);
}

// Call the function to display memory information
displayMemoryInformation();
