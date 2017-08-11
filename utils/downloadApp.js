import axios from '~plugins/axios'
import server from '~config/server'

export default function(url, type) {
    const u = navigator.userAgent
    const uw = u.toLowerCase()
    // android终端
    const isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1
    // ios终端
    const isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
    const isWeChat = uw.match(/MicroMessenger/i) === 'micromessenger'

    // 邀请好友页面，
    if (url) {
        window.location.href = url
        return
    }

    if (!isWeChat) {
        // 微信中，ios和Android 均使用魔窗方法，具体方法见download.html
        // 打开鱼大大 schema，安卓待处理，目前无法唤起app
        let schemaUrl = ''

        // 配置本地唤起的schema
        if (isAndroid) {
            schemaUrl = 'yudada://'
        } else if (isiOS) {
            schemaUrl = 'tencent1104916589://'
        }
        if (type === 'demandInfo') {
        // 待补充，参数拼接
            schemaUrl += ''
        }
        if (isiOS) {
            window.location = 'itms-apps://itunes.apple.com/cn/app/yu-da-da-qing-song-wan-cheng/id1125318661?mt=8'
        } else {
            // 通过schema唤起app
            window.location.href = schemaUrl

            setTimeout(function() {
                axios.get(`${server.baseUrl}getNowVersionPath/1`)
                .then((data) => {
                    if (data.code === 0) {
                        // alert(data.message);
                        alert('服务器升级中，请稍后尝试')
                    }
                    if (data.code === 1) {
                        window.location.href = data.data
                    }
                })
                .catch((data) => {
                    alert(data.message)
                })
            }, 500)
        }
    }
}
