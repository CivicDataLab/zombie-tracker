if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"48a53665e9a5b7c3b812d5d6ba82ad13","url":"2607bfc30afc84ea4e21.worker.js"},{"revision":"467020d0135a839f0f12cd5dbd29e3fb","url":"404.html"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"2404584e6e996b96e794ef3a7560811f","url":"index (copy).html"},{"revision":"467020d0135a839f0f12cd5dbd29e3fb","url":"index.html"},{"revision":"2e91c9b5173695fc046b893dee82e51c","url":"precache-manifest.2e91c9b5173695fc046b893dee82e51c.js"},{"revision":"72774b8a1aa99ecb902e7c3ef4c47aaa","url":"static/css/19.5f151968.chunk.css"},{"revision":"f7aaf4598bb9b31481c031837a74991d","url":"static/css/5.a1840750.chunk.css"},{"revision":"d85e9667454bdfe3d351727c710f1b1b","url":"static/css/vizbase.css"},{"revision":"c0350f53e9ff9249ebb2787bab833fdd","url":"static/css/vizpages.css"},{"revision":"96304cb8343d96dd910c6a3c952a0f47","url":"static/js/0.0af1cd6a.chunk.js"},{"revision":"7d755ebf7775a9e7f3c7f4eac9d09b2e","url":"static/js/1.825fb3bb.chunk.js"},{"revision":"0853b7ff62582f70bea57e6c48e98fd7","url":"static/js/11.1e5c9740.chunk.js"},{"revision":"7ef3deb6a5f2e2f01598598006712f58","url":"static/js/12.3470a913.chunk.js"},{"revision":"00e3fddc85c68d52c5791f544f6c547e","url":"static/js/13.abf86bcf.chunk.js"},{"revision":"2a37a4e90b451514993bee3f08e75bed","url":"static/js/14.0c55a20d.chunk.js"},{"revision":"c24d474447d51d2104db41ef07ac7672","url":"static/js/15.754c894e.chunk.js"},{"revision":"7ec587b862fb9a0728208bd50cc1ad5c","url":"static/js/16.0221fed9.chunk.js"},{"revision":"8755401238ca0476ff205ae66dee25a8","url":"static/js/17.336efa84.chunk.js"},{"revision":"6a7c0a8cf4308a827c0a60e54ccd21a8","url":"static/js/18.5d00a47d.chunk.js"},{"revision":"b2af86d421b2acb15a48fa5ccc32e2d8","url":"static/js/19.e47b5230.chunk.js"},{"revision":"34c9f436cf149df84524aab56a8d1227","url":"static/js/2.ed7dbae4.chunk.js"},{"revision":"9982e15c6a3604d71768ef8c75d9b11d","url":"static/js/20.6bdae26f.chunk.js"},{"revision":"cafa9cc0874cfc973215865b69eb4c3b","url":"static/js/21.b6bfc7ce.chunk.js"},{"revision":"66dac1fdb3b3c8789bb81417a218cf35","url":"static/js/22.fb9b8854.chunk.js"},{"revision":"44560b9c6f037f13058da8799f9b1a54","url":"static/js/23.01f43768.chunk.js"},{"revision":"a24a5aef581d3e2deeb1644cd3cfba1c","url":"static/js/24.1af51da9.chunk.js"},{"revision":"ee9cdda86939ab5db3849164e629398e","url":"static/js/25.3eae2e06.chunk.js"},{"revision":"af5d8ba2a90a95d521aa653fd7e322c7","url":"static/js/26.83b2c87c.chunk.js"},{"revision":"b593be134a786946cfc542455f87a072","url":"static/js/27.8b9773c7.chunk.js"},{"revision":"5e4fb48e10a1d096c129b9619b3f36b7","url":"static/js/28.eceeae29.chunk.js"},{"revision":"114554d100f03b5ddb96420868bf127a","url":"static/js/29.f5fadc55.chunk.js"},{"revision":"64bef99130335acef63f0b205f1d8be2","url":"static/js/3.1955453d.chunk.js"},{"revision":"05e770638fcb2b90a7c409d04a87bfbc","url":"static/js/30.f58b2b04.chunk.js"},{"revision":"1a9adb67f59ab589b7442e6ca25fc341","url":"static/js/31.31909a95.chunk.js"},{"revision":"478a8e15aaafb7ed810818d76a049726","url":"static/js/32.823c87f5.chunk.js"},{"revision":"c98069653c5c1d3f496dbec21785015e","url":"static/js/33.e5e94b23.chunk.js"},{"revision":"ca1a025052552d1faa676e76f1cfee89","url":"static/js/34.fb5841ea.chunk.js"},{"revision":"c66cbee6ddfc857b765cbbd6f908be58","url":"static/js/35.41f40c0d.chunk.js"},{"revision":"bdb3a5b15ed8903055ea6c803c86a3c5","url":"static/js/36.c71d241e.chunk.js"},{"revision":"2541f75da6003437104849c6481d8897","url":"static/js/37.ce928138.chunk.js"},{"revision":"6fdac329c159c868b433d48c42e020aa","url":"static/js/38.165db2d1.chunk.js"},{"revision":"af00c7a88c5c86bb19cd8942ba59b3c3","url":"static/js/39.559bc684.chunk.js"},{"revision":"f096dcc44cc6d0995966ebfce7d53091","url":"static/js/4.d248fe82.chunk.js"},{"revision":"672cd7413d17d2bdc5c54b219ea28e03","url":"static/js/40.199e9f67.chunk.js"},{"revision":"8131e9ab62a73be9299b4269c6c0915e","url":"static/js/41.7453c5c9.chunk.js"},{"revision":"9b0d91c0889dba9b406627ecab3acbf3","url":"static/js/42.b147212a.chunk.js"},{"revision":"1110f6f4da0a817d06cbc4254afffc21","url":"static/js/43.05bd3412.chunk.js"},{"revision":"8170b3276e34d1a7909b8bc107e38c9b","url":"static/js/44.8540b9b8.chunk.js"},{"revision":"be5052a2e29650f45a0979e02176a8e7","url":"static/js/5.726ec390.chunk.js"},{"revision":"d3e5f397620557fb7793f56640facadc","url":"static/js/6.df7d60f0.chunk.js"},{"revision":"e110c96e94bd0474f3779fe40a40287a","url":"static/js/7.cb16e1e8.chunk.js"},{"revision":"6e3cf7b8ce0e7cfcac16c9cfcb096349","url":"static/js/8.910e24e0.chunk.js"},{"revision":"7c2ea23f8c982d47fd7a61ba0853d9b0","url":"static/js/main.d34a014a.chunk.js"},{"revision":"59c2cf079d9283ec5c44cc4bb3d8eb86","url":"static/js/runtime-main.d8fa37d3.js"}]);

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
