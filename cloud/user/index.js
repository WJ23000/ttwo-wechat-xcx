// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init({ env: cloud.DYNAMIC_CURRENT_ENV })

// 云函数入口函数
exports.main = async (event, context) => {

  const type = event.action

  switch (event.action) {
    case 'userInfo': {
      return getUserInfo(event)
    }
    case 'sumResult': {
      return getSumResult(event)
    }
    default: {
      return
    }
  }

}

async function getUserInfo(event) {
  const wxContext = cloud.getWXContext()
  return {
    event,
    openid: wxContext.OPENID,
    appid: wxContext.APPID,
    unionid: wxContext.UNIONID,
  }
}
 
async function getSumResult(event) {
  const z = event.x + event.y
  return {
    result: z
  }
}