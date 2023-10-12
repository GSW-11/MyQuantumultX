let json = JSON.parse($response.body)
json.result.vipInfo.iconText = "";
json.result.vipInfo.textInfo = "";
let body = JSON.stringify(json)
$done({body})
