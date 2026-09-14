const WORDS = [
  {
    id: "one",
    word: "one",
    ipa: "/wʌn/",
    meaning: "一",
    visual: "一颗闪亮的星星",
    image: "images/one.svg",
    sentence: "I have one star.",
    sentenceBlank: "I have ___ star.",
    phonics: [
      { letters: "o", sound: "special", soundId: "one-o", kind: "tricky", note: "one 是 Heart Word：整词读 /wʌn/，o 的读法不按通常规则。" },
      { letters: "n", sound: "/n/", soundId: "n", kind: "consonant", note: "n 发 /n/。" },
      { letters: "e", sound: "silent", soundId: "silent-e", kind: "silent", note: "最后的 e 不发音。" }
    ]
  },
  {
    id: "two",
    word: "two",
    ipa: "/tuː/",
    meaning: "二",
    visual: "两枚蓝色小火箭",
    image: "images/two.svg",
    sentence: "Two rockets fly.",
    sentenceBlank: "___ rockets fly.",
    phonics: [
      { letters: "t", sound: "/t/", soundId: "t", kind: "consonant", note: "t 发 /t/。" },
      { letters: "w", sound: "silent", soundId: "silent-w", kind: "silent", note: "two 里的 w 不发音。" },
      { letters: "o", sound: "/uː/", soundId: "long-oo", kind: "vowel", note: "o 在 two 里发长音 /uː/。" }
    ]
  },
  {
    id: "three",
    word: "three",
    ipa: "/θriː/",
    meaning: "三",
    visual: "三个挥手的小外星人",
    image: "images/three.svg",
    sentence: "Three aliens wave.",
    sentenceBlank: "___ aliens wave.",
    phonics: [
      { letters: "th", sound: "/θ/", soundId: "th-unvoiced", kind: "digraph", note: "th 在 three 里发轻轻送气的 /θ/。" },
      { letters: "r", sound: "/r/", soundId: "r", kind: "consonant", note: "r 发 /r/。" },
      { letters: "ee", sound: "/iː/", soundId: "long-ee", kind: "vowel", note: "ee 发长音 /iː/。" }
    ]
  },
  {
    id: "four",
    word: "four",
    ipa: "/fɔːr/",
    meaning: "四",
    visual: "四颗绕圈的小行星",
    image: "images/four.svg",
    sentence: "Four planets spin.",
    sentenceBlank: "___ planets spin.",
    phonics: [
      { letters: "f", sound: "/f/", soundId: "f", kind: "consonant", note: "f 发 /f/。" },
      { letters: "our", sound: "/ɔːr/", soundId: "our", kind: "vowel", note: "our 在 four 里合起来读 /ɔːr/。" }
    ]
  },
  {
    id: "eat",
    word: "eat",
    ipa: "/iːt/",
    meaning: "吃",
    visual: "小宇航员在吃红苹果",
    image: "images/eat.svg",
    sentence: "I eat an apple.",
    sentenceBlank: "I ___ an apple.",
    phonics: [
      { letters: "ea", sound: "/iː/", soundId: "ea", kind: "vowel", note: "ea 在 eat 里发长音 /iː/。" },
      { letters: "t", sound: "/t/", soundId: "t", kind: "consonant", note: "t 发 /t/。" }
    ]
  },
  {
    id: "that",
    word: "that",
    ipa: "/ðæt/",
    meaning: "那个 / 那",
    visual: "手指指向一枚蓝色火箭",
    image: "images/that.svg",
    sentence: "That is a blue rocket.",
    sentenceBlank: "___ is a blue rocket.",
    phonics: [
      { letters: "th", sound: "/ð/", soundId: "th-voiced", kind: "digraph", note: "that 里的 th 发浊辅音 /ð/，喉咙轻轻振动。" },
      { letters: "a", sound: "/æ/", soundId: "short-a", kind: "vowel", note: "a 在 that 里发短音 /æ/。" },
      { letters: "t", sound: "/t/", soundId: "t", kind: "consonant", note: "t 发 /t/。" }
    ]
  },
  {
    id: "they",
    word: "they",
    ipa: "/ðeɪ/",
    meaning: "他们 / 她们 / 它们",
    visual: "两个宇航员一起挥手",
    image: "images/they.svg",
    sentence: "They play in space.",
    sentenceBlank: "___ play in space.",
    phonics: [
      { letters: "th", sound: "/ð/", soundId: "th-voiced", kind: "digraph", note: "they 里的 th 发浊辅音 /ð/，喉咙轻轻振动。" },
      { letters: "ey", sound: "/eɪ/", soundId: "long-a", kind: "vowel", note: "ey 在 they 里发双元音 /eɪ/。" }
    ]
  },
  {
    id: "like",
    word: "like",
    ipa: "/laɪk/",
    meaning: "喜欢",
    visual: "宇航员喜欢他的火箭",
    image: "images/like.svg",
    sentence: "I like my rocket.",
    sentenceBlank: "I ___ my rocket.",
    phonics: [
      { letters: "l", sound: "/l/", soundId: "l", kind: "consonant", note: "l 发 /l/。" },
      { letters: "i...e", sound: "/aɪ/", soundId: "long-i", kind: "vowel", note: "i 和最后的 magic e 一起让 i 读 /aɪ/。" },
      { letters: "k", sound: "/k/", soundId: "k", kind: "consonant", note: "k 发 /k/。" }
    ]
  },
  {
    id: "black",
    word: "black",
    ipa: "/blæk/",
    meaning: "黑色",
    visual: "黑猫坐在月亮旁边",
    image: "images/black.svg",
    sentence: "The black cat jumps.",
    sentenceBlank: "The ___ cat jumps.",
    phonics: [
      { letters: "b", sound: "/b/", soundId: "b", kind: "consonant", note: "b 发 /b/。" },
      { letters: "l", sound: "/l/", soundId: "l", kind: "consonant", note: "l 发 /l/。" },
      { letters: "a", sound: "/æ/", soundId: "short-a", kind: "vowel", note: "a 在 black 里发短音 /æ/。" },
      { letters: "ck", sound: "/k/", soundId: "ck", kind: "digraph", note: "ck 两个字母一起发 /k/。" }
    ]
  },
  {
    id: "white",
    word: "white",
    ipa: "/waɪt/",
    meaning: "白色",
    visual: "白色月亮和白云",
    image: "images/white.svg",
    sentence: "A white moon shines.",
    sentenceBlank: "A ___ moon shines.",
    phonics: [
      { letters: "wh", sound: "/w/", soundId: "wh", kind: "digraph", note: "wh 在 white 里发 /w/。" },
      { letters: "i...e", sound: "/aɪ/", soundId: "long-i", kind: "vowel", note: "i 和最后的 magic e 一起让 i 读 /aɪ/。" },
      { letters: "t", sound: "/t/", soundId: "t", kind: "consonant", note: "t 发 /t/。" }
    ]
  }
];

const PHONICS_TRACKS = [
  "one-o",
  "n",
  "silent-e",
  "t",
  "silent-w",
  "long-oo",
  "th-unvoiced",
  "r",
  "long-ee",
  "f",
  "our",
  "ea",
  "th-voiced",
  "short-a",
  "long-a",
  "l",
  "long-i",
  "k",
  "b",
  "ck",
  "wh"
];

const PHONICS_QUESTIONS = [
  { id: "one-o", wordId: "one", prefix: "", suffix: "ne", answer: "o", choices: ["o", "a", "i"], soundId: "one-o", sound: "whole word /wʌn/", category: "特殊词 Heart Word", note: "one 是特殊词，整词读 /wʌn/；o 的读法不按通常规则。" },
  { id: "one-n", wordId: "one", prefix: "o", suffix: "e", answer: "n", choices: ["n", "m", "t"], soundId: "n", sound: "/n/", category: "辅音", note: "n 对应鼻音 /n/。" },
  { id: "one-e", wordId: "one", prefix: "on", suffix: "", answer: "e", choices: ["e", "a", "i"], soundId: "silent-e", sound: "silent e", category: "静音字母", note: "最后的 e 安静不发音。" },
  { id: "two-t", wordId: "two", prefix: "", suffix: "wo", answer: "t", choices: ["t", "d", "p"], soundId: "t", sound: "/t/", category: "辅音", note: "t 对应轻快的 /t/。" },
  { id: "two-w", wordId: "two", prefix: "t", suffix: "o", answer: "w", choices: ["w", "v", "r"], soundId: "silent-w", sound: "silent w", category: "静音字母", note: "two 里的 w 不发音。" },
  { id: "two-o", wordId: "two", prefix: "tw", suffix: "", answer: "o", choices: ["o", "oo", "u"], soundId: "long-oo", sound: "/uː/", category: "元音", note: "o 在 two 里发长音 /uː/。" },
  { id: "three-th", wordId: "three", prefix: "", suffix: "ree", answer: "th", choices: ["th", "sh", "ch"], soundId: "th-unvoiced", sound: "/θ/", category: "辅音组合", note: "three 里的 th 发轻轻送气的 /θ/。" },
  { id: "three-r", wordId: "three", prefix: "th", suffix: "ee", answer: "r", choices: ["r", "l", "n"], soundId: "r", sound: "/r/", category: "辅音", note: "r 对应 /r/。" },
  { id: "three-ee", wordId: "three", prefix: "thr", suffix: "", answer: "ee", choices: ["ee", "ea", "ai"], soundId: "long-ee", sound: "/iː/", category: "元音组合", note: "ee 对应长音 /iː/。" },
  { id: "four-f", wordId: "four", prefix: "", suffix: "our", answer: "f", choices: ["f", "v", "ph"], soundId: "f", sound: "/f/", category: "辅音", note: "f 对应 /f/。" },
  { id: "four-our", wordId: "four", prefix: "f", suffix: "", answer: "our", choices: ["our", "ow", "ore"], soundId: "our", sound: "/ɔːr/", category: "元音组合", note: "our 在 four 里合起来发 /ɔːr/。" },
  { id: "eat-ea", wordId: "eat", prefix: "", suffix: "t", answer: "ea", choices: ["ea", "ee", "ai"], soundId: "ea", sound: "/iː/", category: "元音组合", note: "ea 在 eat 里发长音 /iː/。" },
  { id: "eat-t", wordId: "eat", prefix: "ea", suffix: "", answer: "t", choices: ["t", "d", "p"], soundId: "t", sound: "/t/", category: "辅音", note: "t 对应 /t/。" },
  { id: "that-th", wordId: "that", prefix: "", suffix: "at", answer: "th", choices: ["th", "sh", "ch"], soundId: "th-voiced", sound: "/ð/", category: "辅音组合", note: "that 里的 th 发浊辅音 /ð/，喉咙轻轻振动。" },
  { id: "that-a", wordId: "that", prefix: "th", suffix: "t", answer: "a", choices: ["a", "e", "i"], soundId: "short-a", sound: "/æ/", category: "元音", note: "a 在 that 里发短音 /æ/。" },
  { id: "that-t", wordId: "that", prefix: "tha", suffix: "", answer: "t", choices: ["t", "d", "p"], soundId: "t", sound: "/t/", category: "辅音", note: "t 对应 /t/。" },
  { id: "they-th", wordId: "they", prefix: "", suffix: "ey", answer: "th", choices: ["th", "sh", "ch"], soundId: "th-voiced", sound: "/ð/", category: "辅音组合", note: "they 里的 th 发浊辅音 /ð/，喉咙轻轻振动。" },
  { id: "they-ey", wordId: "they", prefix: "th", suffix: "", answer: "ey", choices: ["ey", "ee", "ay"], soundId: "long-a", sound: "/eɪ/", category: "元音组合", note: "ey 在 they 里发双元音 /eɪ/。" },
  { id: "like-l", wordId: "like", prefix: "", suffix: "ike", answer: "l", choices: ["l", "r", "b"], soundId: "l", sound: "/l/", category: "辅音", note: "l 对应 /l/。" },
  { id: "like-i", wordId: "like", prefix: "l", suffix: "ke", answer: "i", choices: ["i", "a", "o"], soundId: "long-i", sound: "/aɪ/", category: "magic e 元音", note: "i 和最后的 e 搭档，发 /aɪ/。" },
  { id: "like-k", wordId: "like", prefix: "li", suffix: "e", answer: "k", choices: ["k", "c", "ck"], soundId: "k", sound: "/k/", category: "辅音", note: "k 对应 /k/。" },
  { id: "like-e", wordId: "like", prefix: "lik", suffix: "", answer: "e", choices: ["e", "a", "i"], soundId: "silent-e", sound: "magic e", category: "静音字母", note: "最后的 e 虽然安静，却让 i 变成长音。" },
  { id: "black-b", wordId: "black", prefix: "", suffix: "lack", answer: "b", choices: ["b", "p", "d"], soundId: "b", sound: "/b/", category: "辅音", note: "b 对应 /b/。" },
  { id: "black-l", wordId: "black", prefix: "b", suffix: "ack", answer: "l", choices: ["l", "r", "n"], soundId: "l", sound: "/l/", category: "辅音", note: "l 对应 /l/。" },
  { id: "black-a", wordId: "black", prefix: "bl", suffix: "ck", answer: "a", choices: ["a", "e", "i"], soundId: "short-a", sound: "/æ/", category: "元音", note: "a 在 black 里发短音 /æ/。" },
  { id: "black-ck", wordId: "black", prefix: "bla", suffix: "", answer: "ck", choices: ["ck", "k", "ke"], soundId: "ck", sound: "/k/", category: "辅音组合", note: "ck 两个字母一起发 /k/。" },
  { id: "white-wh", wordId: "white", prefix: "", suffix: "ite", answer: "wh", choices: ["wh", "w", "th"], soundId: "wh", sound: "/w/", category: "辅音组合", note: "wh 在 white 里发 /w/。" },
  { id: "white-i", wordId: "white", prefix: "wh", suffix: "te", answer: "i", choices: ["i", "a", "o"], soundId: "long-i", sound: "/aɪ/", category: "magic e 元音", note: "i 和最后的 e 搭档，发 /aɪ/。" },
  { id: "white-t", wordId: "white", prefix: "whi", suffix: "e", answer: "t", choices: ["t", "d", "p"], soundId: "t", sound: "/t/", category: "辅音", note: "t 对应 /t/。" },
  { id: "white-e", wordId: "white", prefix: "whit", suffix: "", answer: "e", choices: ["e", "a", "i"], soundId: "silent-e", sound: "magic e", category: "静音字母", note: "最后的 e 虽然安静，却让 i 变成长音。" }
];

const STAGES = [
  {
    id: "listening",
    icon: "📡",
    title: "雷达听音站",
    description: "听单词和句子，再锁定正确的单词信号。",
    mapDescription: "看情境图，听单词和完整句子。",
    mode: "listening",
    reward: 2,
    bonus: 8
  },
  {
    id: "phonicsFill",
    icon: "🧬",
    title: "音素填空站",
    description: "听清元音、辅音和组合音，把空格补完整。",
    mapDescription: "30 道完整元音、辅音和组合音填空。",
    mode: "phonicsFill",
    reward: 2,
    bonus: 10
  },
  {
    id: "spell",
    icon: "🧩",
    title: "火箭拼词舱",
    description: "跟着音素导航，一次装好一个字母推进器。",
    mapDescription: "点击音素提示，再用字母拼出单词。",
    mode: "spell",
    reward: 3,
    bonus: 10
  },
  {
    id: "dictation",
    icon: "⌨️",
    title: "星际默写台",
    description: "只听发音，在飞船终端输入正确单词。",
    mapDescription: "慢速复听、音素提示和真实默写。",
    mode: "dictation",
    reward: 4,
    bonus: 12
  }
];

const ROCKET_PARTS = [
  { id: "nose-cone", icon: "🔺", name: "星盾鼻锥", price: 6, description: "保护火箭最前端" },
  { id: "cockpit-glass", icon: "🔵", name: "水晶座舱", price: 9, description: "看清前方星路" },
  { id: "antenna", icon: "📡", name: "信号天线", price: 7, description: "接收单词任务" },
  { id: "navigation-light", icon: "💡", name: "导航灯", price: 5, description: "照亮夜航路线" },
  { id: "hull-core", icon: "🛡️", name: "蓝虎机身", price: 14, description: "火箭的核心外壳" },
  { id: "left-wing", icon: "◀️", name: "左翼", price: 12, description: "稳定左侧飞行" },
  { id: "right-wing", icon: "▶️", name: "右翼", price: 12, description: "稳定右侧飞行" },
  { id: "left-fin", icon: "🔻", name: "左尾翼", price: 10, description: "转弯更灵活" },
  { id: "right-fin", icon: "🔺", name: "右尾翼", price: 10, description: "转弯更灵活" },
  { id: "fuel-tank", icon: "🧪", name: "能量燃料罐", price: 13, description: "储存星际能量" },
  { id: "engine-core", icon: "⚙️", name: "引擎核心", price: 18, description: "发动主引擎" },
  { id: "left-thruster", icon: "🔷", name: "左推进器", price: 15, description: "喷出蓝色尾焰" },
  { id: "right-thruster", icon: "🔷", name: "右推进器", price: 15, description: "喷出蓝色尾焰" },
  { id: "plasma-flame", icon: "🔥", name: "等离子尾焰", price: 9, description: "让火箭冲上云霄" },
  { id: "shield-ring", icon: "🫧", name: "行星护盾", price: 22, description: "穿越小行星带" },
  { id: "star-decals", icon: "✨", name: "星星涂装", price: 6, description: "装上闪闪的徽章" },
  { id: "radar-dish", icon: "🛰️", name: "远程雷达", price: 12, description: "发现新单词星球" },
  { id: "turbo-booster", icon: "⚡", name: "涡轮加速器", price: 24, description: "获得极速冲刺" },
  { id: "moon-flag", icon: "🚩", name: "月球小旗", price: 8, description: "留下探险印记" },
  { id: "captain-seat", icon: "🧑‍🚀", name: "指挥官座椅", price: 16, description: "坐上自己的火箭" }
];

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

const WORD_BY_ID = new Map(WORDS.map((entry) => [entry.id, entry]));
const PART_IDS = new Set(ROCKET_PARTS.map((part) => part.id));
const AVATAR_BY_ID = new Map(AVATARS.map((avatar) => [avatar.id, avatar]));
const PROFILE_STORE_KEY = "word-space-quest-profiles-v5";
const LEGACY_PROFILE_KEY = "word-space-quest-profile-v4";
const SHOP_PAGE_SIZE = 6;
const $ = (selector) => document.querySelector(selector);

const game = {
  active: false,
  stageIndex: 0,
  roundIndex: 0,
  rounds: [],
  locked: false,
  placedLetters: [],
  letterBank: [],
  selectedLetterId: null,
  typedValue: ""
};

let storageWarning = "";
let saveBook = loadSaveBook();
let player = getActiveProfile() || createDefaultProfile("等待选择", "astronaut", "preview-profile");
let activeAudio = null;
let activeAudioButton = null;
let soundContext = null;
let activeSequence = 0;
let gardenWordId = "one";
let toastTimer = 0;
let selectedAvatarId = player.avatarId;
let shopPage = 0;
let editingProfileId = null;
let pendingDeleteProfileId = null;

const audioMaps = {
  word: new Map(),
  sentence: new Map(),
  phonics: new Map()
};

function createProfileId() {
  if (window.crypto && typeof window.crypto.randomUUID === "function") {
    return window.crypto.randomUUID();
  }
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
    version: 5,
    stars: 20,
    ownedParts: [],
    progress: {
      listening: [],
      phonicsFill: [],
      spell: [],
      dictation: []
    },
    mission: null,
    speed: "slow",
    updatedAt: null
  };
}

function normalizeProfile(candidate, fallbackName = "新驾驶员") {
  const profile = createDefaultProfile(
    cleanPlayerName(candidate && candidate.name) || fallbackName,
    candidate && candidate.avatarId,
    candidate && typeof candidate.id === "string" ? candidate.id : createProfileId()
  );
  if (!candidate || typeof candidate !== "object") return profile;

  profile.stars = Number.isFinite(Number(candidate.stars))
    ? Math.max(0, Math.floor(Number(candidate.stars)))
    : profile.stars;
  profile.ownedParts = Array.isArray(candidate.ownedParts)
    ? [...new Set(candidate.ownedParts.filter((partId) => PART_IDS.has(partId)))]
    : [];
  profile.speed = candidate.speed === "verySlow" ? "verySlow" : "slow";
  profile.updatedAt = typeof candidate.updatedAt === "string" ? candidate.updatedAt : null;

  if (candidate.progress && typeof candidate.progress === "object") {
    STAGES.forEach((stage) => {
      const savedIds = candidate.progress[stage.id];
      profile.progress[stage.id] = Array.isArray(savedIds)
        ? [...new Set(savedIds.filter((item) => typeof item === "string"))]
        : [];
    });
  }

  if (candidate.mission && typeof candidate.mission === "object") {
    const stageIndex = Number(candidate.mission.stageIndex);
    const roundIndex = Number(candidate.mission.roundIndex);
    const roundIds = candidate.mission.roundIds;
    if (
      Number.isInteger(stageIndex)
      && stageIndex >= 0
      && stageIndex < STAGES.length
      && Number.isInteger(roundIndex)
      && roundIndex >= 0
      && Array.isArray(roundIds)
    ) {
      profile.mission = {
        stageIndex,
        roundIndex,
        roundIds: roundIds.filter((item) => typeof item === "string"),
        savedAt: typeof candidate.mission.savedAt === "string" ? candidate.mission.savedAt : null
      };
    }
  }

  return profile;
}

function createDefaultSaveBook() {
  return {
    version: 5,
    activeProfileId: null,
    profiles: []
  };
}

function normalizeSaveBook(candidate) {
  const book = createDefaultSaveBook();
  if (!candidate || typeof candidate !== "object" || !Array.isArray(candidate.profiles)) return book;
  const knownIds = new Set();
  candidate.profiles.slice(0, 8).forEach((savedProfile) => {
    const profile = normalizeProfile(savedProfile);
    if (!knownIds.has(profile.id)) {
      knownIds.add(profile.id);
      book.profiles.push(profile);
    }
  });
  if (typeof candidate.activeProfileId === "string" && knownIds.has(candidate.activeProfileId)) {
    book.activeProfileId = candidate.activeProfileId;
  }
  return book;
}

function loadSaveBook() {
  const fallback = createDefaultSaveBook();
  try {
    const raw = localStorage.getItem(PROFILE_STORE_KEY);
    if (raw) return normalizeSaveBook(JSON.parse(raw));

    const legacyRaw = localStorage.getItem(LEGACY_PROFILE_KEY);
    if (!legacyRaw) return fallback;
    const legacyProfile = normalizeProfile(JSON.parse(legacyRaw), "小宇航员");
    return {
      version: 5,
      activeProfileId: legacyProfile.id,
      profiles: [legacyProfile]
    };
  } catch (error) {
    storageWarning = "旧存档无法读取，已为你开启新的训练档案。";
    console.warn("Unable to load word game saves:", error);
    return fallback;
  }
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
    console.warn("Unable to write word game saves:", error);
    return false;
  }
}

function savePlayerProfile(showConfirmation = false) {
  if (!hasActiveProfile()) {
    if (showConfirmation) {
      showToast("请先选择驾驶员，才能创建属于自己的存档。");
      openProfileChooser();
    }
    return false;
  }
  player.updatedAt = new Date().toISOString();
  if (persistSaveBook()) {
    updateLandingStatus();
    if (showConfirmation) showToast(`💾 ${player.name} 的存档已保存，下一次可以继续！`);
    return true;
  }
  if (showConfirmation) showToast("存档没有写入设备，请检查浏览器的存储权限。");
  return false;
}

function updateProfileDisplay() {
  const avatar = getAvatar();
  $("#profileAvatar").textContent = avatar.emoji;
  $("#profileName").textContent = player.name;
  $("#homePilotName").textContent = player.name;
  $("#openProfileButton").setAttribute("aria-label", `切换驾驶员，当前是 ${player.name}`);
  document.querySelectorAll("[data-profile-avatar]").forEach((element) => {
    element.textContent = avatar.emoji;
  });
}

function renderAvatarChoices() {
  const avatarGrid = $("#avatarGrid");
  avatarGrid.replaceChildren();
  AVATARS.forEach((avatar) => {
    const choice = createButton(
      `avatar-choice${avatar.id === selectedAvatarId ? " selected" : ""}`,
      "",
      () => {
        selectedAvatarId = avatar.id;
        renderAvatarChoices();
      }
    );
    choice.innerHTML = `<span>${avatar.emoji}</span><small>${avatar.label}</small>`;
    choice.setAttribute("aria-label", `选择${avatar.label}`);
    avatarGrid.append(choice);
  });
}

function renderProfileChooser() {
  const profileGrid = $("#profileGrid");
  profileGrid.replaceChildren();
  if (!saveBook.profiles.length) {
    const empty = document.createElement("p");
    empty.className = "empty-profile-note";
    empty.textContent = "还没有驾驶员。输入名字、选择头像，就能创建第一份专属存档。";
    profileGrid.append(empty);
  } else {
    saveBook.profiles.forEach((profile) => {
      const avatar = getAvatar(profile);
      const card = document.createElement("article");
      card.className = `profile-card${profile.id === saveBook.activeProfileId ? " active" : ""}`;
      const avatarElement = document.createElement("span");
      avatarElement.className = "avatar";
      avatarElement.textContent = avatar.emoji;
      const details = document.createElement("span");
      const name = document.createElement("strong");
      name.textContent = profile.name;
      const parts = document.createElement("small");
      parts.textContent = `${profile.ownedParts.length} / ${ROCKET_PARTS.length} 火箭部件`;
      details.append(name, parts);
      const stars = document.createElement("em");
      stars.textContent = `⚡ ${profile.stars}`;
      const actions = document.createElement("div");
      actions.className = "profile-actions";
      actions.append(
        createButton("profile-action-button profile-use-button", "进入", () => activateProfile(profile.id)),
        createButton("profile-action-button", "修改", () => beginProfileEdit(profile.id)),
        createButton("profile-action-button profile-delete-button", "删除", () => requestProfileDeletion(profile.id))
      );
      card.append(avatarElement, details, stars, actions);
      profileGrid.append(card);
    });
  }
  renderAvatarChoices();
  $("#closeProfileButton").hidden = !hasActiveProfile();
}

function resetProfileForm() {
  editingProfileId = null;
  selectedAvatarId = player.avatarId;
  $("#profileNameInput").value = "";
  $("#profileFormTitle").textContent = "创建新驾驶员";
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
  if (!hasActiveProfile()) return;
  $("#profileGateOverlay").hidden = true;
}

function activateProfile(profileId) {
  if (game.active) saveMission(false);
  const selectedProfile = saveBook.profiles.find((profile) => profile.id === profileId);
  if (!selectedProfile) return;
  saveBook.activeProfileId = selectedProfile.id;
  player = selectedProfile;
  selectedAvatarId = player.avatarId;
  game.active = false;
  game.rounds = [];
  stopActiveAudio();
  $("#gameScreen").hidden = true;
  $("#gardenScreen").hidden = true;
  $("#workshopScreen").hidden = true;
  $("#finishScreen").hidden = true;
  $("#landingScreen").hidden = false;
  $("#stageCompleteOverlay").hidden = true;
  $("#profileGateOverlay").hidden = true;
  savePlayerProfile(false);
  updateProfileDisplay();
  updateSpeedButton();
  updateLandingStatus();
  renderTrainingProjects();
  renderGarden();
  renderShop();
  showToast(`🚀 欢迎回来，${player.name}！`);
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
  $("#profileNameInput").focus();
}

function cancelProfileEdit() {
  resetProfileForm();
}

function createProfileFromForm() {
  const name = cleanPlayerName($("#profileNameInput").value);
  if (!name) {
    $("#profileFormMessage").textContent = "先输入一个名字，才能保存专属训练档案。";
    $("#profileNameInput").focus();
    return;
  }
  const sameName = saveBook.profiles.find((profile) => {
    return profile.id !== editingProfileId && profile.name.toLocaleLowerCase() === name.toLocaleLowerCase();
  });
  if (sameName) {
    $("#profileFormMessage").textContent = "这个名字已经有存档了，请换一个名字或直接选择它。";
    return;
  }
  if (editingProfileId) {
    const profile = saveBook.profiles.find((item) => item.id === editingProfileId);
    if (!profile) {
      resetProfileForm();
      return;
    }
    const previousName = profile.name;
    const previousAvatar = profile.avatarId;
    profile.name = name;
    profile.avatarId = selectedAvatarId;
    profile.updatedAt = new Date().toISOString();
    if (!persistSaveBook()) {
      profile.name = previousName;
      profile.avatarId = previousAvatar;
      $("#profileFormMessage").textContent = "修改没有保存，请检查浏览器的存储权限。";
      return;
    }
    if (profile.id === saveBook.activeProfileId) {
      player = profile;
      updateProfileDisplay();
      updateLandingStatus();
      renderTrainingProjects();
      renderShop();
    }
    renderProfileChooser();
    resetProfileForm();
    showToast("驾驶员资料已修改。");
    return;
  }
  const newProfile = createDefaultProfile(name, selectedAvatarId);
  saveBook.profiles.push(newProfile);
  activateProfile(newProfile.id);
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
  const previousActiveProfileId = saveBook.activeProfileId;
  const previousPlayer = player;
  const deletingActiveProfile = profile.id === saveBook.activeProfileId;
  saveBook.profiles = saveBook.profiles.filter((item) => item.id !== profile.id);
  if (deletingActiveProfile) saveBook.activeProfileId = null;
  if (!persistSaveBook()) {
    saveBook.profiles = previousProfiles;
    saveBook.activeProfileId = previousActiveProfileId;
    player = previousPlayer;
    $("#profileFormMessage").textContent = "删除没有保存，请检查浏览器的存储权限。";
    cancelProfileDeletion();
    return;
  }

  pendingDeleteProfileId = null;
  $("#deleteProfileOverlay").hidden = true;
  if (deletingActiveProfile) {
    player = createDefaultProfile("等待选择", "astronaut", "preview-profile");
    selectedAvatarId = player.avatarId;
    game.active = false;
    game.rounds = [];
    stopActiveAudio();
    $("#gameScreen").hidden = true;
    $("#gardenScreen").hidden = true;
    $("#workshopScreen").hidden = true;
    $("#finishScreen").hidden = true;
    $("#landingScreen").hidden = false;
    $("#stageCompleteOverlay").hidden = true;
  }
  updateProfileDisplay();
  updateLandingStatus();
  renderTrainingProjects();
  renderGarden();
  renderShop();
  renderProfileChooser();
  showToast(`已删除 ${profile.name} 的驾驶员档案。`);
}

function shuffle(items) {
  const result = [...items];
  for (let index = result.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [result[index], result[swapIndex]] = [result[swapIndex], result[index]];
  }
  return result;
}

function getStageSource(stageIndex) {
  return STAGES[stageIndex].mode === "phonicsFill" ? PHONICS_QUESTIONS : WORDS;
}

function getRoundId(round) {
  return round.id;
}

function restoreRounds(stageIndex, roundIds) {
  const source = getStageSource(stageIndex);
  const sourceById = new Map(source.map((item) => [getRoundId(item), item]));
  const restored = roundIds.map((roundId) => sourceById.get(roundId)).filter(Boolean);
  return restored.length === source.length ? restored : shuffle(source);
}

function currentStage() {
  return STAGES[game.stageIndex];
}

function currentRound() {
  return game.rounds[game.roundIndex];
}

function updateStarDisplays() {
  document.querySelectorAll("[data-star-balance]").forEach((element) => {
    element.textContent = `⚡ ${player.stars} 能量星`;
  });
}

function stageProgress(stage) {
  const known = new Set(player.progress[stage.id] || []);
  return {
    completed: known.size,
    total: getStageSource(STAGES.indexOf(stage)).length
  };
}

function updateStageHeader() {
  if (!game.active) return;
  const stage = currentStage();
  $("#stageIcon").textContent = stage.icon;
  $("#stageTitle").textContent = stage.title;
  $("#stageDescription").textContent = stage.description;
  $("#roundText").textContent = `第 ${game.roundIndex + 1} / ${game.rounds.length} 题`;
  $("#roundFill").style.width = `${(game.roundIndex / game.rounds.length) * 100}%`;

  document.querySelectorAll(".stage-track-item").forEach((element) => {
    const stageIndex = Number(element.dataset.stageIndex);
    const trackedStage = STAGES[stageIndex];
    const progress = stageProgress(trackedStage);
    element.classList.toggle("active", stageIndex === game.stageIndex);
    element.classList.toggle("complete", progress.completed >= progress.total);
  });
}

function updateLandingStatus() {
  const resumeButton = $("#resumeButton");
  const saveNote = $("#saveNote");
  updateProfileDisplay();
  if (!hasActiveProfile()) {
    resumeButton.hidden = true;
    saveNote.textContent = "先选择名字和头像，创建自己的星际训练存档。";
    $("#heroPartsCount").textContent = `0 / ${ROCKET_PARTS.length}`;
    $("#homeTrainingCount").textContent = "0 / 60";
    updateStarDisplays();
    return;
  }
  const hasMission = Boolean(player.mission);
  resumeButton.hidden = !hasMission;
  if (hasMission) {
    const stage = STAGES[player.mission.stageIndex];
    saveNote.textContent = `上次：${stage.title} · 第 ${player.mission.roundIndex + 1} 题`;
  } else if (storageWarning) {
    saveNote.textContent = storageWarning;
  } else {
    saveNote.textContent = "自动存档已开启";
  }
  $("#heroPartsCount").textContent = `${player.ownedParts.length} / ${ROCKET_PARTS.length}`;
  const learned = STAGES.reduce((total, stage) => total + stageProgress(stage).completed, 0);
  const questionTotal = STAGES.reduce((total, stage, index) => total + getStageSource(index).length, 0);
  $("#homeTrainingCount").textContent = `${learned} / ${questionTotal}`;
  updateStarDisplays();
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("visible");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("visible"), 2600);
}

function setFeedback(message, kind = "") {
  const feedback = $("#feedback");
  feedback.className = `feedback ${kind}`.trim();
  feedback.textContent = message;
}

function clearAudioButton() {
  if (activeAudioButton) activeAudioButton.classList.remove("is-playing");
  activeAudioButton = null;
}

function stopActiveAudio() {
  if (activeAudio) {
    activeAudio.pause();
    activeAudio.currentTime = 0;
  }
  activeAudio = null;
  clearAudioButton();
}

function speechRate(slowReplay = false) {
  if (slowReplay) return 0.58;
  return player.speed === "verySlow" ? 0.66 : 0.82;
}

function updateSpeedButton() {
  const button = $("#speedButton");
  const verySlow = player.speed === "verySlow";
  button.innerHTML = verySlow
    ? '<span>🐢</span><span class="action-label">超慢速</span>'
    : '<span>🔊</span><span class="action-label">慢速</span>';
  button.title = verySlow ? "当前：超慢速。点击切回慢速。" : "当前：慢速。点击切成超慢速。";
}

function preloadAudio() {
  WORDS.forEach((entry) => {
    const wordAudio = new Audio(`audio/${entry.id}.mp3`);
    const sentenceAudio = new Audio(`audio/sentences/${entry.id}.mp3`);
    wordAudio.preload = "auto";
    sentenceAudio.preload = "auto";
    attachAudioEvents(wordAudio);
    attachAudioEvents(sentenceAudio);
    audioMaps.word.set(entry.id, wordAudio);
    audioMaps.sentence.set(entry.id, sentenceAudio);
  });
  PHONICS_TRACKS.forEach((soundId) => {
    const audio = new Audio(`audio/phonics/${soundId}.mp3`);
    audio.preload = "auto";
    attachAudioEvents(audio);
    audioMaps.phonics.set(soundId, audio);
  });
}

function attachAudioEvents(audio) {
  audio.addEventListener("ended", () => {
    if (activeAudio === audio) {
      activeAudio = null;
      clearAudioButton();
    }
  });
  audio.addEventListener("error", () => {
    if (activeAudio === audio) {
      activeAudio = null;
      clearAudioButton();
      if (game.active) {
        setFeedback("音频加载失败，请检查游戏文件是否完整。", "try-again");
      } else {
        showToast("音频加载失败，请检查游戏文件是否完整。");
      }
    }
  });
}

function playAudioTrack(audio, button, slowReplay = false) {
  activeSequence += 1;
  stopActiveAudio();
  if (!audio) {
    showToast("该段音频还没有准备好。");
    return;
  }
  activeAudio = audio;
  activeAudioButton = button || null;
  if (activeAudioButton) activeAudioButton.classList.add("is-playing");
  audio.currentTime = 0;
  audio.playbackRate = speechRate(slowReplay);
  audio.play().catch((error) => {
    if (activeAudio === audio) {
      activeAudio = null;
      clearAudioButton();
    }
    console.warn("Unable to play audio:", error);
    if (game.active) {
      setFeedback("音频正在准备，请稍等后再点一次。", "try-again");
    }
  });
}

function playAudioTrackAndWait(audio, button, rate) {
  return new Promise((resolve) => {
    stopActiveAudio();
    if (!audio) {
      resolve();
      return;
    }
    activeAudio = audio;
    activeAudioButton = button || null;
    if (activeAudioButton) activeAudioButton.classList.add("is-playing");
    audio.currentTime = 0;
    audio.playbackRate = rate;

    const finish = () => {
      audio.removeEventListener("ended", finish);
      audio.removeEventListener("error", finish);
      if (activeAudio === audio) {
        activeAudio = null;
        clearAudioButton();
      }
      resolve();
    };

    audio.addEventListener("ended", finish, { once: true });
    audio.addEventListener("error", finish, { once: true });
    audio.play().catch((error) => {
      console.warn("Unable to play audio:", error);
      finish();
    });
  });
}

function playWord(entry, button, slowReplay = false) {
  playAudioTrack(audioMaps.word.get(entry.id), button, slowReplay);
}

function playSentence(entry, button, slowReplay = false) {
  playAudioTrack(audioMaps.sentence.get(entry.id), button, slowReplay);
}

function playPhonicsSound(soundId, button, slowReplay = false) {
  playAudioTrack(audioMaps.phonics.get(soundId), button, slowReplay);
}

function getSoundContext() {
  const AudioContextClass = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextClass) return null;
  if (!soundContext) soundContext = new AudioContextClass();
  if (soundContext.state === "suspended") {
    soundContext.resume().catch((error) => console.warn("Unable to start sound effects:", error));
  }
  return soundContext;
}

function playTone(context, frequency, start, duration, volume, type = "sine") {
  const oscillator = context.createOscillator();
  const gain = context.createGain();
  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, start);
  gain.gain.setValueAtTime(0.0001, start);
  gain.gain.exponentialRampToValueAtTime(volume, start + 0.015);
  gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
  oscillator.connect(gain);
  gain.connect(context.destination);
  oscillator.start(start);
  oscillator.stop(start + duration + 0.02);
}

function playEffect(effect) {
  const context = getSoundContext();
  if (!context) return;
  const now = context.currentTime;
  if (effect === "letter") {
    playTone(context, 660, now, 0.07, 0.085, "square");
    return;
  }
  if (effect === "type") {
    playTone(context, 720, now, 0.055, 0.06, "triangle");
    return;
  }
  if (effect === "delete") {
    playTone(context, 270, now, 0.08, 0.07, "square");
    return;
  }
  if (effect === "wrong") {
    playTone(context, 225, now, 0.12, 0.08, "sawtooth");
    playTone(context, 170, now + 0.1, 0.16, 0.065, "sawtooth");
    return;
  }
  if (effect === "purchase") {
    [392, 523.25, 659.25].forEach((frequency, index) => {
      playTone(context, frequency, now + index * 0.085, 0.12, 0.08, "triangle");
    });
    return;
  }
  [523.25, 659.25, 783.99, 1046.5].forEach((frequency, index) => {
    playTone(context, frequency, now + index * 0.09, 0.15, 0.095, "triangle");
  });
}

function createButton(className, label, onClick) {
  const button = document.createElement("button");
  button.className = className;
  button.type = "button";
  button.textContent = label;
  button.addEventListener("click", onClick);
  return button;
}

function createAudioControls(entry, mode, label) {
  const controls = document.createElement("div");
  controls.className = "audio-controls";
  const mainButton = createButton("listen-button", label, () => {
    if (mode === "sentence") playSentence(entry, mainButton);
    if (mode === "word") playWord(entry, mainButton);
  });
  const slowButton = createButton("mini-button slow-button", "🐢 超慢回听", () => {
    if (mode === "sentence") playSentence(entry, slowButton, true);
    if (mode === "word") playWord(entry, slowButton, true);
  });
  controls.append(mainButton, slowButton);
  return controls;
}

function createPhonicsAudioControls(soundId, soundLabel) {
  const controls = document.createElement("div");
  controls.className = "audio-controls";
  const mainButton = createButton("listen-button", `▶ 听音素 ${soundLabel}`, () => {
    playPhonicsSound(soundId, mainButton);
  });
  const slowButton = createButton("mini-button slow-button", "🐢 超慢回听", () => {
    playPhonicsSound(soundId, slowButton, true);
  });
  controls.append(mainButton, slowButton);
  return controls;
}

function createSceneCard(entry) {
  const figure = document.createElement("figure");
  figure.className = "scene-card";
  const image = document.createElement("img");
  image.src = entry.image;
  image.alt = entry.visual;
  const caption = document.createElement("figcaption");
  caption.textContent = `情境图：${entry.visual}`;
  figure.append(image, caption);
  return figure;
}

function addQuestionChoices(parent, options, onChoice) {
  const grid = document.createElement("div");
  grid.className = "choice-grid";
  options.forEach((option) => {
    const button = createButton("choice-button", option.label || option, () => onChoice(option, button));
    button.setAttribute("aria-label", `选择 ${option.label || option}`);
    grid.append(button);
  });
  parent.append(grid);
  return grid;
}

function renderListeningQuestion(entry) {
  const questionArea = $("#questionArea");
  questionArea.replaceChildren();
  const panel = document.createElement("div");
  panel.className = "question-panel";
  const layout = document.createElement("div");
  layout.className = "listening-layout";
  layout.append(createSceneCard(entry));

  const context = document.createElement("section");
  context.className = "mission-context";
  context.innerHTML = `
    <p class="question-kicker">任务句子 · 听完选词</p>
    <p class="sentence-line" id="sentenceLine">${entry.sentenceBlank}</p>
    <p class="sentence-explain">听句子，再选单词。</p>
  `;
  context.append(createAudioControls(entry, "sentence", "▶ 听单词和句子"));
  layout.append(context);
  panel.append(layout);

  addQuestionChoices(
    panel,
    shuffle([
      { label: entry.word, entry },
      ...shuffle(WORDS.filter((word) => word.id !== entry.id)).slice(0, 3).map((word) => ({ label: word.word, entry: word }))
    ]),
    (option, button) => checkListeningChoice(entry, option.entry, button)
  );
  questionArea.append(panel);
}

function checkListeningChoice(target, selected, button) {
  if (game.locked) return;
  if (target.id === selected.id) {
    game.locked = true;
    button.classList.add("correct");
    const sentenceLine = $("#sentenceLine");
    sentenceLine.textContent = target.sentence;
    sentenceLine.classList.add("revealed");
    markCorrect(target, `雷达锁定成功！${target.sentence} 这句话的意思是：${target.meaning}。`);
    return;
  }
  playEffect("wrong");
  button.classList.add("wrong");
  setFeedback("雷达锁定错啦！再听一遍完整句子，看看情境图。", "try-again");
  window.setTimeout(() => button.classList.remove("wrong"), 470);
}

function renderPhonicsFillQuestion(question) {
  const entry = WORD_BY_ID.get(question.wordId);
  const questionArea = $("#questionArea");
  questionArea.replaceChildren();
  const panel = document.createElement("div");
  panel.className = "question-panel";
  const layout = document.createElement("div");
  layout.className = "phonics-fill-layout";
  layout.append(createSceneCard(entry));

  const card = document.createElement("section");
  card.className = "phonics-question-card";
  card.innerHTML = `
    <p class="question-kicker">${question.category} · 音素填空</p>
    <h3>听清音素，把空格补完整</h3>
    <div class="phonics-sound-banner">目标音：${question.sound}</div>
    <div class="fill-word" aria-label="${entry.word} 的填空题">
      <span>${question.prefix}</span><span class="fill-slot" id="fillSlot">${"_".repeat(question.answer.length)}</span><span>${question.suffix}</span>
    </div>
    <p class="phonics-answer-note" id="phonicsAnswerNote">提示：先听音素，再想它对应哪一个字母或字母组合。</p>
  `;
  card.append(createPhonicsAudioControls(question.soundId, question.sound));
  layout.append(card);
  panel.append(layout);

  addQuestionChoices(
    panel,
    shuffle(question.choices),
    (choice, button) => checkPhonicsFill(question, choice, button)
  );
  questionArea.append(panel);
}

function checkPhonicsFill(question, choice, button) {
  if (game.locked) return;
  if (choice === question.answer) {
    game.locked = true;
    button.classList.add("correct");
    const fillSlot = $("#fillSlot");
    fillSlot.textContent = question.answer;
    fillSlot.classList.add("is-revealed");
    $("#phonicsAnswerNote").textContent = `${question.answer} 对应 ${question.sound}。${question.note}`;
    markCorrect(question, `音素匹配成功！${question.answer} 对应 ${question.sound}。${question.note}`);
    return;
  }
  playEffect("wrong");
  button.classList.add("wrong");
  setFeedback("这个音素还没对上。点击“听音素”慢慢再听一次。", "try-again");
  window.setTimeout(() => button.classList.remove("wrong"), 470);
}

function activatePhonicsChip(chip, guide) {
  guide.querySelectorAll(".phonics-chip").forEach((item) => item.classList.remove("is-active"));
  chip.classList.add("is-active");
}

function createPhonicsGuide(entry, compact = false) {
  const guide = document.createElement("section");
  guide.className = "phonics-guide";
  const header = document.createElement("div");
  header.className = "phonics-guide-header";
  header.innerHTML = compact
    ? `<strong>音素拼读导航 <span class="word-ipa">${entry.ipa}</span></strong><small>点每一块，听对应发音</small>`
    : `<strong>把字母和读音连起来 <span class="word-ipa">${entry.ipa}</span></strong><small>从左到右点一遍</small>`;

  const chipRow = document.createElement("div");
  chipRow.className = "phonics-chip-row";
  entry.phonics.forEach((segment, index) => {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = `phonics-chip ${segment.kind}`;
    chip.dataset.phonicsIndex = String(index);
    chip.innerHTML = `<span class="grapheme">${segment.letters}</span><span class="phoneme">${segment.sound}</span>`;
    chip.title = segment.note;
    chip.addEventListener("click", () => {
      activeSequence += 1;
      activatePhonicsChip(chip, guide);
      playPhonicsSound(segment.soundId, chip);
    });
    chipRow.append(chip);
  });

  const sequenceButton = createButton("mini-button", "▶ 一段一段拼读", () => {
    playPhonicsSequence(entry, guide);
  });
  header.append(sequenceButton);
  guide.append(header, chipRow);
  return guide;
}

function createPhonicsHint(entry) {
  const hint = document.createElement("section");
  hint.className = "phonics-hint";
  const toggle = createButton("mini-button phonics-hint-toggle", "💡 打开音素导航", () => {
    const isHidden = guide.hidden;
    guide.hidden = !isHidden;
    toggle.textContent = isHidden ? "收起音素导航" : "💡 打开音素导航";
    if (isHidden) {
      setFeedback("音素导航已打开：点每一块，就能听到对应的字母和 IPA 音标。", "");
    }
  });
  const guide = createPhonicsGuide(entry);
  guide.hidden = true;
  hint.append(toggle, guide);
  return hint;
}

async function playPhonicsSequence(entry, guide) {
  const sequenceId = activeSequence + 1;
  activeSequence = sequenceId;
  stopActiveAudio();
  for (let index = 0; index < entry.phonics.length; index += 1) {
    if (sequenceId !== activeSequence) return;
    const segment = entry.phonics[index];
    const chip = guide.querySelector(`[data-phonics-index="${index}"]`);
    if (chip) activatePhonicsChip(chip, guide);
    await playAudioTrackAndWait(audioMaps.phonics.get(segment.soundId), chip, speechRate(false));
    if (sequenceId !== activeSequence) return;
    await new Promise((resolve) => window.setTimeout(resolve, 130));
  }
}

function renderSpellQuestion(entry) {
  game.placedLetters = Array(entry.word.length).fill(null);
  game.selectedLetterId = null;
  const letters = entry.word.split("").map((letter, index) => ({ letter, id: `${letter}-${index}` }));
  const spareLetters = "abcdefghijklmnopqrstuvwxyz"
    .split("")
    .filter((letter) => !entry.word.includes(letter));
  const extras = shuffle(spareLetters).slice(0, 2).map((letter, index) => ({ letter, id: `extra-${letter}-${index}` }));
  game.letterBank = shuffle([...letters, ...extras]);

  const questionArea = $("#questionArea");
  questionArea.replaceChildren();
  const card = document.createElement("section");
  card.className = "spelling-card";
  card.innerHTML = `
    <p class="question-kicker">字母推进器 · 跟着音素拼词</p>
    <h3>先选字母，再点上方格子放进去</h3>
    <p>点已放入的字母可收回。</p>
  `;
  card.append(createAudioControls(entry, "word", "▶ 听完整单词"));
  card.append(createPhonicsHint(entry));

  const display = document.createElement("div");
  display.className = "spelling-display";
  display.id = "spellingDisplay";
  display.setAttribute("aria-label", "已拼出的单词");
  card.append(display);

  const bank = document.createElement("div");
  bank.className = "letter-bank";
  bank.id = "letterBank";
  card.append(bank);

  const actionRow = document.createElement("div");
  actionRow.className = "action-row";
  actionRow.append(createButton("secondary-button check-button", "检查拼写", checkSpelling));
  card.append(actionRow);
  questionArea.append(card);
  updateSpellingBoard();
}

function updateSpellingBoard() {
  const display = $("#spellingDisplay");
  const bank = $("#letterBank");
  if (!display || !bank) return;
  display.replaceChildren();
  const entry = currentRound();
  for (let index = 0; index < entry.word.length; index += 1) {
    const slot = document.createElement("button");
    slot.type = "button";
    const placed = game.placedLetters[index];
    const selected = Boolean(game.selectedLetterId);
    slot.className = `spelling-slot${placed ? " filled" : ""}${!placed && selected ? " is-target" : ""}`;
    slot.textContent = placed ? placed.letter : String(index + 1);
    slot.disabled = game.locked;
    slot.setAttribute("aria-label", placed ? `收回字母 ${placed.letter}` : `把已选字母放入第 ${index + 1} 格`);
    slot.addEventListener("click", () => handleSpellingSlot(index));
    display.append(slot);
  }

  bank.replaceChildren();
  game.letterBank.forEach((item) => {
    const used = game.placedLetters.some((placed) => placed && placed.id === item.id);
    const selected = game.selectedLetterId === item.id;
    const button = createButton(`letter-button${used ? " used" : ""}`, item.letter, () => {
      selectSpellingLetter(item);
    });
    button.classList.toggle("selected", selected);
    button.disabled = used || game.locked;
    button.setAttribute("aria-label", `选择字母 ${item.letter}`);
    bank.append(button);
  });
}

function selectSpellingLetter(item) {
  if (game.locked || game.placedLetters.some((placed) => placed && placed.id === item.id)) return;
  if (game.selectedLetterId === item.id) {
    game.selectedLetterId = null;
    playEffect("delete");
    setFeedback("已取消选择。需要时再点一个字母。", "");
  } else {
    game.selectedLetterId = item.id;
    playEffect("letter");
    setFeedback(`已选字母 ${item.letter}，请点上方想放进去的格子。`, "");
  }
  updateSpellingBoard();
}

function handleSpellingSlot(slotIndex) {
  if (game.locked) return;
  const placed = game.placedLetters[slotIndex];
  const selected = game.letterBank.find((item) => item.id === game.selectedLetterId);
  if (!selected) {
    if (!placed) {
      setFeedback("先从下方选一个字母，再点这个格子。", "");
      return;
    }
    game.placedLetters[slotIndex] = null;
    playEffect("delete");
    setFeedback(`字母 ${placed.letter} 已收回到下方。`, "");
    updateSpellingBoard();
    return;
  }
  game.placedLetters[slotIndex] = selected;
  game.selectedLetterId = null;
  playEffect("letter");
  setFeedback(`字母 ${selected.letter} 已放入第 ${slotIndex + 1} 格。`, "");
  updateSpellingBoard();
}

function checkSpelling() {
  if (game.locked) return;
  const answer = game.placedLetters.map((item) => (item ? item.letter : "")).join("");
  const target = currentRound();
  if (answer === target.word) {
    game.locked = true;
    $("#spellingDisplay").classList.add("correct");
    markCorrect(target, `火箭组装成功！${target.word} ${target.ipa} = ${target.phonics.map((segment) => segment.sound).join(" + ")}。`);
    return;
  }
  if (game.placedLetters.some((item) => !item)) {
    setFeedback("先把所有格子都放上字母，再请飞船电脑检查。", "try-again");
    return;
  }
  playEffect("wrong");
  const display = $("#spellingDisplay");
  display.classList.remove("wrong");
  void display.offsetWidth;
  display.classList.add("wrong");
  setFeedback("推进器顺序还差一点。点已放入的字母收回，再放到正确格子。", "try-again");
}

function renderDictationQuestion(entry) {
  game.typedValue = "";
  const questionArea = $("#questionArea");
  questionArea.replaceChildren();
  const panel = document.createElement("div");
  panel.className = "question-panel";
  const layout = document.createElement("div");
  layout.className = "dictation-layout";
  layout.append(createSceneCard(entry));

  const card = document.createElement("section");
  card.className = "dictation-card";
  card.innerHTML = `
    <p class="question-kicker">飞船终端 · 听音默写</p>
    <h3>听到单词后，自己输入答案</h3>
    <p>输入每个字母都有音效。</p>
  `;
  card.append(createAudioControls(entry, "word", "▶ 接收单词信号"));

  const input = document.createElement("input");
  input.className = "input-answer";
  input.id = "dictationInput";
  input.type = "text";
  input.inputMode = "text";
  input.autocomplete = "off";
  input.autocapitalize = "none";
  input.spellcheck = false;
  input.placeholder = "在终端输入单词";
  card.append(input);

  const phonicsHolder = document.createElement("div");
  phonicsHolder.className = "dictation-phonics";
  phonicsHolder.id = "dictationPhonics";
  phonicsHolder.append(createPhonicsGuide(entry, true));
  card.append(phonicsHolder);

  const actionRow = document.createElement("div");
  actionRow.className = "action-row";
  actionRow.append(
    createButton("secondary-button", "⌫ 删一个", deleteTypedLetter),
    createButton("secondary-button", "音素导航", () => {
      phonicsHolder.classList.toggle("visible");
      if (phonicsHolder.classList.contains("visible")) {
        setFeedback("音素导航已打开：点蓝色小块听对应的字母和读音。", "");
      }
    }),
    createButton("secondary-button", "字母提示", () => {
      setFeedback(`提示：这个单词有 ${entry.word.length} 个字母。`, "");
      input.focus();
    }),
    createButton("secondary-button check-button", "交卷 ✨", checkDictation)
  );
  card.append(actionRow);

  input.addEventListener("input", () => {
    const value = input.value;
    if (value.length > game.typedValue.length) playEffect("type");
    if (value.length < game.typedValue.length) playEffect("delete");
    game.typedValue = value;
  });
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") checkDictation();
  });
  layout.append(card);
  panel.append(layout);
  questionArea.append(panel);
  window.setTimeout(() => input.focus(), 0);
}

function deleteTypedLetter() {
  if (game.locked) return;
  const input = $("#dictationInput");
  if (!input || !input.value) return;
  input.value = input.value.slice(0, -1);
  game.typedValue = input.value;
  playEffect("delete");
  input.focus();
}

function checkDictation() {
  if (game.locked) return;
  const input = $("#dictationInput");
  const answer = input.value.trim().toLowerCase();
  const target = currentRound();
  if (answer === target.word) {
    game.locked = true;
    input.style.borderColor = "#8cf8c7";
    markCorrect(target, `终端答案正确！${target.word} 的意思是“${target.meaning}”。`);
    return;
  }
  playEffect("wrong");
  input.classList.remove("wrong");
  void input.offsetWidth;
  input.classList.add("wrong");
  setFeedback("信号还差一点！慢速回听后，再慢慢输入每个字母。", "try-again");
  input.focus();
}

function renderRound() {
  if (!game.active) return;
  game.locked = false;
  updateStageHeader();
  const stage = currentStage();
  const round = currentRound();
  if (stage.mode === "listening") renderListeningQuestion(round);
  if (stage.mode === "phonicsFill") renderPhonicsFillQuestion(round);
  if (stage.mode === "spell") renderSpellQuestion(round);
  if (stage.mode === "dictation") renderDictationQuestion(round);

  const prompt = stage.mode === "phonicsFill"
    ? "先听目标音素，再从选项里选出对应的字母或组合。"
    : "准备好后，点击播放按钮开始这道任务。";
  setFeedback(prompt, "");
  saveMission(false);
}

function markRoundProgress(round) {
  const stage = currentStage();
  const progress = player.progress[stage.id];
  const id = getRoundId(round);
  if (!progress.includes(id)) progress.push(id);
}

function addStars(amount) {
  player.stars += amount;
  updateStarDisplays();
}

function markCorrect(round, message) {
  const stage = currentStage();
  markRoundProgress(round);
  addStars(stage.reward);
  playEffect("correct");
  setFeedback(`${message} +${stage.reward} 能量星！`, "success");
  createConfetti();
  renderTrainingProjects();
  saveMission(false);
  window.setTimeout(nextRound, 1300);
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
  const stage = currentStage();
  game.active = false;
  player.mission = null;
  addStars(stage.bonus);
  savePlayerProfile(false);
  renderTrainingProjects();
  createConfetti();
  const nextIndex = game.stageIndex + 1;
  if (nextIndex < STAGES.length) {
    $("#completionTitle").textContent = `${stage.title}完成！`;
    $("#completionCopy").textContent = `飞船电脑送你 ${stage.bonus} 颗通关能量星。你可以继续下一站，也能随时返回训练营首页选择项目。`;
    $("#nextStageButton").textContent = `进入第 ${nextIndex + 1} 关 ${STAGES[nextIndex].icon}`;
    $("#nextStageButton").onclick = () => startStage(nextIndex);
    $("#stageCompleteOverlay").hidden = false;
    return;
  }
  showFinish();
}

function startStage(stageIndex, savedRoundIds = null, savedRoundIndex = 0) {
  if (!hasActiveProfile()) {
    openProfileChooser();
    return;
  }
  const source = getStageSource(stageIndex);
  game.stageIndex = stageIndex;
  game.rounds = savedRoundIds ? restoreRounds(stageIndex, savedRoundIds) : shuffle(source);
  game.roundIndex = Math.min(Math.max(0, savedRoundIndex), game.rounds.length - 1);
  game.active = true;
  game.locked = false;
  stopActiveAudio();
  $("#landingScreen").hidden = true;
  $("#gardenScreen").hidden = true;
  $("#workshopScreen").hidden = true;
  $("#finishScreen").hidden = true;
  $("#gameScreen").hidden = false;
  $("#stageCompleteOverlay").hidden = true;
  renderRound();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function startNewMission() {
  startStage(0);
}

function resumeMission() {
  if (!hasActiveProfile()) {
    openProfileChooser();
    return;
  }
  if (!player.mission) {
    showToast("暂时没有可继续的存档。");
    return;
  }
  startStage(player.mission.stageIndex, player.mission.roundIds, player.mission.roundIndex);
}

function saveMission(showConfirmation = false) {
  if (!hasActiveProfile()) {
    if (showConfirmation) openProfileChooser();
    return;
  }
  if (!game.active) {
    if (showConfirmation) showToast("当前没有需要保存的进行中任务。");
    return;
  }
  player.mission = {
    stageIndex: game.stageIndex,
    roundIndex: game.roundIndex,
    roundIds: game.rounds.map((round) => getRoundId(round)),
    savedAt: new Date().toISOString()
  };
  savePlayerProfile(showConfirmation);
}

function returnHome() {
  if (game.active) saveMission(false);
  stopActiveAudio();
  $("#gameScreen").hidden = true;
  $("#gardenScreen").hidden = true;
  $("#workshopScreen").hidden = true;
  $("#finishScreen").hidden = true;
  $("#landingScreen").hidden = false;
  $("#stageCompleteOverlay").hidden = true;
  renderTrainingProjects();
  renderShop();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showFinish() {
  game.active = false;
  player.mission = null;
  savePlayerProfile(false);
  $("#gameScreen").hidden = true;
  $("#gardenScreen").hidden = true;
  $("#workshopScreen").hidden = true;
  $("#landingScreen").hidden = true;
  $("#finishScreen").hidden = false;
  $("#finalScore").textContent = `星际账户现在有 ${player.stars} 颗能量星 ⚡`;
  createConfetti();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function createConfetti() {
  const colors = ["#42d8ff", "#ffe071", "#ff814f", "#76e7d1", "#987cff"];
  for (let index = 0; index < 28; index += 1) {
    const piece = document.createElement("span");
    piece.className = "confetti";
    piece.style.setProperty("--confetti-color", colors[index % colors.length]);
    piece.style.setProperty("--x", `${Math.round((Math.random() - 0.5) * 540)}px`);
    piece.style.setProperty("--y", `${Math.round(120 + Math.random() * 420)}px`);
    piece.style.setProperty("--spin", `${Math.round((Math.random() - 0.5) * 1080)}deg`);
    piece.style.animationDelay = `${Math.random() * 90}ms`;
    document.body.append(piece);
    window.setTimeout(() => piece.remove(), 1300);
  }
}

function createLearningProjectCard(stage, stageIndex) {
  const progress = stageProgress(stage);
  const card = createButton(
    `stage-project-card${progress.completed >= progress.total ? " is-complete" : ""}`,
    "",
    () => startStage(stageIndex)
  );
  card.innerHTML = `
    <span class="stage-project-icon">${stage.icon}</span>
    <span class="stage-project-number">关卡 0${stageIndex + 1}</span>
    <strong>${stage.title}</strong>
    <small class="stage-project-count">${progress.completed} / ${progress.total}</small>
  `;
  card.setAttribute("aria-label", `进入${stage.title}`);
  return card;
}

function createFacilityProjectCard(project) {
  const card = createButton(`facility-card ${project.id}`, "", project.onOpen  );
  card.innerHTML = `
    <span class="facility-icon">${project.icon}</span>
    <span class="facility-type">${project.type}</span>
    <strong>${project.title}</strong>
    <small class="facility-count">${project.progress()}</small>
  `;
  card.setAttribute("aria-label", `进入${project.title}`);
  return card;
}

function renderTrainingProjects() {
  const stageGrid = $("#stageProjectGrid");
  const facilityGrid = $("#facilityProjectGrid");
  stageGrid.replaceChildren();
  facilityGrid.replaceChildren();
  STAGES.forEach((stage, stageIndex) => {
    stageGrid.append(createLearningProjectCard(stage, stageIndex));
  });
  facilityGrid.append(
    createFacilityProjectCard({
      id: "training-camp-project",
      icon: "🛰️",
      type: "单词训练营",
      title: "星图复习",
      progress: () => `${WORDS.length} 个单词`,
      onOpen: openGardenProject
    }),
    createFacilityProjectCard({
      id: "shop-project",
      icon: "🧰",
      type: "火箭商店",
      title: "装备工坊",
      progress: () => `${player.ownedParts.length} / ${ROCKET_PARTS.length} 部件`,
      onOpen: openWorkshopProject
    })
  );
  updateLandingStatus();
}

function openCampProject(screenId) {
  if (!hasActiveProfile()) {
    openProfileChooser();
    return false;
  }
  if (game.active) saveMission(false);
  stopActiveAudio();
  $("#landingScreen").hidden = true;
  $("#gameScreen").hidden = true;
  $("#gardenScreen").hidden = true;
  $("#workshopScreen").hidden = true;
  $("#finishScreen").hidden = true;
  $("#stageCompleteOverlay").hidden = true;
  $(`#${screenId}`).hidden = false;
  window.scrollTo({ top: 0, behavior: "smooth" });
  return true;
}

function openGardenProject() {
  if (!openCampProject("gardenScreen")) return;
  renderGarden();
}

function openWorkshopProject() {
  if (!openCampProject("workshopScreen")) return;
  shopPage = 0;
  $("#shopNotice").textContent = "集齐 20 个不同部件，就能拼出专属火箭。";
  renderShop();
}

function renderGarden() {
  const grid = $("#gardenGrid");
  grid.replaceChildren();
  WORDS.forEach((entry) => {
    const card = createButton(`garden-word${entry.id === gardenWordId ? " selected" : ""}`, "", () => {
      gardenWordId = entry.id;
      renderGarden();
    });
    card.innerHTML = `
      <img src="${entry.image}" alt="">
      <span><strong>${entry.word}</strong><small>${entry.meaning}</small></span>
    `;
    card.setAttribute("aria-label", `查看 ${entry.word} 的音素拼读`);
    grid.append(card);
  });
  renderGardenDetail();
}

function renderGardenDetail() {
  const entry = WORD_BY_ID.get(gardenWordId);
  const detail = $("#gardenDetail");
  detail.replaceChildren();
  const heading = document.createElement("div");
  heading.className = "lab-word-heading";
  heading.innerHTML = `
    <img src="${entry.image}" alt="${entry.visual}">
    <div>
      <h3>${entry.word}</h3>
      <p>${entry.meaning} · ${entry.ipa} · ${entry.visual}</p>
    </div>
  `;
  const sentence = document.createElement("p");
  sentence.className = "lab-sentence";
  sentence.textContent = entry.sentence;
  const controls = document.createElement("div");
  controls.className = "audio-controls";
  const wordButton = createButton("listen-button", "▶ 听单词", () => playWord(entry, wordButton));
  const sentenceButton = createButton("mini-button", "听完整句子", () => playSentence(entry, sentenceButton));
  const slowButton = createButton("mini-button slow-button", "🐢 超慢回听", () => playWord(entry, slowButton, true));
  controls.append(wordButton, sentenceButton, slowButton);

  const guide = createPhonicsGuide(entry, true);
  const note = document.createElement("p");
  note.className = "lab-note";
  note.textContent = "点音素，听字母和读音。";
  detail.append(heading, sentence, controls, guide, note);
}

function renderRocket(container) {
  if (!container) return;
  container.replaceChildren();
  const skeleton = document.createElement("span");
  skeleton.className = "rocket-skeleton";
  container.append(skeleton);
  ROCKET_PARTS.forEach((part) => {
    const partElement = document.createElement("span");
    partElement.className = `rocket-part part-${part.id}${player.ownedParts.includes(part.id) ? " owned" : ""}`;
    partElement.title = part.name;
    if (part.id === "star-decals") partElement.textContent = "✦✦";
    container.append(partElement);
  });
}

function renderShop() {
  renderRocket($("#heroRocket"));
  renderRocket($("#shopRocket"));
  $("#shopBalance").textContent = `⚡ ${player.stars} 能量星`;
  $("#ownedPartsCount").textContent = `${player.ownedParts.length}`;
  $("#totalPartsCount").textContent = `${ROCKET_PARTS.length}`;

  const assemblyGrid = $("#assemblyGrid");
  assemblyGrid.replaceChildren();
  ROCKET_PARTS.forEach((part, index) => {
    const owned = player.ownedParts.includes(part.id);
    const assemblyItem = document.createElement("div");
    assemblyItem.className = `assembly-item${owned ? " owned" : ""}`;
    assemblyItem.innerHTML = `${owned ? part.icon : "□"}<span>${index + 1}. ${part.name}</span>`;
    assemblyGrid.append(assemblyItem);
  });

  const shopGrid = $("#shopGrid");
  shopGrid.replaceChildren();
  const pageCount = Math.ceil(ROCKET_PARTS.length / SHOP_PAGE_SIZE);
  shopPage = Math.min(Math.max(0, shopPage), pageCount - 1);
  $("#shopPageLabel").textContent = `${shopPage + 1} / ${pageCount}`;
  $("#shopPreviousButton").disabled = shopPage === 0;
  $("#shopNextButton").disabled = shopPage === pageCount - 1;
  const visibleParts = ROCKET_PARTS.slice(shopPage * SHOP_PAGE_SIZE, (shopPage + 1) * SHOP_PAGE_SIZE);
  visibleParts.forEach((part) => {
    const owned = player.ownedParts.includes(part.id);
    const canAfford = player.stars >= part.price;
    const item = createButton(
      `shop-item${owned ? " owned" : ""}${!owned && !canAfford ? " cannot-afford" : ""}`,
      "",
      () => buyRocketPart(part)
    );
    item.disabled = owned;
    item.innerHTML = `
      <span class="shop-icon">${part.icon}</span>
      <span>
        <strong>${part.name}</strong>
        <em>${owned ? "✓ 已装配" : `⚡ ${part.price} 能量星`}</em>
      </span>
    `;
    item.setAttribute("aria-label", owned ? `${part.name} 已装配` : `购买 ${part.name}，需要 ${part.price} 能量星`);
    shopGrid.append(item);
  });
}

function buyRocketPart(part) {
  if (player.ownedParts.includes(part.id)) return;
  if (player.stars < part.price) {
    $("#shopNotice").textContent = `还差 ${part.price - player.stars} 颗能量星，继续闯关就能兑换！`;
    playEffect("wrong");
    return;
  }
  player.stars -= part.price;
  player.ownedParts.push(part.id);
  $("#shopNotice").textContent = `已装配 ${part.name}！火箭更完整啦。`;
  playEffect("purchase");
  createConfetti();
  savePlayerProfile(false);
  renderShop();
  renderTrainingProjects();
  showToast(`🚀 ${part.name} 已装上火箭！`);
  if (player.ownedParts.length === ROCKET_PARTS.length) {
    showToast("🏆 20 个部件全部集齐！你的专属火箭完成啦！");
  }
}

function showIpadInstallHint() {
  const isIpad = /iPad/i.test(navigator.userAgent)
    || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  const isStandalone = window.matchMedia("(display-mode: standalone)").matches
    || Boolean(navigator.standalone);
  if (isIpad && !isStandalone) $("#iosInstallTip").hidden = false;
}

function registerServiceWorker() {
  if (!("serviceWorker" in navigator) || !/^https?:$/.test(location.protocol)) return;
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch((error) => {
      console.warn("Offline app setup failed:", error);
    });
  });
}

function toggleFullscreen() {
  if (!document.fullscreenEnabled || !document.documentElement.requestFullscreen) {
    showToast("添加到 iPad 主屏幕后，会以横屏全屏模式打开。");
    return;
  }
  const action = document.fullscreenElement
    ? document.exitFullscreen()
    : document.documentElement.requestFullscreen();
  action.catch((error) => {
    console.warn("Unable to enter fullscreen mode:", error);
    showToast("浏览器没有允许全屏。添加到主屏幕后可获得完整屏幕。");
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
  $("#speedButton").addEventListener("click", () => {
    if (!hasActiveProfile()) {
      openProfileChooser();
      return;
    }
    player.speed = player.speed === "slow" ? "verySlow" : "slow";
    savePlayerProfile(false);
    updateSpeedButton();
    showToast(player.speed === "verySlow" ? "🐢 已切换为超慢速发音。" : "🔊 已切换为慢速发音。");
  });
  $("#fullscreenButton").addEventListener("click", toggleFullscreen);
  $("#saveButton").addEventListener("click", () => saveMission(true));
  $("#shopPreviousButton").addEventListener("click", () => {
    shopPage -= 1;
    renderShop();
  });
  $("#shopNextButton").addEventListener("click", () => {
    shopPage += 1;
    renderShop();
  });
  $("#homeFromCompletionButton").addEventListener("click", returnHome);
  $("#playAgainButton").addEventListener("click", startNewMission);
  $("#cancelDeleteProfileButton").addEventListener("click", cancelProfileDeletion);
  $("#confirmDeleteProfileButton").addEventListener("click", deleteProfile);

  $("#profileGateOverlay").addEventListener("click", (event) => {
    if (event.target === $("#profileGateOverlay")) closeProfileChooser();
  });
  $("#deleteProfileOverlay").addEventListener("click", (event) => {
    if (event.target === $("#deleteProfileOverlay")) cancelProfileDeletion();
  });

  window.addEventListener("pagehide", () => saveMission(false));
}

function initializeGame() {
  preloadAudio();
  wireInterface();
  updateSpeedButton();
  updateLandingStatus();
  renderTrainingProjects();
  renderGarden();
  renderShop();
  renderProfileChooser();
  showIpadInstallHint();
  registerServiceWorker();
  openProfileChooser();
  if (storageWarning) window.setTimeout(() => showToast(storageWarning), 250);
}

initializeGame();
