const WORDS = [
  {
    id: "one",
    word: "one",
    meaning: "一",
    visual: "一颗闪亮的星星",
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
    meaning: "二",
    visual: "两枚蓝色小火箭",
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
    meaning: "三",
    visual: "三个挥手的小外星人",
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
    meaning: "四",
    visual: "四颗绕圈的小行星",
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
    meaning: "吃",
    visual: "小宇航员在吃红苹果",
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
    meaning: "那个 / 那",
    visual: "手指指向一枚蓝色火箭",
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
    meaning: "他们 / 她们 / 它们",
    visual: "两个宇航员一起挥手",
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
    meaning: "喜欢",
    visual: "宇航员喜欢他的火箭",
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
    meaning: "黑色",
    visual: "黑猫坐在月亮旁边",
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
    meaning: "白色",
    visual: "白色月亮和白云",
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
  { id: "listening", icon: "📡", art: "images/three.svg", title: "雷达听音站", description: "听句子，选单词。", mapDescription: "听句子选单词", mode: "listening", reward: 2, bonus: 8 },
  { id: "soundFill", icon: "🔊", art: "images/eat.svg", title: "声波填空站", description: "听单词，补字母。", mapDescription: "听读音填空", mode: "soundFill", reward: 2, bonus: 8 },
  { id: "spell", icon: "🧩", art: "images/two.svg", title: "字母拼装舱", description: "拖动字母，拼单词。", mapDescription: "拖拽字母拼词", mode: "spell", reward: 3, bonus: 10 },
  { id: "dictation", icon: "⌨️", art: "images/black.svg", title: "拼写键盘舱", description: "用字母键盘拼出答案。", mapDescription: "字母键盘默写", mode: "dictation", reward: 5, bonus: 14 },
  { id: "handwriting", icon: "✍️", art: "images/one.svg", title: "星际默写台", description: "手写整组默写答卷。", mapDescription: "手写默写答卷", mode: "handwriting", reward: 15, bonus: 40 }
];

const ROCKET_PARTS = [
  { id: "nose-cone", icon: "🔺", name: "星盾鼻锥", price: 6 },
  { id: "cockpit-glass", icon: "🔵", name: "水晶座舱", price: 9 },
  { id: "antenna", icon: "📡", name: "信号天线", price: 7 },
  { id: "navigation-light", icon: "💡", name: "导航灯", price: 5 },
  { id: "hull-core", icon: "🛡️", name: "蓝虎机身", price: 14 },
  { id: "left-wing", icon: "◀️", name: "左翼", price: 12 },
  { id: "right-wing", icon: "▶️", name: "右翼", price: 12 },
  { id: "left-fin", icon: "🔻", name: "左尾翼", price: 10 },
  { id: "right-fin", icon: "🔺", name: "右尾翼", price: 10 },
  { id: "fuel-tank", icon: "🧪", name: "能量燃料罐", price: 13 },
  { id: "engine-core", icon: "⚙️", name: "引擎核心", price: 18 },
  { id: "left-thruster", icon: "🔷", name: "左推进器", price: 15 },
  { id: "right-thruster", icon: "🔷", name: "右推进器", price: 15 },
  { id: "plasma-flame", icon: "🔥", name: "等离子尾焰", price: 9 },
  { id: "shield-ring", icon: "🫧", name: "行星护盾", price: 22 },
  { id: "star-decals", icon: "✨", name: "星星涂装", price: 6 },
  { id: "radar-dish", icon: "🛰️", name: "远程雷达", price: 12 },
  { id: "turbo-booster", icon: "⚡", name: "涡轮加速器", price: 24 },
  { id: "moon-flag", icon: "🚩", name: "月球小旗", price: 8 },
  { id: "captain-seat", icon: "🧑‍🚀", name: "指挥官座椅", price: 16 }
];

const COLLECTION_SETS = [
  { id: "rocket", icon: "🚀", name: "专属火箭", image: "images/two.svg", parts: ROCKET_PARTS.map((part) => part.name) },
  { id: "moon-base", icon: "🌕", name: "月球基地", image: "images/white.svg", parts: ["月岩地基", "观察圆顶", "氧气门", "太阳能板", "月球旗", "通讯塔", "补给箱", "观测镜", "停机坪", "基地徽章", "月尘扫帚", "睡眠舱", "能量厨房", "月光灯", "星图桌", "实验台", "机器人门卫", "月球车库", "补给火箭", "基地王冠"] },
  { id: "alien-craft", icon: "🛸", name: "外星飞船", image: "images/three.svg", parts: ["飞碟底盘", "光束舱", "星际窗", "磁力翼", "能源球", "导航环", "雷达盘", "传送门", "彩虹尾焰", "飞船徽记", "反重力芯", "隐形披风", "云朵天线", "月光引擎", "星尘喷口", "激光灯", "宇宙方向盘", "时空座椅", "银河护盾", "船长旗"] },
  { id: "space-suit", icon: "🧑‍🚀", name: "银河战衣", image: "images/eat.svg", parts: ["头盔外壳", "护目镜", "氧气背包", "星纹上衣", "防护手套", "月球靴", "通讯耳机", "能量腰带", "护盾贴片", "战衣徽章", "彗星披风", "太阳护肩", "反射护膝", "星光手环", "导航袖标", "补氧管", "火箭拉链", "银河口袋", "勇气胸章", "冠军头盔"] },
  { id: "robot-buddy", icon: "🤖", name: "机器人伙伴", image: "images/three.svg", parts: ["机器人头", "闪亮眼睛", "信号耳朵", "金属身体", "机械手臂", "弹簧腿", "能量核心", "工具箱", "表情面板", "伙伴贴纸", "火箭轮", "星图芯片", "雷达天线", "音乐喇叭", "磁力手掌", "夜光脚灯", "小帽子", "微笑按钮", "零食抽屉", "机器人徽章"] },
  { id: "mars-rover", icon: "🛞", name: "火星星车", image: "images/four.svg", parts: ["红土底盘", "探测轮", "车顶雷达", "前灯", "样本盒", "太阳能翼", "机械臂", "导航屏", "避震器", "火星旗", "沙暴护罩", "陨石保险杠", "岩石钻头", "水晶车窗", "能量轮胎", "星图座椅", "补给背箱", "行星喇叭", "极速引擎", "火星勋章"] },
  { id: "space-garden", icon: "🪴", name: "星球花园", image: "images/like.svg", parts: ["陨石花盆", "月光种子", "星星花", "蓝光叶", "浇水球", "玻璃温室", "小树苗", "彩虹蘑菇", "蜜蜂机器人", "花园门牌", "彗星藤蔓", "太阳花瓣", "星尘肥料", "月球喷泉", "银河秋千", "外星南瓜", "夜光石", "花园小路", "太空风铃", "花园奖章"] },
  { id: "satellite-station", icon: "🛰️", name: "卫星基地", image: "images/that.svg", parts: ["轨道底座", "太阳能翼", "大天线", "信号灯", "观察舱", "星图屏", "推进器", "数据盒", "银河环", "卫星旗", "云层雷达", "星星镜头", "补给吊舱", "太空网线", "闪光中继器", "远航电池", "轨道座椅", "月球接收器", "卫星护盾", "基地奖杯"] },
  { id: "alien-pet", icon: "👾", name: "外星宠物", image: "images/three.svg", parts: ["圆圆脑袋", "闪闪眼睛", "小触角", "彩色身体", "弹跳脚", "爱心尾巴", "能量背包", "零食罐", "名字牌", "宠物王冠", "月光项圈", "星尘毛刷", "火箭玩具", "银河水碗", "彩虹耳朵", "睡眠小屋", "宠物披风", "超能爪子", "笑脸贴纸", "宠物奖牌"] },
  { id: "cosmic-trophy", icon: "🏆", name: "银河奖杯", image: "images/one.svg", parts: ["奖杯底座", "金色双耳", "星星杯身", "冠军丝带", "月球宝石", "银河刻字", "彩带云", "火箭顶饰", "闪光灯", "最终徽章", "流星底盘", "太阳之冠", "星尘钻石", "火星红宝石", "外星绿宝石", "月光银环", "宇宙金边", "胜利按钮", "冠军旗帜", "超级奖章"] }
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

const BONUS_CHALLENGE = { word: "space", clue: "太空", scramble: ["A", "E", "P", "S", "C"] };

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
  { id: "astronaut", emoji: "🧑‍🚀", label: "小宇航员" },
  { id: "robot", emoji: "🤖", label: "机器人" },
  { id: "pilot", emoji: "🧑‍✈️", label: "飞行员" },
  { id: "alien", emoji: "👾", label: "小外星人" },
  { id: "tiger", emoji: "🐯", label: "太空虎机" },
  { id: "fox", emoji: "🦊", label: "星际小狐" },
  { id: "dino", emoji: "🦖", label: "火箭恐龙" },
  { id: "cat", emoji: "🐈‍⬛", label: "月球黑猫" }
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

const WORD_BY_ID = new Map(WORDS.map((entry) => [entry.id, entry]));
const AVATAR_BY_ID = new Map(AVATARS.map((avatar) => [avatar.id, avatar]));
const ROCKET_PART_IDS = new Set(ROCKET_PARTS.map((item) => item.id));
const COLLECTION_PART_IDS = new Set(COLLECTION_PARTS.map((item) => item.id));
const PROFILE_STORE_KEY = "word-space-quest-profiles-v7";
const LEGACY_PROFILE_KEYS = ["word-space-quest-profiles-v6", "word-space-quest-profiles-v5", "word-space-quest-profile-v4"];
const SHOP_PAGE_SIZE = 6;
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
let player = getActiveProfile() || createDefaultProfile("等待选择", "astronaut", "preview-profile");
let selectedAvatarId = player.avatarId;
let editingProfileId = null;
let pendingDeleteProfileId = null;
let activeVoice = null;
let activeVoiceButton = null;
let activeBackgroundMusic = null;
let activeDrag = null;
let gardenWordId = "one";
let selectedCollectionId = COLLECTION_SETS[0].id;
let shopPage = 0;
let toastTimer = 0;
let audioPrimed = false;
let activeBonusChallenge = null;
let promptSequenceId = 0;
let activeVoiceCompletion = null;
let handwritingBoard = null;
let correctionBoard = null;
let handwritingSession = null;
let handwritingReviewPage = 0;

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

function createDefaultProfile(name = "新驾驶员", avatarId = "astronaut", id = createProfileId()) {
  return {
    id,
    name: cleanPlayerName(name) || "新驾驶员",
    avatarId: AVATAR_BY_ID.has(avatarId) ? avatarId : "astronaut",
    version: 7,
    stars: 20,
    ownedRocketParts: [],
    ownedCollectionParts: [],
    activeCollectionId: "rocket",
    progress: { listening: [], soundFill: [], spell: [], dictation: [], handwriting: [] },
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
      status: entry.status === "approved" ? "approved" : "pending"
    }))
    .filter((entry) => {
      if (seen.has(entry.id)) return false;
      seen.add(entry.id);
      return true;
    });
  return {
    roundIds,
    entries,
    currentIndex: Number.isInteger(candidate.currentIndex) ? Math.min(Math.max(candidate.currentIndex, 0), roundIds.length) : entries.length,
    reviewPage: Number.isInteger(candidate.reviewPage) ? Math.max(candidate.reviewPage, 0) : 0,
    reviewing: Boolean(candidate.reviewing)
  };
}

function getStageSource(stageIndex) {
  return STAGES[stageIndex].mode === "soundFill" ? FILL_QUESTIONS : WORDS;
}

function normalizeProfile(candidate, fallbackName = "新驾驶员") {
  const profile = createDefaultProfile(
    cleanPlayerName(candidate && candidate.name) || fallbackName,
    candidate && candidate.avatarId,
    candidate && typeof candidate.id === "string" ? candidate.id : createProfileId()
  );
  if (!candidate || typeof candidate !== "object") return profile;

  profile.stars = Number.isFinite(Number(candidate.stars)) ? Math.max(0, Math.floor(Number(candidate.stars))) : profile.stars;
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
    }
  }
  return profile;
}

function createDefaultSaveBook() {
  return { version: 7, activeProfileId: null, profiles: [] };
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
      const profile = normalizeProfile(JSON.parse(legacy), "小宇航员");
      return { version: 7, activeProfileId: profile.id, profiles: [profile] };
    }
  } catch (error) {
    storageWarning = "旧存档无法读取，已创建新的训练档案。";
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
    if (showMessage) showToast("存档失败。");
    return false;
  }
  updateHome();
  if (showMessage) showToast("已自动保存。");
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

function randomSentence(entry) {
  const index = Math.floor(Math.random() * entry.sentences.length);
  return { ...entry.sentences[index], index };
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
  $("#homePilotName").textContent = player.name;
  document.querySelectorAll("[data-profile-avatar]").forEach((element) => {
    element.textContent = avatar.emoji;
  });
}

function updateStarDisplays() {
  document.querySelectorAll("[data-star-balance]").forEach((element) => {
    element.textContent = `⚡ ${player.stars}`;
  });
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
  $("#homeCollectionName").textContent = active.name;
  $("#homeCollectionStatus").textContent = active.name;
  $("#heroRocketCount").textContent = `${ready ? activeProgress.completed : 0} / ${activeProgress.total}`;
  $("#heroCollectionCount").textContent = `${ready ? activatedCollectionSets() : 0} / ${COLLECTION_SETS.length}`;
  $("#resumeButton").hidden = !ready || !player.mission;
  const bonusButton = $("#bonusChallengeButton");
  bonusButton.disabled = !ready;
  bonusButton.textContent = "✨ +100";
  $("#saveNote").textContent = ready && player.mission
    ? `上次：${STAGES[player.mission.stageIndex].title} · ${player.mission.roundIndex + 1} / ${player.mission.roundIds.length}`
    : "自动存档已开启";
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
  $("#bonusClue").textContent = `提示：${activeBonusChallenge.clue}`;
  $("#bonusFeedback").textContent = "";
  const scramble = $("#bonusScramble");
  scramble.replaceChildren();
  activeBonusChallenge.scramble.forEach((letter) => {
    const tile = document.createElement("span");
    tile.textContent = letter;
    scramble.append(tile);
  });
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
    $("#bonusFeedback").textContent = "还差一点，再看一眼打乱的字母！";
    playEffect("wrong");
    return;
  }
  player.stars += 100;
  answerInput.classList.remove("wrong");
  answerInput.classList.add("correct");
  $("#bonusFeedback").textContent = `太厉害了！+100 ⚡`;
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
    option.innerHTML = `<span>${avatar.emoji}</span><small>${avatar.label}</small>`;
    avatarGrid.append(option);
  });
}

function renderProfileChooser() {
  const profileGrid = $("#profileGrid");
  profileGrid.replaceChildren();
  if (!saveBook.profiles.length) {
    const empty = document.createElement("p");
    empty.className = "empty-profile-note";
    empty.textContent = "输入名字，选择头像，开始训练。";
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
    progress.textContent = `${profile.ownedRocketParts.length} / ${ROCKET_PARTS.length} 火箭`;
    details.append(name, progress);
    const stars = document.createElement("em");
    stars.textContent = `⚡ ${profile.stars}`;
    const actions = document.createElement("div");
    actions.className = "profile-actions";
    actions.append(
      createButton("profile-action-button profile-use-button", "进入", () => activateProfile(profile.id)),
      createButton("profile-action-button", "修改", () => beginProfileEdit(profile.id)),
      createButton("profile-action-button profile-delete-button", "删除", () => requestProfileDeletion(profile.id))
    );
    card.append(avatar, details, stars, actions);
    profileGrid.append(card);
  });
  renderAvatarChoices();
  $("#closeProfileButton").hidden = !hasActiveProfile();
}

function resetProfileForm() {
  editingProfileId = null;
  selectedAvatarId = player.avatarId;
  $("#profileNameInput").value = "";
  $("#profileFormTitle").textContent = "创建驾驶员";
  $("#profileFormMessage").textContent = "";
  $("#saveProfileButton").textContent = "创建驾驶员";
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
  showToast(`欢迎回来，${player.name}！`);
}

function beginProfileEdit(profileId) {
  const profile = saveBook.profiles.find((item) => item.id === profileId);
  if (!profile) return;
  editingProfileId = profile.id;
  selectedAvatarId = profile.avatarId;
  $("#profileNameInput").value = profile.name;
  $("#profileFormTitle").textContent = `修改 ${profile.name}`;
  $("#profileFormMessage").textContent = "";
  $("#saveProfileButton").textContent = "保存修改";
  $("#cancelProfileEditButton").hidden = false;
  renderAvatarChoices();
}

function cancelProfileEdit() {
  resetProfileForm();
}

function createProfileFromForm() {
  const name = cleanPlayerName($("#profileNameInput").value);
  if (!name) {
    $("#profileFormMessage").textContent = "请输入名字。";
    return;
  }
  const duplicate = saveBook.profiles.find((profile) => {
    return profile.id !== editingProfileId && profile.name.toLocaleLowerCase() === name.toLocaleLowerCase();
  });
  if (duplicate) {
    $("#profileFormMessage").textContent = "这个名字已经有存档。";
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
      $("#profileFormMessage").textContent = "修改未保存。";
      return;
    }
    if (profile.id === saveBook.activeProfileId) player = profile;
    renderProfileChooser();
    resetProfileForm();
    updateHome();
    showToast("驾驶员资料已修改。");
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
  $("#deleteProfileName").textContent = profile.name;
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
    $("#profileFormMessage").textContent = "删除未保存。";
    cancelProfileDeletion();
    return;
  }
  cancelProfileDeletion();
  if (activeWasDeleted) {
    player = createDefaultProfile("等待选择", "astronaut", "preview-profile");
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
  showToast(`已删除 ${profile.name} 的档案。`);
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
    sound.volume = name === "correct" || name === "purchase" ? 0.52 : 0.38;
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

async function autoplayPrompt(entry, sentence, mode) {
  const sequenceId = ++promptSequenceId;
  await wait(220);
  if (sequenceId !== promptSequenceId || !game.active) return;
  if (mode === "word-then-sentence") {
    await playVoiceAndWait(audioMaps.word.get(entry.id));
    if (sequenceId !== promptSequenceId || !game.active) return;
    await wait(170);
  }
  if (sequenceId !== promptSequenceId || !game.active) return;
  await playVoiceAndWait(audioMaps.sentence.get(`${entry.id}-${sentence.index}`));
}

function playEffect(name) {
  const sound = audioMaps.sfx.get(name);
  if (!sound) return;
  sound.pause();
  sound.currentTime = 0;
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
  image.alt = entry.visual;
  const caption = document.createElement("figcaption");
  caption.textContent = entry.visual;
  figure.append(image, caption);
  return figure;
}

function createVoiceButton(entry, sentence, label) {
  const button = createButton("listen-button", label, () => {
    const audio = sentence
      ? audioMaps.sentence.get(`${entry.id}-${sentence.index}`)
      : audioMaps.word.get(entry.id);
    playVoice(audio, button);
  });
  return button;
}

function createPromptControls(entry, sentence, includeWord = true) {
  const controls = document.createElement("div");
  controls.className = "audio-controls";
  if (includeWord) controls.append(createVoiceButton(entry, null, "▶ 重听单词"));
  controls.append(createVoiceButton(entry, sentence, "↻ 重听句子"));
  return controls;
}

function setFeedback(message, kind = "") {
  const feedback = $("#feedback");
  feedback.className = `feedback ${kind}`.trim();
  feedback.textContent = message;
}

function updateStageHeader() {
  const stage = STAGES[game.stageIndex];
  $("#stageIcon").textContent = stage.icon;
  $("#stageTitle").textContent = stage.title;
  $("#stageDescription").textContent = stage.description;
  $("#roundText").textContent = `${game.roundIndex + 1} / ${game.rounds.length}`;
  $("#roundFill").style.width = `${(game.roundIndex / game.rounds.length) * 100}%`;
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
  layout.append(createSceneCard(entry));
  const mission = document.createElement("section");
  mission.className = "mission-card";
  mission.innerHTML = `<span>任务句子</span><strong class="sentence-line" id="sentenceLine">${sentence.blank}</strong>`;
  mission.append(createPromptControls(entry, sentence, false));
  layout.append(mission);
  panel.append(layout);
  const choices = shuffle([
    { label: entry.word, entry },
    ...shuffle(WORDS.filter((word) => word.id !== entry.id)).slice(0, 3).map((word) => ({ label: word.word, entry: word }))
  ]);
  addChoiceGrid(panel, choices, (choice, button) => checkListeningAnswer(entry, sentence, choice.entry, button));
  area.append(panel);
}

function checkListeningAnswer(target, sentence, selected, button) {
  if (game.locked) return;
  if (target.id !== selected.id) {
    button.classList.add("wrong");
    playEffect("wrong");
    setFeedback("再听一次。", "try-again");
    window.setTimeout(() => button.classList.remove("wrong"), 420);
    return;
  }
  game.locked = true;
  button.classList.add("correct");
  $("#sentenceLine").textContent = sentence.text;
  $("#sentenceLine").classList.add("revealed");
  markCorrect(target, `答对了！${target.meaning}`);
}

function renderSoundFillQuestion(question, sentence) {
  const entry = WORD_BY_ID.get(question.wordId);
  const area = $("#questionArea");
  area.replaceChildren();
  const panel = document.createElement("div");
  panel.className = "question-panel fill-question";
  const layout = document.createElement("div");
  layout.className = "question-layout";
  layout.append(createSceneCard(entry));
  const card = document.createElement("section");
  card.className = "fill-card";
  card.innerHTML = `<span>${sentence.blank}</span><div class="fill-word"><b>${question.prefix}</b><b class="fill-slot" id="fillSlot">${"_".repeat(question.answer.length)}</b><b>${question.suffix}</b></div>`;
  card.append(createPromptControls(entry, sentence));
  layout.append(card);
  panel.append(layout);
  addChoiceGrid(panel, shuffle(question.choices), (choice, button) => checkFillAnswer(question, choice, button), "fill-choices");
  area.append(panel);
}

function checkFillAnswer(question, choice, button) {
  if (game.locked) return;
  if (choice !== question.answer) {
    button.classList.add("wrong");
    playEffect("wrong");
    setFeedback("再听一次。", "try-again");
    window.setTimeout(() => button.classList.remove("wrong"), 420);
    return;
  }
  game.locked = true;
  button.classList.add("correct");
  $("#fillSlot").textContent = question.answer;
  $("#fillSlot").classList.add("revealed");
  markCorrect(question, "填对了！");
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
  const visual = document.createElement("div");
  visual.className = "drag-visual";
  const image = document.createElement("img");
  image.src = entry.image;
  image.alt = entry.visual;
  const example = document.createElement("strong");
  example.textContent = sentence.blank;
  visual.append(image, example);

  const workspace = document.createElement("div");
  workspace.className = "drag-workspace";
  workspace.innerHTML = `<span>拖动字母到格子里</span><h3>${entry.word.length} 个字母</h3>`;
  workspace.append(createPromptControls(entry, sentence));
  const slots = document.createElement("div");
  slots.className = "spelling-slots";
  slots.id = "spellingSlots";
  const bank = document.createElement("div");
  bank.className = "letter-bank";
  bank.id = "letterBank";
  workspace.append(slots, bank, createButton("primary-button check-button", "检查", checkSpelling));
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
    slot.textContent = item ? item.letter : "";
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
    tile.textContent = item.letter;
    tile.disabled = used || game.locked;
    tile.addEventListener("pointerdown", (event) => startLetterDrag(event, item, null));
    const targetBank = vowelBank && "aeiou".includes(item.letter) ? vowelBank : bank;
    targetBank.append(tile);
  });
  if (spellingBlockBank && spellingBlockGroup) {
    spellingBlockBank.replaceChildren();
    spellingBlockGroup.hidden = game.spellingBlocks.length === 0;
    game.spellingBlocks.forEach((block) => {
      const button = createButton("spelling-block", block.toUpperCase(), () => placeSpellingBlock(block));
      button.disabled = game.locked;
      spellingBlockBank.append(button);
    });
  }
}

function getSpellingBlocks(entry) {
  const blocks = ["th", "wh", "ee", "ea", "ck", "ey"];
  return blocks.filter((block) => entry.word.includes(block));
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
    setFeedback("把字母都拖进去。", "try-again");
    return;
  }
  const answer = game.placedLetters.map((item) => item.letter).join("");
  if (answer !== currentRound().word) {
    playEffect("wrong");
    setFeedback("顺序再试一次。", "try-again");
    return;
  }
  game.locked = true;
  markCorrect(currentRound(), "拼对了！");
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
  const visual = document.createElement("div");
  visual.className = "dictation-visual";
  visual.innerHTML = `<span>只听不看</span><strong>${sentence.blank}</strong>`;
  visual.append(createSceneCard(entry));
  const workspace = document.createElement("div");
  workspace.className = "dictation-workspace";
  workspace.innerHTML = `<span>字母键盘</span><h3>${entry.word.length} 个字母</h3>`;
  workspace.append(createPromptControls(entry, sentence));
  const slots = document.createElement("div");
  slots.className = "spelling-slots dictation-slots";
  slots.id = "spellingSlots";
  const keyboard = document.createElement("div");
  keyboard.className = "spelling-keyboard";
  keyboard.innerHTML = `
    <section class="keyboard-group"><span>元音</span><div class="letter-bank keyboard-bank vowel-bank" id="vowelBank"></div></section>
    <section class="keyboard-group"><span>辅音</span><div class="letter-bank keyboard-bank consonant-bank" id="letterBank"></div></section>
    <section class="spelling-block-group" id="spellingBlockGroup" hidden><span>常见组合</span><div class="spelling-block-bank" id="spellingBlockBank"></div></section>
  `;
  workspace.append(slots, keyboard, createButton("primary-button check-button", "检查", checkDictation));
  card.append(visual, workspace);
  panel.append(card);
  area.append(panel);
  updateSpellingBoard();
}

function checkDictation() {
  if (game.locked) return;
  if (game.placedLetters.some((item) => !item)) {
    setFeedback("把字母都拖进去。", "try-again");
    return;
  }
  if (game.placedLetters.map((item) => item.letter).join("") !== currentRound().word) {
    playEffect("wrong");
    setFeedback("再听一次。", "try-again");
    return;
  }
  game.locked = true;
  markCorrect(currentRound(), `答对了！${currentRound().meaning}`);
}

function renderHandwritingQuestion(entry, sentence) {
  handwritingBoard = null;
  correctionBoard = null;
  const area = $("#questionArea");
  area.replaceChildren();
  const card = document.createElement("section");
  card.className = "handwriting-card";

  const prompt = document.createElement("section");
  prompt.className = "handwriting-prompt";
  prompt.innerHTML = `
    <span>整组手写默写</span>
    <h3>听到单词后，写在答题纸上</h3>
    <p>${sentence.blank}</p>
  `;
  prompt.append(createPromptControls(entry, sentence));

  const paperArea = document.createElement("section");
  paperArea.className = "paper-area";
  paperArea.innerHTML = `
    <div class="paper-toolbar">
      <strong>我的答卷</strong>
      <button class="mini-button" id="clearWritingButton" type="button">清空</button>
    </div>
    <canvas class="handwriting-canvas" id="handwritingCanvas" aria-label="手写答题纸"></canvas>
    <button class="primary-button" id="submitWritingButton" type="button">检查本题</button>
  `;

  const check = document.createElement("section");
  check.className = "handwriting-check";
  check.id = "handwritingCheck";
  check.hidden = true;
  check.innerHTML = `
    <div class="answer-sheet">
      <span>自己检查</span>
      <img id="writingPreview" alt="孩子的手写答卷">
      <p>正确拼写</p>
      <strong id="writingAnswer"></strong>
      <button class="primary-button" id="nextWritingButton" type="button">下一题</button>
    </div>
  `;

  card.append(prompt, paperArea, check);
  area.append(card);
  const writingCanvas = $("#handwritingCanvas");
  window.requestAnimationFrame(() => {
    if (writingCanvas.isConnected) handwritingBoard = setupHandwritingBoard(writingCanvas, entry.word.length, false);
  });

  $("#clearWritingButton").addEventListener("click", () => clearHandwritingBoard(handwritingBoard));
  $("#submitWritingButton").addEventListener("click", () => checkHandwritingEntry(entry));
  $("#nextWritingButton").addEventListener("click", advanceHandwritingEntry);
}

function setupHandwritingBoard(canvas, letterCount, correctionMode) {
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
    letterCount,
    correctionMode,
    hasInk: false,
    drawing: false,
    lastX: 0,
    lastY: 0
  };
  drawWritingPaper(board);
  canvas.addEventListener("pointerdown", (event) => beginWriting(board, event));
  canvas.addEventListener("pointermove", (event) => continueWriting(board, event));
  canvas.addEventListener("pointerup", () => endWriting(board));
  canvas.addEventListener("pointercancel", () => endWriting(board));
  return board;
}

function drawWritingPaper(board) {
  const { context, width, height, correctionMode, letterCount } = board;
  context.clearRect(0, 0, width, height);
  context.fillStyle = "#fffdf5";
  context.fillRect(0, 0, width, height);
  context.lineWidth = 1;
  context.strokeStyle = "#9fc9ec";
  const top = height * 0.27;
  const middle = height * 0.53;
  const bottom = height * 0.79;
  if (correctionMode) {
    const boxWidth = width / letterCount;
    for (let index = 1; index < letterCount; index += 1) {
      context.beginPath();
      context.moveTo(index * boxWidth, top);
      context.lineTo(index * boxWidth, bottom);
      context.stroke();
    }
  }
  context.setLineDash([]);
  context.beginPath();
  context.moveTo(0, top);
  context.lineTo(width, top);
  context.moveTo(0, bottom);
  context.lineTo(width, bottom);
  context.stroke();
  context.setLineDash([8, 6]);
  context.beginPath();
  context.moveTo(0, middle);
  context.lineTo(width, middle);
  context.stroke();
  context.setLineDash([]);
}

function beginWriting(board, event) {
  if (!board || game.locked || (event.pointerType === "mouse" && event.button !== 0)) return;
  event.preventDefault();
  primeAudio();
  board.drawing = true;
  board.hasInk = true;
  const point = writingPoint(board, event);
  board.lastX = point.x;
  board.lastY = point.y;
  board.context.beginPath();
  board.context.arc(point.x, point.y, 1.5, 0, Math.PI * 2);
  board.context.fillStyle = "#193c70";
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
  context.strokeStyle = "#193c70";
  context.lineWidth = 5;
  context.lineCap = "round";
  context.lineJoin = "round";
  context.stroke();
  board.lastX = point.x;
  board.lastY = point.y;
}

function endWriting(board) {
  if (!board) return;
  board.drawing = false;
}

function writingPoint(board, event) {
  const bounds = board.canvas.getBoundingClientRect();
  return { x: event.clientX - bounds.left, y: event.clientY - bounds.top };
}

function clearHandwritingBoard(board) {
  if (!board || game.locked) return;
  drawWritingPaper(board);
  board.hasInk = false;
  playEffect("delete");
}

function checkHandwritingEntry(entry) {
  if (!handwritingBoard || !handwritingBoard.hasInk) {
    setFeedback("先在答题纸上写出单词。", "try-again");
    return;
  }
  const existingEntry = handwritingSession.entries.find((item) => item.id === entry.id);
  const answer = {
    id: entry.id,
    image: handwritingBoard.canvas.toDataURL("image/png"),
    status: existingEntry ? existingEntry.status : "pending"
  };
  if (existingEntry) Object.assign(existingEntry, answer);
  else handwritingSession.entries.push(answer);
  handwritingSession.currentIndex = game.roundIndex;
  player.handwritingSession = handwritingSession;
  saveMission(false);
  $("#writingPreview").src = handwritingBoard.canvas.toDataURL("image/png");
  $("#writingAnswer").textContent = entry.word;
  $("#handwritingCheck").hidden = false;
  setFeedback("看看正确拼写，准备下一题。", "");
}

function advanceHandwritingEntry() {
  $("#handwritingCheck").hidden = true;
  if (game.roundIndex + 1 < game.rounds.length) {
    game.roundIndex += 1;
    handwritingSession.currentIndex = game.roundIndex;
    player.handwritingSession = handwritingSession;
    saveMission(false);
    renderRound();
    return;
  }
  handwritingSession.reviewing = true;
  handwritingSession.currentIndex = game.rounds.length;
  player.handwritingSession = handwritingSession;
  saveMission(false);
  renderHandwritingReview();
}

function renderHandwritingReview() {
  handwritingReviewPage = Math.min(handwritingReviewPage, Math.max(0, Math.ceil(handwritingSession.entries.length / 2) - 1));
  const area = $("#questionArea");
  area.replaceChildren();
  const approvedCount = handwritingSession.entries.filter((entry) => entry.status === "approved").length;
  const stage = STAGES[game.stageIndex];
  const reward = handwritingSession.entries.length * stage.reward + stage.bonus;
  const review = document.createElement("section");
  review.className = "batch-review-card";
  review.innerHTML = `
    <div class="batch-review-heading">
      <div><span>爸爸妈妈批改</span><h3>${approvedCount} / ${handwritingSession.entries.length} 已确认</h3></div>
      <strong>完成可得 +${reward} ⚡</strong>
    </div>
    <div class="answer-sheet-grid" id="answerSheetGrid"></div>
    <div class="review-pagination">
      <button class="mini-button" id="reviewPreviousButton" type="button">‹</button>
      <span id="reviewPageLabel"></span>
      <button class="mini-button" id="reviewNextButton" type="button">›</button>
    </div>
    <button class="primary-button" id="finishHandwritingButton" type="button">完成批改</button>
  `;
  area.append(review);
  renderHandwritingReviewPage();
  $("#reviewPreviousButton").addEventListener("click", () => {
    handwritingReviewPage -= 1;
    renderHandwritingReviewPage();
  });
  $("#reviewNextButton").addEventListener("click", () => {
    handwritingReviewPage += 1;
    renderHandwritingReviewPage();
  });
  $("#finishHandwritingButton").addEventListener("click", finishHandwritingReview);
}

function renderHandwritingReviewPage() {
  const entries = handwritingSession.entries;
  const pageCount = Math.max(1, Math.ceil(entries.length / 2));
  handwritingReviewPage = Math.min(Math.max(handwritingReviewPage, 0), pageCount - 1);
  handwritingSession.reviewPage = handwritingReviewPage;
  const grid = $("#answerSheetGrid");
  if (!grid) return;
  grid.replaceChildren();
  entries.slice(handwritingReviewPage * 2, handwritingReviewPage * 2 + 2).forEach((answer) => {
    const entry = WORD_BY_ID.get(answer.id);
    const sheet = document.createElement("article");
    sheet.className = `review-sheet${answer.status === "approved" ? " approved" : ""}`;
    sheet.innerHTML = `
      <img src="${answer.image}" alt="${entry.word} 的手写答卷">
      <div><span>正确拼写</span><strong>${entry.word}</strong></div>
      <div class="review-actions">
        <button class="primary-button" type="button">✓ 答对</button>
        <button class="secondary-button" type="button">修改</button>
      </div>
    `;
    const [approveButton, reviseButton] = sheet.querySelectorAll("button");
    approveButton.disabled = answer.status === "approved";
    approveButton.addEventListener("click", () => approveHandwritingEntry(answer.id));
    reviseButton.addEventListener("click", () => openHandwritingCorrection(answer.id));
    grid.append(sheet);
  });
  $("#reviewPageLabel").textContent = `${handwritingReviewPage + 1} / ${pageCount}`;
  $("#reviewPreviousButton").disabled = handwritingReviewPage === 0;
  $("#reviewNextButton").disabled = handwritingReviewPage === pageCount - 1;
  const approvedCount = entries.filter((entry) => entry.status === "approved").length;
  $("#finishHandwritingButton").disabled = approvedCount !== entries.length;
}

function approveHandwritingEntry(entryId) {
  const answer = handwritingSession.entries.find((entry) => entry.id === entryId);
  if (!answer) return;
  answer.status = "approved";
  player.handwritingSession = handwritingSession;
  saveMission(false);
  playEffect("correct");
  renderHandwritingReview();
}

function openHandwritingCorrection(entryId) {
  const answer = handwritingSession.entries.find((entry) => entry.id === entryId);
  const entry = answer && WORD_BY_ID.get(answer.id);
  if (!answer || !entry) return;
  const area = $("#questionArea");
  area.replaceChildren();
  const correction = document.createElement("section");
  correction.className = "correction-workspace";
  correction.innerHTML = `
    <div class="correction-heading"><span>一起修改</span><h3>${entry.word}</h3><p>照着答案，在两线三格里写一遍。</p></div>
    <canvas class="handwriting-canvas correction-canvas" id="correctionCanvas" aria-label="手写修改方格"></canvas>
    <div class="review-actions">
      <button class="mini-button" id="clearCorrectionButton" type="button">清空</button>
      <button class="primary-button" id="saveCorrectionButton" type="button">保存修改</button>
    </div>
  `;
  area.append(correction);
  const correctionCanvas = $("#correctionCanvas");
  window.requestAnimationFrame(() => {
    if (correctionCanvas.isConnected) correctionBoard = setupHandwritingBoard(correctionCanvas, entry.word.length, true);
  });
  $("#clearCorrectionButton").addEventListener("click", () => clearHandwritingBoard(correctionBoard));
  $("#saveCorrectionButton").addEventListener("click", () => {
    if (!correctionBoard || !correctionBoard.hasInk) {
      setFeedback("先在方格里写一遍。", "try-again");
      return;
    }
    answer.image = correctionBoard.canvas.toDataURL("image/png");
    answer.status = "pending";
    player.handwritingSession = handwritingSession;
    saveMission(false);
    renderHandwritingReview();
    setFeedback("修改已保存，请爸爸妈妈确认。", "");
  });
}

function finishHandwritingReview() {
  if (!handwritingSession.entries.length || handwritingSession.entries.some((entry) => entry.status !== "approved")) {
    setFeedback("请先完成所有答卷的确认。", "try-again");
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
  player.mission = null;
  playEffect("correct");
  createConfetti();
  savePlayerProfile(false);
  renderTrainingProjects();
  $("#finalScore").textContent = `手写奖励 +${reward} ⚡ · 总能量 ${player.stars}`;
  showOnlyScreen("finishScreen");
}

function currentRound() {
  return game.rounds[game.roundIndex];
}

function renderRound() {
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
  game.sentence = randomSentence(entry);
  if (stage.mode === "listening") renderListeningQuestion(entry, game.sentence);
  if (stage.mode === "soundFill") renderSoundFillQuestion(round, game.sentence);
  if (stage.mode === "spell") renderSpellQuestion(entry, game.sentence);
  if (stage.mode === "dictation") renderDictationQuestion(entry, game.sentence);
  if (stage.mode === "handwriting") renderHandwritingQuestion(entry, game.sentence);
  setFeedback(stage.mode === "spell" || stage.mode === "dictation" ? "拖动字母到格子。" : "准备听题。");
  saveMission(false);
  autoplayPrompt(entry, game.sentence, stage.mode === "listening" ? "sentence" : "word-then-sentence");
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
  window.setTimeout(nextRound, 1100);
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
  player.mission = null;
  player.stars += stage.bonus;
  savePlayerProfile(false);
  renderTrainingProjects();
  createConfetti();
  if (game.stageIndex < STAGES.length - 1) {
    $("#completionTitle").textContent = `${stage.title}完成！`;
    $("#completionCopy").textContent = `获得 ${stage.bonus} ⚡`;
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

function startStage(stageIndex, savedRoundIds = null, savedRoundIndex = 0) {
  if (!hasActiveProfile()) {
    openProfileChooser();
    return;
  }
  clearActiveDrag();
  game.stageIndex = stageIndex;
  game.rounds = savedRoundIds ? restoreRounds(stageIndex, savedRoundIds) : shuffle(getStageSource(stageIndex));
  game.roundIndex = Math.min(Math.max(0, savedRoundIndex), game.rounds.length - 1);
  const stage = STAGES[stageIndex];
  if (stage.mode === "handwriting") {
    const storedSession = player.handwritingSession;
    const matchingSession = storedSession
      && savedRoundIds
      && storedSession.roundIds.join("|") === game.rounds.map((round) => round.id).join("|");
    handwritingSession = matchingSession
      ? storedSession
      : {
        roundIds: game.rounds.map((round) => round.id),
        entries: [],
        currentIndex: game.roundIndex,
        reviewPage: 0,
        reviewing: false
      };
    player.handwritingSession = handwritingSession;
    handwritingReviewPage = handwritingSession.reviewPage || 0;
    game.roundIndex = handwritingSession.currentIndex;
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
  startStage(0);
}

function resumeMission() {
  if (!player.mission) {
    showToast("没有可继续的任务。");
    return;
  }
  startStage(player.mission.stageIndex, player.mission.roundIds, player.mission.roundIndex);
}

function saveMission(showMessage = false) {
  if (!hasActiveProfile()) {
    if (showMessage) openProfileChooser();
    return;
  }
  if (!game.active) {
    if (showMessage) showToast("自动存档已开启。");
    return;
  }
  if (STAGES[game.stageIndex].mode === "handwriting" && handwritingSession) {
    handwritingSession.currentIndex = game.roundIndex;
    player.handwritingSession = handwritingSession;
  }
  player.mission = {
    stageIndex: game.stageIndex,
    roundIndex: game.roundIndex,
    roundIds: game.rounds.map((round) => round.id),
    savedAt: new Date().toISOString()
  };
  savePlayerProfile(showMessage);
}

function showOnlyScreen(screenId) {
  ["landingScreen", "gameScreen", "gardenScreen", "workshopHomeScreen", "workshopScreen", "finishScreen"].forEach((id) => {
    $(`#${id}`).hidden = id !== screenId;
  });
  updateBackgroundMusic(screenId);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function returnHome() {
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
  if (!openProject("workshopHomeScreen")) return;
  renderWorkshopHome();
}

function showFinish() {
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
    <span class="stage-project-art"><img src="${stage.art}" alt=""></span>
    <span class="stage-project-number">关卡 0${stageIndex + 1}</span>
    <strong>${stage.title}</strong>
    <small>${stage.mapDescription}</small>
    <small class="stage-project-count">${progress.completed} / ${progress.total}</small>
  `;
  return card;
}

function createFacilityCard(kind, title, icon, count, image, onClick) {
  const card = createButton(`facility-card ${kind}`, "", onClick);
  card.innerHTML = `<img src="${image}" alt=""><span class="facility-icon">${icon}</span><span class="facility-type">${kind === "training" ? "单词训练营" : "收藏商店"}</span><strong>${title}</strong><small class="facility-count">${count}</small>`;
  return card;
}

function renderTrainingProjects() {
  const stageGrid = $("#stageProjectGrid");
  const facilityGrid = $("#facilityProjectGrid");
  stageGrid.replaceChildren();
  facilityGrid.replaceChildren();
  STAGES.forEach((stage, index) => stageGrid.append(createLearningProjectCard(stage, index)));
  facilityGrid.append(
    createFacilityCard("training", "单词训练营", "🛰️", `${WORDS.length} 个单词`, "images/one.svg", openGardenProject),
    createFacilityCard("shop", "收藏商店", "🧰", `${activatedCollectionSets()} / ${COLLECTION_SETS.length} 套`, "images/two.svg", openWorkshopProject)
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
    card.innerHTML = `<img src="${entry.image}" alt=""><span><strong>${entry.word}</strong><small>${entry.meaning}</small></span>`;
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
  heading.innerHTML = `<img src="${entry.image}" alt="${entry.visual}"><div><h3>${entry.word}</h3><p>${entry.meaning}</p></div>`;
  const wordButton = createVoiceButton(entry, null, "▶ 听单词");
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

function renderRocket(container) {
  if (!container) return;
  container.replaceChildren();
  const body = document.createElement("span");
  body.className = "rocket-skeleton";
  container.append(body);
  ROCKET_PARTS.forEach((part) => {
    const element = document.createElement("span");
    element.className = `rocket-part part-${part.id}${player.ownedRocketParts.includes(part.id) ? " owned" : ""}`;
    if (part.id === "star-decals") element.textContent = "✦✦";
    container.append(element);
  });
}

function renderHomeCollection() {
  const collection = activeCollection();
  const rocket = $("#heroRocket");
  const preview = $("#homeCollectionPreview");
  rocket.hidden = collection.id !== "rocket";
  preview.hidden = collection.id === "rocket";
  if (collection.id === "rocket") {
    renderRocket(rocket);
    return;
  }
  const progress = collectionProgress(collection);
  preview.replaceChildren();
  const image = document.createElement("img");
  image.src = collection.image;
  image.alt = collection.name;
  const icon = document.createElement("span");
  icon.textContent = collection.icon;
  const completion = document.createElement("strong");
  completion.textContent = `${progress.completed} / ${progress.total}`;
  preview.append(image, icon, completion);
}

function selectedCollection() {
  return COLLECTION_SETS.find((collection) => collection.id === selectedCollectionId) || COLLECTION_SETS[0];
}

function renderWorkshopHome() {
  const gallery = $("#workshopCollectionGrid");
  if (!gallery) return;
  gallery.replaceChildren();
  $("#activatedCollectionCount").textContent = `${activatedCollectionSets()} / ${COLLECTION_SETS.length} 已激活`;
  COLLECTION_SETS.forEach((collection) => {
    const progress = collectionProgress(collection);
    const card = createButton(`workshop-home-card${progress.completed === progress.total ? " completed" : ""}`, "", () => openCollection(collection.id));
    card.innerHTML = `
      <img src="${collection.image}" alt="">
      <span>${collection.icon}</span>
      <strong>${collection.name}</strong>
      <small>${progress.completed} / ${progress.total}</small>
    `;
    gallery.append(card);
  });
}

function openCollection(collectionId) {
  selectedCollectionId = collectionId;
  player.activeCollectionId = collectionId;
  shopPage = 0;
  savePlayerProfile(false);
  showOnlyScreen("workshopScreen");
  playEffect("enter");
  renderWorkshop();
}

function currentWorkshopItems() {
  return COLLECTION_PARTS.filter((item) => item.collectionId === selectedCollectionId);
}

function ownedWorkshopItems() {
  return selectedCollection().id === "rocket" ? player.ownedRocketParts : player.ownedCollectionParts;
}

function renderWorkshop() {
  const collection = selectedCollection();
  const progress = collectionProgress(collection);
  $("#workshopShowcaseTitle").textContent = collection.name;
  $("#workshopShowcaseCount").textContent = `${progress.completed} / ${progress.total}`;
  $("#workshopCollectionName").textContent = collection.name;
  $("#workshopRocket").hidden = collection.id !== "rocket";
  $("#collectionHero").hidden = collection.id === "rocket";
  if (collection.id === "rocket") {
    renderRocket($("#workshopRocket"));
  } else {
    renderCollectionHero(collection, progress);
  }
  const items = currentWorkshopItems();
  const pageCount = Math.ceil(items.length / SHOP_PAGE_SIZE);
  shopPage = Math.min(Math.max(0, shopPage), pageCount - 1);
  $("#shopPageLabel").textContent = `${shopPage + 1} / ${pageCount}`;
  $("#shopPreviousButton").disabled = shopPage === 0;
  $("#shopNextButton").disabled = shopPage === pageCount - 1;
  $("#shopBalance").textContent = `⚡ ${player.stars}`;
  $("#shopNotice").textContent = `${collection.name} · ${progress.completed} / ${progress.total}`;
  const shopGrid = $("#shopGrid");
  shopGrid.replaceChildren();
  items.slice(shopPage * SHOP_PAGE_SIZE, (shopPage + 1) * SHOP_PAGE_SIZE).forEach((item) => {
    const owned = ownedWorkshopItems().includes(item.id);
    const card = createButton(`shop-item${owned ? " owned" : ""}`, "", () => buyWorkshopItem(item));
    card.disabled = owned;
    card.innerHTML = `<span class="shop-icon">${item.icon}</span><span><small>${collection.name}</small><strong>${item.name}</strong><em>${owned ? "已收藏" : `⚡ ${item.price}`}</em></span>`;
    shopGrid.append(card);
  });
}

function renderCollectionHero(collection, progress) {
  const hero = $("#collectionHero");
  hero.replaceChildren();
  const image = document.createElement("img");
  image.src = collection.image;
  image.alt = collection.name;
  const icon = document.createElement("span");
  icon.className = "collection-hero-icon";
  icon.textContent = collection.icon;
  const assembly = document.createElement("div");
  assembly.className = "collection-assembly-grid";
  currentWorkshopItems().forEach((part, index) => {
    const owned = player.ownedCollectionParts.includes(part.id);
    const cell = document.createElement("span");
    cell.className = `collection-assembly-part${owned ? " owned" : ""}`;
    cell.title = `${index + 1}. ${part.name}`;
    cell.innerHTML = `<i>${part.icon}</i><small>${index + 1}</small>`;
    assembly.append(cell);
  });
  const label = document.createElement("strong");
  label.textContent = `${progress.completed} / ${progress.total} 部件`;
  hero.classList.toggle("is-building", progress.completed > 0);
  hero.append(image, icon, assembly, label);
}

function buyWorkshopItem(item) {
  const owned = ownedWorkshopItems();
  if (owned.includes(item.id)) return;
  if (player.stars < item.price) {
    playEffect("wrong");
    $("#shopNotice").textContent = `还差 ${item.price - player.stars} ⚡`;
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

function showIpadInstallHint() {
  const isIpad = /iPad/i.test(navigator.userAgent)
    || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  const standalone = window.matchMedia("(display-mode: standalone)").matches || Boolean(navigator.standalone);
  if (isIpad && !standalone) $("#iosInstallTip").hidden = false;
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
  $("#resumeButton").addEventListener("click", resumeMission);
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
  $("#shopPreviousButton").addEventListener("click", () => {
    shopPage -= 1;
    renderWorkshop();
  });
  $("#shopNextButton").addEventListener("click", () => {
    shopPage += 1;
    renderWorkshop();
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
    if (button && !button.classList.contains("letter-tile") && !button.classList.contains("spelling-slot")) {
      playEffect("tap");
    }
  }, { capture: true });
  document.addEventListener("touchstart", primeAudio, { once: true, capture: true, passive: true });
  document.addEventListener("keydown", primeAudio, { once: true, capture: true });
  window.addEventListener("pagehide", () => saveMission(false));
}

function initializeGame() {
  preloadAudio();
  wireInterface();
  renderTrainingProjects();
  renderGarden();
  renderWorkshopHome();
  renderWorkshop();
  renderProfileChooser();
  showIpadInstallHint();
  registerServiceWorker();
  openProfileChooser();
  if (storageWarning) window.setTimeout(() => showToast(storageWarning), 250);
}

initializeGame();
