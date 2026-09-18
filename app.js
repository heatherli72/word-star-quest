const UI_LANGUAGE_STORE_KEY = "word-star-quest-language-v1";
const SUPPORTED_LANGUAGES = new Set(["zh", "en"]);
const L = (zh, en) => ({ zh, en });

const I18N = {
  zh: {
    app: { title: "单词星际任务", brand: "单词星际任务" },
    nav: {
      home: "回到首页",
      profile: "选择驾驶员",
      fullscreen: "全屏",
      collections: "全部收藏",
      language: "切换语言"
    },
    home: {
      training: "任务",
      collection: "收藏",
      today: "今天出发",
      explore: "探索",
      wordLab: "单词舱",
      workshop: "收藏工坊",
      words: "{count} 个单词",
      sets: "{done} / {total} 套",
      stage: "关卡 {number}"
    },
    stage: {
      reset: "重新开始本关"
    },
    garden: { copy: "看图 · 听词 · 读句" },
    common: {
      word: "单词",
      sentence: "句子",
      listen: "听",
      listenWord: "听单词",
      listenSentence: "听句子",
      repeat: "重听",
      check: "检查",
      clear: "清空",
      eraser: "清除笔迹",
      next: "下一题",
      submit: "提交",
      back: "返回",
      open: "打开",
      edit: "修改",
      delete: "删除",
      cancel: "取消",
      save: "保存",
      owned: "已收藏",
      parts: "部件",
      answer: "答案",
      close: "关闭",
      continue: "继续",
      pagePrevious: "上一页",
      pageNext: "下一页"
    },
    question: {
      sentence: "句子",
      drag: "拖字母",
      letters: "{count} 个字母",
      keyboard: "字母键",
      vowels: "元音",
      consonants: "辅音",
      combinations: "组合",
      audioOnly: "只听",
      writing: "手写答题纸",
      myPaper: "我的答卷",
      writeWord: "听后写下单词",
      ready: "准备听题",
      dropLetters: "点或拖入格子",
      blank: "填空"
    },
    feedback: {
      listenAgain: "再听一次",
      fillCorrect: "填对了",
      spellCorrect: "拼对了",
      answerCorrect: "答对了！{meaning}",
      completeSlots: "先放好所有字母",
      orderAgain: "顺序再试一次",
      writeFirst: "先写下单词",
      correctionFirst: "先在书写纸上改好",
      correctionSaved: "修改已保存",
      approveAll: "先确认每一张答卷",
      noMission: "没有可继续的任务",
      saved: "已自动保存",
      saveFailed: "存档失败",
      profileUpdated: "驾驶员资料已修改",
      welcome: "欢迎回来，{name}！",
      profileDeleted: "已删除 {name} 的档案",
      profileError: "旧存档无法读取，已创建新的训练档案",
      purchaseNeed: "还差 {count} ⚡"
    },
    profile: {
      title: "选择驾驶员",
      copy: "每位驾驶员都有自己的存档",
      saved: "已有驾驶员",
      create: "新驾驶员",
      name: "名字",
      placeholder: "小宇航员",
      avatar: "头像",
      enter: "进入",
      rename: "修改资料",
      saveEdit: "保存修改",
      empty: "输入名字，选头像，开始吧",
      nameRequired: "请输入名字",
      duplicate: "这个名字已经有存档",
      updateFailed: "修改未保存",
      deleteFailed: "删除未保存",
      deleteTitle: "删除驾驶员？",
      deleteCopy: "将删除 {name} 的全部存档",
      keep: "保留",
      rocketProgress: "{done} / {total} 火箭"
    },
    workshop: {
      title: "星际收藏工坊",
      homeCopy: "集齐 20 个部件",
      activeSets: "{done} / {total} 已激活",
      building: "正在组装 {name}",
      collectionProgress: "{done} / {total} 部件",
      detail: "{name} · {done} / {total}",
      openCollection: "打开 {name}",
      buy: "兑换 {name}",
      assembly: "{name} 组装预览",
      part: "{number}. {name}"
    },
    review: {
      confirmed: "{done} / {total} 已确认",
      reward: "完成 +{count} ⚡",
      expected: "正确拼写",
      approve: "答对",
      revise: "改写",
      finish: "完成批改",
      correction: "一起改写",
      correctionCopy: "照着答案写一遍",
      correctionCanvas: "手写修改纸",
      overview: "查看整张答卷",
      previousAnswer: "上一张答卷",
      nextAnswer: "下一张答卷",
      finishEdit: "完成修改",
      pending: "待确认",
      approved: "已确认",
      openAnswer: "查看 {word}",
      submitPaper: "提交答卷",
      submitted: "✓ 答卷已提交"
    },
    handwriting: {
      previous: "上一题",
      next: "下一题",
      submitPaper: "提交答卷",
      clearInk: "清空全部笔迹",
      switchToPen: "切换到画笔",
      switchToEraser: "切换到橡皮擦"
    },
    finish: {
      title: "任务完成！",
      copy: "干得漂亮",
      again: "再来一轮",
      stageDone: "{name} 完成！",
      earned: "获得 {count} ⚡",
      handwritingScore: "手写 +{reward} ⚡ · 共 {stars} ⚡"
    },
    bonus: {
      title: "拼出 SPACE",
      kicker: "秘密补给",
      clue: "提示：太空",
      letters: "打乱的字母",
      listen: "听 SPACE",
      input: "输入答案",
      placeholder: "拼出单词",
      submit: "领取 +100",
      wrong: "再看一眼字母",
      correct: "太厉害了！+100 ⚡"
    },
    orientation: { title: "请横向旋转 iPad", copy: "横屏更好玩" }
  },
  en: {
    app: { title: "Word Star Quest", brand: "Word Star Quest" },
    nav: {
      home: "Home",
      profile: "Choose player",
      fullscreen: "Fullscreen",
      collections: "All collections",
      language: "Change language"
    },
    home: {
      training: "Missions",
      collection: "Build",
      today: "Launch today",
      explore: "Explore",
      wordLab: "Word Lab",
      workshop: "Workshop",
      words: "{count} words",
      sets: "{done} / {total} sets",
      stage: "Stage {number}"
    },
    stage: {
      reset: "Restart this stage"
    },
    garden: { copy: "Picture · word · sentences" },
    common: {
      word: "Word",
      sentence: "Sentence",
      listen: "Listen",
      listenWord: "Word",
      listenSentence: "Sentence",
      repeat: "Repeat",
      check: "Check",
      clear: "Clear",
      eraser: "Erase writing",
      next: "Next",
      submit: "Submit",
      back: "Back",
      open: "Open",
      edit: "Edit",
      delete: "Delete",
      cancel: "Cancel",
      save: "Save",
      owned: "Owned",
      parts: "parts",
      answer: "Answer",
      close: "Close",
      continue: "Continue",
      pagePrevious: "Previous page",
      pageNext: "Next page"
    },
    question: {
      sentence: "Sentence",
      drag: "Drag letters",
      letters: "{count} letters",
      keyboard: "Letter keys",
      vowels: "Vowels",
      consonants: "Consonants",
      combinations: "Pairs",
      audioOnly: "Listen only",
      writing: "Writing paper",
      myPaper: "My answer",
      writeWord: "Hear it, write it",
      ready: "Ready to listen",
      dropLetters: "Tap or drag into slots",
      blank: "Fill the blank"
    },
    feedback: {
      listenAgain: "Listen again",
      fillCorrect: "Nice fill!",
      spellCorrect: "Spelled it!",
      answerCorrect: "Correct! {meaning}",
      completeSlots: "Place every letter first",
      orderAgain: "Try that order again",
      writeFirst: "Write the word first",
      correctionFirst: "Write it on the paper first",
      correctionSaved: "Edit saved",
      approveAll: "Confirm every answer first",
      noMission: "No mission to continue",
      saved: "Saved",
      saveFailed: "Could not save",
      profileUpdated: "Player updated",
      welcome: "Welcome back, {name}!",
      profileDeleted: "{name}'s profile was deleted",
      profileError: "Could not read an older save. A new profile is ready.",
      purchaseNeed: "Need {count} more ⚡"
    },
    profile: {
      title: "Choose a player",
      copy: "Each player has a separate save",
      saved: "Players",
      create: "New player",
      name: "Name",
      placeholder: "Space kid",
      avatar: "Avatar",
      enter: "Play",
      rename: "Edit player",
      saveEdit: "Save player",
      empty: "Name + avatar, then launch",
      nameRequired: "Add a name",
      duplicate: "That name already has a save",
      updateFailed: "Changes were not saved",
      deleteFailed: "Delete was not saved",
      deleteTitle: "Delete player?",
      deleteCopy: "This removes all of {name}'s saved work",
      keep: "Keep",
      rocketProgress: "{done} / {total} rocket"
    },
    workshop: {
      title: "Space Collection Workshop",
      homeCopy: "Build all 20 parts",
      activeSets: "{done} / {total} active",
      building: "Building {name}",
      collectionProgress: "{done} / {total} parts",
      detail: "{name} · {done} / {total}",
      openCollection: "Open {name}",
      buy: "Get {name}",
      assembly: "{name} build preview",
      part: "{number}. {name}"
    },
    review: {
      confirmed: "{done} / {total} confirmed",
      reward: "Finish +{count} ⚡",
      expected: "Correct spelling",
      approve: "Correct",
      revise: "Rewrite",
      finish: "Finish check",
      correction: "Rewrite together",
      correctionCopy: "Copy the answer once",
      correctionCanvas: "Handwriting edit paper",
      overview: "View full paper",
      previousAnswer: "Previous answer",
      nextAnswer: "Next answer",
      finishEdit: "Finish edit",
      pending: "Needs check",
      approved: "Checked",
      openAnswer: "View {word}",
      submitPaper: "Submit paper",
      submitted: "✓ Paper submitted"
    },
    handwriting: {
      previous: "Previous question",
      next: "Next question",
      submitPaper: "Submit paper",
      clearInk: "Clear all ink",
      switchToPen: "Use pen",
      switchToEraser: "Use eraser"
    },
    finish: {
      title: "Mission complete!",
      copy: "Great flying!",
      again: "Play again",
      stageDone: "{name} complete!",
      earned: "Earned {count} ⚡",
      handwritingScore: "Writing +{reward} ⚡ · Total {stars} ⚡"
    },
    bonus: {
      title: "Spell SPACE",
      kicker: "Secret supply",
      clue: "Clue: outer space",
      letters: "Scrambled letters",
      listen: "Hear SPACE",
      input: "Type your answer",
      placeholder: "Spell the word",
      submit: "Claim +100",
      wrong: "Check the letters again",
      correct: "Amazing! +100 ⚡"
    },
    orientation: { title: "Turn your iPad sideways", copy: "Landscape works best" }
  }
};

function readStoredLanguage() {
  try {
    const language = localStorage.getItem(UI_LANGUAGE_STORE_KEY);
    return SUPPORTED_LANGUAGES.has(language) ? language : "zh";
  } catch (error) {
    return "zh";
  }
}

function currentLanguage() {
  if (typeof player !== "undefined" && player && SUPPORTED_LANGUAGES.has(player.language)) return player.language;
  return readStoredLanguage();
}

function translationValue(language, key) {
  return key.split(".").reduce((value, segment) => value && value[segment], I18N[language]);
}

function t(key, values = {}) {
  const value = translationValue(currentLanguage(), key) || translationValue("zh", key) || key;
  return String(value).replace(/\{(\w+)\}/g, (_match, name) => values[name] === undefined ? `{${name}}` : values[name]);
}

function localized(value) {
  if (!value || typeof value !== "object") return String(value || "");
  return value[currentLanguage()] || value.zh || value.en || "";
}

function defaultProfileName() {
  return readStoredLanguage() === "en" ? "New Player" : "新驾驶员";
}

function iconButton(button, icon, label, className = "") {
  button.className = `${button.className} ${className}`.trim();
  button.replaceChildren();
  const symbol = document.createElement("span");
  symbol.className = "button-icon";
  symbol.setAttribute("aria-hidden", "true");
  symbol.textContent = icon;
  const caption = document.createElement("span");
  caption.className = "button-label";
  caption.textContent = label;
  button.append(symbol, caption);
  button.title = label;
  button.setAttribute("aria-label", label);
  return button;
}

const WORDS = [
  {
    id: "one",
    word: "one",
    meaning: L("一", "one"),
    visual: L("一颗闪亮的星星", "one bright star"),
    image: "images/one.svg",
    sentences: [
      { text: "I have one star.", blank: "I have ___ star." },
      { text: "One rocket is blue.", blank: "___ rocket is blue." },
      { text: "I see one moon.", blank: "I see ___ moon." }
    ]
  },
  {
    id: "two",
    word: "two",
    meaning: L("二", "two"),
    visual: L("两枚蓝色小火箭", "two little blue rockets"),
    image: "images/two.svg",
    sentences: [
      { text: "Two rockets fly.", blank: "___ rockets fly." },
      { text: "I have two red balls.", blank: "I have ___ red balls." },
      { text: "Two cats jump.", blank: "___ cats jump." }
    ]
  },
  {
    id: "three",
    word: "three",
    meaning: L("三", "three"),
    visual: L("三个挥手的小外星人", "three waving aliens"),
    image: "images/three.svg",
    sentences: [
      { text: "Three aliens wave.", blank: "___ aliens wave." },
      { text: "I see three stars.", blank: "I see ___ stars." },
      { text: "Three birds fly.", blank: "___ birds fly." }
    ]
  },
  {
    id: "four",
    word: "four",
    meaning: L("四", "four"),
    visual: L("四颗绕圈的小行星", "four little planets"),
    image: "images/four.svg",
    sentences: [
      { text: "Four planets spin.", blank: "___ planets spin." },
      { text: "I have four books.", blank: "I have ___ books." },
      { text: "Four fish swim.", blank: "___ fish swim." }
    ]
  },
  {
    id: "eat",
    word: "eat",
    meaning: L("吃", "eat"),
    visual: L("小宇航员在吃红苹果", "an astronaut eating a red apple"),
    image: "images/eat.svg",
    sentences: [
      { text: "I eat an apple.", blank: "I ___ an apple." },
      { text: "We eat cake.", blank: "We ___ cake." },
      { text: "They eat rice.", blank: "They ___ rice." }
    ]
  },
  {
    id: "that",
    word: "that",
    meaning: L("那个 / 那", "that"),
    visual: L("手指指向一枚蓝色火箭", "a finger pointing at a blue rocket"),
    image: "images/that.svg",
    sentences: [
      { text: "That is a blue rocket.", blank: "___ is a blue rocket." },
      { text: "Look at that star.", blank: "Look at ___ star." },
      { text: "I like that cat.", blank: "I like ___ cat." }
    ]
  },
  {
    id: "they",
    word: "they",
    meaning: L("他们 / 她们 / 它们", "they"),
    visual: L("两个宇航员一起挥手", "two astronauts waving together"),
    image: "images/they.svg",
    sentences: [
      { text: "They play in space.", blank: "___ play in space." },
      { text: "They see the moon.", blank: "___ see the moon." },
      { text: "They like red cars.", blank: "___ like red cars." }
    ]
  },
  {
    id: "like",
    word: "like",
    meaning: L("喜欢", "like"),
    visual: L("宇航员喜欢他的火箭", "an astronaut who likes a rocket"),
    image: "images/like.svg",
    sentences: [
      { text: "I like my rocket.", blank: "I ___ my rocket." },
      { text: "We like blue stars.", blank: "We ___ blue stars." },
      { text: "They like to play.", blank: "They ___ to play." }
    ]
  },
  {
    id: "black",
    word: "black",
    meaning: L("黑色", "black"),
    visual: L("黑猫坐在月亮旁边", "a black cat beside the moon"),
    image: "images/black.svg",
    sentences: [
      { text: "The black cat jumps.", blank: "The ___ cat jumps." },
      { text: "I see a black hat.", blank: "I see a ___ hat." },
      { text: "That is a black car.", blank: "That is a ___ car." }
    ]
  },
  {
    id: "white",
    word: "white",
    meaning: L("白色", "white"),
    visual: L("白色月亮和白云", "a white moon and white clouds"),
    image: "images/white.svg",
    sentences: [
      { text: "A white moon shines.", blank: "A ___ moon shines." },
      { text: "I see a white dog.", blank: "I see a ___ dog." },
      { text: "The white star is bright.", blank: "The ___ star is bright." }
    ]
  }
];

function buildFillChoices(answer) {
  const vowels = ["a", "e", "i", "o", "u"];
  const consonants = "bcdfghjklmnpqrstvwxyz".split("");
  const candidates = vowels.includes(answer) ? vowels : consonants;
  const distractors = candidates.filter((letter) => letter !== answer).slice(0, 2);
  return [answer, ...distractors];
}

function activeCollection() {
  return COLLECTION_SETS.find((collection) => collection.id === player.activeCollectionId) || COLLECTION_SETS[0];
}

const FILL_QUESTIONS = WORDS.flatMap((entry) => {
  return entry.word.split("").map((answer, index) => ({
    id: `${entry.id}-fill-${index + 1}`,
    wordId: entry.id,
    prefix: entry.word.slice(0, index),
    suffix: entry.word.slice(index + 1),
    answer,
    choices: buildFillChoices(answer)
  }));
});

const STAGES = [
  { id: "listening", icon: "📡", art: "images/three.svg", title: L("雷达听音站", "Radar Listening"), description: L("听句子 · 选词", "Hear a sentence · choose"), mapDescription: L("听句子", "Listen"), mode: "listening", reward: 2, bonus: 8 },
  { id: "soundFill", icon: "🔊", art: "images/eat.svg", title: L("声波填空站", "Sound Fill"), description: L("听单词 · 补字母", "Hear a word · fill"), mapDescription: L("补字母", "Fill"), mode: "soundFill", reward: 2, bonus: 8 },
  { id: "spell", icon: "🧩", art: "images/two.svg", title: L("字母拼装舱", "Letter Builder"), description: L("拖字母 · 拼词", "Drag letters · spell"), mapDescription: L("拼字母", "Build"), mode: "spell", reward: 3, bonus: 10 },
  { id: "dictation", icon: "⌨️", art: "images/black.svg", title: L("拼写键盘舱", "Spelling Keys"), description: L("听读音 · 拼词", "Listen · spell"), mapDescription: L("键盘拼写", "Keys"), mode: "dictation", reward: 5, bonus: 14 },
  { id: "handwriting", icon: "✍️", art: "images/one.svg", title: L("星际默写台", "Writing Deck"), description: L("听后 · 手写", "Listen · write"), mapDescription: L("手写", "Write"), mode: "handwriting", reward: 15, bonus: 40 }
];

const ROCKET_PARTS = [
  { id: "nose-cone", icon: "🔺", name: L("星盾鼻锥", "Starshield nose"), price: 6 },
  { id: "cockpit-glass", icon: "🔵", name: L("水晶座舱", "Crystal cockpit"), price: 9 },
  { id: "antenna", icon: "📡", name: L("信号天线", "Signal antenna"), price: 7 },
  { id: "navigation-light", icon: "💡", name: L("导航灯", "Nav light"), price: 5 },
  { id: "hull-core", icon: "🛡️", name: L("蓝虎机身", "Blue hull"), price: 14 },
  { id: "left-wing", icon: "◀️", name: L("左翼", "Left wing"), price: 12 },
  { id: "right-wing", icon: "▶️", name: L("右翼", "Right wing"), price: 12 },
  { id: "left-fin", icon: "🔻", name: L("左尾翼", "Left fin"), price: 10 },
  { id: "right-fin", icon: "🔺", name: L("右尾翼", "Right fin"), price: 10 },
  { id: "fuel-tank", icon: "🧪", name: L("能量燃料罐", "Fuel tank"), price: 13 },
  { id: "engine-core", icon: "⚙️", name: L("引擎核心", "Engine core"), price: 18 },
  { id: "left-thruster", icon: "🔷", name: L("左推进器", "Left thruster"), price: 15 },
  { id: "right-thruster", icon: "🔷", name: L("右推进器", "Right thruster"), price: 15 },
  { id: "plasma-flame", icon: "🔥", name: L("等离子尾焰", "Plasma flame"), price: 9 },
  { id: "shield-ring", icon: "🫧", name: L("行星护盾", "Shield ring"), price: 22 },
  { id: "star-decals", icon: "✨", name: L("星星涂装", "Star decals"), price: 6 },
  { id: "radar-dish", icon: "🛰️", name: L("远程雷达", "Radar dish"), price: 12 },
  { id: "turbo-booster", icon: "⚡", name: L("涡轮加速器", "Turbo booster"), price: 24 },
  { id: "moon-flag", icon: "🚩", name: L("月球小旗", "Moon flag"), price: 8 },
  { id: "captain-seat", icon: "🧑‍🚀", name: L("指挥官座椅", "Captain seat"), price: 16 }
];

const COLLECTION_SETS = [
  { id: "rocket", icon: "🚀", name: L("星际火箭", "Star Rocket"), parts: ROCKET_PARTS.map((part) => part.name) },
  { id: "moon-base", icon: "🌕", name: L("月球基地", "Moon Base"), parts: [L("月岩地基", "Moon-rock base"), L("居住圆顶", "Habitat dome"), L("氧气门", "Airlock door"), L("太阳翼", "Solar wing"), L("月球旗", "Moon flag"), L("通讯塔", "Comms tower"), L("补给箱", "Supply crate"), L("观测镜", "Sky scope"), L("停机坪", "Landing pad"), L("基地徽章", "Base badge"), L("月尘扫帚", "Dust sweeper"), L("睡眠舱", "Sleep pod"), L("能量中枢", "Power hub"), L("月光灯", "Glow lamp"), L("星图桌", "Star-map table"), L("实验台", "Science bench"), L("守卫机器人", "Guard bot"), L("月球车库", "Rover garage"), L("补给火箭", "Supply rocket"), L("信标冠", "Beacon crown")] },
  { id: "alien-craft", icon: "🛸", name: L("探险飞船", "Explorer Ship"), parts: [L("探索船壳", "Explorer hull"), L("星云座舱", "Nebula cockpit"), L("导航尖翼", "Navigation fin"), L("左磁力翼", "Left magnet wing"), L("右磁力翼", "Right magnet wing"), L("能源球", "Energy orb"), L("导航环", "Navigation ring"), L("雷达盘", "Radar dish"), L("跃迁门", "Jump gate"), L("彩虹尾焰", "Rainbow flame"), L("飞船徽记", "Ship crest"), L("反重力芯", "Gravity core"), L("隐形护罩", "Cloak shell"), L("云端天线", "Cloud antenna"), L("月光引擎", "Moon engine"), L("星尘喷口", "Stardust nozzle"), L("激光灯", "Laser light"), L("宇宙方向盘", "Cosmic wheel"), L("时空座椅", "Time seat"), L("船长旗", "Captain flag")] },
  { id: "space-suit", icon: "🧑‍🚀", name: L("宇航战衣", "Astronaut Suit"), parts: [L("头盔外壳", "Helmet shell"), L("金色面罩", "Gold visor"), L("氧气背包", "Oxygen pack"), L("星纹战衣", "Star suit"), L("左手套", "Left glove"), L("右手套", "Right glove"), L("左月球靴", "Left moon boot"), L("右月球靴", "Right moon boot"), L("通讯耳机", "Comms earcup"), L("能量腰带", "Power belt"), L("护盾贴片", "Shield patch"), L("彗星披风", "Comet cape"), L("太阳护肩", "Solar shoulder"), L("反射护膝", "Reflect knee pad"), L("星光手环", "Star wristband"), L("导航袖标", "Nav armband"), L("补氧管", "Oxygen hose"), L("火箭拉链", "Rocket zip"), L("银河口袋", "Galaxy pocket"), L("勇气胸章", "Bravery badge")] },
  { id: "robot-buddy", icon: "🤖", name: L("任务机器人", "Mission Robot"), parts: [L("机器人头", "Robot head"), L("左闪亮眼", "Left bright eye"), L("右闪亮眼", "Right bright eye"), L("信号耳朵", "Signal ear"), L("金属身体", "Metal body"), L("左机械臂", "Left robot arm"), L("右机械臂", "Right robot arm"), L("左弹簧腿", "Left spring leg"), L("右弹簧腿", "Right spring leg"), L("能量核心", "Energy core"), L("工具箱", "Tool box"), L("表情面板", "Face panel"), L("火箭轮", "Rocket wheel"), L("星图芯片", "Star-map chip"), L("雷达天线", "Radar antenna"), L("音乐喇叭", "Music speaker"), L("磁力手掌", "Magnet palm"), L("夜光脚灯", "Glow foot light"), L("零食抽屉", "Snack drawer"), L("机器人徽章", "Robot badge")] },
  { id: "mars-rover", icon: "🛞", name: L("火星探测车", "Mars Rover"), parts: [L("红土底盘", "Mars chassis"), L("左前探测轮", "Left front wheel"), L("右前探测轮", "Right front wheel"), L("左后探测轮", "Left rear wheel"), L("右后探测轮", "Right rear wheel"), L("车顶雷达", "Roof radar"), L("前灯", "Headlight"), L("样本盒", "Sample box"), L("太阳能翼", "Solar wing"), L("机械臂", "Robot arm"), L("导航屏", "Nav screen"), L("避震器", "Shock absorber"), L("火星旗", "Mars flag"), L("沙暴护罩", "Storm shield"), L("陨石保险杠", "Meteor bumper"), L("岩石钻头", "Rock drill"), L("水晶车窗", "Crystal window"), L("能量电池", "Power battery"), L("补给背箱", "Supply pack"), L("极速引擎", "Speed engine")] },
  { id: "space-garden", icon: "🛸", name: L("轨道空间站", "Orbital Station"), parts: [L("轨道环", "Orbit ring"), L("主指挥舱", "Command hub"), L("对接门", "Docking port"), L("观察圆顶", "Lookout dome"), L("左太阳翼", "Left solar wing"), L("右太阳翼", "Right solar wing"), L("实验模块", "Lab module"), L("居住模块", "Habitat module"), L("通讯天线", "Comms antenna"), L("星图雷达", "Star-map radar"), L("左推进器", "Left thruster"), L("右推进器", "Right thruster"), L("补给吊舱", "Supply pod"), L("空中花园", "Orbital garden"), L("机器人臂", "Robot arm"), L("能量反应炉", "Power reactor"), L("观星镜头", "Star lens"), L("信号中继器", "Signal relay"), L("护盾发生器", "Shield generator"), L("空间站旗", "Station flag")] },
  { id: "satellite-station", icon: "🛰️", name: L("深空卫星", "Deep-space Satellite"), parts: [L("卫星主舱", "Satellite bus"), L("左太阳板", "Left solar panel"), L("右太阳板", "Right solar panel"), L("大天线", "High-gain antenna"), L("信号灯", "Signal light"), L("观察镜头", "Observation lens"), L("星图屏", "Star-map screen"), L("姿态推进器", "Attitude thruster"), L("数据盒", "Data box"), L("轨道环", "Orbit ring"), L("云层雷达", "Cloud radar"), L("补给吊舱", "Supply pod"), L("太空网线", "Space tether"), L("闪光中继器", "Flash relay"), L("远航电池", "Long-range battery"), L("月球接收器", "Moon receiver"), L("卫星护盾", "Satellite shield"), L("微型相机", "Micro camera"), L("导航陀螺", "Nav gyro"), L("任务徽章", "Mission badge")] },
  { id: "alien-pet", icon: "👾", name: L("外星探险家", "Alien Explorer"), parts: [L("圆圆脑袋", "Round head"), L("左闪闪眼", "Left bright eye"), L("右闪闪眼", "Right bright eye"), L("左触角", "Left antenna"), L("右触角", "Right antenna"), L("彩色身体", "Color body"), L("弹跳左脚", "Left bounce boot"), L("弹跳右脚", "Right bounce boot"), L("能量背包", "Energy pack"), L("探索护目镜", "Explorer goggles"), L("月光项圈", "Moon collar"), L("星尘毛刷", "Stardust brush"), L("火箭工具", "Rocket tool"), L("银河水壶", "Galaxy canteen"), L("彩虹耳朵", "Rainbow ear"), L("探测披风", "Explorer cape"), L("超能爪子", "Power claw"), L("笑脸贴纸", "Smile decal"), L("探险地图", "Explorer map"), L("探险奖牌", "Explorer medal")] },
  { id: "cosmic-trophy", icon: "🏎️", name: L("星际赛车", "Cosmic Race Car"), parts: [L("流星底盘", "Meteor chassis"), L("火箭车头", "Rocket nose"), L("水晶座舱", "Crystal cockpit"), L("左前轮", "Left front wheel"), L("右前轮", "Right front wheel"), L("左后轮", "Left rear wheel"), L("右后轮", "Right rear wheel"), L("银河扰流板", "Galaxy spoiler"), L("左推进器", "Left booster"), L("右推进器", "Right booster"), L("光速引擎", "Lightspeed engine"), L("星尘排气口", "Stardust exhaust"), L("月光车灯", "Moon headlights"), L("彗星方向盘", "Comet steering wheel"), L("护盾保险杠", "Shield bumper"), L("能量电池", "Power battery"), L("冠军条纹", "Champion stripe"), L("火星旗", "Mars flag"), L("胜利按钮", "Victory button"), L("冠军徽章", "Champion badge")] }
];

const COLLECTION_PART_ICONS = ["🧱", "🔭", "🚪", "☀️", "🚩", "📡", "📦", "🔍", "🛬", "✨", "⚙️", "🧲", "💎", "🛡️", "🔋", "🪑", "🎛️", "🪐", "🌠", "🏅"];
const COLLECTION_PARTS = COLLECTION_SETS.flatMap((collection, collectionIndex) => {
  if (collection.id === "rocket") {
    return ROCKET_PARTS.map((part) => ({
      ...part,
      collectionId: collection.id
    }));
  }
  return collection.parts.map((name, partIndex) => ({
    id: `${collection.id}-${partIndex + 1}`,
    collectionId: collection.id,
    icon: COLLECTION_PART_ICONS[partIndex],
    name,
    price: 8 + ((collectionIndex * 3 + partIndex * 2) % 16)
  }));
});

const SVG_NS = "http://www.w3.org/2000/svg";
const svgJoin = (...items) => items.join("");
const svgRect = (x, y, width, height, fill, rx = 7) => `<rect x="${x}" y="${y}" width="${width}" height="${height}" rx="${rx}" fill="${fill}"/>`;
const svgCircle = (cx, cy, r, fill) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${fill}"/>`;
const svgEllipse = (cx, cy, rx, ry, fill) => `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="${fill}"/>`;
const svgPath = (d, fill = "none") => `<path d="${d}" fill="${fill}"/>`;
const svgLine = (x1, y1, x2, y2, stroke = "#d8f8ff", width = 5) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${stroke}" stroke-width="${width}" fill="none"/>`;
const svgPolygon = (points, fill) => `<polygon points="${points}" fill="${fill}"/>`;
const svgText = (x, y, text, fill, size = 26) => `<text x="${x}" y="${y}" fill="${fill}" font-size="${size}" text-anchor="middle">${text}</text>`;

const COLLECTION_ASSEMBLY_ART = {
  rocket: [
    svgPath("M220 12 L262 87 L178 87 Z", "#ff9c51"),
    svgCircle(220, 111, 29, "#58dcef"),
    svgJoin(svgLine(220, 17, 220, 0, "#c9f8ff", 4), svgCircle(220, 0, 7, "#ffe476")),
    svgCircle(263, 111, 8, "#ffe477"),
    svgPath("M172 99 Q220 73 268 99 L276 232 Q220 258 164 232 Z", "#2587cf"),
    svgPath("M166 164 L91 244 L166 235 Z", "#ff7d58"),
    svgPath("M274 164 L349 244 L274 235 Z", "#ff7d58"),
    svgPath("M171 217 L129 260 L171 252 Z", "#ffd86e"),
    svgPath("M269 217 L311 260 L269 252 Z", "#ffd86e"),
    svgRect(201, 207, 38, 56, "#3fc2ad", 14),
    svgRect(190, 254, 60, 28, "#7163cd", 11),
    svgRect(145, 251, 44, 34, "#2a95cf", 11),
    svgRect(251, 251, 44, 34, "#2a95cf", 11),
    svgPath("M220 316 L193 278 L207 284 L220 272 L233 284 L247 278 Z", "#ff8d4e"),
    svgEllipse(220, 165, 98, 57, "none"),
    svgJoin(svgText(201, 174, "✦", "#fff29a", 27), svgText(239, 195, "✦", "#fff29a", 20)),
    svgJoin(svgEllipse(325, 79, 23, 11, "#a4f4ff"), svgLine(331, 86, 343, 107, "#a4f4ff", 4)),
    svgRect(310, 214, 32, 68, "#8a68d8", 14),
    svgJoin(svgLine(116, 82, 116, 151, "#e7fbff", 4), svgPolygon("118,83 153,95 118,110", "#ffe478")),
    svgJoin(svgRect(211, 139, 18, 25, "#f276a1", 7), svgCircle(220, 133, 9, "#ffd8b8"))
  ],
  "moon-base": [
    svgPath("M58 278 Q151 245 220 270 Q310 238 390 278 L390 306 L58 306 Z", "#7486a8"),
    svgPath("M139 249 A81 81 0 0 1 301 249 Z", "#6fc9e8"),
    svgJoin(svgRect(196, 214, 48, 63, "#335a86", 10), svgCircle(220, 231, 8, "#bffaff")),
    svgJoin(svgPolygon("67,196 128,214 118,241 57,222", "#567ed1"), svgLine(72, 207, 119, 222, "#d6fbff", 3)),
    svgJoin(svgLine(93, 175, 93, 260, "#effdff", 4), svgPolygon("95,177 133,190 95,205", "#ffdf74")),
    svgJoin(svgLine(321, 136, 321, 266, "#bcf6ff", 5), svgCircle(321, 131, 11, "#ffde73")),
    svgJoin(svgRect(286, 243, 45, 34, "#cf8a56", 5), svgLine(292, 255, 325, 255, "#ffe58b", 3)),
    svgJoin(svgLine(151, 175, 127, 248, "#dbf9ff", 4), svgEllipse(154, 168, 24, 15, "#8fe7fa")),
    svgJoin(svgEllipse(346, 267, 42, 19, "#7971d3"), svgCircle(346, 267, 8, "#fff3a3")),
    svgCircle(270, 194, 14, "#ffda70"),
    svgJoin(svgLine(115, 262, 130, 279, "#9fdcf2", 4), svgLine(130, 262, 115, 279, "#9fdcf2", 4)),
    svgJoin(svgRect(105, 230, 43, 42, "#8d79d5", 13), svgEllipse(127, 230, 21, 7, "#c9f7ff")),
    svgJoin(svgRect(252, 230, 31, 47, "#48c6af", 7), svgCircle(268, 246, 8, "#ffe477")),
    svgJoin(svgLine(182, 199, 182, 263, "#ffec8a", 4), svgCircle(182, 194, 9, "#ffe477")),
    svgJoin(svgRect(160, 255, 37, 17, "#df9e6b", 5), svgCircle(173, 252, 4, "#bdf7ff")),
    svgJoin(svgRect(286, 250, 35, 22, "#a46dce", 5), svgLine(292, 257, 315, 257, "#c9f8ff", 3)),
    svgJoin(svgRect(337, 239, 21, 29, "#8bc8dc", 6), svgCircle(343, 247, 4, "#ffec7d"), svgCircle(352, 247, 4, "#ffec7d")),
    svgJoin(svgRect(61, 244, 45, 34, "#526fa9", 6), svgPath("M63 245 Q84 223 105 245 Z", "#8eeafb")),
    svgJoin(svgPath("M353 246 L374 196 L385 246 Z", "#ff8d59"), svgCircle(374, 191, 7, "#d6fbff")),
    svgJoin(svgCircle(220, 165, 16, "#f6df75"), svgPolygon("220,139 225,157 244,157 229,168 235,187 220,176 205,187 211,168 196,157 215,157", "#fff6ad"))
  ],
  "alien-craft": [
    svgEllipse(220, 226, 149, 55, "#5e66b7"),
    svgEllipse(220, 190, 91, 72, "#936ed2"),
    svgEllipse(220, 164, 43, 29, "#81ebf5"),
    svgPolygon("220,113 241,155 199,155", "#ffd774"),
    svgPath("M151 191 L69 212 L160 229 Z", "#55c7ce"),
    svgPath("M289 191 L371 212 L280 229 Z", "#55c7ce"),
    svgCircle(220, 232, 28, "#ffdf74"),
    svgEllipse(220, 191, 121, 84, "none"),
    svgJoin(svgEllipse(114, 238, 42, 62, "#9d7de2"), svgEllipse(326, 238, 42, 62, "#9d7de2")),
    svgPath("M164 258 Q220 320 276 258 Q220 284 164 258 Z", "#ff86a4"),
    svgText(220, 221, "✦", "#fff5aa", 38),
    svgCircle(220, 248, 19, "#6cf2dc"),
    svgPath("M154 174 Q220 115 286 174 L278 184 Q220 140 162 184 Z", "#b7d8f4"),
    svgJoin(svgLine(274, 147, 307, 111, "#c9fbff", 4), svgCircle(309, 108, 8, "#fff279")),
    svgJoin(svgEllipse(220, 267, 46, 17, "#ff9b4f"), svgCircle(220, 267, 8, "#fff4a1")),
    svgJoin(svgCircle(145, 214, 10, "#ffef86"), svgCircle(295, 214, 10, "#ffef86")),
    svgJoin(svgCircle(220, 208, 13, "#53afe2"), svgLine(220, 201, 220, 214, "#edfbff", 3)),
    svgJoin(svgRect(203, 245, 34, 20, "#db8f65", 7), svgCircle(211, 255, 4, "#ffed89")),
    svgEllipse(220, 194, 154, 101, "none"),
    svgJoin(svgLine(334, 226, 334, 168, "#e9fbff", 4), svgPolygon("336,168 362,178 336,190", "#ffdc70"))
  ],
  "space-suit": [
    svgCircle(220, 73, 48, "#eef8ff"),
    svgEllipse(220, 73, 34, 25, "#5ec8e4"),
    svgJoin(svgRect(274, 106, 46, 90, "#6d83be", 13), svgCircle(297, 120, 9, "#ffde73")),
    svgPath("M177 119 Q220 101 263 119 L279 238 Q220 254 161 238 Z", "#f5fbff"),
    svgPath("M166 135 L119 205 L151 222 L188 165 Z", "#77cce1"),
    svgPath("M274 135 L321 205 L289 222 L252 165 Z", "#77cce1"),
    svgPath("M179 232 L169 301 L205 301 L214 244 Z", "#75b9d7"),
    svgPath("M261 232 L271 301 L235 301 L226 244 Z", "#75b9d7"),
    svgJoin(svgCircle(265, 78, 11, "#bff9ff"), svgLine(269, 83, 283, 104, "#bff9ff", 4)),
    svgRect(176, 191, 88, 14, "#f4d76d", 6),
    svgPath("M190 145 L220 129 L250 145 L241 176 L199 176 Z", "#81e8d8"),
    svgPath("M159 126 L132 155 L161 189 Z", "#b375d1"),
    svgPath("M261 126 L288 155 L259 189 Z", "#ffd872"),
    svgJoin(svgRect(170, 234, 37, 21, "#abd7e9", 8), svgRect(233, 234, 37, 21, "#abd7e9", 8)),
    svgJoin(svgCircle(153, 196, 11, "#ffdf75"), svgLine(153, 196, 169, 196, "#d9fbff", 4)),
    svgJoin(svgRect(243, 159, 14, 42, "#c5e8f5", 5), svgCircle(250, 179, 4, "#ffdc72")),
    svgJoin(svgLine(275, 120, 259, 194, "#64d3e3", 5), svgCircle(277, 116, 7, "#d4faff")),
    svgJoin(svgLine(220, 120, 220, 230, "#f0a065", 4), svgCircle(220, 133, 4, "#ffef87")),
    svgJoin(svgRect(183, 205, 28, 25, "#a780da", 5), svgCircle(204, 217, 4, "#ffe678")),
    svgJoin(svgCircle(220, 160, 11, "#ffde74"), svgPolygon("220,146 224,156 235,156 226,163 230,174 220,168 210,174 214,163 205,156 216,156", "#fff5a7"))
  ],
  "robot-buddy": [
    svgRect(158, 52, 124, 94, "#6d8fc5", 25),
    svgCircle(191, 94, 17, "#ffea78"),
    svgCircle(249, 94, 17, "#ffea78"),
    svgJoin(svgRect(137, 77, 22, 41, "#8be1ef", 8), svgCircle(147, 95, 5, "#ffdf76")),
    svgRect(164, 144, 112, 101, "#4a7db8", 19),
    svgPath("M164 159 L99 205 L120 229 L177 191 Z", "#79cce2"),
    svgPath("M276 159 L341 205 L320 229 L263 191 Z", "#79cce2"),
    svgPath("M184 240 L167 302 L204 302 L215 247 Z", "#7f9ed0"),
    svgPath("M256 240 L273 302 L236 302 L225 247 Z", "#7f9ed0"),
    svgCircle(220, 192, 27, "#ffdc71"),
    svgJoin(svgRect(109, 223, 42, 35, "#ba7ecf", 8), svgLine(116, 234, 144, 234, "#dffaff", 3)),
    svgJoin(svgRect(184, 113, 72, 18, "#274d7b", 6), svgCircle(220, 121, 5, "#70ebf5")),
    svgJoin(svgCircle(174, 269, 25, "#5d75b8"), svgCircle(266, 269, 25, "#5d75b8")),
    svgRect(195, 155, 50, 22, "#69c9dc", 6),
    svgJoin(svgLine(220, 51, 220, 17, "#d7fbff", 5), svgCircle(220, 13, 9, "#ffdf76")),
    svgJoin(svgCircle(330, 222, 14, "#915fd0"), svgLine(319, 222, 341, 222, "#edfaff", 3)),
    svgJoin(svgCircle(118, 213, 12, "#6af0dd"), svgLine(111, 213, 125, 213, "#fff4aa", 3)),
    svgJoin(svgCircle(184, 302, 9, "#80ecf0"), svgCircle(256, 302, 9, "#80ecf0")),
    svgJoin(svgRect(245, 212, 25, 23, "#526c9f", 5), svgLine(250, 221, 264, 221, "#ffdd71", 3)),
    svgJoin(svgCircle(220, 224, 11, "#ffdc71"), svgPolygon("220,211 224,220 234,220 226,226 230,236 220,230 210,236 214,226 206,220 216,220", "#fff4ad"))
  ],
  "mars-rover": [
    svgPath("M87 210 Q220 164 353 210 L337 263 Q220 285 103 263 Z", "#be6d4f"),
    svgCircle(132, 270, 29, "#4e5a76"),
    svgCircle(308, 270, 29, "#4e5a76"),
    svgCircle(174, 277, 25, "#4e5a76"),
    svgCircle(266, 277, 25, "#4e5a76"),
    svgJoin(svgLine(220, 177, 220, 90, "#c8f8ff", 5), svgEllipse(220, 82, 29, 14, "#7ae4ef")),
    svgJoin(svgCircle(112, 206, 12, "#ffed81"), svgCircle(137, 198, 10, "#ffed81")),
    svgRect(284, 195, 48, 37, "#d08d58", 7),
    svgPolygon("102,190 172,176 181,203 111,216", "#6f80ca"),
    svgJoin(svgLine(325, 213, 380, 168, "#c8f8ff", 8), svgCircle(385, 164, 15, "#8ae9f2")),
    svgRect(189, 192, 61, 33, "#496e9d", 7),
    svgJoin(svgLine(121, 245, 155, 258, "#c8f8ff", 6), svgLine(285, 258, 319, 245, "#c8f8ff", 6)),
    svgJoin(svgLine(343, 183, 343, 224, "#effcff", 4), svgPolygon("345,183 375,192 345,204", "#ffe075")),
    svgPath("M135 181 Q220 136 305 181 L295 194 Q220 159 145 194 Z", "#8f8bd1"),
    svgRect(82, 231, 31, 23, "#7d5e69", 6),
    svgJoin(svgLine(98, 255, 69, 292, "#e8fbff", 6), svgCircle(65, 296, 12, "#ffde73")),
    svgEllipse(220, 190, 43, 25, "#80d8ed"),
    svgRect(253, 218, 30, 37, "#48c8af", 7),
    svgRect(296, 231, 36, 30, "#6a75c4", 8),
    svgJoin(svgRect(205, 230, 31, 37, "#704d76", 8), svgCircle(220, 249, 9, "#ffe174"))
  ],
  "space-garden": [
    svgEllipse(220, 174, 137, 105, "none"),
    svgRect(171, 154, 98, 83, "#527db4", 16),
    svgCircle(220, 145, 28, "#91e5f1"),
    svgRect(198, 188, 44, 46, "#274c78", 8),
    svgPolygon("55,149 164,172 158,204 49,180", "#6685d2"),
    svgPolygon("385,149 276,172 282,204 391,180", "#6685d2"),
    svgRect(95, 181, 67, 47, "#7d7fd1", 12),
    svgRect(278, 181, 67, 47, "#7d7fd1", 12),
    svgJoin(svgLine(220, 116, 220, 69, "#d5faff", 5), svgCircle(220, 64, 9, "#ffe37a")),
    svgJoin(svgLine(278, 143, 315, 107, "#d5faff", 5), svgEllipse(320, 102, 20, 11, "#8ee7f3")),
    svgRect(142, 230, 26, 38, "#5677bd", 8),
    svgRect(272, 230, 26, 38, "#5677bd", 8),
    svgJoin(svgRect(319, 213, 41, 31, "#cc8d5a", 7), svgCircle(329, 226, 5, "#ffdd78")),
    svgJoin(svgRect(111, 215, 37, 29, "#5ac2a8", 7), svgCircle(129, 215, 15, "#84edc4")),
    svgJoin(svgLine(159, 220, 114, 263, "#d4faff", 7), svgCircle(106, 269, 15, "#7ce4ed")),
    svgCircle(220, 255, 25, "#ffdc72"),
    svgJoin(svgCircle(258, 142, 13, "#8cecf2"), svgLine(258, 142, 258, 177, "#e4fbff", 4)),
    svgJoin(svgRect(287, 158, 29, 19, "#71e4ee", 5), svgLine(293, 167, 310, 167, "#ffdf75", 3)),
    svgJoin(svgEllipse(220, 173, 118, 87, "none"), svgCircle(323, 176, 8, "#73efdb")),
    svgJoin(svgLine(348, 214, 348, 162, "#e8fbff", 4), svgPolygon("350,162 381,173 350,185", "#ffe077"))
  ],
  "satellite-station": [
    svgRect(174, 123, 92, 89, "#527cb3", 17),
    svgPolygon("46,130 168,150 168,183 46,163", "#6e8ddb"),
    svgPolygon("394,130 272,150 272,183 394,163", "#6e8ddb"),
    svgJoin(svgLine(220, 124, 220, 57, "#d8fbff", 5), svgEllipse(220, 49, 27, 14, "#8eeaf2")),
    svgCircle(249, 142, 9, "#ffdf75"),
    svgCircle(202, 155, 22, "#92e9f3"),
    svgRect(207, 180, 47, 21, "#274f7f", 6),
    svgJoin(svgRect(153, 198, 22, 31, "#6d74c1", 7), svgPath("M155 228 L143 249 L171 249 L173 228 Z", "#8ae6ef")),
    svgRect(278, 171, 37, 34, "#d18c5c", 7),
    svgEllipse(220, 166, 146, 92, "none"),
    svgJoin(svgLine(279, 126, 323, 91, "#d8fbff", 4), svgCircle(329, 86, 9, "#ffdf75")),
    svgJoin(svgRect(318, 202, 40, 29, "#a879d2", 7), svgCircle(327, 214, 5, "#ffdf75")),
    svgJoin(svgLine(165, 191, 137, 231, "#d8fbff", 4), svgLine(274, 204, 304, 236, "#d8fbff", 4)),
    svgJoin(svgRect(245, 204, 35, 27, "#7c8dda", 6), svgCircle(254, 217, 5, "#ffe275")),
    svgRect(180, 217, 34, 41, "#4bc3aa", 7),
    svgJoin(svgLine(199, 118, 167, 78, "#d8fbff", 4), svgEllipse(159, 71, 17, 9, "#8cebf3")),
    svgPath("M166 115 Q220 78 274 115 L267 126 Q220 99 173 126 Z", "#a07ed7"),
    svgCircle(304, 156, 13, "#8beaf2"),
    svgCircle(220, 231, 16, "#ffdb72"),
    svgJoin(svgCircle(220, 231, 10, "#ffdc72"), svgPolygon("220,217 224,227 235,227 226,234 230,245 220,239 210,245 214,234 205,227 216,227", "#fff5ac"))
  ],
  "alien-pet": [
    svgCircle(220, 92, 62, "#80d978"),
    svgCircle(194, 91, 16, "#ffffae"),
    svgCircle(246, 91, 16, "#ffffae"),
    svgJoin(svgLine(188, 42, 171, 18, "#d7fbff", 4), svgCircle(168, 14, 8, "#ffdf76")),
    svgJoin(svgLine(252, 42, 269, 18, "#d7fbff", 4), svgCircle(272, 14, 8, "#ffdf76")),
    svgPath("M159 154 Q220 126 281 154 L294 261 Q220 288 146 261 Z", "#6fc8b0"),
    svgEllipse(184, 274, 31, 17, "#7e7cd1"),
    svgEllipse(256, 274, 31, 17, "#7e7cd1"),
    svgJoin(svgRect(278, 143, 49, 86, "#7e79d0", 13), svgCircle(303, 158, 9, "#ffdf75")),
    svgJoin(svgRect(166, 63, 108, 34, "#5f82b8", 16), svgCircle(220, 78, 7, "#fff19b")),
    svgEllipse(220, 154, 44, 12, "#ffe079"),
    svgJoin(svgLine(157, 215, 115, 233, "#d9fbff", 5), svgCircle(110, 238, 11, "#a174d4")),
    svgJoin(svgRect(127, 219, 25, 39, "#ff965b", 6), svgCircle(139, 215, 12, "#ffdf75")),
    svgJoin(svgRect(242, 217, 29, 41, "#6b9ed4", 7), svgCircle(256, 237, 5, "#ffdf75")),
    svgJoin(svgEllipse(147, 89, 20, 29, "#df82d1"), svgEllipse(293, 89, 20, 29, "#df82d1")),
    svgPath("M277 158 L331 119 L315 215 Z", "#a878d5"),
    svgJoin(svgCircle(151, 230, 13, "#ffdf75"), svgLine(151, 222, 151, 238, "#f9ffff", 3)),
    svgText(220, 211, "✦", "#fff5ad", 31),
    svgJoin(svgRect(192, 234, 56, 26, "#5976b6", 7), svgLine(200, 244, 240, 244, "#bdf8ff", 3)),
    svgJoin(svgCircle(220, 274, 13, "#ffdc72"), svgPolygon("220,260 224,270 235,270 226,277 230,288 220,282 210,288 214,277 205,270 216,270", "#fff5ac"))
  ],
  "cosmic-trophy": [
    svgPath("M77 223 Q220 154 363 223 L338 267 Q220 292 102 267 Z", "#6c6fd0"),
    svgPath("M107 214 L160 178 L208 203 L183 229 Z", "#ff915b"),
    svgPath("M208 202 Q220 151 275 177 L298 222 Z", "#8ae6ef"),
    svgCircle(139, 270, 31, "#4c5777"),
    svgCircle(301, 270, 31, "#4c5777"),
    svgCircle(191, 277, 26, "#4c5777"),
    svgCircle(249, 277, 26, "#4c5777"),
    svgPath("M159 178 L281 178 L307 153 L136 153 Z", "#ba7bd1"),
    svgRect(86, 230, 33, 45, "#ff8c56", 13),
    svgRect(321, 230, 33, 45, "#ff8c56", 13),
    svgJoin(svgRect(195, 236, 49, 32, "#50c3ad", 8), svgCircle(220, 252, 9, "#ffdf75")),
    svgJoin(svgEllipse(220, 277, 37, 14, "#ff965a"), svgCircle(220, 277, 8, "#ffed91")),
    svgJoin(svgCircle(112, 220, 13, "#ffec82"), svgCircle(132, 212, 10, "#ffec82")),
    svgJoin(svgCircle(220, 199, 9, "#ffdf75"), svgLine(210, 189, 230, 189, "#d7fbff", 4)),
    svgPath("M75 239 L104 242 L92 258 L67 255 Z", "#82e8e8"),
    svgRect(263, 223, 31, 36, "#4bc4ad", 7),
    svgPath("M161 228 L279 228 L268 242 L172 242 Z", "#ffde73"),
    svgJoin(svgLine(332, 213, 332, 166, "#ebfcff", 4), svgPolygon("334,166 363,177 334,189", "#ffdf75")),
    svgJoin(svgCircle(240, 235, 12, "#ffdc73"), svgLine(240, 227, 240, 243, "#f8ffff", 3)),
    svgJoin(svgCircle(220, 217, 13, "#ffdc72"), svgPolygon("220,203 224,213 235,213 226,220 230,231 220,225 210,231 214,220 205,213 216,213", "#fff5ac"))
  ]
};

const BONUS_CHALLENGE = { word: "space", clue: L("太空", "outer space"), scramble: ["A", "E", "P", "S", "C"] };

const LEGACY_GEAR_MAP = {
  "rocket-scout": "nose-cone",
  "rocket-turbo": "cockpit-glass",
  "ship-orbit": "antenna",
  "ship-nebula": "navigation-light",
  "suit-green": "hull-core",
  "suit-purple": "left-wing",
  "helmet-crystal": "right-wing",
  "helmet-comet": "left-fin",
  "jetpack-blue": "right-fin",
  "jetpack-flame": "fuel-tank",
  "rover-moon": "engine-core",
  "rover-mars": "left-thruster",
  "robot-pip": "right-thruster",
  "robot-orbit": "plasma-flame",
  "flag-moon": "shield-ring",
  "flag-star": "star-decals",
  "glider-asteroid": "radar-dish",
  "glider-comet": "turbo-booster",
  "badge-sun": "moon-flag",
  "badge-galaxy": "captain-seat"
};

const AVATARS = [
  { id: "astronaut", emoji: "🧑‍🚀", label: L("小宇航员", "Astronaut") },
  { id: "robot", emoji: "🤖", label: L("机器人", "Robot") },
  { id: "pilot", emoji: "🧑‍✈️", label: L("飞行员", "Pilot") },
  { id: "alien", emoji: "👾", label: L("小外星人", "Alien") },
  { id: "tiger", emoji: "🐯", label: L("太空虎", "Space tiger") },
  { id: "fox", emoji: "🦊", label: L("星际小狐", "Space fox") },
  { id: "dino", emoji: "🦖", label: L("火箭恐龙", "Rocket dino") },
  { id: "cat", emoji: "🐈‍⬛", label: L("月球黑猫", "Moon cat") }
];

const SFX_TRACKS = {
  tap: "audio/sfx/tap.wav",
  type: "audio/sfx/type.wav",
  delete: "audio/sfx/delete.wav",
  wrong: "audio/sfx/wrong.wav",
  correct: "audio/sfx/correct.wav",
  purchase: "audio/sfx/purchase.wav",
  enter: "audio/sfx/enter.wav"
};

const BACKGROUND_TRACKS = {
  landingScreen: "audio/bgm/home.wav",
  gardenScreen: "audio/bgm/garden.wav",
  workshopHomeScreen: "audio/bgm/workshop.wav",
  workshopScreen: "audio/bgm/workshop.wav"
};

const BGM_VOLUME = 0.3;
const BGM_DUCKED_VOLUME = 0.09;
const HANDWRITING_PEN_WIDTH = 5;
const HANDWRITING_ERASER_WIDTH = 42;
const WRONG_EFFECT_COOLDOWN = 650;

const WORD_BY_ID = new Map(WORDS.map((entry) => [entry.id, entry]));
const AVATAR_BY_ID = new Map(AVATARS.map((avatar) => [avatar.id, avatar]));
const ROCKET_PART_IDS = new Set(ROCKET_PARTS.map((item) => item.id));
const COLLECTION_PART_IDS = new Set(COLLECTION_PARTS.map((item) => item.id));
const PROFILE_STORE_KEY = "word-space-quest-profiles-v7";
const LEGACY_PROFILE_KEYS = ["word-space-quest-profiles-v6", "word-space-quest-profiles-v5", "word-space-quest-profile-v4"];
const $ = (selector) => document.querySelector(selector);

const game = {
  active: false,
  stageIndex: 0,
  roundIndex: 0,
  rounds: [],
  sentence: null,
  locked: false,
  letterBank: [],
  placedLetters: [],
  allowLetterReuse: false,
  keyboardMode: false,
  spellingBlocks: [],
  lastTypedValue: ""
};

let storageWarning = "";
let saveBook = loadSaveBook();
let player = getActiveProfile() || createDefaultProfile(defaultProfileName(), "astronaut", "preview-profile");
let selectedAvatarId = player.avatarId;
let editingProfileId = null;
let pendingDeleteProfileId = null;
let activeVoice = null;
let activeVoiceButton = null;
let activeBackgroundMusic = null;
let activeDrag = null;
let gardenWordId = "one";
let selectedCollectionId = COLLECTION_SETS[0].id;
let toastTimer = 0;
let audioPrimed = false;
let activeBonusChallenge = null;
let promptSequenceId = 0;
let activeVoiceCompletion = null;
let lastWrongEffectAt = -Infinity;
let roundAdvanceTimer = 0;
let handwritingBoard = null;
let handwritingSession = null;

const audioMaps = {
  word: new Map(),
  sentence: new Map(),
  bonus: new Map(),
  sfx: new Map(),
  bgm: new Map()
};

function createProfileId() {
  if (window.crypto && typeof window.crypto.randomUUID === "function") return window.crypto.randomUUID();
  return `pilot-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function cleanPlayerName(value) {
  return typeof value === "string" ? value.trim().replace(/\s+/g, " ").slice(0, 12) : "";
}

function createDefaultProfile(name = defaultProfileName(), avatarId = "astronaut", id = createProfileId()) {
  return {
    id,
    name: cleanPlayerName(name) || defaultProfileName(),
    avatarId: AVATAR_BY_ID.has(avatarId) ? avatarId : "astronaut",
    version: 9,
    language: readStoredLanguage(),
    stars: 20,
    ownedRocketParts: [],
    ownedCollectionParts: [],
    activeCollectionId: "rocket",
    progress: { listening: [], soundFill: [], spell: [], dictation: [], handwriting: [] },
    stageSessions: {},
    mission: null,
    handwritingSession: null,
    updatedAt: null
  };
}

function normalizeHandwritingSession(candidate) {
  if (!candidate || typeof candidate !== "object" || !Array.isArray(candidate.roundIds) || !Array.isArray(candidate.entries)) {
    return null;
  }
  const validIds = new Set(WORDS.map((entry) => entry.id));
  const roundIds = candidate.roundIds.filter((id) => validIds.has(id));
  if (roundIds.length !== WORDS.length) return null;
  const seen = new Set();
  const entries = candidate.entries
    .filter((entry) => entry && validIds.has(entry.id) && typeof entry.image === "string" && entry.image.startsWith("data:image/"))
    .map((entry) => ({
      id: entry.id,
      image: entry.image,
      status: entry.status === "approved" ? "approved" : "pending",
      hasInk: entry.hasInk !== false
    }))
    .filter((entry) => {
      if (seen.has(entry.id)) return false;
      seen.add(entry.id);
      return true;
    });
  const reviewIndex = Number.isInteger(candidate.reviewIndex)
    ? Math.min(Math.max(candidate.reviewIndex, 0), roundIds.length - 1)
    : Number.isInteger(candidate.reviewPage)
      ? Math.min(Math.max(candidate.reviewPage, 0), roundIds.length - 1)
      : 0;
  const validReviewEntryId = typeof candidate.reviewEntryId === "string" && roundIds.includes(candidate.reviewEntryId)
    ? candidate.reviewEntryId
    : roundIds[reviewIndex] || null;
  const validEditingEntryId = typeof candidate.editingEntryId === "string" && roundIds.includes(candidate.editingEntryId)
    ? candidate.editingEntryId
    : null;
  return {
    roundIds,
    entries,
    currentIndex: Number.isInteger(candidate.currentIndex) ? Math.min(Math.max(candidate.currentIndex, 0), roundIds.length) : entries.length,
    reviewIndex,
    reviewMode: candidate.reviewMode === "detail" ? "detail" : "overview",
    reviewEntryId: validReviewEntryId,
    editingEntryId: validEditingEntryId,
    reviewing: Boolean(candidate.reviewing)
  };
}

function normalizeStageSession(stageIndex, candidate) {
  if (!candidate || typeof candidate !== "object" || !Array.isArray(candidate.roundIds)) return null;
  const source = getStageSource(stageIndex);
  const validIds = new Set(source.map((entry) => entry.id));
  const roundIds = candidate.roundIds.filter((id) => validIds.has(id));
  if (roundIds.length !== source.length || new Set(roundIds).size !== source.length) return null;
  return {
    roundIds,
    roundIndex: Number.isInteger(candidate.roundIndex)
      ? Math.min(Math.max(candidate.roundIndex, 0), roundIds.length - 1)
      : 0,
    replay: candidate.replay === true,
    savedAt: typeof candidate.savedAt === "string" ? candidate.savedAt : null
  };
}

function normalizeStageSessions(candidate) {
  const sessions = {};
  if (!candidate || typeof candidate !== "object") return sessions;
  STAGES.forEach((stage, stageIndex) => {
    const session = normalizeStageSession(stageIndex, candidate[stage.id]);
    if (session) sessions[stage.id] = session;
  });
  return sessions;
}

function getStageSource(stageIndex) {
  return STAGES[stageIndex].mode === "soundFill" ? FILL_QUESTIONS : WORDS;
}

function normalizeProfile(candidate, fallbackName = defaultProfileName()) {
  const profile = createDefaultProfile(
    cleanPlayerName(candidate && candidate.name) || fallbackName,
    candidate && candidate.avatarId,
    candidate && typeof candidate.id === "string" ? candidate.id : createProfileId()
  );
  if (!candidate || typeof candidate !== "object") return profile;

  profile.stars = Number.isFinite(Number(candidate.stars)) ? Math.max(0, Math.floor(Number(candidate.stars))) : profile.stars;
  profile.language = SUPPORTED_LANGUAGES.has(candidate.language) ? candidate.language : readStoredLanguage();
  const rocketSource = Array.isArray(candidate.ownedRocketParts)
    ? candidate.ownedRocketParts
    : Array.isArray(candidate.ownedParts) ? candidate.ownedParts
      : Array.isArray(candidate.ownedGear) ? candidate.ownedGear : [];
  profile.ownedRocketParts = [...new Set(rocketSource
    .map((itemId) => LEGACY_GEAR_MAP[itemId] || itemId)
    .filter((itemId) => ROCKET_PART_IDS.has(itemId)))];
  profile.ownedCollectionParts = Array.isArray(candidate.ownedCollectionParts)
    ? [...new Set(candidate.ownedCollectionParts.filter((itemId) => COLLECTION_PART_IDS.has(itemId)))]
    : [];
  profile.activeCollectionId = COLLECTION_SETS.some((collection) => collection.id === candidate.activeCollectionId)
    ? candidate.activeCollectionId
    : "rocket";
  profile.updatedAt = typeof candidate.updatedAt === "string" ? candidate.updatedAt : null;
  profile.handwritingSession = normalizeHandwritingSession(candidate.handwritingSession);
  profile.stageSessions = normalizeStageSessions(candidate.stageSessions);

  if (candidate.progress && typeof candidate.progress === "object") {
    STAGES.forEach((stage, index) => {
      const validIds = new Set(getStageSource(index).map((item) => item.id));
      const saved = candidate.progress[stage.id];
      profile.progress[stage.id] = Array.isArray(saved)
        ? [...new Set(saved.filter((itemId) => validIds.has(itemId)))]
        : [];
    });
  }

  if (candidate.mission && typeof candidate.mission === "object") {
    const stageIndex = Number(candidate.mission.stageIndex);
    const roundIndex = Number(candidate.mission.roundIndex);
    if (
      Number.isInteger(stageIndex)
      && stageIndex >= 0
      && stageIndex < STAGES.length
      && Number.isInteger(roundIndex)
      && roundIndex >= 0
      && Array.isArray(candidate.mission.roundIds)
    ) {
      profile.mission = {
        stageIndex,
        roundIndex,
        roundIds: candidate.mission.roundIds.filter((itemId) => typeof itemId === "string"),
        savedAt: typeof candidate.mission.savedAt === "string" ? candidate.mission.savedAt : null
      };
      const stage = STAGES[stageIndex];
      const legacySession = normalizeStageSession(stageIndex, profile.mission);
      if (legacySession && !profile.stageSessions[stage.id]) {
        profile.stageSessions[stage.id] = legacySession;
      }
    }
  }
  if (profile.handwritingSession && !profile.stageSessions.handwriting) {
    const handwritingSession = normalizeStageSession(4, {
      roundIds: profile.handwritingSession.roundIds,
      roundIndex: profile.handwritingSession.currentIndex,
      savedAt: profile.updatedAt
    });
    if (handwritingSession) profile.stageSessions.handwriting = handwritingSession;
  }
  return profile;
}

function createDefaultSaveBook() {
  return { version: 9, activeProfileId: null, profiles: [] };
}

function normalizeSaveBook(candidate) {
  const book = createDefaultSaveBook();
  if (!candidate || typeof candidate !== "object" || !Array.isArray(candidate.profiles)) return book;
  const profileIds = new Set();
  candidate.profiles.slice(0, 8).forEach((candidateProfile) => {
    const profile = normalizeProfile(candidateProfile);
    if (!profileIds.has(profile.id)) {
      profileIds.add(profile.id);
      book.profiles.push(profile);
    }
  });
  if (typeof candidate.activeProfileId === "string" && profileIds.has(candidate.activeProfileId)) {
    book.activeProfileId = candidate.activeProfileId;
  }
  return book;
}

function loadSaveBook() {
  try {
    const current = localStorage.getItem(PROFILE_STORE_KEY);
    if (current) return normalizeSaveBook(JSON.parse(current));
    for (const key of LEGACY_PROFILE_KEYS) {
      const legacy = localStorage.getItem(key);
      if (!legacy) continue;
      if (key.includes("profiles")) {
        const book = normalizeSaveBook(JSON.parse(legacy));
        if (book.profiles.length && !book.activeProfileId) book.activeProfileId = book.profiles[0].id;
        return book;
      }
      const profile = normalizeProfile(JSON.parse(legacy), readStoredLanguage() === "en" ? "Space Kid" : "小宇航员");
      return { version: 8, activeProfileId: profile.id, profiles: [profile] };
    }
  } catch (error) {
    storageWarning = readStoredLanguage() === "en"
      ? "Could not read an older save. A new profile is ready."
      : "旧存档无法读取，已创建新的训练档案。";
    console.warn("Unable to load saves:", error);
  }
  return createDefaultSaveBook();
}

function getActiveProfile() {
  return saveBook.profiles.find((profile) => profile.id === saveBook.activeProfileId) || null;
}

function hasActiveProfile() {
  return Boolean(getActiveProfile());
}

function getAvatar(profile = player) {
  return AVATAR_BY_ID.get(profile.avatarId) || AVATARS[0];
}

function persistSaveBook() {
  try {
    localStorage.setItem(PROFILE_STORE_KEY, JSON.stringify(saveBook));
    return true;
  } catch (error) {
    console.warn("Unable to save profile data:", error);
    return false;
  }
}

function savePlayerProfile(showMessage = false) {
  if (!hasActiveProfile()) {
    if (showMessage) openProfileChooser();
    return false;
  }
  player.updatedAt = new Date().toISOString();
  if (!persistSaveBook()) {
    if (showMessage) showToast(t("feedback.saveFailed"));
    return false;
  }
  updateHome();
  if (showMessage) showToast(t("feedback.saved"));
  return true;
}

function shuffle(items) {
  const result = [...items];
  for (let index = result.length - 1; index > 0; index -= 1) {
    const other = Math.floor(Math.random() * (index + 1));
    [result[index], result[other]] = [result[other], result[index]];
  }
  return result;
}

function primarySentence(entry) {
  return { ...entry.sentences[0], index: 0 };
}

function stageProgress(stage, stageIndex) {
  const complete = new Set(player.progress[stage.id] || []);
  return { completed: complete.size, total: getStageSource(stageIndex).length };
}

function activatedCollectionSets() {
  return COLLECTION_SETS.filter((collection) => collectionProgress(collection).completed > 0).length;
}

function collectionProgress(collection) {
  if (collection.id === "rocket") {
    return { completed: player.ownedRocketParts.length, total: ROCKET_PARTS.length };
  }
  const completed = player.ownedCollectionParts.filter((partId) => partId.startsWith(`${collection.id}-`)).length;
  return { completed, total: collection.parts.length };
}

function updateProfileDisplay() {
  const avatar = getAvatar();
  $("#profileAvatar").textContent = avatar.emoji;
  $("#profileName").textContent = player.name;
  document.querySelectorAll("[data-profile-avatar]").forEach((element) => {
    element.textContent = avatar.emoji;
  });
}

function updateStarDisplays() {
  document.querySelectorAll("[data-star-balance]").forEach((element) => {
    element.textContent = `⚡ ${player.stars}`;
  });
}

function applyStaticTranslations() {
  const language = currentLanguage();
  document.documentElement.lang = language === "en" ? "en" : "zh-CN";
  document.title = t("app.title");
  const appleTitle = document.querySelector('meta[name="apple-mobile-web-app-title"]');
  if (appleTitle) appleTitle.content = t("app.title");
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.placeholder = t(element.dataset.i18nPlaceholder);
  });
  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    element.setAttribute("aria-label", t(element.dataset.i18nAriaLabel));
  });
  document.querySelectorAll("[data-i18n-title]").forEach((element) => {
    element.title = t(element.dataset.i18nTitle);
  });
  document.querySelectorAll("[data-language-option]").forEach((element) => {
    element.classList.toggle("active", element.dataset.languageOption === language);
  });
}

function refreshLocalizedViews() {
  applyStaticTranslations();
  refreshProfileFormLabels();
  if (pendingDeleteProfileId) {
    const pendingProfile = saveBook.profiles.find((profile) => profile.id === pendingDeleteProfileId);
    if (pendingProfile) $("#deleteProfileCopy").textContent = t("profile.deleteCopy", { name: pendingProfile.name });
  }
  updateHome();
  renderTrainingProjects();
  renderGarden();
  renderWorkshopHome();
  renderWorkshop();
  if (!game.active) return;
  updateStageHeader();
  if (STAGES[game.stageIndex].mode === "handwriting") {
    if (handwritingSession && handwritingSession.reviewing) renderHandwritingReview();
    else refreshHandwritingQuestionLabels();
    return;
  }
  renderRound(true);
}

function setLanguage(language) {
  if (!SUPPORTED_LANGUAGES.has(language) || language === currentLanguage()) return;
  try {
    localStorage.setItem(UI_LANGUAGE_STORE_KEY, language);
  } catch (error) {
    console.warn("Unable to save language:", error);
  }
  if (hasActiveProfile()) {
    player.language = language;
    savePlayerProfile(false);
  }
  refreshLocalizedViews();
}

function totalTrainingProgress() {
  return STAGES.reduce((sum, stage, index) => sum + stageProgress(stage, index).completed, 0);
}

function totalTrainingQuestions() {
  return STAGES.reduce((sum, _stage, index) => sum + getStageSource(index).length, 0);
}

function updateHome() {
  const ready = hasActiveProfile();
  updateProfileDisplay();
  updateStarDisplays();
  $("#homeTrainingCount").textContent = `${ready ? totalTrainingProgress() : 0} / ${totalTrainingQuestions()}`;
  const active = activeCollection();
  const activeProgress = collectionProgress(active);
  $("#homeCollectionStatus").textContent = localized(active.name);
  $("#heroRocketCount").textContent = `${ready ? activeProgress.completed : 0} / ${activeProgress.total}`;
  const bonusButton = $("#bonusChallengeButton");
  bonusButton.disabled = !ready;
  renderHomeCollection();
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("visible");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("visible"), 2200);
}

function openBonusChallenge() {
  if (!hasActiveProfile()) {
    openProfileChooser();
    return;
  }
  activeBonusChallenge = BONUS_CHALLENGE;
  $("#bonusFeedback").textContent = "";
  const answerInput = $("#bonusAnswerInput");
  answerInput.value = "";
  answerInput.classList.remove("wrong", "correct");
  $("#bonusChallengeOverlay").hidden = false;
  const listenButton = $("#bonusListenButton");
  playVoice(audioMaps.bonus.get(activeBonusChallenge.word), listenButton);
  window.setTimeout(() => answerInput.focus(), 0);
}

function closeBonusChallenge() {
  activeBonusChallenge = null;
  $("#bonusChallengeOverlay").hidden = true;
}

function checkBonusChallenge() {
  if (!activeBonusChallenge) return;
  const answerInput = $("#bonusAnswerInput");
  const answer = answerInput.value.trim().toLowerCase();
  if (answer !== activeBonusChallenge.word) {
    answerInput.classList.remove("wrong");
    void answerInput.offsetWidth;
    answerInput.classList.add("wrong");
    $("#bonusFeedback").textContent = t("bonus.wrong");
    playEffect("wrong");
    return;
  }
  player.stars += 100;
  answerInput.classList.remove("wrong");
  answerInput.classList.add("correct");
  $("#bonusFeedback").textContent = t("bonus.correct");
  playEffect("correct");
  createConfetti();
  savePlayerProfile(false);
  renderTrainingProjects();
  renderWorkshop();
  window.setTimeout(closeBonusChallenge, 900);
}

function createButton(className, text, onClick) {
  const button = document.createElement("button");
  button.className = className;
  button.type = "button";
  button.textContent = text;
  if (onClick) button.addEventListener("click", onClick);
  return button;
}

function renderAvatarChoices() {
  const avatarGrid = $("#avatarGrid");
  avatarGrid.replaceChildren();
  AVATARS.forEach((avatar) => {
    const option = createButton(`avatar-choice${avatar.id === selectedAvatarId ? " selected" : ""}`, "", () => {
      selectedAvatarId = avatar.id;
      renderAvatarChoices();
    });
    option.innerHTML = `<span aria-hidden="true">${avatar.emoji}</span><small>${localized(avatar.label)}</small>`;
    option.title = localized(avatar.label);
    option.setAttribute("aria-label", localized(avatar.label));
    avatarGrid.append(option);
  });
}

function renderProfileChooser() {
  const profileGrid = $("#profileGrid");
  profileGrid.replaceChildren();
  if (!saveBook.profiles.length) {
    const empty = document.createElement("p");
    empty.className = "empty-profile-note";
    empty.textContent = t("profile.empty");
    profileGrid.append(empty);
  }
  saveBook.profiles.forEach((profile) => {
    const card = document.createElement("article");
    card.className = `profile-card${profile.id === saveBook.activeProfileId ? " active" : ""}`;
    const avatar = document.createElement("span");
    avatar.className = "avatar";
    avatar.textContent = getAvatar(profile).emoji;
    const details = document.createElement("span");
    const name = document.createElement("strong");
    name.textContent = profile.name;
    const progress = document.createElement("small");
    progress.textContent = t("profile.rocketProgress", { done: profile.ownedRocketParts.length, total: ROCKET_PARTS.length });
    details.append(name, progress);
    const stars = document.createElement("em");
    stars.textContent = `⚡ ${profile.stars}`;
    const actions = document.createElement("div");
    actions.className = "profile-actions";
    actions.append(
      iconButton(createButton("profile-action-button profile-use-button", "", () => activateProfile(profile.id)), "▶", t("profile.enter")),
      iconButton(createButton("profile-action-button", "", () => beginProfileEdit(profile.id)), "✎", t("common.edit")),
      iconButton(createButton("profile-action-button profile-delete-button", "", () => requestProfileDeletion(profile.id)), "×", t("common.delete"))
    );
    card.append(avatar, details, stars, actions);
    profileGrid.append(card);
  });
  renderAvatarChoices();
  $("#closeProfileButton").hidden = !hasActiveProfile();
}

function refreshProfileFormLabels() {
  const editing = Boolean(editingProfileId);
  $("#profileFormTitle").textContent = editing ? t("profile.rename") : t("profile.create");
  iconButton($("#saveProfileButton"), editing ? "💾" : "🚀", editing ? t("profile.saveEdit") : t("profile.create"));
  iconButton($("#cancelProfileEditButton"), "↶", t("common.cancel"));
}

function resetProfileForm() {
  editingProfileId = null;
  selectedAvatarId = player.avatarId;
  $("#profileNameInput").value = "";
  refreshProfileFormLabels();
  $("#profileFormMessage").textContent = "";
  $("#cancelProfileEditButton").hidden = true;
  renderAvatarChoices();
}

function openProfileChooser() {
  resetProfileForm();
  renderProfileChooser();
  $("#profileGateOverlay").hidden = false;
  window.setTimeout(() => $("#profileNameInput").focus(), 0);
}

function closeProfileChooser() {
  if (hasActiveProfile()) $("#profileGateOverlay").hidden = true;
}

function activateProfile(profileId) {
  if (game.active) saveMission(false);
  const profile = saveBook.profiles.find((item) => item.id === profileId);
  if (!profile) return;
  saveBook.activeProfileId = profile.id;
  player = profile;
  selectedAvatarId = profile.avatarId;
  try {
    localStorage.setItem(UI_LANGUAGE_STORE_KEY, player.language || "zh");
  } catch (error) {
    console.warn("Unable to save language:", error);
  }
  applyStaticTranslations();
  game.active = false;
  game.rounds = [];
  stopActiveVoice();
  clearActiveDrag();
  showOnlyScreen("landingScreen");
  $("#stageCompleteOverlay").hidden = true;
  $("#profileGateOverlay").hidden = true;
  savePlayerProfile(false);
  renderTrainingProjects();
  renderGarden();
  renderWorkshopHome();
  renderWorkshop();
  showToast(t("feedback.welcome", { name: player.name }));
}

function beginProfileEdit(profileId) {
  const profile = saveBook.profiles.find((item) => item.id === profileId);
  if (!profile) return;
  editingProfileId = profile.id;
  selectedAvatarId = profile.avatarId;
  $("#profileNameInput").value = profile.name;
  refreshProfileFormLabels();
  $("#profileFormMessage").textContent = "";
  $("#cancelProfileEditButton").hidden = false;
  renderAvatarChoices();
}

function cancelProfileEdit() {
  resetProfileForm();
}

function createProfileFromForm() {
  const name = cleanPlayerName($("#profileNameInput").value);
  if (!name) {
    $("#profileFormMessage").textContent = t("profile.nameRequired");
    return;
  }
  const duplicate = saveBook.profiles.find((profile) => {
    return profile.id !== editingProfileId && profile.name.toLocaleLowerCase() === name.toLocaleLowerCase();
  });
  if (duplicate) {
    $("#profileFormMessage").textContent = t("profile.duplicate");
    return;
  }
  if (editingProfileId) {
    const profile = saveBook.profiles.find((item) => item.id === editingProfileId);
    if (!profile) {
      resetProfileForm();
      return;
    }
    const previous = { name: profile.name, avatarId: profile.avatarId };
    profile.name = name;
    profile.avatarId = selectedAvatarId;
    profile.updatedAt = new Date().toISOString();
    if (!persistSaveBook()) {
      profile.name = previous.name;
      profile.avatarId = previous.avatarId;
      $("#profileFormMessage").textContent = t("profile.updateFailed");
      return;
    }
    if (profile.id === saveBook.activeProfileId) player = profile;
    renderProfileChooser();
    resetProfileForm();
    updateHome();
    showToast(t("feedback.profileUpdated"));
    return;
  }
  const profile = createDefaultProfile(name, selectedAvatarId);
  saveBook.profiles.push(profile);
  activateProfile(profile.id);
}

function requestProfileDeletion(profileId) {
  const profile = saveBook.profiles.find((item) => item.id === profileId);
  if (!profile) return;
  pendingDeleteProfileId = profile.id;
  $("#deleteProfileCopy").textContent = t("profile.deleteCopy", { name: profile.name });
  $("#deleteProfileOverlay").hidden = false;
}

function cancelProfileDeletion() {
  pendingDeleteProfileId = null;
  $("#deleteProfileOverlay").hidden = true;
}

function deleteProfile() {
  const profile = saveBook.profiles.find((item) => item.id === pendingDeleteProfileId);
  if (!profile) {
    cancelProfileDeletion();
    return;
  }
  const previousProfiles = saveBook.profiles;
  const previousActiveId = saveBook.activeProfileId;
  const previousPlayer = player;
  const activeWasDeleted = profile.id === saveBook.activeProfileId;
  saveBook.profiles = saveBook.profiles.filter((item) => item.id !== profile.id);
  if (activeWasDeleted) saveBook.activeProfileId = null;
  if (!persistSaveBook()) {
    saveBook.profiles = previousProfiles;
    saveBook.activeProfileId = previousActiveId;
    player = previousPlayer;
    $("#profileFormMessage").textContent = t("profile.deleteFailed");
    cancelProfileDeletion();
    return;
  }
  cancelProfileDeletion();
  if (activeWasDeleted) {
    player = createDefaultProfile(defaultProfileName(), "astronaut", "preview-profile");
    selectedAvatarId = player.avatarId;
    game.active = false;
    stopActiveVoice();
    clearActiveDrag();
    showOnlyScreen("landingScreen");
  }
  renderProfileChooser();
  renderTrainingProjects();
  renderGarden();
  renderWorkshopHome();
  renderWorkshop();
  updateHome();
  showToast(t("feedback.profileDeleted", { name: profile.name }));
}

function createAudio(source) {
  const audio = new Audio(source);
  audio.preload = "auto";
  audio.playsInline = true;
  audio.addEventListener("ended", () => {
    finishActiveVoice(audio);
  });
  audio.addEventListener("error", () => {
    finishActiveVoice(audio);
  });
  return audio;
}

function preloadAudio() {
  WORDS.forEach((entry) => {
    audioMaps.word.set(entry.id, createAudio(`audio/${entry.id}.mp3`));
    entry.sentences.forEach((sentence, index) => {
      audioMaps.sentence.set(`${entry.id}-${index}`, createAudio(`audio/sentences/${entry.id}-${index + 1}.mp3`));
    });
  });
  audioMaps.bonus.set("space", createAudio("audio/bonus/space.mp3"));
  Object.entries(SFX_TRACKS).forEach(([name, source]) => {
    const sound = createAudio(source);
    sound.volume = name === "wrong" ? 0.68 : name === "correct" || name === "purchase" ? 0.52 : 0.42;
    audioMaps.sfx.set(name, sound);
  });
  Object.entries(BACKGROUND_TRACKS).forEach(([screenId, source]) => {
    const music = createAudio(source);
    music.loop = true;
    music.volume = BGM_VOLUME;
    audioMaps.bgm.set(screenId, music);
  });
}

function primeAudio() {
  if (audioPrimed) {
    resumeBackgroundMusic();
    return;
  }
  audioPrimed = true;
  resumeBackgroundMusic();
}

function stopActiveVoice() {
  if (activeVoice) {
    activeVoice.pause();
    activeVoice.currentTime = 0;
  }
  const completion = activeVoiceCompletion;
  activeVoiceCompletion = null;
  if (activeVoiceButton) activeVoiceButton.classList.remove("is-playing");
  activeVoice = null;
  activeVoiceButton = null;
  restoreBackgroundMusicVolume();
  if (completion) completion();
}

function finishActiveVoice(audio) {
  if (audio !== activeVoice) return;
  const completion = activeVoiceCompletion;
  activeVoiceCompletion = null;
  activeVoice = null;
  if (activeVoiceButton) activeVoiceButton.classList.remove("is-playing");
  activeVoiceButton = null;
  restoreBackgroundMusicVolume();
  if (completion) completion();
}

function startVoicePlayback(audio, button, completion = null) {
  primeAudio();
  stopActiveVoice();
  if (!audio) {
    if (completion) completion();
    return;
  }
  activeVoice = audio;
  activeVoiceButton = button || null;
  activeVoiceCompletion = completion;
  if (activeVoiceButton) activeVoiceButton.classList.add("is-playing");
  lowerBackgroundMusicVolume();
  audio.currentTime = 0;
  audio.playbackRate = 0.82;
  audio.play().catch((error) => {
    console.warn("Unable to play voice:", error);
    finishActiveVoice(audio);
  });
}

function playVoice(audio, button) {
  promptSequenceId += 1;
  startVoicePlayback(audio, button);
}

function playVoiceAndWait(audio) {
  return new Promise((resolve) => {
    if (!audio) {
      resolve();
      return;
    }
    let settled = false;
    let timer = 0;
    const finish = () => {
      if (settled) return;
      settled = true;
      window.clearTimeout(timer);
      resolve();
    };
    const duration = Number.isFinite(audio.duration) ? audio.duration : 1.7;
    timer = window.setTimeout(() => {
      if (activeVoice === audio) stopActiveVoice();
      finish();
    }, Math.max(900, (duration / 0.82) * 1000 + 360));
    startVoicePlayback(audio, null, finish);
  });
}

function wait(milliseconds) {
  return new Promise((resolve) => window.setTimeout(resolve, milliseconds));
}

function cancelPendingRoundAdvance() {
  window.clearTimeout(roundAdvanceTimer);
  roundAdvanceTimer = 0;
}

function queueNextRound() {
  cancelPendingRoundAdvance();
  const stageIndex = game.stageIndex;
  const roundIndex = game.roundIndex;
  roundAdvanceTimer = window.setTimeout(() => {
    roundAdvanceTimer = 0;
    if (!game.active || game.stageIndex !== stageIndex || game.roundIndex !== roundIndex) return;
    nextRound();
  }, 1100);
}

async function autoplayPrompt(entry, sentence, mode) {
  const sequenceId = ++promptSequenceId;
  await wait(220);
  if (sequenceId !== promptSequenceId || !game.active) return;
  await playPromptSequence(entry, sentence, mode, null, sequenceId);
}

async function playPromptSequence(entry, sentence, mode, button = null, sequenceId = ++promptSequenceId) {
  if (button) button.classList.add("is-playing");
  const canContinue = () => sequenceId === promptSequenceId && game.active;
  if (mode === "word" || mode === "word-then-sentence") {
    await playVoiceAndWait(audioMaps.word.get(entry.id));
    if (!canContinue()) {
      if (button && sequenceId === promptSequenceId) button.classList.remove("is-playing");
      return;
    }
    if (mode === "word-then-sentence") await wait(170);
  }
  if (mode === "word") {
    if (button && sequenceId === promptSequenceId) button.classList.remove("is-playing");
    return;
  }
  if (!canContinue()) {
    if (button && sequenceId === promptSequenceId) button.classList.remove("is-playing");
    return;
  }
  await playVoiceAndWait(audioMaps.sentence.get(`${entry.id}-${sentence.index}`));
  if (button && sequenceId === promptSequenceId) button.classList.remove("is-playing");
}

function playEffect(name) {
  const sound = audioMaps.sfx.get(name);
  if (!sound) return;
  if (name === "wrong") {
    const now = performance.now();
    if (now - lastWrongEffectAt < WRONG_EFFECT_COOLDOWN) return;
    lastWrongEffectAt = now;
  }
  sound.pause();
  sound.currentTime = 0;
  sound.loop = false;
  sound.muted = false;
  sound.play().catch((error) => console.warn(`Unable to play ${name} sound:`, error));
}

function updateBackgroundMusic(screenId) {
  const nextMusic = audioMaps.bgm.get(screenId) || null;
  if (activeBackgroundMusic === nextMusic) {
    resumeBackgroundMusic();
    return;
  }
  if (activeBackgroundMusic) {
    activeBackgroundMusic.pause();
    activeBackgroundMusic.currentTime = 0;
  }
  activeBackgroundMusic = nextMusic;
  resumeBackgroundMusic();
}

function resumeBackgroundMusic() {
  if (!audioPrimed || !activeBackgroundMusic || !activeBackgroundMusic.paused) return;
  activeBackgroundMusic.play().catch((error) => console.warn("Unable to play background music:", error));
}

function lowerBackgroundMusicVolume() {
  if (activeBackgroundMusic) activeBackgroundMusic.volume = BGM_DUCKED_VOLUME;
}

function restoreBackgroundMusicVolume() {
  if (activeBackgroundMusic) activeBackgroundMusic.volume = BGM_VOLUME;
}

function createSceneCard(entry) {
  const figure = document.createElement("figure");
  figure.className = "scene-card";
  const image = document.createElement("img");
  image.src = entry.image;
  image.alt = localized(entry.visual);
  const caption = document.createElement("figcaption");
  caption.textContent = localized(entry.visual);
  figure.append(image, caption);
  return figure;
}

function createVoiceButton(entry, sentence) {
  const label = sentence ? t("common.listenSentence") : t("common.listenWord");
  const button = iconButton(createButton("listen-button", "", () => {
    const audio = sentence
      ? audioMaps.sentence.get(`${entry.id}-${sentence.index}`)
      : audioMaps.word.get(entry.id);
    playVoice(audio, button);
  }), "🔊", label);
  return button;
}

function createRepeatButton(entry, sentence, mode = "sentence") {
  let button = null;
  button = iconButton(createButton("repeat-button", "", () => {
    void playPromptSequence(entry, sentence, mode, button);
  }), "↻", t("common.repeat"));
  return button;
}

function createPromptControls(entry, sentence, mode = "sentence") {
  const controls = document.createElement("div");
  controls.className = "audio-controls stage-audio-controls";
  controls.append(createRepeatButton(entry, sentence, mode));
  return controls;
}

function createStageWordVisual(entry, sentence, mode, className = "", showSentence = true) {
  const visual = document.createElement("section");
  visual.className = `stage-word-visual ${className}`.trim();
  if (showSentence) {
    visual.classList.add("has-sentence");
    const example = document.createElement("strong");
    example.className = "stage-word-sentence";
    example.textContent = sentence.blank;
    visual.append(example);
  }
  const scene = createSceneCard(entry);
  scene.classList.add("stage-word-scene");
  visual.append(scene, createPromptControls(entry, sentence, mode));
  return visual;
}

function setFeedback(message, kind = "") {
  const feedback = $("#feedback");
  feedback.className = `feedback ${kind}`.trim();
  feedback.textContent = message;
}

function updateStageHeader() {
  const stage = STAGES[game.stageIndex];
  $("#stageNavIcon").textContent = stage.icon;
  $("#stageNavTitle").textContent = localized(stage.title);
  $("#stageNavRound").textContent = `${game.roundIndex + 1} / ${game.rounds.length}`;
  $("#stageNavStatus").setAttribute("aria-label", `${t("home.stage", { number: game.stageIndex + 1 })}: ${localized(stage.title)}, ${game.roundIndex + 1} / ${game.rounds.length}`);
  $("#roundFill").style.width = `${(game.roundIndex / game.rounds.length) * 100}%`;
  $("#stageResetButton").disabled = !game.active;
}

function addChoiceGrid(parent, choices, onChoice, extraClass = "") {
  const grid = document.createElement("div");
  grid.className = `choice-grid ${extraClass}`.trim();
  choices.forEach((choice) => {
    const button = createButton("choice-button", choice.label || choice, () => onChoice(choice, button));
    grid.append(button);
  });
  parent.append(grid);
}

function renderListeningQuestion(entry, sentence) {
  const area = $("#questionArea");
  area.replaceChildren();
  const panel = document.createElement("div");
  panel.className = "question-panel listening-question";
  const layout = document.createElement("div");
  layout.className = "question-layout";
  layout.append(createStageWordVisual(entry, sentence, "sentence", "listening-visual", false));
  const mission = document.createElement("section");
  mission.className = "mission-card";
  mission.innerHTML = `<strong class="sentence-line" id="sentenceLine">${sentence.blank}</strong>`;
  const choices = shuffle([
    { label: entry.word, entry },
    ...shuffle(WORDS.filter((word) => word.id !== entry.id)).slice(0, 3).map((word) => ({ label: word.word, entry: word }))
  ]);
  addChoiceGrid(mission, choices, (choice, button) => checkListeningAnswer(entry, sentence, choice.entry, button), "listening-choices");
  layout.append(mission);
  panel.append(layout);
  area.append(panel);
}

function checkListeningAnswer(target, sentence, selected, button) {
  if (game.locked) return;
  if (target.id !== selected.id) {
    button.classList.add("wrong");
    playEffect("wrong");
    setFeedback(t("feedback.listenAgain"), "try-again");
    window.setTimeout(() => button.classList.remove("wrong"), 420);
    return;
  }
  game.locked = true;
  button.classList.add("correct");
  $("#sentenceLine").textContent = sentence.text;
  $("#sentenceLine").classList.add("revealed");
  markCorrect(target, t("feedback.answerCorrect", { meaning: localized(target.meaning) }));
}

function renderSoundFillQuestion(question, sentence) {
  const entry = WORD_BY_ID.get(question.wordId);
  const area = $("#questionArea");
  area.replaceChildren();
  const panel = document.createElement("div");
  panel.className = "question-panel fill-question";
  const layout = document.createElement("div");
  layout.className = "question-layout";
  layout.append(createStageWordVisual(entry, sentence, "word-then-sentence", "fill-visual"));
  const card = document.createElement("section");
  card.className = "fill-card";
  card.innerHTML = `<div class="fill-word"><b>${question.prefix}</b><b class="fill-slot" id="fillSlot" aria-label="${t("question.blank")}"></b><b>${question.suffix}</b></div>`;
  addChoiceGrid(card, shuffle(question.choices), (choice, button) => checkFillAnswer(question, choice, button), "fill-choices");
  layout.append(card);
  panel.append(layout);
  area.append(panel);
}

function checkFillAnswer(question, choice, button) {
  if (game.locked) return;
  if (choice !== question.answer) {
    button.classList.add("wrong");
    playEffect("wrong");
    setFeedback(t("feedback.listenAgain"), "try-again");
    window.setTimeout(() => button.classList.remove("wrong"), 420);
    return;
  }
  game.locked = true;
  button.classList.add("correct");
  $("#fillSlot").textContent = question.answer;
  $("#fillSlot").classList.add("revealed");
  markCorrect(question, t("feedback.fillCorrect"));
}

function prepareSpellQuestion(entry) {
  game.allowLetterReuse = false;
  game.keyboardMode = false;
  game.spellingBlocks = [];
  game.placedLetters = Array(entry.word.length).fill(null);
  const targetLetters = entry.word.split("").map((letter, index) => ({ id: `${letter}-${index}`, letter }));
  const extras = shuffle("abcdefghijklmnopqrstuvwxyz".split("").filter((letter) => !entry.word.includes(letter)))
    .slice(0, 2)
    .map((letter, index) => ({ id: `extra-${letter}-${index}`, letter }));
  game.letterBank = shuffle([...targetLetters, ...extras]);
}

function renderSpellQuestion(entry, sentence) {
  prepareSpellQuestion(entry);
  const area = $("#questionArea");
  area.replaceChildren();
  const card = document.createElement("section");
  card.className = "drag-card";
  const visual = createStageWordVisual(entry, sentence, "word-then-sentence", "spell-visual");

  const workspace = document.createElement("div");
  workspace.className = "drag-workspace";
  const slots = document.createElement("div");
  slots.className = "spelling-slots";
  slots.id = "spellingSlots";
  const bank = document.createElement("div");
  bank.className = "letter-bank";
  bank.id = "letterBank";
  workspace.append(
    slots,
    bank,
    iconButton(createButton("primary-button check-button stage-submit-button", "", checkSpelling), "✓", t("common.check"))
  );
  workspace.querySelector(".stage-submit-button").id = "stageSubmitButton";
  card.append(visual, workspace);
  area.append(card);
  updateSpellingBoard();
}

function updateSpellingBoard() {
  const slots = $("#spellingSlots");
  const bank = $("#letterBank");
  if (!slots || !bank) return;
  const vowelBank = $("#vowelBank");
  const spellingBlockBank = $("#spellingBlockBank");
  const spellingBlockGroup = $("#spellingBlockGroup");
  slots.replaceChildren();
  game.placedLetters.forEach((item, index) => {
    const slot = document.createElement("button");
    slot.type = "button";
    slot.dataset.slotIndex = String(index);
    slot.className = `spelling-slot${item ? " filled" : ""}`;
    slot.textContent = item ? item.letter.toUpperCase() : "";
    slot.setAttribute("aria-label", `${t("common.answer")} ${index + 1}`);
    if (item) slot.addEventListener("pointerdown", (event) => startLetterDrag(event, item, index));
    slots.append(slot);
  });
  bank.replaceChildren();
  if (vowelBank) vowelBank.replaceChildren();
  bank.classList.toggle("keyboard-bank", game.allowLetterReuse);
  game.letterBank.forEach((item) => {
    const used = !game.allowLetterReuse && game.placedLetters.some((placed) => placed && placed.id === item.id);
    const tile = document.createElement("button");
    tile.type = "button";
    tile.className = `letter-tile${used ? " used" : ""}${game.allowLetterReuse && "aeiou".includes(item.letter) ? " vowel-tile" : ""}`;
    tile.textContent = item.letter.toUpperCase();
    tile.disabled = used || game.locked;
    tile.title = item.letter.toUpperCase();
    tile.setAttribute("aria-label", item.letter.toUpperCase());
    tile.addEventListener("pointerdown", (event) => startLetterDrag(event, item, null));
    const targetBank = vowelBank && "aeiou".includes(item.letter) ? vowelBank : bank;
    targetBank.append(tile);
  });
  if (spellingBlockBank && spellingBlockGroup) {
    spellingBlockBank.replaceChildren();
    spellingBlockGroup.hidden = game.spellingBlocks.length === 0;
    game.spellingBlocks.forEach((block) => {
      const button = createButton("letter-tile spelling-block", block.toUpperCase(), () => placeSpellingBlock(block));
      button.disabled = game.locked;
      button.title = block.toUpperCase();
      button.setAttribute("aria-label", block.toUpperCase());
      spellingBlockBank.append(button);
    });
  }
  const submitButton = $("#stageSubmitButton");
  if (submitButton) submitButton.disabled = game.locked || game.placedLetters.some((item) => !item);
}

function getSpellingBlocks(entry) {
  const blocks = ["th", "wh", "ee", "ea", "ck", "ey", "on", "ow", "ou", "at", "li", "bl", "it"];
  const matches = blocks.filter((block) => entry.word.includes(block));
  const distractors = shuffle(blocks.filter((block) => !matches.includes(block))).slice(0, matches.length ? 2 : 3);
  return shuffle([...matches, ...distractors]).slice(0, 4);
}

function placeSpellingBlock(block) {
  if (game.locked) return;
  let openIndex = game.placedLetters.findIndex((item) => !item);
  if (openIndex < 0) return;
  block.split("").forEach((letter, index) => {
    const slotIndex = openIndex + index;
    if (slotIndex < game.placedLetters.length && !game.placedLetters[slotIndex]) {
      game.placedLetters[slotIndex] = { id: `block-${block}-${Date.now()}-${index}`, letter };
    }
  });
  playEffect("tap");
  updateSpellingBoard();
}

function startLetterDrag(event, item, fromSlotIndex) {
  if (game.locked || (event.pointerType === "mouse" && event.button !== 0)) return;
  event.preventDefault();
  primeAudio();
  const ghost = document.createElement("span");
  ghost.className = "drag-ghost";
  ghost.textContent = item.letter;
  activeDrag = {
    item,
    fromSlotIndex,
    pointerId: event.pointerId,
    startX: event.clientX,
    startY: event.clientY,
    moved: false,
    ghost
  };
  document.addEventListener("pointermove", moveDragGhost);
  document.addEventListener("pointerup", finishLetterDrag, { once: true });
  document.addEventListener("pointercancel", cancelLetterDrag, { once: true });
}

function moveDragGhost(event) {
  if (!activeDrag || event.pointerId !== activeDrag.pointerId) return;
  const distance = Math.hypot(event.clientX - activeDrag.startX, event.clientY - activeDrag.startY);
  if (!activeDrag.moved && distance < 8) return;
  if (!activeDrag.moved) {
    activeDrag.moved = true;
    document.body.append(activeDrag.ghost);
  }
  activeDrag.ghost.style.left = `${event.clientX}px`;
  activeDrag.ghost.style.top = `${event.clientY}px`;
  document.querySelectorAll(".spelling-slot").forEach((slot) => slot.classList.remove("drop-target"));
  const pointTarget = document.elementFromPoint(event.clientX, event.clientY);
  const slot = pointTarget && pointTarget.closest(".spelling-slot");
  if (slot) slot.classList.add("drop-target");
}

function finishLetterDrag(event) {
  if (!activeDrag || event.pointerId !== activeDrag.pointerId) return;
  const pointTarget = document.elementFromPoint(event.clientX, event.clientY);
  const slot = pointTarget && pointTarget.closest(".spelling-slot");
  const destination = slot ? Number(slot.dataset.slotIndex) : null;
  const drag = activeDrag;
  clearActiveDrag();
  if (!drag.moved) {
    if (drag.fromSlotIndex !== null) {
      game.placedLetters[drag.fromSlotIndex] = null;
      playEffect("delete");
    } else {
      const firstOpenSlot = game.placedLetters.findIndex((placed) => !placed);
      if (firstOpenSlot >= 0) {
        game.placedLetters[firstOpenSlot] = drag.item;
        playEffect("tap");
      }
    }
    updateSpellingBoard();
    return;
  }
  if (Number.isInteger(destination)) {
    const displaced = game.placedLetters[destination];
    if (drag.fromSlotIndex === null) {
      game.placedLetters[destination] = drag.item;
    } else if (drag.fromSlotIndex !== destination) {
      game.placedLetters[drag.fromSlotIndex] = displaced || null;
      game.placedLetters[destination] = drag.item;
    }
    playEffect("tap");
  } else if (drag.fromSlotIndex !== null) {
    game.placedLetters[drag.fromSlotIndex] = null;
    playEffect("delete");
  }
  updateSpellingBoard();
}

function cancelLetterDrag(event) {
  if (activeDrag && event.pointerId === activeDrag.pointerId) clearActiveDrag();
}

function clearActiveDrag() {
  document.removeEventListener("pointermove", moveDragGhost);
  document.removeEventListener("pointerup", finishLetterDrag);
  document.removeEventListener("pointercancel", cancelLetterDrag);
  document.querySelectorAll(".spelling-slot").forEach((slot) => slot.classList.remove("drop-target"));
  if (activeDrag && activeDrag.ghost) activeDrag.ghost.remove();
  activeDrag = null;
}

function checkSpelling() {
  if (game.locked) return;
  if (game.placedLetters.some((item) => !item)) {
    setFeedback(t("feedback.completeSlots"), "try-again");
    return;
  }
  const answer = game.placedLetters.map((item) => item.letter).join("");
  if (answer !== currentRound().word) {
    playEffect("wrong");
    setFeedback(t("feedback.orderAgain"), "try-again");
    return;
  }
  game.locked = true;
  markCorrect(currentRound(), t("feedback.spellCorrect"));
}

function renderDictationQuestion(entry, sentence) {
  game.allowLetterReuse = true;
  game.keyboardMode = true;
  game.placedLetters = Array(entry.word.length).fill(null);
  game.letterBank = "abcdefghijklmnopqrstuvwxyz".split("")
    .map((letter) => ({ id: `keyboard-${letter}`, letter }));
  game.spellingBlocks = getSpellingBlocks(entry);
  const area = $("#questionArea");
  area.replaceChildren();
  const panel = document.createElement("div");
  panel.className = "question-panel dictation-question";
  const card = document.createElement("section");
  card.className = "dictation-drag-card";
  const visual = createStageWordVisual(entry, sentence, "word-then-sentence", "dictation-visual");
  const workspace = document.createElement("div");
  workspace.className = "dictation-workspace";
  const slots = document.createElement("div");
  slots.className = "spelling-slots dictation-slots";
  slots.id = "spellingSlots";
  const keyboard = document.createElement("div");
  keyboard.className = "spelling-keyboard";
  keyboard.innerHTML = `
    <section class="keyboard-group vowel-keyboard-group" aria-label="${t("question.vowels")}"><span>${t("question.vowels")}</span><div class="letter-bank keyboard-bank vowel-bank" id="vowelBank"></div></section>
    <section class="keyboard-group consonant-keyboard-group" aria-label="${t("question.consonants")}"><span>${t("question.consonants")}</span><div class="letter-bank keyboard-bank consonant-bank" id="letterBank"></div></section>
    <section class="spelling-block-group combo-keyboard-group" id="spellingBlockGroup" hidden aria-label="${t("question.combinations")}"><span>${t("question.combinations")}</span><div class="spelling-block-bank" id="spellingBlockBank"></div></section>
  `;
  workspace.append(
    slots,
    keyboard,
    iconButton(createButton("primary-button check-button stage-submit-button", "", checkDictation), "✓", t("common.check"))
  );
  workspace.querySelector(".stage-submit-button").id = "stageSubmitButton";
  card.append(visual, workspace);
  panel.append(card);
  area.append(panel);
  updateSpellingBoard();
}

function checkDictation() {
  if (game.locked) return;
  if (game.placedLetters.some((item) => !item)) {
    setFeedback(t("feedback.completeSlots"), "try-again");
    return;
  }
  if (game.placedLetters.map((item) => item.letter).join("") !== currentRound().word) {
    playEffect("wrong");
    setFeedback(t("feedback.listenAgain"), "try-again");
    return;
  }
  game.locked = true;
  markCorrect(currentRound(), t("feedback.answerCorrect", { meaning: localized(currentRound().meaning) }));
}

function renderHandwritingQuestion(entry, sentence) {
  handwritingBoard = null;
  const area = $("#questionArea");
  area.replaceChildren();
  const card = document.createElement("section");
  card.className = "handwriting-card";

  const prompt = document.createElement("section");
  prompt.className = "handwriting-prompt";
  const illustration = createSceneCard(entry);
  illustration.classList.add("handwriting-scene");
  prompt.innerHTML = `<p class="handwriting-sentence">${sentence.blank}</p>`;
  prompt.append(illustration, createPromptControls(entry, sentence, "word"));

  const paperArea = document.createElement("section");
  paperArea.className = "paper-area";
  const writingCanvas = document.createElement("canvas");
  writingCanvas.className = "handwriting-canvas";
  writingCanvas.id = "handwritingCanvas";
  writingCanvas.setAttribute("aria-label", t("question.writing"));
  const isLastQuestion = game.roundIndex === game.rounds.length - 1;
  const toolbar = createHandwritingToolbar({
    getBoard: () => handwritingBoard,
    onPrevious: () => moveHandwritingQuestion(entry, -1),
    previousDisabled: () => game.roundIndex === 0,
    primaryIcon: isLastQuestion ? "📤" : "➜",
    primaryLabel: () => t(isLastQuestion ? "handwriting.submitPaper" : "handwriting.next"),
    onPrimary: () => advanceHandwritingQuestion(entry)
  });
  paperArea.append(writingCanvas, toolbar.element);

  card.append(prompt, paperArea);
  area.append(card);
  const savedAnswer = handwritingAnswer(entry.id);
  window.requestAnimationFrame(() => {
    if (!writingCanvas.isConnected) return;
    handwritingBoard = setupHandwritingBoard(writingCanvas, {
      initialImage: savedAnswer && savedAnswer.hasInk ? savedAnswer.image : "",
      hasInk: Boolean(savedAnswer && savedAnswer.hasInk),
      onChange: (board) => {
        saveHandwritingAnswer(entry, board, "pending");
        persistHandwritingSession();
      },
      onClear: (board) => clearSavedHandwritingAnswer(entry, board)
    });
    toolbar.refresh();
  });
}

function refreshHandwritingQuestionLabels() {
  const repeatButton = $("#questionArea .repeat-button");
  if (repeatButton) {
    const label = t("common.repeat");
    repeatButton.querySelector(".button-label").textContent = label;
    repeatButton.title = label;
    repeatButton.setAttribute("aria-label", label);
  }
  const previousButton = $("#questionArea .writing-previous-button");
  const clearButton = $("#questionArea .writing-clear-button");
  const nextButton = $("#questionArea .writing-primary-button");
  const toolButton = $("#questionArea .writing-tool-toggle");
  if (previousButton) iconButton(previousButton, "‹", t("handwriting.previous"));
  if (clearButton) iconButton(clearButton, "🗑", t("handwriting.clearInk"));
  if (nextButton) {
    const isLastQuestion = game.roundIndex === game.rounds.length - 1;
    iconButton(nextButton, isLastQuestion ? "📤" : "➜", t(isLastQuestion ? "handwriting.submitPaper" : "handwriting.next"));
  }
  if (toolButton) updateHandwritingToolButton(toolButton, handwritingBoard);
  const canvas = $("#handwritingCanvas");
  if (canvas) canvas.setAttribute("aria-label", t("question.writing"));
}

function createHandwritingToolbar(options) {
  const toolbar = document.createElement("div");
  toolbar.className = "writing-toolbar";
  let previousButton = null;
  if (options.onPrevious) {
    previousButton = iconButton(createButton("mini-button writing-previous-button", "", options.onPrevious), "‹", t("handwriting.previous"));
    toolbar.append(previousButton);
  }

  const primaryActions = document.createElement("div");
  primaryActions.className = "writing-toolbar-primary-actions";
  const toolButton = createHandwritingToolButton(options.getBoard);
  const clearButton = iconButton(
    createButton("primary-button writing-toolbar-action writing-clear-button", "", () => {
      const board = options.getBoard();
      if (board && board.ready) clearHandwritingBoard(board);
    }),
    "🗑",
    t("handwriting.clearInk")
  );
  const primaryButton = iconButton(
    createButton("primary-button writing-toolbar-action writing-primary-button", "", options.onPrimary),
    options.primaryIcon,
    options.primaryLabel()
  );
  primaryActions.append(toolButton, clearButton, primaryButton);
  toolbar.append(primaryActions);

  const refresh = () => {
    if (previousButton) {
      iconButton(previousButton, "‹", t("handwriting.previous"));
      previousButton.disabled = options.previousDisabled ? options.previousDisabled() : false;
    }
    updateHandwritingToolButton(toolButton, options.getBoard());
    iconButton(clearButton, "🗑", t("handwriting.clearInk"));
    iconButton(primaryButton, options.primaryIcon, options.primaryLabel());
  };
  refresh();
  return { element: toolbar, refresh };
}

function createHandwritingToolButton(getBoard) {
  const button = createButton("primary-button writing-toolbar-action writing-tool-toggle", "", () => {
    const board = getBoard();
    if (!board || !board.ready) return;
    setHandwritingTool(board, board.tool === "eraser" ? "pen" : "eraser");
    updateHandwritingToolButton(button, board);
  });
  const pen = document.createElement("span");
  pen.className = "writing-tool-segment writing-tool-pen";
  pen.setAttribute("aria-hidden", "true");
  pen.textContent = "✎";
  const eraser = document.createElement("span");
  eraser.className = "writing-tool-segment writing-tool-eraser";
  eraser.setAttribute("aria-hidden", "true");
  eraser.textContent = "⌫";
  const label = document.createElement("span");
  label.className = "button-label";
  button.append(pen, eraser, label);
  updateHandwritingToolButton(button, getBoard());
  return button;
}

function updateHandwritingToolButton(button, board) {
  if (!button) return;
  const isEraser = Boolean(board && board.tool === "eraser");
  const label = t(isEraser ? "handwriting.switchToPen" : "handwriting.switchToEraser");
  button.classList.toggle("is-eraser", isEraser);
  button.classList.toggle("is-pen", !isEraser);
  button.title = label;
  button.setAttribute("aria-label", label);
  const caption = button.querySelector(".button-label");
  if (caption) caption.textContent = label;
}

function setupHandwritingBoard(canvas, options = {}) {
  const bounds = canvas.getBoundingClientRect();
  const ratio = Math.min(window.devicePixelRatio || 1, 2);
  const width = Math.max(1, Math.floor(bounds.width));
  const height = Math.max(1, Math.floor(bounds.height));
  canvas.width = Math.floor(width * ratio);
  canvas.height = Math.floor(height * ratio);
  const context = canvas.getContext("2d");
  context.setTransform(ratio, 0, 0, ratio, 0, 0);
  const board = {
    canvas,
    context,
    width,
    height,
    ratio,
    tool: "pen",
    ready: !options.initialImage,
    hasInk: false,
    drawing: false,
    lastX: 0,
    lastY: 0,
    onChange: options.onChange || null,
    onClear: options.onClear || null
  };
  drawWritingPaper(board);
  if (options.initialImage) restoreHandwritingImage(board, options.initialImage, options.hasInk);
  canvas.addEventListener("pointerdown", (event) => beginWriting(board, event));
  canvas.addEventListener("pointermove", (event) => continueWriting(board, event));
  canvas.addEventListener("pointerup", () => endWriting(board));
  canvas.addEventListener("pointercancel", () => endWriting(board));
  return board;
}

function drawWritingPaper(board) {
  const { context, width, height } = board;
  context.save();
  context.globalCompositeOperation = "source-over";
  context.clearRect(0, 0, width, height);
  context.restore();
}

function restoreHandwritingImage(board, imageSource, hasInk) {
  const image = new Image();
  board.canvas.classList.add("is-loading");
  image.onload = () => {
    if (board.canvas.isConnected) {
      board.context.save();
      board.context.globalCompositeOperation = "source-over";
      board.context.drawImage(image, 0, 0, board.width, board.height);
      board.context.restore();
    }
    board.hasInk = Boolean(hasInk);
    board.ready = true;
    board.canvas.classList.remove("is-loading");
  };
  image.onerror = () => {
    console.warn("Unable to restore saved handwriting.");
    board.ready = true;
    board.canvas.classList.remove("is-loading");
  };
  image.src = imageSource;
}

function setHandwritingTool(board, tool) {
  if (!board) return;
  board.tool = tool === "eraser" ? "eraser" : "pen";
  board.canvas.classList.toggle("is-erasing", board.tool === "eraser");
}

function beginWriting(board, event) {
  if (!board || !board.ready || game.locked || (event.pointerType === "mouse" && event.button !== 0)) return;
  event.preventDefault();
  primeAudio();
  board.drawing = true;
  if (board.tool === "pen") board.hasInk = true;
  const point = writingPoint(board, event);
  board.lastX = point.x;
  board.lastY = point.y;
  board.context.beginPath();
  board.context.arc(point.x, point.y, board.tool === "eraser" ? HANDWRITING_ERASER_WIDTH / 2 : 1.8, 0, Math.PI * 2);
  board.context.globalCompositeOperation = board.tool === "eraser" ? "destination-out" : "source-over";
  board.context.fillStyle = "#243d62";
  board.context.fill();
  board.canvas.setPointerCapture(event.pointerId);
}

function continueWriting(board, event) {
  if (!board || !board.drawing) return;
  event.preventDefault();
  const point = writingPoint(board, event);
  const context = board.context;
  context.beginPath();
  context.moveTo(board.lastX, board.lastY);
  context.lineTo(point.x, point.y);
  context.globalCompositeOperation = board.tool === "eraser" ? "destination-out" : "source-over";
  context.strokeStyle = "#243d62";
  context.lineWidth = board.tool === "eraser" ? HANDWRITING_ERASER_WIDTH : HANDWRITING_PEN_WIDTH;
  context.lineCap = "round";
  context.lineJoin = "round";
  context.stroke();
  board.lastX = point.x;
  board.lastY = point.y;
}

function endWriting(board) {
  if (!board || !board.drawing) return;
  board.drawing = false;
  if (board.onChange) board.onChange(board);
}

function writingPoint(board, event) {
  const bounds = board.canvas.getBoundingClientRect();
  return { x: event.clientX - bounds.left, y: event.clientY - bounds.top };
}

function clearHandwritingBoard(board) {
  if (!board || game.locked) return;
  drawWritingPaper(board);
  board.hasInk = false;
  if (board.onClear) board.onClear(board);
  playEffect("delete");
}

function handwritingAnswer(entryId) {
  if (!handwritingSession) return null;
  return handwritingSession.entries.find((answer) => answer.id === entryId) || null;
}

function saveHandwritingAnswer(entry, board, status = null) {
  if (!handwritingSession || !board) return null;
  const existingAnswer = handwritingAnswer(entry.id);
  if (!board.hasInk && !existingAnswer) return null;
  const answer = {
    id: entry.id,
    image: board.canvas.toDataURL("image/png"),
    status: status || (existingAnswer ? existingAnswer.status : "pending"),
    hasInk: board.hasInk
  };
  if (existingAnswer) Object.assign(existingAnswer, answer);
  else handwritingSession.entries.push(answer);
  return answer;
}

function clearSavedHandwritingAnswer(entry, board) {
  const answer = handwritingAnswer(entry.id);
  if (!answer) return;
  answer.image = board.canvas.toDataURL("image/png");
  answer.hasInk = false;
  answer.status = "pending";
  persistHandwritingSession();
}

function persistHandwritingSession() {
  if (!handwritingSession) return;
  player.handwritingSession = handwritingSession;
  saveMission(false);
}

function moveHandwritingQuestion(entry, direction) {
  if (!handwritingBoard || !handwritingBoard.ready) return;
  const nextIndex = game.roundIndex + direction;
  if (nextIndex < 0 || nextIndex >= game.rounds.length) return;
  if (handwritingBoard.hasInk) saveHandwritingAnswer(entry, handwritingBoard, "pending");
  game.roundIndex = nextIndex;
  handwritingSession.currentIndex = nextIndex;
  persistHandwritingSession();
  renderRound();
}

function advanceHandwritingQuestion(entry) {
  if (!handwritingBoard || !handwritingBoard.ready || !handwritingBoard.hasInk) {
    setFeedback(t("feedback.writeFirst"), "try-again");
    return;
  }
  saveHandwritingAnswer(entry, handwritingBoard, "pending");
  if (game.roundIndex + 1 < game.rounds.length) {
    game.roundIndex += 1;
    handwritingSession.currentIndex = game.roundIndex;
    persistHandwritingSession();
    renderRound();
    return;
  }
  const missingIndex = game.rounds.findIndex((round) => {
    const answer = handwritingAnswer(round.id);
    return !answer || !answer.hasInk;
  });
  if (missingIndex >= 0) {
    game.roundIndex = missingIndex;
    handwritingSession.currentIndex = missingIndex;
    persistHandwritingSession();
    renderRound();
    setFeedback(t("feedback.writeFirst"), "try-again");
    return;
  }
  handwritingSession.reviewing = true;
  handwritingSession.reviewMode = "overview";
  handwritingSession.editingEntryId = null;
  handwritingSession.reviewEntryId = game.rounds[0].id;
  handwritingSession.reviewIndex = 0;
  handwritingSession.currentIndex = game.roundIndex;
  persistHandwritingSession();
  renderHandwritingReview();
}

function renderHandwritingReview() {
  handwritingBoard = null;
  const area = $("#questionArea");
  area.replaceChildren();
  const review = document.createElement("section");
  review.className = "batch-review-card handwriting-review-card";
  if (handwritingSession.reviewMode === "detail") {
    const selected = selectedHandwritingReviewItem();
    if (selected) renderHandwritingReviewDetail(review, selected);
    else renderHandwritingOverview(review);
  } else {
    renderHandwritingOverview(review);
  }
  area.append(review);
  if (handwritingSession.reviewMode === "overview") {
    renderHandwritingReviewSubmitAction();
  } else {
    setFeedback(t("review.submitted"), "success");
  }
}

function orderedHandwritingReviewItems() {
  return game.rounds.map((entry, index) => ({
    entry,
    index,
    answer: handwritingAnswer(entry.id)
  }));
}

function selectedHandwritingReviewItem() {
  const items = orderedHandwritingReviewItems();
  const selected = items.find((item) => item.entry.id === handwritingSession.reviewEntryId && item.answer);
  if (selected) return selected;
  const fallback = items.find((item) => item.answer && item.answer.status !== "approved")
    || items.find((item) => item.answer);
  if (!fallback) return null;
  handwritingSession.reviewEntryId = fallback.entry.id;
  handwritingSession.reviewIndex = fallback.index;
  return fallback;
}

function renderHandwritingOverview(review) {
  handwritingSession.reviewMode = "overview";
  handwritingSession.editingEntryId = null;
  const grid = document.createElement("div");
  grid.className = "handwriting-overview-grid";
  orderedHandwritingReviewItems().forEach(({ entry, answer, index }) => {
    const checked = Boolean(answer && answer.status === "approved");
    const state = checked ? t("review.approved") : t("review.pending");
    const card = document.createElement("article");
    card.className = `handwriting-overview-card${handwritingSession.reviewEntryId === entry.id ? " is-current" : ""}${checked ? " is-approved" : ""}`;
    const focusButton = createButton("handwriting-overview-focus", "", () => openHandwritingReviewEntry(entry.id));
    focusButton.title = t("review.openAnswer", { word: entry.word });
    focusButton.setAttribute("aria-label", `${t("review.openAnswer", { word: entry.word })} · ${state}`);
    const number = document.createElement("span");
    number.className = "overview-number";
    number.setAttribute("aria-hidden", "true");
    number.textContent = String(index + 1);
    const paper = document.createElement("span");
    paper.className = "overview-paper";
    if (answer && answer.hasInk) {
      const image = document.createElement("img");
      image.src = answer.image;
      image.alt = "";
      paper.append(image);
    }
    const word = document.createElement("strong");
    word.className = "overview-word";
    word.textContent = entry.word;
    const status = document.createElement("span");
    status.className = "overview-status";
    status.setAttribute("aria-hidden", "true");
    status.textContent = checked ? "✓" : "•";
    focusButton.append(number, paper, word, status);
    const approveButton = iconButton(
      createButton("primary-button overview-approve-button", "", () => approveHandwritingEntry(entry.id)),
      "✓",
      t("review.approve")
    );
    approveButton.disabled = checked;
    card.append(focusButton, approveButton);
    grid.append(card);
  });
  review.append(grid);
}

function renderHandwritingReviewSubmitAction() {
  const feedback = $("#feedback");
  feedback.className = "feedback review-submit-feedback";
  feedback.replaceChildren();
  const submitButton = iconButton(
    createButton("primary-button review-submit-button", "", focusNextPendingHandwritingReview),
    "📤",
    t("review.submitPaper")
  );
  feedback.append(submitButton);
}

function focusNextPendingHandwritingReview() {
  const item = orderedHandwritingReviewItems().find((reviewItem) => reviewItem.answer && reviewItem.answer.status !== "approved")
    || selectedHandwritingReviewItem();
  if (item) openHandwritingReviewEntry(item.entry.id);
}

function openHandwritingReviewEntry(entryId, autoplay = true) {
  const item = orderedHandwritingReviewItems().find((reviewItem) => reviewItem.entry.id === entryId && reviewItem.answer);
  if (!item) return;
  handwritingSession.reviewMode = "detail";
  handwritingSession.reviewEntryId = entryId;
  handwritingSession.reviewIndex = item.index;
  handwritingSession.editingEntryId = null;
  persistHandwritingSession();
  renderHandwritingReview();
  if (autoplay) {
    stopActiveVoice();
    void autoplayPrompt(item.entry, primarySentence(item.entry), "word");
  }
}

function createHandwritingReviewTarget(entry) {
  const target = document.createElement("div");
  target.className = "review-detail-target";
  target.title = t("review.expected");
  target.setAttribute("aria-label", `${t("review.expected")}: ${entry.word}`);
  const word = document.createElement("strong");
  word.textContent = entry.word;
  target.append(word);
  return target;
}

function renderHandwritingReviewDetail(review, item) {
  const { entry, answer } = item;
  const isEditing = handwritingSession.editingEntryId === entry.id;
  const paper = document.createElement("section");
  paper.className = `review-detail-paper${isEditing ? " is-editing" : ""}`;

  if (isEditing) {
    const canvas = document.createElement("canvas");
    canvas.className = "handwriting-canvas review-edit-canvas";
    canvas.setAttribute("aria-label", t("review.correctionCanvas"));
    paper.append(canvas);
    review.append(paper);
    const toolbar = document.createElement("div");
    toolbar.className = "review-detail-toolbar review-edit-toolbar";
    const repeatButton = createRepeatButton(entry, primarySentence(entry), "word");
    repeatButton.classList.add("review-repeat-button");
    toolbar.append(createHandwritingReviewTarget(entry), repeatButton);
    const editToolbar = createHandwritingToolbar({
      getBoard: () => handwritingBoard,
      primaryIcon: "✓",
      primaryLabel: () => t("review.finishEdit"),
      onPrimary: () => finishHandwritingEdit(entry)
    });
    toolbar.append(editToolbar.element);
    review.append(toolbar);
    window.requestAnimationFrame(() => {
      if (!canvas.isConnected) return;
      handwritingBoard = setupHandwritingBoard(canvas, {
        initialImage: answer.hasInk ? answer.image : "",
        hasInk: Boolean(answer.hasInk),
        onChange: (board) => {
          saveHandwritingAnswer(entry, board, "pending");
          persistHandwritingSession();
        },
        onClear: (board) => clearSavedHandwritingAnswer(entry, board)
      });
      editToolbar.refresh();
    });
    return;
  }

  const writing = document.createElement("div");
  writing.className = "review-writing";
  const image = document.createElement("img");
  image.src = answer.image;
  image.alt = `${t("question.writing")}: ${entry.word}`;
  writing.append(image);
  paper.append(writing);
  review.append(paper);

  const toolbar = document.createElement("div");
  toolbar.className = "review-detail-toolbar";
  const overviewButton = iconButton(
    createButton("mini-button review-overview-button", "", () => {
      handwritingSession.reviewMode = "overview";
      handwritingSession.editingEntryId = null;
      persistHandwritingSession();
      renderHandwritingReview();
    }),
    "▦",
    t("review.overview")
  );
  const previousButton = iconButton(
    createButton("mini-button review-navigation-button", "", () => moveHandwritingReviewEntry(entry.id, -1)),
    "‹",
    t("review.previousAnswer")
  );
  const nextButton = iconButton(
    createButton("mini-button review-navigation-button", "", () => moveHandwritingReviewEntry(entry.id, 1)),
    "›",
    t("review.nextAnswer")
  );
  const actions = document.createElement("div");
  actions.className = "review-detail-actions";
  const approveButton = iconButton(
    createButton("primary-button review-action-button", "", () => approveHandwritingEntry(entry.id)),
    "✓",
    t("review.approve")
  );
  const reviseButton = iconButton(
    createButton("secondary-button review-action-button", "", () => openHandwritingCorrection(entry.id)),
    "✎",
    t("review.revise")
  );
  approveButton.disabled = answer.status === "approved";
  actions.append(approveButton, reviseButton);
  const repeatButton = createRepeatButton(entry, primarySentence(entry), "word");
  repeatButton.classList.add("review-repeat-button");
  const itemCount = orderedHandwritingReviewItems().filter((reviewItem) => reviewItem.answer).length;
  previousButton.disabled = itemCount < 2;
  nextButton.disabled = itemCount < 2;
  toolbar.append(
    overviewButton,
    previousButton,
    createHandwritingReviewTarget(entry),
    repeatButton,
    actions,
    nextButton
  );
  review.append(toolbar);
}

function moveHandwritingReviewEntry(entryId, direction) {
  const items = orderedHandwritingReviewItems().filter((item) => item.answer);
  if (items.length < 2) return;
  const currentIndex = items.findIndex((item) => item.entry.id === entryId);
  const nextIndex = (currentIndex + direction + items.length) % items.length;
  const nextItem = items[nextIndex];
  openHandwritingReviewEntry(nextItem.entry.id);
}

function approveHandwritingEntry(entryId) {
  const answer = handwritingAnswer(entryId);
  if (!answer || answer.status === "approved") return;
  answer.status = "approved";
  const items = orderedHandwritingReviewItems();
  const currentIndex = items.findIndex((item) => item.entry.id === entryId);
  let nextItem = null;
  for (let offset = 1; offset < items.length; offset += 1) {
    const candidate = items[(currentIndex + offset) % items.length];
    if (candidate.answer && candidate.answer.status !== "approved") {
      nextItem = candidate;
      break;
    }
  }
  persistHandwritingSession();
  playEffect("correct");
  if (!nextItem) {
    finishHandwritingReview();
    return;
  }
  openHandwritingReviewEntry(nextItem.entry.id);
}

function openHandwritingCorrection(entryId) {
  const answer = handwritingAnswer(entryId);
  if (!answer) return;
  answer.status = "pending";
  handwritingSession.reviewMode = "detail";
  handwritingSession.reviewEntryId = entryId;
  handwritingSession.editingEntryId = entryId;
  persistHandwritingSession();
  renderHandwritingReview();
}

function finishHandwritingEdit(entry) {
  if (!handwritingBoard || !handwritingBoard.ready || !handwritingBoard.hasInk) {
    setFeedback(t("feedback.correctionFirst"), "try-again");
    return;
  }
  saveHandwritingAnswer(entry, handwritingBoard, "pending");
  handwritingSession.editingEntryId = null;
  handwritingSession.reviewMode = "detail";
  persistHandwritingSession();
  renderHandwritingReview();
  setFeedback(t("feedback.correctionSaved"), "success");
}

function finishHandwritingReview() {
  if (!handwritingSession.entries.length || handwritingSession.entries.some((entry) => entry.status !== "approved")) {
    setFeedback(t("feedback.approveAll"), "try-again");
    return;
  }
  const stage = STAGES[game.stageIndex];
  handwritingSession.entries.forEach((entry) => {
    if (!player.progress[stage.id].includes(entry.id)) player.progress[stage.id].push(entry.id);
  });
  const reward = handwritingSession.entries.length * stage.reward + stage.bonus;
  player.stars += reward;
  player.handwritingSession = null;
  handwritingSession = null;
  game.active = false;
  clearStageSession(game.stageIndex);
  playEffect("correct");
  createConfetti();
  savePlayerProfile(false);
  renderTrainingProjects();
  $("#finalScore").textContent = t("finish.handwritingScore", { reward, stars: player.stars });
  showOnlyScreen("finishScreen");
}

function currentRound() {
  return game.rounds[game.roundIndex];
}

function renderRound(silent = false) {
  if (!game.active) return;
  game.locked = false;
  updateStageHeader();
  const stage = STAGES[game.stageIndex];
  if (stage.mode === "handwriting" && handwritingSession && handwritingSession.reviewing) {
    renderHandwritingReview();
    return;
  }
  const round = currentRound();
  const entry = stage.mode === "soundFill" ? WORD_BY_ID.get(round.wordId) : round;
  game.sentence = primarySentence(entry);
  if (stage.mode === "listening") renderListeningQuestion(entry, game.sentence);
  if (stage.mode === "soundFill") renderSoundFillQuestion(round, game.sentence);
  if (stage.mode === "spell") renderSpellQuestion(entry, game.sentence);
  if (stage.mode === "dictation") renderDictationQuestion(entry, game.sentence);
  if (stage.mode === "handwriting") renderHandwritingQuestion(entry, game.sentence);
  setFeedback(stage.mode === "spell" || stage.mode === "dictation" ? t("question.dropLetters") : t("question.ready"));
  saveMission(false);
  if (!silent) {
    const promptMode = stage.mode === "listening"
      ? "sentence"
      : stage.mode === "handwriting"
        ? "word"
        : "word-then-sentence";
    autoplayPrompt(entry, game.sentence, promptMode);
  }
}

function markRoundProgress(round) {
  const progress = player.progress[STAGES[game.stageIndex].id];
  if (!progress.includes(round.id)) progress.push(round.id);
}

function markCorrect(round, message) {
  const stage = STAGES[game.stageIndex];
  markRoundProgress(round);
  player.stars += stage.reward;
  playEffect("correct");
  setFeedback(`${message} +${stage.reward} ⚡`, "success");
  createConfetti();
  renderTrainingProjects();
  saveMission(false);
  queueNextRound();
}

function nextRound() {
  game.roundIndex += 1;
  if (game.roundIndex >= game.rounds.length) {
    completeStage();
    return;
  }
  renderRound();
}

function completeStage() {
  const stage = STAGES[game.stageIndex];
  game.active = false;
  clearStageSession(game.stageIndex);
  $("#stageResetButton").disabled = true;
  player.stars += stage.bonus;
  savePlayerProfile(false);
  renderTrainingProjects();
  createConfetti();
  if (game.stageIndex < STAGES.length - 1) {
    $("#completionTitle").textContent = t("finish.stageDone", { name: localized(stage.title) });
    $("#completionCopy").textContent = t("finish.earned", { count: stage.bonus });
    $("#nextStageButton").onclick = () => startStage(game.stageIndex + 1);
    $("#stageCompleteOverlay").hidden = false;
    return;
  }
  showFinish();
}

function restoreRounds(stageIndex, roundIds) {
  const source = getStageSource(stageIndex);
  const byId = new Map(source.map((item) => [item.id, item]));
  const restored = roundIds.map((id) => byId.get(id)).filter(Boolean);
  return restored.length === source.length ? restored : shuffle(source);
}

function storedStageSession(stageIndex) {
  const stage = STAGES[stageIndex];
  return player.stageSessions && player.stageSessions[stage.id] || null;
}

function saveCurrentStageSession() {
  if (!game.active) return;
  const stage = STAGES[game.stageIndex];
  if (!player.stageSessions) player.stageSessions = {};
  const completedCurrentRound = game.locked && stage.mode !== "handwriting" && game.roundIndex < game.rounds.length - 1;
  const session = {
    roundIds: game.rounds.map((round) => round.id),
    roundIndex: completedCurrentRound ? game.roundIndex + 1 : Math.min(Math.max(game.roundIndex, 0), game.rounds.length - 1),
    replay: stageProgress(stage, game.stageIndex).completed >= getStageSource(game.stageIndex).length,
    savedAt: new Date().toISOString()
  };
  player.stageSessions[stage.id] = session;
  player.mission = {
    stageIndex: game.stageIndex,
    roundIndex: session.roundIndex,
    roundIds: session.roundIds,
    savedAt: session.savedAt
  };
}

function clearStageSession(stageIndex) {
  const stage = STAGES[stageIndex];
  if (player.stageSessions) delete player.stageSessions[stage.id];
  if (player.mission && player.mission.stageIndex === stageIndex) player.mission = null;
}

function resetCurrentStage() {
  if (!game.active) return;
  const stageIndex = game.stageIndex;
  cancelPendingRoundAdvance();
  promptSequenceId += 1;
  stopActiveVoice();
  clearActiveDrag();
  clearStageSession(stageIndex);
  if (STAGES[stageIndex].mode === "handwriting") {
    player.handwritingSession = null;
    handwritingSession = null;
  }
  savePlayerProfile(false);
  startStage(stageIndex, null, 0, true);
}

function startStage(stageIndex, savedRoundIds = null, savedRoundIndex = 0, forceFresh = false) {
  if (!hasActiveProfile()) {
    openProfileChooser();
    return;
  }
  cancelPendingRoundAdvance();
  clearActiveDrag();
  game.stageIndex = stageIndex;
  const stage = STAGES[stageIndex];
  const suppliedSession = savedRoundIds
    ? normalizeStageSession(stageIndex, { roundIds: savedRoundIds, roundIndex: savedRoundIndex })
    : null;
  const existingSession = !forceFresh ? storedStageSession(stageIndex) : null;
  const handwritingSessionCandidate = !forceFresh && stage.mode === "handwriting" && player.handwritingSession
    ? normalizeStageSession(stageIndex, {
      roundIds: player.handwritingSession.roundIds,
      roundIndex: player.handwritingSession.currentIndex,
      savedAt: player.updatedAt
    })
    : null;
  const stageAlreadyComplete = stageProgress(stage, stageIndex).completed >= getStageSource(stageIndex).length;
  const resumableSession = [suppliedSession, existingSession, handwritingSessionCandidate]
    .find((candidate) => candidate && (!stageAlreadyComplete || candidate.replay));
  const session = !forceFresh ? resumableSession || null : null;
  const canResume = Boolean(session);
  game.rounds = session ? restoreRounds(stageIndex, session.roundIds) : shuffle(getStageSource(stageIndex));
  game.roundIndex = session ? session.roundIndex : 0;
  if (stage.mode === "handwriting") {
    const storedSession = player.handwritingSession;
    const matchingSession = storedSession
      && canResume
      && storedSession.roundIds.join("|") === game.rounds.map((round) => round.id).join("|");
    if (matchingSession) game.rounds = restoreRounds(stageIndex, storedSession.roundIds);
    handwritingSession = matchingSession
      ? storedSession
      : {
        roundIds: game.rounds.map((round) => round.id),
        entries: [],
        currentIndex: game.roundIndex,
        reviewIndex: 0,
        reviewMode: "overview",
        reviewEntryId: null,
        editingEntryId: null,
        reviewing: false
      };
    player.handwritingSession = handwritingSession;
    game.roundIndex = Math.min(handwritingSession.currentIndex, game.rounds.length - 1);
  } else {
    handwritingSession = null;
  }
  game.active = true;
  stopActiveVoice();
  showOnlyScreen("gameScreen");
  playEffect("enter");
  $("#stageCompleteOverlay").hidden = true;
  renderRound();
}

function startNewMission() {
  startStage(0, null, 0, true);
}

function resumeMission() {
  if (!player.mission) {
    showToast(t("feedback.noMission"));
    return;
  }
  startStage(player.mission.stageIndex);
}

function saveMission(showMessage = false) {
  if (!hasActiveProfile()) {
    if (showMessage) openProfileChooser();
    return;
  }
  if (!game.active) {
    if (showMessage) showToast(t("feedback.saved"));
    return;
  }
  if (STAGES[game.stageIndex].mode === "handwriting" && handwritingSession) {
    handwritingSession.currentIndex = game.roundIndex;
    player.handwritingSession = handwritingSession;
  }
  saveCurrentStageSession();
  savePlayerProfile(showMessage);
}

function showOnlyScreen(screenId) {
  ["landingScreen", "gameScreen", "gardenScreen", "workshopHomeScreen", "workshopScreen", "finishScreen"].forEach((id) => {
    $(`#${id}`).hidden = id !== screenId;
  });
  const isGameScreen = screenId === "gameScreen";
  $("#stageNavStatus").hidden = !isGameScreen;
  document.body.classList.toggle("game-active", isGameScreen);
  updateBackgroundMusic(screenId);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function returnHome() {
  cancelPendingRoundAdvance();
  if (game.active) saveMission(false);
  game.active = false;
  promptSequenceId += 1;
  stopActiveVoice();
  clearActiveDrag();
  $("#stageCompleteOverlay").hidden = true;
  showOnlyScreen("landingScreen");
  renderTrainingProjects();
  renderWorkshopHome();
  renderWorkshop();
}

function openProject(screenId) {
  if (!hasActiveProfile()) {
    openProfileChooser();
    return false;
  }
  cancelPendingRoundAdvance();
  if (game.active) saveMission(false);
  game.active = false;
  promptSequenceId += 1;
  stopActiveVoice();
  clearActiveDrag();
  $("#stageCompleteOverlay").hidden = true;
  showOnlyScreen(screenId);
  playEffect("enter");
  return true;
}

function openGardenProject() {
  if (!openProject("gardenScreen")) return;
  renderGarden();
}

function openWorkshopProject() {
  if (!openProject("workshopScreen")) return;
  selectedCollectionId = activeCollection().id;
  renderWorkshop();
}

function showFinish() {
  cancelPendingRoundAdvance();
  game.active = false;
  player.mission = null;
  savePlayerProfile(false);
  $("#finalScore").textContent = `⚡ ${player.stars}`;
  showOnlyScreen("finishScreen");
  createConfetti();
}

function createConfetti() {
  const colors = ["#42d8ff", "#ffe071", "#ff814f", "#76e7d1", "#987cff"];
  for (let index = 0; index < 22; index += 1) {
    const piece = document.createElement("span");
    piece.className = "confetti";
    piece.style.setProperty("--confetti-color", colors[index % colors.length]);
    piece.style.setProperty("--x", `${Math.round((Math.random() - 0.5) * 530)}px`);
    piece.style.setProperty("--y", `${Math.round(120 + Math.random() * 390)}px`);
    piece.style.setProperty("--spin", `${Math.round((Math.random() - 0.5) * 900)}deg`);
    document.body.append(piece);
    window.setTimeout(() => piece.remove(), 1200);
  }
}

function createLearningProjectCard(stage, stageIndex) {
  const progress = stageProgress(stage, stageIndex);
  const card = createButton(`stage-project-card${progress.completed >= progress.total ? " is-complete" : ""}`, "", () => startStage(stageIndex));
  card.innerHTML = `
    <span class="stage-project-number" aria-hidden="true">${stageIndex + 1}</span>
    <span class="stage-project-icon" aria-hidden="true">${stage.icon}</span>
    <span class="stage-project-copy"><strong>${localized(stage.title)}</strong><small>${localized(stage.mapDescription)}</small></span>
    <span class="stage-project-progress" aria-hidden="true"><i></i><em>${progress.completed} / ${progress.total}</em></span>
  `;
  card.querySelector(".stage-project-progress i").style.width = `${(progress.completed / progress.total) * 100}%`;
  card.title = localized(stage.title);
  card.setAttribute("aria-label", `${t("home.stage", { number: stageIndex + 1 })}: ${localized(stage.title)} — ${progress.completed} / ${progress.total}`);
  return card;
}

function createFacilityCard(kind, title, icon, count, image, onClick) {
  const card = createButton(`facility-card ${kind}`, "", onClick);
  card.innerHTML = `<img src="${image}" alt=""><span class="facility-icon" aria-hidden="true">${icon}</span><strong>${title}</strong><small class="facility-count">${count}</small>`;
  card.title = title;
  card.setAttribute("aria-label", title);
  return card;
}

function renderTrainingProjects() {
  const stageGrid = $("#stageProjectGrid");
  const facilityGrid = $("#facilityProjectGrid");
  stageGrid.replaceChildren();
  facilityGrid.replaceChildren();
  STAGES.forEach((stage, index) => stageGrid.append(createLearningProjectCard(stage, index)));
  facilityGrid.append(
    createFacilityCard("training", t("home.wordLab"), "🛰️", t("home.words", { count: WORDS.length }), "images/backgrounds/mars-rover.jpg", openGardenProject),
    createFacilityCard("shop", t("home.workshop"), "🧰", t("home.sets", { done: activatedCollectionSets(), total: COLLECTION_SETS.length }), "images/backgrounds/orion-nebula.jpg", openWorkshopProject)
  );
  updateHome();
}

function renderGarden() {
  const grid = $("#gardenGrid");
  grid.replaceChildren();
  shuffle(WORDS).forEach((entry) => {
    const card = createButton(`garden-word${entry.id === gardenWordId ? " selected" : ""}`, "", () => {
      gardenWordId = entry.id;
      playEffect("tap");
      renderGarden();
    });
    card.innerHTML = `<img src="${entry.image}" alt=""><span><strong>${entry.word}</strong><small>${localized(entry.meaning)}</small></span>`;
    card.title = entry.word;
    card.setAttribute("aria-label", entry.word);
    grid.append(card);
  });
  renderGardenDetail();
}

function renderGardenDetail() {
  const entry = WORD_BY_ID.get(gardenWordId);
  const detail = $("#gardenDetail");
  detail.replaceChildren();
  const heading = document.createElement("div");
  heading.className = "lab-heading";
  heading.innerHTML = `<img src="${entry.image}" alt="${localized(entry.visual)}"><div><h3>${entry.word}</h3><p>${localized(entry.meaning)}</p></div>`;
  const wordButton = createVoiceButton(entry, null);
  const sentenceList = document.createElement("div");
  sentenceList.className = "sentence-list";
  entry.sentences.forEach((sentence, index) => {
    const button = createButton("sentence-sample", sentence.text, () => {
      playVoice(audioMaps.sentence.get(`${entry.id}-${index}`), button);
    });
    sentenceList.append(button);
  });
  detail.append(heading, wordButton, sentenceList);
}

function collectionItems(collection) {
  return COLLECTION_PARTS.filter((item) => item.collectionId === collection.id);
}

function isCollectionPartOwned(collection, partId) {
  const owned = collection.id === "rocket" ? player.ownedRocketParts : player.ownedCollectionParts;
  return owned.includes(partId);
}

function escapeSvgText(value) {
  return String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function createAssemblyBackdrop() {
  const backdrop = document.createElementNS(SVG_NS, "g");
  backdrop.classList.add("assembly-ambient");
  backdrop.innerHTML = `
    <ellipse cx="220" cy="165" rx="196" ry="145" fill="#173c78" opacity=".42"/>
    <circle cx="69" cy="70" r="5" fill="#fff2a0"/><circle cx="370" cy="64" r="4" fill="#a8f7ff"/>
    <circle cx="344" cy="282" r="5" fill="#fff2a0"/><circle cx="80" cy="255" r="4" fill="#a8f7ff"/>
    <path d="M40 155h30M355 142h42" stroke="#79eafa" stroke-width="3" stroke-linecap="round" opacity=".45"/>
  `;
  return backdrop;
}

function createCollectionAssembly(collection) {
  const svg = document.createElementNS(SVG_NS, "svg");
  svg.classList.add("assembly-svg", `assembly-svg--${collection.id}`);
  svg.setAttribute("viewBox", "0 0 440 330");
  svg.setAttribute("preserveAspectRatio", "xMidYMid meet");
  svg.setAttribute("role", "img");
  svg.setAttribute("aria-label", t("workshop.assembly", { name: localized(collection.name) }));
  const title = document.createElementNS(SVG_NS, "title");
  title.textContent = t("workshop.assembly", { name: localized(collection.name) });
  svg.append(title, createAssemblyBackdrop());
  const art = COLLECTION_ASSEMBLY_ART[collection.id] || [];
  collectionItems(collection).forEach((part, index) => {
    const piece = document.createElementNS(SVG_NS, "g");
    const owned = isCollectionPartOwned(collection, part.id);
    piece.classList.add("assembly-piece");
    if (owned) piece.classList.add("is-owned");
    piece.dataset.partId = part.id;
    piece.dataset.partName = localized(part.name);
    piece.setAttribute("aria-label", t("workshop.part", { number: index + 1, name: localized(part.name) }));
    piece.innerHTML = `<title>${escapeSvgText(t("workshop.part", { number: index + 1, name: localized(part.name) }))}</title>${art[index] || svgCircle(220, 165, 12, "#879dc6")}`;
    svg.append(piece);
  });
  return svg;
}

function renderCollectionAssembly(container, collection, compact = false) {
  if (!container) return;
  container.replaceChildren();
  container.classList.add("collection-assembly");
  container.classList.toggle("is-compact", compact);
  container.dataset.collection = collection.id;
  container.append(createCollectionAssembly(collection));
}

function validateCollectionDefinitions() {
  const invalid = COLLECTION_SETS.filter((collection) => {
    return collection.parts.length !== 20 || collectionItems(collection).length !== 20 || (COLLECTION_ASSEMBLY_ART[collection.id] || []).length !== 20;
  });
  if (invalid.length) console.error("Collection definition mismatch:", invalid.map((collection) => collection.id).join(", "));
}

function renderHomeCollection() {
  const collection = activeCollection();
  const progress = collectionProgress(collection);
  const preview = $("#homeCollectionPreview");
  renderCollectionAssembly(preview, collection, true);
  const label = document.createElement("span");
  label.className = "home-collection-label";
  label.innerHTML = `<small>${t("home.collection")}</small><strong>${localized(collection.name)}</strong>`;
  const completion = document.createElement("strong");
  completion.className = "assembly-count";
  completion.textContent = `${progress.completed} / ${progress.total}`;
  preview.append(label, completion);
}

function selectedCollection() {
  return COLLECTION_SETS.find((collection) => collection.id === selectedCollectionId) || COLLECTION_SETS[0];
}

function renderWorkshopHome() {
  const gallery = $("#workshopCollectionGrid");
  if (!gallery) return;
  gallery.replaceChildren();
  $("#activatedCollectionCount").textContent = t("workshop.activeSets", { done: activatedCollectionSets(), total: COLLECTION_SETS.length });
  COLLECTION_SETS.forEach((collection) => {
    const progress = collectionProgress(collection);
    const card = createButton(`workshop-home-card${progress.completed === progress.total ? " completed" : ""}`, "", () => openCollection(collection.id));
    const art = document.createElement("div");
    art.className = "collection-card-art";
    renderCollectionAssembly(art, collection, true);
    const details = document.createElement("span");
    details.className = "collection-card-copy";
    details.innerHTML = `<i aria-hidden="true">${collection.icon}</i><strong>${localized(collection.name)}</strong><small>${progress.completed} / ${progress.total}</small>`;
    card.append(art, details);
    card.title = t("workshop.openCollection", { name: localized(collection.name) });
    card.setAttribute("aria-label", card.title);
    gallery.append(card);
  });
}

function openCollection(collectionId) {
  selectedCollectionId = collectionId;
  player.activeCollectionId = collectionId;
  savePlayerProfile(false);
  showOnlyScreen("workshopScreen");
  playEffect("enter");
  renderWorkshop();
}

function currentWorkshopItems() {
  return collectionItems(selectedCollection());
}

function ownedWorkshopItems() {
  return selectedCollection().id === "rocket" ? player.ownedRocketParts : player.ownedCollectionParts;
}

function renderWorkshop() {
  const collection = selectedCollection();
  const progress = collectionProgress(collection);
  $("#workshopShowcaseTitle").textContent = localized(collection.name);
  $("#workshopShowcaseCount").textContent = `${progress.completed} / ${progress.total}`;
  $("#workshopBuildingCopy").textContent = t("workshop.building", { name: localized(collection.name) });
  renderCollectionHero(collection, progress);
  const items = currentWorkshopItems();
  $("#shopBalance").textContent = `⚡ ${player.stars}`;
  $("#shopNotice").textContent = t("workshop.detail", { name: localized(collection.name), done: progress.completed, total: progress.total });
  const shopGrid = $("#shopGrid");
  shopGrid.replaceChildren();
  items.forEach((item) => {
    const owned = ownedWorkshopItems().includes(item.id);
    const card = createButton(`shop-item${owned ? " owned" : ""}`, "", () => buyWorkshopItem(item));
    card.disabled = owned;
    card.innerHTML = `<span class="shop-icon" aria-hidden="true">${item.icon}</span><strong>${localized(item.name)}</strong><em>${owned ? t("common.owned") : `⚡ ${item.price}`}</em>`;
    card.title = owned ? localized(item.name) : t("workshop.buy", { name: localized(item.name) });
    card.setAttribute("aria-label", card.title);
    shopGrid.append(card);
  });
}

function renderCollectionHero(collection, progress) {
  const hero = $("#collectionHero");
  hero.replaceChildren();
  hero.classList.toggle("is-building", progress.completed > 0);
  renderCollectionAssembly(hero, collection);
  const label = document.createElement("strong");
  label.className = "assembly-count";
  label.textContent = t("workshop.collectionProgress", { done: progress.completed, total: progress.total });
  hero.append(label);
}

function buyWorkshopItem(item) {
  const owned = ownedWorkshopItems();
  if (owned.includes(item.id)) return;
  if (player.stars < item.price) {
    playEffect("wrong");
    $("#shopNotice").textContent = t("feedback.purchaseNeed", { count: item.price - player.stars });
    return;
  }
  player.stars -= item.price;
  owned.push(item.id);
  playEffect("purchase");
  createConfetti();
  savePlayerProfile(false);
  renderWorkshop();
  renderTrainingProjects();
}

function toggleFullscreen() {
  if (!document.fullscreenEnabled || !document.documentElement.requestFullscreen) return;
  const action = document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen();
  action.catch((error) => console.warn("Unable to enter fullscreen:", error));
}

function registerServiceWorker() {
  if (!("serviceWorker" in navigator) || !/^https?:$/.test(location.protocol)) return;
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch((error) => console.warn("Offline setup failed:", error));
  });
}

function wireInterface() {
  $("#homeButton").addEventListener("click", returnHome);
  $("#stageResetButton").addEventListener("click", resetCurrentStage);
  $("#languageToggle").addEventListener("click", () => setLanguage(currentLanguage() === "zh" ? "en" : "zh"));
  $("#openProfileButton").addEventListener("click", openProfileChooser);
  $("#bonusChallengeButton").addEventListener("click", openBonusChallenge);
  $("#closeBonusChallengeButton").addEventListener("click", closeBonusChallenge);
  $("#checkBonusButton").addEventListener("click", checkBonusChallenge);
  $("#bonusListenButton").addEventListener("click", () => {
    playVoice(audioMaps.bonus.get("space"), $("#bonusListenButton"));
  });
  $("#bonusAnswerInput").addEventListener("input", () => playEffect("type"));
  $("#bonusAnswerInput").addEventListener("keydown", (event) => {
    if (event.key === "Enter") checkBonusChallenge();
  });
  $("#closeProfileButton").addEventListener("click", closeProfileChooser);
  $("#saveProfileButton").addEventListener("click", createProfileFromForm);
  $("#cancelProfileEditButton").addEventListener("click", cancelProfileEdit);
  $("#profileNameInput").addEventListener("keydown", (event) => {
    if (event.key === "Enter") createProfileFromForm();
  });
  $("#fullscreenButton").addEventListener("click", toggleFullscreen);
  $("#homeFromCompletionButton").addEventListener("click", returnHome);
  $("#playAgainButton").addEventListener("click", startNewMission);
  $("#workshopHomeButton").addEventListener("click", () => {
    showOnlyScreen("workshopHomeScreen");
    playEffect("tap");
    renderWorkshopHome();
  });
  $("#cancelDeleteProfileButton").addEventListener("click", cancelProfileDeletion);
  $("#confirmDeleteProfileButton").addEventListener("click", deleteProfile);
  $("#profileGateOverlay").addEventListener("click", (event) => {
    if (event.target === $("#profileGateOverlay")) closeProfileChooser();
  });
  $("#deleteProfileOverlay").addEventListener("click", (event) => {
    if (event.target === $("#deleteProfileOverlay")) cancelProfileDeletion();
  });
  $("#bonusChallengeOverlay").addEventListener("click", (event) => {
    if (event.target === $("#bonusChallengeOverlay")) closeBonusChallenge();
  });
  document.addEventListener("pointerdown", (event) => {
    primeAudio();
    const button = event.target.closest("button");
    const gameplayAnswer = button && button.matches(".choice-button, .check-button, .letter-tile, .spelling-slot, .bonus-submit");
    if (button && !gameplayAnswer) {
      playEffect("tap");
    }
  }, { capture: true });
  document.addEventListener("touchstart", primeAudio, { once: true, capture: true, passive: true });
  document.addEventListener("keydown", primeAudio, { once: true, capture: true });
  window.addEventListener("pagehide", () => saveMission(false));
}

function initializeGame() {
  validateCollectionDefinitions();
  applyStaticTranslations();
  preloadAudio();
  wireInterface();
  renderTrainingProjects();
  renderGarden();
  renderWorkshopHome();
  renderWorkshop();
  renderProfileChooser();
  registerServiceWorker();
  if (!hasActiveProfile()) openProfileChooser();
  if (storageWarning) window.setTimeout(() => showToast(storageWarning), 250);
}

initializeGame();
