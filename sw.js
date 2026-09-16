const CACHE_NAME = "word-star-quest-v31";
const APP_SHELL = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./manifest.webmanifest",
  "./sw.js",
  "./iPad-使用说明.txt",
  "./icons/icon-180.png",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./images/backgrounds/orion-nebula.jpg",
  "./images/backgrounds/andromeda-galaxy.jpg",
  "./images/backgrounds/mars-rover.jpg",
  "./images/one.svg",
  "./images/two.svg",
  "./images/three.svg",
  "./images/four.svg",
  "./images/eat.svg",
  "./images/that.svg",
  "./images/they.svg",
  "./images/like.svg",
  "./images/black.svg",
  "./images/white.svg",
  "./audio/one.mp3",
  "./audio/two.mp3",
  "./audio/three.mp3",
  "./audio/four.mp3",
  "./audio/eat.mp3",
  "./audio/that.mp3",
  "./audio/they.mp3",
  "./audio/like.mp3",
  "./audio/black.mp3",
  "./audio/white.mp3",
  "./audio/bonus/space.mp3",
  "./audio/sentences/one-1.mp3",
  "./audio/sentences/one-2.mp3",
  "./audio/sentences/one-3.mp3",
  "./audio/sentences/two-1.mp3",
  "./audio/sentences/two-2.mp3",
  "./audio/sentences/two-3.mp3",
  "./audio/sentences/three-1.mp3",
  "./audio/sentences/three-2.mp3",
  "./audio/sentences/three-3.mp3",
  "./audio/sentences/four-1.mp3",
  "./audio/sentences/four-2.mp3",
  "./audio/sentences/four-3.mp3",
  "./audio/sentences/eat-1.mp3",
  "./audio/sentences/eat-2.mp3",
  "./audio/sentences/eat-3.mp3",
  "./audio/sentences/that-1.mp3",
  "./audio/sentences/that-2.mp3",
  "./audio/sentences/that-3.mp3",
  "./audio/sentences/they-1.mp3",
  "./audio/sentences/they-2.mp3",
  "./audio/sentences/they-3.mp3",
  "./audio/sentences/like-1.mp3",
  "./audio/sentences/like-2.mp3",
  "./audio/sentences/like-3.mp3",
  "./audio/sentences/black-1.mp3",
  "./audio/sentences/black-2.mp3",
  "./audio/sentences/black-3.mp3",
  "./audio/sentences/white-1.mp3",
  "./audio/sentences/white-2.mp3",
  "./audio/sentences/white-3.mp3",
  "./audio/sfx/tap.wav",
  "./audio/sfx/type.wav",
  "./audio/sfx/delete.wav",
  "./audio/sfx/wrong.wav",
  "./audio/sfx/correct.wav",
  "./audio/sfx/purchase.wav",
  "./audio/sfx/enter.wav",
  "./audio/bgm/home.wav",
  "./audio/bgm/garden.wav",
  "./audio/bgm/workshop.wav"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  const requestUrl = new URL(event.request.url);
  if (requestUrl.origin !== self.location.origin) return;

  if (event.request.mode === "navigate") {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
          return response;
        })
        .catch(() => caches.match(event.request).then((cached) => cached || caches.match("./index.html")))
    );
    return;
  }

  event.respondWith(caches.match(event.request).then((cached) => cached || fetch(event.request)));
});
