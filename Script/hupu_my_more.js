let data = $response.body;
let json = JSON.parse(data)
json.result.vipInfo.iconText = "";
json.result.vipInfo.textInfo = "";
let body = JSON.stringify(json)
console.log("body--->" + body)
$done({body})
