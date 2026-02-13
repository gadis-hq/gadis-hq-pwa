const CACHE_NAME = "gadis-hq-v1";

const urlsToCache = [
  "https://gadishq.blogspot.com/p/dashboard-hq.html"
];

self.addEventListener("install", function(event){
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", function(event){
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
