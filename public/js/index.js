//get the data
var json = <%- JSON.stringify(items) %>;
$(".inside").append("items = "+json.toString());