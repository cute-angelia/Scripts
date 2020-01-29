# 历史价格

## 配置 (Surge)

```properties
[MITM]
hostname = api.m.jd.com, trade-acs.m.taobao.com,amdc.m.taobao.com

[Script]
http-response ^https?://api\.m\.jd\.com/client\.action\?functionId=(wareBusiness|serverConfig) requires-body=1,script-path=js/price/jd.js

http-response ^https?://amdc\.m\.taobao\.com/amdc/mobileDispatch requires-body=1,script-path=js/price/tb.js
http-response ^https://trade-acs\.m\.taobao\.com/gw/mtop\.taobao\.detail\.getdetail requires-body=1,script-path=js/price/tb.js

```

## 配置 (QuanX)

```properties
[MITM]
hostname = api.m.jd.com, trade-acs.m.taobao.com, amdc.m.taobao.com

[rewrite_local]
^https?://api\.m\.jd\.com/client\.action\?functionId=(wareBusiness|serverConfig) url script-response-body js/price/jd.js

^https?://api\.m\.jd\.com/client\.action\?functionId=(wareBusiness|serverConfig) url script-response-body js/price/tb.js

```

## 说明

> 注意：该脚本无破解离线功能,只是给新版 115 的 App 添加创建离线任务的方法。

1. 先把`*.115.com`加到`[MITM]`
2. 再配置重写规则:
3. 115 app 社区或者记录访问连接 [http://115.com/lx?taskdg=1](http://115.com/lx?taskdg=1)

## 常见问题

感谢[@nzw9314](https://github.com/nzw9314/QuantumultX)
