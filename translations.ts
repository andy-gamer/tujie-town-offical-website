
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
      viewAll: 'VIEW ALL NEWS',
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
           content: '13 岁少女，个性开朗，疼爱妹妹。常穿蓝色碎花洋装，自幼习武。'
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
      viewAll: 'VIEW ALL NEWS',
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
        basic: {
           title: 'BASIC INFO',
           content: '13-year-old girl. Cheerful personality, devoted to her sister. Often wears a blue floral dress. Practiced martial arts from a young age.'
        },
        items: {
          title: 'RESIDUAL OBJECTS',
          list: [
            'Doll (Abnormal reflection in right eye)',
            'Ticket Stub (Child type, year unknown)',
            'Photo Fragment (Two children, handwriting on back scraped off)'
          ],
          note: '(These items frequently appear near the incident site. Origin unknown.)'
        },
        event: {
          title: 'INCIDENT SUMMARY',
          content: 'Target\'s sister got lost during summer vacation but was found safe the next day. The same afternoon, Lin Ching reportedly went alone to ████ to pray (record redacted). Late that night, she went out to investigate an abnormal cat meowing outside—this was the last confirmed sighting.'
        },
        observation: {
          title: 'OBSERVATION LOG (EXCERPT)',
          intro: 'Night Patrol Records (Excerpt):\nBetween days 3-21 after the event, a silhouette matching the subject\'s height and movement was repeatedly observed at the old railway, sugar factory entrance, and alley shadows.',
          quotes: [
            '"Looks like her, but the movement differs from memory."',
            '"The shadow lifts its head a half-beat earlier than the body."',
            '"There is a blurry mark resembling a child\'s rubber stamp on the waist."'
          ],
          rumors_title: 'Unverified Town Rumors:',
          rumors_content: 'A voice similar to hers has been heard at night, but it only repeats sentences spoken the previous day. Others describe seeing her standing by the railway for long periods, as if waiting for something invisible.'
        },
        status: 'STATUS: UNDER INVESTIGATION'
      },
      actionRequired: 'ACTION CHECK',
      actionDesc: 'Please verify the above information.',
      addToWishlist: 'Add to Wishlist',
    },
    footer: {
      studio: 'OrzienGames',
      tagline: 'Starting from the source, creating with a pure heart.',
      desc: '"Daytime mortals, nighttime dreamers.\nA group of 9-to-5 office workers, born from a love of games, transforming from players to developers, hoping to create works that resonate."',
      credits: {
        col1: 'Production & Narrative',
        col2: 'Design & Art',
        col3: 'Tech & Audio',
        roles: {
          director: 'Game Director',
          writer: 'Writer',
          coWriter: 'Co-Writer',
          gameDesign: 'Game Design',
          artist: 'Artist',
          supporter: 'Supporter',
          uiux: 'UI/UX',
          programmer: 'Programmer',
          techSupporter: 'Tech Supporter',
          sound: 'Music/Sound'
        }
      },
      privacy: 'Privacy Policy',
      contact: 'Contact Us'
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
      line1: '母さんは言った。月がおかしい夜は、外に出てはいけないと……',
    },
    privacy: {
      title: 'プライバシーポリシー',
      p1: '土界鎮（Tujie Town）公式サイトへようこそ。',
      p2: '本サイトはゲームの宣伝を目的としています。個人情報の保護には最大限の注意を払っています。',
      l1: 'データ収集：',
      l1_desc: '閲覧数などの匿名データのみを収集し、個人情報は保存しません。',
      l2: 'Cookie：',
      l2_desc: '言語設定の保存などにCookieを使用しています。ブラウザ設定で無効化可能です。',
      l3: '外部リンク：',
      l3_desc: 'Steamなどの外部サイトのプライバシーポリシーは、各サイトの規定に従います。',
      update: '最終更新日：2026.01.01',
      understood: '確認しました',
    },
    contentWarning: {
      title: '【 コンテンツ警告 】',
      text: '『土界鎮』には、ホラー表現、失踪事件、民間信仰などの要素が含まれます。\nすべての登場人物と設定は架空のものです。ご自身の判断でプレイしてください。',
    },
    hero: {
      comingSoon: 'COMING SOON',
      description_1: '父を探すため、',
      description_2: 'あなたはサトウキビと秘密に包まれたこの町に戻ってきた。',
      description_3: 'だが、境界に足を踏み入れた瞬間——',
      description_4: '誰かの声が耳元でささやいた：',
      description_punchline: '「やっと、帰ってきたね。」',
      watchTrailer: '予告編を見る',
      clickToInvestigate: '調査する',
    },
    town: {
      topSecret: 'TOP SECRET // FILE',
      worldView: '世界観',
      aboutTitle: '土界鎮について',
      aboutDesc_1: '土界鎮は、深い山霧に閉ざされた町だ。',
      aboutDesc_2: '三方を山に、一方を川に囲まれ、古い街並みと廃線が谷間で交錯している。',
      aboutDesc_3: '昼間は、すべてが平和すぎるほどだが、',
      aboutDesc_4: '夜になると、町は別の顔を見せる。',
      aboutDesc_5: '住人は決して理由を語らず、ただ警告する：',
      quote: '「ルールを守れば、無事でいられる。」',
      fig1: 'FIG. 1: THE TEA HOUSE',
      taboo: '禁忌',
      guideTitle: '町民生存ガイド',
      guideVer: 'VER. 2.0',
      rule1: 'カタツムリを見かけたら、迂回してください。決して傷つけないこと。',
      rule2: '日が沈んだ後は、屋外に留まらないでください。',
      rule3: '存在しないはずの駅が見えたら、すぐに目を閉じてください。',
      rule4_prefix: '決して',
      rule4_highlight: '「九姑娘花」',
      rule4_suffix: 'を町の外に持ち出さないこと。',
      rule4_hover: 'SHE IS WATCHING YOU',
      notReady: 'ルールを守る覚悟はできましたか？',
      pickupTicket: '切符',
      pickupTicketSub: '拾う',
    },
    news: {
      title: '最新情報',
      viewAll: 'VIEW ALL NEWS',
      readMore: 'クリックして詳細を読む。土界鎮の秘密が徐々に明らかになる...',
      items: [
        { date: '2026.01.20', category: 'NEWS', title: '公式サイト公開！ウィッシュリスト登録受付中' }
      ]
    },
    gameplay: {
      title: 'ゲームシステム',
      pickupLabel: '拾う',
      card1: { title: '探索', sub: 'EXPLORATION', desc: '町並み、廃糖工場、駅を探索し、風景や風習から隠された真実をつなぎ合わせる。' },
      card2: { title: '看取（サイト）', sub: 'THE SIGHT', desc: '古い物に触れて残留記憶を読み取り、隠蔽された過去を復元する。' },
      card3: { title: '生存', sub: 'SURVIVAL', desc: '月が変色する時、人間に擬態した「花倀（かちょう）」が現れる。弱点を利用して生き延びろ。' },
    },
    monster: {
      title: '失踪者観察ファイル No.01 — 林晴',
      subtitle: '土界鎮に散らばる記憶の欠片を集め、事件の真相を復元し、常理では説明できない現象を追跡せよ……',
      caseId: 'CASE #001970',
      lockedOverlay: {
        topSecret: 'TOP SECRET',
        doNotOpen: 'DO NOT OPEN',
        desc: 'このファイルは封印されています。記憶の欠片をすべて回収してロックを解除してください。',
        hint: '（ヒント：手がかりはサイトの隅々に隠されています……）',
        status: 'DECRYPTION STATUS'
      },
      file: {
        basic: {
           title: '基本データ',
           content: '13歳の少女。明るい性格で妹思い。青い花柄のワンピースを好み、幼少期から武術を習っていた。'
        },
        items: {
          title: '疑似残留物',
          list: [
            'ぬいぐるみ（右目の反射異常）',
            '半券（小児用、年代不明）',
            '写真の欠片（子供二人のツーショット、裏面の文字は削り取られている）'
          ],
          note: '（以上の物品は事件現場周辺で度々出現している。出所は調査中。）'
        },
        event: {
          title: '事件概要',
          content: '夏休み中に妹が一時迷子になり、翌日無事発見される。同日午後、林晴は単独で████へ祈願に行ったとの目撃情報あり（記録は抹消済み）。深夜、窓の外からの異常な猫の鳴き声を確認しに外へ——これが最後の確実な目撃情報。'
        },
        observation: {
          title: '観察日誌（抜粋）',
          intro: '夜間巡回記録（抜粋）：\n事件後3〜21日の間、旧鉄道、廃糖工場入口、路地の影などで、対象と身長・動作が酷似した影が度々目撃された。',
          quotes: [
            '「彼女のようだが、記憶の中の動きとは少し違う。」',
            '「影が身体より半拍早く頭を上げる。」',
            '「腰のあたりに子供用ゴム印のようなぼやけた痕がある。」'
          ],
          rumors_title: '町にある未確認の噂：',
          rumors_content: '夜中に彼女に似た声を聞いたが、内容は前日に話していた言葉の繰り返しだった。また、線路脇で目に見えない何かを待っているかのように長く佇んでいたという目撃談もある。'
        },
        status: 'ステータス：継続追跡中'
      },
      actionRequired: '行動確認',
      actionDesc: '以上の情報を確認してください',
      addToWishlist: 'ウィッシュリストに追加',
    },
    footer: {
      studio: 'OrzienGames',
      tagline: '「源」から始まり、純粋な心で没頭する。',
      desc: '「昼は凡人、夜は夢追い人。\nゲームへの愛から始まった、9時から5時まで働く会社員たちの集まりです。プレイヤーから開発者へと変わり、共感を呼ぶ作品を作りたいと願っています。」',
      credits: {
        col1: 'Production & Narrative',
        col2: 'Design & Art',
        col3: 'Tech & Audio',
        roles: {
          director: 'Game Director',
          writer: 'Writer',
          coWriter: 'Co-Writer',
          gameDesign: 'Game Design',
          artist: 'Artist',
          supporter: 'Supporter',
          uiux: 'UI/UX',
          programmer: 'Programmer',
          techSupporter: 'Tech Supporter',
          sound: 'Music/Sound'
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
      line1: '엄마가 그랬어, 달이 이상한 밤에는 밖에 나가지 말라고……',
    },
    privacy: {
      title: '개인정보 처리방침',
      p1: '투계진(Tujie Town) 공식 사이트에 오신 것을 환영합니다.',
      p2: '본 사이트는 게임 홍보 목적입니다. 관련 개인정보 보호 법규를 준수합니다.',
      l1: '데이터 수집:',
      l1_desc: '방문자 수와 같은 익명 데이터만 수집하며, 개인 식별 정보는 저장하지 않습니다.',
      l2: '쿠키(Cookies):',
      l2_desc: '언어 설정 저장을 위해 쿠키를 사용합니다. 브라우저 설정에서 비활성화할 수 있습니다.',
      l3: '제3자 링크:',
      l3_desc: 'Steam 등 외부 사이트의 개인정보 처리방침은 해당 사이트의 규정을 따릅니다.',
      update: '최종 업데이트: 2026.01.01',
      understood: '확인했습니다',
    },
    contentWarning: {
      title: '【 콘텐츠 경고 】',
      text: '《투계진》은 공포 분위기, 실종 사건, 민속 신앙 등의 요소를 포함하고 있어 불쾌감을 줄 수 있습니다.\n모든 등장인물과 설정은 허구입니다. 이용 시 주의해 주십시오.',
    },
    hero: {
      comingSoon: 'COMING SOON',
      description_1: '아버지를 찾기 위해,',
      description_2: '당신은 사탕수수와 비밀로 뒤덮인 이 마을로 돌아왔다.',
      description_3: '하지만 경계를 넘은 그 순간부터——',
      description_4: '누군가의 목소리가 귓가에 속삭였다:',
      description_punchline: '「드디어, 돌아왔구나.」',
      watchTrailer: '트레일러 보기',
      clickToInvestigate: '조사하기',
    },
    town: {
      topSecret: 'TOP SECRET // FILE',
      worldView: '세계관',
      aboutTitle: '투계진에 대하여',
      aboutDesc_1: '투계진은 짙은 산안개에 갇힌 마을이다.',
      aboutDesc_2: '삼면이 산으로, 한 면은 강으로 둘러싸여 있으며, 옛 거리와 폐철도가 계곡 속에 얽혀 있다.',
      aboutDesc_3: '낮에는 모든 것이 지나치게 평화롭지만,',
      aboutDesc_4: '밤이 되면 마을은 전혀 다른 모습으로 변한다.',
      aboutDesc_5: '주민들은 절대 이유를 말해주지 않는다. 단지 경고할 뿐:',
      quote: '「규칙을 지켜야만, 무사할 수 있어.」',
      fig1: 'FIG. 1: THE TEA HOUSE',
      taboo: '금기',
      guideTitle: '주민 생존 지침',
      guideVer: 'VER. 2.0',
      rule1: '달팽이를 보면 우회하십시오. 절대 해치지 마십시오.',
      rule2: '해가 진 후에는 야외에 머물지 마십시오.',
      rule3: '존재하지 않는 역이 보이면, 즉시 눈을 감으십시오.',
      rule4_prefix: '절대',
      rule4_highlight: '「구낭화(九姑娘花)」',
      rule4_suffix: '를 마을 밖으로 가져가지 마십시오.',
      rule4_hover: 'SHE IS WATCHING YOU',
      notReady: '규칙을 지킬 준비가 안 되셨나요?',
      pickupTicket: '승차권',
      pickupTicketSub: '줍기',
    },
    news: {
      title: '최신 소식',
      viewAll: 'VIEW ALL NEWS',
      readMore: '클릭하여 자세한 내용을 확인하세요. 투계진의 비밀이 서서히 드러납니다...',
      items: [
        { date: '2026.01.20', category: 'NEWS', title: '공식 사이트 오픈! 찜하기 목록 추가 가능' }
      ]
    },
    gameplay: {
      title: '핵심 플레이',
      pickupLabel: '줍기',
      card1: { title: '탐색', sub: 'EXPLORATION', desc: '마을 거리, 폐당 공장, 역을 탐색하며 풍경과 풍습 속에 숨겨진 진실을 조각해 맞추십시오.' },
      card2: { title: '사이코메트리', sub: 'THE SIGHT', desc: '오래된 물건을 만져 잔류 기억을 읽어내고, 은폐된 과거를 복원하십시오.' },
      card3: { title: '생존', sub: 'SURVIVAL', desc: '달이 변색되면, 인간으로 의태한 「화창(花倀)」이 나타납니다. 약점을 파악해 살아남으십시오.' },
    },
    monster: {
      title: '실종자 관찰 파일 No.01 — 임청(Lin Ching)',
      subtitle: '투계진 곳곳에 흩어진 기억 조각을 모아 사건의 진상을 복원하고, 상식으로 설명할 수 없는 현상을 추적하십시오……',
      caseId: 'CASE #001970',
      lockedOverlay: {
        topSecret: 'TOP SECRET',
        doNotOpen: 'DO NOT OPEN',
        desc: '이 파일은 봉인되었습니다. 모든 기억 조각을 회수하여 잠금을 해제하십시오.',
        hint: '(힌트: 단서는 사이트 곳곳에 숨겨져 있습니다. 자세히 찾아보세요...)',
        status: 'DECRYPTION STATUS'
      },
      file: {
        basic: {
           title: '기본 정보',
           content: '13세 소녀. 성격이 밝고 여동생을 아낌. 평소 파란색 꽃무늬 원피스를 즐겨 입으며, 어릴 때부터 무술을 배움.'
        },
        items: {
          title: '잔류 물품(의심)',
          list: [
            '인형 (오른쪽 눈 반사 이상)',
            '승차권 (어린이용, 연도 불명)',
            '사진 조각 (아이 두 명, 뒷면 글씨 긁혀 있음)'
          ],
          note: '(위 물품들은 사건 주변에서 여러 차례 발견됨. 출처 조사 중.)'
        },
        event: {
          title: '사건 개요',
          content: '여름방학 중 외출했다가 여동생이 잠시 실종되었으나, 다음 날 무사히 발견됨. 같은 날 오후, 임청이 홀로 ████에 기도를 하러 갔다는 목격담이 있음(기록 말소됨). 심야에 창밖의 이상한 고양이 울음소리를 확인하러 나감——이것이 마지막으로 확인된 목격 정보임.'
        },
        observation: {
          title: '관찰 일지 (요약)',
          intro: '야간 순찰 기록 (발췌):\n사건 후 3~21일 동안, 구 철도, 폐당 공장 입구, 골목 그림자 속에서 대상과 신장, 동작이 유사한 실루엣이 다수 목격됨.',
          quotes: [
            '「그 아이 같지만, 기억 속의 움직임과는 조금 다르다.」',
            '「그림자가 몸보다 반 박자 빨리 고개를 든다.」',
            '「허리 춤에 어린이용 고무 도장 같은 흐릿한 자국이 있다.」'
          ],
          rumors_title: '마을의 미확인 소문:',
          rumors_content: '밤에 그녀와 비슷한 목소리가 들렸으나, 내용은 전날 했던 말을 반복하는 것이었다고 함. 또한, 철길 옆에서 보이지 않는 무언가를 기다리는 듯 오랫동안 서 있었다는 목격담도 있음.'
        },
        status: '상태: 지속 추적 중'
      },
      actionRequired: '행동 확인',
      actionDesc: '위 정보를 확인해 주십시오.',
      addToWishlist: '찜하기 목록 추가',
    },
    footer: {
      studio: 'OrzienGames',
      tagline: '「근원」에서 시작하여, 순수한 마음으로 몰입하다.',
      desc: '“낮에는 평범한 직장인, 밤에는 꿈을 쫓는 사람들.\n게임에 대한 사랑으로 모인 9 to 5 직장인들입니다. 플레이어에서 개발자로, 공감을 불러일으키는 작품을 만들고자 합니다.”',
      credits: {
        col1: 'Production & Narrative',
        col2: 'Design & Art',
        col3: 'Tech & Audio',
        roles: {
          director: 'Game Director',
          writer: 'Writer',
          coWriter: 'Co-Writer',
          gameDesign: 'Game Design',
          artist: 'Artist',
          supporter: 'Supporter',
          uiux: 'UI/UX',
          programmer: 'Programmer',
          techSupporter: 'Tech Supporter',
          sound: 'Music/Sound'
        }
      },
      privacy: '개인정보 처리방침',
      contact: '문의하기'
    }
  }
};
