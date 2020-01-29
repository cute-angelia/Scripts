/**
* @supported E54765DF5F47
* @tag 微信阅读
* @host i.weread.qq.com
*/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const vip = '/pay/memberCardSummary';
const free = '/book/info';

if (url.indexOf(vip) != -1) {
    if (obj.hasOwnProperty('expiredTime')) {
        obj.expiredTime = 1890623940
    }

    if (obj.hasOwnProperty('remainTime')) {
        obj.remainTime = 354045670
    }

    if (obj.hasOwnProperty('freeBookIds')) {
        obj.freeBookIds = ["25444718", "25445167"]
    }
    body = JSON.stringify(obj);
}

if (url.indexOf(free) != -1) {
    obj.maxFreeChapter = 2000;
    obj.free = 1;
    body = JSON.stringify(obj);
}

$done({ body });

/*
https?:\/\/i\.weread\.qq.com\/pay\/memberCardSummary\?pf
hostname = i.weread.qq.com
*/