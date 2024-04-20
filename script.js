function processRequest(topic) {
    // Display processing message
    var processingMessage = document.getElementById("processing-message");
    processingMessage.style.display = "block";
    processingMessage.textContent = "Processing request for " + topic + "...";

    // Simulate processing delay (you can replace this with your actual processing logic)
    setTimeout(function() {
        // After processing, hide the processing message
        processingMessage.style.display = "none";

        // Display completion message
        var completionMessage = document.getElementById("completion-message");
        completionMessage.style.display = "block";
        completionMessage.textContent = "Request for " + topic + " completed.";

        // Hide completion message after a few seconds
        setTimeout(function() {
            completionMessage.style.display = "none";
        }, 2000); // Duration to display completion message (2000 milliseconds)

    }, 2000); // Simulated processing time of 2 seconds (2000 milliseconds)
}