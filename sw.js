var staticCacheName = 'rr-static-v2';

self.addEventListener('install', function(e) {
  console.log('service worker Install');
  e.waitUntil(
      //adding the urls to cache
    caches.open(staticCacheName).then(function(cache) {
      console.log('ServiceWorker is doing it\'s work');
      return cache.addAll(
          ['/',
           '/index.html',
           '/restaurant.html',
           '/sw.js',
           '/img/',
           '/data/',
           '/css/',
           '/js/',
          ]); //including files that needs to be cached.
    })
  );
});

//changing the new/updated cache if present in the server.
self.addEventListener('activate',  event => {
  //event.waitUntil(self.clients.claim());
    event.waitUntil(
    caches.keys().then(function(cacheNames) {
        return Promise.all(
        cacheNames.filter(function(cacheName) {
            return cacheName.startsWith('rr-')&& cacheName != staticCacheName;
        }).map(function(cacheName) {
            return cache.delete(cacheName);
        })
        );
    })
    );
});
//responding with entry
//or responding with the network if available
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
    })
  );
});