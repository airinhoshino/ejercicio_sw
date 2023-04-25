console.log('SW: Im a service worker');

self.addEventListener ('fetch', event => {
     console.log("SW: ", event.request.url);
     console.log (event);
}
);