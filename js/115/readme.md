# 115 离线功能

> 代码已同时兼容 Surge & QuanX, 使用同一份脚本即可

> 2020.1.11 QuanX 在`190`版本开始, 获取 Cookie 方式需要从`script-response-body`改为`script-request-header`

## 配置 (Surge)

```properties
[MITM]
*.115.com

[Script]
http-response ^http:\/\/115\.com\/lx._\$ script-path=https://raw.githubusercontent.com/ikanam/Surge-Scripts/master/115lx.js, requires-body=true
http-response ^https?:\/\/webapi\.115\.com\/user\/check_sign._$ script-path=https://raw.githubusercontent.com/ikanam/Surge-Scripts/master/115lx.js, requires-body=true

```

## 配置 (QuanX)

```properties
[MITM]
*.115.com

[rewrite_local]
^http:\/\/115\.com\/lx.*$ url script-response-body js/115/115lx.js
^https?:\/\/webapi\.115\.com\/user\/check_sign.*$ url script-response-body js/115/115lx.js

```

## 说明

> 注意：该脚本无破解离线功能,只是给新版 115 的 App 添加创建离线任务的方法。

1. 先把`*.115.com`加到`[MITM]`
2. 再配置重写规则:
3. 115 app 社区或者记录访问连接 [http://115.com/lx?taskdg=1](http://115.com/lx?taskdg=1)

## 常见问题

感谢[@nzw9314](https://github.com/nzw9314/QuantumultX)
