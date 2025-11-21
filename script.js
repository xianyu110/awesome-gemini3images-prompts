// 所有案例数据
const casesData = [
    // Part 1: 核心能力展示
    { id: 1, title: "角色一致性与口型准确性", category: "character", author: "@balconychy", tags: ["角色一致性", "4K"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211719889.png", prompt: "请绘制一张四宫格图片，四张图依次表现同一位戴着斗笠的年轻男子分别发音「我」「上」「早」「八」，人物外貌保持一致，口型准确对应每个字的发音，整体风格统一，16:9，4K" },
    { id: 2, title: "漫画上色与翻译", category: "translation", author: "@dotey", tags: ["翻译", "上色"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211719131.png", prompt: "将图片上的文字翻译为中文，并上色，其他不变" },
    { id: 3, title: "国际化海报翻译与重排", category: "poster", author: "@dotey", tags: ["海报", "翻译"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211719266.png", prompt: "将英文海报中的英文翻译成中文。" },
    { id: 4, title: "复杂UI界面复刻（聊天记录）", category: "ui", author: "@designer", tags: ["UI设计", "微信"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211719642.png", prompt: "生成两张竖版的微信群聊天界面截图，群成员正在讨论 Nano Banana Pro 的发布。" },
    { id: 5, title: "长文本与古画风格结合", category: "traditional", author: "@artist", tags: ["古风", "长文本"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211719856.png", prompt: "生成一幅 4K 古画，画上写着《水调歌头》全文" },
    { id: 6, title: "IP角色融合创作", category: "ip", author: "@creator", tags: ["IP融合", "创意"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211719241.png", prompt: "哆啦A梦和李白在月下对酌。圆月高悬，古代亭台楼阁，哆啦A梦穿着唐朝服饰，李白持酒壶，石桌上摆着酒具，仙气飘飘，中日混合画风，精致细节" },
    { id: 7, title: "搜索增强：行程规划", category: "infographic", author: "@traveler", tags: ["信息图", "搜索增强"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211719795.png", prompt: "生成一张可视化的图片，展示在广州旅游的 2 天行程。" },
    { id: 8, title: "搜索增强：天气信息图", category: "infographic", author: "@weather", tags: ["波普艺术", "实时"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211720294.png", prompt: "搜索广州实时天气信息，制作一幅中文波普艺术风格的信息图，4:3" },
    { id: 9, title: "实时天气UI设计", category: "ui", author: "@designer", tags: ["UI设计", "天气"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740561.jpeg", prompt: "帮我搜索现在北京的天气信息，并且将其放在一个天气UI设计稿中" },
    { id: 10, title: "搜索增强与图像编辑结合", category: "style", author: "@editor", tags: ["复古海报", "搜索增强"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740241.png", prompt: "搜索北京市今天的天气和一条正能量的早间新闻。将我的照片转换成'美式复古海报'风格。" },
    { id: 11, title: "多语言手账创作", category: "scene", author: "@traveler", tags: ["手账", "多语言"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740100.jpeg", prompt: "帮我生成一张拼贴手帐风格的广西旅游笔记，上面记录着自己的行程以及路上的照片等，文字有中文、韩语和英语。" },
    { id: 12, title: "多图输入与手写日记风格", category: "scene", author: "@diary", tags: ["日记", "手写"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740825.jpeg", prompt: "模拟在一张略带纹理的纸张上手写的关于今天的日记，拼贴画风格" },
    { id: 13, title: "中文字体设计", category: "design", author: "@font", tags: ["字体", "设计"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740992.jpeg", prompt: "多种字体设计提示词的综合效果展示" },
    { id: 14, title: "产品海报设计（单图）", category: "product", author: "@product", tags: ["产品", "海报"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740269.png", prompt: "为这款米色皮革手机壳设计产品海报。4K超清画面质感，静物摄影，昏暗氛围，光线追踪，高级柔光。" },
    { id: 15, title: "产品海报设计（多图）", category: "product", author: "@product", tags: ["香薰", "海报"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740031.jpeg", prompt: "为这两个香薰产品设计产品海报。两个香薰放在一起的超近景特写，质感清晰。" },
    { id: 16, title: "产品场景渲染", category: "product", author: "@render", tags: ["场景", "渲染"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740567.jpeg", prompt: "帮我将这个香薰放在符合设计风格的室内，大师级摄影，特写镜头" },
    { id: 17, title: "多物品场景融合", category: "product", author: "@interior", tags: ["家具", "融合"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740721.jpeg", prompt: "将这些家具融洽的放到一个房间中" },
    { id: 18, title: "人像精细编辑与美颜", category: "character", author: "@beauty", tags: ["美颜", "编辑"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740959.jpeg", prompt: "轻度美颜、瘦脸，发型替换为美式前刺，发际线前移，眼镜更换为墨镜" },
    { id: 19, title: "IP版权内容生成（跨文化融合）", category: "ip", author: "@ip", tags: ["IP融合", "大闹天宫"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740823.jpeg", prompt: "杰瑞鼠身披《大闹天宫》动画版标志性的鹅黄色虎皮裙、大红披风和金甲，头戴凤翅紫金冠，手持金箍棒" },
    { id: 20, title: "IP版权内容生成（关系图）", category: "infographic", author: "@ip", tags: ["权游", "关系图"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740621.jpeg", prompt: "一张手帐风格图片，上面画着电视剧权力的游戏的人物关系和势力关系图，人物有头像" },
    { id: 21, title: "IP版权内容生成（游戏截图）", category: "game", author: "@game", tags: ["宝可梦", "游戏"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740038.jpeg", prompt: "3D写实风格的宝可梦主题MMO游戏截图" },
    { id: 22, title: "白模上色与渲染", category: "style", author: "@3d", tags: ["手办", "上色"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740819.jpeg", prompt: "为这张手办完成材质添加和上色，同时将周围环境变为符合角色设定的环境" },
    { id: 23, title: "漫画翻译与上色（复杂场景）", category: "translation", author: "@manga", tags: ["海贼王", "上色"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740983.jpeg", prompt: "对复杂海贼王漫画页进行翻译和上色" },
    { id: 24, title: "酸性设计/Y2K风格海报", category: "style", author: "@design", tags: ["Y2K", "酸性设计"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740806.jpeg", prompt: "将照片转换成Y2K美学或酸性设计风格的平面设计海报" },
    { id: 25, title: "UI设计风格迁移", category: "ui", author: "@ui", tags: ["风格迁移", "天气App"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740851.jpeg", prompt: "模仿这个设计稿的风格和关键元素表现形式，帮我生成一个天气应用的UI设计稿" },
    { id: 26, title: "超长文本古风画卷", category: "traditional", author: "@calligraphy", tags: ["琵琶行", "书法"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211742741.jpeg", prompt: "在画面上方有一张长长的画卷上用潇洒的书法写着一整首白居易的《琵琶行》" },
    { id: 27, title: "微信群聊UI复刻（甄嬛传版）", category: "ui", author: "@chat", tags: ["微信", "甄嬛传"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211742790.png", prompt: "生成一张微信手机聊天界面截图，严格按照微信的界面UI和排版方式，群聊名称：紫禁城吃瓜群" },
    { id: 28, title: "跨界IP游戏场景", category: "game", author: "@game", tags: ["原神", "马斯克"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211742683.jpeg", prompt: "生成一张原神的实机战斗图片，旅行者主角正在和 boss 埃隆·马斯克战斗" },
    { id: 29, title: "超多IP角色大合照", category: "ip", author: "@crossover", tags: ["动漫", "大合照"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211742701.jpeg", prompt: "中国动画中的孙悟空和路飞、漩涡鸣人、炭治郎等多个动漫角色站在一起，大杂烩式同框，集体大合照" },
    { id: 30, title: "科普图制作（光合作用）", category: "infographic", author: "@science", tags: ["科普", "植物"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211742099.png", prompt: "用中文给我制作一张科普图片，讲述详细的植物进行光合作用的原理" },
    { id: 31, title: "科普图制作（牛顿三棱镜）", category: "infographic", author: "@science", tags: ["科普", "光学"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211742184.png", prompt: "设计「经典光学实验：牛顿三棱镜分光」分镜式科普海报" },
    { id: 32, title: "科普图制作（染色体）", category: "infographic", author: "@science", tags: ["科普", "基因"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211742565.jpeg", prompt: "用中文绘一张「人类基因组 23 对染色体概览」信息图" },
    { id: 33, title: "宠物照片编辑与Cos", category: "scene", author: "@pet", tags: ["宠物", "Cos"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211742309.jpeg", prompt: "帮我的猫穿上疯狂动物城的兔子警官cos装扮" },
    { id: 34, title: "宠物商业联名海报", category: "poster", author: "@pet", tags: ["宠物", "联名"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211742258.jpeg", prompt: "以「77X肯德基」联名企划为主题，生成一张联名海报" },
    { id: 35, title: "海报风格迁移（美妆）", category: "poster", author: "@design", tags: ["风格迁移", "美妆"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211742362.png", prompt: "参考图片风格，将主题色换成粉色，将菜篮子换成化妆箱" },
    { id: 36, title: "海报风格迁移（春节）", category: "poster", author: "@design", tags: ["春节", "马年"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211742082.png", prompt: "参考图片的风格和色彩以及构图，生成一张2026年马年大吉的春节海报" },
    { id: 37, title: "产品与海报风格融合", category: "poster", author: "@product", tags: ["洗衣液", "海报"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211742003.png", prompt: "参考图1的海报风格，制作一张图2洗衣液产品的海报" },
    { id: 38, title: "线稿上色与细节丰富", category: "design", author: "@arch", tags: ["线稿", "城市"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211742890.jpeg", prompt: "根据这张线稿，生成一张细节丰富的城市设计效果图" },
    { id: 39, title: "视角转换", category: "scene", author: "@view", tags: ["视角", "俯视"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211742168.jpeg", prompt: "把这张图的四格场景都换成头顶的俯视视角" },
    { id: 40, title: "漫画翻译与上色（连贯操作）", category: "translation", author: "@manga", tags: ["漫画", "翻译"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211742974.jpeg", prompt: "给这张漫画页上色并翻译成中文放到图中原来的位置" },
    { id: 41, title: "续写书页内容", category: "design", author: "@book", tags: ["书籍", "续写"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211742672.jpeg", prompt: "生成图中这本书的下一页，页面的位置要正确，文字内容要延续" },
    { id: 42, title: "数学题解题过程可视化", category: "infographic", author: "@math", tags: ["数学", "解题"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211742750.png", prompt: "画一张草稿纸，上面是这道题的解法" },
    { id: 43, title: "论文/长文本转白板图", category: "infographic", author: "@whiteboard", tags: ["白板", "论文"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211742352.jpeg", prompt: "将长文本或PDF内容转换成一张详细的白板照片" },
    { id: 44, title: "产品多场景渲染（唱片店）", category: "product", author: "@cd", tags: ["CD", "场景"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211743477.png", prompt: "90年代台北旧唱片店的木架上放置周杰伦CD" },
    { id: 45, title: "产品多场景渲染（悬浮）", category: "product", author: "@cd", tags: ["CD", "创意"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211743803.png", prompt: "CD悬浮在半空中，周围是破碎的玻璃碎片" },
    { id: 46, title: "拼豆风格创作（手办）", category: "style", author: "@perler", tags: ["拼豆", "手办"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211743192.png", prompt: "3D拼豆，盒子里装着精致的手办" },
    { id: 47, title: "拼豆风格创作（小狗）", category: "style", author: "@perler", tags: ["拼豆", "可爱"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211743974.png", prompt: "拼豆小狗" },
    // Part 2: UI/UX与界面复刻
    { id: 48, title: "Windows XP 复刻", category: "ui", author: "@retro", tags: ["复古", "Windows"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740026.jpeg", prompt: "精确复刻 Windows XP 的桌面环境。要求包含：经典蓝绿色背景、左下角'开始'按钮" },
    { id: 49, title: "Windows 11 复刻", category: "ui", author: "@modern", tags: ["现代", "Windows"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740313.jpeg", prompt: "生成一个 Windows 11 桌面截图，同时打开三个窗口" },
    { id: 50, title: "Mac OS 9 复刻", category: "ui", author: "@retro", tags: ["复古", "Mac"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740040.jpeg", prompt: "复刻 Mac OS 9 的桌面截图，黑白或低色彩的像素化图标" },
    { id: 51, title: "macOS 最新版复刻", category: "ui", author: "@modern", tags: ["现代", "Mac"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740903.jpeg", prompt: "复刻最新的 macOS 桌面，顶部菜单栏清晰显示" },
    { id: 52, title: "SaaS Dashboard", category: "ui", author: "@dashboard", tags: ["数据", "图表"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740993.jpeg", prompt: "生成一张SaaS平台的数据面板，包含柱状图、饼图和进度条" },
    { id: 53, title: "数据大屏（新能源）", category: "ui", author: "@bigscreen", tags: ["大屏", "新能源"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211749318.png", prompt: "帮我做一个新能源虚拟电厂的数据大屏，我要给领导展示的" },
    { id: 54, title: "APP原型图", category: "ui", author: "@prototype", tags: ["原型", "播客"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211749206.jpeg", prompt: "我想开发一款类似于小宇宙的APP，请你帮我画个原型图" },
    { id: 55, title: "PPT页面设计", category: "ui", author: "@ppt", tags: ["PPT", "AI"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211749614.png", prompt: "做一页PPT，关于AI Agent的应用场景，科技主题" },
    { id: 56, title: "科幻RPG游戏界面", category: "game", author: "@game", tags: ["游戏", "RPG"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740076.jpeg", prompt: "生成一个科幻 RPG 游戏的战斗界面" },
    { id: 57, title: "RTS游戏界面", category: "game", author: "@game", tags: ["游戏", "RTS"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740526.jpeg", prompt: "生成一个RTS 游戏的战斗界面" },
    { id: 58, title: "FPS游戏界面", category: "game", author: "@game", tags: ["游戏", "FPS"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740663.jpeg", prompt: "生成一个FPS 游戏的战斗画面，HUD瞄准镜" },
    { id: 59, title: "城市沙盒游戏界面", category: "game", author: "@game", tags: ["游戏", "沙盒"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740880.jpeg", prompt: "生成一个城市沙盒游戏的等距俯视截图" },
    { id: 60, title: "MOBA游戏界面", category: "game", author: "@game", tags: ["游戏", "MOBA"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740911.jpeg", prompt: "生成一个 MOBA 游戏的底部中央 HUD" },
    { id: 61, title: "桌游《卡坦岛》复刻", category: "game", author: "@board", tags: ["桌游", "卡坦岛"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740290.jpeg", prompt: "生成一个《卡坦岛》桌游的高精度复刻图" },
    { id: 62, title: "《剑网3》界面", category: "game", author: "@game", tags: ["剑网3", "武侠"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740303.jpeg", prompt: "生成一个《剑网3》战斗界面截图" },
    { id: 63, title: "《英雄联盟》界面", category: "game", author: "@game", tags: ["LOL", "MOBA"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740343.jpeg", prompt: "生成一个《英雄联盟》的对战界面" },
    { id: 64, title: "夜视仪FPS界面", category: "game", author: "@game", tags: ["FPS", "夜视"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740603.jpeg", prompt: "生成一个夜间战斗的截图，采用夜视仪效果" },
    { id: 65, title: "狙击镜界面", category: "game", author: "@game", tags: ["FPS", "狙击"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740041.jpeg", prompt: "生成一个狙击手通过高倍率瞄准镜瞄准目标的特写截图" },
    { id: 66, title: "武侠游戏过场", category: "game", author: "@game", tags: ["武侠", "过场"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740986.jpeg", prompt: "生成一个武侠游戏剧情过场动画的截图" },
    // Part 3: 内容创作与风格化应用
    { id: 67, title: "小红书封面（美食）", category: "poster", author: "@xiaohongshu", tags: ["小红书", "美食"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125.jpeg", prompt: "生成一张高饱和度的美食笔记封面，主题为3天瘦8斤的懒人减肥食谱" },
    { id: 68, title: "小红书封面（美妆）", category: "poster", author: "@xiaohongshu", tags: ["小红书", "美妆"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740177.jpeg", prompt: "生成一张美妆教程封面，韩系清冷风滤镜" },
    { id: 69, title: "小红书封面（数码）", category: "poster", author: "@xiaohongshu", tags: ["小红书", "数码"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740996.jpeg", prompt: "生成一个数码产品评测笔记内页" },
    { id: 70, title: "小红书封面（AI）", category: "poster", author: "@xiaohongshu", tags: ["小红书", "AI"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740248.jpeg", prompt: "生成一张AI绘画教程笔记封面，30个Midjourney核心关键词" },
    { id: 71, title: "视觉小说（现代言情）", category: "design", author: "@vn", tags: ["视觉小说", "言情"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740424.jpeg", prompt: "生成一个现代校园风格的视觉小说场景" },
    { id: 72, title: "视觉小说（古风武侠）", category: "design", author: "@vn", tags: ["视觉小说", "武侠"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740689.jpeg", prompt: "生成一个古风武侠场景的视觉小说界面" },
    { id: 73, title: "视觉小说（奇幻冒险）", category: "design", author: "@vn", tags: ["视觉小说", "奇幻"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211741290.jpeg", prompt: "生成一个奇幻冒险风格的视觉小说界面" },
    { id: 74, title: "视觉小说（科幻机甲）", category: "design", author: "@vn", tags: ["视觉小说", "机甲"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211741345.jpeg", prompt: "生成一个科幻机甲题材的互动场景" },
    { id: 75, title: "古籍复刻《红楼梦》", category: "traditional", author: "@classic", tags: ["红楼梦", "古籍"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211741694.jpeg", prompt: "生成一本打开的书，左页是《红楼梦》第一回的开篇段落" },
    { id: 76, title: "古籍复刻《论语》", category: "traditional", author: "@classic", tags: ["论语", "古籍"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211741735.jpeg", prompt: "生成一张古籍线装书的双页内文特写，复刻《论语》学而篇" },
    { id: 77, title: "《兰亭集序》石碑", category: "traditional", author: "@calligraphy", tags: ["书法", "石碑"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211741215.jpeg", prompt: "一个刻满经文的石碑，上刻有完整的《兰亭集序》" },
    { id: 78, title: "中文大写数字计算器", category: "design", author: "@creative", tags: ["计算器", "中文"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211741252.jpeg", prompt: "一个电子计算器的屏幕，用中文字符显示算式" },
    { id: 79, title: "古画题跋", category: "traditional", author: "@painting", tags: ["山水画", "题跋"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211741896.jpeg", prompt: "生成一幅南宋时期的青绿山水画长卷，有苏轼《题西林壁》题跋" },
    { id: 80, title: "漫画翻译上色（鬼灭）", category: "translation", author: "@manga", tags: ["鬼灭之刃", "上色"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211742933.png", prompt: "把这张图变成彩色，翻译成中文并放在对应的对话框内" },
    { id: 81, title: "风格转换（3D毛绒）", category: "style", author: "@style", tags: ["风格转换", "3D"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211742667.jpeg", prompt: "将漫画转换为3D毛绒风格" },
    { id: 82, title: "电影海报《死亡诗社》", category: "poster", author: "@movie", tags: ["电影", "海报"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211742631.jpeg", prompt: "电影《死亡诗社》艺术海报，主标题用流动的艺术手写字体" },
    { id: 83, title: "电影海报《天书奇谭》", category: "poster", author: "@movie", tags: ["动画", "海报"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211742848.jpeg", prompt: "动画电影《天书奇谭》艺术海报，中国山水画风格" },
    { id: 84, title: "活动海报（AI赋能）", category: "poster", author: "@event", tags: ["活动", "AI"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211749177.png", prompt: "主题为AI赋能发明创新的活动宣传海报" },
    { id: 85, title: "应县木塔结构解说图", category: "infographic", author: "@arch", tags: ["建筑", "解说"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211742475.jpeg", prompt: "生成应县木塔的结构解说图，附上详细中文" },
    { id: 86, title: "苏绣工艺解说图", category: "infographic", author: "@craft", tags: ["苏绣", "工艺"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211742643.jpeg", prompt: "生成苏绣工艺的详细解说图，配上详细的中文知识解析" },
    { id: 87, title: "百年孤独人物关系图", category: "infographic", author: "@book", tags: ["文学", "关系图"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211751857.png", prompt: "画出《百年孤独》中的重要人物关系图，用中文表示关系" },
    { id: 88, title: "锂电池原理图", category: "infographic", author: "@science", tags: ["科普", "电池"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211749359.png", prompt: "锂电池作用原理图，用中英文双语进行标注" },
    { id: 89, title: "个人名片设计", category: "poster", author: "@personal", tags: ["名片", "个人"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211749848.png", prompt: "生成一张个人介绍图，用于向外展示" },
    { id: 90, title: "功夫图解", category: "infographic", author: "@kungfu", tags: ["功夫", "图解"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211749585.png", prompt: "让特朗普用中文图解的方式教八部金刚功" },
    { id: 91, title: "古诗配图", category: "traditional", author: "@poetry", tags: ["古诗", "配图"], img: "https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211749972.png", prompt: "为采菊东篱下，悠然见南山这首诗配图" },
];

// ===== DOM Elements =====
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const langBtn = document.getElementById('langBtn');
const langMenu = document.getElementById('langMenu');
const backToTop = document.getElementById('backToTop');
const modal = document.getElementById('modal');
const modalClose = document.getElementById('modalClose');
const modalImg = document.getElementById('modalImg');
const modalTitle = document.getElementById('modalTitle');
const modalPrompt = document.getElementById('modalPrompt');
const copyPrompt = document.getElementById('copyPrompt');
const categoryFilter = document.getElementById('categoryFilter');
const searchInput = document.getElementById('searchInput');
const cardGrid = document.getElementById('cardGrid');
const loadMoreBtn = document.getElementById('loadMoreBtn');

// 当前显示数量
let displayCount = 12;
const increment = 12;

// 生成卡片HTML
function createCard(item) {
    return `
        <div class="card" data-category="${item.category}" data-id="${item.id}">
            <div class="card-badge">#${item.id}</div>
            <div class="card-img"><img src="${item.img}" alt="${item.title}" loading="lazy"></div>
            <div class="card-body">
                <h3>${item.title}</h3>
                <p class="card-author">👤 ${item.author}</p>
                <div class="card-tags">${item.tags.map(t => `<span>${t}</span>`).join('')}</div>
                <div class="card-actions">
                    <button class="btn-sm btn-view" data-prompt="${item.prompt.replace(/"/g, '&quot;')}">👁️ 查看详情</button>
                    <button class="btn-sm btn-copy">📄 原文</button>
                </div>
            </div>
        </div>
    `;
}

// 渲染卡片
function renderCards() {
    const category = categoryFilter?.value || 'all';
    const search = searchInput?.value.toLowerCase() || '';

    const filtered = casesData.filter(item => {
        const matchCategory = category === 'all' || item.category === category;
        const matchSearch = item.title.toLowerCase().includes(search) || item.prompt.toLowerCase().includes(search);
        return matchCategory && matchSearch;
    });

    const toShow = filtered.slice(0, displayCount);
    cardGrid.innerHTML = toShow.map(createCard).join('');

    // 显示/隐藏加载更多按钮
    loadMoreBtn.style.display = displayCount >= filtered.length ? 'none' : 'block';

    // 重新绑定事件
    bindCardEvents();
}

// 绑定卡片事件
function bindCardEvents() {
    document.querySelectorAll('.btn-view').forEach(btn => {
        btn.addEventListener('click', function() {
            const card = this.closest('.card');
            const img = card.querySelector('.card-img img');
            const title = card.querySelector('h3');
            modalImg.src = img.src;
            modalTitle.textContent = title.textContent;
            modalPrompt.textContent = this.dataset.prompt;
            modal.classList.add('show');
            document.body.style.overflow = 'hidden';
        });
    });

    document.querySelectorAll('.btn-copy').forEach(btn => {
        btn.addEventListener('click', function() {
            const viewBtn = this.closest('.card').querySelector('.btn-view');
            navigator.clipboard.writeText(viewBtn.dataset.prompt).then(() => {
                this.textContent = '✓ 已复制';
                setTimeout(() => this.textContent = '📄 原文', 2000);
            });
        });
    });
}

// 初始化
renderCards();

// 筛选和搜索
categoryFilter?.addEventListener('change', () => { displayCount = 12; renderCards(); });
searchInput?.addEventListener('input', () => { displayCount = 12; renderCards(); });

// 加载更多
loadMoreBtn?.addEventListener('click', () => { displayCount += increment; renderCards(); });

// 移动端菜单
menuToggle?.addEventListener('click', () => navMenu.classList.toggle('show'));

// 语言选择器
langBtn?.addEventListener('click', (e) => { e.stopPropagation(); langMenu.classList.toggle('show'); });
langMenu?.querySelectorAll('li').forEach(item => {
    item.addEventListener('click', () => {
        langBtn.textContent = item.textContent.replace('✓ ', '') + ' ▼';
        langMenu.classList.remove('show');
    });
});
document.addEventListener('click', () => langMenu?.classList.remove('show'));

// 返回顶部
window.addEventListener('scroll', () => {
    backToTop?.classList.toggle('show', window.scrollY > 300);
});
backToTop?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// 模态框
modalClose?.addEventListener('click', closeModal);
modal?.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });
function closeModal() {
    modal?.classList.remove('show');
    document.body.style.overflow = '';
}

// 复制提示词
copyPrompt?.addEventListener('click', async () => {
    try {
        await navigator.clipboard.writeText(modalPrompt.textContent);
        copyPrompt.textContent = '✓ 已复制';
        setTimeout(() => copyPrompt.textContent = '📋 复制提示词', 2000);
    } catch (err) { alert('复制失败'); }
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
            navMenu?.classList.remove('show');
        }
    });
});

// 导航高亮
const navLinks = document.querySelectorAll('.nav-menu a');
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => { if (window.scrollY >= s.offsetTop - 100) current = s.id; });
    navLinks.forEach(l => {
        l.classList.remove('active');
        if (l.getAttribute('href') === `#${current}`) l.classList.add('active');
    });
});

console.log(`🍌 Awesome Nano Bananapro Images 已加载 ${casesData.length} 个案例!`);