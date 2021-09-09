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
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
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
    "revision": "54e3eb0546a1611120726760cd5c99e6"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "arch/11.arch.html",
    "revision": "5c5d6ef43d7005d500256268caeee596"
  },
  {
    "url": "arch/index.html",
    "revision": "38b54848ac539e74617ea70877cbaaff"
  },
  {
    "url": "assets/css/0.styles.32220556.css",
    "revision": "8131e6bceefddac922923a574a806aec"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.afaabfa6.js",
    "revision": "0683f24c1f6580bcdc1849d5bbb0f23d"
  },
  {
    "url": "assets/js/11.b38f407c.js",
    "revision": "9865956af518302712edaab90cb5411f"
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
    "url": "assets/js/14.cf84a833.js",
    "revision": "0dea39885d5e7e0167c1ac0642ea6a49"
  },
  {
    "url": "assets/js/15.c7cb41fd.js",
    "revision": "ffbfb5af6d3add9d0a8aca0ee7d3f735"
  },
  {
    "url": "assets/js/16.d95316e9.js",
    "revision": "6a98cb33e52f1e55875afd8335d4d660"
  },
  {
    "url": "assets/js/17.75c3ca84.js",
    "revision": "ae56c08a59890f32236b3b5231a7a167"
  },
  {
    "url": "assets/js/18.8c26beee.js",
    "revision": "47f09f9709aebcdb38ef30c3e85b3e46"
  },
  {
    "url": "assets/js/19.e260de96.js",
    "revision": "fb58c4c2c6ab2dd2717aaaf09152d119"
  },
  {
    "url": "assets/js/2.43c74522.js",
    "revision": "00351a67963ac7dbc8dea2f2fb25cb95"
  },
  {
    "url": "assets/js/20.9a7379bb.js",
    "revision": "6829dd7af341f1f992053bba6c807f4a"
  },
  {
    "url": "assets/js/21.383c6eb3.js",
    "revision": "afe851c2695061f9a54bf4abc1f40617"
  },
  {
    "url": "assets/js/22.da07fd05.js",
    "revision": "f07b9383a889abd869c5445ec260df0e"
  },
  {
    "url": "assets/js/23.97bda903.js",
    "revision": "70f30f26b89ac5dc01d08d76216b6cc7"
  },
  {
    "url": "assets/js/24.1851e457.js",
    "revision": "a0fe9418bd2007a70e5c71fceb96266e"
  },
  {
    "url": "assets/js/25.6444c9f3.js",
    "revision": "5f68c7803ca9cbb0e38f6ec79170ba8f"
  },
  {
    "url": "assets/js/26.254874da.js",
    "revision": "342b3ad2722243e84fe7a3a9d225be43"
  },
  {
    "url": "assets/js/27.24e27039.js",
    "revision": "0e1d05a5a89384dd99c90d40012ba3b4"
  },
  {
    "url": "assets/js/28.240d97ca.js",
    "revision": "84307e98518b6c7cd6e95fe1dbdfc70e"
  },
  {
    "url": "assets/js/29.42ac25dd.js",
    "revision": "38be343502c886f74e6972f635ea2c1d"
  },
  {
    "url": "assets/js/3.25ea1055.js",
    "revision": "82a0b68705f8541fa3144a1c501178fc"
  },
  {
    "url": "assets/js/30.f7c5143f.js",
    "revision": "5372258c0779754cb82ecbcb7a8870e8"
  },
  {
    "url": "assets/js/31.0fd81914.js",
    "revision": "ebb3b9a8f4a8f3457e783ea58f3914eb"
  },
  {
    "url": "assets/js/32.936308f3.js",
    "revision": "09be87361efe676fb4b039d8456a7c69"
  },
  {
    "url": "assets/js/33.c3386f09.js",
    "revision": "5079ccf84b932f5f1ba21e7292800b55"
  },
  {
    "url": "assets/js/34.3fb48e0a.js",
    "revision": "827e73e9a93ca2efd5417fd2be07bdc2"
  },
  {
    "url": "assets/js/35.728f7bae.js",
    "revision": "12accfe2a830d18bdfe55067b2ea4063"
  },
  {
    "url": "assets/js/36.3e18223b.js",
    "revision": "66c5140540687e4537643e155ee6ed80"
  },
  {
    "url": "assets/js/37.394c24f9.js",
    "revision": "a45714ba7abde8bd7e6ba69edea21e3f"
  },
  {
    "url": "assets/js/38.8daafd37.js",
    "revision": "ccd18070406d11b63018c263ad8d98a4"
  },
  {
    "url": "assets/js/39.a4a6e446.js",
    "revision": "c0b6fa50ebd8555a72446f3f690854e0"
  },
  {
    "url": "assets/js/4.f33b38e3.js",
    "revision": "e7c1e7eb12fe7829986481f21d6ae874"
  },
  {
    "url": "assets/js/5.8e5b1064.js",
    "revision": "7afc14d06454e2ba160b32e8027689e4"
  },
  {
    "url": "assets/js/6.7e084e32.js",
    "revision": "f5a033e2e05da5a4dd6c42d9bcaafa6a"
  },
  {
    "url": "assets/js/7.eaf79c7b.js",
    "revision": "502b5bb34097ab0eb42d8b4cc4c905e1"
  },
  {
    "url": "assets/js/8.2124de32.js",
    "revision": "a49c1394cd251b92dcff7de5bb4a8cf2"
  },
  {
    "url": "assets/js/9.10facf5d.js",
    "revision": "3a489d0a5c7a81fbeb0e48762b327d49"
  },
  {
    "url": "assets/js/app.559d185c.js",
    "revision": "24b3d40282929b09da0bd32afdece923"
  },
  {
    "url": "components-interaction/01.express.html",
    "revision": "cebe4cdc8b654d6c893d237b1fc66624"
  },
  {
    "url": "components-interaction/03.restfull-services.html",
    "revision": "04500ecb96ec1eacc1979535afbc069f"
  },
  {
    "url": "components-interaction/04.graphql.html",
    "revision": "cebedb370ebda0d06944626823e09ca1"
  },
  {
    "url": "components-interaction/05.sse.html",
    "revision": "a806b87f85c833f87b71e841f0dfbfa1"
  },
  {
    "url": "components-interaction/06.scripted-query.html",
    "revision": "057398896b71bd9f44f4177bed993e8c"
  },
  {
    "url": "components-interaction/index.html",
    "revision": "b1ae980929311b5bd8d00952008d5413"
  },
  {
    "url": "dis/10.distributed--information-system.html",
    "revision": "32edb48f592998b3420b427c8100d17a"
  },
  {
    "url": "dis/11.arch.html",
    "revision": "ac51ea816cbc11eb170f6202c9806829"
  },
  {
    "url": "dis/12.api.html",
    "revision": "fa7174249070caa737c92e8092e80414"
  },
  {
    "url": "dis/13.rabbitmq.html",
    "revision": "b1d448930664bf262ea8cddd685df18d"
  },
  {
    "url": "dis/14.msa.html",
    "revision": "76a2de2529717e8c2fc9204d9e33282b"
  },
  {
    "url": "dis/index.html",
    "revision": "9a7702ad7810c02808b8ee9cda319fe9"
  },
  {
    "url": "eda/13.rabbitmq.html",
    "revision": "698d627d767dbb926d528491c4c59ede"
  },
  {
    "url": "eda/index.html",
    "revision": "8715fa43b8d0c3b83431dbdd169dcbf0"
  },
  {
    "url": "index.html",
    "revision": "feb4d1b564cfebde40939dd2e172f0a5"
  },
  {
    "url": "intro/10.distributed--information-system.html",
    "revision": "372f1c2a3bbe49862d64f610d104ea46"
  },
  {
    "url": "intro/index.html",
    "revision": "8e97a3bf2d230828ccabbf461e632437"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "msa/14.msa.html",
    "revision": "d01f417f398ea7a134061f0d2a22c98a"
  },
  {
    "url": "msa/index.html",
    "revision": "57ab8cb3cf7961063754bbc70f96f20b"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "swagger/12.api.html",
    "revision": "c46761881afec81de652e794d231f87c"
  },
  {
    "url": "swagger/index.html",
    "revision": "b1eacb574ad255efa0d219cbefe8d5dd"
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
