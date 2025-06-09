let eventid;
document.querySelector("#start").addEventListener("click", () => {
  eventid = setInterval(() => {
    console.log("event started");
  }, 1000);
});
document.querySelector("#stop").addEventListener("click", () => {
  clearInterval(eventid);
  console.log("stopped");
});
