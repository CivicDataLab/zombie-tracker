if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"48a53665e9a5b7c3b812d5d6ba82ad13","url":"2607bfc30afc84ea4e21.worker.js"},{"revision":"ed0ae72b9c24a990f521c5b195d9cff5","url":"404.html"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"2404584e6e996b96e794ef3a7560811f","url":"index (copy).html"},{"revision":"ed0ae72b9c24a990f521c5b195d9cff5","url":"index.html"},{"revision":"6eecb9ee6372bf347129073393830d5e","url":"precache-manifest.6eecb9ee6372bf347129073393830d5e.js"},{"revision":"b46aef052e7b46e51de9ea4254eeb085","url":"static/css/16.5f151968.chunk.css"},{"revision":"940eb40848a44d3a0d3480a9b5d19753","url":"static/css/base.css"},{"revision":"c0350f53e9ff9249ebb2787bab833fdd","url":"static/css/pages.css"},{"revision":"3a78c98ece983cb477987b0c59e98b3f","url":"static/js/0.1f4e3707.chunk.js"},{"revision":"9ad846cd19d7e8aa0e98fa02fe012295","url":"static/js/1.937566d2.chunk.js"},{"revision":"66b92abc7979b6c5a7101bfe0aaf0033","url":"static/js/10.b3b874da.chunk.js"},{"revision":"a28605030780081b5ff486d2ea8dced9","url":"static/js/11.9c0cd123.chunk.js"},{"revision":"864919b93a5b561ba4da2e766ccb9904","url":"static/js/12.d08f5dcf.chunk.js"},{"revision":"ca7dec6dafead4a650ad240bed7c9229","url":"static/js/13.ed3c497e.chunk.js"},{"revision":"c2505ff26ef74b2857e7ecf68c62be90","url":"static/js/14.89b5a54f.chunk.js"},{"revision":"e3f4af517e7efc5a96d331c52323f0da","url":"static/js/15.782058a7.chunk.js"},{"revision":"d1777ea71f14c55178dc6e7bbe47b094","url":"static/js/16.795de516.chunk.js"},{"revision":"82130d365b93e2b9ead2acaa6af794a1","url":"static/js/17.38c3118c.chunk.js"},{"revision":"3cf3207ed22d10a9b7793b1641d8a133","url":"static/js/18.256c3944.chunk.js"},{"revision":"06860f63d4b54ec4d95d549e6a828d88","url":"static/js/19.0d4ef08a.chunk.js"},{"revision":"a20a900c0d3edc37a4841b86a34dec11","url":"static/js/2.1b73ad6f.chunk.js"},{"revision":"89ee3d23b53e32e0dbcab8c458b2cdc8","url":"static/js/20.e7a07e8d.chunk.js"},{"revision":"283fc1fdf17114ed54b149a34ba078f1","url":"static/js/21.0bd68e54.chunk.js"},{"revision":"b698a028e8c8afa97f7d04e9a516bc16","url":"static/js/22.3a7eb446.chunk.js"},{"revision":"b68335e076096b105f5ff42847bd42d8","url":"static/js/23.fd5e147e.chunk.js"},{"revision":"e96a57a439e97a3fcd934c34bab6f49f","url":"static/js/24.4fcfa3d5.chunk.js"},{"revision":"3ffd9f87f02177bf4d9ea92bea6fd162","url":"static/js/25.65d2be1f.chunk.js"},{"revision":"265f43bc20394d839051519c52b32216","url":"static/js/26.6bbf19c7.chunk.js"},{"revision":"8535b9c840410e0d07e2e6663efcff9c","url":"static/js/27.af3b2749.chunk.js"},{"revision":"57549fccb778746f5abc354170a06387","url":"static/js/28.28672454.chunk.js"},{"revision":"046dfbac885a0fd756c36d438389c0bb","url":"static/js/29.e604577e.chunk.js"},{"revision":"e367cbe43cc1941345c2fafc2a5b5de3","url":"static/js/3.dbc0edb2.chunk.js"},{"revision":"9bf2662154eebcdb7d83620afd16f95c","url":"static/js/30.0560052d.chunk.js"},{"revision":"28545a42ef09c59522201d24928f32a0","url":"static/js/31.21b5fccb.chunk.js"},{"revision":"fb02804ae28bbcea368caa3ca0ca1a8c","url":"static/js/32.5e984a18.chunk.js"},{"revision":"0f294b39560fc6cc2f0465d39da000ce","url":"static/js/33.fd320601.chunk.js"},{"revision":"87591f06b891c578991860a39af9b1d1","url":"static/js/34.634f9a5f.chunk.js"},{"revision":"243fd51211a1dfc5b7605aae4ff19bf6","url":"static/js/35.e552d325.chunk.js"},{"revision":"4ccad703bb2e21bde48dcd0c141a6711","url":"static/js/36.5a7f3c24.chunk.js"},{"revision":"4c3d25d8e91756d9fa04ac43427db5e5","url":"static/js/37.096834c4.chunk.js"},{"revision":"e342ae6d514eb09274fb009e43cd99c6","url":"static/js/38.72962f77.chunk.js"},{"revision":"47e182bd146365e565b2cfa679597ac4","url":"static/js/39.56d9d67f.chunk.js"},{"revision":"4e383b438a0447b8384ddb378acb40bb","url":"static/js/4.7971be35.chunk.js"},{"revision":"834762a20cb9398f37232be33c017ec6","url":"static/js/40.b97be6df.chunk.js"},{"revision":"e37b9697baef46516ce2b2fdde8db98c","url":"static/js/41.1c60a814.chunk.js"},{"revision":"9cd285f30c9934af2f63744348e9d584","url":"static/js/5.b900b8d2.chunk.js"},{"revision":"5e5e5f6436289b2240cca9f2ce4a51b4","url":"static/js/6.57925fe4.chunk.js"},{"revision":"3ecaa0ba0aaf0a397ade9eea2a22bb7e","url":"static/js/9.dc2b17a6.chunk.js"},{"revision":"33631e0d020079d1c9582bc87470d84a","url":"static/js/main.3b45b250.chunk.js"},{"revision":"8ce6789893b8164fe6b20b71db6274df","url":"static/js/runtime-main.42089d54.js"}]);

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
