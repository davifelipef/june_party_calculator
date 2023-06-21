const CACHE_NAME = 'june-party-calculator-v2';
const urlsToCache = [
  '/june_party_calculator/',
  '/june_party_calculator/index.html',
  '/june_party_calculator/style.css',
  '/june_party_calculator/script.js',
  '/june_party_calculator/src/barbecue.png',
  '/june_party_calculator/src/corn.png',
  '/june_party_calculator/src/green-soup.png',
  '/june_party_calculator/src/hot-dog.png',
  '/june_party_calculator/src/hot-drink.png',
  '/june_party_calculator/src/ice-cream.png',
  '/june_party_calculator/src/juice.png',
  '/june_party_calculator/src/pizza.png',
  '/june_party_calculator/src/popcorn.png',
  '/june_party_calculator/src/sausage.png',
  '/june_party_calculator/src/small-soda.png',
  '/june_party_calculator/src/water-bottle.png',
];

self.addEventListener('install', function(event) {
    event.waitUntil(
      caches.open(CACHE_NAME)
        .then(function(cache) {
          return cache.addAll(urlsToCache);
        })
    );
});  

self.addEventListener('activate', function(event) {
event.waitUntil(
    caches.keys().then(function(cacheNames) {
    return Promise.all(
        cacheNames.filter(function(cacheName) {
        }).map(function(cacheName) {
        return caches.delete(cacheName);
        })
        );
    })
    );
});
