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

const FILL_QUESTIONS = [
  { id: "one-fill", wordId: "one", prefix: "o", suffix: "e", answer: "n", choices: ["n", "m", "t"] },
  { id: "two-fill", wordId: "two", prefix: "", suffix: "wo", answer: "t", choices: ["t", "d", "p"] },
  { id: "three-fill", wordId: "three", prefix: "th", suffix: "ee", answer: "r", choices: ["r", "l", "n"] },
  { id: "four-fill", wordId: "four", prefix: "fo", suffix: "r", answer: "u", choices: ["u", "a", "e"] },
  { id: "eat-fill", wordId: "eat", prefix: "e", suffix: "t", answer: "a", choices: ["a", "e", "i"] },
  { id: "that-fill", wordId: "that", prefix: "t", suffix: "at", answer: "h", choices: ["h", "w", "r"] },
  { id: "they-fill", wordId: "they", prefix: "th", suffix: "y", answer: "e", choices: ["e", "a", "i"] },
  { id: "like-fill", wordId: "like", prefix: "li", suffix: "e", answer: "k", choices: ["k", "c", "t"] },
  { id: "black-fill", wordId: "black", prefix: "bl", suffix: "ck", answer: "a", choices: ["a", "e", "i"] },
  { id: "white-fill", wordId: "white", prefix: "whit", suffix: "", answer: "e", choices: ["e", "a", "i"] }
];

const STAGES = [
  { id: "listening", icon: "📡", art: "images/three.svg", title: "雷达听音站", description: "听句子，选单词。", mapDescription: "听句子选单词", mode: "listening", reward: 2, bonus: 8 },
  { id: "soundFill", icon: "🔊", art: "images/eat.svg", title: "声波填空站", description: "听单词，补字母。", mapDescription: "听读音填空", mode: "soundFill", reward: 2, bonus: 8 },
  { id: "spell", icon: "🧩", art: "images/two.svg", title: "字母拼装舱", description: "拖动字母，拼单词。", mapDescription: "拖拽字母拼词", mode: "spell", reward: 3, bonus: 10 },
  { id: "dictation", icon: "⌨️", art: "images/black.svg", title: "星际默写台", description: "听单词，写答案。", mapDescription: "听音默写", mode: "dictation", reward: 4, bonus: 12 }
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
  { id: "moon-base", icon: "🌕", name: "月球基地", parts: ["月岩地基", "观察圆顶", "氧气门", "太阳能板", "月球旗", "通讯塔", "补给箱", "观测镜", "停机坪", "基地徽章"] },
  { id: "alien-craft", icon: "🛸", name: "外星飞船", parts: ["飞碟底盘", "光束舱", "星际窗", "磁力翼", "能源球", "导航环", "雷达盘", "传送门", "彩虹尾焰", "飞船徽记"] },
  { id: "space-suit", icon: "🧑‍🚀", name: "银河战衣", parts: ["头盔外壳", "护目镜", "氧气背包", "星纹上衣", "防护手套", "月球靴", "通讯耳机", "能量腰带", "护盾贴片", "战衣徽章"] },
  { id: "robot-buddy", icon: "🤖", name: "机器人伙伴", parts: ["机器人头", "闪亮眼睛", "信号耳朵", "金属身体", "机械手臂", "弹簧腿", "能量核心", "工具箱", "表情面板", "伙伴贴纸"] },
  { id: "mars-rover", icon: "🛞", name: "火星星车", parts: ["红土底盘", "探测轮", "车顶雷达", "前灯", "样本盒", "太阳能翼", "机械臂", "导航屏", "避震器", "火星旗"] },
  { id: "space-garden", icon: "🪴", name: "星球花园", parts: ["陨石花盆", "月光种子", "星星花", "蓝光叶", "浇水球", "玻璃温室", "小树苗", "彩虹蘑菇", "蜜蜂机器人", "花园门牌"] },
  { id: "satellite-station", icon: "🛰️", name: "卫星基地", parts: ["轨道底座", "太阳能翼", "大天线", "信号灯", "观察舱", "星图屏", "推进器", "数据盒", "银河环", "卫星旗"] },
  { id: "nebula-ship", icon: "🚀", name: "星云飞船", parts: ["彗星鼻锥", "紫光座舱", "云朵机翼", "星云引擎", "超光速翼", "光环护盾", "水晶尾焰", "星尘涂装", "导航核心", "船长座椅"] },
  { id: "alien-pet", icon: "👾", name: "外星宠物", parts: ["圆圆脑袋", "闪闪眼睛", "小触角", "彩色身体", "弹跳脚", "爱心尾巴", "能量背包", "零食罐", "名字牌", "宠物王冠"] },
  { id: "cosmic-trophy", icon: "🏆", name: "银河奖杯", parts: ["奖杯底座", "金色双耳", "星星杯身", "冠军丝带", "月球宝石", "银河刻字", "彩带云", "火箭顶饰", "闪光灯", "最终徽章"] }
];

const COLLECTION_PART_ICONS = ["🧱", "🔭", "🚪", "☀️", "🚩", "📡", "📦", "🔍", "🛬", "✨"];
const COLLECTION_PARTS = COLLECTION_SETS.flatMap((collection, collectionIndex) => {
  return collection.parts.map((name, partIndex) => ({
    id: `${collection.id}-${partIndex + 1}`,
    collectionId: collection.id,
    icon: COLLECTION_PART_ICONS[partIndex],
    name,
    price: 8 + ((collectionIndex * 3 + partIndex * 2) % 16)
  }));
});

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
  workshopScreen: "audio/bgm/workshop.wav"
};

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
let workshopMode = "rocket";
let selectedCollectionId = COLLECTION_SETS[0].id;
let shopPage = 0;
let toastTimer = 0;
let audioPrimed = false;

const audioMaps = {
  word: new Map(),
  sentence: new Map(),
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
    progress: { listening: [], soundFill: [], spell: [], dictation: [] },
    mission: null,
    updatedAt: null
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
  profile.updatedAt = typeof candidate.updatedAt === "string" ? candidate.updatedAt : null;

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

function completedCollectionSets() {
  return COLLECTION_SETS.filter((collection) => collectionProgress(collection).completed === collection.parts.length).length;
}

function rocketComplete() {
  return player.ownedRocketParts.length === ROCKET_PARTS.length;
}

function collectionProgress(collection) {
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

function updateHome() {
  const ready = hasActiveProfile();
  updateProfileDisplay();
  updateStarDisplays();
  $("#homeTrainingCount").textContent = `${ready ? totalTrainingProgress() : 0} / 40`;
  $("#heroRocketCount").textContent = `${ready ? player.ownedRocketParts.length : 0} / ${ROCKET_PARTS.length}`;
  $("#heroCollectionCount").textContent = `${ready ? completedCollectionSets() : 0} / ${COLLECTION_SETS.length}`;
  $("#resumeButton").hidden = !ready || !player.mission;
  $("#saveNote").textContent = ready && player.mission
    ? `上次：${STAGES[player.mission.stageIndex].title} · ${player.mission.roundIndex + 1} / ${player.mission.roundIds.length}`
    : "自动存档已开启";
  renderRocket($("#heroRocket"));
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("visible");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("visible"), 2200);
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
  renderWorkshop();
  updateHome();
  showToast(`已删除 ${profile.name} 的档案。`);
}

function createAudio(source) {
  const audio = new Audio(source);
  audio.preload = "auto";
  audio.playsInline = true;
  audio.addEventListener("ended", () => {
    if (audio === activeVoice) {
      activeVoice = null;
      if (activeVoiceButton) activeVoiceButton.classList.remove("is-playing");
      activeVoiceButton = null;
    }
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
  Object.entries(SFX_TRACKS).forEach(([name, source]) => {
    const sound = createAudio(source);
    sound.volume = name === "correct" || name === "purchase" ? 0.52 : 0.38;
    audioMaps.sfx.set(name, sound);
  });
  Object.entries(BACKGROUND_TRACKS).forEach(([screenId, source]) => {
    const music = createAudio(source);
    music.loop = true;
    music.volume = 0.22;
    audioMaps.bgm.set(screenId, music);
  });
}

function primeAudio() {
  audioPrimed = true;
}

function stopActiveVoice() {
  if (activeVoice) {
    activeVoice.pause();
    activeVoice.currentTime = 0;
  }
  if (activeVoiceButton) activeVoiceButton.classList.remove("is-playing");
  activeVoice = null;
  activeVoiceButton = null;
}

function playVoice(audio, button) {
  primeAudio();
  stopActiveVoice();
  if (!audio) return;
  activeVoice = audio;
  activeVoiceButton = button || null;
  if (activeVoiceButton) activeVoiceButton.classList.add("is-playing");
  audio.currentTime = 0;
  audio.playbackRate = 0.82;
  audio.play().catch((error) => {
    console.warn("Unable to play voice:", error);
    if (audio === activeVoice) {
      activeVoice = null;
      if (activeVoiceButton) activeVoiceButton.classList.remove("is-playing");
      activeVoiceButton = null;
    }
  });
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
  if (activeBackgroundMusic === nextMusic) return;
  if (activeBackgroundMusic) {
    activeBackgroundMusic.pause();
    activeBackgroundMusic.currentTime = 0;
  }
  activeBackgroundMusic = nextMusic;
  if (!nextMusic || !audioPrimed) return;
  nextMusic.currentTime = 0;
  nextMusic.play().catch((error) => console.warn("Unable to play background music:", error));
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
  mission.append(createVoiceButton(entry, sentence, "▶ 听句子"));
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
  card.append(createVoiceButton(entry, null, "▶ 听单词"));
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
  workspace.append(createVoiceButton(entry, null, "▶ 听单词"));
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
  game.letterBank.forEach((item) => {
    const used = game.placedLetters.some((placed) => placed && placed.id === item.id);
    const tile = document.createElement("button");
    tile.type = "button";
    tile.className = `letter-tile${used ? " used" : ""}`;
    tile.textContent = item.letter;
    tile.disabled = used || game.locked;
    tile.addEventListener("pointerdown", (event) => startLetterDrag(event, item, null));
    bank.append(tile);
  });
}

function startLetterDrag(event, item, fromSlotIndex) {
  if (game.locked || (event.pointerType === "mouse" && event.button !== 0)) return;
  event.preventDefault();
  primeAudio();
  const ghost = document.createElement("span");
  ghost.className = "drag-ghost";
  ghost.textContent = item.letter;
  document.body.append(ghost);
  activeDrag = { item, fromSlotIndex, pointerId: event.pointerId, ghost };
  moveDragGhost(event);
  document.addEventListener("pointermove", moveDragGhost);
  document.addEventListener("pointerup", finishLetterDrag, { once: true });
  document.addEventListener("pointercancel", cancelLetterDrag, { once: true });
}

function moveDragGhost(event) {
  if (!activeDrag || event.pointerId !== activeDrag.pointerId) return;
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
  game.lastTypedValue = "";
  const area = $("#questionArea");
  area.replaceChildren();
  const panel = document.createElement("div");
  panel.className = "question-panel dictation-question";
  const layout = document.createElement("div");
  layout.className = "question-layout";
  layout.append(createSceneCard(entry));
  const card = document.createElement("section");
  card.className = "dictation-card";
  card.innerHTML = `<span>${sentence.blank}</span><h3>写出单词</h3>`;
  card.append(createVoiceButton(entry, null, "▶ 听单词"));
  const input = document.createElement("input");
  input.className = "input-answer";
  input.id = "dictationInput";
  input.type = "text";
  input.autocomplete = "off";
  input.autocapitalize = "none";
  input.spellcheck = false;
  input.placeholder = "type here";
  input.addEventListener("input", () => {
    const value = input.value;
    if (value.length > game.lastTypedValue.length) playEffect("type");
    if (value.length < game.lastTypedValue.length) playEffect("delete");
    game.lastTypedValue = value;
  });
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") checkDictation();
  });
  const actions = document.createElement("div");
  actions.className = "dictation-actions";
  actions.append(
    createButton("mini-button", "⌫", () => {
      input.value = input.value.slice(0, -1);
      game.lastTypedValue = input.value;
      playEffect("delete");
      input.focus();
    }),
    createButton("primary-button check-button", "检查", checkDictation)
  );
  card.append(input, actions);
  layout.append(card);
  panel.append(layout);
  area.append(panel);
  window.setTimeout(() => input.focus(), 0);
}

function checkDictation() {
  if (game.locked) return;
  const input = $("#dictationInput");
  if (input.value.trim().toLowerCase() !== currentRound().word) {
    playEffect("wrong");
    input.classList.remove("wrong");
    void input.offsetWidth;
    input.classList.add("wrong");
    setFeedback("再听一次。", "try-again");
    return;
  }
  game.locked = true;
  input.classList.add("correct");
  markCorrect(currentRound(), `答对了！${currentRound().meaning}`);
}

function currentRound() {
  return game.rounds[game.roundIndex];
}

function renderRound() {
  if (!game.active) return;
  game.locked = false;
  updateStageHeader();
  const stage = STAGES[game.stageIndex];
  const round = currentRound();
  const entry = stage.mode === "soundFill" ? WORD_BY_ID.get(round.wordId) : round;
  game.sentence = randomSentence(entry);
  if (stage.mode === "listening") renderListeningQuestion(entry, game.sentence);
  if (stage.mode === "soundFill") renderSoundFillQuestion(round, game.sentence);
  if (stage.mode === "spell") renderSpellQuestion(entry, game.sentence);
  if (stage.mode === "dictation") renderDictationQuestion(entry, game.sentence);
  setFeedback(stage.mode === "spell" ? "拖动字母到格子。" : "点击播放按钮开始。");
  saveMission(false);
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
  player.mission = {
    stageIndex: game.stageIndex,
    roundIndex: game.roundIndex,
    roundIds: game.rounds.map((round) => round.id),
    savedAt: new Date().toISOString()
  };
  savePlayerProfile(showMessage);
}

function showOnlyScreen(screenId) {
  ["landingScreen", "gameScreen", "gardenScreen", "workshopScreen", "finishScreen"].forEach((id) => {
    $(`#${id}`).hidden = id !== screenId;
  });
  updateBackgroundMusic(screenId);
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function returnHome() {
  if (game.active) saveMission(false);
  stopActiveVoice();
  clearActiveDrag();
  $("#stageCompleteOverlay").hidden = true;
  showOnlyScreen("landingScreen");
  renderTrainingProjects();
  renderWorkshop();
}

function openProject(screenId) {
  if (!hasActiveProfile()) {
    openProfileChooser();
    return false;
  }
  if (game.active) saveMission(false);
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
  workshopMode = "rocket";
  shopPage = 0;
  renderWorkshop();
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

function createFacilityCard(kind, title, icon, count, onClick) {
  const card = createButton(`facility-card ${kind}`, "", onClick);
  card.innerHTML = `<span class="facility-icon">${icon}</span><span class="facility-type">${kind === "training" ? "单词训练营" : "火箭工坊"}</span><strong>${title}</strong><small class="facility-count">${count}</small>`;
  return card;
}

function renderTrainingProjects() {
  const stageGrid = $("#stageProjectGrid");
  const facilityGrid = $("#facilityProjectGrid");
  stageGrid.replaceChildren();
  facilityGrid.replaceChildren();
  STAGES.forEach((stage, index) => stageGrid.append(createLearningProjectCard(stage, index)));
  facilityGrid.append(
    createFacilityCard("training", "星图复习", "🛰️", `${WORDS.length} 个单词`, openGardenProject),
    createFacilityCard("shop", "火箭工坊", "🧰", `${player.ownedRocketParts.length} / ${ROCKET_PARTS.length} 火箭`, openWorkshopProject)
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

function selectedCollection() {
  return COLLECTION_SETS.find((collection) => collection.id === selectedCollectionId) || COLLECTION_SETS[0];
}

function renderCollectionGallery() {
  const gallery = $("#collectionGallery");
  gallery.replaceChildren();
  COLLECTION_SETS.forEach((collection) => {
    const progress = collectionProgress(collection);
    const card = createButton(`collection-card${collection.id === selectedCollectionId ? " selected" : ""}${progress.completed === progress.total ? " completed" : ""}`, "", () => {
      selectedCollectionId = collection.id;
      shopPage = 0;
      renderWorkshop();
    });
    card.innerHTML = `<span>${collection.icon}</span><strong>${collection.name}</strong><small>${progress.completed} / ${progress.total}</small>`;
    gallery.append(card);
  });
}

function currentWorkshopItems() {
  if (workshopMode === "rocket") return ROCKET_PARTS;
  return COLLECTION_PARTS.filter((item) => item.collectionId === selectedCollectionId);
}

function ownedWorkshopItems() {
  return workshopMode === "rocket" ? player.ownedRocketParts : player.ownedCollectionParts;
}

function renderWorkshop() {
  const rocketMode = workshopMode === "rocket";
  const collection = selectedCollection();
  const canCollect = rocketComplete();
  $("#rocketTabButton").classList.toggle("active", rocketMode);
  $("#collectionTabButton").classList.toggle("active", !rocketMode);
  $("#collectionTabButton").classList.toggle("locked", !canCollect);
  $("#rocketTabCount").textContent = `${player.ownedRocketParts.length} / ${ROCKET_PARTS.length}`;
  $("#collectionTabCount").textContent = `${completedCollectionSets()} / ${COLLECTION_SETS.length}`;
  $("#workshopShowcaseTitle").textContent = rocketMode ? "专属火箭" : collection.name;
  $("#workshopShowcaseCount").textContent = rocketMode
    ? `${player.ownedRocketParts.length} / ${ROCKET_PARTS.length}`
    : `${collectionProgress(collection).completed} / ${collection.parts.length}`;
  $("#workshopRocket").hidden = !rocketMode;
  $("#collectionGallery").hidden = rocketMode;
  if (rocketMode) renderRocket($("#workshopRocket"));
  else renderCollectionGallery();

  const items = currentWorkshopItems();
  const pageCount = Math.ceil(items.length / SHOP_PAGE_SIZE);
  shopPage = Math.min(Math.max(0, shopPage), pageCount - 1);
  $("#shopPageLabel").textContent = `${shopPage + 1} / ${pageCount}`;
  $("#shopPreviousButton").disabled = shopPage === 0;
  $("#shopNextButton").disabled = shopPage === pageCount - 1;
  $("#shopBalance").textContent = `⚡ ${player.stars}`;
  $("#shopNotice").textContent = rocketMode
    ? canCollect ? "火箭完成！开始收集 10 套星际收藏。" : "集齐 20 个火箭组件，解锁 10 套星际收藏。"
    : `${collection.name} · ${collectionProgress(collection).completed} / ${collection.parts.length}`;
  const shopGrid = $("#shopGrid");
  shopGrid.replaceChildren();
  items.slice(shopPage * SHOP_PAGE_SIZE, (shopPage + 1) * SHOP_PAGE_SIZE).forEach((item) => {
    const owned = ownedWorkshopItems().includes(item.id);
    const card = createButton(`shop-item${owned ? " owned" : ""}`, "", () => buyWorkshopItem(item));
    card.disabled = owned;
    card.innerHTML = `<span class="shop-icon">${item.icon}</span><span><small>${rocketMode ? "火箭组件" : collection.name}</small><strong>${item.name}</strong><em>${owned ? "已收藏" : `⚡ ${item.price}`}</em></span>`;
    shopGrid.append(card);
  });
}

function buyWorkshopItem(item) {
  if (workshopMode === "collection" && !rocketComplete()) {
    showToast("集齐火箭后解锁收藏。");
    return;
  }
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
  $("#closeProfileButton").addEventListener("click", closeProfileChooser);
  $("#saveProfileButton").addEventListener("click", createProfileFromForm);
  $("#cancelProfileEditButton").addEventListener("click", cancelProfileEdit);
  $("#profileNameInput").addEventListener("keydown", (event) => {
    if (event.key === "Enter") createProfileFromForm();
  });
  $("#fullscreenButton").addEventListener("click", toggleFullscreen);
  $("#homeFromCompletionButton").addEventListener("click", returnHome);
  $("#playAgainButton").addEventListener("click", startNewMission);
  $("#rocketTabButton").addEventListener("click", () => {
    workshopMode = "rocket";
    shopPage = 0;
    renderWorkshop();
  });
  $("#collectionTabButton").addEventListener("click", () => {
    if (!rocketComplete()) {
      playEffect("wrong");
      showToast("集齐火箭后解锁 10 套收藏。");
      return;
    }
    workshopMode = "collection";
    shopPage = 0;
    renderWorkshop();
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
  renderWorkshop();
  renderProfileChooser();
  showIpadInstallHint();
  registerServiceWorker();
  openProfileChooser();
  if (storageWarning) window.setTimeout(() => showToast(storageWarning), 250);
}

initializeGame();
