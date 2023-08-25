# 个人自用开屏广告以及其他广告去除
# update：2023-08-22 13:55

hostname= m.client.10010.com, rtbapi.douyucdn.cn, ms.jr.jd.com, app.10099.com.cn, nex.163.com, hpydcdn.gp.qq.com, formal.api.gp.qq.com, dict.youdao.com, api-overmind.youdao.com, cdke.youdao.com, enjoy.cdn-static.abchina.com, iad.g.163.com

# 和平营地开屏广告
^https:\/\/formal\.api\.gp\.qq\.com\/game\/buttons url reject-dict
^https:\/\/hpydcdn\.gp\.qq\.com\/button\/\d{8,}\.jpg url reject-dict

#农业银行
^https?:\/\/enjoy\.cdn-static\.abchina\.com\/yx-engine-web\/file\/download\/6bd18.*? url reject-200

# 网易邮箱大师开屏
^https:\/\/nex\.163\.com\/\w url reject-dict
^https:\/\/iad\.g\.163\.com\/ma\/ad\/new url reject-dict

# 广电营业厅
^https:\/\/app\.10099\.com\.cn\/contact-web\/api\/version\/getFlashScreenPage url reject-200

# 中国联通营业厅
^https:\/\/m\.client\.10010\.com\/mobileService\/customer\/accountListData\.htm url reject-dict

# 京东金融
^https?:\/\/ms\.jr\.jd\.com\/gw\/generic\/aladdin\/newna\/m\/getLoadingPicture url reject-200

# 斗鱼开屏
^https:\/\/rtbapi\.douyucdn\.cn\/japi\/sign\/app\/getinfo url reject-dict

# 网易有道词典    
#主机名dict.youdao.com,api-overmind.youdao.com,cdke.youdao.com

# 翻译广告
^https:\/\/dict\.youdao\.com\/course\/tab\/translateTab url reject-dict

# 听读训练
^https:\/\/dict\.youdao\.com\/homepage\/tile url reject-dict

# 首次查词弹窗
^https:\/\/api-overmind\.youdao\.com\/openapi\/get\/luna\/dict\/dict-mobile\/prod\/dictCommonConfig url reject-dict

# 首页弹窗
^https:\/\/cdke\.youdao\.com\/course3\/recommend\/dict\/startup url reject-dict

# 搜索预想
^https:\/\/dict\.youdao\.com\/commonsearch url reject-dict

# 会员优惠券弹窗
^https:\/\/dict\.youdao\.com\/vip\/activity\/couponinfo url reject-dict

#首页左上角福利中心
^https:\/\/dict\.youdao\.com\/dictusertask\/system url reject-dict