let data = $response.body;
console.log("data--->"+data)
let json = JSON.parse(data)
console.log("json--->"+json)
json.result.vipInfo.iconText = "";
json.result.vipInfo.textInfo = "";
let body = JSON.stringify(json)
console.log("body--->" + body)
$done({body})
