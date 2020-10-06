if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"48a53665e9a5b7c3b812d5d6ba82ad13","url":"2607bfc30afc84ea4e21.worker.js"},{"revision":"6fe8a1b812bc960f8f9d4ffe672f4a77","url":"404.html"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"2404584e6e996b96e794ef3a7560811f","url":"index (copy).html"},{"revision":"6fe8a1b812bc960f8f9d4ffe672f4a77","url":"index.html"},{"revision":"83109f215741bdd0430a45389c8a16ab","url":"precache-manifest.83109f215741bdd0430a45389c8a16ab.js"},{"revision":"e497aeb865c8e913371ad69e7158c85d","url":"static/css/19.0b65a428.chunk.css"},{"revision":"b33d6235aeb2b57ff42b5a1b1c8e14c7","url":"static/css/7.a1840750.chunk.css"},{"revision":"6448cdf801fe13279c79d542ade7a5cc","url":"static/css/vizbase.css"},{"revision":"c0350f53e9ff9249ebb2787bab833fdd","url":"static/css/vizpages.css"},{"revision":"4e62cb41e6f180883ad44215191b625b","url":"static/js/0.a9ed8fec.chunk.js"},{"revision":"c9184e56d7aa877f4bb49854c3e7bccd","url":"static/js/1.39321482.chunk.js"},{"revision":"f7e32e7cb5a35d760d2d9a0d44f089f8","url":"static/js/12.147b015e.chunk.js"},{"revision":"f23c73b17742f2287fee27ba9f958a66","url":"static/js/13.4c62ca34.chunk.js"},{"revision":"c3a86108cc6b9120431e4c1607f1777a","url":"static/js/14.b7ff3010.chunk.js"},{"revision":"f9c89908f3722e1c4f80dbd726791171","url":"static/js/15.33656412.chunk.js"},{"revision":"a9d5e7b5190227b8302e3ceb33ac5e81","url":"static/js/16.7d2dd81f.chunk.js"},{"revision":"2b2b41a11100b26de2f361b4c045265a","url":"static/js/17.83cc991d.chunk.js"},{"revision":"fcfd0df643a3a729e004bb439274de62","url":"static/js/18.eb4fb134.chunk.js"},{"revision":"52f93259b3b79c1de25a92117b98bc56","url":"static/js/19.46ea96d1.chunk.js"},{"revision":"7ac79dd841645318327e76bc85e5a305","url":"static/js/2.c5f1f0f9.chunk.js"},{"revision":"64ec4ef9c396c8b6fd77208db68c5c37","url":"static/js/20.d87e739b.chunk.js"},{"revision":"a624f94c240088f657e956080c74da6c","url":"static/js/21.97a9edfb.chunk.js"},{"revision":"38b5d95deae73a4a78e09e0d7f1b3f34","url":"static/js/22.e8632c2d.chunk.js"},{"revision":"03022d5d0bbaff15641c64158e4a7dab","url":"static/js/23.7cb2cc72.chunk.js"},{"revision":"78fa0fd1abb6df3f4a643e889706a08f","url":"static/js/24.444a09d7.chunk.js"},{"revision":"463a7cff365559a8a82b27b9ca1e4ade","url":"static/js/25.dae6473f.chunk.js"},{"revision":"104f008fead0346c1c9233514fdc65cd","url":"static/js/26.8f2dc105.chunk.js"},{"revision":"b4fe9d0c749ddac9135871572a7becfe","url":"static/js/27.b1a56e53.chunk.js"},{"revision":"de8d6f75206d18cdc532b9774870e868","url":"static/js/28.577a3131.chunk.js"},{"revision":"2c8ad31105dae15ca296f97f7ad9192d","url":"static/js/29.c94b8e9c.chunk.js"},{"revision":"e1506adafa0561f626b55ee801322ae5","url":"static/js/3.a63b78a7.chunk.js"},{"revision":"10580039abb6456b4350b74643336e46","url":"static/js/30.de46948d.chunk.js"},{"revision":"a8f76d138c2b49c8499ab46bd45bb714","url":"static/js/31.e6196800.chunk.js"},{"revision":"0d27aa716e96ebcb6a22f0dbed5d71c2","url":"static/js/32.0268b38c.chunk.js"},{"revision":"f0a8d1c7824b98078bc5bc05b93e2367","url":"static/js/33.cdfbc3bf.chunk.js"},{"revision":"e5e03c7d8a146653c05475a136e8db81","url":"static/js/34.8bcd7bec.chunk.js"},{"revision":"2f2c89c72a5f1d8729886ca5d7f8459c","url":"static/js/35.decfc4a6.chunk.js"},{"revision":"e13ad3a0a4d4c9abf3789bd41d5bede7","url":"static/js/36.22a2f26f.chunk.js"},{"revision":"fe63a73402e484827f8e19675a37fee1","url":"static/js/37.3c988e66.chunk.js"},{"revision":"4b3e37ca59c3641977ffae0f549997ff","url":"static/js/38.c9345736.chunk.js"},{"revision":"423498a6f4401519a32f60c568ee72ee","url":"static/js/39.7cfca770.chunk.js"},{"revision":"3f68c3e624f21113dfc2baecece3c499","url":"static/js/4.37e3316a.chunk.js"},{"revision":"e05a791a3aae6e9567d6d4c1c1d91b24","url":"static/js/40.cdbc849b.chunk.js"},{"revision":"6fa8a1b4ba0ee3a1ed10e74bdd7e3981","url":"static/js/41.a1bd8cee.chunk.js"},{"revision":"25a78fc167a6a179740e143615ade540","url":"static/js/42.03f5a4b6.chunk.js"},{"revision":"b143dcf11514415f866ba2fdcb95872b","url":"static/js/43.767e4c20.chunk.js"},{"revision":"65a306efb345769b4b167caccdd7778b","url":"static/js/44.7232d561.chunk.js"},{"revision":"0e4f3e31bc3f58366c267090760976b3","url":"static/js/45.f23b4131.chunk.js"},{"revision":"320c971d8ef7ad4e5882f19935761769","url":"static/js/46.222d4414.chunk.js"},{"revision":"3d35e723f89f97e530204c311b2f59df","url":"static/js/47.555aee3f.chunk.js"},{"revision":"8b056fb73c04b1e31f3dbaaa51a68563","url":"static/js/48.aa234a88.chunk.js"},{"revision":"4b4200d8242cbf8664aafa3e63ec97fc","url":"static/js/5.47186899.chunk.js"},{"revision":"d7991ed00343cdc793ca21c6762f3d98","url":"static/js/6.e2409828.chunk.js"},{"revision":"82bdf46b24df373001cc09c74191a2d5","url":"static/js/7.6e6b2f26.chunk.js"},{"revision":"040f68f13fb907b60ab1262ef3e30d39","url":"static/js/8.1120ff63.chunk.js"},{"revision":"a18ad8e9424d97333b02a947415e22ac","url":"static/js/9.1d5aa694.chunk.js"},{"revision":"51194b9ad549263530feda9f2107df7f","url":"static/js/main.8b0597a2.chunk.js"},{"revision":"5493ff172b75369de94f481506d22b90","url":"static/js/runtime-main.6cc27474.js"}]);

    /* custom cache rules */
    workbox.routing.registerRoute(
      new workbox.routing.NavigationRoute(
        new workbox.strategies.NetworkFirst({
          cacheName: 'PRODUCTION',
        })
      )
    );

    // Adding staleWhileRevalidate for all js files. Provide faster access from cache while revalidating in the background
    workbox.routing.registerRoute(
      /.*\.js$/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all html files
    workbox.routing.registerRoute(
      /.*\.html/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all css files
    workbox.routing.registerRoute(
      /.*\.css/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding networkFirst for all json data. In offline mode will be fetched from cache
    workbox.routing.registerRoute(
      new RegExp('https://api\\.covid19india\\.org/.*\\.json'),
      new workbox.strategies.NetworkFirst(),
      'GET'
    );
  } else {
    console.log('Workbox could not be loaded. Hence, no offline support.');
  }
}
