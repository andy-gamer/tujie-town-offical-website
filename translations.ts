
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
      comingSoon: '2026 COMING SOON',
      description_1: '為了尋找父親，',
      description_2: '你回到了這座充滿秘密的繁華小鎮。',
      description_3: '踏進小鎮的那一刻，你聽見一個聲音，',
      description_4: '有些輕柔，有些高興，他說——',
      description_punchline: '「你終於回來了。」',
      watchTrailer: '觀看概念影片',
      clickToInvestigate: '點擊調查',
    },
    town: {
      topSecret: 'TOP SECRET // 檔案',
      worldView: '世界觀',
      aboutTitle: '關於土界鎮',
      aboutDesc_1: '土界鎮是一座與世隔絕的繁華小鎮。',
      aboutDesc_2: '三面環山，一面臨河，被山霧包裹的谷地中，交錯著老街與廢棄鐵道。',
      aboutDesc_3: '白天一切如常，',
      aboutDesc_4: '到了夜晚，整個小鎮瞬間變了模樣。',
      aboutDesc_5: '面對外地人，鎮民從不解釋，只會提醒：',
      quote: '「守規矩，保平安。」',
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
      card1: { title: '懷舊探索', sub: 'EXPLORATION', desc: '穿梭於台灣舊街景，在廢棄糖廠、老車站及巷弄間進行探索。' },
      card2: { title: '看取能力', sub: 'THE SIGHT', desc: '觸摸舊物讀取殘留的記憶碎片，還原被掩蓋的真相。' },
      card3: { title: '異界生存', sub: 'SURVIVAL', desc: '當月亮變色，在擬態成人類的「花倀」追殺下，利用花倀弱點以求生。' },
    },
    monster: {
      title: '失蹤者觀察檔案 No.01 — 林晴',
      subtitle: '蒐集散落在土界鎮的記憶碎片，揭開那些被遺忘的異界生物真面目……',
      caseId: 'CASE #001970',
      lockedOverlay: {
        topSecret: 'TOP SECRET',
        doNotOpen: 'DO NOT OPEN',
        desc: '此檔案目前處於封存狀態。',
        hint: '解鎖功能將於未來開放。\n欲知案件的最新情報，請密切追蹤官方社群。',
        status: 'ARCHIVED'
      },
      file: {
        basic: {
           title: '基本資料',
           content: '13 歲少女，開朗活潑，疼愛妹妹。常穿藍色碎花洋裝，自幼習武。'
        },
        items: {
          title: '疑似殘留物品',
          list: [
            '布偶（右眼表面反光異常）',
            '兒童票根（年份不明）',
            '相片碎片（兩名孩童合照，背後字跡遭刮除）'
          ],
          note: '（以上物件多次出現在事件周邊，來源待查。）'
        },
        event: {
          title: '事件摘要',
          content: '妹妹於暑假時走失，當日下午，有目擊者指出林晴曾獨自前往 ████ 祈願（紀錄後遭塗銷），妹妹於隔日順利尋回。尋回當夜，她因窗外異常的貓叫聲外出查看——這是最後一次確切目擊資訊。'
        },
        observation: {
          title: '觀察日誌（節錄）',
          intro: '夜間巡查紀錄：\n事件後第 3～21 日間，多次在舊鐵道、廢糖廠入口及巷弄陰影中，觀察到與主體身高、動作相似的身影。',
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
      desc: '“白日凡人，夜裡追夢人。\n一群朝九晚五的上班族，源於對遊戲的熱愛，從玩家轉為開發者，期盼能做出引發共鳴的作品。”',
      credits: {
        col1: 'Production & Narrative',
        col2: 'Design & Art',
        col3: 'Tech & Audio',
        roles: {
          director: '發起人 Game Director',
          writer: '主編 Writer',
          coWriter: '協力編劇 Co-Writer',
          marketing: '行銷/發布 Marketing', // New Role
          gameDesign: '遊戲設計 Game Design',
          artist: '美術設計 Artist',
          supporter: '美術支援 Supporter',
          uiux: 'UI/UX',
          programmer: '程式 Programmer',
          techSupporter: '技術支援 Supporter',
          sound: '音樂及音效 Music/Sound'
        },
        names: { // New section for structured names if needed, but keeping inline for now
            marketing: '安迪、芝芝、小黑'
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
      comingSoon: '2026 COMING SOON',
      description_1: '为了寻找父亲，',
      description_2: '你回到了这座充满秘密的繁华小镇。',
      description_3: '踏进小镇的那一刻，你听见一个声音，',
      description_4: '有些轻柔，有些高兴，他说——',
      description_punchline: '“你终于回来了。”',
      watchTrailer: '观看概念视频',
      clickToInvestigate: '点击调查',
    },
    town: {
      topSecret: 'TOP SECRET // 档案',
      worldView: '世界观',
      aboutTitle: '关于土界镇',
      aboutDesc_1: '土界镇是一座与世隔绝的繁华小镇。',
      aboutDesc_2: '三面环山，一面临河，被山雾包裹的谷地中，交错着老街与废弃铁道。',
      aboutDesc_3: '白天一切如常，',
      aboutDesc_4: '到了夜晚，整个小镇瞬间变了模样。',
      aboutDesc_5: '面对外地人，镇民从不解释，只会提醒：',
      quote: '“守规矩，保平安。”',
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
      card1: { title: '怀旧探索', sub: 'EXPLORATION', desc: '穿梭于台湾旧街景，在废弃糖厂、老车站及巷弄间进行探索。' },
      card2: { title: '看取能力', sub: 'THE SIGHT', desc: '触摸旧物读取残留的记忆碎片，还原被掩盖的真相。' },
      card3: { title: '异界生存', sub: 'SURVIVAL', desc: '当月亮变色，在拟态成人类的“花伥”追杀下，利用花伥弱点以求生。' },
    },
    monster: {
      title: '失踪者观察档案 No.01 — 林晴',
      subtitle: '搜集散落在土界镇的记忆碎片，揭开那些被遗忘的异界生物真面目……',
      caseId: 'CASE #001970',
      lockedOverlay: {
        topSecret: 'TOP SECRET',
        doNotOpen: 'DO NOT OPEN',
        desc: '此档案目前处于封存状态。',
        hint: '解锁功能将于未来开放。\n欲知案件的最新情报，请密切追踪官方社群。',
        status: 'ARCHIVED'
      },
      file: {
        basic: {
           title: '基本资料',
           content: '13 岁少女，开朗活泼，疼爱妹妹。常穿蓝色碎花洋装，自幼習武。'
        },
        items: {
          title: '疑似残留物品',
          list: [
            '布偶（右眼表面反光异常）',
            '儿童票根（年份不明）',
            '相片碎片（两名孩童合照，背后字迹遭刮除）'
          ],
          note: '（以上物件多次出现在事件周边，来源待查。）'
        },
        event: {
          title: '事件摘要',
          content: '妹妹于暑假时走失，当日下午，有目击者指出林晴曾独自前往 ████ 祈愿（纪录后遭涂销），妹妹于隔日顺利寻回。寻回当夜，她因窗外异常的猫叫声外出查看——这是最后一次确切目击资讯。'
        },
        observation: {
          title: '观察日誌（节录）',
          intro: '夜间巡查纪录：\n事件后第 3～21 日间，多次在旧铁道、废糖厂入口及巷弄阴影中，观察到与主体身高、动作相似的身影。',
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
      desc: '“白日凡人，夜里追梦人。\n一群朝九晚五的上班族，源于对游戏的热爱，从玩家转为开发者，期盼能做出引发共鸣的作品。”',
      credits: {
        col1: 'Production & Narrative',
        col2: 'Design & Art',
        col3: 'Tech & Audio',
        roles: {
          director: '发起人 Game Director',
          writer: '主编 Writer',
          coWriter: '协力编剧 Co-Writer',
          marketing: '行销/发布 Marketing',
          gameDesign: '游戏设计 Game Design',
          artist: '美术设计 Artist',
          supporter: '美术支援 Supporter',
          uiux: 'UI/UX',
          programmer: '程式 Programmer',
          techSupporter: '技术支援 Supporter',
          sound: '音乐及音效 Music/Sound'
        },
        names: {
            marketing: '安迪、芝芝、小黑'
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
      comingSoon: '2026 COMING SOON',
      description_1: 'To find your father,',
      description_2: 'You returned to this isolated, prosperous town full of secrets.',
      description_3: 'The moment you stepped into town, you heard a voice,',
      description_4: 'Soft and somewhat joyous, it said—',
      description_punchline: '"You have finally returned."',
      watchTrailer: 'WATCH TRAILER',
      clickToInvestigate: 'INVESTIGATE',
    },
    town: {
      topSecret: 'TOP SECRET // FILE',
      worldView: 'THE WORLD',
      aboutTitle: 'ABOUT TUJIE TOWN',
      aboutDesc_1: 'Tujie Town is an isolated, prosperous town.',
      aboutDesc_2: 'Surrounded by mountains on three sides and a river on one. Fog-shrouded valleys intertwine with old streets and abandoned railways.',
      aboutDesc_3: 'By day, everything is normal;',
      aboutDesc_4: 'But at night, the entire town instantly transforms.',
      aboutDesc_5: 'To outsiders, the locals never explain, they only warn:',
      quote: '"Follow the rules, stay safe."',
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
      card1: { title: 'EXPLORATION', sub: 'NOSTALGIA', desc: 'Wander through old Taiwanese streetscapes, exploring abandoned sugar factories, old stations, and alleyways.' },
      card2: { title: 'THE SIGHT', sub: 'PSYCHOMETRY', desc: 'Touch old objects to read residual memory fragments and reconstruct the concealed truth.' },
      card3: { title: 'SURVIVAL', sub: 'MIMICRY', desc: 'When the moon changes color, survive the hunt of "Flower Thralls" mimicking humans by exploiting their weaknesses.' },
    },
    monster: {
      title: 'Missing Person File No.01 — Lin Ching',
      subtitle: 'Collect memory fragments scattered across Tujie Town to reveal the true nature of forgotten otherworldly creatures...',
      caseId: 'CASE #001970',
      lockedOverlay: {
        topSecret: 'TOP SECRET',
        doNotOpen: 'DO NOT OPEN',
        desc: 'This file is currently archived.',
        hint: 'Unlock functionality will be available in the future.\nFollow our official social media for the latest case updates.',
        status: 'ARCHIVED'
      },
      file: {
        basic: {
           title: 'BASIC INFO',
           content: '13-year-old girl. Cheerful and lively, loves her younger sister. Often wears a blue floral dress. Trained in martial arts since childhood.'
        },
        items: {
          title: 'RESIDUAL ITEMS',
          list: [
            'Stuffed Doll (Right eye has abnormal reflection)',
            'Child Ticket Stub (Year unknown)',
            'Photo Fragment (Two children, writing on back scraped off)'
          ],
          note: '(These items appear frequently near event locations. Origin unknown.)'
        },
        event: {
          title: 'EVENT SUMMARY',
          content: 'Her sister went missing during summer vacation. That afternoon, witnesses saw Lin Ching praying alone at ████ (record redacted). The sister was found safe the next day. That night, Lin Ching went out to investigate strange cat noises—this was the last confirmed sighting.'
        },
        observation: {
          title: 'OBSERVATION LOG (Excerpt)',
          intro: 'Night Patrol Record:\nBetween days 3-21 after the event, a silhouette matching the subject\'s height and movement was observed multiple times near the old railway, sugar factory entrance, and alley shadows.',
          quotes: [
            '"Looks like her, but moves differently from memory."',
            '"The shadow lifts its head half a beat earlier than the body."',
            '"There\'s a blurred mark on the waist like a child\'s rubber stamp."'
          ],
          rumors_title: 'Unverified Rumors:',
          rumors_content: 'Some heard a voice similar to hers at night, but it only repeated sentences said the previous day. Others described her lingering by the railway, as if waiting for something unseen.'
        },
        status: 'STATUS: UNDER INVESTIGATION'
      },
      actionRequired: 'ACTION REQUIRED',
      actionDesc: 'PLEASE VERIFY THE ABOVE INFORMATION',
      addToWishlist: 'ADD TO WISHLIST',
    },
    footer: {
      studio: 'OrzienGames',
      tagline: 'From Origin, With Heart.',
      desc: '"Daytime mortals, nighttime dreamers.\nA group of office workers, driven by love for games, turning from players into developers, hoping to create works that resonate."',
      credits: {
        col1: 'Production & Narrative',
        col2: 'Design & Art',
        col3: 'Tech & Audio',
        roles: {
          director: 'Game Director',
          writer: 'Writer',
          coWriter: 'Co-Writer',
          marketing: 'Marketing / Publishing',
          gameDesign: 'Game Design',
          artist: 'Artist',
          supporter: 'Supporter',
          uiux: 'UI/UX',
          programmer: 'Programmer',
          techSupporter: 'Tech Support',
          sound: 'Music/Sound'
        },
        names: {
            marketing: 'Andy, Chichi, Xiaohei'
        }
      },
      privacy: 'PRIVACY POLICY',
      contact: 'CONTACT US'
    }
  },
  'ja': {
    nav: {
      world: '世界観',
      news: '最新情報',
      gameplay: 'ゲームシステム',
      wishlist: 'ウィッシュリスト',
    },
    preloader: {
      line1: '母さんは言った。月がおかしい夜は、決して外に出てはいけないと……',
    },
    privacy: {
      title: 'プライバシーポリシー',
      p1: '土界鎮（Tujie Town）公式サイトへようこそ。私たちはあなたのプライバシーを重視しています。',
      p2: '本サイトは主にゲームの宣伝と展示を目的としています。関連するプライバシー法規を遵守することをお約束します。',
      l1: 'データ収集：',
      l1_desc: '本サイトは必要な匿名の利用データ（閲覧数など）のみを収集し、個人を特定できる情報は収集しません。',
      l2: 'Cookieの使用：',
      l2_desc: '閲覧体験を最適化するためにCookieを使用しています（言語設定の記憶など）。ブラウザの設定でいつでも無効にできます。',
      l3: '第三者リンク：',
      l3_desc: '本サイトには外部サイト（Steamなど）へのリンクが含まれています。これらのサイトのプライバシーポリシーは私たちとは無関係です。',
      update: '最終更新日：2026.01.01',
      understood: '理解しました',
    },
    contentWarning: {
      title: '【 コンテンツ警告 】',
      text: '『土界鎮』には、ホラー、失踪事件、民間伝承などの要素が含まれており、不快感を与える可能性があります。\nすべてのキャラクターと設定は架空のものです。ご自身の判断で体験してください。',
    },
    hero: {
      comingSoon: '2026 COMING SOON',
      description_1: '父を探すため、',
      description_2: 'あなたは秘密に満ちたこの繁栄した町に戻ってきた。',
      description_3: '町に足を踏み入れたその瞬間、声が聞こえた。',
      description_4: '少し優しく、少し嬉しそうに、彼は言った——',
      description_punchline: '「やっと、帰ってきたね。」',
      watchTrailer: '予告編を見る',
      clickToInvestigate: '調査する',
    },
    town: {
      topSecret: 'TOP SECRET // FILE',
      worldView: '世界観',
      aboutTitle: '土界鎮について',
      aboutDesc_1: '土界鎮は世間から隔絶された繁栄した町だ。',
      aboutDesc_2: '三方を山に、一方を川に囲まれ、霧に包まれた谷間には古い街並みと廃線跡が交錯している。',
      aboutDesc_3: '昼間はすべてが正常だ。',
      aboutDesc_4: 'しかし夜になると、町は瞬時にしてその姿を変える。',
      aboutDesc_5: '住民は余所者に説明せず、ただ警告する：',
      quote: '「ルールを守れば、無事でいられる。」',
      fig1: 'FIG. 1: THE TEA HOUSE',
      taboo: '禁忌',
      guideTitle: '住民生存ガイド',
      guideVer: 'VER. 2.0',
      rule1: 'カタツムリを見かけたら、傷つけずに避けて通ること。',
      rule2: '日が沈んだ後は、屋外に留まらないこと。',
      rule3: '存在しないはずの駅を見たら、すぐに目を閉じること。',
      rule4_prefix: '絶対に',
      rule4_highlight: '「九姑娘花」',
      rule4_suffix: 'を町の外に持ち出さないこと。',
      rule4_hover: 'SHE IS WATCHING YOU',
      notReady: 'まだルールを守る準備ができていませんか？',
      pickupTicket: '切符',
      pickupTicketSub: '拾う',
    },
    news: {
      title: '最新情報',
      readMore: 'クリックして詳細を読む。土界鎮の秘密が徐々に明らかになっていく...',
      items: [
        { date: '2026.01.20', category: 'NEWS', title: '公式サイト正式オープン！ウィッシュリスト登録受付中' }
      ]
    },
    gameplay: {
      title: 'ゲームシステム',
      pickupLabel: '拾う',
      card1: { title: '懐古探索', sub: 'EXPLORATION', desc: '台湾の古い街並みを往来し、廃糖工場、古い駅、路地裏を探索せよ。' },
      card2: { title: '看取能力', sub: 'THE SIGHT', desc: '古い物に触れ、残留した記憶の断片を読み取り、隠蔽された真実を復元せよ。' },
      card3: { title: '異界生存', sub: 'SURVIVAL', desc: '月が変色する時、人間に擬態した「花倀（かしょう）」の追跡から、彼らの弱点を利用して生き延びろ。' },
    },
    monster: {
      title: '失踪者観察ファイル No.01 — 林晴（リン・チン）',
      subtitle: '土界鎮に散らばる記憶の欠片を集め、忘れ去られた異界の生物の正体を暴け……',
      caseId: 'CASE #001970',
      lockedOverlay: {
        topSecret: 'TOP SECRET',
        doNotOpen: 'DO NOT OPEN',
        desc: 'このファイルは現在アーカイブされています。',
        hint: 'ロック解除機能は将来的に公開される予定です。\n最新情報については、公式SNSをフォローしてください。',
        status: 'ARCHIVED'
      },
      file: {
        basic: {
           title: '基本データ',
           content: '13歳の少女。明るく活発で、妹思い。青い花柄のワンピースを好んで着る。幼い頃から武術を学んでいた。'
        },
        items: {
          title: '残留物と思われる物品',
          list: [
            'ぬいぐるみ（右目の表面反射に異常あり）',
            '子供用切符の半券（発行年不明）',
            '写真の破片（子供二人の集合写真、裏面の文字は削り取られている）'
          ],
          note: '（以上の物品は事件現場周辺で頻繁に出現。出所は調査中）'
        },
        event: {
          title: '事件概要',
          content: '夏休みに妹が行方不明になった。同日午後、林晴が単独で████へ祈願に行ったという目撃証言がある（記録後に抹消済み）。妹は翌日無事に発見された。発見当夜、林晴は窓の外からの異常な猫の鳴き声を確認するために外出した——これが確実な最後の目撃情報である。'
        },
        observation: {
          title: '観察日誌（抜粋）',
          intro: '夜間巡回記録：\n事件発生後3日目から21日目の間、旧鉄道、廃糖工場入口、路地の影などで、対象の身長や動作に酷似した人影が多数観測された。',
          quotes: [
            '「彼女に似ているが、動きが記憶と少し違う。」',
            '「影が頭を上げるタイミングが、体より半拍早い。」',
            '「腰のあたりに、子供用のゴム印のようなぼやけた痕跡がある。」'
          ],
          rumors_title: '町には未確認の噂もある：',
          rumors_content: '夜中に彼女に似た声を聞いたという者がいるが、その内容は前日に話していた言葉の繰り返しだった。また、誰か見えないものを待っているかのように、線路脇に長時間佇んでいる姿も目撃されている。'
        },
        status: 'ステータス：追跡調査中'
      },
      actionRequired: '行動確認',
      actionDesc: '上記情報の確認をお願いします',
      addToWishlist: 'ウィッシュリストに追加',
    },
    footer: {
      studio: 'OrzienGames',
      tagline: '「源」より始まり、稚心を注ぐ。',
      desc: '“昼は凡人、夜は夢追い人。\nゲームへの愛を源に、プレイヤーから開発者へと変わったサラリーマンたちが、共鳴できる作品作りを目指しています。”',
      credits: {
        col1: 'Production & Narrative',
        col2: 'Design & Art',
        col3: 'Tech & Audio',
        roles: {
          director: '発起人 Game Director',
          writer: 'メインライター Writer',
          coWriter: '協力ライター Co-Writer',
          marketing: 'マーケティング / パブリッシング',
          gameDesign: 'ゲームデザイン Game Design',
          artist: 'アートデザイン Artist',
          supporter: 'アートサポート Supporter',
          uiux: 'UI/UX',
          programmer: 'プログラマー Programmer',
          techSupporter: '技術サポート Tech Support',
          sound: '音楽・SE Music/Sound'
        },
        names: {
            marketing: 'Andy, Chichi, Kuro'
        }
      },
      privacy: 'プライバシーポリシー',
      contact: 'お問い合わせ'
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
      line1: '엄마는 말씀하셨지, 달이 이상한 밤에는 절대 밖으로 나가지 말라고……',
    },
    privacy: {
      title: '개인정보 처리방침',
      p1: '투계진(Tujie Town) 공식 사이트에 오신 것을 환영합니다. 저희는 귀하의 개인정보를 중요하게 생각합니다.',
      p2: '이 사이트는 게임 홍보 및 전시 목적으로 운영되며, 관련 개인정보 보호 법규를 준수합니다.',
      l1: '데이터 수집:',
      l1_desc: '본 사이트는 필수적인 익명 사용 데이터(방문 수 등)만 수집하며, 개인을 식별할 수 있는 정보는 수집하지 않습니다.',
      l2: '쿠키 사용:',
      l2_desc: '사용자 경험 최적화를 위해 쿠키를 사용합니다(언어 설정 저장 등). 브라우저 설정에서 언제든지 비활성화할 수 있습니다.',
      l3: '제3자 링크:',
      l3_desc: '본 사이트에는 외부 사이트(Steam 등)로 연결되는 링크가 포함되어 있으며, 해당 사이트의 개인정보 보호 정책은 저희와 무관합니다.',
      update: '최종 업데이트: 2026.01.01',
      understood: '확인했습니다',
    },
    contentWarning: {
      title: '【 콘텐츠 경고 】',
      text: '《투계진》에는 공포 분위기, 실종 사건, 민속 신앙 등의 요소가 포함되어 있어 불쾌감을 줄 수 있습니다.\n모든 등장인물과 설정은 허구입니다. 개인의 판단에 따라 이용해 주시기 바랍니다.',
    },
    hero: {
      comingSoon: '2026 COMING SOON',
      description_1: '아버지를 찾기 위해,',
      description_2: '당신은 비밀이 가득한 이 번화한 마을로 돌아왔습니다.',
      description_3: '마을에 들어선 그 순간, 누군가의 목소리가 들렸습니다.',
      description_4: '조금 부드럽고, 조금 기쁜 듯한 목소리로 그는 말했습니다——',
      description_punchline: '“드디어, 돌아왔구나.”',
      watchTrailer: '트레일러 보기',
      clickToInvestigate: '조사하기',
    },
    town: {
      topSecret: 'TOP SECRET // FILE',
      worldView: '세계관',
      aboutTitle: '투계진에 대하여',
      aboutDesc_1: '투계진은 세상과 단절된 번화한 마을입니다.',
      aboutDesc_2: '삼면이 산이고 한쪽은 강이며, 산안개에 싸인 골짜기에는 옛 거리와 폐철도가 교차합니다.',
      aboutDesc_3: '낮에는 모든 것이 평범합니다;',
      aboutDesc_4: '하지만 밤이 되면, 마을은 순식간에 다른 모습으로 변합니다.',
      aboutDesc_5: '주민들은 외지인에게 설명하지 않고, 단지 경고할 뿐입니다:',
      quote: '“규칙을 지키면, 무사할 수 있어.”',
      fig1: 'FIG. 1: THE TEA HOUSE',
      taboo: '금기',
      guideTitle: '주민 생존 가이드',
      guideVer: 'VER. 2.0',
      rule1: '달팽이를 보면 해치지 말고 피해 가십시오.',
      rule2: '해가 진 후에는 야외에 머물지 마십시오.',
      rule3: '존재하지 않는 역을 보면 즉시 눈을 감으십시오.',
      rule4_prefix: '절대로',
      rule4_highlight: '“구고낭화(九姑娘花)”',
      rule4_suffix: '를 마을 밖으로 가져가지 마십시오.',
      rule4_hover: 'SHE IS WATCHING YOU',
      notReady: '아직 규칙을 따를 준비가 안 되셨나요?',
      pickupTicket: '승차권',
      pickupTicketSub: '줍기',
    },
    news: {
      title: '최신 소식',
      readMore: '클릭하여 자세한 내용을 확인하세요. 투계진의 비밀이 서서히 드러납니다...',
      items: [
        { date: '2026.01.20', category: 'NEWS', title: '공식 사이트 오픈! 찜하기 목록 추가 가능' }
      ]
    },
    gameplay: {
      title: '게임 플레이',
      pickupLabel: '줍기',
      card1: { title: '추억 탐색', sub: 'EXPLORATION', desc: '대만의 옛 거리를 누비며, 폐당 공장, 오래된 역, 골목 사이를 탐색하십시오.' },
      card2: { title: '사이코메트리', sub: 'THE SIGHT', desc: '오래된 물건을 만져 잔류 기억의 조각을 읽어내고, 은폐된 진실을 복원하십시오.' },
      card3: { title: '이계 생존', sub: 'SURVIVAL', desc: '달이 변색될 때, 인간으로 의태한 ‘화창(花倀)’의 추격을 피해 그들의 약점을 이용해 살아남아야 합니다.' },
    },
    monster: {
      title: '실종자 관찰 파일 No.01 — 임청(Lin Ching)',
      subtitle: '투계진에 흩어진 기억의 조각을 모아, 잊혀진 이계 생물의 정체를 밝혀내십시오……',
      caseId: 'CASE #001970',
      lockedOverlay: {
        topSecret: 'TOP SECRET',
        doNotOpen: 'DO NOT OPEN',
        desc: '이 파일은 현재 보관된 상태입니다.',
        hint: '잠금 해제 기능은 추후 공개될 예정입니다.\n최신 정보는 공식 소셜 미디어를 확인해 주세요.',
        status: 'ARCHIVED'
      },
      file: {
        basic: {
           title: '기본 정보',
           content: '13세 소녀. 밝고 활발하며 여동생을 아낌. 파란색 꽃무늬 원피스를 즐겨 입음. 어릴 적부터 무술을 배움.'
        },
        items: {
          title: '잔류 추정 물품',
          list: [
            '인형 (오른쪽 눈 표면 반사 이상)',
            '아동용 승차권 (연도 불명)',
            '사진 조각 (아이 두 명의 단체 사진, 뒷면 글씨 긁혀 있음)'
          ],
          note: '(위 물품들은 사건 현장 주변에서 빈번히 출현. 출처 조사 중)'
        },
        event: {
          title: '사건 개요',
          content: '여름방학 때 여동생이 실종됨. 당일 오후, 임청이 홀로 ████에 가서 기도를 올렸다는 목격담이 있음(기록 후 말소됨). 여동생은 다음 날 무사히 발견됨. 발견 당일 밤, 임청은 창밖의 이상한 고양이 울음소리를 확인하러 나감——이것이 마지막으로 확인된 목격 정보임.'
        },
        observation: {
          title: '관찰 일지 (발췌)',
          intro: '야간 순찰 기록:\n사건 발생 3~21일 사이, 구 철도, 폐당 공장 입구 및 골목 그림자 등에서 대상의 신장, 동작과 흡사한 실루엣이 다수 관측됨.',
          quotes: [
            '“그 아이 같지만, 움직임이 기억과 조금 다르다.”',
            '“그림자가 머리를 드는 타이밍이 몸보다 반 박자 빠르다.”',
            '“허리 쪽에 어린이용 고무 도장 같은 흐릿한 자국이 있다.”'
          ],
          rumors_title: '마을에 확인되지 않은 소문도 있음:',
          rumors_content: '밤에 그 아이와 비슷한 목소리를 들었다는 사람이 있지만, 내용은 전날 했던 말의 반복이었다. 또한 누군가 보이지 않는 것을 기다리는 듯 철길 옆에 오랫동안 서 있는 모습도 목격되었다.'
        },
        status: '상태: 추적 조사 중'
      },
      actionRequired: '행동 확인',
      actionDesc: '위 정보의 확인을 부탁드립니다',
      addToWishlist: '찜하기 추가',
    },
    footer: {
      studio: 'OrzienGames',
      tagline: '「근원」에서 시작해, 동심을 쏟다.',
      desc: '“낮에는 평범한 직장인, 밤에는 꿈을 쫓는 사람들.\n게임에 대한 열정을 근원으로, 플레이어에서 개발자로 변신한 직장인들이 공감할 수 있는 작품을 만들고자 합니다.”',
      credits: {
        col1: 'Production & Narrative',
        col2: 'Design & Art',
        col3: 'Tech & Audio',
        roles: {
          director: '발기인 Game Director',
          writer: '메인 작가 Writer',
          coWriter: '협력 작가 Co-Writer',
          marketing: '마케팅 / 퍼블리싱',
          gameDesign: '게임 기획 Game Design',
          artist: '아트 디자인 Artist',
          supporter: '아트 지원 Supporter',
          uiux: 'UI/UX',
          programmer: '프로그래머 Programmer',
          techSupporter: '기술 지원 Tech Support',
          sound: '음악/효과음 Music/Sound'
        },
        names: {
            marketing: 'Andy, Chichi, Little Black'
        }
      },
      privacy: '개인정보 처리방침',
      contact: '문의하기'
    }
  },
};
