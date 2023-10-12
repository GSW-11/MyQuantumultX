let data={
    "result" : [
        {
            "icon" : "https://i2.hoopchina.com.cn/blogfile/20224/6/BbsImg_80840762213715_1649242237_s_49144_o_w_1000_h_1000_91861.png",
            "schema" : "huputiyu://briefsport?en=nba&id=games",
            "name" : "赛程",
            "color" : {
                "day" : "#000000",
                "night" : "#FFFFFF"
            }
        },
        {
            "icon" : "https://i1.hoopchina.com.cn/blogfile/20224/6/BbsImg_80840762213715_1649241971_s_54526_o_w_1000_h_1000_29310.png",
            "schema" : "huputiyu://briefsport?en=nba&id=playersrank",
            "name" : "数据榜",
            "color" : {
                "day" : "#000000",
                "night" : "#FFFFFF"
            }
        },
        {
            "icon" : "http://i11.hoopchina.com.cn/all-backend/212121BBBB58A4D3C67B98033FDE41FF_1657194410324.png",
            "schema" : "huputiyu://bball/nba/followteam",
            "name" : "主队",
            "color" : {
                "day" : "#000000",
                "night" : "#FFFFFF"
            }
        }
    ],
    "hostName" : "basketball-news-msv-20231001000533-9747181-795cf87985-wgbg4",
    "status" : 200,
    "errorMsg" : "",
    "traceId" : null,
    "success" : true,
    "msg" : "",
    "errorCode" : ""
}
body=JSON.stringify(data)
$done({body})
