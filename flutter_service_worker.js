'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"main.dart.js": "f393f72aa2764124879f238977a258a2",
".git/index": "a7e752105093fdaac4fd398349ed916d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/bc/c6e2312910954674c5e0b6ac8dd16bfab95dd9": "424e220f0d4cd05f008fdfab52a3e4d6",
".git/objects/6f/49732806028660b51ae7d31eb03befcee58715": "2b374d11f799c9b5279955481fe49bc8",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/60/c01fc0dc6ab2bf0d41d8b099fc1faa7c5a91cf": "9d95a78ae25af1569bfbdf845329828e",
".git/objects/54/fa4d00106fbd0b4b7d6a69ae7ac39828e6abf9": "11d60d333a437e7e65155fabb06d1eec",
".git/objects/54/5fc271bf930b247c8808a5b299d126879b4306": "0a5ae23fbf78023000e0a233ad099d93",
".git/objects/af/d531afec66795657f138ebe855e5d5760ffcd7": "b6a21fa8f5b88d6ef88580ae191ec4e0",
".git/objects/98/58d1e9976f35844668c12442b69d085dad4a9e": "92cc99eddcfcc3a3b8e550bfb6349b13",
".git/objects/75/753670e3f3cd7b6175a0b003478fedb35a4070": "d680187fd07102876b345a3a5a92259b",
".git/objects/03/ca79ea81434a4c4c15991195e03f36ed1653eb": "a67d59c2447117eafb8c01d98979483e",
".git/objects/03/2c260cf6e37ccf2dc3873ba85e2bc603ef3a7e": "0361207372ae5929dffeabdbdef2c1a0",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/d7/7f4867f5b67ea4e73fc2589418355514d2312d": "2ed4a9fa87aac4a9ca4503eb4ac4f99c",
".git/objects/d7/38aee558b76a09845efcbf3824f866c8b39bc6": "ad3da9bb065382f80e588d09919b92fb",
".git/objects/e8/6f2a851061efe5aa05ba6941b108318bbe6c37": "75d537c3c484d6125d938f44f3fe7f31",
".git/objects/e8/8f197d16173bcff59a5944e891f33e2e6beb5f": "ef52d3b4b4a836deb98569b3e13f12e8",
".git/objects/e7/6e9f3bb6aab72deef248c17a1a8422519cfb25": "f08fd1369279569179c85de65e62c949",
".git/objects/6d/fda829a7235dae4b2829cc3cb7df8d9ba55554": "4a0cc8a2b3cd4517f21b14d03141bd48",
".git/objects/c4/5d4e4e90f04df0165a8f677df7035d4a6dad3e": "e68e78a6ea21311d66e4111bbba79bc3",
".git/objects/4a/ccd37a28ac96793c7f256936c14debcb3f3b57": "64dbadd129aa5c0c74c9102750bf0687",
".git/objects/80/0a50b346a18c23391d6c4474160b9356cd20cc": "0b891a42543ff1f46840252768ab4be7",
".git/objects/12/8ed7a141e2f82b077b54dba82332310ba5bd49": "185e3a1bc86627ff4397a9f1da086a44",
".git/objects/12/f71c3a3ef452d7877a8513a97182ff7c8a43fb": "84f90c52fd99becf6cee7eb6cfa0d163",
".git/objects/cd/6f80d0dfbe1ac5c0783719484ab3590d9136d6": "59f10647f66df6c380eae1e1f9f26f1b",
".git/objects/f7/4fb141565e76c7429b8476e192f0b14c599684": "7871e37afe3ea4d5374a75256af267ea",
".git/objects/39/b240b47030429bb34939d49745d94c3919373b": "3d552863d859bec93619b618469e9f88",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/80256167f1746a89e89819ce89cb628d8724bd": "6c61de32faaab28c9063ef302f8d8d40",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/fec5f8b46b844c82b1f8512914f111b0140df5": "1997dc0421d438a7d69ff80dfa05619f",
".git/objects/ca/42ff98c2ad8865e1ceccd416c1d87b0c2c4181": "5238995ca4a992ccd294c12916f82c36",
".git/objects/a3/d5a1d2ed081fdf4556a608de2ba981890e61f2": "892086745fa796cbcdba7fe17aa8fc27",
".git/objects/0f/c591464b4e2fce5775d9c1ab81f91b595ec6f8": "cf42397fa25da477b62c1321973df52d",
".git/objects/26/5b56648721873d7d8c4519b5a64d3a5bd46306": "3f262aa21df97e0313e930fbcc2a0f2e",
".git/objects/90/40848215c4b176a74c07e46cb444fe5b84244c": "17ac8278723507c55620c14551140d3d",
".git/objects/49/3cab9b6b17c7b0e12db0a114ca4636edf712a7": "9c07feb93e3f0f3ec22c5f4f1aef6f36",
".git/objects/49/d62f8c4c0a704e68211665023e6ef48e5811d3": "a4e787e34131b4ebd30262d1faad8e56",
".git/objects/5e/dc10630547a84717e22d2f96339108c00fdc63": "9c679db3793bfe668c19ec80ec7531c3",
".git/objects/a7/2d420770191f33289af66c75fa47a4d761900e": "5daa3289bb38254c4770160513e46e2e",
".git/objects/58/56270c8f291823f315856ac7c670481a1613b4": "5d3b4214afdceccf342580c4965b227d",
".git/objects/e0/e78f58dd1c9d23048d016b7ddecb1a3bafa2f3": "391e8b0c6b88fb3386493df549d7c98b",
".git/objects/30/3011b6c71487a359f5cbc7ac779ef5be6abb7b": "450f4dcc4ee01ced8eb309a6990511d6",
".git/objects/86/169fbef40a791ac48a36908e1100c8f0edbf4b": "1ef417db86771b53d0a497f0a707b47c",
".git/objects/86/b71ad83ae30634f71fefaf1d1c50391f774d61": "2c5a2b24bd4e781014305774c5f476bc",
".git/objects/d3/94d0ef74984878e61ceb686e2e62805bce15e5": "5786ab42bce3919a6f4c42d0bd7a4aa2",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/96ce7b5a6df12db5ac89c7d4ebdb0b6cc67bb3": "9080bd2d25cb7b18d34b332cbcee3f93",
".git/objects/f4/22d2e5c75cad1ecb8bf41ffdbf2be5ac7b5d24": "8a1ac561a067a8810693857376a6d16e",
".git/objects/f4/3165ea10f9fbe3bfc196badb37bb7956403f6c": "d7de7193205cb4c16fb501ddc30125b3",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/3e/f3464ce6214cecb752988f1ce19696c14f475a": "22d2569c91a279aa7cd01d2ead0c16a3",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/29/595f746abd095f859d71f6070831dda392529e": "b469dc86a720b9d01d20ee3e95d5ea47",
".git/objects/99/b533c60e35dd4d67f4ee64c4e1b3672228f510": "761c5c15d6981c48a8ff2f27eadcce3d",
".git/objects/f5/48e737dbb2413c2d7d11c52ee0ff712382ddf2": "72bf4a70802195765afbdc68f3fa1551",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/8a/8bb69cefa651f90e19fcafaa29d3c21f4b0f08": "a53238869fe24cd500781935ea95c7c7",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/1c/935bdd1e4944418211499becf65eb3c185170f": "6f400b0df259ca5016dc52ec8e2d318b",
".git/objects/73/de1eb6172b98a4527081bffd37556fd2ceea4a": "306bdac6cfdf54c65b83d1693258449c",
".git/objects/a5/c59307d4705fb1d31e5a8531b964a8e990442a": "674b772fd0d724cf2430c5824a946fbd",
".git/objects/d2/ebd9d42636cee4080cabbd734c48f59279cba2": "8a36679866d9f94b3c09f5ec2e5c087e",
".git/objects/1e/a0a25501334cb3d2292720480f4eeadca24549": "39d9b442b51bee38b9a918eb6e54283b",
".git/objects/1e/92e4d33735e0e31187c4adc29736069f9854a9": "b6916d032004e3eba944601a081d5be9",
".git/objects/20/d31226ef72ee7c1b8afe3f8662edb6c9aaf7b9": "25c4dd68f9131e62a11fc8d6b8a08a64",
".git/objects/69/4d80062d1a1b1f10199b9f498d823a928e2adb": "46e27116f88f7f83c9e0e8ce9166d896",
".git/objects/47/8471792890525e31387a5a06ab2e80eebc1050": "e9bf9eaf33570debc5733b30939af084",
".git/objects/6b/dd699febb733695a01d6c5ea11e3f5bb13de02": "826a67c4ab1d91b10fa30c3c88578f39",
".git/objects/62/09e2c67f311869b2a642b1cda6b2ed60c4c972": "caab916ac025cdd6092ed4496c8222ce",
".git/objects/c7/2baea1a05667298190932b47763369985786e5": "dc0fa9a809aac83eb8def4fd05ef7e29",
".git/objects/18/38cdec5ae284e4cb78e3723a76441d58e40f4b": "ac6ae4b1eccc39ef8d278ae8853cbecf",
".git/objects/18/6abde1c4f4ea7e4e18964407373aaf474db73f": "fc2b85ede2584ce0b0c2c982e5716186",
".git/objects/8c/bc041db612cbd1086830a1ff687608be7902ba": "869ca3abe9f91b342f09d61284241b17",
".git/objects/ff/df3ff9d738211be8354964513c32de6e3c63ed": "ecf2b339eabaec3c7f3c14e96c1c6493",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/9b/6c60ab710b92b41de1ff53afccce2e906c2e7f": "cd7d55da1e1ec328d3bbf53c7443ffa6",
".git/objects/4e/cc9b9a3ba25e6857b03d40d2870acefe029aa8": "0eb0c620cc2a2383f5a68d63b351aaca",
".git/objects/3d/a7d2c2852a34857ffba51bfc1fd0a33b52b566": "79d6afed98c6db6de48d418803608f0b",
".git/refs/heads/master": "b6886423a6387510c6f4855393abc50d",
".git/refs/remotes/origin/master": "b6886423a6387510c6f4855393abc50d",
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
".git/logs/refs/heads/master": "5a7bdd45172174e79aeac2798bd00f98",
".git/logs/refs/remotes/origin/master": "0592c3a6c24975e986b588fdc0ba0e50",
".git/logs/HEAD": "acb9d14488ad12809569e086ead62825",
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
"index.html": "1d89fbb8245206e7559ca8bb37451817",
"/": "1d89fbb8245206e7559ca8bb37451817"
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
