const CACHE_NAME = 'portfolio-store-v2';
const urlsToCache = [
    './',
    './index.html',
    './style.css',
    './script.js',
    './profile.jpg',
    './manifest.json'
];

self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(urlsToCache);
        })
    );
    self.skipWaiting();
});

self.addEventListener('activate', (e) => {
    e.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
    self.clients.claim();
});

self.addEventListener('fetch', (e) => {
    e.respondWith(
        fetch(e.request).then(response => {
            // Optional: update cache with new network response here
            return response;
        }).catch(() => caches.match(e.request))
    );
});
