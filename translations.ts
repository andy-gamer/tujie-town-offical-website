
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
      viewAll: 'VIEW ALL NEWS',
      readMore: '點擊查看更多關於此更新的詳細內容。土界鎮的秘密正在逐漸揭開...',
      items: [
        { date: '2026.01.20', category: 'NEWS', title: '官網正式上線！土界鎮的大門已開啟' }
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
      title: '失蹤者觀察檔案 No.01 — 林晴',
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
        event: {
           title: '事件摘要',
           content: '暑假外出時妹妹一度走失，隔日平安尋回。同日下午，有目擊指出林晴曾獨自前往 ████ 祈願（紀錄後遭塗銷）。深夜，她因窗外異常的貓叫聲外出查看——這是最後一次確切目擊。'
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
        observation: {
           title: '觀察日誌（簡短）',
           section1_title: '夜間巡查紀錄（節錄）：',
           section1_content: '事件後第 3～21 日期間，多次在舊鐵道、廢糖廠入口及巷弄陰影中，觀察到與主體身高、動作相似的剪影。',
           quotes: [
             '「像她，但動作跟記憶中的不太一樣。」',
             '「影子抬頭的時間比身體早半拍。」',
             '「腰側有一塊像兒童橡皮章的模糊痕。」'
           ],
           section2_title: '鎮上亦有未經證實的傳聞：',
           section2_content: '夜裡曾聽見與她相似的聲音，但內容為前一天曾說過的句子。也有人描述她會在鐵路旁停留很久，像是在等某個看不見的東西。'
        },
        status: '狀態：持續追查中'
      },
      actionRequired: '行動確認',
      actionDesc: '請協助確認以上資訊',
      addToWishlist: '加入願望清單',
    },
    footer: {
      tagline: '記憶是會騙人的，但恐懼不會。',
      quote: '當你凝視深淵的時候，深淵也在凝視你。',
      director: '製作人',
      writer: '劇本',
      coWriter: '共同編劇',
      gameDesign: '遊戲設計',
      artist: '美術',
      supporter: '協力',
      uiux: 'UI/UX',
      programmer: '程式',
      sound: '音效',
      privacy: '隱私權政策',
      terms: '使用者條款',
      contact: '聯絡我們',
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
      title: '隐私权政策',
      p1: '欢迎来到土界镇官网。我们非常重视您的隐私权，请您详细阅读以下内容。',
      p2: '本网站主要作为游戏宣传与展示用途，我们承诺遵守相关隐私权法规。',
      l1: '资料收集：',
      l1_desc: '本网站仅收集必要的匿名使用数据（如浏览量），不会收集任何个人识别资料。',
      l2: 'Cookies 使用：',
      l2_desc: '我们使用 Cookies 来优化您的浏览体验（如记住语言偏好），您可以随时在浏览器设定中关闭。',
      l3: '第三方连结：',
      l3_desc: '本网站包含指向外部网站（如 Steam）的连结，这些网站的隐私权政策与我们无关。',
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
      description_punchline: '「你终于回来了。」',
      watchTrailer: '观看概念影片',
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
      quote: '「遵守规矩，你就能平安。」',
      fig1: 'FIG. 1: THE TEA HOUSE',
      taboo: '禁忌',
      guideTitle: '镇民生存指南',
      guideVer: 'VER. 2.0',
      rule1: '看到蜗牛请绕道而行，切勿伤害。',
      rule2: '太阳下山后，请勿在户外逗留。',
      rule3: '若看见不存在的车站，请立即闭上眼睛。',
      rule4_prefix: '绝对不要把',
      rule4_highlight: '「九姑娘花」',
      rule4_suffix: '带出镇外。',
      rule4_hover: 'SHE IS WATCHING YOU',
      notReady: '还没准备好遵守这些规矩吗？',
      pickupTicket: '车票',
      pickupTicketSub: '点击拾取',
    },
    news: {
      title: '最新消息',
      viewAll: 'VIEW ALL NEWS',
      readMore: '点击查看更多关于此更新的详细内容。土界镇的秘密正在逐渐揭开...',
      items: [
        { date: '2026.01.20', category: 'NEWS', title: '官网正式上线！土界镇的大门已开启' }
      ]
    },
    gameplay: {
      title: '核心玩法',
      pickupLabel: '点击拾取',
      card1: { title: '怀旧探索', sub: 'EXPLORATION', desc: '探索土界镇的街道、废糖厂与车站，从小镇的地景与习俗中拼回被隐藏的真相。' },
      card2: { title: '看取能力', sub: 'THE SIGHT', desc: '触摸旧物读取残留的记忆碎片，还原被掩盖的真相。' },
      card3: { title: '异界生存', sub: 'SURVIVAL', desc: '当月亮变色，面对拟态成人类的「花伥」，利用弱点求生。' },
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
           content: '13 岁少女，个性开朗，疼爱妹妹。常穿蓝色碎花洋装，自幼习武。'
        },
        event: {
           title: '事件摘要',
           content: '暑假外出时妹妹一度走失，隔日平安寻回。同日下午，有目击指出林晴曾独自前往 ████ 祈愿（纪录后遭涂销）。深夜，她因窗外异常的猫叫声外出查看——这是最后一次确切目击。'
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
        observation: {
           title: '观察日志（简短）',
           section1_title: '夜间巡查纪录（节录）：',
           section1_content: '事件后第 3～21 日期间，多次在旧铁道、废糖厂入口及巷弄阴影中，观察到与主体身高、动作相似的剪影。',
           quotes: [
             '「像她，但动作跟记忆中的不太一样。」',
             '「影子抬头的时间比身体早半拍。」',
             '「腰侧有一块像儿童橡皮章的模糊痕。」'
           ],
           section2_title: '镇上亦有未证实传闻：',
           section2_content: '夜里曾听见与她相似的声音，但内容为前一天曾说过的句子。也有人描述她会在铁路旁停留很久，像是在等某个看不见的东西。'
        },
        status: '状态：持续追查中'
      },
      actionRequired: '行动确认',
      actionDesc: '请协助确认以上资讯',
      addToWishlist: '加入愿望单',
    },
    footer: {
      tagline: '记忆是会骗人的，但恐惧不会。',
      quote: '当你凝视深渊的时候，深渊也在凝视你。',
      director: '制作人',
      writer: '剧本',
      coWriter: '共同编剧',
      gameDesign: '游戏设计',
      artist: '美术',
      supporter: '协力',
      uiux: 'UI/UX',
      programmer: '程式',
      sound: '音效',
      privacy: '隐私权政策',
      terms: '使用者条款',
      contact: '联络我们',
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
      title: 'Privacy Policy',
      p1: 'Welcome to the Tujie Town official site. We value your privacy.',
      p2: 'This site is for promotional purposes. We comply with relevant privacy laws.',
      l1: 'Data Collection:',
      l1_desc: 'We only collect necessary anonymous usage data (e.g., views). No PII is collected.',
      l2: 'Cookies:',
      l2_desc: 'We use cookies for user experience (e.g., language preference). You can disable them in your browser.',
      l3: 'Third-party Links:',
      l3_desc: 'Links to external sites (like Steam) are subject to their own privacy policies.',
      update: 'Last Updated: 2026.01.01',
      understood: 'I Understand',
    },
    contentWarning: {
      title: '【 CONTENT WARNING 】',
      text: 'Tujie Town contains horror elements, themes of disappearance, and folklore beliefs that may cause discomfort.\nAll characters and settings are fictional. Please proceed with discretion.',
    },
    hero: {
      comingSoon: 'COMING SOON',
      description_1: 'To find your father,',
      description_2: 'You returned to this town wrapped in sugar cane and secrets.',
      description_3: 'But from the moment you stepped across the border—',
      description_4: 'A voice whispered gently in your ear:',
      description_punchline: '"You finally returned."',
      watchTrailer: 'WATCH TRAILER',
      clickToInvestigate: 'INVESTIGATE',
    },
    town: {
      topSecret: 'TOP SECRET // FILE',
      worldView: 'WORLD VIEW',
      aboutTitle: 'ABOUT TUJIE TOWN',
      aboutDesc_1: 'Tujie Town is shrouded in mountain fog.',
      aboutDesc_2: 'Surrounded by mountains on three sides and a river on one.',
      aboutDesc_3: 'By day, everything seems overly calm;',
      aboutDesc_4: 'By night, the whole town changes its face.',
      aboutDesc_5: 'The townsfolk never explain why, they only warn:',
      quote: '"Follow the rules, and you will be safe."',
      fig1: 'FIG. 1: THE TEA HOUSE',
      taboo: 'TABOO',
      guideTitle: 'SURVIVAL GUIDE',
      guideVer: 'VER. 2.0',
      rule1: 'If you see a snail, walk around it. Do not harm it.',
      rule2: 'Do not linger outdoors after sunset.',
      rule3: 'If you see a station that shouldn\'t exist, close your eyes immediately.',
      rule4_prefix: 'NEVER take',
      rule4_highlight: '"The Ninth Lady Flower"',
      rule4_suffix: 'out of town.',
      rule4_hover: 'SHE IS WATCHING YOU',
      notReady: 'Not ready to follow these rules?',
      pickupTicket: 'TICKET',
      pickupTicketSub: 'PICK UP',
    },
    news: {
      title: 'LATEST NEWS',
      viewAll: 'VIEW ALL NEWS',
      readMore: 'Click to view more details about this update. The secrets of Tujie Town are unraveling...',
      items: [
        { date: '2026.01.20', category: 'NEWS', title: 'Official Site Launched! The gates to Tujie Town are open.' }
      ]
    },
    gameplay: {
      title: 'CORE GAMEPLAY',
      pickupLabel: 'PICK UP',
      card1: { title: 'EXPLORATION', sub: 'NOSTALGIA', desc: 'Explore the streets, abandoned sugar factory, and stations of Tujie Town. Piece together hidden truths from the landscape and customs.' },
      card2: { title: 'THE SIGHT', sub: 'VISION', desc: 'Touch old objects to read residual memory fragments and restore the covered truth.' },
      card3: { title: 'SURVIVAL', sub: 'OTHERWORLD', desc: 'When the moon changes color, face the "Flower Thralls" mimicking humans. Use their weaknesses to survive.' },
    },
    monster: {
      title: 'Missing Person File No.01 — Lin Qing',
      subtitle: 'Collect memory fragments scattered across Tujie Town to reconstruct the truth and investigate phenomena that defy common sense...',
      caseId: 'CASE #001970',
      lockedOverlay: {
        topSecret: 'TOP SECRET',
        doNotOpen: 'DO NOT OPEN',
        desc: 'This file is sealed. Retrieve all memory fragments to unlock content.',
        hint: '(Hint: Clues are hidden in corners of the website. Look carefully...)',
        status: 'DECRYPTION STATUS'
      },
      file: {
        basic: {
           title: 'Basic Info',
           content: '13-year-old girl. Cheerful personality, loves her younger sister. Often wears a blue floral dress. Trained in martial arts since childhood.'
        },
        event: {
           title: 'Event Summary',
           content: 'Sister briefly went missing during summer vacation but was found safe the next day. That same afternoon, witnesses saw Lin Qing going alone to ████ to pray (record later redacted). Late at night, she went out to check on strange cat noises outside her window—this was the last confirmed sighting.'
        },
        items: {
           title: 'Residual Items',
           list: [
             'Doll (Right eye reflects light abnormally)',
             'Ticket Stub (Child type, year unknown)',
             'Photo Fragment (Two children, writing on back scratched off)'
           ],
           note: '(These items appear frequently near the event location. Source pending investigation.)'
        },
        observation: {
           title: 'Observation Log (Brief)',
           section1_title: 'Night Patrol Record (Excerpt):',
           section1_content: 'Between days 3-21 after the event, a silhouette matching the subject\'s height and movements was observed multiple times near the old railway, sugar factory entrance, and alley shadows.',
           quotes: [
             '"It looks like her, but the movement is different from memory."',
             '"The shadow looks up a split second before the body does."',
             '"There is a blur on the waist like a child\'s rubber stamp."'
           ],
           section2_title: 'Unverified Rumors:',
           section2_content: 'Similar voices heard at night, but repeating sentences said the previous day. Some describe her lingering by the railway for a long time, as if waiting for something invisible.'
        },
        status: 'Status: Investigation Ongoing'
      },
      actionRequired: 'CONFIRMATION',
      actionDesc: 'Please assist in verifying the above information.',
      addToWishlist: 'ADD TO WISHLIST',
    },
    footer: {
      tagline: 'Memories deceive, but fear does not.',
      quote: 'When you gaze long into the abyss, the abyss gazes also into you.',
      director: 'Producer',
      writer: 'Script',
      coWriter: 'Co-Writer',
      gameDesign: 'Game Design',
      artist: 'Art',
      supporter: 'Support',
      uiux: 'UI/UX',
      programmer: 'Code',
      sound: 'Sound',
      privacy: 'Privacy Policy',
      terms: 'Terms of Use',
      contact: 'Contact',
    }
  },
  'ja': {
    nav: {
      world: '世界観',
      news: '最新情報',
      gameplay: 'ゲームプレイ',
      wishlist: 'ウィッシュリスト',
    },
    preloader: {
      line1: '母は言った。月がおかしい夜は、外に出てはいけないと……',
    },
    privacy: {
      title: 'プライバシーポリシー',
      p1: '土界鎮（Tujie Town）公式サイトへようこそ。',
      p2: '本サイトはゲームの宣伝・展示を目的としています。',
      l1: 'データ収集：',
      l1_desc: '閲覧数などの匿名データのみを収集します。個人情報は収集しません。',
      l2: 'Cookieの使用：',
      l2_desc: '言語設定などのためにCookieを使用します。ブラウザ設定で無効にできます。',
      l3: '第三者リンク：',
      l3_desc: 'Steamなどの外部サイトへのリンクが含まれますが、それらのプライバシーポリシーには関与しません。',
      update: '最終更新：2026.01.01',
      understood: '理解しました',
    },
    contentWarning: {
      title: '【 コンテンツに関する警告 】',
      text: '『土界鎮』には、ホラー表現、失踪事件、民俗信仰などの要素が含まれており、不快感を与える可能性があります。\n登場する人物・設定はすべて架空のものです。ご自身の判断で閲覧してください。',
    },
    hero: {
      comingSoon: 'COMING SOON',
      description_1: '父を探すため、',
      description_2: 'あなたはサトウキビと秘密に包まれたこの町へ戻ってきた。',
      description_3: 'しかし、境界を越えたその瞬間から——',
      description_4: '何者かの声が、耳元で優しく囁いた：',
      description_punchline: '「やっと、帰ってきたね。」',
      watchTrailer: '予告編を見る',
      clickToInvestigate: '調査する',
    },
    town: {
      topSecret: 'TOP SECRET // FILE',
      worldView: '世界観',
      aboutTitle: '土界鎮について',
      aboutDesc_1: '土界鎮は、深い山霧に包まれた町だ。',
      aboutDesc_2: '三方を山に、一方を川に囲まれ、古い街並みと廃線跡が谷間に交錯している。',
      aboutDesc_3: '昼間はすべてが穏やかすぎるほどだが、',
      aboutDesc_4: '夜になると、町は別の顔を見せる。',
      aboutDesc_5: '住民は理由を語らず、ただ警告する：',
      quote: '「掟を守れ、さすれば無事だ。」',
      fig1: 'FIG. 1: THE TEA HOUSE',
      taboo: 'タブー',
      guideTitle: '町民生存ガイド',
      guideVer: 'VER. 2.0',
      rule1: 'カタツムリを見たら迂回せよ。決して傷つけてはならない。',
      rule2: '日が暮れた後は、屋外に留まってはならない。',
      rule3: '存在しないはずの駅を見たら、すぐに目を閉じろ。',
      rule4_prefix: '決して',
      rule4_highlight: '「九娘花」',
      rule4_suffix: 'を町の外へ持ち出してはならない。',
      rule4_hover: 'SHE IS WATCHING YOU',
      notReady: 'まだ、掟を守る覚悟ができていませんか？',
      pickupTicket: '切符',
      pickupTicketSub: '拾う',
    },
    news: {
      title: '最新ニュース',
      viewAll: 'VIEW ALL NEWS',
      readMore: 'クリックして詳細を見る。土界鎮の秘密が少しずつ明らかになる...',
      items: [
        { date: '2026.01.20', category: 'NEWS', title: '公式サイト公開！土界鎮への扉が開かれた。' }
      ]
    },
    gameplay: {
      title: 'コアゲームプレイ',
      pickupLabel: '拾う',
      card1: { title: '懐古探索', sub: 'EXPLORATION', desc: '土界鎮の街並み、廃糖工場、駅を探索せよ。風景や風習から隠された真実をつなぎ合わせろ。' },
      card2: { title: '看取りの力', sub: 'THE SIGHT', desc: '古物に触れ、残留した記憶の断片を読み取り、隠蔽された真実を復元せよ。' },
      card3: { title: '異界生存', sub: 'SURVIVAL', desc: '月が色を変える時、人間に擬態した「花倀（かしょう）」と対峙する。弱点を利用して生き延びろ。' },
    },
    monster: {
      title: '失踪者観察ファイル No.01 — 林晴',
      subtitle: '土界鎮に散らばる記憶の欠片を集め、事件の真相を復元し、常理では説明できない現象を追跡せよ……',
      caseId: 'CASE #001970',
      lockedOverlay: {
        topSecret: 'TOP SECRET',
        doNotOpen: 'DO NOT OPEN',
        desc: 'このファイルは封印されています。記憶の欠片をすべて集めてロックを解除してください。',
        hint: '（ヒント：手がかりはウェブサイトの至る所に隠されています。よく探してください...）',
        status: 'DECRYPTION STATUS'
      },
      file: {
        basic: {
           title: '基本データ',
           content: '13歳の少女。明るい性格で、妹思い。青い花柄のワンピースを愛用。幼少より武術を習う。'
        },
        event: {
           title: '事件概要',
           content: '夏休みの外出中、妹が一時行方不明になるが、翌日無事に発見される。同日午後、林晴が一人で████へ祈願に行ったとの目撃情報あり（記録後抹消）。深夜、窓の外の異常な猫の鳴き声を確認しに出たのが、最後の確実な目撃例となる。'
        },
        items: {
           title: '残留遺留品',
           list: [
             'ぬいぐるみ（右目の反射が異常）',
             '切符の半券（小児用、年代不明）',
             '写真の断片（子供二人の写真、裏面の文字は削り取られている）'
           ],
           note: '（以上の物品は事件周辺で頻繁に出現。出所は調査中。）'
        },
        observation: {
           title: '観察日誌（抜粋）',
           section1_title: '夜間巡回記録（抜粋）：',
           section1_content: '事件後3～21日の間、旧鉄道、廃糖工場入口、路地の影などで、対象の身長・動作と酷似したシルエットが多数観察された。',
           quotes: [
             '「彼女に似ているが、動きが記憶と少し違う。」',
             '「影が体より半拍早く頭を上げる。」',
             '「腰のあたりに子供用スタンプのようなぼやけた痕がある。」'
           ],
           section2_title: '町での未確認の噂：',
           section2_content: '夜中に彼女に似た声を聞いたという者がいるが、内容は前日に話していた言葉の繰り返しである。また、彼女が線路脇に長時間佇み、見えない何かを待っているようだという証言もある。'
        },
        status: 'ステータス：追跡継続中'
      },
      actionRequired: '行動確認',
      actionDesc: '上記情報の確認にご協力ください',
      addToWishlist: 'ウィッシュリストに追加',
    },
    footer: {
      tagline: '記憶は嘘をつくが、恐怖は嘘をつかない。',
      quote: '深淵を覗くとき、深淵もまたこちらを覗いている。',
      director: 'プロデューサー',
      writer: '脚本',
      coWriter: '共同脚本',
      gameDesign: 'ゲームデザイン',
      artist: 'アート',
      supporter: '協力',
      uiux: 'UI/UX',
      programmer: 'プログラム',
      sound: 'サウンド',
      privacy: 'プライバシーポリシー',
      terms: '利用規約',
      contact: 'お問い合わせ',
    }
  },
  'ko': {
    nav: {
      world: '세계관',
      news: '최신 소식',
      gameplay: '게임 플레이',
      wishlist: '찜하기',
    },
    preloader: {
      line1: '엄마가 말하길, 달이 이상한 밤에는 밖에 나가면 안 된대……',
    },
    privacy: {
      title: '개인정보 처리방침',
      p1: 'Tujie Town 공식 사이트에 오신 것을 환영합니다.',
      p2: '이 사이트는 게임 홍보 목적입니다.',
      l1: '데이터 수집:',
      l1_desc: '익명의 사용 데이터만 수집합니다.',
      l2: '쿠키 사용:',
      l2_desc: '언어 설정 등을 위해 쿠키를 사용합니다.',
      l3: '제3자 링크:',
      l3_desc: 'Steam 등 외부 링크의 개인정보 정책은 해당 사이트를 따릅니다.',
      update: '최종 업데이트: 2026.01.01',
      understood: '확인했습니다',
    },
    contentWarning: {
      title: '【 콘텐츠 주의 】',
      text: '《Tujie Town》은 공포 분위기, 실종 사건, 민속 신앙 등의 요소를 포함하고 있어 불쾌감을 줄 수 있습니다.\n모든 캐릭터와 설정은 허구입니다. 이용 시 주의해 주시기 바랍니다.',
    },
    hero: {
      comingSoon: 'COMING SOON',
      description_1: '아버지를 찾기 위해,',
      description_2: '당신은 사탕수수와 비밀로 둘러싸인 이 마을로 돌아왔습니다.',
      description_3: '하지만 경계를 넘은 그 순간부터——',
      description_4: '누군가의 목소리가 귓가에 부드럽게 속삭였습니다:',
      description_punchline: '「드디어 돌아왔구나.」',
      watchTrailer: '예고편 보기',
      clickToInvestigate: '조사하기',
    },
    town: {
      topSecret: 'TOP SECRET // FILE',
      worldView: '세계관',
      aboutTitle: 'Tujie Town에 대하여',
      aboutDesc_1: 'Tujie Town은 짙은 산안개에 싸인 마을입니다.',
      aboutDesc_2: '삼면이 산으로, 한 면이 강으로 둘러싸여 있으며, 옛 거리와 폐철도가 계곡에 얽혀 있습니다.',
      aboutDesc_3: '낮에는 모든 것이 지나치게 평온해 보이지만,',
      aboutDesc_4: '밤이 되면 마을은 전혀 다른 얼굴을 드러냅니다.',
      aboutDesc_5: '주민들은 이유를 설명하지 않고, 단지 경고할 뿐입니다:',
      quote: '「규칙을 지키면, 무사할 수 있다.」',
      fig1: 'FIG. 1: THE TEA HOUSE',
      taboo: '금기',
      guideTitle: '마을 생존 지침',
      guideVer: 'VER. 2.0',
      rule1: '달팽이를 보면 우회하십시오. 절대 해치지 마십시오.',
      rule2: '해가 진 후에는 야외에 머물지 마십시오.',
      rule3: '존재하지 않는 역을 보면 즉시 눈을 감으십시오.',
      rule4_prefix: '절대로',
      rule4_highlight: '「구낭화」',
      rule4_suffix: '를 마을 밖으로 가져가지 마십시오.',
      rule4_hover: 'SHE IS WATCHING YOU',
      notReady: '아직 규칙을 지킬 준비가 되지 않았습니까?',
      pickupTicket: '승차권',
      pickupTicketSub: '줍기',
    },
    news: {
      title: '최신 뉴스',
      viewAll: 'VIEW ALL NEWS',
      readMore: '클릭하여 자세한 내용을 확인하세요. 마을의 비밀이 서서히 밝혀집니다...',
      items: [
        { date: '2026.01.20', category: 'NEWS', title: '공식 사이트 오픈! Tujie Town의 문이 열렸습니다.' }
      ]
    },
    gameplay: {
      title: '핵심 플레이',
      pickupLabel: '줍기',
      card1: { title: '향수 탐색', sub: 'EXPLORATION', desc: '마을의 거리, 폐당 공장, 역을 탐험하세요. 풍경과 풍습에서 숨겨진 진실을 조각 맞추십시오.' },
      card2: { title: '관찰 능력', sub: 'THE SIGHT', desc: '낡은 물건을 만져 잔류 기억 조각을 읽고, 덮여진 진실을 복원하십시오.' },
      card3: { title: '이계 생존', sub: 'SURVIVAL', desc: '달이 색을 바꿀 때, 인간으로 의태한 「화창」과 맞서십시오. 약점을 이용해 생존하십시오.' },
    },
    monster: {
      title: '실종자 관찰 파일 No.01 — 린칭',
      subtitle: '마을에 흩어진 기억 조각을 모아 사건의 진상을 복원하고, 상식으로 설명할 수 없는 현상을 추적하십시오……',
      caseId: 'CASE #001970',
      lockedOverlay: {
        topSecret: 'TOP SECRET',
        doNotOpen: 'DO NOT OPEN',
        desc: '이 파일은 봉인되었습니다. 모든 기억 조각을 찾아 내용을 잠금 해제하십시오.',
        hint: '(힌트: 단서는 웹사이트 곳곳에 숨겨져 있습니다. 자세히 찾아보세요...)',
        status: 'DECRYPTION STATUS'
      },
      file: {
        basic: {
           title: '기본 정보',
           content: '13세 소녀. 밝은 성격, 여동생을 아낌. 파란색 꽃무늬 원피스 즐겨 입음. 어릴 때부터 무술을 배움.'
        },
        event: {
           title: '사건 개요',
           content: '여름방학 외출 중 여동생이 일시 실종되었으나 다음 날 무사히 발견됨. 같은 날 오후, 린칭이 혼자 ████에 기원하러 갔다는 목격 정보 있음(기록 후 말소됨). 심야, 창밖의 이상한 고양이 울음소리를 확인하러 나간 것이 마지막 확실한 목격임.'
        },
        items: {
           title: '잔류 유류품',
           list: [
             '인형 (오른쪽 눈 반사가 이상함)',
             '표 조각 (아동용, 연도 불명)',
             '사진 조각 (아이 두 명의 사진, 뒷면 글씨는 긁혀 있음)'
           ],
           note: '(이상 물건은 사건 주변에서 자주 출현. 출처 조사 중.)'
        },
        observation: {
           title: '관찰 일지 (발췌)',
           section1_title: '야간 순찰 기록 (발췌):',
           section1_content: '사건 후 3~21일 동안, 구 철도, 폐당 공장 입구 및 골목 그림자 등에서 대상의 키, 동작과 흡사한 실루엣이 다수 관찰됨.',
           quotes: [
             '「그녀와 비슷하지만, 움직임이 기억과 조금 다르다.」',
             '「그림자가 몸보다 반 박자 빨리 고개를 든다.」',
             '「허리 쪽에 아동용 도장 같은 흐릿한 자국이 있다.」'
           ],
           section2_title: '마을의 미확인 소문:',
           section2_content: '밤중에 그녀와 비슷한 목소리를 들었다는 사람이 있지만, 내용은 전날 했던 말의 반복임. 또한 그녀가 철로 변에 오랫동안 서서 보이지 않는 무언가를 기다리는 것 같다는 묘사도 있음.'
        },
        status: '상태: 추적 계속 중'
      },
      actionRequired: '행동 확인',
      actionDesc: '위 정보 확인에 협조 부탁드립니다',
      addToWishlist: '찜하기 추가',
    },
    footer: {
      tagline: '기억은 거짓말을 하지만, 공포는 거짓말을 하지 않는다.',
      quote: '그대가 심연을 들여다볼 때, 심연 또한 그대를 들여다본다.',
      director: '프로듀서',
      writer: '각본',
      coWriter: '공동 각본',
      gameDesign: '게임 디자인',
      artist: '아트',
      supporter: '협력',
      uiux: 'UI/UX',
      programmer: '프로그램',
      sound: '사운드',
      privacy: '개인정보 처리방침',
      terms: '이용 약관',
      contact: '문의하기',
    }
  },
};
