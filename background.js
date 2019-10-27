chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  console.log({
    tabId: tabId,
    changeInfo: changeInfo,
    tab: tab,
    tabUrl: tab.url,
    locationHref: location.href,
    this: this
  });
  if (changeInfo.status === "complete" && tab.url.indexOf("https://www.google.com/") > -1) {
    console.log(`updated: ${tab.url}`);
  }
});
