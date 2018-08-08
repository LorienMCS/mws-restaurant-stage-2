let cacheName = 'restaurants-cache-v1';
let urlsToCache = [
  '/',
  '/restaurant.html',
  '/manifest.json',
  '/css/styles.css',
  '/css/responsive.css',
  '/js/dbhelper.js',
  '/js/main.js',
  '/js/restaurant_info.js',
  '/img/',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      cache.addAll(urlsToCache);
    })
  )
});

self.addEventListener('activate', event => {
  console.log('service worker ready to handle fetches');
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  )
});


