document.addEventListener('DOMContentLoaded', () => {
    const contentArea = document.getElementById('content-area');
    const modeLinks = {
        wordList: document.getElementById('mode-word-list'),
        flashcard: document.getElementById('mode-flashcard'),
        spelling: document.getElementById('mode-spelling'),
        choice: document.getElementById('mode-choice'),
    };
    const rangeStartInput = document.getElementById('range-start');
    const rangeEndInput = document.getElementById('range-end');
    const setRangeBtn = document.getElementById('set-range');

    const words = [
        { word: "cast", definition: "v.投,拋 n. 全体演员" },
        { word: "steady", definition: "a.稳固的,坚定的" },
        { word: "vertebrate", definition: "n.脊椎动物" },
        { word: "preservation", definition: "n.保存" },
        { word: "rural", definition: "a.农村的,田园的,有乡村风味的" },
        { word: "restrict", definition: "vt.限制,约束" },
        { word: "stretch", definition: "v./n.伸展,延伸.n.一段时间" },
        { word: "critic", definition: "n.批评家,评论家" },
        { word: "authority", definition: "n.权威,权力,专家" },
        { word: "resist", definition: "vt.抵抗,反抗,忍耐" },
        { word: "vessel", definition: "n.船,容器,血管" },
        { word: "appropriate", definition: "a.适当的" },
        { word: "loose", definition: "n.解放,放任.v.弄松,释放" },
        { word: "parasite", definition: "n.寄生虫,食客" },
        { word: "contemporary", definition: "n.同时代的人.a.当代的" },
        { word: "meteorite", definition: "n.陨石,流星" },
        { word: "tribe", definition: "n.部落,部族" },
        { word: "stencil", definition: "n.模版,蜡纸.vt.用蜡纸印刷,用模板写" },
        { word: "motif", definition: "n.主题,主旨" },
        { word: "texture", definition: "n.质地,(材料等的)结构" },
        { word: "civilization", definition: "n.文明,文化" },
        { word: "merchant", definition: "n.商人" },
        { word: "Atlantic", definition: "n.大西洋.a.大西洋的" },
        { word: "composer", definition: "n.作家,作曲家" },
        { word: "trap", definition: "v.设圈套,陷入(困境).n.圈套" },
        { word: "elaborate", definition: "a.详尽的,复杂的.v.详述" },
        { word: "cue", definition: "n.暗示,提示,线索" },
        { word: "appeal", definition: "n./v.呼吁,上诉,感染力" },
        { word: "sustain", definition: "vt.支撑,维持" },
        { word: "fuller", definition: "n.漂洗工" },
        { word: "pot", definition: "n.罐,壶" },
        { word: "long-term", definition: "a.长期的" },
        { word: "Pacific", definition: "n.太平洋" },
        { word: "frontier", definition: "n.国境,边疆" },
        { word: "compact", definition: "vt.使坚实.n.契约.a.紧凑的,坚实的" },
        { word: "comprehension", definition: "n.理解,包含" },
        { word: "moisture", definition: "n.潮湿,湿气,水分" },
        { word: "Mediterranean", definition: "n.地中海" },
        { word: "corridor", definition: "n.走廊" },
        { word: "Paleolithic", definition: "a.旧石器时代的" },
        { word: "fracture", definition: "v.(使)破碎,(使)破裂" },
        { word: "deposit", definition: "v.沉淀,存放,堆积.n.存款,堆积物" },
        { word: "inhabitant", definition: "n.居民,居住者" },
        { word: "latitude", definition: "n.纬度,范围" },
        { word: "clothe", definition: "vt.给...穿衣,覆盖" },
        { word: "coin", definition: "n.硬币.vt.铸造(硬币),创造(新词)" },
        { word: "release", definition: "vt./n.释放,解脱,发射 vt.发布(行)" },
        { word: "organ", definition: "n.器官,机构" },
        { word: "earthenware", definition: "n.土器,陶器" },
        { word: "refuse", definition: "vt.拒绝,抵制" },
        { word: "hill", definition: "n.小山,丘陵" },
        { word: "consistent", definition: "a.一致的,调和的" },
        { word: "wagon", definition: "n.四轮马车,货车" },
        { word: "fragment", definition: "n.碎片.v.(使)成碎片" },
        { word: "rite", definition: "n.仪式,典礼" },
        { word: "clue", definition: "n.线索" },
        { word: "inhabit", definition: "vt.居住于,栖息" },
        { word: "locust", definition: "n.蝗虫" },
        { word: "federal", definition: "a.联邦的,联合的" },
        { word: "govern", definition: "v.统治,支配,管理" },
        { word: "philosophy", definition: "n.哲学" },
        { word: "endure", definition: "v.耐久,忍耐" },
        { word: "offspring", definition: "n.儿女,子孙" },
        { word: "Hawaii", definition: "n.夏威夷" },
        { word: "altitude", definition: "n.高度(海拔)" },
        { word: "brick", definition: "n.砖块" },
        { word: "convert", definition: "vt.使转变,转换" },
        { word: "celebrity", definition: "n.名声,名人" },
        { word: "graze", definition: "v.放牧,掠过,擦伤.n.擦伤(处)" },
        { word: "devise", definition: "vt.设计,发明" },
        { word: "territory", definition: "n.领土,地域" },
        { word: "interact", definition: "vi.互相作用,互相影响" },
        { word: "diameter", definition: "n.直径" },
        { word: "gulf", definition: "n.海湾,深渊" },
        { word: "bond", definition: "n.结合,协定.v.使结合,粘合" },
        { word: "cluster", definition: "n.串,丛.vi.群集.vt.集中" },
        { word: "stage", definition: "n.舞台,阶段" },
        { word: "calcium", definition: "n.钙" },
        { word: "grain", definition: "n.谷物,颗粒.v.形成(颗粒),(用谷物)喂养" },
        { word: "vital", definition: "a.重大的,至关重要的" },
        { word: "poetry", definition: "n.诗" },
        { word: "notice", definition: "n.通知.v.注意到" },
        { word: "inland", definition: "a.内陆的,国内的" },
        { word: "irrigation", definition: "n.灌溉,冲洗" },
        { word: "oppose", definition: "v.反对,对抗" },
        { word: "portrait", definition: "n.肖像,人像" },
        { word: "agent", definition: "n.代理(商)" },
        { word: "weave", definition: "v.织,编" },
        { word: "scatter", definition: "vt.撒(播).vi.分(消)散" },
        { word: "empty", definition: "a.空的.v.(使)空,倒出" },
        { word: "possess", definition: "vt.占有,拥有" },
        { word: "pullman", definition: "n.卧车,普式火车" },
        { word: "islander", definition: "n.岛上居民" },
        { word: "recognition", definition: "n.识别,确认,表彰,承认" },
        { word: "tile", definition: "n.瓦片,瓷砖" },
        { word: "indication", definition: "n.指示,表示,迹象" },
        { word: "implement", definition: "vt.履行,实施.n.工(器,用)具" },
        { word: "characterize", definition: "vt.以...为特征" },
        { word: "severe", definition: "a.严厉的,剧烈的,严重的,朴素的" },
        { word: "limitation", definition: "n.限制,局限性" },
        { word: "sculpture", definition: "n.雕刻,雕塑 v.从事雕刻" },
        { word: "proxy", definition: "n.代理人" },
        { word: "neolithic", definition: "a.新石器时代的" },
        { word: "voyage", definition: "n.航海,航行" },
        { word: "sediment", definition: "n.沉淀物,沉积物" },
        { word: "spore", definition: "n.孢子" },
        { word: "Texas", definition: "n.德克萨斯州(美国州名)" },
        { word: "strain", definition: "n./v.拉紧,紧张,劳累" },
        { word: "imitate", definition: "v.模仿,仿制" },
        { word: "timber", definition: "n.木材,木料" },
        { word: "rank", definition: "n.等级,阶层.v.排列" },
        { word: "concentrate", definition: "v.专心,集中,浓缩" },
        { word: "migratory", definition: "a.迁移的,流浪的" },
        { word: "container", definition: "n.容器,集装箱" },
        { word: "prior", definition: "a.优先的,在前的" },
        { word: "sink", definition: "v.下沉.n.水槽" },
        { word: "ecology", definition: "n.生态学" },
        { word: "runoff", definition: "n.径流量,流出" },
        { word: "watercolor", definition: "n.水彩颜料,水彩画(法)" },
        { word: "stratum", definition: "n.地层,阶层" },
        { word: "elite", definition: "n.精英,精华" },
        { word: "streamline", definition: "a.流线型的" },
        { word: "self", definition: "n.自己,自我" },
        { word: "archaeological", definition: "a.考古学的" },
        { word: "reward", definition: "n.报酬.vt.酬劳" },
        { word: "mantle", definition: "n.斗蓬.v.披风,覆盖" },
        { word: "subsequent", definition: "a.后来的,随后的" },
        { word: "episode", definition: "n.一段情节,插曲,插话" },
        { word: "primitive", definition: "a.原始的,远古的,简单的" },
        { word: "emergence", definition: "n.浮现,露出" },
        { word: "Sumerian", definition: "n.闪族人,苏美尔人[语]" },
        { word: "sort", definition: "n.种类 v.分类,拣选" },
        { word: "industrialize", definition: "vt.使工业化" },
        { word: "burial", definition: "n.埋葬" },
        { word: "conduct", definition: "n.行为.v.引导,管理" },
        { word: "hominid", definition: "n.原始人类" },
        { word: "laboratory", definition: "n.实验室" },
        { word: "droplet", definition: "n.小滴" },
        { word: "compass", definition: "n.罗盘,指南针" },
        { word: "mode", definition: "n.方式,模式" },
        { word: "atomic", definition: "a.原子的,原子能的,微粒子的" },
        { word: "entertainment", definition: "n.款待,娱乐" },
        { word: "purchase", definition: "vt.购买.n.购买,购买的物品" },
        { word: "sanctuary", definition: "n.避难所" },
        { word: "theatrical", definition: "a.戏剧性的" },
        { word: "profession", definition: "n.职业,专业" },
        { word: "tendency", definition: "n.趋向,倾向" },
        { word: "gravel", definition: "n.砂砾(层)" },
        { word: "laborer", definition: "n.劳动者" },
        { word: "proton", definition: "n.质子" },
        { word: "commerce", definition: "n.商业,贸易" },
        { word: "fireplace", definition: "n.壁炉" },
        { word: "aluminum", definition: "n.铝" },
        { word: "firm", definition: "n.公司.a.结实的,稳固的" },
        { word: "collide", definition: "vi.碰撞,抵触,冲突" },
        { word: "puzzle", definition: "n.难题.v.(使)迷惑" },
        { word: "twist", definition: "v.缠绕,拧,扭曲.n.转折" },
        { word: "dramatically", definition: "ad.戏剧地,引人注目地" },
        { word: "dependence", definition: "n.依靠,信任" },
        { word: "struggle", definition: "vi.努力,奋斗,挣扎" },
        { word: "irregular", definition: "a.不规则的,无规律的,不合法的" },
        { word: "colonization", definition: "n.殖民地化,殖民" },
        { word: "fund", definition: "n.资金.v.支助,投资" },
        { word: "shale", definition: "n.页岩,泥板岩" },
        { word: "historian", definition: "n.历史学家" },
        { word: "hyper", definition: "a.亢奋的,高度紧张的" },
        { word: "satellite", definition: "n.人造卫星" },
        { word: "emit", definition: "vt.发出,放射" },
        { word: "retreat", definition: "vi.撤退,退却" },
        { word: "deficiency", definition: "n.缺乏,不足,缺陷" },
        { word: "rotate", definition: "v.(使)旋转,(使)轮流" },
        { word: "invertebrate", definition: "a./n.无脊椎的,无骨气的人" },
        { word: "symbiotic", definition: "a.共生的" },
        { word: "alternative", definition: "a.选择性的,二中择一的" },
        { word: "bridge", definition: "n.桥.vt.架桥,渡过,消除(甲、乙间的)隔阂/鸿沟/分歧" },
        { word: "vertical", definition: "a.垂直的,直立的" },
        { word: "circle", definition: "n.圆(圈).v.围着,盘旋" },
        { word: "distinguish", definition: "v.区别,辨别,使杰出" },
        { word: "abundance", definition: "n.丰富,充裕" },
        { word: "Tennessee", definition: "n.田纳西州" },
        { word: "exploit", definition: "vt.开拓,开采,剥削.n.[pl.]业绩" },
        { word: "eruption", definition: "n.爆发,火山灰" },
        { word: "stable", definition: "a.稳定的,坚定的,牢固的" },
        { word: "crop", definition: "n.农作物.vt.剪短,修剪" },
        { word: "politician", definition: "n.政治家,政客" },
        { word: "glacier", definition: "n.冰河,冰川" },
        { word: "iceberg", definition: "n.冰山,冷若冰霜的人" },
        { word: "ceramic", definition: "a.陶器的.n.陶瓷制品" },
        { word: "breed", definition: "v.教养,抚养.n.品种" },
        { word: "format", definition: "n.设计,格式,版式" },
        { word: "confirm", definition: "v.确定,确认,批准" },
        { word: "specimen", definition: "n.范例,标本,样品" },
        { word: "tide", definition: "n.潮汐,潮流" },
        { word: "ray", definition: "n.光线,射线" },
        { word: "weigh", definition: "vi.称得重量.vt.称...的重量,权衡" },
        { word: "encounter", definition: "v./n.遭遇,遇到,邂逅" },
        { word: "interior", definition: "a.内部的,本质的" },
        { word: "costume", definition: "n.装束,服装" },
        { word: "nouveau", definition: "a.新近到达的,最近产生的" },
        { word: "pleistocene", definition: "n./a.[地]更新世(的)(一段时期)" },
        { word: "gland", definition: "n.腺" },
        { word: "emission", definition: "n.散发,发行,排放" },
        { word: "log", definition: "n.原木,航海日志.vt.正式记录" },
        { word: "vent", definition: "n.出口.v.排出,发泄" },
        { word: "glaze", definition: "vi.变呆滞.vt.上釉.n.釉(料)" },
        { word: "Martian", definition: "n./a.火星人(的)" },
        { word: "potash", definition: "n.碳酸钾,苛性钾" },
        { word: "latter", definition: "a.后者的,后面的,近来的" },
        { word: "occurrence", definition: "n.发生,出现,事件" },
        { word: "prevail", definition: "vi.流行,获胜,劝说,诱使" },
        { word: "reliance", definition: "n.信任,信心,依靠" },
        { word: "roof", definition: "n.屋顶,最高处,顶部" },
        { word: "mercantile", definition: "a.贸易的,商业的" },
        { word: "overall", definition: "a.全部的,全面的" },
        { word: "fossilize", definition: "v.成化石,陈腐" },
        { word: "chain", definition: "n.链(条),一连串,一系列.vt.用链条栓住" },
        { word: "textile", definition: "n.纺织品.a.纺织的" },
        { word: "pose", definition: "n.姿势,姿态.v.摆姿势" },
        { word: "barrier", definition: "n.障碍物,栅栏" },
        { word: "cylinder", definition: "n.圆筒,圆柱体" },
        { word: "countercurrent", definition: "n.逆流,反向电流" },
        { word: "score", definition: "n.得分,二十.v.得(分),刻痕于" },
        { word: "potter", definition: "n.陶工,制陶工人" },
        { word: "aesthetic", definition: "a.美学的,审美的" },
        { word: "hemisphere", definition: "n.半球" },
        { word: "excavate", definition: "v.挖掘,开凿,发掘" },
        { word: "nucleus", definition: "n.核子" },
        { word: "erode", definition: "v.侵蚀,腐蚀" },
        { word: "ensure", definition: "v.确保,保证" },
        { word: "Mesozoic", definition: "n./a.中生代(的)" },
        { word: "orbit", definition: "n.轨道.v.(绕...)作轨道运行" },
        { word: "blow", definition: "v.风吹,吹气于.n.打击" },
        { word: "fluid", definition: "n.液体.a.流体的,流动的" },
        { word: "grind", definition: "v.磨(碎),折磨.n.苦差事" },
        { word: "flat", definition: "a.平坦的.n.公寓套房 ad.平地" },
        { word: "cease", definition: "v.停止,终了" },
        { word: "incorporate", definition: "v.合并,组成公司" },
        { word: "biologist", definition: "n.生物学家" },
        { word: "aboriginal", definition: "a.土著的,原来的,原始的" },
        { word: "decorative", definition: "a.装饰的" },
        { word: "automatically", definition: "ad.自动地,机械地,无意识地" },
        { word: "crude", definition: "a.天然的,未加工的,粗鲁的" },
        { word: "drawing", definition: "n.图画,制图" },
        { word: "eliminate", definition: "v.排除,除去" },
        { word: "income", definition: "n.收入,收益" },
        { word: "Mississippi", definition: "n.密西西比河,密西西比州(美州名)" },
        { word: "helium", definition: "n.氦" },
        { word: "terrestrial", definition: "a.陆地的,地球的" },
        { word: "separation", definition: "n.分离,分开" },
        { word: "recharge", definition: "vt.再充电,再进攻,恢复精力" },
        { word: "pastoralism", definition: "n.田园主义,牧歌体" },
        { word: "perceive", definition: "v.察觉,感知,理解" },
        { word: "penetrate", definition: "v.穿透,渗透,看穿" },
        { word: "collective", definition: "a.集体的,共同的.n.团体,集体" },
        { word: "surge", definition: "n./v.(波涛)汹涌,涌起" },
        { word: "nerve", definition: "n.神经,胆量,勇气" },
        { word: "salinity", definition: "n.盐分,盐度" },
        { word: "engrave", definition: "v.雕刻,使铭记" },
        { word: "strait", definition: "n.地峡.n.海峡,[常 pl.]困境,窘境" },
        { word: "flake", definition: "n.薄片.v.使成薄片,剥落" },
        { word: "disadvantage", definition: "n.不利,缺点,劣势" },
        { word: "carve", definition: "v.雕刻,切割" },
        { word: "constitute", definition: "vt.构成,组成,建立" },
        { word: "graham", definition: "a.全麦(面粉)的" },
        { word: "impulse", definition: "n.冲动.vt.推动" },
        { word: "reference", definition: "n.提及,涉及,参考,推荐信(或人)" },
        { word: "toxic", definition: "a.有毒的,中毒的" },
        { word: "turnpike", definition: "n.收费公路,收费口" },
        { word: "load", definition: "n.负荷,装载量.v.装(载),使负担" },
        { word: "trigger", definition: "vt.引发,引起.n.板机" },
        { word: "mixture", definition: "n.混合(物)" },
        { word: "geology", definition: "n.地质学,地质概况" },
        { word: "spin", definition: "v.旋转,纺纱" },
        { word: "expressive", definition: "a.表达的,意味深长的" },
        { word: "row", definition: "n.排,行v.划(船)" },
        { word: "precede", definition: "v.领先(于),在...之前,先于" },
        { word: "secrete", definition: "vt.隐藏,隐匿,分泌" },
        { word: "discourage", definition: "vt.使气馁,阻碍" },
        { word: "reverse", definition: "v.颠倒,倒转.n.逆境.a.反向的" },
        { word: "tremendous", definition: "a.巨大的,惊人的" },
        { word: "astronomer", definition: "n.天文学家" },
        { word: "bare", definition: "a.赤裸的,无遮蔽的.vt.露出" },
        { word: "inhibit", definition: "vt.阻止,妨碍,抑制" },
        { word: "alkali", definition: "n.碱.a.碱性的" },
        { word: "complexity", definition: "n.复杂(性),复杂的事物" },
        { word: "spectrum", definition: "n.光谱" },
        { word: "sedimentary", definition: "a.沉积的,沉淀性的" },
        { word: "accelerate", definition: "v.加速,促进" },
        { word: "turbine", definition: "n.涡轮" },
        { word: "regulation", definition: "n.规则" },
        { word: "enclose", definition: "vt.放入封套,围绕" },
        { word: "fragile", definition: "a.易碎的,脆的" },
        { word: "domestic", definition: "a.国内的,家庭的" },
        { word: "fluctuate", definition: "v.变动,波动" },
        { word: "furnace", definition: "n.炉子,熔炉" },
        { word: "reptile", definition: "n.爬虫动物" },
        { word: "popularity", definition: "n.普及,流行" },
        { word: "bake", definition: "v.烘焙,烤" },
        { word: "institution", definition: "n.公共机构,协会,制度" },
        { word: "symbolic", definition: "a.象征的,符号的" },
        { word: "portion", definition: "n.一部分" },
        { word: "conserve", definition: "vt.保存,保藏" },
        { word: "guild", definition: "n.行会,协会" },
        { word: "pit", definition: "n.深坑,陷阱 v.窖藏,使凹下" },
        { word: "flourish", definition: "v./n.繁荣,茂盛" },
        { word: "traffic", definition: "n.交通,运输.vi.(非法)交易" },
        { word: "Himalaya", definition: "n.喜马拉雅山" },
        { word: "digest", definition: "v.消化,融会贯通.n.文摘" },
        { word: "application", definition: "n.请求,申请,应用" },
        { word: "crack", definition: "n.裂缝,噼啪声.v.(使)破裂" },
        { word: "undergo", definition: "vt.经历,遭受" },
        { word: "gravity", definition: "n.地心引力,重力" },
        { word: "occasionally", definition: "ad.有时候,偶而" },
        { word: "explorer", definition: "n.探险者" },
        { word: "educate", definition: "v.教育,培养" },
        { word: "present-day", definition: "a.当前的,当代的" },
        { word: "precipitation", definition: "n.仓促,促成,降雨量" },
        { word: "mercy", definition: "n.仁慈,宽恕,怜悯,幸运" },
        { word: "lewis", definition: "n.[机] 吊楔,起重爪" },
        { word: "aurora", definition: "n.黎明的女神,极光" },
        { word: "oceanic", definition: "a.海洋的,广阔无垠的" },
        { word: "recall", definition: "vt.回忆,记起.n.召回" },
        { word: "publisher", definition: "n.出版者,发行人" },
        { word: "seat", definition: "vt.使坐下,容纳n.座位" },
        { word: "touch", definition: "v.接触,达到,感动.n.润色" },
        { word: "boom", definition: "n.繁荣.v.发隆隆声,兴隆" },
        { word: "outflow", definition: "n.流出(物)" },
        { word: "lens", definition: "n.透镜,镜头" },
        { word: "durable", definition: "a.持久的,耐用的" },
        { word: "undertake", definition: "v.承担,采取" },
        { word: "finance", definition: "n.财政.v.供给...经费,筹措资金" },
        { word: "seal", definition: "n.封铅.vt.封,密封" },
        { word: "assumption", definition: "n.假定,设想" },
        { word: "algae", definition: "n.水藻" },
        { word: "Ohio", definition: "n.俄亥俄州(美国州名)" },
        { word: "exceed", definition: "v.超越,胜过" },
        { word: "reform", definition: "vt./n.改革,革新" },
        { word: "switch", definition: "n.开关.vt.转换,转变" },
        { word: "infantile", definition: "a.幼稚的,幼儿的" },
        { word: "statue", definition: "n.塑像,雕像" },
        { word: "crucial", definition: "a.至关紧要的" },
        { word: "amnesia", definition: "n.健忘症,记忆缺失" },
        { word: "nutritional", definition: "a.营养的,滋养的" },
        { word: "contradict", definition: "vt.同...矛盾,同...抵触,反驳" },
        { word: "verbal", definition: "a.口头的,动词的" },
        { word: "artificial", definition: "a.人造的,虚伪的" },
        { word: "attach", definition: "v.缚上,配属,隶属于" },
        { word: "pebble", definition: "n.小圆石,小鹅卵石" },
        { word: "supplement", definition: "n.补充,附录" },
        { word: "object", definition: "n.物体,目标.v.反对,拒绝" },
        { word: "delivery", definition: "n.递送,交付,传输" },
        { word: "span", definition: "n.跨度 vt.横越,持续" },
        { word: "solar", definition: "a.太阳(能)的" },
        { word: "comparable", definition: "a.可比较的,比得上的" },
        { word: "satisfy", definition: "v.满足,使满意" },
        { word: "panel", definition: "n.面,板,专门小组" },
        { word: "react", definition: "vi.起反应,起作用" },
        { word: "freshwater", definition: "n.淡水" },
        { word: "successive", definition: "a.连续的,接连的" },
        { word: "official", definition: "n.官员.a.官方的,正式的" },
        { word: "appreciate", definition: "v.赏识,感激.vi.增值" },
        { word: "outline", definition: "n.大纲.vt.画轮廓,略述" },
        { word: "crustal", definition: "a.地壳的" },
        { word: "carbohydrate", definition: "n.碳水化合物,醣类" },
        { word: "periodical", definition: "a.周期的,定期的n.期刊,杂志" },
        { word: "strengthen", definition: "v.加强,巩固" },
        { word: "resemble", definition: "v.象,类似于" },
        { word: "quartz", definition: "n.石英" },
        { word: "sociologist", definition: "n.社会学家" },
        { word: "classic", definition: "a.最优秀的,标准的.n.杰作" },
        { word: "sum", definition: "n.总数,总和.vi.共计,概括" },
        { word: "delicate", definition: "a.精巧的,精致的" },
        { word: "tension", definition: "n.紧张,拉力.vt.使拉紧,使绷紧" },
        { word: "colleague", definition: "n.同事,同僚" },
        { word: "Indo-European", definition: "n.印欧语系,说印欧语的人" },
        { word: "interpretation", definition: "n.解释,阐明" },
        { word: "seafloor", definition: "n.海底" },
        { word: "accumulate", definition: "v.积聚,堆积" },
        { word: "bronze", definition: "n.青铜" },
        { word: "medium", definition: "n.媒体,方法.a.中间的" },
        { word: "artisan", definition: "n.工匠,技工" },
        { word: "dome", definition: "n.圆屋顶" },
        { word: "script", definition: "n.手稿,手迹,剧本" },
        { word: "clay", definition: "n.黏土,泥土 vt.用黏土处理" },
        { word: "distant", definition: "a.远的,疏远的,遥远的" },
        { word: "found", definition: "v.建立,创办" },
        { word: "metallic", definition: "a.金属(性)的" },
        { word: "thrive", definition: "v.兴旺,繁荣,茁壮成长" },
        { word: "motor", definition: "n.发动机" },
        { word: "partially", definition: "ad.部分地" },
        { word: "vehicle", definition: "n.交通工具,车辆" },
        { word: "investigation", definition: "n.调查,研究" },
        { word: "drain", definition: "vt.排走.vi.减少.n.排水,消耗" },
        { word: "marsh", definition: "n.湿地,沼泽" },
        { word: "aquifer", definition: "n.含水土层,蓄水层" },
        { word: "freight", definition: "n.货物.vt.运送" },
        { word: "manufacture", definition: "vt./n.制造,加工" },
        { word: "intrigue", definition: "v.激起兴趣,耍阴谋.n.阴谋,密谋" },
        { word: "artwork", definition: "n.艺术品,美术品" },
        { word: "hatch", definition: "n.孵化.vt.孵出,策划" },
        { word: "shore", definition: "n.岸,海滨.vt.(up)支撑,支持" },
        { word: "derive", definition: "v.获取,得自,起源" },
        { word: "utilize", definition: "vt.利用" },
        { word: "classification", definition: "n.分类,分级" },
        { word: "tube", definition: "n.管子" },
        { word: "proportion", definition: "n.比例,部分,面积" },
        { word: "kiln", definition: "n.窑,炉" },
        { word: "implication", definition: "n.含意,暗示" },
        { word: "expert", definition: "n.专家,行家" },
        { word: "awareness", definition: "n.知道,晓得" },
        { word: "drag", definition: "v.拖,拖曳.n.累赘" },
        { word: "indium", definition: "n.[化]铟" },
        { word: "velocity", definition: "n.速度,速率" },
        { word: "fungus", definition: "n.真菌,真菌类植物" },
        { word: "burst", definition: "v.爆裂,炸破.n.爆炸,爆发" },
        { word: "academy", definition: "n.学院,学会,专科学校,研究院" },
        { word: "refine", definition: "vt.精炼,精制,完善" },
        { word: "imprint", definition: "v.留下烙印" },
        { word: "intellectual", definition: "a.智力的,有智力的n.知识分子" },
        { word: "fiber", definition: "n.光纤,纤维" },
        { word: "impression", definition: "n.印象,感想" },
        { word: "Pennsylvania", definition: "n.宾夕法尼亚州(美国州名)" },
        { word: "iridium", definition: "n.[化]铱" },
        { word: "porcelain", definition: "n.瓷,瓷器" },
        { word: "cent", definition: "n.(货币单位)分,分币" },
        { word: "mobility", definition: "n.活动性,灵活性" },
        { word: "inference", definition: "n.推论,推断,推理" },
        { word: "settlement", definition: "n.解决,协议,居留地" },
        { word: "integrate", definition: "v.使成整体,结合" },
        { word: "spray", definition: "n.喷雾.vt.喷射" },
        { word: "cereal", definition: "n.谷类食品" },
        { word: "footprint", definition: "n.足迹" },
        { word: "sponsor", definition: "n.发起人.v.发起,主办,赞助" },
        { word: "surplus", definition: "n.剩余,过剩" },
        { word: "unpredictable", definition: "a.不可预知的" },
        { word: "automobile", definition: "n.汽车" },
        { word: "collector", definition: "n.收藏家,征收者" },
        { word: "folk", definition: "n.人们a.民间的" },
        { word: "enzyme", definition: "n.[生化]酶" },
        { word: "irrigate", definition: "v.灌溉" },
        { word: "retrieve", definition: "v.恢复,挽回,取回,检索" },
        { word: "volcanic", definition: "a.火山的,猛烈的,易突然发作的" },
        { word: "printer", definition: "n.印刷工,打印机" },
        { word: "silt", definition: "n.淤泥.v.(使)淤塞" },
        { word: "roll", definition: "v.(使)滚动,卷.n.卷,名单" },
        { word: "acre", definition: "n.英亩,地产" },
        { word: "nuclear", definition: "a.核子的,原子能的,核心的" },
        { word: "nutrition", definition: "n.营养,营养学" },
        { word: "larva", definition: "n.幼虫" },
        { word: "exposition", definition: "n.展览会,说明" },
        { word: "peasant", definition: "n.农夫" },
        { word: "plastic", definition: "n.塑料(制品).a.塑胶的" },
        { word: "genetic", definition: "a.遗传的,起源的,基因的" },
        { word: "Nile", definition: "n.尼罗河" },
        { word: "chief", definition: "n.首领.a.主要的,首要的" },
        { word: "canopy", definition: "n.天篷,遮篷" },
        { word: "beneficial", definition: "a.有利的,有益的" },
        { word: "fertilizer", definition: "n.肥料" },
        { word: "rainwater", definition: "n.雨水" },
        { word: "satire", definition: "n.讽刺(文学)" },
        { word: "epoch", definition: "n.新纪元,时代" },
        { word: "impressive", definition: "a.给人深刻印象的,感人的" },
        { word: "brush", definition: "n.刷子,毛刷,画笔.vt.刷,掸,拂" },
        { word: "Massachusetts", definition: "n.马萨诸塞(美国州名)" },
        { word: "realism", definition: "n.现实主义,实在论" },
        { word: "foundation", definition: "n.基础,根本,创立" },
        { word: "compound", definition: "n.混合物,大院.vt.加重" },
        { word: "statistic", definition: "n.统计数值" },
        { word: "evident", definition: "a.明显的,显然的" },
        { word: "race", definition: "n.种族.v.赛跑" },
        { word: "column", definition: "n.圆柱,专栏" },
        { word: "barren", definition: "a.不生育的,贫瘠的.n.荒地" },
        { word: "prosperity", definition: "n.繁荣,成功" },
        { word: "lava", definition: "n.熔岩,火山岩" },
        { word: "pace", definition: "n.步调.v.踱步" },
        { word: "sandstone", definition: "n.沙岩" },
        { word: "empire", definition: "n.帝国" },
        { word: "fern", definition: "n.蕨类植物" },
        { word: "contract", definition: "n.合同.v.缩小,订合同" },
        { word: "skeleton", definition: "n.骨架,纲要,骨骼" },
        { word: "ice-free", definition: "a.不冻的" },
        { word: "deco", definition: "n.装饰派艺术" },
        { word: "descriptive", definition: "a.口述的,叙述的" },
        { word: "ruminant", definition: "n./a.反刍动物(的),沉思的" },
        { word: "stoneware", definition: "n.瓷器" },
        { word: "barb", definition: "n.鱼钩.vt.装倒钩于" },
        { word: "warren", definition: "n.养兔场,大杂院" },
        { word: "forage", definition: "n.草料 v. 捕食" },
        { word: "interval", definition: "n.间隔,距离" },
        { word: "norm", definition: "n.标准,规范,[pl.]准则" },
        { word: "nitinol", definition: "n.[冶]镍钛诺(镍和钛的非磁性合金)" },
        { word: "condense", definition: "v.(使)浓缩,精简,冷凝" },
        { word: "cope", definition: "v.处理,对付" },
        { word: "modify", definition: "v.更改,修改,修饰" },
        { word: "frost", definition: "n.霜.v.结霜" },
        { word: "client", definition: "n.[计]顾客,客户,委托人" },
        { word: "potentially", definition: "ad.潜在地" },
        { word: "fertile", definition: "a.肥沃的,富饶的,能繁殖的" },
        { word: "attain", definition: "vt.达到,获得,实现" },
        { word: "facilitate", definition: "vt.促进,帮助" },
        { word: "flexible", definition: "a.易弯曲的,灵活的,柔韧的" },
        { word: "precisely", definition: "ad.正好,精确地" },
        { word: "pellet", definition: "n.小球" },
        { word: "egalitarian", definition: "a.平等主义的" },
        { word: "plover", definition: "n.千鸟" },
        { word: "shelve", definition: "v.搁置" },
        { word: "aggression", definition: "n.进攻,侵略" },
        { word: "judge", definition: "n.法官,裁判员.v.断定,裁决" },
        { word: "peninsula", definition: "n.半岛" },
        { word: "progressive", definition: "a.先进的,前进的.n.进步分子" },
        { word: "transform", definition: "vt.改变,转换,改革" },
        { word: "adjacent", definition: "a.邻近的,毗连的" },
        { word: "desertification", definition: "n.荒漠化,沙漠化" },
        { word: "downward", definition: "a.向下的" },
        { word: "warbler", definition: "v.&.n.(鸟)鸣,颤声" },
        { word: "stimulus", definition: "n.促进(因素),刺激(物),激励" },
        { word: "specialization", definition: "n.特殊化,专门化" },
        { word: "media", definition: "n.媒体" },
        { word: "confuse", definition: "vt.搞乱,使糊涂" },
        { word: "twig", definition: "n.嫩枝" },
        { word: "workweek", definition: "n.一星期工作时间" },
        { word: "extensively", definition: "ad.广泛地,彻底地" },
        { word: "clement", definition: "a.仁慈的,温和的" },
        { word: "ideal", definition: "n.理想,典范.a.理想的,完美的" },
        { word: "herb", definition: "n.药草,香草" },
        { word: "affair", definition: "n.[pl.]事务,事件" },
        { word: "mold", definition: "n.模子 vt.浇铸,塑造" },
        { word: "mammoth", definition: "n.猛犸,长毛象.a.庞大的" },
        { word: "composition", definition: "n.成分,作品,合成物,作文,作曲" },
        { word: "tellurium", definition: "n.碲" },
        { word: "facility", definition: "n..,便利,能力,[pl.]设备" },
        { word: "coast", definition: "n.海岸,海滨" },
        { word: "evaluate", definition: "v.评价,估计" },
        { word: "occupation", definition: "n.职业,占有" },
        { word: "fauna", definition: "n.动物群" },
        { word: "discharge", definition: "v./n.释放,排出" },
        { word: "hind", definition: "a.后边的,后面的" },
        { word: "indicator", definition: "n.指示器,压力计" },
        { word: "steamboat", definition: "n.汽船" },
        { word: "kinetoscope", definition: "n.活动电影放映机" },
        { word: "heighten", definition: "v.提高,升高" },
        { word: "disclaimer", definition: "n.放弃,弃权,拒绝" },
        { word: "desirable", definition: "a.值得拥有的,可取的" },
        { word: "carbonate", definition: "n.碳酸盐" },
        { word: "expedition", definition: "n.远征,探险队" },
        { word: "scarce", definition: "a.缺乏的,不足的,稀有的" },
        { word: "profound", definition: "a.深刻的,意义深远的" },
        { word: "detect", definition: "v.察觉,侦查,发现" },
        { word: "insulation", definition: "n.绝缘,隔离" },
        { word: "modest", definition: "a.谦虚的,适度的" },
        { word: "presentation", definition: "n.介绍,陈述,提供,外观" },
        { word: "parlor", definition: "n.客厅,会客室" },
        { word: "obviously", definition: "ad.明显地" },
        { word: "explosion", definition: "n.爆炸,爆发" },
        { word: "Missouri", definition: "n.密苏里州(美国州名)" },
        { word: "pueblo", definition: "n.印第安人村庄" },
        { word: "department", definition: "n.部,局,部门,系,科" },
        { word: "jet", definition: "n.喷气式飞机" },
        { word: "senate", definition: "n.参议院" },
        { word: "mobile", definition: "a.可移动的,易变的" },
        { word: "scheme", definition: "n.安排.v.计划,策划,密谋" },
        { word: "salty", definition: "a.咸的,含盐的" },
        { word: "encode", definition: "vt.把...编码" },
        { word: "pearl", definition: "n.珍珠" },
        { word: "isotope", definition: "n.同位素" },
        { word: "slope", definition: "n.斜坡.v.(使)顺斜" },
        { word: "initial", definition: "a.最初的,初始的,字首的" },
        { word: "evolutionary", definition: "a.进化的,发展的,演变的" },
        { word: "being", definition: "n.存在,生命" },
        { word: "conceal", definition: "v.隐藏,隐瞒" },
        { word: "seep", definition: "v.渗出" },
        { word: "naturalist", definition: "n.自然主义者" },
        { word: "shield", definition: "v.防护,遮蔽" },
        { word: "target", definition: "n.目标,对象,靶子" },
        { word: "battle", definition: "n.战役.vi.作战,战斗" },
        { word: "interfere", definition: "vi.干涉,妨碍" },
        { word: "numerous", definition: "a.众多的,许多的" },
        { word: "perceptual", definition: "a.感性的,知觉的" },
        { word: "plentiful", definition: "a.丰富的,充裕的" },
        { word: "climatic", definition: "a.气候上的,由气候引起的" },
        { word: "cement", definition: "n.水泥,接合剂.v.接合,粘牢" },
        { word: "shade", definition: "n.荫,阴凉处,色度 vi.渐变,遮蔽" },
        { word: "semiarid", definition: "a.半干旱的,雨量非常少的" },
        { word: "Renaissance", definition: "n.文艺复兴(时期)" },
        { word: "maintenance", definition: "n.维护,保持" },
        { word: "pheromone", definition: "n.<生化>信息素" },
        { word: "sibling", definition: "n.兄弟姐妹" },
        { word: "regardless", definition: "a.不管,不顾" },
        { word: "vision", definition: "n.幻想,视觉,想象力" },
        { word: "strip", definition: "vt.剥,剥去" },
        { word: "dissolve", definition: "vi.溶解,消失.vt.使解散" },
        { word: "stock", definition: "n.库存,股票.v.储备" },
        { word: "Antarctica", definition: "n.南极洲" },
        { word: "explicit", definition: "a.明确的,清晰的,直率的" },
        { word: "suppress", definition: "vt.镇压,抑制" },
        { word: "tire", definition: "n./v.疲劳,厌倦" },
        { word: "seasonal", definition: "a.季节的,周期性的" },
        { word: "spontaneous", definition: "a.自发的,自然产生的" },
        { word: "lift", definition: "vt.举,解除,剽窃.vi.升起,消散.n.电梯" },
        { word: "density", definition: "n.密度" },
        { word: "cognitive", definition: "a.认知的,认识能力的" },
        { word: "maximum", definition: "n.最大量,最大限度" },
        { word: "spiral", definition: "v.盘旋.a.螺旋的.n.螺旋(线)" },
        { word: "drift", definition: "v./n.漂流,大意,趋势" },
        { word: "relevant", definition: "a.相关的,切题的" },
        { word: "elect", definition: "v.选举,选择" },
        { word: "animation", definition: "n.兴奋,活跃" },
        { word: "elevation", definition: "n.上升,提高" },
        { word: "Sahara", definition: "n.撒哈拉沙漠" },
        { word: "wavelength", definition: "n.波长" },
        { word: "molt", definition: "vi./n.脱毛,换毛" },
        { word: "Columbian", definition: "a.美国的,美洲的,哥伦布的" },
        { word: "equivalent", definition: "a.相等的,相当的n.等价物" },
        { word: "apprentice", definition: "n.学徒.v.当学徒" },
        { word: "flipper", definition: "n.鳍状肢" },
        { word: "outward", definition: "a.外表(面)的.ad.向外" },
        { word: "random", definition: "n./a.任意(的),随便(的)" },
        { word: "bead", definition: "n.珠子,水珠" },
        { word: "retain", definition: "vt.保持,保留,记住" },
        { word: "commodity", definition: "n.日用品" },
        { word: "experimental", definition: "a.实验(性)的,试验(性)的" },
        { word: "overcome", definition: "vt.战胜,克服" },
        { word: "crystalline", definition: "a.水晶(般)的,透明的" },
        { word: "speculation", definition: "n.思索,做投机买卖" },
        { word: "profitable", definition: "a.有益的,有利可图的" },
        { word: "revolutionary", definition: "a.革命的,革新的.n.革命者" },
        { word: "luxury", definition: "n.奢侈,华贵" },
        { word: "proper", definition: "a.适当的,正确的" },
        { word: "dairy", definition: "n.牛奶场,乳品店" },
        { word: "stud", definition: "vt.镶嵌,点缀" },
        { word: "phase", definition: "n.阶段,方面.vt.分阶段实行" },
        { word: "substantial", definition: "a.可观的,牢固的,实质的" },
        { word: "confine", definition: "vt.限制.n.界限" },
        { word: "realm", definition: "n.领域,范围" },
        { word: "orchestra", definition: "n.管弦乐队" },
        { word: "intermediate", definition: "a.中间的.n.媒介" },
        { word: "proponent", definition: "n.支持者,拥护者" },
        { word: "partnership", definition: "n.合伙(关系)" },
        { word: "adopt", definition: "vt.采用,收养,接受" },
        { word: "republican", definition: "a./n.共和政体的,共和党人(的)" },
        { word: "physiological", definition: "a.生理(学)的" },
        { word: "climax", definition: "n.高潮,顶点" },
        { word: "niche", definition: "n.壁龛,合适的职务(环境、位置等)" },
        { word: "justify", definition: "v.证明...是正当的" },
        { word: "logical", definition: "a.符合逻辑的,合理的" },
        { word: "cavity", definition: "n.洞,空穴" },
        { word: "primate", definition: "n.灵长类(动物)" },
        { word: "tribal", definition: "a.部落的,种族的" },
        { word: "storytelling", definition: "n.说书,讲故事" },
        { word: "crisis", definition: "n.决定性时刻,危机" },
        { word: "oven", definition: "n.烤箱" },
        { word: "copper", definition: "n.铜,警察" },
        { word: "district", definition: "n.区域,行政区" },
        { word: "distinctive", definition: "a.有区别的,独特的" },
        { word: "stationary", definition: "a.固定的,静止不动的" },
        { word: "measurement", definition: "n.测量法,度量" },
        { word: "snowflake", definition: "n.雪花" },
        { word: "swallow", definition: "n./v.吞下,咽下" },
        { word: "insufficient", definition: "a.不足的" },
        { word: "imagination", definition: "n.想象(力)" },
        { word: "distribution", definition: "n.分发,分配,分布" },
        { word: "bay", definition: "n.海湾" },
        { word: "squeeze", definition: "n./v.压榨,挤,拮据" },
        { word: "yawn", definition: "v.打呵欠" },
        { word: "pack", definition: "v.捆扎,打包.n.包" },
        { word: "populate", definition: "v.构成人口,居住于" },
        { word: "gallery", definition: "n.走廊,画廊" },
        { word: "defend", definition: "vt.防护,辩护,保卫" },
        { word: "porous", definition: "a.多孔渗水的" },
        { word: "dot", definition: "n.点.vt.打点于,点缀" },
        { word: "disturb", definition: "v.打扰,弄乱" },
        { word: "harbor", definition: "n.海港" },
        { word: "rough", definition: "a.粗糙的,大致的" },
        { word: "long-distance", definition: "a.长途的,长距离的" },
        { word: "tract", definition: "n.传单,小册子,大片(土地或森林)" },
        { word: "protein", definition: "n.蛋白质" },
        { word: "equatorial", definition: "a.(近)赤道的" },
        { word: "tiredness", definition: "n.疲劳,疲倦" },
        { word: "religious", definition: "a.宗教的,虔诚的,严谨的" },
        { word: "hollow", definition: "n.洞,窟窿.vt.挖空,弄凹" },
        { word: "slip", definition: "vi.滑(倒),溜走.vt.悄悄放进.n.疏漏" },
        { word: "illuminate", definition: "vt.照明,阐释,说明" },
        { word: "influential", definition: "a.有影响的,有势力的" },
        { word: "spear", definition: "n.矛,枪" },
        { word: "equip", definition: "vt.装备,配备" },
        { word: "realistic", definition: "a.现实(主义)的" },
        { word: "iodine", definition: "n.碘,碘酒" },
        { word: "hypothalamus", definition: "n.[解剖]视丘下部" },
        { word: "tablet", definition: "n.药片" },
        { word: "shrub", definition: "n.灌木,灌木丛" },
        { word: "aside", definition: "ad.在旁边,到旁边" },
        { word: "illusion", definition: "n.幻想,错觉" },
        { word: "cliff", definition: "n.悬崖,绝壁" },
        { word: "interplay", definition: "n.相互影响,相互作用" },
        { word: "stiff", definition: "a.(僵)硬的,生硬的" },
        { word: "ridge", definition: "n.背脊,山脊,山脉" },
        { word: "perspective", definition: "n.视角,观点,远景" },
        { word: "terminal", definition: "n.终点(站),终端" },
        { word: "herd", definition: "n.兽群.vt.使集中,把...赶在一起" },
        { word: "erosion", definition: "n.腐蚀,侵蚀" },
        { word: "ceremonial", definition: "n.仪式.a.正式的" },
        { word: "piston", definition: "n.活塞" },
        { word: "tolerate", definition: "vt.忍受,容忍,默许,宽恕" },
        { word: "virtue", definition: "n.美德,贞操" },
        { word: "icebox", definition: "n.冷藏库" },
        { word: "roost", definition: "v./.n.栖息鸟巢" },
        { word: "nestle", definition: "v.依偎,(舒适地)安顿" },
        { word: "tactic", definition: "n.策略,战略" },
        { word: "crystal", definition: "n.水晶" },
        { word: "lichen", definition: "n.青苔,苔藓,地衣" },
        { word: "contaminate", definition: "vt.弄脏,污染" },
        { word: "cap", definition: "n.帽子,盖.vt.覆盖,胜过" },
        { word: "carver", definition: "n.雕刻匠" },
        { word: "accomplish", definition: "vt.完成,实现" },
        { word: "enhance", definition: "v.提高,增强" },
        { word: "mere", definition: "a.仅仅的,起码的,纯粹的" },
        { word: "immune", definition: "a.免疫的,不受影响的,免除的" },
        { word: "electron", definition: "n.电子" },
        { word: "gill", definition: "n.鳃,及耳[液量单位]" },
        { word: "infant", definition: "n.婴儿 adj.婴儿的,幼稚的,初期的" },
        { word: "entrepreneur", definition: "n.企业家,主办人" },
        { word: "ingredient", definition: "n.成分,因素" },
        { word: "prominent", definition: "a.显著的,杰出的,突出的" },
        { word: "continental", definition: "a.大陆的(可指欧洲大陆)" },
        { word: "exploration", definition: "n.探险,探测" },
        { word: "proceed", definition: "vi.进行,继续下去,发生" },
        { word: "feat", definition: "n.功绩,伟业" },
        { word: "coordinate", definition: "vt.调节,协调.n.座标.a.并列的" },
        { word: "dye", definition: "n.染料.vt.给...染色" },
        { word: "substitute", definition: "v.代替,替换" },
        { word: "agrarian", definition: "a.有关土地的,耕地的" },
        { word: "margin", definition: "n.边缘,余地,页边空白" },
        { word: "utility", definition: "n.效用,公用" },
        { word: "motive", definition: "v.警告,告诫" },
        { word: "canoes", definition: "n.独木舟" },
        { word: "adequate", definition: "a.足够的,适当的,胜任的" },
        { word: "correspond", definition: "vi.符合,相当" },
        { word: "discipline", definition: "n.纪律,学科.v.训练" },
        { word: "invade", definition: "vt.侵略,侵入" },
        { word: "sensitive", definition: "a.敏感的,灵敏的" },
        { word: "humidity", definition: "n.湿气,潮湿" },
        { word: "additive", definition: "a.附加的.n.添加剂" },
        { word: "peripheral", definition: "a.外围的,不重要的" },
        { word: "Egypt", definition: "n.埃及" },
        { word: "succession", definition: "n.连续,继承" },
        { word: "steadily", definition: "ad.稳定地,坚定地" },
        { word: "pioneer", definition: "n.先驱者,创始人.vt.开拓(创)" },
        { word: "odor", definition: "n.气味,名声" },
        { word: "deprive", definition: "vt.剥夺,使丧失" },
        { word: "shoot", definition: "v.发射,开枪" },
        { word: "three-dimensional", definition: "a.三维的,立体的" },
        { word: "conquer", definition: "vt.征服,战胜,攻克" },
        { word: "loyalty", definition: "n.忠诚" },
        { word: "polar", definition: "a.(近)地极的,对立的" },
        { word: "eagle", definition: "n.鹰" },
        { word: "exchanger", definition: "n.交换器,换热器" },
        { word: "psychodynamic", definition: "a.精神动力的" },
        { word: "lighthouse", definition: "n.灯塔" },
        { word: "chart", definition: "n.图表.vt.制图" },
        { word: "palm", definition: "n.手掌,掌状物.vt.把...藏于手中" },
        { word: "innovative", definition: "a.创新的,革新的" },
        { word: "impose", definition: "v.强加,征收(税款)" },
        { word: "convention", definition: "n.习俗,惯例,大会" },
        { word: "underlie", definition: "vt.位于...之下,成为...的基础" },
        { word: "marine", definition: "n.船舶,水兵.a.海(洋)的,海军(事)的" },
        { word: "enemy", definition: "n.敌人" },
        { word: "disperse", definition: "v.分散,疏散,传播" },
        { word: "permanent", definition: "a.永久的,持久的" },
        { word: "relic", definition: "n.遗物,废墟" },
        { word: "sophisticated", definition: "a.诡辩的,久经世故的,富有经验的" },
        { word: "pile", definition: "n.一堆,一叠.v.堆积" },
        { word: "steam", definition: "n.蒸汽 v.蒸,蒸发" },
        { word: "management", definition: "n.经营,管理,处理" },
        { word: "gallium", definition: "n.镓" },
        { word: "life-forms", definition: "n.生物" },
        { word: "skyscraper", definition: "n.摩天楼" },
        { word: "suspend", definition: "v.暂停,悬,挂,延缓,推迟" },
        { word: "agricultural", definition: "a.农业的,农艺的" },
        { word: "ion", definition: "n.离子" },
        { word: "ink", definition: "n.墨水" },
        { word: "eggshell", definition: "n.蛋壳,易碎的东西" },
        { word: "temperate", definition: "a.温和的,适度的,有节制的" },
        { word: "invader", definition: "n.侵略者" },
        { word: "pigment", definition: "n.天然色素,颜料" },
        { word: "silversmith", definition: "n.银器匠" },
        { word: "poet", definition: "n.诗人" },
        { word: "dig", definition: "v.挖" },
        { word: "mount", definition: "vt.登上.n.山,峰" },
        { word: "arid", definition: "a.干旱的,贫瘠的" },
        { word: "enormous", definition: "a.巨大的,庞大的" },
        { word: "sodium", definition: "n.[化] 钠" },
        { word: "Hispanic", definition: "a.西班牙的" },
        { word: "instinct", definition: "n.本能,直觉,天性" },
        { word: "minimize", definition: "v.将...减到最少,最小化" },
        { word: "browse", definition: "v./n.浏览,放牧" },
        { word: "convex", definition: "a.凸出的" },
        { word: "vapor", definition: "n.水蒸气,烟雾" },
        { word: "magma", definition: "n.岩浆,糊剂" },
        { word: "mammal", definition: "n.哺乳动物" },
        { word: "cage", definition: "n.笼" },
        { word: "sight", definition: ".vt.看见.n.视力,视域,[pl.]名胜" },
        { word: "stem", definition: "n.茎,干.vi.起源于.vt.堵住" },
        { word: "fault", definition: "n.过错.v.挑剔,弄错" },
        { word: "saturate", definition: "vt.使湿透,饱和" },
        { word: "extract", definition: "v.取出,提取.n.摘录" },
        { word: "terrace", definition: "n.平台,阳台.v.使成梯形地" },
        { word: "well-being", definition: "n.幸福,健康" },
        { word: "swamp", definition: "n.沼泽,湿地" },
        { word: "external", definition: "n./a.外部(的)" },
        { word: "inclusion", definition: "n.包含" },
        { word: "navigation", definition: "n.航海,航行" },
        { word: "sheer", definition: "a./ad.十足的,陡峭的,大量的" },
        { word: "cadmium", definition: "n.[化]镉" },
        { word: "canal", definition: "n.运河,沟渠" },
        { word: "banker", definition: "n.银行家" },
        { word: "designate", definition: "v.指明,指定" },
        { word: "exhibition", definition: "n.表现,展览会" },
        { word: "assessment", definition: "n.估计,评估" },
        { word: "dominance", definition: "n.支配,优势,统治" },
        { word: "horticulture", definition: "n.园艺,园艺学" },
        { word: "compress", definition: "vt.压缩,摘要叙述" },
        { word: "reproduce", definition: "v.再生,复制,繁殖,生殖" },
        { word: "cone", definition: "n.圆锥体" },
        { word: "debris", definition: "n.碎片,残骸" },
        { word: "mature", definition: "a.成熟的.v.使成熟" },
        { word: "fade", definition: "v.褪去,褪色" },
        { word: "patent", definition: "n./a.专利(权)(的)" },
        { word: "invest", definition: "v.投资,投入(时间等),授予,赋予" },
        { word: "lord", definition: "n.封建领主,君主" },
        { word: "debt", definition: "n.债务" },
        { word: "petroleum", definition: "n.石油" },
        { word: "dispersal", definition: "n.散布,传播,分散" },
        { word: "residential", definition: "a.住宅的,居住的" },
        { word: "plankton", definition: "n.浮游生物(总称)" },
        { word: "Indiana", definition: "n.印地安那州" },
        { word: "tectonic", definition: "a.构造的,建筑的" },
        { word: "firn", definition: "n.粒雪,积雪" },
        { word: "initiate", definition: "v.开始,发起.n.新加入者" },
        { word: "consciously", definition: "ad.有意识地,自觉地" },
        { word: "advocate", definition: "vt.提倡,鼓吹,主张,拥护" },
        { word: "paleontologist", definition: "n.古生物学者" },
        { word: "nomadism", definition: "n.游牧,流浪" },
        { word: "catastrophe", definition: "n.大灾难" },
        { word: "selenium", definition: "n.[化]硒" },
        { word: "poem", definition: "n.诗" },
        { word: "stick", definition: "n.棍.vt.刺,戳" },
        { word: "terrain", definition: "n.地形" },
        { word: "ballet", definition: "n.芭蕾(舞)" },
        { word: "ratio", definition: "n.比,比率" },
        { word: "inadequate", definition: "a.不充分的,不适当的" },
        { word: "systematic", definition: "a.系统的,体系的" },
        { word: "depict", definition: "v.描述,描写" },
        { word: "geothermal", definition: "a.地热的" },
        { word: "reclaim", definition: "v.要回,开垦,回收" },
        { word: "projection", definition: "n.发射,设计,估计" },
        { word: "restoration", definition: "n.恢复,归还" },
        { word: "eddy", definition: "n.旋转,漩涡" },
        { word: "legislation", definition: "n.立法,法律的制定(或通过)" },
        { word: "welfare", definition: "n.福利,福利救济" },
        { word: "telecommuting", definition: "n.远程联机,远程办公" },
        { word: "crowd", definition: "n.人群.v.拥挤" },
        { word: "presumably", definition: "ad.大概,可能,据推测" },
        { word: "metabolism", definition: "n.新陈代谢" },
        { word: "transplant", definition: "vt.移栽,移植.n.(器官)移植" },
        { word: "literature", definition: "n.文学,文献" },
        { word: "repress", definition: "v.抑制,镇压" },
        { word: "refrigerator", definition: "n.电冰箱" },
        { word: "reserve", definition: "vt.保留,预定.n.储备,矜持,自然保护区" },
        { word: "court", definition: "n.法庭,庭院,宫廷" },
        { word: "short-lived", definition: "a.短命的,短暂的" },
        { word: "superorganism", definition: "n.[生]超个体(指群居昆虫等的群体)" },
        { word: "molecule", definition: "n.分子" },
        { word: "rail", definition: "n.栏杆,轨道.v.抱怨,责骂" },
        { word: "calculation", definition: "n.计算,考虑,估计" },
        { word: "rational", definition: "a.理性的,合理的" },
        { word: "criterion", definition: "n.标准,规范,[pl.]准则" },
        { word: "linen", definition: "n.亚麻布(制品)" },
        { word: "Harlem", definition: "n.(纽约的)黑人住宅区" },
        { word: "Orleans", definition: "n.奥尔良[法国]" },
        { word: "orientation", definition: "n.方向,目标,熟悉,适应" },
        { word: "foster", definition: "vt.收养,培养,促进" },
        { word: "exaggerate", definition: "v.夸大,夸张" },
        { word: "inevitable", definition: "a.不可避免的,必然的" },
        { word: "approximate", definition: "a.近似的,大约的.v.近似,接近" },
        { word: "controversial", definition: "a.有争议的,引起争论的" },
        { word: "geographic", definition: "a.地理(学)的" },
        { word: "projector", definition: "n.放映机,探照灯,投影仪,设计者" },
        { word: "peepshow", definition: "n.西洋镜" },
        { word: "handedness", definition: "n.用右手或左手的习惯" },
        { word: "apparent", definition: "a.明显的,表面上的" },
        { word: "identical", definition: "a.同一的,相同的" },
        { word: "mutual", definition: "a.相互的,共有的,彼此的" },
        { word: "regularity", definition: "n.规律性,规则性" },
        { word: "shelter", definition: "n.掩蔽,庇护所.v.掩蔽,躲避" },
        { word: "realization", definition: "n.实现" },
        { word: "plow", definition: "v.耕,犁" },
        { word: "minimum", definition: "a.最小的.n.最小值," },
        { word: "expose", definition: "vt.暴露,显露" },
        { word: "figurine", definition: "n.小雕像" },
        { word: "smooth", definition: "a.光滑的,平整的.vt.弄平" },
        { word: "polygon", definition: "n.[数]多角形,多边形" },
        { word: "hypothesize", definition: "v.假设,猜测" },
        { word: "depletion", definition: "n.损耗,枯竭" },
        { word: "craft", definition: "n.工艺,手艺,太空船" },
        { word: "drought", definition: "n.干旱,缺乏" },
        { word: "request", definition: "vt./n.请求,要求" },
        { word: "conservation", definition: "n.保存,保持,(对自然资源的)保护" },
        { word: "ammonia", definition: "n.[化]氨,氨水" },
        { word: "violent", definition: "a.猛烈的,暴力的" },
        { word: "sedimentation", definition: "n.沉淀,沉降" },
        { word: "rectangular", definition: "a.长方形的,矩形的,成直角的" },
        { word: "decay", definition: "v./n.衰退,腐败" },
        { word: "candidate", definition: "n.候选人,投考者" },
        { word: "emerge", definition: "vi.浮现,显露,摆脱" },
        { word: "questionnaire", definition: "n.调查表,问卷" },
        { word: "temple", definition: "n.庙,寺" },
        { word: "division", definition: "n.分开,分割,区分" },
        { word: "remote", definition: "a.遥远的,偏僻的,疏远的" },
        { word: "asphalt", definition: "n.沥青" },
        { word: "lizard", definition: "n.[动]蜥蜴" },
        { word: "assemble", definition: "vt.集合,装配.vi.聚集" },
        { word: "ornament", definition: "n./vt.装饰(品),美化" },
        { word: "parental", definition: "a.父母的" },
        { word: "conflict", definition: "n.冲突,战斗.vi.冲突,抵触" },
        { word: "simplify", definition: "vt.单一化,简单化" },
        { word: "equator", definition: "n.赤道" },
        { word: "Persian", definition: "n.波斯人[语]" },
        { word: "neonate", definition: "n.初生婴儿" },
        { word: "drainage", definition: "n.排水系统,下水道" },
        { word: "dweller", definition: "n.居住者,居民" },
        { word: "criticism", definition: "n.批评,批判" },
        { word: "impress", definition: "vt.印,留下印象" },
        { word: "friction", definition: "n.摩擦,摩擦力" },
        { word: "excess", definition: "n./a.过量(的)" },
        { word: "zinc", definition: "n.锌" },
        { word: "vulnerable", definition: "a.易受伤的,脆弱的" },
        { word: "proposal", definition: "n.提议,建议" },
        { word: "effectively", definition: "ad.有效地,生效地" },
        { word: "flee", definition: "v.逃避,逃跑,消失" },
        { word: "wartime", definition: "n.战时" },
        { word: "Euphrates", definition: "n.幼发拉底河" },
        { word: "gypsum", definition: "n.石膏," },
        { word: "objective", definition: "n.目标,目的 a.客观的,宾格的" },
        { word: "inspiration", definition: "n.灵感,鼓舞" },
        { word: "shrine", definition: "n.圣地,神龛" },
        { word: "fuel", definition: "n.燃料.v.加燃料" },
        { word: "meltwater", definition: "n.冰雪融化成的水" },
        { word: "former", definition: "a.从前的,以前的" },
        { word: "sector", definition: "n.部分,部门" },
        { word: "bulb", definition: "n.鳞茎,球形物" },
        { word: "isolation", definition: "n.隔离,孤立" },
        { word: "reservoir", definition: "n.水库,蓄水池" },
        { word: "gazelle", definition: "n.瞪羚,小羚羊" },
        { word: "frontality", definition: "n.正面描绘" },
        { word: "rigid", definition: "a.刚硬的,严格的" },
        { word: "Latin", definition: "n./a.拉丁文,拉丁语(的)" },
        { word: "corn", definition: "n.玉米" },
        { word: "burgess", definition: "n.(英国)市民,镇民" },
        { word: "split", definition: "v.分裂,撕裂.n.裂口" },
        { word: "alternate", definition: "v.交替,轮流.a.交替的,间隔的" },
        { word: "guarantee", definition: "n.保证(书)vt.保证,担保" },
        { word: "ultimately", definition: "ad.最后,最终,基本上" },
        { word: "igneous", definition: "a.(指岩石)火成的,火的" },
        { word: "buck", definition: "n.(一)美元,雄鹿(兔)" },
        { word: "magnetic", definition: "a.磁的,有吸引力的" },
        { word: "enrich", definition: "vt.充实,使富裕" },
        { word: "metropolis", definition: "n.首都,大城市" },
        { word: "botanical", definition: "a.植物(学)的" },
        { word: "deform", definition: "v.(使)变形" },
        { word: "confederacy", definition: "n.联盟,邦联" },
        { word: "ritual", definition: "n.仪式,典礼" },
        { word: "acid", definition: "n.酸.a.酸的" },
        { word: "spite", definition: "n.(in ~ of)不顾,不管,恶意" },
        { word: "withstand", definition: "vt.抵挡,经受住" },
        { word: "cultivate", definition: "vt.培养,耕作" },
        { word: "immense", definition: "a.极广大的,无边的," },
        { word: "gull", definition: "n.海鸥.v.欺骗" },
        { word: "raft", definition: "n.木排(筏),救生圈.v.用筏子渡河" },
        { word: "property", definition: "n.财产,所有物,性质,性能" },
        { word: "offshore", definition: "a./ad.离岸的,近海的" },
        { word: "absence", definition: "n.不在,缺席,缺乏,没有" },
        { word: "hierarchy", definition: "n.等级制度" },
        { word: "commission", definition: "n.委员会.vt.委任,委托,佣金" },
        { word: "intend", definition: "vt.想要,打算" },
        { word: "tunnel", definition: "n.隧道,地道" },
        { word: "democratic", definition: "a.民主的,民主主义的" },
        { word: "interlock", definition: "v.互锁,连锁" },
        { word: "regional", definition: "a.整个地区的,地域性地" },
        { word: "attachment", definition: "n.附件,附加装置" },
        { word: "closet", definition: "n.壁橱,储藏室" },
        { word: "insulate", definition: "vt.使绝缘,隔离" },
        { word: "mission", definition: "n.使命,任务" },
        { word: "herbivore", definition: "n.草食动物" },
        { word: "odd", definition: "a.奇特的,奇数的.n.[pl.]机会" },
        { word: "Illinois", definition: "n.伊利诺斯州(美国州名)" },
        { word: "mechanism", definition: "n.机械装置,机理,办法,途径" },
        { word: "sieve", definition: "n 筛,滤网.v.筛,过滤" },
        { word: "alpine", definition: "a.高山的,阿尔卑斯山的" },
        { word: "monumental", definition: "a.纪念碑的,不朽的" },
        { word: "prosperous", definition: "a.繁荣的,兴旺的" }
    ].map(word => ({ ...word, proficiency: 0 }));

    let activeWords = [...words];
    let currentMode = 'wordList';

    function clearContentArea() {
        contentArea.innerHTML = '';
    }

    function setActiveLink(mode) {
        for (const key in modeLinks) {
            modeLinks[key].classList.remove('active');
        }
        modeLinks[mode].classList.add('active');
        currentMode = mode;
    }

    function getProficiencyClass(level) {
        if (level === 5) return 'proficiency-5';
        if (level === 4) return 'proficiency-4';
        if (level === 3) return 'proficiency-3';
        if (level === 2) return 'proficiency-2';
        if (level === 1) return 'proficiency-1';
        return 'proficiency-0';
    }

    function showWordList() {
        clearContentArea();
        const table = document.createElement('table');
        table.className = 'table table-striped';
        
        const thead = document.createElement('thead');
        thead.innerHTML = `
            <tr>
                <th>#</th>
                <th>单词</th>
                <th>释义</th>
                <th>熟练度</th>
            </tr>
        `;
        table.appendChild(thead);

        const tbody = document.createElement('tbody');
        activeWords.forEach((word, index) => {
            const row = document.createElement('tr');
            row.classList.add(getProficiencyClass(word.proficiency));
            row.innerHTML = `
                <td>${words.indexOf(word) + 1}</td>
                <td>${word.word}</td>
                <td>${word.definition}</td>
                <td>${word.proficiency}</td>
            `;
            tbody.appendChild(row);
        });
        table.appendChild(tbody);

        contentArea.appendChild(table);
        setActiveLink('wordList');
    }

    let currentFlashcardIndex = 0;

    function showFlashcard() {
        clearContentArea();
        contentArea.innerHTML = `
            <div class="flashcard-container text-center">
                <div class="flashcard" id="flashcard">
                    <div class="flashcard-inner">
                        <div class="flashcard-front"></div>
                        <div class="flashcard-back"></div>
                    </div>
                </div>
                <div class="mt-3">
                    <button class="btn btn-danger" id="dont-know-btn">不认识</button>
                    <button class="btn btn-success" id="know-btn">认识</button>
                    <button class="btn btn-secondary" id="prev-word">上一个</button>
                    <button class="btn btn-primary" id="next-word">下一个</button>
                    <button class="btn btn-info" id="shuffle-words">打乱顺序</button>
                </div>
            </div>
        `;

        const flashcard = document.getElementById('flashcard');
        const flashcardFront = flashcard.querySelector('.flashcard-front');
        const flashcardBack = flashcard.querySelector('.flashcard-back');
        const knowBtn = document.getElementById('know-btn');
        const dontKnowBtn = document.getElementById('dont-know-btn');

        function updateFlashcard() {
            flashcard.classList.remove('flipped');
            if (activeWords.length > 0) {
                const currentWord = activeWords[currentFlashcardIndex];
                flashcardFront.textContent = currentWord.word;
                flashcardBack.textContent = currentWord.definition;
                flashcard.className = 'flashcard';
                flashcard.classList.add(getProficiencyClass(currentWord.proficiency));
            }
        }

        updateFlashcard();

        flashcard.addEventListener('click', () => {
            flashcard.classList.toggle('flipped');
        });

        document.getElementById('prev-word').addEventListener('click', () => {
            currentFlashcardIndex = (currentFlashcardIndex - 1 + activeWords.length) % activeWords.length;
            updateFlashcard();
        });

        document.getElementById('next-word').addEventListener('click', () => {
            currentFlashcardIndex = (currentFlashcardIndex + 1) % activeWords.length;
            updateFlashcard();
        });

        document.getElementById('shuffle-words').addEventListener('click', () => {
            activeWords.sort(() => Math.random() - 0.5);
            currentFlashcardIndex = 0;
            updateFlashcard();
        });

        knowBtn.addEventListener('click', () => {
            const currentWord = activeWords[currentFlashcardIndex];
            if (currentWord.proficiency < 5) {
                currentWord.proficiency++;
            }
            updateFlashcard();
        });

        dontKnowBtn.addEventListener('click', () => {
            const currentWord = activeWords[currentFlashcardIndex];
            if (currentWord.proficiency > 0) {
                currentWord.proficiency--;
            }
            updateFlashcard();
        });

        setActiveLink('flashcard');
    }

    let currentSpellingIndex = 0;

    function showSpellingQuiz() {
        clearContentArea();
        contentArea.innerHTML = `
            <div class="spelling-quiz-container text-center">
                <h3>拼写测试</h3>
                <div class="card" id="definition-card">
                    <div class="card-body">
                        <p class="card-text fs-4" id="definition-display"></p>
                    </div>
                </div>
                <div class="input-group my-3">
                    <input type="text" class="form-control" id="word-input" placeholder="请输入单词">
                    <button class="btn btn-primary" id="submit-word">提交</button>
                </div>
                <div id="feedback-area"></div>
                <button class="btn btn-secondary mt-2" id="next-spelling-word">下一个</button>
            </div>
        `;

        const definitionCard = document.getElementById('definition-card');
        const definitionDisplay = document.getElementById('definition-display');
        const wordInput = document.getElementById('word-input');
        const submitButton = document.getElementById('submit-word');
        const feedbackArea = document.getElementById('feedback-area');
        const nextButton = document.getElementById('next-spelling-word');

        function updateSpellingQuiz() {
            if (activeWords.length > 0) {
                const currentWord = activeWords[currentSpellingIndex];
                definitionDisplay.textContent = currentWord.definition;
                wordInput.value = '';
                feedbackArea.innerHTML = '';
                definitionCard.className = 'card';
                definitionCard.classList.add(getProficiencyClass(currentWord.proficiency));
            }
        }

        updateSpellingQuiz();

        function checkWord() {
            const userInput = wordInput.value.trim().toLowerCase();
            const currentWord = activeWords[currentSpellingIndex];
            const correctWord = currentWord.word.toLowerCase();
            if (userInput === correctWord) {
                if (currentWord.proficiency < 5) {
                    currentWord.proficiency++;
                }
                feedbackArea.innerHTML = '<div class="alert alert-success">正确!</div>';
            } else {
                if (currentWord.proficiency > 0) {
                    currentWord.proficiency--;
                }
                feedbackArea.innerHTML = `<div class="alert alert-danger">错误，正确答案是: ${currentWord.word}</div>`;
            }
            updateSpellingQuiz();
        }

        submitButton.addEventListener('click', checkWord);
        wordInput.addEventListener('keyup', (e) => {
            if (e.key === 'Enter') {
                checkWord();
            }
        });

        nextButton.addEventListener('click', () => {
            currentSpellingIndex = (currentSpellingIndex + 1) % activeWords.length;
            updateSpellingQuiz();
        });

        setActiveLink('spelling');
    }

    let currentChoiceIndex = 0;
    let score = 0;

    function showChoiceQuiz() {
        clearContentArea();
        contentArea.innerHTML = `
            <div class="choice-quiz-container text-center">
                <h3>选择题挑战</h3>
                <div class="card" id="word-card">
                    <div class="card-body">
                        <h4 class="card-title" id="word-display"></h4>
                    </div>
                </div>
                <div class="list-group mt-3" id="choices-container">
                    <!-- Choices will be dynamically added here -->
                </div>
                <div class="mt-3">
                    <p><strong>得分: <span id="score-display">0</span></strong></p>
                    <button class="btn btn-secondary" id="next-choice-word">下一个</button>
                </div>
            </div>
        `;

        const wordCard = document.getElementById('word-card');
        const wordDisplay = document.getElementById('word-display');
        const choicesContainer = document.getElementById('choices-container');
        const scoreDisplay = document.getElementById('score-display');
        const nextButton = document.getElementById('next-choice-word');

        function generateChoices() {
            const correctWord = activeWords[currentChoiceIndex];
            const choices = [correctWord];

            while (choices.length < 4) {
                const randomWord = activeWords[Math.floor(Math.random() * activeWords.length)];
                if (!choices.some(choice => choice.word === randomWord.word)) {
                    choices.push(randomWord);
                }
            }

            return choices.sort(() => Math.random() - 0.5);
        }

        function updateChoiceQuiz() {
            const currentWord = activeWords[currentChoiceIndex];
            wordDisplay.textContent = currentWord.word;
            scoreDisplay.textContent = score;
            choicesContainer.innerHTML = '';

            wordCard.className = 'card';
            wordCard.classList.add(getProficiencyClass(currentWord.proficiency));

            const choices = generateChoices();
            choices.forEach(choice => {
                const button = document.createElement('button');
                button.type = 'button';
                button.className = 'list-group-item list-group-item-action';
                button.textContent = choice.definition;
                button.addEventListener('click', () => {
                    if (choice.word === currentWord.word) {
                        button.classList.add('list-group-item-success');
                        if (currentWord.proficiency < 5) {
                            currentWord.proficiency++;
                        }
                        score++;
                    } else {
                        button.classList.add('list-group-item-danger');
                        if (currentWord.proficiency > 0) {
                            currentWord.proficiency--;
                        }
                    }
                    scoreDisplay.textContent = score;
                    Array.from(choicesContainer.children).forEach(child => {
                        child.disabled = true;
                    });
                    updateChoiceQuiz();
                });
                choicesContainer.appendChild(button);
            });
        }

        updateChoiceQuiz();

        nextButton.addEventListener('click', () => {
            currentChoiceIndex = Math.floor(Math.random() * activeWords.length);
            updateChoiceQuiz();
        });

        setActiveLink('choice');
    }

    function setWordRange() {
        const start = parseInt(rangeStartInput.value, 10) - 1;
        const end = parseInt(rangeEndInput.value, 10);

        if (!isNaN(start) && !isNaN(end) && start >= 0 && end > start) {
            activeWords = words.slice(start, end);
        } else {
            activeWords = [...words];
        }
        
        switch (currentMode) {
            case 'wordList':
                showWordList();
                break;
            case 'flashcard':
                currentFlashcardIndex = 0;
                showFlashcard();
                break;
            case 'spelling':
                currentSpellingIndex = 0;
                showSpellingQuiz();
                break;
            case 'choice':
                currentChoiceIndex = 0;
                showChoiceQuiz();
                break;
        }
    }

    setRangeBtn.addEventListener('click', setWordRange);

    modeLinks.wordList.addEventListener('click', (e) => { e.preventDefault(); showWordList(); });
    modeLinks.flashcard.addEventListener('click', (e) => { e.preventDefault(); showFlashcard(); });
    modeLinks.spelling.addEventListener('click', (e) => { e.preventDefault(); showSpellingQuiz(); });
    modeLinks.choice.addEventListener('click', (e) => { e.preventDefault(); showChoiceQuiz(); });

    // Initial load
    showWordList();
});
