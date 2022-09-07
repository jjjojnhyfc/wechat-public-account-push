export const config = {
  /**
   * 公众号配置
   */

  // 公众号APP_ID 
  // APP_ID: "wx39e4a624aea19caa",
  // 公众号APP_SECRET 
  // APP_SECRET: "e2ba1c7fff43d25688923536ba6fee8",

  USERS: ["oQhUU5zWVw2j4IliXYv0ps_zeiTY"]
    {
      // 想要发送的人的名字
      name: "妈咪",
      // 扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: "ohxOO6VskY2v40Kuf5ywIZVRM3puXhk",
      // 你想对他发送的模板消息的模板ID
      useTemplateId: "HuHu5gxmAx6XTta6aXCTHsS4z2-hG_RO1m0BHFv8rPA",
      // 所在省份
      province: "广东",
      // 所在城市
      city: "广州",
      // 他点击详情后跳转的页面,你可以设置成微博的热榜，也可以设置成其他，网址一定要填对；不填对也没关系，随便你，会打不开而已。
      openUrl: "https://wangxinleo.cn"
    }, 
    {
      name: "爸爸", 
      id: "",
      useTemplateId: "",
      province: "",
      city: "",
      openUrl: "https://wangxinleo.cn"
    }, 

  // 回调消息模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: "HuHu5gxmAx6XTta6aXCTHsS4z2-hG_RO1m0BHFv8rPA",

  // 接收成功回调消息的微信号，（一般来说只填自己的微信号, name填不填无所谓）
  CALLBACK_USERS: ["oQhUU5zWVw2j4IliXYv0ps_zeiTY"]
    {
      // 一般都填自己
      name: "自己",
      // 自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: "oQhUU5zWVw2j4IliXYv0ps_zeiTY",
    }, 
  ],
    
  /**
   * 信息配置
   */

  /** 天气相关 */

  // 默认所在省份, USERS 中没填的话, 会默认拿这里的省份
  PROVINCE: "广东",
  // 默认所在城市, USERS 中没填的话, 会默认拿这里的城市
  CITY: "广州",


  /** 插槽 */

  /** 你可以在这里写超多的你想显示的内容了！
    * keyword是指暴露给测试号的模板字段，填什么就暴露什么, 请注意不要和README的出参表中的字段重复。
    * 比如：keyword: "lover_prattle" ，在测试号中就是 {{ lover_prattle.DATA }} 
    * */
  SLOT_LIST: [
    // 这样配置的话，就会每次发送这句话
    {"keyword": "encourage_oneself", contents: "你主要的问题在于读书太少而想得太多"},
    // 这样配置的话，就会每次随机选一句话发送
    {"keyword": "lover_prattle", contents: [
      "因为太喜欢你，所以看谁都像是情敌。",
      "申请成为你爱里的永久居民。",
      "你很傻，你很笨，可我还是很羡慕你，因为你有我",
      "遇见你，就好像捡到了100斤的运气",
    ]},
  ],

  /** 每日一言 */

  // 好文节选的内容类型
  // 可以填写【动画，漫画，游戏，小说，原创，网络，其他】； 随机则填写 ""
  LITERARY_PREFERENCE: ""


}
