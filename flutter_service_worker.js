'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"main.dart.js": "981347c9955618c097031efff9b3ff92",
".git/index": "dcc33d0a0f57fd785f172d9453c7d619",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/af/d531afec66795657f138ebe855e5d5760ffcd7": "b6a21fa8f5b88d6ef88580ae191ec4e0",
".git/objects/98/58d1e9976f35844668c12442b69d085dad4a9e": "92cc99eddcfcc3a3b8e550bfb6349b13",
".git/objects/75/753670e3f3cd7b6175a0b003478fedb35a4070": "d680187fd07102876b345a3a5a92259b",
".git/objects/03/ca79ea81434a4c4c15991195e03f36ed1653eb": "a67d59c2447117eafb8c01d98979483e",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/e8/8f197d16173bcff59a5944e891f33e2e6beb5f": "ef52d3b4b4a836deb98569b3e13f12e8",
".git/objects/12/8ed7a141e2f82b077b54dba82332310ba5bd49": "185e3a1bc86627ff4397a9f1da086a44",
".git/objects/cd/6f80d0dfbe1ac5c0783719484ab3590d9136d6": "59f10647f66df6c380eae1e1f9f26f1b",
".git/objects/f7/4fb141565e76c7429b8476e192f0b14c599684": "7871e37afe3ea4d5374a75256af267ea",
".git/objects/39/b240b47030429bb34939d49745d94c3919373b": "3d552863d859bec93619b618469e9f88",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/49/3cab9b6b17c7b0e12db0a114ca4636edf712a7": "9c07feb93e3f0f3ec22c5f4f1aef6f36",
".git/objects/49/d62f8c4c0a704e68211665023e6ef48e5811d3": "a4e787e34131b4ebd30262d1faad8e56",
".git/objects/a7/2d420770191f33289af66c75fa47a4d761900e": "5daa3289bb38254c4770160513e46e2e",
".git/objects/e0/e78f58dd1c9d23048d016b7ddecb1a3bafa2f3": "391e8b0c6b88fb3386493df549d7c98b",
".git/objects/86/169fbef40a791ac48a36908e1100c8f0edbf4b": "1ef417db86771b53d0a497f0a707b47c",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/96ce7b5a6df12db5ac89c7d4ebdb0b6cc67bb3": "9080bd2d25cb7b18d34b332cbcee3f93",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/3e/f3464ce6214cecb752988f1ce19696c14f475a": "22d2569c91a279aa7cd01d2ead0c16a3",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/8a/8bb69cefa651f90e19fcafaa29d3c21f4b0f08": "a53238869fe24cd500781935ea95c7c7",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/1c/935bdd1e4944418211499becf65eb3c185170f": "6f400b0df259ca5016dc52ec8e2d318b",
".git/objects/1e/92e4d33735e0e31187c4adc29736069f9854a9": "b6916d032004e3eba944601a081d5be9",
".git/objects/6b/dd699febb733695a01d6c5ea11e3f5bb13de02": "826a67c4ab1d91b10fa30c3c88578f39",
".git/objects/62/09e2c67f311869b2a642b1cda6b2ed60c4c972": "caab916ac025cdd6092ed4496c8222ce",
".git/objects/ff/df3ff9d738211be8354964513c32de6e3c63ed": "ecf2b339eabaec3c7f3c14e96c1c6493",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/3d/a7d2c2852a34857ffba51bfc1fd0a33b52b566": "79d6afed98c6db6de48d418803608f0b",
".git/refs/heads/master": "69d86c9aba9e0273adfb9b32ab3b3e53",
".git/refs/remotes/origin/master": "69d86c9aba9e0273adfb9b32ab3b3e53",
".git/config": "3d843c148be71abb5205bc39e8ab3ba1",
".git/COMMIT_EDITMSG": "b3bc47de7a8375680ba3272baaa5bc12",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "db4d62db2039e4bec38baa7567788284",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/logs/refs/heads/master": "13c07ce64ad8b88c0a8d6e237ff49a56",
".git/logs/refs/remotes/origin/master": "a24e85b6a2394045257800f35b5d6379",
".git/logs/HEAD": "382570424438354c78b9843f6fe88388",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"version.json": "9ed2228287d53c5c1c1086c3bd7e58f4",
"manifest.json": "2f37c61cdd6a7f464cdab8e070490c0f",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/AssetManifest.json": "df03d8f32f9a97b00453abb1792b5adf",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/NOTICES": "0ec5630d498ee505a657880693c6206b",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/packages/elegant_notification/assets/icons/error.png": "2a84d22ca4a8d9123f1e3149121b0976",
"assets/packages/elegant_notification/assets/icons/success.png": "a27784120d6634f48b24e12c4604f9d9",
"assets/packages/elegant_notification/assets/icons/info.png": "84b36b60ddacca6c063112fd636bdefb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"index.html": "99c3223fb506e160e6ea7fe8da466504",
"/": "99c3223fb506e160e6ea7fe8da466504"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
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
