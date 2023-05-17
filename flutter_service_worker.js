'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "4a89732485c765f048cbb08737aa6d84",
"index.html": "ec20611c862a8434105771b238a80e30",
"/": "ec20611c862a8434105771b238a80e30",
"firebase-messaging-sw.js.map": "48fe9d86dd5c86bfb4b7b56c84eb2be0",
"firebase-messaging-sw.js": "69221a3921da0521c1e758b4779e1f73",
"main.dart.js": "c9a8a80f052c737155dbc7ec979f442a",
"worker.js": "f916974921b8b3d98f9fdfc4b68e5432",
"upload_file_function.js": "9924ee89dfc287638b587b568f25adfb",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"favicon.png": "8be8da3682d10008041b5b7abcb64b63",
"icons/Icon-192.png": "a47220e2357ef190ba0842b1d0e9f370",
"icons/Icon-maskable-192.png": "a47220e2357ef190ba0842b1d0e9f370",
"icons/logo.png": "fba4961de2c2a4b880daf5ae69ba9972",
"icons/Icon-maskable-512.png": "7e49a4fac0770cbeebcc06e5d1d77223",
"icons/Icon-512.png": "7e49a4fac0770cbeebcc06e5d1d77223",
"manifest.json": "11e861a5f1b2c8561fffd35a802915d9",
"assets/AssetManifest.json": "0134f1b3b90a934def89139e6bc8d10e",
"assets/NOTICES": "a08524aeed466429df6853fe800a7ae2",
"assets/FontManifest.json": "4397b97fa7e60c172e2849b94946fd5f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/ui_library/fonts/Poppins-Light.ttf": "f6ea751e936ade6edcd03a26b8153b4a",
"assets/packages/ui_library/fonts/Poppins-Medium.ttf": "f61a4eb27371b7453bf5b12ab3648b9e",
"assets/packages/ui_library/fonts/LexendDeca-Light.ttf": "013ac3be0b6d56a84f1312211288fe9e",
"assets/packages/ui_library/fonts/StIcons.ttf": "79f8986a292bcf05fc3c088a96d77941",
"assets/packages/ui_library/fonts/LexendDeca-Bold.ttf": "419050ff841bb5ff5c9f41e3ee7ebc8b",
"assets/packages/ui_library/fonts/LexendDeca-Medium.ttf": "142fc585b5cfbcb3b5b41fb0e89a347e",
"assets/packages/ui_library/fonts/LexendDeca-Regular.ttf": "47e7cf64af81a528d189b300dfe60c30",
"assets/packages/ui_library/fonts/Poppins-Regular.ttf": "8b6af8e5e8324edfd77af8b3b35d7f9c",
"assets/packages/ui_library/fonts/Poppins-Bold.ttf": "a3e0b5f427803a187c1b62c5919196aa",
"assets/packages/ui_library/fonts/LexendDeca-SemiBold.ttf": "4e35c5c5270efa6aed1b719e6708ac24",
"assets/packages/ui_library/fonts/Poppins-SemiBold.ttf": "4cdacb8f89d588d69e8570edcbe49507",
"assets/packages/ui_library/fonts/Poppins-Italic.ttf": "5e956c44060a7b3c0e39819ae390ab15",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/web_background_christmas.png": "9a44f6c51f32c119cd7addefdf0d47aa",
"assets/assets/icon_google.png": "3ecbe9ccf1744797097295c533223287",
"assets/assets/logo.png": "fba4961de2c2a4b880daf5ae69ba9972",
"assets/assets/logo_bird.png": "9281cd6ab4acf89c2fafdf0e3b0a20f3",
"assets/assets/icon_sparkle.png": "fa208e050994c68b06d1ca0df404fe20",
"assets/assets/web_background.png": "77f20b6978a54e9f5429be6b66d28b3d",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
