
export type Language = 'zh-TW' | 'zh-CN' | 'en' | 'ja' | 'ko';

export const translations = {
  'zh-TW': {
    nav: {
      world: '世界觀',
      news: '最新消息',
      gameplay: '核心玩法',
      wishlist: '加入願望清單',
    },
    preloader: {
      line1: '媽媽說，月亮不正常的夜晚是不能出門的……',
    },
    privacy: {
      title: '隱私權政策',
      p1: '歡迎來到土界鎮官網。我們非常重視您的隱私權，請您詳細閱讀以下內容。',
      p2: '本網站主要作為遊戲宣傳與展示用途，我們承諾遵守相關隱私權法規。',
      l1: '資料收集：',
      l1_desc: '本網站僅收集必要的匿名使用數據（如瀏覽量），不會收集任何個人識別資料。',
      l2: 'Cookies 使用：',
      l2_desc: '我們使用 Cookies 來優化您的瀏覽體驗（如記住語言偏好），您可以隨時在瀏覽器設定中關閉。',
      l3: '第三方連結：',
      l3_desc: '本網站包含指向外部網站（如 Steam）的連結，這些網站的隱私權政策與我們無關。',
      update: '最後更新日期：2026.01.01',
      understood: '我了解了',
    },
    contentWarning: {
      title: '【 內容提示 】',
      text: '《土界鎮》包含驚悚氛圍、失蹤事件與民俗信仰等元素，可能引起不適。\n所有角色與設定皆為虛構，請依個人狀態自行斟酌體驗。',
    },
    hero: {
      comingSoon: 'COMING SOON',
      description_1: '為了尋找父親，',
      description_2: '你回到了這座被蔗糖與秘密包裹的小鎮。',
      description_3: '可從踏進邊界的那一刻起——',
      description_4: '有個聲音便在你耳邊輕輕地說：',
      description_punchline: '「你終於回來了。」',
      watchTrailer: '觀看概念影片',
      clickToInvestigate: '點擊調查',
    },
    town: {
      topSecret: 'TOP SECRET // 檔案',
      worldView: '世界觀',
      aboutTitle: '關於土界鎮',
      aboutDesc_1: '土界鎮是一座被山霧包住的小鎮。',
      aboutDesc_2: '三面環山，一面臨河，老街與廢鐵道交錯在谷地裡。',
      aboutDesc_3: '白天一切都顯得過於平靜；',
      aboutDesc_4: '到了夜晚，整個小鎮彷彿變了模樣。',
      aboutDesc_5: '鎮民從不說明原因，只會提醒：',
      quote: '「遵守規矩，你就能平安。」',
      fig1: 'FIG. 1: THE TEA HOUSE',
      taboo: '禁忌',
      guideTitle: '鎮民生存指南',
      guideVer: 'VER. 2.0',
      rule1: '看到蝸牛請繞道而行，切勿傷害。',
      rule2: '太陽下山後，請勿在戶外逗留。',
      rule3: '若看見不存在的車站，請立即閉上眼睛。',
      rule4_prefix: '絕對不要把',
      rule4_highlight: '「九姑娘花」',
      rule4_suffix: '帶出鎮外。',
      rule4_hover: 'SHE IS WATCHING YOU',
      notReady: '還沒準備好遵守這些規矩嗎？',
      pickupTicket: '車票',
      pickupTicketSub: '點擊拾取',
    },
    news: {
      title: '最新消息',
      readMore: '點擊查看更多關於此更新的詳細內容。土界鎮的秘密正在逐漸揭開...',
      items: [
        { date: '2026.01.20', category: 'NEWS', title: '官網正式上線！歡迎加入願望清單' }
      ]
    },
    gameplay: {
      title: '核心玩法',
      pickupLabel: '點擊拾取',
      card1: { title: '懷舊探索', sub: 'EXPLORATION', desc: '探索土界鎮的街道、廢糖廠與車站，從小鎮的地景與習俗中拼回被隱藏的真相。' },
      card2: { title: '看取能力', sub: 'THE SIGHT', desc: '觸摸舊物讀取殘留的記憶碎片，還原被掩蓋的真相。' },
      card3: { title: '異界生存', sub: 'SURVIVAL', desc: '當月亮變色，面對擬態成人類的「花倀」，利用弱點求生。' },
    },
    monster: {
      title: '失踪者觀察檔案 No.01 — 林晴',
      subtitle: '蒐集散落在土界鎮的記憶碎片，還原事件真相，並追查那些無法以常理解釋的現象……',
      caseId: 'CASE #001970',
      lockedOverlay: {
        topSecret: 'TOP SECRET',
        doNotOpen: 'DO NOT OPEN',
        desc: '此檔案已被封存。請尋回所有記憶碎片以解鎖內容。',
        hint: '（提示：線索就藏在網站的各個角落，請仔細尋找...）',
        status: 'DECRYPTION STATUS'
      },
      file: {
        basic: {
           title: '基本資料',
           content: '13 歲少女，個性開朗，疼愛妹妹。常穿藍色碎花洋裝，自幼習武。'
        },
        items: {
          title: '疑似殘留物品',
          list: [
            '布偶（右眼表面反光異常）',
            '票根（兒童類型，年份不明）',
            '相片碎片（兩名孩童合照，背後字跡遭刮除）'
          ],
          note: '（以上物件多次出現在事件周邊，來源待查。）'
        },
        event: {
          title: '事件摘要',
          content: '暑假外出時妹妹一度走失，隔日平安尋回。同日下午，有目擊指出林晴曾獨自前往 ████ 祈願（紀錄後遭涂销）。深夜，她因窗外異常的貓叫聲外出查看——這是最後一次確切目擊。'
        },
        observation: {
          title: '觀察日誌（簡短）',
          intro: '夜間巡查紀錄（節錄）：\n事件後第 3～21 日期間，多次在舊鐵道、廢糖廠入口及巷弄陰影中，觀察到與主體身高、動作相似的剪影。',
          quotes: [
            '「像她，但動作跟記憶中的不太一樣。」',
            '「影子抬頭的時間比身體早半拍。」',
            '「腰側有一塊像兒童橡皮章的模糊痕。」'
          ],
          rumors_title: '鎮上亦有未經證實的傳聞：',
          rumors_content: '夜裡曾聽見與她相似的聲音，但內容為前一天曾說過的句子。也有人描述她會在鐵路旁停留很久，像是在等某個看不見的東西。'
        },
        status: '狀態：持續追查中'
      },
      actionRequired: '行動確認',
      actionDesc: '請協助確認以上資訊',
      addToWishlist: '加入願望清單',
    },
    footer: {
      studio: '源境創遊 | OrzienGames',
      tagline: '以「源」為始，稚心投入。',
      desc: '“白日凡人，夜裡追夢人。\n一群朝九晚五的上班族，源於對遊戲的熱愛，從玩家化為開發者，期盼也能作出有共鳴的作品。”',
      credits: {
        col1: 'Production & Narrative',
        col2: 'Design & Art',
        col3: 'Tech & Audio',
        roles: {
          director: '發起人 Game Director',
          writer: '主編 Writer',
          coWriter: '協力編劇 Co-Writer',
          gameDesign: '遊戲設計 Game Design',
          artist: '美術設計 Artist',
          supporter: '美術支援 Supporter',
          uiux: 'UI/UX',
          programmer: '程式 Programmer',
          techSupporter: '技術支援 Supporter',
          sound: '音樂及音效 Music/Sound'
        }
      },
      privacy: '隱私權政策',
      contact: '聯絡我們'
    }
  },
  'zh-CN': {
    nav: {
      world: '世界观',
      news: '最新消息',
      gameplay: '核心玩法',
      wishlist: '加入愿望单',
    },
    preloader: {
      line1: '妈妈说，月亮不正常的夜晚是不能出门的……',
    },
    privacy: {
      title: '隐私政策',
      p1: '欢迎来到土界镇官网。我们非常重视您的隐私权，请您详细阅读以下内容。',
      p2: '本网站主要作为游戏宣传与展示用途，我们承诺遵守相关隐私法规。',
      l1: '资料收集：',
      l1_desc: '本网站仅收集必要的匿名使用数据（如浏览量），不会收集任何个人识别资料。',
      l2: 'Cookies 使用：',
      l2_desc: '我们使用 Cookies 来优化您的浏览体验（如记住语言偏好），您可以随时在浏览器设置中关闭。',
      l3: '第三方链接：',
      l3_desc: '本网站包含指向外部网站（如 Steam）的链接，这些网站的隐私政策与我们无关。',
      update: '最后更新日期：2026.01.01',
      understood: '我了解了',
    },
    contentWarning: {
      title: '【 内容提示 】',
      text: '《土界镇》包含惊悚氛围、失踪事件与民俗信仰等元素，可能引起不适。\n所有角色与设定皆为虚构，请依个人状态自行斟酌体验。',
    },
    hero: {
      comingSoon: 'COMING SOON',
      description_1: '为了寻找父亲，',
      description_2: '你回到了这座被蔗糖与秘密包裹的小镇。',
      description_3: '可从踏进边界的那一刻起——',
      description_4: '有个声音便在你耳边轻轻地说：',
      description_punchline: '“你终于回来了。”',
      watchTrailer: '观看概念视频',
      clickToInvestigate: '点击调查',
    },
    town: {
      topSecret: 'TOP SECRET // 档案',
      worldView: '世界观',
      aboutTitle: '关于土界镇',
      aboutDesc_1: '土界镇是一座被山雾包住的小镇。',
      aboutDesc_2: '三面环山，一面临河，老街与废铁道交错在谷地里。',
      aboutDesc_3: '白天一切都显得过于平静；',
      aboutDesc_4: '到了夜晚，整个小镇仿佛变了模样。',
      aboutDesc_5: '镇民从不说明原因，只会提醒：',
      quote: '“遵守规矩，你就能平安。”',
      fig1: 'FIG. 1: THE TEA HOUSE',
      taboo: '禁忌',
      guideTitle: '镇民生存指南',
      guideVer: 'VER. 2.0',
      rule1: '看到蜗牛请绕道而行，切勿伤害。',
      rule2: '太阳下山后，请勿在户外逗留。',
      rule3: '若看见不存在的车站，请立即闭上眼睛。',
      rule4_prefix: '绝对不要把',
      rule4_highlight: '“九姑娘花”',
      rule4_suffix: '带出镇外。',
      rule4_hover: 'SHE IS WATCHING YOU',
      notReady: '还没准备好遵守这些规矩吗？',
      pickupTicket: '车票',
      pickupTicketSub: '点击拾取',
    },
    news: {
      title: '最新消息',
      readMore: '点击查看更多关于此更新的详细内容。土界镇的秘密正在逐渐揭开...',
      items: [
        { date: '2026.01.20', category: 'NEWS', title: '官网正式上线！欢迎加入愿望单' }
      ]
    },
    gameplay: {
      title: '核心玩法',
      pickupLabel: '点击拾取',
      card1: { title: '怀旧探索', sub: 'EXPLORATION', desc: '探索土界镇的街道、废糖厂与车站，从小镇的地景与习俗中拼回被隐藏的真相。' },
      card2: { title: '看取能力', sub: 'THE SIGHT', desc: '触摸旧物读取残留的记忆碎片，还原被掩盖的真相。' },
      card3: { title: '异界生存', sub: 'SURVIVAL', desc: '当月亮变色，面对拟态成人类的“花伥”，利用弱点求生。' },
    },
    monster: {
      title: '失踪者观察档案 No.01 — 林晴',
      subtitle: '搜集散落在土界镇的记忆碎片，还原事件真相，并追查那些无法以常理解释的现象……',
      caseId: 'CASE #001970',
      lockedOverlay: {
        topSecret: 'TOP SECRET',
        doNotOpen: 'DO NOT OPEN',
        desc: '此档案已被封存。请寻回所有记忆碎片以解锁内容。',
        hint: '（提示：线索就藏在网站的各个角落，请仔细寻找...）',
        status: 'DECRYPTION STATUS'
      },
      file: {
        basic: {
           title: '基本资料',
           content: '13 岁少女，个性开朗，疼爱妹妹。常穿蓝色碎花洋装，自幼習武。'
        },
        items: {
          title: '疑似残留物品',
          list: [
            '布偶（右眼表面反光异常）',
            '票根（儿童类型，年份不明）',
            '相片碎片（两名孩童合照，背后字迹遭刮除）'
          ],
          note: '（以上物件多次出现在事件周边，来源待查。）'
        },
        event: {
          title: '事件摘要',
          content: '暑假外出时妹妹一度走失，隔日平安寻回。同日下午，有目击指出林晴曾独自前往 ████ 祈愿（纪录后遭涂销）。深夜，她因窗外异常的猫叫声外出查看——这是最后一次确切目击。'
        },
        observation: {
          title: '观察日誌（简短）',
          intro: '夜间巡查纪录（节录）：\n事件后第 3～21 日期间，多次在旧铁道、废糖厂入口及巷弄阴影中，观察到与主体身高、动作相似的剪影。',
          quotes: [
            '“像她，但动作跟记忆中的不太一样。”',
            '“影子抬头的时间比身体早半拍。”',
            '“腰侧有一块像儿童橡皮章的模糊痕。”'
          ],
          rumors_title: '镇上亦有未经证实的传闻：',
          rumors_content: '夜里曾听见与她相似的声音，但内容为前一天曾说过的句子。也有人描述她会在铁路旁停留很久，像是在等某个看不见的东西。'
        },
        status: '状态：持续追查中'
      },
      actionRequired: '行动确认',
      actionDesc: '请协助确认以上资讯',
      addToWishlist: '加入愿望单',
    },
    footer: {
      studio: '源境创游 | OrzienGames',
      tagline: '以“源”为始，稚心投入。',
      desc: '“白日凡人，夜里追梦人。\n一群朝九晚五的上班族，源于对游戏的热爱，从玩家化为开发者，期盼也能作出有共鸣的作品。”',
      credits: {
        col1: 'Production & Narrative',
        col2: 'Design & Art',
        col3: 'Tech & Audio',
        roles: {
          director: '发起人 Game Director',
          writer: '主编 Writer',
          coWriter: '协力编剧 Co-Writer',
          gameDesign: '游戏设计 Game Design',
          artist: '美术设计 Artist',
          supporter: '美术支援 Supporter',
          uiux: 'UI/UX',
          programmer: '程式 Programmer',
          techSupporter: '技术支援 Supporter',
          sound: '音乐及音效 Music/Sound'
        }
      },
      privacy: '隐私政策',
      contact: '联络我们'
    }
  },
  'en': {
    nav: {
      world: 'WORLD',
      news: 'NEWS',
      gameplay: 'GAMEPLAY',
      wishlist: 'WISHLIST',
    },
    preloader: {
      line1: 'Mother said, never go out when the moon looks wrong...',
    },
    privacy: {
      title: 'PRIVACY POLICY',
      p1: 'Welcome to the official Tujie Town site. We value your privacy.',
      p2: 'This site is for promotional purposes. We comply with relevant privacy regulations.',
      l1: 'Data Collection:',
      l1_desc: 'We only collect anonymous usage data. No personal info is stored.',
      l2: 'Cookies:',
      l2_desc: 'Cookies are used to save your language preference. You can disable them in your browser.',
      l3: 'Third-party Links:',
      l3_desc: 'Links to external sites (like Steam) are subject to their own policies.',
      update: 'Last Updated: 2026.01.01',
      understood: 'I UNDERSTAND',
    },
    contentWarning: {
      title: 'CONTENT WARNING',
      text: 'Tujie Town contains horror elements, missing persons themes, and folklore references that may be unsettling.\nAll characters and events are fictional. Player discretion is advised.',
    },
    hero: {
      comingSoon: 'COMING SOON',
      description_1: 'To find your missing father,',
      description_2: 'You return to this town shrouded in cane fields and secrets.',
      description_3: 'But from the moment you stepped across the border—',
      description_4: 'A voice whispered softly in your ear:',
      description_punchline: '"You have finally returned."',
      watchTrailer: 'WATCH TRAILER',
      clickToInvestigate: 'INVESTIGATE',
    },
    town: {
      topSecret: 'TOP SECRET // FILE',
      worldView: 'THE WORLD',
      aboutTitle: 'ABOUT TUJIE TOWN',
      aboutDesc_1: 'Tujie Town is isolated by dense mountain fog.',
      aboutDesc_2: 'Surrounded by mountains and a river, its old streets intertwine with abandoned railways.',
      aboutDesc_3: 'By day, everything seems too peaceful;',
      aboutDesc_4: 'But at night, the town reveals its true face.',
      aboutDesc_5: 'The locals never explain why, they only warn:',
      quote: '"Follow the rules, and you might survive."',
      fig1: 'FIG. 1: THE TEA HOUSE',
      taboo: 'TABOO',
      guideTitle: 'SURVIVAL GUIDE',
      guideVer: 'VER. 2.0',
      rule1: 'If you see a snail, walk around it. Do not harm it.',
      rule2: 'Do not stay outdoors after sunset.',
      rule3: 'If you see a station that shouldn\'t exist, close your eyes immediately.',
      rule4_prefix: 'NEVER take the',
      rule4_highlight: '"Lady Nine Flower"',
      rule4_suffix: 'out of town.',
      rule4_hover: 'SHE IS WATCHING YOU',
      notReady: 'Not ready to follow the rules?',
      pickupTicket: 'TICKET',
      pickupTicketSub: 'PICK UP',
    },
    news: {
      title: 'LATEST NEWS',
      readMore: 'Click to read more details. The secrets of Tujie Town are unfolding...',
      items: [
        { date: '2026.01.20', category: 'NEWS', title: 'Official Site Launch! Wishlist Now Available' }
      ]
    },
    gameplay: {
      title: 'GAMEPLAY',
      pickupLabel: 'PICK UP',
      card1: { title: 'EXPLORATION', sub: 'NOSTALGIA', desc: 'Explore the streets, abandoned sugar factory, and stations. Piece together the truth from the town\'s landscape and customs.' },
      card2: { title: 'THE SIGHT', sub: 'PSYCHOMETRY', desc: 'Touch old objects to read residual memory fragments and reconstruct the concealed truth.' },
      card3: { title: 'SURVIVAL', sub: 'MIMICRY', desc: 'When the moon turns red, face the "Flower Thralls" that mimic humans. Use their weaknesses to survive.' },
    },
    monster: {
      title: 'Missing Person File No.01 — Lin Ching',
      subtitle: 'Collect memory fragments scattered across Tujie Town to reconstruct the truth and investigate phenomena that defy explanation...',
      caseId: 'CASE #001970',
      lockedOverlay: {
        topSecret: 'TOP SECRET',
        doNotOpen: 'DO NOT OPEN',
        desc: 'This file is sealed. Recover all memory fragments to decrypt.',
        hint: '(Hint: Clues are hidden in corners of this site. Look closely...)',
        status: 'DECRYPTION STATUS'
      },
      file: {
        