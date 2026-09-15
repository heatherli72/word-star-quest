const WORDS = [
  { id: "one", word: "one", meaning: "一", visual: "一颗闪亮的星星", image: "images/one.svg", sentence: "I have one star.", sentenceBlank: "I have ___ star." },
  { id: "two", word: "two", meaning: "二", visual: "两枚蓝色小火箭", image: "images/two.svg", sentence: "Two rockets fly.", sentenceBlank: "___ rockets fly." },
  { id: "three", word: "three", meaning: "三", visual: "三个挥手的小外星人", image: "images/three.svg", sentence: "Three aliens wave.", sentenceBlank: "___ aliens wave." },
  { id: "four", word: "four", meaning: "四", visual: "四颗绕圈的小行星", image: "images/four.svg", sentence: "Four planets spin.", sentenceBlank: "___ planets spin." },
  { id: "eat", word: "eat", meaning: "吃", visual: "小宇航员在吃红苹果", image: "images/eat.svg", sentence: "I eat an apple.", sentenceBlank: "I ___ an apple." },
  { id: "that", word: "that", meaning: "那个 / 那", visual: "手指指向一枚蓝色火箭", image: "images/that.svg", sentence: "That is a blue rocket.", sentenceBlank: "___ is a blue rocket." },
  { id: "they", word: "they", meaning: "他们 / 她们 / 它们", visual: "两个宇航员一起挥手", image: "images/they.svg", sentence: "They play in space.", sentenceBlank: "___ play in space." },
  { id: "like", word: "like", meaning: "喜欢", visual: "宇航员喜欢他的火箭", image: "images/like.svg", sentence: "I like my rocket.", sentenceBlank: "I ___ my rocket." },
  { id: "black", word: "black", meaning: "黑色", visual: "黑猫坐在月亮旁边", image: "images/black.svg", sentence: "The black cat jumps.", sentenceBlank: "The ___ cat jumps." },
  { id: "white", word: "white", meaning: "白色", visual: "白色月亮和白云", image: "images/white.svg", sentence: "A white moon shines.", sentenceBlank: "A ___ moon shines." }
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
  { id: "listening", icon: "📡", title: "雷达听音站", description: "听句子，选单词。", mapDescription: "听句子选单词", mode: "listening", reward: 2, bonus: 8 },
  { id: "soundFill", icon: "🔊", title: "声波填空站", description: "听单词，补字母。", mapDescription: "听读音填空", mode: "soundFill", reward: 2, bonus: 8 },
  { id: "spell", icon: "🧩", title: "字母拼装舱", description: "拖动字母，拼单词。", mapDescription: "拖拽字母拼词", mode: "spell", reward: 3, bonus: 10 },
  { id: "dictation", icon: "⌨️", title: "星际默写台", description: "听单词，写答案。", mapDescription: "听音默写", mode: "dictation", reward: 4, bonus: 12 }
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

const GEAR_TYPES = [
  { id: "rocket", name: "火箭", emoji: "🚀" },
  { id: "ship", name: "飞船", emoji: "🛸" },
  { id: "suit", name: "外星服", emoji: "👽" },
  { id: "helmet", name: "太空头盔", emoji: "🪖" },
  { id: "jetpack", name: "喷气背包", emoji: "🎒" },
  { id: "rover", name: "星球车", emoji: "🛞" },
  { id: "robot", name: "机器人", emoji: "🤖" },
  { id: "flag", name: "星际旗帜", emoji: "🚩" },
  { id: "glider", name: "飞行滑板", emoji: "🛹" },
  { id: "badge", name: "探险徽章", emoji: "🏅" }
];

const GEAR_ITEMS = [
  { id: "rocket-scout", type: "rocket", emoji: "🚀", name: "流星火箭", price: 6 },
  { id: "rocket-turbo", type: "rocket", emoji: "🚀", name: "涡轮火箭", price: 16 },
  { id: "ship-orbit", type: "ship", emoji: "🛸", name: "轨道飞船", price: 9 },
  { id: "ship-nebula", type: "ship", emoji: "🛸", name: "星云飞船", price: 18 },
  { id: "suit-green", type: "suit", emoji: "👽", name: "绿光外星服", price: 8 },
  { id: "suit-purple", type: "suit", emoji: "👾", name: "紫电外星服", price: 18 },
  { id: "helmet-crystal", type: "helmet", emoji: "🪖", name: "水晶头盔", price: 7 },
  { id: "helmet-comet", type: "helmet", emoji: "⛑️", name: "彗星头盔", price: 14 },
  { id: "jetpack-blue", type: "jetpack", emoji: "🎒", name: "蓝焰背包", price: 11 },
  { id: "jetpack-flame", type: "jetpack", emoji: "🔥", name: "烈焰背包", price: 19 },
  { id: "rover-moon", type: "rover", emoji: "🛞", name: "月球星车", price: 10 },
  { id: "rover-mars", type: "rover", emoji: "🔴", name: "火星星车", price: 17 },
  { id: "robot-pip", type: "robot", emoji: "🤖", name: "小派机器人", price: 12 },
  { id: "robot-orbit", type: "robot", emoji: "🦾", name: "轨道机甲", price: 22 },
  { id: "flag-moon", type: "flag", emoji: "🚩", name: "月球旗帜", price: 5 },
  { id: "flag-star", type: "flag", emoji: "🏳️", name: "星星旗帜", price: 13 },
  { id: "glider-asteroid", type: "glider", emoji: "🛹", name: "陨石滑板", price: 15 },
  { id: "glider-comet", type: "glider", emoji: "☄️", name: "彗星滑板", price: 24 },
  { id: "badge-sun", type: "badge", emoji: "🏅", name: "太阳徽章", price: 7 },
  { id: "badge-galaxy", type: "badge", emoji: "🌌", name: "银河徽章", price: 20 }
];

const LEGACY_GEAR_MAP = {
  "nose-cone": "rocket-scout",
  "cockpit-glass": "rocket-turbo",
  antenna: "ship-orbit",
  "navigation-light": "ship-nebula",
  "hull-core": "suit-green",
  "left-wing": "suit-purple",
  "right-wing": "helmet-crystal",
  "left-fin": "helmet-comet",
  "right-fin": "jetpack-blue",
  "fuel-tank": "jetpack-flame",
  "engine-core": "rover-moon",
  "left-thruster": "rover-mars",
  "right-thruster": "robot-pip",
  "plasma-flame": "robot-orbit",
  "shield-ring": "flag-moon",
  "star-decals": "flag-star",
  "radar-dish": "glider-asteroid",
  "turbo-booster": "glider-comet",
  "moon-flag": "badge-sun",
  "captain-seat": "badge-galaxy"
};

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
const GEAR_IDS = new Set(GEAR_ITEMS.map((item) => item.id));
const PROFILE_STORE_KEY = "word-space-quest-profiles-v6";
const LEGACY_PROFILE_KEYS = ["word-space-quest-profiles-v5", "word-space-quest-profile-v4"];
const SHOP_PAGE_SIZE = 6;
const $ = (selector) => document.querySelector(selector);

const game = {
  active: false,
  stageIndex: 0,
  roundIndex: 0,
  rounds: [],
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
    version: 6,
    stars: 20,
    ownedGear: [],
    progress: {
      listening: [],
      soundFill: [],
      spell: [],
      dictation: []
    },
    mission: null,
    speed: "slow",
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

  profile.stars = Number.isFinite(Number(candidate.stars))
    ? Math.max(0, Math.floor(Number(candidate.stars)))
    : profile.stars;
  const ownedSource = Array.isArray(candidate.ownedGear)
    ? candidate.ownedGear
    : Array.isArray(candidate.ownedParts) ? candidate.ownedParts : [];
  profile.ownedGear = [...new Set(ownedSource
    .map((itemId) => LEGACY_GEAR_MAP[itemId] || itemId)
    .filter((itemId) => GEAR_IDS.has(itemId)))];
  profile.speed = candidate.speed === "verySlow" ? "verySlow" : "slow";
  profile.updatedAt = typeof candidate.updatedAt === "string" ? candidate.updatedAt : null;

  if (candidate.progress && typeof candidate.progress === "object") {
    STAGES.forEach((stage, stageIndex) => {
      const validIds = new Set(getStageSource(stageIndex).map((item) => item.id));
      const savedIds = candidate.progress[stage.id];
      profile.progress[stage.id] = Array.isArray(savedIds)
        ? [...new Set(savedIds.filter((itemId) => validIds.has(itemId)))]
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
        roundIds: roundIds.filter((itemId) => typeof itemId === "string"),
        savedAt: typeof candidate.mission.savedAt === "string" ? candidate.mission.savedAt : null
      };
    }
  }
  return profile;
}

function createDefaultSaveBook() {
  return { version: 6, activeProfileId: null, profiles: [] };
}

function normalizeSaveBook(candidate) {
  const book = createDefaultSaveBook();
  if (!candidate || typeof candidate !== "object" || !Array.isArray(candidate.profiles)) return book;
  const ids = new Set();
  candidate.profiles.slice(0, 8).forEach((savedProfile) => {
    const profile = normalizeProfile(savedProfile);
    if (!ids.has(profile.id)) {
      ids.add(profile.id);
      book.profiles.push(profile);
    }
  });
  if (typeof candidate.activeProfileId === "string" && ids.has(candidate.activeProfileId)) {
    book.activeProfileId = candidate.activeProfileId;
  }
  return book;
}

function loadSaveBook() {
  const fallback = createDefaultSaveBook();
  try {
    const raw = localStorage.getItem(PROFILE_STORE_KEY);
    if (raw) return normalizeSaveBook(JSON.parse(raw));
    for (const key of LEGACY_PROFILE_KEYS) {
      const legacyRaw = localStorage.getItem(key);
      if (!legacyRaw) continue;
      const legacyBook = key.endsWith("v5")
        ? normalizeSaveBook(JSON.parse(legacyRaw))
        : { version: 6, activeProfileId: null, profiles: [normalizeProfile(JSON.parse(legacyRaw), "小宇航员")] };
      if (legacyBook.profiles.length && !legacyBook.activeProfileId) {
        legacyBook.activeProfileId = legacyBook.profiles[0].id;
      }
      return legacyBook;
    }
    return fallback;
  } catch (error) {
    storageWarning = "旧存档无法读取，已创建新的训练档案。";
    console.warn("Unable to load saves:", error);
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
    console.warn("Unable to write saves:", error);
    return false;
  }
}

function savePlayerProfile(showConfirmation = false) {
  if (!hasActiveProfile()) {
    if (showConfirmation) openProfileChooser();
    return false;
  }
  player.updatedAt = new Date().toISOString();
  if (!persistSaveBook()) {
    if (showConfirmation) showToast("存档失败，请检查浏览器存储权限。");
    return false;
  }
  updateHome();
  if (showConfirmation) showToast(`💾 ${player.name} 的进度已保存。`);
  return true;
}

function shuffle(items) {
  const result = [...items];
  for (let index = result.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [result[index], result[swapIndex]] = [result[swapIndex], result[index]];
  }
  return result;
}

function stageProgress(stage, stageIndex) {
  const known = new Set(player.progress[stage.id] || []);
  return { completed: known.size, total: getStageSource(stageIndex).length };
}

function totalTrainingProgress() {
  return STAGES.reduce((sum, stage, index) => sum + stageProgress(stage, index).completed, 0);
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

function updateHome() {
  updateProfileDisplay();
  const ready = hasActiveProfile();
  $("#resumeButton").hidden = !ready || !player.mission;
  $("#heroGearCount").textContent = `${ready ? player.ownedGear.length : 0} / ${GEAR_ITEMS.length}`;
  $("#homeTrainingCount").textContent = `${ready ? totalTrainingProgress() : 0} / 40`;
  $("#saveNote").textContent = ready && player.mission
    ? `上次：${STAGES[player.mission.stageIndex].title} · 第 ${player.mission.roundIndex + 1} 题`
    : "自动存档已开启";
  updateStarDisplays();
  renderHeroShip();
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("visible");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("visible"), 2200);
}

function renderAvatarChoices() {
  const grid = $("#avatarGrid");
  grid.replaceChildren();
  AVATARS.forEach((avatar) => {
    const button = createButton(`avatar-choice${avatar.id === selectedAvatarId ? " selected" : ""}`, "", () => {
      selectedAvatarId = avatar.id;
      renderAvatarChoices();
    });
    button.innerHTML = `<span>${avatar.emoji}</span><small>${avatar.label}</small>`;
    button.setAttribute("aria-label", `选择${avatar.label}`);
    grid.append(button);
  });
}

function renderProfileChooser() {
  const grid = $("#profileGrid");
  grid.replaceChildren();
  if (!saveBook.profiles.length) {
    const empty = document.createElement("p");
    empty.className = "empty-profile-note";
    empty.textContent = "输入名字，选择头像，开始训练。";
    grid.append(empty);
  }
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
    const gear = document.createElement("small");
    gear.textContent = `${profile.ownedGear.length} / ${GEAR_ITEMS.length} 装备`;
    details.append(name, gear);
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
    grid.append(card);
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
  renderShop();
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
  $("#profileNameInput").focus();
}

function createProfileFromForm() {
  const name = cleanPlayerName($("#profileNameInput").value);
  if (!name) {
    $("#profileFormMessage").textContent = "请输入名字。";
    $("#profileNameInput").focus();
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
    const oldName = profile.name;
    const oldAvatar = profile.avatarId;
    profile.name = name;
    profile.avatarId = selectedAvatarId;
    profile.updatedAt = new Date().toISOString();
    if (!persistSaveBook()) {
      profile.name = oldName;
      profile.avatarId = oldAvatar;
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

function cancelProfileEdit() {
  resetProfileForm();
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
  const activeWasDeleted = profile.id === saveBook.activeProfileId;
  saveBook.profiles = saveBook.profiles.filter((item) => item.id !== profile.id);
  if (activeWasDeleted) saveBook.activeProfileId = null;
  if (!persistSaveBook()) {
    saveBook.profiles = previousProfiles;
    saveBook.activeProfileId = previousActiveProfileId;
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
    game.rounds = [];
    stopActiveVoice();
    clearActiveDrag();
    showOnlyScreen("landingScreen");
  }
  renderProfileChooser();
  renderTrainingProjects();
  renderGarden();
  renderShop();
  updateHome();
  showToast(`已删除 ${profile.name} 的档案。`);
}

function preloadAudio() {
  WORDS.forEach((entry) => {
    const wordAudio = createAudio(`audio/${entry.id}.mp3`);
    const sentenceAudio = createAudio(`audio/sentences/${entry.id}.mp3`);
    audioMaps.word.set(entry.id, wordAudio);
    audioMaps.sentence.set(entry.id, sentenceAudio);
  });
  Object.entries(SFX_TRACKS).forEach(([name, source]) => {
    const sound = createAudio(source);
    sound.volume = name === "correct" || name === "purchase" ? 0.42 : 0.3;
    audioMaps.sfx.set(name, sound);
  });
  Object.entries(BACKGROUND_TRACKS).forEach(([screenId, source]) => {
    const music = createAudio(source);
    music.loop = true;
    music.volume = 0.13;
    audioMaps.bgm.set(screenId, music);
  });
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
  audio.addEventListener("error", () => {
    if (audio === activeVoice) {
      activeVoice = null;
      if (activeVoiceButton) activeVoiceButton.classList.remove("is-playing");
      activeVoiceButton = null;
      if (game.active) setFeedback("音频加载失败，请稍后再试。", "try-again");
    }
  });
  return audio;
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

function voiceRate(slowReplay = false) {
  if (slowReplay) return 0.56;
  return player.speed === "verySlow" ? 0.66 : 0.82;
}

function playVoice(audio, button, slowReplay = false) {
  primeAudio();
  stopActiveVoice();
  if (!audio) return;
  activeVoice = audio;
  activeVoiceButton = button || null;
  if (activeVoiceButton) activeVoiceButton.classList.add("is-playing");
  audio.currentTime = 0;
  audio.playbackRate = voiceRate(slowReplay);
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

function updateSpeedButton() {
  const button = $("#speedButton");
  const verySlow = player.speed === "verySlow";
  button.textContent = verySlow ? "🐢 超慢" : "🔊 慢速";
  button.title = verySlow ? "当前超慢速，点击切回慢速。" : "当前慢速，点击切换超慢速。";
}

function createButton(className, text, onClick) {
  const button = document.createElement("button");
  button.className = className;
  button.type = "button";
  button.textContent = text;
  if (onClick) button.addEventListener("click", onClick);
  return button;
}

function setFeedback(message, kind = "") {
  const feedback = $("#feedback");
  feedback.className = `feedback ${kind}`.trim();
  feedback.textContent = message;
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

function createVoiceControls(entry, kind, label) {
  const controls = document.createElement("div");
  controls.className = "audio-controls";
  const main = createButton("listen-button", label, () => {
    playVoice(audioMaps[kind].get(entry.id), main);
  });
  const slow = createButton("mini-button slow-button", "🐢 超慢", () => {
    playVoice(audioMaps[kind].get(entry.id), slow, true);
  });
  controls.append(main, slow);
  return controls;
}

function updateStageHeader() {
  const stage = STAGES[game.stageIndex];
  $("#stageIcon").textContent = stage.icon;
  $("#stageTitle").textContent = stage.title;
  $("#stageDescription").textContent = stage.description;
  $("#roundText").textContent = `${game.roundIndex + 1} / ${game.rounds.length}`;
  $("#roundFill").style.width = `${(game.roundIndex / game.rounds.length) * 100}%`;
}

function addChoiceGrid(parent, choices, onChoice) {
  const grid = document.createElement("div");
  grid.className = "choice-grid";
  choices.forEach((choice) => {
    const button = createButton("choice-button", choice.label || choice, () => onChoice(choice, button));
    grid.append(button);
  });
  parent.append(grid);
}

function renderListeningQuestion(entry) {
  const area = $("#questionArea");
  area.replaceChildren();
  const panel = document.createElement("div");
  panel.className = "question-panel listening-question";
  const layout = document.createElement("div");
  layout.className = "question-layout";
  layout.append(createSceneCard(entry));
  const context = document.createElement("section");
  context.className = "mission-card";
  context.innerHTML = `<span>任务句子</span><strong class="sentence-line" id="sentenceLine">${entry.sentenceBlank}</strong>`;
  context.append(createVoiceControls(entry, "sentence", "▶ 听句子"));
  layout.append(context);
  panel.append(layout);
  addChoiceGrid(
    panel,
    shuffle([{ label: entry.word, entry }, ...shuffle(WORDS.filter((word) => word.id !== entry.id)).slice(0, 3).map((word) => ({ label: word.word, entry: word }))]),
    (option, button) => checkListeningAnswer(entry, option.entry, button)
  );
  area.append(panel);
}

function checkListeningAnswer(target, selected, button) {
  if (game.locked) return;
  if (target.id !== selected.id) {
    playEffect("wrong");
    button.classList.add("wrong");
    setFeedback("再听一次。", "try-again");
    window.setTimeout(() => button.classList.remove("wrong"), 430);
    return;
  }
  game.locked = true;
  button.classList.add("correct");
  $("#sentenceLine").textContent = target.sentence;
  $("#sentenceLine").classList.add("revealed");
  markCorrect(target, `答对了！${target.meaning}`);
}

function renderSoundFillQuestion(question) {
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
  card.innerHTML = `
    <span>听单词，补上字母</span>
    <div class="fill-word"><b>${question.prefix}</b><b class="fill-slot" id="fillSlot">${"_".repeat(question.answer.length)}</b><b>${question.suffix}</b></div>
  `;
  card.append(createVoiceControls(entry, "word", "▶ 听单词"));
  layout.append(card);
  panel.append(layout);
  addChoiceGrid(panel, shuffle(question.choices), (choice, button) => checkFillAnswer(question, choice, button));
  area.append(panel);
}

function checkFillAnswer(question, choice, button) {
  if (game.locked) return;
  if (choice !== question.answer) {
    playEffect("wrong");
    button.classList.add("wrong");
    setFeedback("再听一次。", "try-again");
    window.setTimeout(() => button.classList.remove("wrong"), 430);
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
  const letters = entry.word.split("").map((letter, index) => ({ id: `${letter}-${index}`, letter }));
  const extras = shuffle("abcdefghijklmnopqrstuvwxyz".split("").filter((letter) => !entry.word.includes(letter)))
    .slice(0, 2)
    .map((letter, index) => ({ id: `extra-${letter}-${index}`, letter }));
  game.letterBank = shuffle([...letters, ...extras]);
}

function renderSpellQuestion(entry) {
  prepareSpellQuestion(entry);
  const area = $("#questionArea");
  area.replaceChildren();
  const card = document.createElement("section");
  card.className = "drag-card";
  card.innerHTML = `<span>拖动字母到格子里</span><h3>${entry.word.length} 个字母</h3>`;
  card.append(createVoiceControls(entry, "word", "▶ 听单词"));
  const slots = document.createElement("div");
  slots.className = "spelling-slots";
  slots.id = "spellingSlots";
  const bank = document.createElement("div");
  bank.className = "letter-bank";
  bank.id = "letterBank";
  card.append(slots, bank, createButton("primary-button check-button", "检查", checkSpelling));
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
    slot.setAttribute("aria-label", item ? `拖动字母 ${item.letter}` : `第 ${index + 1} 个空格`);
    if (item) slot.addEventListener("pointerdown", (event) => startLetterDrag(event, item, index));
    slots.append(slot);
  });
  bank.replaceChildren();
  game.letterBank.forEach((item) => {
    const isUsed = game.placedLetters.some((placed) => placed && placed.id === item.id);
    const tile = document.createElement("button");
    tile.type = "button";
    tile.className = `letter-tile${isUsed ? " used" : ""}`;
    tile.textContent = item.letter;
    tile.disabled = isUsed || game.locked;
    tile.setAttribute("aria-label", `拖动字母 ${item.letter}`);
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
  const target = document.elementFromPoint(event.clientX, event.clientY);
  const slot = target && target.closest(".spelling-slot");
  if (slot) slot.classList.add("drop-target");
}

function finishLetterDrag(event) {
  if (!activeDrag || event.pointerId !== activeDrag.pointerId) return;
  const target = document.elementFromPoint(event.clientX, event.clientY);
  const slot = target && target.closest(".spelling-slot");
  const destinationIndex = slot ? Number(slot.dataset.slotIndex) : null;
  const drag = activeDrag;
  clearActiveDrag();
  if (Number.isInteger(destinationIndex)) {
    const displaced = game.placedLetters[destinationIndex];
    if (drag.fromSlotIndex === null) {
      game.placedLetters[destinationIndex] = drag.item;
    } else if (drag.fromSlotIndex !== destinationIndex) {
      game.placedLetters[drag.fromSlotIndex] = displaced || null;
      game.placedLetters[destinationIndex] = drag.item;
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
  const answer = game.placedLetters.map((item) => item ? item.letter : "").join("");
  const target = currentRound();
  if (game.placedLetters.some((item) => !item)) {
    setFeedback("把字母都拖进去。", "try-again");
    return;
  }
  if (answer !== target.word) {
    playEffect("wrong");
    setFeedback("顺序再试一次。", "try-again");
    return;
  }
  game.locked = true;
  markCorrect(target, "拼对了！");
}

function renderDictationQuestion(entry) {
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
  card.innerHTML = "<span>听单词，写答案</span><h3>输入你记住的单词</h3>";
  card.append(createVoiceControls(entry, "word", "▶ 听单词"));
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
    createButton("mini-button", "⌫ 删除", () => {
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
  const answer = input.value.trim().toLowerCase();
  const target = currentRound();
  if (answer !== target.word) {
    playEffect("wrong");
    input.classList.remove("wrong");
    void input.offsetWidth;
    input.classList.add("wrong");
    setFeedback("再听一次。", "try-again");
    input.focus();
    return;
  }
  game.locked = true;
  input.classList.add("correct");
  markCorrect(target, `答对了！${target.meaning}`);
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
  if (stage.mode === "listening") renderListeningQuestion(round);
  if (stage.mode === "soundFill") renderSoundFillQuestion(round);
  if (stage.mode === "spell") renderSpellQuestion(round);
  if (stage.mode === "dictation") renderDictationQuestion(round);
  setFeedback(stage.mode === "spell" ? "拖动字母到上方格子。" : "点击播放按钮开始。");
  saveMission(false);
}

function markRoundProgress(round) {
  const stage = STAGES[game.stageIndex];
  const progress = player.progress[stage.id];
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
    $("#completionCopy").textContent = `获得 ${stage.bonus} 颗能量星。`;
    $("#nextStageButton").textContent = "下一关";
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

function saveMission(showConfirmation = false) {
  if (!hasActiveProfile()) {
    if (showConfirmation) openProfileChooser();
    return;
  }
  if (!game.active) {
    if (showConfirmation) showToast("当前没有进行中的任务。");
    return;
  }
  player.mission = {
    stageIndex: game.stageIndex,
    roundIndex: game.roundIndex,
    roundIds: game.rounds.map((round) => round.id),
    savedAt: new Date().toISOString()
  };
  savePlayerProfile(showConfirmation);
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
  renderShop();
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
  shopPage = 0;
  renderShop();
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
    piece.style.setProperty("--x", `${Math.round((Math.random() - 0.5) * 540)}px`);
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
    <span class="stage-project-icon">${stage.icon}</span>
    <span class="stage-project-number">关卡 0${stageIndex + 1}</span>
    <strong>${stage.title}</strong>
    <small>${stage.mapDescription}</small>
    <small class="stage-project-count">${progress.completed} / ${progress.total}</small>
  `;
  return card;
}

function createFacilityCard(type, title, icon, count, onClick) {
  const card = createButton(`facility-card ${type}`, "", onClick);
  card.innerHTML = `<span class="facility-icon">${icon}</span><span class="facility-type">${type === "training" ? "单词训练营" : "装备工坊"}</span><strong>${title}</strong><small class="facility-count">${count}</small>`;
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
    createFacilityCard("shop", "装备工坊", "🧰", `${player.ownedGear.length} / ${GEAR_ITEMS.length} 装备`, openWorkshopProject)
  );
  updateHome();
}

function renderGarden() {
  const grid = $("#gardenGrid");
  grid.replaceChildren();
  WORDS.forEach((entry) => {
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
  const sentence = document.createElement("p");
  sentence.className = "lab-sentence";
  sentence.textContent = entry.sentence;
  const controls = document.createElement("div");
  controls.className = "audio-controls";
  const wordButton = createButton("listen-button", "▶ 听单词", () => playVoice(audioMaps.word.get(entry.id), wordButton));
  const sentenceButton = createButton("mini-button", "听句子", () => playVoice(audioMaps.sentence.get(entry.id), sentenceButton));
  const slowButton = createButton("mini-button slow-button", "🐢 超慢", () => playVoice(audioMaps.word.get(entry.id), slowButton, true));
  controls.append(wordButton, sentenceButton, slowButton);
  const letters = document.createElement("div");
  letters.className = "letter-trail";
  entry.word.split("").forEach((letter) => {
    const tile = createButton("memory-letter", letter, () => playEffect("tap"));
    letters.append(tile);
  });
  detail.append(heading, sentence, controls, letters);
}

function renderHeroShip() {
  const heroShip = $("#heroShip");
  if (!heroShip) return;
  const featured = player.ownedGear.slice(0, 4)
    .map((itemId) => GEAR_ITEMS.find((item) => item.id === itemId))
    .filter(Boolean);
  heroShip.replaceChildren();
  const glow = document.createElement("span");
  glow.className = "ship-glow";
  const ship = document.createElement("span");
  ship.className = "ship-icon";
  ship.textContent = player.ownedGear.length >= 10 ? "🛸" : "🚀";
  const orbit = document.createElement("span");
  orbit.className = "ship-orbit";
  heroShip.append(glow, orbit, ship);
  featured.forEach((item, index) => {
    const gear = document.createElement("span");
    gear.className = `hero-gear hero-gear-${index}`;
    gear.textContent = item.emoji;
    heroShip.append(gear);
  });
}

function renderGearGallery() {
  const gallery = $("#gearGallery");
  gallery.replaceChildren();
  GEAR_TYPES.forEach((type) => {
    const owned = player.ownedGear
      .map((itemId) => GEAR_ITEMS.find((item) => item.id === itemId))
      .filter((item) => item && item.type === type.id).length;
    const card = document.createElement("article");
    card.className = `gear-showcase-card${owned ? " owned" : ""}`;
    card.innerHTML = `<span class="gear-art">${type.emoji}</span><strong>${type.name}</strong><small>${owned} / 2</small>`;
    gallery.append(card);
  });
}

function renderShop() {
  renderHeroShip();
  renderGearGallery();
  $("#shopBalance").textContent = `⚡ ${player.stars}`;
  $("#ownedGearCount").textContent = `${player.ownedGear.length}`;
  $("#totalGearCount").textContent = `${GEAR_ITEMS.length}`;
  const pageCount = Math.ceil(GEAR_ITEMS.length / SHOP_PAGE_SIZE);
  shopPage = Math.min(Math.max(0, shopPage), pageCount - 1);
  $("#shopPageLabel").textContent = `${shopPage + 1} / ${pageCount}`;
  $("#shopPreviousButton").disabled = shopPage === 0;
  $("#shopNextButton").disabled = shopPage === pageCount - 1;
  const grid = $("#shopGrid");
  grid.replaceChildren();
  GEAR_ITEMS.slice(shopPage * SHOP_PAGE_SIZE, (shopPage + 1) * SHOP_PAGE_SIZE).forEach((item) => {
    const owned = player.ownedGear.includes(item.id);
    const card = createButton(`shop-item${owned ? " owned" : ""}`, "", () => buyGear(item));
    card.disabled = owned;
    card.innerHTML = `<span class="shop-icon">${item.emoji}</span><span><small>${GEAR_TYPES.find((type) => type.id === item.type).name}</small><strong>${item.name}</strong><em>${owned ? "已收藏" : `⚡ ${item.price}`}</em></span>`;
    grid.append(card);
  });
}

function buyGear(item) {
  if (player.ownedGear.includes(item.id)) return;
  if (player.stars < item.price) {
    playEffect("wrong");
    $("#shopNotice").textContent = `还差 ${item.price - player.stars} ⚡`;
    return;
  }
  player.stars -= item.price;
  player.ownedGear.push(item.id);
  playEffect("purchase");
  createConfetti();
  savePlayerProfile(false);
  $("#shopNotice").textContent = `已收藏 ${item.name}！`;
  renderShop();
  renderTrainingProjects();
}

function showIpadInstallHint() {
  const isIpad = /iPad/i.test(navigator.userAgent)
    || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  const standalone = window.matchMedia("(display-mode: standalone)").matches || Boolean(navigator.standalone);
  if (isIpad && !standalone) $("#iosInstallTip").hidden = false;
}

function toggleFullscreen() {
  if (!document.fullscreenEnabled || !document.documentElement.requestFullscreen) {
    showToast("添加到主屏幕后可全屏打开。");
    return;
  }
  const action = document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen();
  action.catch((error) => {
    console.warn("Unable to enter fullscreen:", error);
    showToast("浏览器未允许全屏。");
  });
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
  $("#speedButton").addEventListener("click", () => {
    if (!hasActiveProfile()) {
      openProfileChooser();
      return;
    }
    player.speed = player.speed === "slow" ? "verySlow" : "slow";
    savePlayerProfile(false);
    updateSpeedButton();
    showToast(player.speed === "verySlow" ? "🐢 超慢速" : "🔊 慢速");
  });
  $("#fullscreenButton").addEventListener("click", toggleFullscreen);
  $("#saveButton").addEventListener("click", () => saveMission(true));
  $("#homeFromCompletionButton").addEventListener("click", returnHome);
  $("#playAgainButton").addEventListener("click", startNewMission);
  $("#shopPreviousButton").addEventListener("click", () => {
    shopPage -= 1;
    renderShop();
  });
  $("#shopNextButton").addEventListener("click", () => {
    shopPage += 1;
    renderShop();
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
  updateSpeedButton();
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
