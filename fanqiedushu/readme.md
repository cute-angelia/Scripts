# 番茄读书

> 代码已同时兼容 Surge & QuanX, 使用同一份脚本即可

## 配置 (Surge)

```properties
[Rule]
DOMAIN,mon.snssdk.com,REJECT // 番茄读书

[MITM]
*.snssdk.com

[Script]
http-response ^https?://.*\.snssdk.com.* requires-body=true,max-size=131072,script-path=js/fanqiedushu.js,debug=true

```

## 配置 (QuanX)

```properties

[filter_local]
host,mon.snssdk.com,reject

[MITM]
*.snssdk.com

[rewrite_local]
# 番茄读书
^https?://.*\.snssdk.com.* url script-response-body js/fanqiedushu/fanqiedushu.js

```

## 说明

番茄读书去广告

## 常见问题
