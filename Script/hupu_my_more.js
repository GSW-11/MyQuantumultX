let data=$response.body
let json = JSON.parse(data)
# console.log("iconText--->"+json.result.vipInfo.iconText)
# console.log("textInfo--->"+json.result.vipInfo.iconText)
json.result.vipInfo.iconText = ""
json.result.vipInfo.textInfo = ""
# delete json.result.vipInfo
let body = JSON.stringify(json)
# console.log("body--->"+body)
$done({body})
