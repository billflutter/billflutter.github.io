'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "1dab7c6811ca97a3b1193ee906953b88",
"assets/assets/fonts/iconfont.ttf": "f25bc7f232db68f27202899e10bafda2",
"assets/assets/images/confirm_order/2x/dingdanchenggong.png": "76fe2c2575d9d5c3dbc58bf894ea55a8",
"assets/assets/images/confirm_order/2x/edit.png": "74ac07d308f0dea4127bf63024c91009",
"assets/assets/images/confirm_order/3x/dingdanchenggong.png": "c60662746bcfdd74dece54f4b87834fc",
"assets/assets/images/confirm_order/3x/edit.png": "f86bc77e38982cc0a1704610fc28d34d",
"assets/assets/images/detail/2x/dowm.png": "849a483f00e39c82df3ce0b7e66251f4",
"assets/assets/images/detail/2x/up.png": "de8c57c261cbf6ef828dfb91cdeea9f6",
"assets/assets/images/detail/3x/dowm.png": "15db44afc868470859b51cc79539cb3f",
"assets/assets/images/detail/3x/up.png": "b055834b79f3ac46833e706c2a98348d",
"assets/assets/images/home/2x/fenxiang.png": "33ab2181daff815b4724638e312c129c",
"assets/assets/images/home/2x/gengduofenlei.png": "deb060f66afb4c4d5ecac5dcd4eee30a",
"assets/assets/images/home/2x/gouwuche.png": "86d0cdd5b75bf6a305e9edfe9ac02a7d",
"assets/assets/images/home/2x/jiazaizhong.png": "2e51c0108c0e292c1c25d93fb6edbd35",
"assets/assets/images/home/2x/lianxi.png": "a2f3753688865e52fb09eee2458de0aa",
"assets/assets/images/home/2x/shop.png": "1247daa65e90947e8effc0f5234c002d",
"assets/assets/images/home/2x/sousuo.png": "aeb9de350b1be5b665df5897c365be84",
"assets/assets/images/home/3x/fenxiang.png": "29aedea44e0be4f0d8c176a4035d3481",
"assets/assets/images/home/3x/gengduofenlei.png": "1d38b7a5ded432b1616b91181c6b3ba7",
"assets/assets/images/home/3x/gouwuche.png": "c0227314cbd634ebaf2efdcff8b30c7d",
"assets/assets/images/home/3x/jiazaizhong.png": "2e51c0108c0e292c1c25d93fb6edbd35",
"assets/assets/images/home/3x/lianxi.png": "2b0aadf21bdea82a3a26b874d8a7fb8c",
"assets/assets/images/home/3x/shop.png": "5ad9096106fbe089e6c305b722786912",
"assets/assets/images/home/3x/sousuo.png": "50a18882cccf494f1336e6506588367e",
"assets/assets/images/login/2x/password.png": "15672fe245a4b5339e2a9b6210558429",
"assets/assets/images/login/2x/phone.png": "83a925afa1876f3b9e43acddab3b3177",
"assets/assets/images/login/3x/password.png": "030fb0252b1aee75a6ee54bbfafa91da",
"assets/assets/images/login/3x/phone.png": "587addcd514894b93e55c2156f65434f",
"assets/assets/images/logo.png": "765e77be2b20bfe8333b30582253b49d",
"assets/assets/images/nav/2x/nav_back.png": "3ad54cb4c60ccc9081d90898da996984",
"assets/assets/images/nav/3x/nav_back.png": "a78021e97616c63d8dd6e773c9c0bd09",
"assets/assets/images/order/2x/empty.png": "279c2cb1eeeda3724c37524a26306544",
"assets/assets/images/order/2x/jiazaizhong.png": "2e51c0108c0e292c1c25d93fb6edbd35",
"assets/assets/images/order/2x/querendingdan.png": "660ea5ff59b1e92238a4ee29211f2019",
"assets/assets/images/order/3x/empty.png": "279c2cb1eeeda3724c37524a26306544",
"assets/assets/images/order/3x/jiazaizhong.png": "2e51c0108c0e292c1c25d93fb6edbd35",
"assets/assets/images/order/3x/querendingdan.png": "65e02594c348f8cb28f3ae1cd0667ad4",
"assets/assets/images/pay/2x/check.png": "fde86030d6cd43207e659f11a8038807",
"assets/assets/images/pay/2x/uncheck.png": "aafd182fdd611c56ee8df3f62c655156",
"assets/assets/images/pay/3x/check.png": "e255db5c273943deb97f16270eecc92e",
"assets/assets/images/pay/3x/uncheck.png": "e9f4df959a932e298ccf6eb324c18973",
"assets/assets/images/shopping_cart/2x/bottom_check.png": "1a537008788819d0ae07944abce1eeca",
"assets/assets/images/shopping_cart/2x/check.png": "fde86030d6cd43207e659f11a8038807",
"assets/assets/images/shopping_cart/2x/check_un.png": "53bd59849854e235d29c3245c8a038a4",
"assets/assets/images/shopping_cart/2x/down.png": "8a95b657d94dcd3abe2529995923aaca",
"assets/assets/images/shopping_cart/2x/down1.png": "849a483f00e39c82df3ce0b7e66251f4",
"assets/assets/images/shopping_cart/2x/empty.png": "279c2cb1eeeda3724c37524a26306544",
"assets/assets/images/shopping_cart/2x/icon-sj-26.png": "5e84edf143cb6339d510e0f7ba22defb",
"assets/assets/images/shopping_cart/2x/jiazaizhong.png": "2e51c0108c0e292c1c25d93fb6edbd35",
"assets/assets/images/shopping_cart/2x/up.png": "de8c57c261cbf6ef828dfb91cdeea9f6",
"assets/assets/images/shopping_cart/3x/bottom_check.png": "08f8f7fa59f5ed9a05acee6e9b3b65ed",
"assets/assets/images/shopping_cart/3x/check.png": "e255db5c273943deb97f16270eecc92e",
"assets/assets/images/shopping_cart/3x/check_un.png": "3dcda81335232e0b4e94c702f77a4474",
"assets/assets/images/shopping_cart/3x/down.png": "0869f21d7f6b68b386347bc4106a7848",
"assets/assets/images/shopping_cart/3x/down1.png": "15db44afc868470859b51cc79539cb3f",
"assets/assets/images/shopping_cart/3x/empty.png": "279c2cb1eeeda3724c37524a26306544",
"assets/assets/images/shopping_cart/3x/icon-sj-26.png": "7ae8e9269464db3794d02f126e7256e6",
"assets/assets/images/shopping_cart/3x/jiazaizhong.png": "2e51c0108c0e292c1c25d93fb6edbd35",
"assets/assets/images/shopping_cart/3x/up.png": "b055834b79f3ac46833e706c2a98348d",
"assets/assets/images/supplier/2x/lianxiren.png": "429212c4989587b56d4f11a3407b667b",
"assets/assets/images/supplier/2x/shijian.png": "d529f00da99a277544fa9b3ca656baf0",
"assets/assets/images/supplier/2x/weizi.png": "ddb9c77b7554bd0306ff3a744b07233e",
"assets/assets/images/supplier/3x/beijing.png": "57f94bb9e10580fb2fa22454e68d1081",
"assets/assets/images/supplier/3x/fenxiang.png": "5c10c373b9b5854cc114601b3af2fb62",
"assets/assets/images/supplier/3x/lianxiren.png": "5da6e0ea7da31fa6ff200e2da2189a0e",
"assets/assets/images/supplier/3x/shijian.png": "590f9f16284ba6be421fb6e4e9ac52ff",
"assets/assets/images/supplier/3x/weizi.png": "93f1961558c825629c8138b4a733b25d",
"assets/assets/images/tabbar/2x/diangdan_ON.png": "b014051d76f3b3284ae63779ce66ab6b",
"assets/assets/images/tabbar/2x/dingdan_off.png": "bc9864e58d9457e91793108e86fbae83",
"assets/assets/images/tabbar/2x/fenlei_off.png": "afadf50fcba9be801181f4b244be3b90",
"assets/assets/images/tabbar/2x/fenlei_ON.png": "2aa6f50ed68a5c5a1e2380cc0590e4a5",
"assets/assets/images/tabbar/2x/guanli_off.png": "e337ebacfac4899ae142f43851435e22",
"assets/assets/images/tabbar/2x/guanli_ON.png": "09e6c5050c2f7e70e1364843cfe78e93",
"assets/assets/images/tabbar/2x/zhuye_off.png": "85acc0b1c90b44a7790274e07facffe5",
"assets/assets/images/tabbar/2x/zhuye_ON.png": "36c1f1c3061c4fff2de7e5c79d952014",
"assets/assets/images/tabbar/3x/diangdan_ON.png": "24c7564b6587dacee37456bad5892cf6",
"assets/assets/images/tabbar/3x/dingdan_off.png": "70ffa17a93bfedc8ab15217627d52578",
"assets/assets/images/tabbar/3x/fenlei_off.png": "80ab910ee72c85dd6ac0984f8c33129e",
"assets/assets/images/tabbar/3x/fenlei_ON.png": "8d2a4f48c3f8af803a33ce5e910f914d",
"assets/assets/images/tabbar/3x/guanli_off.png": "b0109f601877b25ad875838c772ce27c",
"assets/assets/images/tabbar/3x/guanli_ON.png": "3dbb5ed4453951aae036cc8c0a2def13",
"assets/assets/images/tabbar/3x/zhuye_off.png": "c87b1f1adc818e7f429ccdffffb09ba9",
"assets/assets/images/tabbar/3x/zhuye_ON.png": "0fc664411d6348652a823fb147e43cbc",
"assets/FontManifest.json": "91682f77229fec867428567f19e030a4",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "7300cd5b498b9f8abdd19044910b8666",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/easy_localization/i18n/ar-DZ.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/ar.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/en-US.json": "5bd908341879a431441c8208ae30e4fd",
"assets/packages/easy_localization/i18n/en.json": "5bd908341879a431441c8208ae30e4fd",
"cors.json": "33def623575f1894a1010ba8ff2585ac",
"favicon.png": "765e77be2b20bfe8333b30582253b49d",
"icons/Icon-192.png": "765e77be2b20bfe8333b30582253b49d",
"icons/Icon-512.png": "765e77be2b20bfe8333b30582253b49d",
"index.html": "628c4e129db7c7be8edc17565797bac8",
"/": "628c4e129db7c7be8edc17565797bac8",
"main.dart.js": "04c7d5f39f58e59a647b4d5226814481",
"manifest.json": "d45c6a4a52a0f1e724e904d442cfe2b5",
"version.json": "32d8a7512853c01df4a9c945e1263567"
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
