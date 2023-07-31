
import ml5 from "ml5";
const sentiment = ml5.sentiment('movieReviews', modelReady);


// Type for the message sent from the popup
interface Message {
  action: string;
}

function modelReady() {
  // model is ready
  alert("model loaded");
}

// Listen for messages from the popup
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.action === "copyText") {
    const selectedText = window.getSelection()?.toString()?.trim() || "";
    if (selectedText) {

      const prediction = sentiment.predict(selectedText);
      alert("The sentiment of the text is " + prediction.score);

    } else {
      alert("No text selected. Please click on an element with text to copy it.");
    }
  }
  alert("asadlkfj");
});