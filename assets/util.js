var mqtt = { hostname: "spirulina.cc", port: 9393 };
var topic_name = "air/kn";
var publish_cnt = 0;
// called when the client loses its connection
function onConnectionLost(responseObject) {
  if (responseObject.errorCode !== 0) {
    console.log("onConnectionLost: "+responseObject.errorMessage);
  }
}
// called when a message arrives
function onMessageArrived(message) {
  console.log("onMessageArrived: "+message.payloadString);
  const obj = JSON.parse(message.payloadString);
  document.getElementById("demo").innerHTML = obj.values;
} 
