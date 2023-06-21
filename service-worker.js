const CACHE_NAME = 'june-party-calculator-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/script.js',
  '/src/barbecue.png',
  '/src/corn.png',
  '/src/green-soup.png',
  '/src/hot-dog.png',
  '/src/hot-drink.png',
  '/src/ice-cream.png',
  '/src/juice.png',
  '/src/pizza.png',
  '/src/popcorn.png',
  '/src/sausage.png',
  '/src/small-soda.png',
  '/src/water-bottle.png',
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        return response || fetch(event.request);
      })
  );
});
