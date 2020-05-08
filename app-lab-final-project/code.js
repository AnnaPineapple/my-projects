setScreen("2screen");
setProperty("2screen", "image", "icon://fa-smile-o");
onEvent("Family", "click", function() {
  playSound("assets/default.mp3");
  setScreen("startScreen");
  setProperty("startScreen", "image", "icon://fa-exchange");
});
onEvent("Friends", "click", function(){
playSound("assets/default.mp3");
setScreen("Screeno");
setProperty("Screeno", "image", "icon://fa-paw");
});
onEvent("Yeah", "click", function(){
setScreen("screen1");
setProperty("startScreen", "image", "https://fa-exchange");
playSound("assets/default.mp3");
});
onEvent("No", "click", function(){
setProperty("startScreen", "image", "https://fa-exchange");
setScreen("startScreen");
});
onEvent("left", "click", function(){
setScreen("screen3");
setProperty("screen1", "image", "icon://fa-medium");
playSound("assets/default.mp3");
});
onEvent("Right", "click", function(){
playSound("assets/default.mp3");
setScreen("screen1");
setProperty("screen1", "image", "icon://fa-car");
});
onEvent("Park", "click", function(){
playSound("assets/default.mp3");
setScreen("Screenplay");
});
onEvent("button", "click", function(){
setScreen("2screen");
playSound("assets/default.mp3");
});
onEvent("Volcano", "click", function(){
setScreen("screen5");
});
onEvent("buto", "click", function(){
playSound("assets/default.mp3");
setScreen("2screen");
});
onEvent("movies", "click", function(){
setScreen("screen7");
});
onEvent("Buttons", "click", function(){
setScreen("2screen");
});
onEvent("bueu", "click", function(){
setScreen("2screen");
});
