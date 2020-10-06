if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"48a53665e9a5b7c3b812d5d6ba82ad13","url":"2607bfc30afc84ea4e21.worker.js"},{"revision":"8c8503e41669acc090cd862da377c7d6","url":"404.html"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"1c16e2c93a83851bb0181252c9a65b71","url":"index (another copy).html"},{"revision":"2404584e6e996b96e794ef3a7560811f","url":"index (copy).html"},{"revision":"8c8503e41669acc090cd862da377c7d6","url":"index.html"},{"revision":"a43aa9d9b60d639c98ea72b3d23cd421","url":"precache-manifest.a43aa9d9b60d639c98ea72b3d23cd421.js"},{"revision":"b2f1fcb887f1bc255ba73d2a43a6eaea","url":"static/css/19.1082558b.chunk.css"},{"revision":"b33d6235aeb2b57ff42b5a1b1c8e14c7","url":"static/css/7.a1840750.chunk.css"},{"revision":"4c073b99f794e1c53df3ec7e01a43414","url":"static/css/vizbase.css"},{"revision":"c0350f53e9ff9249ebb2787bab833fdd","url":"static/css/vizpages.css"},{"revision":"cb3a19888678d8de6283ff427415d467","url":"static/js/0.8c45b169.chunk.js"},{"revision":"faac2ab0d264b671c849d48a8f0a995d","url":"static/js/1.511b203c.chunk.js"},{"revision":"f7e32e7cb5a35d760d2d9a0d44f089f8","url":"static/js/12.147b015e.chunk.js"},{"revision":"c5cc1346711e6e26cc7c5ba56cdffa08","url":"static/js/13.decbf9b5.chunk.js"},{"revision":"65022ea5acd81c1db11a0cc438e01e5b","url":"static/js/14.749a91c8.chunk.js"},{"revision":"45ed04b6a4da233d2a68f99a13059fda","url":"static/js/15.1876c70f.chunk.js"},{"revision":"a950de4dce14298af7b53920bd48ef3b","url":"static/js/16.9a983546.chunk.js"},{"revision":"c6273c42f6b86820cc388e83a176227b","url":"static/js/17.330ca8ea.chunk.js"},{"revision":"8b476ff7eae84b8c6746dbc4b2eecc6f","url":"static/js/18.3f8c9186.chunk.js"},{"revision":"af366ae497bb568d52ec542a937e4d38","url":"static/js/19.486f4748.chunk.js"},{"revision":"7ac79dd841645318327e76bc85e5a305","url":"static/js/2.c5f1f0f9.chunk.js"},{"revision":"13f8e22fff42b0135240eac88c4ef4e1","url":"static/js/20.62f4ca9e.chunk.js"},{"revision":"c6d236051b55e7a45950776ace1196cf","url":"static/js/21.4347a86e.chunk.js"},{"revision":"79ad2528be4e6ea15fc443a5fbcb440b","url":"static/js/22.72456863.chunk.js"},{"revision":"fded0c2e9b49800e81e6dd0e7b6f7dcb","url":"static/js/23.223e2744.chunk.js"},{"revision":"5c45ae6221b3c6b36e1793cafb508b0f","url":"static/js/24.3ba06eb9.chunk.js"},{"revision":"fefbf90634bf8a9ae2706b3972af853f","url":"static/js/25.9ea22d22.chunk.js"},{"revision":"152e2dc74c91e49554eae8309a7a5ceb","url":"static/js/26.8b095c55.chunk.js"},{"revision":"38519204cb2abb7b4db63f7ee6b02c63","url":"static/js/27.4cc25eb4.chunk.js"},{"revision":"16465d631c140f6f8a0de17d195dc44a","url":"static/js/28.85e5bfe8.chunk.js"},{"revision":"34065d9dd3f365ef0244f1a57c12873d","url":"static/js/29.9ec2fb5f.chunk.js"},{"revision":"a650c7c7e621da59ad73f142e54a01be","url":"static/js/3.da865406.chunk.js"},{"revision":"5dd1671d533bac2cd347c8a924f0f366","url":"static/js/30.e657b76e.chunk.js"},{"revision":"7214eb3ba6d449f3ef9aa1c0328c3084","url":"static/js/31.bff20ee1.chunk.js"},{"revision":"343c4098e058e97d7f1efe072f1b18b6","url":"static/js/32.13b9d546.chunk.js"},{"revision":"e8bee556d91fcf047521131ceb97ad15","url":"static/js/33.b8559f5a.chunk.js"},{"revision":"28fb6bb7e408ae514e439a5ced5777a0","url":"static/js/34.3f1e4915.chunk.js"},{"revision":"1402894129fd7f9a8890847fe315701c","url":"static/js/35.9380f216.chunk.js"},{"revision":"f0763f77cf2c12567c0816e53534f5a3","url":"static/js/36.80ae2d5a.chunk.js"},{"revision":"1eba356195f1fb4a46748e9c9a65085f","url":"static/js/37.01ef5d4c.chunk.js"},{"revision":"5ca7c704ba01cc5ae49d2e92b197ee33","url":"static/js/38.b7b4e0ee.chunk.js"},{"revision":"b7cc7fb4cdca0b205f27f68119b7c43e","url":"static/js/39.1d661d16.chunk.js"},{"revision":"3f68c3e624f21113dfc2baecece3c499","url":"static/js/4.37e3316a.chunk.js"},{"revision":"cf6cf21fed2f999380825bc1918d57ee","url":"static/js/40.ae9e1964.chunk.js"},{"revision":"78286121a85a2d1aa38f86b2193adc73","url":"static/js/41.93cf4a37.chunk.js"},{"revision":"c718827f625a09d2eb164ab900cf6613","url":"static/js/42.6067da4f.chunk.js"},{"revision":"cf6aae59f2a6e6c0edfc2ac26c1fa8c1","url":"static/js/43.0b7d588b.chunk.js"},{"revision":"aa741ddb18b8b5021b7109204a84e11b","url":"static/js/44.725d3fd2.chunk.js"},{"revision":"2ffdbf945fc74f6589d3e40e5a51242b","url":"static/js/45.1177c7b9.chunk.js"},{"revision":"f4839956679635dfb123467de73c78ba","url":"static/js/46.576f40f8.chunk.js"},{"revision":"c5daf79c96577302e617e399ac0a2a7a","url":"static/js/47.0d261b7e.chunk.js"},{"revision":"f23ba2c0ad9d6c9250d03bae7977bcea","url":"static/js/48.3111bed3.chunk.js"},{"revision":"24868fda8003d0d549c403c393267be4","url":"static/js/49.4dd432a7.chunk.js"},{"revision":"2db7529f41332195b76333f43ed2be62","url":"static/js/5.fc796892.chunk.js"},{"revision":"98ccd626b73a11cb0afb6a555cd013bb","url":"static/js/50.095b0692.chunk.js"},{"revision":"9375af411e4065893e1589a3139d4372","url":"static/js/6.1570ec70.chunk.js"},{"revision":"d68fa77337f75430e09cb710bdf3927f","url":"static/js/7.deeb8c88.chunk.js"},{"revision":"ae926142cfcdf22e2c05a2062f329f93","url":"static/js/8.a93307f7.chunk.js"},{"revision":"b67cba3dbe909adaf9da8dbe8005495d","url":"static/js/9.78c1c68c.chunk.js"},{"revision":"3345ebb741bbe7b5f88203e758ec8f08","url":"static/js/main.4a27353c.chunk.js"},{"revision":"3b178c5a213dc896f1bbc181208a38b4","url":"static/js/runtime-main.388d2c96.js"}]);

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
