'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "6d5da0482c1591fbd5ff444562f9f535",
"index.html": "321c95fd2a800e593cc49c2b94336b94",
"/": "321c95fd2a800e593cc49c2b94336b94",
"firebase-messaging-sw.js.map": "48fe9d86dd5c86bfb4b7b56c84eb2be0",
"firebase-messaging-sw.js": "69221a3921da0521c1e758b4779e1f73",
"main.dart.js": "d3bc60c41c442bfdf41a9fda802b4386",
"worker.js": "f916974921b8b3d98f9fdfc4b68e5432",
"upload_file_function.js": "9924ee89dfc287638b587b568f25adfb",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "8be8da3682d10008041b5b7abcb64b63",
"volumeMeter.js": "57dfa817a10551cda47df4ff2d520cd0",
"icons/Icon-144.png": "ad61fada1839eeca4c9984fbd4f4aa5f",
"icons/Icon-192.png": "54f0aefac74e6e5e2a58d6f07758fef5",
"icons/Icon-maskable-192.png": "89789dce6783bd9cc642d6a8013af9ab",
"icons/Icon-maskable-144.png": "2ff8d0f09e9c377ad01cbd2125add144",
"icons/logo.png": "fba4961de2c2a4b880daf5ae69ba9972",
"icons/Icon-maskable-512.png": "f4e3d1c0a5e7568de16d0565d7ca1bb0",
"icons/Icon-512.png": "7164c502b2f1729d7e0262fa53f06cb6",
"manifest.json": "42e9af896bda5cd2f8122bf6fc9775ed",
"assets/AssetManifest.json": "a2515640d577e17ecb76ed271a8bbea7",
"assets/NOTICES": "59715da58e341fe37664cbcae5759924",
"assets/FontManifest.json": "0b320c11e98bf6282b362ab390c30274",
"assets/AssetManifest.bin.json": "d9dc7b5609c2f607212efc3a6ffa387f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "cbbeb78b8625f39882a4153535383356",
"assets/packages/phosphor_flutter/lib/fonts/Phosphor-Duotone.ttf": "aad23b975d521339314bdc3ab4d4fbf0",
"assets/packages/phosphor_flutter/lib/fonts/Phosphor-Fill.ttf": "773ebba095ec3590660722932c6e8500",
"assets/packages/phosphor_flutter/lib/fonts/Phosphor.ttf": "1b9aa14436c86843d7081313d68f2e72",
"assets/packages/phosphor_flutter/lib/fonts/Phosphor-Light.ttf": "e0bf253dc822f16a3c2a27cc229e03c5",
"assets/packages/phosphor_flutter/lib/fonts/Phosphor-Bold.ttf": "946de7fd1470d676b40bcb8f3fbffef1",
"assets/packages/phosphor_flutter/lib/fonts/Phosphor-Thin.ttf": "afd764841ed1ab86e0d8070e83531e68",
"assets/packages/ui_library/fonts/Poppins-Light.ttf": "f6ea751e936ade6edcd03a26b8153b4a",
"assets/packages/ui_library/fonts/Poppins-Medium.ttf": "f61a4eb27371b7453bf5b12ab3648b9e",
"assets/packages/ui_library/fonts/LexendDeca-Light.ttf": "013ac3be0b6d56a84f1312211288fe9e",
"assets/packages/ui_library/fonts/StIcons.ttf": "282b3db4fb6a00b6016b379e7a643794",
"assets/packages/ui_library/fonts/LexendDeca-Bold.ttf": "419050ff841bb5ff5c9f41e3ee7ebc8b",
"assets/packages/ui_library/fonts/LexendDeca-Medium.ttf": "142fc585b5cfbcb3b5b41fb0e89a347e",
"assets/packages/ui_library/fonts/LexendDeca-Regular.ttf": "47e7cf64af81a528d189b300dfe60c30",
"assets/packages/ui_library/fonts/Poppins-Regular.ttf": "8b6af8e5e8324edfd77af8b3b35d7f9c",
"assets/packages/ui_library/fonts/Poppins-Bold.ttf": "a3e0b5f427803a187c1b62c5919196aa",
"assets/packages/ui_library/fonts/LexendDeca-SemiBold.ttf": "4e35c5c5270efa6aed1b719e6708ac24",
"assets/packages/ui_library/fonts/Poppins-SemiBold.ttf": "4cdacb8f89d588d69e8570edcbe49507",
"assets/packages/ui_library/fonts/Poppins-Italic.ttf": "5e956c44060a7b3c0e39819ae390ab15",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "b238e99858e67b2e3655964748326f24",
"assets/fonts/MaterialIcons-Regular.otf": "94a47e0d8cb7d58add00434ce1dac641",
"assets/assets/logo_bird_svg.svg": "879792fec59e6d3956d87596a3c07ae0",
"assets/assets/icon_close.png": "f4e46b67113370be041eb9d88141b228",
"assets/assets/mail.png": "aef23de3fe4fa4788998378e03ecb1a7",
"assets/assets/web_background_christmas.png": "9a44f6c51f32c119cd7addefdf0d47aa",
"assets/assets/lock.png": "09e5f2dcd3d9b96b12432f073d37c937",
"assets/assets/letter.png": "0abd8cf9fef6492c893657ca1a4e9bc0",
"assets/assets/confirmation.png": "179ef00c6159eae79b535f388a48d00b",
"assets/assets/video_thumbnail.png": "54f8f2c22efeea5c88a253ebcc6d05dc",
"assets/assets/icon_google.png": "3ecbe9ccf1744797097295c533223287",
"assets/assets/logo.png": "fba4961de2c2a4b880daf5ae69ba9972",
"assets/assets/remind.png": "a1ad24a33277799d827623a95fe872f7",
"assets/assets/calendar.png": "3b3f1dd55dc6569e2ea34fc97adb2a23",
"assets/assets/gradient_texture.png": "b2daa0824694c7bfd2bbdf486f27d791",
"assets/assets/video.png": "a40b0f59fc6049a6f9ffb32cad49144c",
"assets/assets/gift.png": "aa1eedfa289d287cf10cdca48d6f5d13",
"assets/assets/gift_box.png": "149812abcc9496b4c2e93fb9d6e0e2f6",
"assets/assets/unlock.png": "6a348bedbcc9fa1e99e144cfd0a3f7d2",
"assets/assets/icon_tick.png": "f81236fdf1bf281000f0273477d84c8e",
"assets/assets/logo_bird.png": "9281cd6ab4acf89c2fafdf0e3b0a20f3",
"assets/assets/currency/usd.png": "6dc4f51115a4cca6d0e70e8b50404912",
"assets/assets/currency/aud.png": "c0889f8a6defa8f271fad4341cb4d22d",
"assets/assets/currency/cad.png": "39efd304f8eb003f7f74b8c5787ea3cb",
"assets/assets/icon_sparkle.png": "fa208e050994c68b06d1ca0df404fe20",
"assets/assets/web_background.png": "77f20b6978a54e9f5429be6b66d28b3d",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
