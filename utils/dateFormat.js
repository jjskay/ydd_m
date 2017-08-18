/**
 * 时间格式化工具
 */

function getYMD(time) {
    if (!time) {
        return ''
    }
    const date = time.length === 13 ? time : time * 1000

    const today = new Date(date)
    const year = today.getFullYear()
    const month = today.getMonth() + 1
    const day = today.getDate()

    return `${year}年${month}月${day}日`
}

function releaseInfoDate(unix) {
    if (!unix) {
        return
    }
    let today = new Date()
    let unixs = new Date((unix * 1000))

    let year = today.getFullYear()
    let month = today.getMonth() + 1
    let day = today.getDate()
    let min = today.getMinutes()

    let unixMonth = parseInt(unixs.getMonth() + 1, 10)
    let unixday = unixs.getDate()

    let todayZero = year + '/' + month + '/' + day

    let currentUnix = Date.parse(new Date(today)) / 1000 // 当前时间戳
    let todayZeroUnix = Date.parse(new Date(todayZero)) / 1000 // 当天凌晨时间戳
    let yestedayZeroUnix = parseInt(todayZeroUnix - 24 * 60 * 60, 10) // 昨天凌晨时间戳
    let qiantianZeroUnix = parseInt(yestedayZeroUnix - 24 * 60 * 60, 10) // 前天凌晨
    let unixDefi = parseInt(currentUnix - unix, 10) // 时间戳差
    let temp = ''
    let hourt = ''
    // 刚刚
    if (unixDefi <= 60) {
        temp = '刚刚'
    } else if (unixDefi > 60 && unixDefi <= 60 * 60) {
        // 几分钟之前
        min = parseInt(unixDefi / 60, 10)
        temp = min + '分钟前'
    } else if (unix < currentUnix && unix > todayZeroUnix) {
        // 几小时之前
        hourt = parseInt((currentUnix - unix) / (60 * 60), 10)
        temp = hourt + '小时前'
    } else if (unix > yestedayZeroUnix && unix <= todayZeroUnix) {
        // 昨天
        temp = '昨天发布'
    } else if (unix < yestedayZeroUnix && unix >= qiantianZeroUnix) {
        // 前天
        temp = '前天发布'
    } else {
        temp = unixMonth + '月' + unixday + '日发布'
    }
    return temp
}

function getMarketTimeStr(time) {
    if (!time) {
        return ''
    }
    const date = time.length === 13 ? time : time * 1000
    const year = new Date(date).getFullYear()
    const month = new Date(date).getMonth() + 1
    const day = new Date(date).getDate()
    let timeStr = ''
    if (day <= 10) {
        timeStr = '上旬'
    }

    if (day <= 20 && day > 10) {
        timeStr = '中旬'
    }

    if (day > 20) {
        timeStr = '下旬'
    }
    return `预售产品，${year}年${month}月${timeStr}开卖`
}

function getBuyTimeText(time) {
    let res = ''
    if (!time) {
        res = '长期收购'
    } else {
        const date = time.length === 13 ? time : time * 1000
        const differenceTime = parseFloat((date * 1000 - new Date().getTime()) / (60 * 60 * 24 * 1000 * 30), 10)
        if (differenceTime > 0 && differenceTime <= 1) {
            res = '一个月内收购'
        } else if (differenceTime > 1 && differenceTime <= 2) {
            res = '两个月内收购'
        } else if (differenceTime > 2 && differenceTime <= 3) {
            res = '三个月内收购'
        } else {
            res = '长期收购'
        }
    }
    return res
}

export {
    getYMD,
    releaseInfoDate,
    getMarketTimeStr,
    getBuyTimeText
}
