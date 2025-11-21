# Nano Banana Pro 全网最全提示词整理

## 开源协议

本项目采用 [MIT License](LICENSE) 开源协议。

---

### **前言：Google发布Nano Banana Pro，AI图像生成迎来新纪元**

奥特曼（指OpenAI），迎来至暗时刻。

Google 的 AI 攻势没有半点减弱的迹象。如果说前几天 Gemini 3 Pro 的镰刀伸向了「前端」领域，那么今天则轮到了设计行业。

刚刚发布的 \*\*Nano Banana Pro（Gemini 3 Pro Image）\*\*再次在图像生成能力上重拳出击。初级设计师的饭碗，怕是要端不稳了。

![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211719380.png)

---

### **一、核心功能概览**

* **分辨率支持**：最高可输出 4K 分辨率图像。
* **多轮编辑**：支持对话式、多轮次的图像编辑工作流。
* **多图像合成**：最多可将 14 张输入图像组合为 1 张输出图像。
* **搜索增强**：集成 Google 搜索能力，提供更精确、最新的知识支持。
* **深度思考与逻辑推演**：生成图像前会进行物理模拟和逻辑推演，而非简单模仿。
* **跨模态与多语言能力**：支持生成多种语言文字、一键翻译和本地化。
* **超长上下文**：64k的输入Token上限，能理解极长的文本提示词。
* **角色一致性**：最多支持5个角色的外貌在多图之间保持一致。
* **专业级创意控制**：通过文字指令调整镜头、光线、风格、调色等。
* **AI透明度**：所有生成内容嵌入SynthID数字水印，可验证来源。

---

### **二、官方及博主实测案例全集**

#### **Part 1: 核心能力展示**

**1. 角色一致性与口型准确性**

> **提示词：** 请绘制一张四宫格图片，四张图依次表现同一位戴着斗笠的年轻男子分别发音「我」「上」「早」「八」，人物外貌保持一致，口型准确对应每个字的发音，整体风格统一，16:9，4K

![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211719889.png)

**2. 漫画上色与翻译**

> **提示词：** 将图片上的文字翻译为中文，并上色，其他不变

![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211719131.png)

**3. 国际化海报翻译与重排**

> **提示词：** 将英文海报中的英文翻译成中文。

![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211719266.png)

**4. 复杂UI界面复刻（聊天记录）**

> **提示词：** 生成两张竖版的微信群聊天界面截图，群成员正在讨论 Nano Banana Pro 的发布。

![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211719642.png)

**5. 长文本与古画风格结合**

> **提示词：** 生成一幅 4K 古画，画上写着：明月几时有？把酒问青天。不知天上宫阙，今夕是何年。我欲乘风归去，又恐琼楼玉宇，高处不胜寒。起舞弄清影，何似在人间。转朱阁，低绮户，照无眠。不应有恨，何事长向别时圆？人有悲欢离合，月有阴晴圆缺，此事古难全。但愿人长久，千里共婵娟。

![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211719856.png)

**6. IP角色融合创作**

> **提示词：** 哆啦A梦和李白在月下对酌。圆月高悬，古代亭台楼阁，哆啦A梦穿着唐朝服饰，李白持酒壶，石桌上摆着酒具，仙气飘飘，中日混合画风，精致细节

![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211719241.png)

**7. 搜索增强：实时信息可视化（行程规划）**

> **提示词：** 生成一张可视化的图片，展示在广州旅游的 2 天行程。

![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211719795.png)

**8. 搜索增强：实时信息可视化（天气信息图）**

> **提示词：** 搜索广州实时天气信息，制作一幅中文波普艺术风格的信息图，4:3

![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211720294.png)

**9. 搜索增强：实时天气UI设计**

> **提示词：** 帮我搜索现在（20251120）北京的天气信息，并且将其放在一个天气UI设计稿中

![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740561.jpeg)

**10. 搜索增强与图像编辑结合**

> **提示词：** 搜索北京市今天（202511120）的天气和一条正能量的早间新闻。将我的照片转换成‘美式复古海报’风格。在海报顶部用巨大的艺术字写上今天的日期（中文），底部用报纸排版风格写上那条新闻的摘要和今天的天气提示。

![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740241.png)

**11. 多语言手账创作**

> **提示词：** 帮我生成一张拼贴手帐风格的广西旅游笔记，上面记录着自己的行程以及路上的照片等，文字有中文、韩语和英语。

![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740100.jpeg)

**12. 多图输入与手写日记风格**

> **提示词：** 模拟在一张略带纹理的纸张上（米黄色或者浅棕色）手写的关于今天的日记。所有的图片以拼贴画风格放在一页日记上，保证图片与原图一致包含以下元素：用手写字体描述今天做了什么，以及一两句吸引人的标语或简介，包含几张图片的介绍，用红色笔迹或其他亮色圈出或用箭头指向特别推荐的地点或活动。穿插一些与图片特色相关的简单涂鸦式小图画，写着当前的日期和北京的天气，并添加一个图 4 手绘角色形象。整体感觉要像一份由热爱生活的作者精心制作的、生动有趣的个人日记。

![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740825.jpeg)

**13. 中文字体设计**

> **提示词：** （示例为多种字体设计提示词的综合效果展示）

![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740992.jpeg)

**14. 产品海报设计（单图）**

> **提示词：** 为这款米色皮革手机壳设计产品海报。手机壳侧立放置的超近景特写，清晰展现素皮细腻纹理与橙色金属镜头圈的撞色质感，背部吸附同色系磁吸卡包。米色背景，周围缭绕棕色透明轻纱，搭配几株蕨类植物、沉香枯木与两支铃兰作为前景点缀。4K超清画面质感。静物摄影，昏暗氛围，光线追踪，高级柔光。海报上方文案标题：“AATTT STUDIO”，极细衬线字体。页面下方小字：“素皮 | 磁吸 | 极简”。艺术签角标：“AATTT | Design”。

![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740269.png)

**15. 产品海报设计（多图）**

> **提示词：** 为这两个香薰产品设计产品海报。两个香薰放在一起的超近景特写，质感清晰。米色背景，周围棕色透明轻纱，蕨类植物，沉香枯木，两支铃兰。4K超清画面质感。静物摄影，昏暗氛围，光线追踪。海报上方文案标题：“昆仑煮雪”，极细文字。页面下方小字：“沉香|铃兰|草本”。艺术签角标：“观夏|to summer”。

![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740031.jpeg)

**16. 产品场景渲染**

> **提示词：** 帮我将这个香薰放在符合设计风格的室内，大师级摄影，特写镜头

![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740567.jpeg)

**17. 多物品场景融合**

> **提示词：** 将这些家具融洽的放到一个房间中

![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740721.jpeg)

**18. 人像精细编辑与美颜**

> **提示词：** 轻度美颜、瘦脸，发型替换为美式前刺，发际线前移，眼镜更换为墨镜

![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740959.jpeg)

**19. IP版权内容生成（跨文化融合）**

> **提示词：** 杰瑞鼠身披《大闹天宫》动画版标志性的鹅黄色虎皮裙、大红披风和金甲，头戴凤翅紫金冠，手持金箍棒，面部表情夸张而神气，背景是天宫的亭台楼阁或花果山水帘洞，整个画面都将严格遵循上海美术电影制片厂《大闹天宫》的经典画风，色彩浓烈，线条流畅，充满浓郁的中国传统水墨和工笔重彩韵味。

![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740823.jpeg)

**20. IP版权内容生成（关系图）**

> **提示词：** 一张手帐风格图片，上面画着电视剧权力的游戏的人物关系和势力关系图，人物有头像

![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740621.jpeg)

**21. IP版权内容生成（游戏截图）**

> **提示词：** 3D写实风格的宝可梦主题MMO游戏截图

![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740038.jpeg)

**22. 白模上色与渲染**

> **提示词：** 为这张手办完成材质添加和上色，同时将周围环境变为符合角色设定的环境

![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740819.jpeg)

**23. 漫画翻译与上色（复杂场景）**

> **提示词：** （示例为对复杂海贼王漫画页进行翻译和上色）

![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740983.jpeg)

**24. 酸性设计/Y2K风格海报转换**

> **提示词：** 请分析我上传的这张照片，并将其转换成一张现代风格的平面设计海报。请按以下步骤操作：主体处理：首先，将主体从原始背景中精确地抠出来，作为海报的核心主体。背景改造：将原始背景替换为一个抽象的、具有毛玻璃质感的背景。这个新背景应该保留原背景的色调倾向（比如绿色和棕色），但要完全模糊掉具体细节。核心构图：在主体的后面，添加一个醒目的纯色矩形色块。色块的颜色请从照片上最亮的颜色中提取。添加与照片主体内容相关的主标题文字，使用一种粗大的、有设计感的无衬线字体。最关键的是，将这个标题图层放置在主体的后面，形成主体遮挡文字的空间感。细节添加：在画面的不同位置，添加一些与画面内容相关的小号的、信息性的文字，以创造视觉层次。在花茎的底部，添加一些模拟透明胶带的素材，让花朵看起来像是被贴在海报上一样，增加真实感和拼贴感。风格统一：最后，确保整个海报的风格是Y2K美学或酸性设计，画面具有丰富的纹理和层次感。让标题和色块与背景的玻璃质感有一些透明度的融合，使整体看起来更协调。

![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740806.jpeg)
![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740707.jpeg)

**25. UI设计风格迁移**

> **提示词：** 模仿这个设计稿的风格和关键元素表现形式，帮我生成一个天气应用的UI设计稿

![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740851.jpeg)

**26. 超长文本古风画卷**

> **提示词：** 在画面上方有一张长长的画卷上用潇洒的书法写着一整首白居易的《琵琶行》内容是“浔阳江头夜送客，枫叶荻花秋瑟瑟【这里写好琵琶行全文】座中泣下谁最多？江州司马青衫湿。“，同时下方用中国水墨画风格画上这首诗对应的画面

![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211742741.jpeg)

**27. 微信群聊UI复刻（甄嬛传版）**

> **提示词：** 生成一张微信手机聊天界面截图，严格按照微信的界面UI和排版方式，左侧对话气泡是灰色，右侧对话气泡是绿色，右侧是甄嬛的角色在讲话。群聊名称：紫禁城吃瓜群 聊天内容：...（详见原文）

![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211742790.png)

**28. 跨界IP游戏场景**

> **提示词：** 生成一张原神的实机战斗图片，旅行者主角正在和 boss 埃隆·马斯克战斗，马斯克站在一台悬浮的火箭装甲上发射能量炮，画面为3D高饱和度奇幻原神游戏风格。

![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211742683.jpeg)

**29. 超多IP角色大合照**

> **提示词：** 中国动画中的孙悟空和路飞、漩涡鸣人、炭治郎、御坂美琴、蕾姆、桐谷和人、明日香、草帽乔巴、鹿目圆、阿尼亚·福杰、黑崎一护、艾伦·耶格尔、灰原哀和初音未来和哪吒、李白、唐僧、海绵宝宝、蜡笔小新、迪士尼公主们站在一起，大杂烩式同框，集体大合照；背景是一望无际的草原、蓝天与白云，整体明亮清新的动漫风格。

![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211742701.jpeg)

**30. 科普图制作**

> **提示词：** 用中文给我制作一张科普图片，讲述详细的植物进行光合作用的原理
> ![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211742099.png)

> **提示词：** 设计「经典光学实验：牛顿三棱镜分光」分镜式科普海报：左侧画入射白光，中间为玻璃三棱镜，右侧准确依波长顺序散出七色光带；下方小框再现“光的色散”公式 n = c/v；整体为 4:3 比例高清矢量，背景深灰，文字用无衬线体。
> ![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211742184.png)

> **提示词：** 用中文绘一张「人类基因组 23 对染色体概览」信息图：按实际长度比例竖排染色体条，使用不同渐变色区分常染色体与性染色体，侧边列出每对染色体与已知疾病/特征相关的代表基因（如 HBB、BRCA1）；
> ![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211742565.jpeg)

**31. 宠物照片编辑与商业联名**

> **提示词：** 帮我的猫穿上疯狂动物城的兔子警官 cos装扮，包括头套帽子和衣服，衣服合理的套在小猫身上，去掉小猫前方的遮挡物，保持原图的构图和写实风格
> ![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211742309.jpeg)
> ![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211742616.jpeg)

> **提示词：** 以「77（猫的名字）X肯德基」联名企划为主题，围绕同一只宠物（形象、花色等与上传图片绝对一致）生成一张联名海报。...然后自由的为这张海报添加合适的中文内容。
> ![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211742258.jpeg)

**32. 海报风格迁移与内容替换**

> **提示词：** 参考图片风格，将主题色换成粉色，将菜篮子换成化妆箱，并将图中关于生鲜水果的元素和文字全部改成美妆的元素和文字内容
> ![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211742362.png)

> **提示词：** 参考图片的风格和色彩以及构图，生成一张2026年马年大吉的春节海报，保持字体一致
> ![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211742082.png)

**33. 多图输入：产品与海报风格融合**

> **提示词：** 参考图1的海报风格，制作一张图2洗衣液产品的海报，保持图2的产品一致性，同时图中所有的元素和文字内容都是和图2的洗衣液相关
> ![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211742003.png)

**34. 线稿上色与细节丰富**

> **提示词：** 根据这张线稿，生成一张细节丰富的城市设计效果图
> ![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211742890.jpeg)

**35. 视角转换**

> **提示词：** 把这张图的四格场景都换成头顶的俯视视角
> ![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211742168.jpeg)

**36. 漫画翻译与上色（连贯操作）**

> **提示词：** 给这张漫画页上色并翻译成中文放到图中原来的位置，保持构图和图片细节的一致
> ![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211742974.jpeg)

**37. 续写书页内容**

> **提示词：** 生成图中这本书的下一页，页面的位置要正确，文字内容要延续，并且文字保持清晰
> ![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211742672.jpeg)

**38. 数学题解题过程可视化**

> **提示词：** 画一张草稿纸，上面是这道题的解法。 (输入为数学题图片)
> ![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211742750.png)

**39. 论文/长文本转白板图**

> **提示词：** （将长文本或PDF内容作为输入）将...转换成一张详细的白板照片。
> ![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211742352.jpeg)

**40. 产品多场景渲染**

> **提示词：** （以周杰伦CD为例，在不同场景中渲染）
>
> 1. 90年代台北旧唱片店的木架上...
>    ![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211743477.png)
> 2. CD悬浮在半空中，周围是破碎的玻璃碎片...
>    ![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211743803.png)
> 3. 将CD放入CD机中...
>    ![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211743775.png)

**41. 拼豆风格创作**

> **提示词：** 3D拼豆，盒子里装着精致的手办。
> ![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211743192.png)
> **提示词：** （示例）拼豆小狗
> ![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211743974.png)
> **提示词：** （示例）拼豆色卡和小猫
> ![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211743879.png)

#### **Part 2: UI/UX与界面复刻专项测试**

**1. 经典操作系统界面**

> **Windows XP:** 精确复刻 Windows XP 的桌面环境。要求包含：经典蓝绿色背景、左下角‘开始’按钮、一个打开的‘我的电脑’窗口，窗口内文件列表的字体和图标必须忠于 XP 风格。
> ![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740026.jpeg)

> **Windows 11:** 生成一个 Windows 11 桌面截图。要求同时打开三个窗口：一个半透明的‘设置’窗口、一个浏览器窗口和一个文件资源管理器窗口。要求窗口阴影和层级关系正确，且窗口标题栏中的中文文本准确。
> ![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740313.jpeg)

> **Mac OS 9:** 复刻 Mac OS 9 的桌面截图。要求显示黑白或低色彩的像素化图标、系统菜单栏、以及两个重叠的灰色窗口。要求字体和窗口的锯齿边缘（Aliasing）符合早期显示器特点。
> ![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740040.jpeg)

> **macOS (最新):** 复刻最新的 macOS 桌面。要求：顶部菜单栏清晰显示WiFi 图标、时间（9:41 AM）、以及一个正在弹出的系统通知（内容为：‘软件更新已完成’，要求文本准确）。
> ![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740903.jpeg)

**2. 数据与应用界面**

> **SaaS Dashboard:** 生成一张SaaS平台的数据面板（Dashboard）。要求包含一个高精度的柱状图、一个饼图，以及至少三种不同颜色的进度条。图表和进度条上必须有准确的百分比数字（如：78%、45%）。
> ![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740993.jpeg)

> **数据大屏:** 你帮我做一个新能源虚拟电厂的数据大屏，我要给领导展示的。
> ![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211749318.png)

> **APP原型图:** 我想开发一款类似于“小宇宙”的APP，请你帮我画个原型图，所有要求均符合APP原型图标准。
> ![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211749206.jpeg)

> **PPT页面:** 我想做一页PPT，关于AI Agent的应用场景，你自行帮我设计一下，要求科技主题的。文字为中文
> ![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211749614.png)

**3. 游戏界面 (HUD)**

> **科幻RPG:** 生成一个科幻 RPG 游戏的战斗界面。要求：屏幕左上角显示玩家状态条（生命值：25/100，魔法值：150/200...）；屏幕右下角是六个技能图标，其中三个处于中文冷却倒计时状态（如：‘冷却中：3.5s’）。
> ![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740076.jpeg)

> **RTS:** 生成一个RTS 游戏的战斗界面。要求：右上角清晰显示三种资源数量（如：‘矿石：1258’...）；左下角显示六个单位的图标卡片...
> ![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740526.jpeg)

> **FPS:** 生成一个FPS 游戏的战斗画面。要求：屏幕中央是HUD 瞄准镜；右下角显示枪械弹药数（如：‘28/120’）；要求画面有中文的‘爆头’（Headshot）提示特效...
> ![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740663.jpeg)

> **城市沙盒:** 生成一个城市沙盒游戏的等距俯视截图。要求鼠标悬停在一个中文命名的商业建筑（如：‘李氏商场’）上方，建筑上方弹出一个中文信息气泡，显示‘当前收入：+¥12,500’
> ![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740880.jpeg)

> **MOBA:** 生成一个 MOBA 游戏的底部中央 HUD。要求：五个技能图标清晰可见，其中两个处于中文冷却倒计时状态；同时显示六个装备栏位...
> ![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740911.jpeg)

> **桌游《卡坦岛》:** 生成一个《卡坦岛》（Catan）桌游的高精度复刻图
> ![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740290.jpeg)

> **《剑网3》:** 生成一个《剑网3》战斗界面截图。要求：...屏幕下方显示技能快捷栏，其中三个技能处于中文冷却倒计时状态（如：‘冷却：12s’）...
> ![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740303.jpeg)

> **《英雄联盟》:** 生成一个《英雄联盟》的对战界面。要求：...下方中央显示五个技能图标，其中大招（R键）处于冷却倒计时状态（如：‘58s’）。
> ![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740343.jpeg)

> **夜视仪FPS:** 生成一个夜间战斗的截图。要求画面采用夜视仪...屏幕中央的中文警告文本显示：‘警告：电池电量低！’。
> ![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740603.jpeg)

> **狙击镜:** 生成一个狙击手通过高倍率瞄准镜瞄准目标的特写截图。要求...屏幕右上角显示中文风速/距离数据（如：‘距离：350米，风速：5米/秒’）。
> ![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740041.jpeg)

> **武侠游戏过场:** 生成一个武侠游戏剧情过场动画的截图。..屏幕下方显示中文宽屏字幕：‘十年前的恩怨，今日做了断！’
> ![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740986.jpeg)

#### **Part 3: 内容创作与风格化应用**

**1. 社交媒体风格（小红书封面）**

> **美食博主:** 生成一张高饱和度的美食笔记封面。主题为：‘😭连夜整理！3天瘦8斤的懒人减肥食谱’。要求...中文表情符号（😭）必须清晰且无乱码。
> ![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740125.jpeg)

> **美妆博主:** 生成一张美妆教程封面。要求人像特写采用‘韩系清冷风’滤镜...封面底部添加一行中文标题：‘新手必看！一秒去黄气伪素颜妆’...
> ![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740177.jpeg)

> **数码博主:** 生成一个数码产品评测笔记内页。要求...旁边有一个中文参数对比表格...表格内必须有中文汉字和数字/单位的准确对比数据。
> ![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740996.jpeg)

> **AI博主:** 生成一张AI 绘画教程笔记封面。主题为：‘😭连夜整理！30个 Midjourney 核心关键词，新手也能出神图！’...
> ![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740248.jpeg)

**2. 视觉小说与互动场景**

> **现代言情:** 生成一个现代校园风格的视觉小说场景...对话框显示男主角的中文对话：‘你为什么不相信我？’，要求男主角的表情为‘焦急’，而女主角的表情为‘怀疑’。
> ![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740424.jpeg)

> **古风武侠:** 生成一个古风武侠场景...对话框中显示第三位角色的中文台词：‘此物非同小可，谁来保管？’...
> ![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211740689.jpeg)

> **奇幻冒险:** 生成一个奇幻冒险风格的视觉小说界面...屏幕下方清晰显示两个中文剧情选项按钮：‘1. 掷出匕首’ 和 ‘2. 召唤契约魔兽’。
> ![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211741290.jpeg)

> **科幻机甲:** 生成一个科幻机甲题材的互动场景。要求屏幕右上角有一个中文状态 HUD，显示：‘驾驶员：洛冰’，以及一个‘精神力’进度条...
> ![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211741345.jpeg)

**3. 复杂文本与古籍复刻**

> **《红楼梦》:** 生成一本打开的书，左页是《红楼梦》第一回的开篇段落（约100字），右页是竖排繁体书法风格的摘要...
> ![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211741694.jpeg)

> **《论语》:** 生成一张古籍线装书的双页内文特写。要求内文精确复刻《论语》的‘学而篇’全文...
> ![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211741735.jpeg)

> **《兰亭集序》石碑:** 一个刻满经文的石碑，上刻有完整的《兰亭集序》。文本必须沿着石碑从左到右排列，且保持行书的笔意。
> ![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211741215.jpeg)

> **中文大写数字计算器:** 一个电子计算器的屏幕，屏幕上用中文字符显示算式：‘三千一百四十一 乘以 二千七百一十八 等于 (准确结果的中文大写数字)’。
> ![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211741252.jpeg)

> **古画题跋:** 生成一幅南宋时期的青绿山水画长卷。在长卷的右侧，有一段行楷书的中文题跋，内容为苏轼《题西林壁》全诗。
> ![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211741896.jpeg)

**4. 漫画创作与风格转换**

> **漫画一条龙:** 把这张图变成彩色，翻译成中文并放在对应的对话框内，其他保持不变，最后以图片的形式给我。 (对鬼灭之刃原图操作)
> ![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211742933.png)
> **(自创漫画)→(翻译上色)**
> ![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211742004.png)
> ![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211742031.jpeg)
> **(风格转换)→3D毛绒/马赛克/浮雕**
> ![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211742667.jpeg)
> ![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211742575.jpeg)
> ![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211742868.png)

**5. 海报设计**

> **电影海报《死亡诗社》:** 电影《死亡诗社》艺术海报...主标题用流动的艺术手写字体“死亡诗社”...
> ![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211742631.jpeg)

> **电影海报《天书奇谭》:** 动画电影《天书奇谭》艺术海报，中国山水画风格...主题为手写艺术字体“天书奇谭”...
> ![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211742848.jpeg)

> **活动海报:** 我要举办一场活动，主题为“AI赋能发明创新”...请帮我画一张宣传海报...
> ![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211749177.png)

**6. 知识图谱与信息图**

> **应县木塔结构图:** 为我生成西安大同应县木塔的结构解说图，附上一整段详细中文，中文字清晰。
> ![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211742475.jpeg)

> **苏绣工艺图:** 为我生成苏绣工艺的详细解说图，配上详细的中文知识解析。
> ![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211742643.jpeg)

> **百年孤独人物关系图:** 画出《百年孤独》中的重要人物关系图，用中文表示关系。
> ![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211751857.png)

> **锂电池原理图:** 锂电池作用原理图，用中英文双语进行标注
> ![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211749359.png)

**7. 个人与教育应用**

> **个人名片:** ...请你为我生成一张个人介绍图，我需要向外展示...
> ![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211749848.png)

> **功夫图解:** 最近在学八部金刚功，让特朗普用中文图解的方式教下我
> ![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211749585.png)

> **古诗配图:** 请为“采菊东篱下，悠然见南山。”这首诗配图。
> ![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211749972.png)




---

把文章转成风格化的信息图

由于长文本渲染的能力增强，目前网上热门的测试，都是生成各种各样的信息图，有密密麻麻的知识解说类，还有写满一黑板、一墙壁的经典古诗词，或者数学题解答等等。

例如下面这个把我们输入的文字，原封不动的转成一本杂志的内容。

![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211815293.jpeg)

图片来源：X@fofrAI｜提示词：Put this whole text, verbatim, into a photo of a glossy magazine article on a desk, with photos, beautiful typography design, pull quotes and brave formatting. The text: [...the unformatted article]

还有网友直接丢给他一个 Markdown 文档或者 PDF，然后跟 Nano Banana Pro 说，将这个文档转成信息图，就得到了一个设计友好、信息准确的图片。

评论区都在说，插画师的时代，是不是也要结束了。

![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211815051.jpeg)

图片来源：X@tobi｜提示词：Make this markdown transcript into a infographic

因为 Nano Banana Pro 现在能使用谷歌搜索，并且推理和理解能力都有了大的提升，所以在生成信息图上，如果没有太严格的要求，直接告诉它要做一个什么主体的信息图就能实现，不需要纠结太多提示词的结构。

![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211815782.jpeg)

提示词：生成一张 2026 年中国放假安排的信息图，全部使用中文，4K画质，16:9

例如，当我们要他生成明年的节假日信息时，我看到 Gemini 里面给我的回复，有明确的使用 Google 搜索获取的信息结果，即多个官方的公告网页链接。

还有很多好看的信息图测试，网友们的提示词也比较简单，基本上都是「帮我生成一个xx的信息图」。

一张有趣的繁忙城镇信息图，展示动物们在繁忙城镇中上班的情景，并介绍它们从事的不同工作。

![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211815171.jpeg)

图片来源：X@unsoldwill｜提示词：Make a fun busy town infographic of animals going to work in a busy town showcasing different jobs.

一张 Stephen Biesty 风格的双层神经网络图。

![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211815485.jpeg)

图片来源：X@jon_barron｜提示词：Generate a diagram of a two-layer neural network in the style of Stephen Biesty

这位网友还把这张图片丢给 Google 的 Veo 3.1，让它动了起来。

![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211818883.gif)

将内容繁杂的文档，转换成清晰、可扫描的白板式信息图。

![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211815564.jpeg)

图片来源：X@denilgabani｜Convert the attached research paper into a single whiteboard-style image. Break down all key concepts, diagrams, insights, and relationships in a way that is easy to understand at a glance. Add clear visual notes, arrows, highlights, summaries, and clever student-style annotations so I can quickly grasp the full paper and take notes from it.

生成精彩的连环画

结合长文本渲染和强大的一致性保持，除了渲染文本较多的信息图，Nano Banana Pro 用来制作连环画是再合适不过，并且，它现在支持在一次请求中，生成多张照片。

有网友只是上传了一张图片，然后输入「根据这张图片创作并绘制一个多格漫画」的提示词，就得到了多张自己写好剧情的漫画，并且他还在继续更新后续的情节。

![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211815001.jpeg)

![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211815802.jpeg)

![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211815571.jpeg)

![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211815078.jpeg)

向左滑动查看更多内容，图片来源：X@DeryaTR_｜提示词：Create and draw a multi-panel comic based on this image.

![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211815944.gif)

还有只是提示说，生成几页以某个人的生活为主角的漫画。Nano Banana Pro 就能启用网络搜索，检索这个人的信息，还找到了他的 X 账号，根据他的 X 账号发布的内容信息来生成漫画。

![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211815799.jpeg)

![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211815787.jpeg)

![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211815170.jpeg)

向左滑动查看更多内容，图片来源：X@skirano（Pietro Schirano）｜提示词：Generate a few pages of comic starring the life of Pietro Schirano

![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211815556.gif)

如果你也有公开的社交媒体平台，不妨试试让 nano banana 也生成过去一周你的生活漫画。

我们试了试让 Nano Banana Pro 生成马斯克和奥特曼的生活漫画，在 Gemini 网页版里，它一次性给了我们三张图片，漫画的内容可以看出，它确实是有世界知识在的。

![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211815192.jpeg)

![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211815219.jpeg)

![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211815400.jpeg)

向左滑动查看更多内容，提示词：生成几张以 Elon Musk 和 Sam Altman 的生活为主角的真人漫画图片，全部用中文

![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211815730.gif)

至于之前一代的 Nano Banana 玩的那些一致性，现在的 Pro 版本一样表现出色。像是给一个模特穿上不同的衣服，保持模特和衣服不变；还有像是把一些 Logo 放到不同的周边上，或者对现有的产品图，进行一些小元素的替换，Nano Banana Pro 的表现都很好。

在 Google AI Studio 的官方案例中，也给出了多个信息图生成、和漫画制作的实例，它们搭建了多个利用 Nano Banana Pro 模型的项目。

![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211815607.png)

体验地址：https://aistudio.google.com/apps?source=showcase&showcaseTag=nano-banana

其中一个是我们只需要上传一个文章链接，他就能生成四种不同风格的信息图，包括趣味型、简洁型、暗黑科技风和现代编辑部风。还有只是丢给它一个模糊的概念，或者一个主题，就能为我们生成一张风格迥异的信息图。

![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211819956.gif)

![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211819250.gif)

![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211815521.gif)

![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211819338.gif)

![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211815781.gif)

![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211818587.gif)

向左滑动查看更多内容，项目介绍 Demo

![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211815977.gif)

4K 壁纸的生成，街机游戏的真人体验，以及更符合品牌使用的各种 Logo 贴图小工具等，在 Google AI Studio 上都有提供现成的项目。

![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211815280.jpeg)

下着雪的金门大桥 4K 壁纸

我们用「无限英雄」这个小项目生成一段马斯克和奥特曼的连环画，在预览连环画的过程中，我们还能选择剧情的走向，来决定接下来的漫画内容。

![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211815645.jpeg)

![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211815910.jpeg)

![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211815612.jpeg)

![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211815160.jpeg)

![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211815184.jpeg)

![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211815396.jpeg)

![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211815712.jpeg)

向左滑动查看更多内容，生成的漫画下载后是 PDF 文件

![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211815070.gif)

不过目前 Nano Banana Pro 模型 API 并不是免费调用，所以 AI Studio 的这六个项目，都需要绑定支付方式才能使用。

但是，这些项目都提供了源代码，我们可以在他们的基础上进行修改。通过查看背后的代码，也能看到背后的提示词。

![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211815915.png)

我们提取了其中一个项目的提示词，即输入链接生成四种风格的信息图。

首先我们可以使用下面的提示词，来对网页链接的内容进行总结，将其中的 **${url}** 替换为实际的，需要分析的文章链接。**${language}** 则可以直接替换为 Chinese，以中文呈现。

You are an expert Information Designer. Your goal is to extract the essential structure from a web page to create a clear, educational infographic.

Analyze the content at this URL: **${url}**

TARGET LANGUAGE: **${language}**.

Provide a structured breakdown specifically designed for visual representation in **${language}**:

1. INFOGRAPHIC HEADLINE: The core topic in 5 words or less (in **${language}**).
2. KEY TAKEAWAYS: The 3 to 5 most important distinct points, steps, or facts (in **${language}**). THESE WILL BE THE MAIN SECTIONS OF THE IMAGE.
3. SUPPORTING DATA: Any specific numbers, percentages, or very short quotes that add credibility.
4. VISUAL METAPHOR IDEA: Suggest ONE simple visual concept that best fits this content (e.g., "a roadmap with milestones", "a funnel", "three contrasting pillars", "a circular flowchart").

Keep the output concise and focused purely on what should be ON the infographic. Ensure all content is in **${language}.**

得到这一部分的文章总结后，我们就可以开始图像生成。

Create a professional, high-quality educational infographic based strictly on this structured content plan:

**${structuralSummary}**

VISUAL DESIGN RULES:

\- **${styleGuidelines}**

\- LANGUAGE: The text within the infographic MUST be written in **${language}**.

\- LAYOUT: MUST follow the "VISUAL METAPHOR IDEA" from the plan above if one was provided.

\- TYPOGRAPHY: Clean, highly readable sans-serif fonts. The "INFOGRAPHIC HEADLINE" must be prominent at the top.

\- CONTENT: Use the actual text from "KEY TAKEAWAYS" in the image. Do not use placeholder text like Lorem Ipsum.

\- GOAL: The image must be informative and readable as a standalone graphic.

图像生成的提示词比较简单，我们把之前文章链接分析的结果，替换掉其中的 **${structuralSummary}** 部分；然后 **${styleGuidelines}** 的选择，可以从官方项目中，提到的四种风格里面任选一个。

有趣且充满玩乐的风格 Fun & Playful：styleGuidelines = STYLE: Fun, playful, vibrant 2D vector illustrations. Use bright colors, rounded shapes, and a friendly tone.

简约极简风格 Clean Minimalist：styleGuidelines = STYLE: Ultra-minimalist. Lots of whitespace, thin lines, limited color palette (1-2 accent colors max). Very sophisticated and airy.

深色模式科技风Dark Mode Tech：styleGuidelines = STYLE: Dark mode technical aesthetic. Dark slate/black background with bright, glowing accent colors (cyan, lime green) for data points.

现代编辑风 Modern Editorial：styleGuidelines = STYLE: Modern, flat vector illustration style. Clean, professional, and editorial (like a high-end tech magazine). Cohesive, mature color palette.

照着这种方法，我们把 Nano Banana Pro 发布的那篇文章丢给 Gemini，得到了下面这几张信息图。

![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211815959.jpeg)

![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211815246.jpeg)

![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211815648.jpeg)

向左滑动查看更多内容

![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211815822.gif)

官方下场，7 个生图技巧

除了用这种已经写好的提示词，Google 也是煞费苦心给了一份详细的 Nano Banana Pro 使用技巧，一方面是生怕我们不会操作，导致对模型的误会。另一方面，其实 Google 是希望 Nano Banana Pro 不单只是一个用来玩玩的生图模型，他们真的期待能提升我们的生产力。

提示词的重要性，对于要获取精准控制的内容来说，除了模型自身的能力，剩下的决定因素就是它了。Google 再一次提到，**一个好的提示词，要明确的包括主题、构图、动作、地点、风格、和编辑说明。**

用简短的语言描述画面的主体，例如，具体说明图片中的人或物是什么？在构图上，告诉模型，照片是如何取景的？是特写、广角镜头、低角度镜头、还是人像镜头等。

![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211815961.jpeg)

举个例子：一只戴着小巫师帽的毛茸茸的三色猫，在日落时分阳光普照的草地上，施展着它的魔法，低角度镜头，照片写实主义

接下来是描述动作，画面的主体正在发生什么？以及是在哪里发生，描述具体的场景。最后再确定我们想要的照片风格，例如，3D 动画、黑色电影、水彩画、照片写实主义、20 世纪 90 年代产品摄影等，不同的整体美学风格选择。

**如果追求更可控的生图效果，Google 还提到了可以进一步完善相机、灯光和格式等细节，精细化提示词的内容。**

例如现在的 Nano Banana Pro 支持自定义构图和宽高比，我们可以选择 9:16 竖版海报，21:9 电影宽镜头等画面。

此外，在摄影和灯光细节上，Google 给的参考提示是，像电影摄影师一样指导拍摄，具体的用词可以尽可能专业化，例如，「低角度拍摄，浅景深（f/1.8）、黄金时段逆光，营造长阴影、电影级调色，采用柔和的蓝绿色调」；等提示词用语。

![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211815429.jpeg)

举例：一只戴着小巫师帽的毛茸茸的三色猫，在日落时分阳光普照的草地上，施展着它的魔法，低角度镜头，浅景深（f/1.8）、黄金时段逆光营造长阴影、电影级调色，采用柔和的蓝绿色调。照片写实主义。21:9 电影宽镜头。标题「猫猫施法」以可爱的彩虹字体显示在顶部。

在针对文本处理任务时，需要明确说明，某段文本的内容和显示位置，以及这段文本对应的字体。针对图表信息图，要在提示词里面，明确告诉模型对准确性的要求，并且确保自己的输入是正确的。

涉及到多图参考和图像编辑，需要明确告知模型每张图片的作用，以及具体需要编辑的地方。

掌握了提示词公式只是基础，接下来就是一些官方推荐的，Nano Banana Pro 具体的应用场景。

**1、让 AI 真的「写字」，而不是画鬼画符。**以前 AI 画图最怕出现文字，出来的都是乱码，新模型在文字渲染上有了巨大提升。我们可以直接要求它生成海报标题、复杂的图表、或者详细的模型说明。

![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211815477.jpeg)

提示词：制作一张信息图，用中文展示如何制作老北京豆汁儿。

**2、它是懂物理和历史的。**基于 Gemini 3 的推理能力，这个模型拥有更丰富的世界知识，它可以生成逻辑严密的图表，或符合历史事实的场景。

**3、最多支持 14 张图！**超级融合大法。这大概是新模型最强悍的功能之一。它允许我们输入 6 到 14 张（具体数量可以要看不同的平台）完全不相关的图片，让 AI 将它们融合创造出全新的画面。

利用多图输入功能，我们可以让同一个角色，在不同场景中保持面部和特征的一致性，甚至是在群像中也能保持相似度。这非常适合去做一些连环画或者分镜。

![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211815027.png)

提示词：将这些图像组合成一张 16:9 格式的适当排列的电影图像，并将模特身上的裙子换成图像中的裙子。

**4、精确调整大小。**尝试不同的宽高比，并在各种产品上生成 1K、2K 或 4K 分辨率的清晰视觉效果。

**5、「指哪打哪」的精准修图。**Google 把这叫做工作室级别的控制编辑，实现更专业的效果。

**6、品牌设计神器：自动贴图。**对于设计师来说，和初代 nano banana 相比，它的一致性保持能力更强。品牌公司可以让 AI 将对应 Logo、图案或艺术作品印在 3D 物体上，同时贴上去的 Logo，会自动调整到原图自然的光影和纹理。

**7、跨语言无缝翻译**，它不仅是一个生图工具，还能直接「翻译」图片里的文字。

![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211815001.png)

提示词：将三个黄蓝罐头上的所有英文文字翻译成韩语，其他内容保持不变。

虽然 Nano Banana Pro 很强，但在官方文档里，他们也坦诚地列出了一些目前的局限性，大家使用时可以留意一下。主要是一些极小的文字渲染、复杂的拼写有时还是会出错。

另外，如果你用它生成数据图表或信息图，他们也提醒，一定要人工核对数据。AI 虽然有逻辑，但偶尔也会一本正经地胡说八道，毕竟 AI 幻觉有多严重，我们都有目共睹。

最后是在进行一些极其复杂的光照改变，或图像融合时，生成的图片，偶尔会出现不自然的伪影。

![图片](https://maynor123-1301929665.cos.ap-guangzhou.myqcloud.com/202511211815512.png)

**目前该模型已在 Gemini App 和 Gemini 网页版上线**，而在 AI Studio 和 Vertex 平台则需要使用付费 API 才可以体验。





国内使用渠道：

https://maynorai.top/list/#/home

https://draw.claude-opus.top/list/#/home

https://nanobanana-free.top/



中转API：

https://apipro.maynor1024.live/
