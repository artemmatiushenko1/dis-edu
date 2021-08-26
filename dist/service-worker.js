/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "08a1ee4cc0c87c4b1333522a3ad05f53"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "arch/11.arch.html",
    "revision": "52914884e5b961992d549578a64a8573"
  },
  {
    "url": "arch/index.html",
    "revision": "c511d45092aa0461226c34ac43e99c85"
  },
  {
    "url": "assets/css/0.styles.f5591410.css",
    "revision": "2cd1239ba6472edb913132c597fa1701"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.ae09fb39.js",
    "revision": "4d6522331fbac42f4a7306ba49434921"
  },
  {
    "url": "assets/js/11.a892532e.js",
    "revision": "55d241a37cd6b90aab144701c4e127ab"
  },
  {
    "url": "assets/js/12.502d8f9b.js",
    "revision": "24d29144d57df60238181b694a161f02"
  },
  {
    "url": "assets/js/13.19ba463b.js",
    "revision": "e042b90f0599af6d6af8fa21f12adaa4"
  },
  {
    "url": "assets/js/14.b9bc508f.js",
    "revision": "99b6292025b2de940b20ff3fcaf25771"
  },
  {
    "url": "assets/js/15.8378044f.js",
    "revision": "4b4fdccb560e4e6d94ee5b25a74ef2c8"
  },
  {
    "url": "assets/js/16.c5ab21e3.js",
    "revision": "bde6a1c82450aa4c6cc5d2dd1aaf6a0d"
  },
  {
    "url": "assets/js/17.056e16ea.js",
    "revision": "a46c7a9ce85b39260e0d5f941bd6c00a"
  },
  {
    "url": "assets/js/18.d77e96ca.js",
    "revision": "fca4f75c74fe4ecb4848d4bfa7aaa9b3"
  },
  {
    "url": "assets/js/19.b664be5a.js",
    "revision": "2ef606889fe391ae99f15d0fd16013b6"
  },
  {
    "url": "assets/js/2.43c74522.js",
    "revision": "00351a67963ac7dbc8dea2f2fb25cb95"
  },
  {
    "url": "assets/js/20.d99a3a28.js",
    "revision": "5f71cf0a5ee4fe921c228203018d6857"
  },
  {
    "url": "assets/js/21.19f4d8a1.js",
    "revision": "a4b5dc9445f48934f6865a9d3e5b08b3"
  },
  {
    "url": "assets/js/22.c12e4cd6.js",
    "revision": "aa1bb8b70064059a937d662c8eb0fde0"
  },
  {
    "url": "assets/js/23.cea9fca9.js",
    "revision": "05b983b51ca5b5f748a08343496ecc1e"
  },
  {
    "url": "assets/js/24.03b428d0.js",
    "revision": "3780dd970a15b4742987eb217f522e9a"
  },
  {
    "url": "assets/js/25.1189308b.js",
    "revision": "f60127cf59856d898da90c555b05953e"
  },
  {
    "url": "assets/js/26.73a0e546.js",
    "revision": "7891a99a147f34d9818c4c174da301b8"
  },
  {
    "url": "assets/js/27.94f39345.js",
    "revision": "0c51e67271f36616a90d06e6a19a47fa"
  },
  {
    "url": "assets/js/28.a6b74891.js",
    "revision": "78ed964b89560de2793c70ab181d2557"
  },
  {
    "url": "assets/js/29.0d739a8d.js",
    "revision": "aff5d1cb2e8fe0ed66b9ee9c7e2e199f"
  },
  {
    "url": "assets/js/3.418ab320.js",
    "revision": "b76356f5c49c80c260aa997c7bc58aa3"
  },
  {
    "url": "assets/js/30.d3e49c4f.js",
    "revision": "aec2fdde29b245ee892186302ec51e6c"
  },
  {
    "url": "assets/js/31.5a79ea41.js",
    "revision": "4565ac6bca9f290dd2193e8ad6a46914"
  },
  {
    "url": "assets/js/32.892f4cee.js",
    "revision": "100a06201caa766b78450e6bb84b73fd"
  },
  {
    "url": "assets/js/33.43c31432.js",
    "revision": "362e87b12a378a7a1fe8c4820e6adb94"
  },
  {
    "url": "assets/js/34.aa8b7542.js",
    "revision": "013859aab273f97edfa4aa8aca948501"
  },
  {
    "url": "assets/js/35.106db34a.js",
    "revision": "ad0419cbff2ce1d4700c50bb1591c8bc"
  },
  {
    "url": "assets/js/36.decaa943.js",
    "revision": "2b33e36d6627808563693b3555bfb4ab"
  },
  {
    "url": "assets/js/37.35adf566.js",
    "revision": "1cfab4324697036d128b555f753f7575"
  },
  {
    "url": "assets/js/38.b395a8e9.js",
    "revision": "9fbbd167d842ce66aaeb3589ecd1f875"
  },
  {
    "url": "assets/js/4.f33b38e3.js",
    "revision": "e7c1e7eb12fe7829986481f21d6ae874"
  },
  {
    "url": "assets/js/5.335a55c0.js",
    "revision": "7677ced3a8a77379b67b8554928caaf8"
  },
  {
    "url": "assets/js/6.98f769b8.js",
    "revision": "a60cdfcd3570d69880e8f5adc4d34f6f"
  },
  {
    "url": "assets/js/7.eaf79c7b.js",
    "revision": "502b5bb34097ab0eb42d8b4cc4c905e1"
  },
  {
    "url": "assets/js/8.721b5dad.js",
    "revision": "054972e40bcd0a4b6b4f778d32c62c04"
  },
  {
    "url": "assets/js/9.e42fd085.js",
    "revision": "ba6692a9ba6002f556e28b64ffaea434"
  },
  {
    "url": "assets/js/app.6573e971.js",
    "revision": "6ea718bcc34d35c48fcae41aa7e5640d"
  },
  {
    "url": "components-interaction/01.express.html",
    "revision": "e9c9627c5fc49507354faa2f0f99053b"
  },
  {
    "url": "components-interaction/03.restfull-services.html",
    "revision": "29852a47e361fef81687837fa81ec546"
  },
  {
    "url": "components-interaction/04.graphql.html",
    "revision": "e53c62a427192398e83c633e56ba24be"
  },
  {
    "url": "components-interaction/05.sse.html",
    "revision": "b59e43f57d9ce3ee169d0594b97038ba"
  },
  {
    "url": "components-interaction/06.scripted-query.html",
    "revision": "e6a3f86b747060cdeb8afe9df42f7f2a"
  },
  {
    "url": "components-interaction/index.html",
    "revision": "c66f6c201d0f49e3f1d861aad721b051"
  },
  {
    "url": "dis/10.distributed--information-system.html",
    "revision": "7bb1d2c0cdd43c289e6cc977b3c2dd96"
  },
  {
    "url": "dis/11.arch.html",
    "revision": "507215a31895480257568f686ce7c243"
  },
  {
    "url": "dis/12.api.html",
    "revision": "155c3fc355bcb0adce21d4c52f0c089a"
  },
  {
    "url": "dis/13.rabbitmq.html",
    "revision": "3206d8cec8090abe16cc71bba97104ee"
  },
  {
    "url": "dis/14.msa.html",
    "revision": "02553ae1ccfb6156b0648db553701f5f"
  },
  {
    "url": "dis/index.html",
    "revision": "7615c1e639246f5501d305277aaba7f4"
  },
  {
    "url": "eda/13.rabbitmq.html",
    "revision": "cf71b208ceb66c8ed182d5d6dc264016"
  },
  {
    "url": "eda/index.html",
    "revision": "f49e4fb54e202b96721a3d7fb1eb3a65"
  },
  {
    "url": "intro/10.distributed--information-system.html",
    "revision": "61fe631d019a98f383c570cf170a2523"
  },
  {
    "url": "intro/index.html",
    "revision": "244b02fd9c04372bd52e2ee7adecfdc2"
  },
  {
    "url": "msa/14.msa.html",
    "revision": "a6e27b234ad0f4ac55742d4cd4d734bc"
  },
  {
    "url": "msa/index.html",
    "revision": "c4824338c2c547425ffc07c8f0f2f008"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "swagger/12.api.html",
    "revision": "b535bda0206e9cc5c99ecc2592d22784"
  },
  {
    "url": "swagger/index.html",
    "revision": "66b3a6a958a708374af675946532b6a8"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
