let json = $response.body;
json.result.vipInfo.iconText = "";
json.result.vipInfo.textInfo = "";s
let body = JSON.stringify(json)
console.log("body--->" + body)
$done({body})
