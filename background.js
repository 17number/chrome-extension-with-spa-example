chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status === "complete" && tab.url.indexOf("https://www.airbnb.jp") > -1) {
    console.log(`updated: ${tab.url}`);
    chrome.tabs.executeScript(
      tabId,
      {
        file: "hello.js",
      },
      function(result) {
        console.log(`executed: ${result}`);
      }
    );
  }
});
