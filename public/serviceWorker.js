const CACHE_Name = "Todo List";
const urlToCache = ['index.html' , 'offline.html'];

const self = this;

//install sw
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_Name)
        .then((caches) => {
            console.log('Opened Cache');

            return caches.addAll(urlToCache);
        })
    )
});


//listen for request
// we  match all the request the page are receiving and fetch them .. we always need a new data for what we need from the API
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then(() => {
                return fetch(event.request) 
                    .catch(() => caches.match('offline.html'))
            })
    )
});

//activation the sw

self.addEventListener('activate', (event) => {
    //remove all the prev. caches 

    const cacheWhiteList = [ ];
    cacheWhiteList.push(CACHE_Name);

    event.waitUntil(
        caches.keys().then((cacheNames) => Promise.all(
        cacheNames.map((cacheNames) => {
            if(!cacheWhiteList.includes(cacheNames)){
                return caches.delete(cacheNames);
            }

        })
        
        ))
    )

});