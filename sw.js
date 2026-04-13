const CACHE_NAME = 'portfolio-store-v2';
const urlsToCache = [
    './',
    './index.html',
    './style.css',
    './script.js',
    './profile.jpg',
    './manifest.json',
    './sw-register.js',
    './cv.html',
    './images/food-ordering.png',
    './images/transport-tracking.png',
    './images/employee-management.png',
    './images/course-registration.png',
    './images/movie-streaming.png',
    './projects/food-ordering.html',
    './projects/transport-tracking.html',
    './projects/employee-management.html',
    './projects/course-registration.html',
    './projects/movie-streaming.html'
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
