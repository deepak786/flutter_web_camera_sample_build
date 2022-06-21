'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "c41b15890e26bf74687264586fb89515",
"index.html": "aa8abf0a18d8750dd80a599deb91015f",
"/": "aa8abf0a18d8750dd80a599deb91015f",
"main.dart.js": "6637aeb76c3e3fd8ae71a710ac2d55f2",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "adfb5fba71b245a14f54ad8eba9cdbd0",
".git/config": "510fe01e34f69954fd1afbfe2322b9b8",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/92/3cab6c140883f23138185fe182854e671bef66": "89f2705cf40df223c976b65d86ff5e2e",
".git/objects/3b/899dcd6314f367d34fdf5fc7456515079c9c67": "2c24f9372fbcc5462c3229d8a738c536",
".git/objects/32/396b0252ef518acb0dcda33806d0ce654b3dcd": "c84b7165fd60dde4dfc69b2e1632c574",
".git/objects/3c/4416e368725d28892e96277a82eff987b731a2": "18bf5f41ae72c411c9739953dc71e1e4",
".git/objects/0e/d3fe7fc7614031cfc9215d646ceb039783b5e3": "58f5280720c9321ef15025fd8f24393b",
".git/objects/02/5c8d2ad8d408765288c583e0fb5023753e9919": "904180060a654be0f7431d8f906913d0",
".git/objects/a3/a44c0e0d2d2ed1cf42d2f9b540bdd6b7241cdd": "e2d6759c8ef2cee37e438537afc26de5",
".git/objects/b5/7ba6037a7149f4cf24583636073ce5c97104cc": "0f841b43d5be641aa6c705a4a3125d28",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/a5/92e3bd9debb0ecdb11be561c3d7c73b21caab5": "010fba4948501280928e4a619d811995",
".git/objects/d1/2ef878f69c86f42bf3f83c1ec041941c0cfd52": "682b1b1d5baa8ed4716445663fe93b5a",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/d69ff4b02c8eb90e9f76e214b5d3800a5777d7": "3994c41356cf7bf366b51da8c1cc832f",
".git/objects/ab/9b56f5b442b89bb032cd61602a029a3a621da7": "72b386fd4cb23b08fc115254aba99dfc",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/42992e21414b96844381cd1c51da77e8e407f7": "d9d1b2a9dc64339fe6583380bdced6f9",
".git/objects/e3/0ab5823504652f6150528e7423627521d423ec": "d2a56209370dc12a2f67af03d7b1680b",
".git/objects/ed/dd4f0437d20454b0f2c30edd660e541e5f816a": "f377df8374b793fcdfdcb3bf668864e8",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/27/519f7d180b2d89bf57589050c0dc8be0b19907": "cdc019356d9628c74e311e4d8376f50c",
".git/objects/4b/e420082ddd71680fe3c81ce45a4568949e1d1d": "d1f53164dd2127214069584f7875e3f5",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/42/30d6acacf23cd498dbcdde62426b3be5f331c6": "afd0deddfde913d9df8387dec11821dc",
".git/objects/1a/497a554fd902f7b275f41086a0d012cb0e5780": "a78cfe53e0eb330f7e6231b5b947e337",
".git/objects/1a/59a49eaa6b9e2f10dc2f6350c821cd7cd0553e": "320dafac57ace082f979a4606066f219",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/10/78d2c4e0cd9e4edeb93c8678ea3927f02401e2": "5d299853ccc3a573050439cc42ea5922",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/3e4562c78fa717af5ee2619361a4ded1d053f2": "9df0397793d0e2e4865d21bb5a6536b8",
".git/objects/07/ae636ff66af80bbb421f8303fb5e92807fd063": "4fadc36bb0455bf140615873f186e4f9",
".git/objects/5c/dc83b42dd7f29e62bb2f057bb48d6a1dd252f7": "bb9b343a8fc087f4b2adddc2660ce6a1",
".git/objects/3a/4879661f2c117401bb3189f0877ec413af7762": "a0474dfc5b3a64950499d1dedcde8fe1",
".git/objects/98/385cdeb738d9a2970d924301f1ca4b11ae7431": "c295241d05d0f19daae36bea1d3344ef",
".git/objects/3f/5218fc5025b05f6443f701635e97069ad6a68a": "6993640b2efc8af2dc2fb3f2c666bd3a",
".git/objects/6d/8b668c650a846a2075afed661a54289f9d2949": "6fb7a7c95191860ebb40bbb2bef78d94",
".git/objects/6c/5116e38a179abf8e573322c00980246b28d706": "9d85c870fdf680f47544c9f8c34a466f",
".git/objects/6c/d749b7fe28241cd5e98319b314040cb4f063db": "05bef1a44e2fb2f3e17c0bd11145ed97",
".git/objects/52/3882341a0cb582808c7b9766f6eb780ab729ba": "ac3a0f241157797ddc3635b25a96ec19",
".git/objects/55/5cb1372fbfb2d64e8622f655a103d7de5ec54c": "73ff0bd0d73a7726a288ed26a20f8fb0",
".git/objects/bf/9e2646e4297d7a3bbfc74295a3bcee66c69842": "c01de6403d1869dbf723ed130d73ad99",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/f0/bfe053298582b5565fe23ccaef3f0857645675": "fd9deff273cf541f789dd60b6c9d3009",
".git/objects/f6/f76e892bde981e354c78ffd1e2c8f87cb99321": "55d8da7bead7165a766650be200ed4e9",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/23/2b1f114869b51692f9b6b350826d0315bd9562": "df882cd2c576dd2b705f2de00d8ad8da",
".git/objects/15/8d568c137b41934ebded02054dc1bd6840b2bb": "105c12c79edcf701a88c2897eba1fcbf",
".git/objects/12/8c18dfffbb0097aa3f60bf622302fd7adc37e9": "612fcec0979273d6286e59da59a3d2b2",
".git/objects/8c/1cc4488ba3aac5468e9f996986ea7489b82389": "1a444c9c81a76e62aaf5c62c52ab1c91",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/82/33f5ebef3aa1f458f6d092f2ec2620d0bbf4b6": "8f612310350c8dcf3ba812dadfcaba0f",
".git/objects/2e/56e11359b9e1b8ec6a1b2a74776dd3639134d2": "097b31abb048aae76e23dceb2e6f7e0d",
".git/objects/2b/0533daa5976afd35b936443de86bd4a4e119c2": "5ed42354af77ea266ad1a056e402e9a1",
".git/objects/13/e8629f22d71dbf47709b97a1aceb47e8b9c222": "2a68fa7b81a1b7ba9b6d9047530cff2b",
".git/objects/7f/c0c831bbc7bafa9a2f55b9eafec7cb14947454": "9c89e9c02eb9fba2fe76150d946ed457",
".git/objects/7f/2422fab2ebd2dfae242a8547e924d3d658a05a": "654a54418f295033426aa84974efa89d",
".git/objects/7f/24af304a53404fa4462800eeb7d217340ef118": "31eb61f3dcd295a540fb320eff84b6b9",
".git/objects/25/df3bc21bce6383638bbfe4209e89a4c629f141": "8c0e835884609a88f65d967258e0571e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "9f0aa2e5f0f615cdb497857e88068283",
".git/logs/refs/heads/main": "023aabbbdd50b196f0f7c6e84a1f3943",
".git/logs/refs/remotes/origin/main": "0cf9f433a63648c9c1f46463c2905a44",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/main": "93f79e75c646070491909729bd5be5f7",
".git/refs/remotes/origin/main": "93f79e75c646070491909729bd5be5f7",
".git/index": "7f858754a5133abd4c3bcc1aa1e62198",
".git/COMMIT_EDITMSG": "59c36bebe3b0306042edeaf2fb049b51",
"assets/AssetManifest.json": "62d5b309766803222978f589168a5e54",
"assets/NOTICES": "8f4bc51c5f095aab4f52511aa0543670",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
