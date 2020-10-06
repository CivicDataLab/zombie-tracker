if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"48a53665e9a5b7c3b812d5d6ba82ad13","url":"2607bfc30afc84ea4e21.worker.js"},{"revision":"1ad9f4cd70ea94fd21bad5155ad4d013","url":"404.html"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"2404584e6e996b96e794ef3a7560811f","url":"index (copy).html"},{"revision":"1ad9f4cd70ea94fd21bad5155ad4d013","url":"index.html"},{"revision":"8a7cf458c9d34314e78c883d611f1908","url":"precache-manifest.8a7cf458c9d34314e78c883d611f1908.js"},{"revision":"b7863d7beffb958ab371a7aab2b5af4d","url":"static/css/17.8fe590d3.chunk.css"},{"revision":"f7aaf4598bb9b31481c031837a74991d","url":"static/css/5.a1840750.chunk.css"},{"revision":"d85e9667454bdfe3d351727c710f1b1b","url":"static/css/vizbase.css"},{"revision":"c0350f53e9ff9249ebb2787bab833fdd","url":"static/css/vizpages.css"},{"revision":"15569902714ba1004c04a188076e81f9","url":"static/js/0.214aee3a.chunk.js"},{"revision":"9a2ea91d38271e5648b5bb196390a17a","url":"static/js/1.410150d9.chunk.js"},{"revision":"fa213239aa4d6518d642039fca593ce7","url":"static/js/11.22403a18.chunk.js"},{"revision":"4374035c5c2c13f68b3a86ea086e8ef7","url":"static/js/12.a40b2ed6.chunk.js"},{"revision":"0494dcfb4e28d23405d28aa24beb2bd7","url":"static/js/13.1f6caee4.chunk.js"},{"revision":"6d8056326ae2ffec0a40e6a36278a55a","url":"static/js/14.4382d1ab.chunk.js"},{"revision":"7f276ae72f2b9fa5a78069ca3350b8f0","url":"static/js/15.aaf22190.chunk.js"},{"revision":"eac134a775a2fe1b5ee00a7a0139d7ff","url":"static/js/16.e1224710.chunk.js"},{"revision":"d965b921115041b419fa5ed5039e899a","url":"static/js/17.f5b4e61c.chunk.js"},{"revision":"4a6c5aad0d05daa2ac1299ece09db20c","url":"static/js/18.1efe58d6.chunk.js"},{"revision":"814fc070ee53f30d1c9ecf9b28737991","url":"static/js/19.64f5d20f.chunk.js"},{"revision":"c3eb40a5dbfeac63e353c934244c251a","url":"static/js/2.a610ac42.chunk.js"},{"revision":"2a64b1b1b102190aa6ea5397ee2d2b4b","url":"static/js/20.4a8a5038.chunk.js"},{"revision":"fe6a31dc9a2162f799c25bef0531741b","url":"static/js/21.d085176e.chunk.js"},{"revision":"837a6177ee6a7f1ab4bcd6b9b0fb97a3","url":"static/js/22.445169c0.chunk.js"},{"revision":"ffa129d2b622cefc4830a113b09e1efa","url":"static/js/23.2a0d0be4.chunk.js"},{"revision":"83afed9502c751f4a2f38f28a14c9303","url":"static/js/24.2416556e.chunk.js"},{"revision":"80b58d5906854ede4ab55baba747e253","url":"static/js/25.d817b653.chunk.js"},{"revision":"371b8d1d4a9b11d36b75119724f35211","url":"static/js/26.910d4183.chunk.js"},{"revision":"daa90b1d5ba8b20aba44ad2c9b2fc060","url":"static/js/27.e98496ec.chunk.js"},{"revision":"2d996bbbfbd9532c6642ce61299bdf5a","url":"static/js/28.aee8eb87.chunk.js"},{"revision":"1611a51f83afa48c598b1cb759d15fa1","url":"static/js/29.1fe61c31.chunk.js"},{"revision":"e6d3a03a2743468980667e67d8f8f29c","url":"static/js/3.05dbf78e.chunk.js"},{"revision":"5337a238417c3ee9910314b37f0522a7","url":"static/js/30.2fe007f7.chunk.js"},{"revision":"7c9831e4cfd5dae005bdb10634981851","url":"static/js/31.d1240776.chunk.js"},{"revision":"0222471984e5fb2b1650453c95c822eb","url":"static/js/32.2bf6a436.chunk.js"},{"revision":"839eb97c2da90eb00f41bf52dee810bc","url":"static/js/33.9c061622.chunk.js"},{"revision":"b3b98fff91c39d8560f68eed1e671885","url":"static/js/34.e5094c41.chunk.js"},{"revision":"b2174ab4770a55c9bdf86d324a1fce90","url":"static/js/35.b7d24ffc.chunk.js"},{"revision":"29e4127e25887a23adc3b0448ff91f1c","url":"static/js/36.d5caaec8.chunk.js"},{"revision":"30b439588264895db3c9b7eed84263f9","url":"static/js/37.69ffa398.chunk.js"},{"revision":"c0022b960ce8a5bc832668e2bc283c35","url":"static/js/38.7f6ba324.chunk.js"},{"revision":"04cef978b4cb84be6f65181505d20a93","url":"static/js/39.5deb257a.chunk.js"},{"revision":"2dceee16022dfd7c0dd1fff346920522","url":"static/js/4.7492f1d2.chunk.js"},{"revision":"4ee19c28de417713a44050a18bfe41bf","url":"static/js/40.130f71b9.chunk.js"},{"revision":"bf67e3d3e0d77fbd9aa850c87bcee408","url":"static/js/41.456743c1.chunk.js"},{"revision":"6d70cb43b8e88dfd6f186895888cec42","url":"static/js/42.9d5ecff5.chunk.js"},{"revision":"ba0c02677d571d15caadb7a9d9647540","url":"static/js/43.27ae28db.chunk.js"},{"revision":"6bbfd7de7b3828f6b022c6a2a72856eb","url":"static/js/5.eb9c4be0.chunk.js"},{"revision":"a289cb39a5315d869304b3735b39ec10","url":"static/js/6.85169c9d.chunk.js"},{"revision":"80fcbde8a8712023cd95ce7522073311","url":"static/js/7.3eefb789.chunk.js"},{"revision":"7669f77978f9686c6408328a41f76383","url":"static/js/8.78dd2da2.chunk.js"},{"revision":"623fd8aaa68ac04aa228ddaf4ab9eab7","url":"static/js/main.01e66dcf.chunk.js"},{"revision":"4ec2e9f1c3db3e3232005c6e8efbc598","url":"static/js/runtime-main.fdf4886a.js"}]);

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
