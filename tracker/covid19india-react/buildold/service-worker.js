if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"48a53665e9a5b7c3b812d5d6ba82ad13","url":"2607bfc30afc84ea4e21.worker.js"},{"revision":"8517d5dcbfbda67cc986da4d0840db29","url":"404.html"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"8517d5dcbfbda67cc986da4d0840db29","url":"index.html"},{"revision":"b98c6cc1f939fe2c808cb121d40567f8","url":"precache-manifest.b98c6cc1f939fe2c808cb121d40567f8.js"},{"revision":"e1ba3d1519b9fd07bbf429666da71709","url":"static/css/15.5f151968.chunk.css"},{"revision":"93738409f7028ded1df0df73717e2af2","url":"static/js/0.2ce63a9f.chunk.js"},{"revision":"9ad846cd19d7e8aa0e98fa02fe012295","url":"static/js/1.937566d2.chunk.js"},{"revision":"a0677079cfc37b232a890d879dd551a5","url":"static/js/10.6667684e.chunk.js"},{"revision":"dc3e85147b8447897ff97a52a6a0d8e4","url":"static/js/11.6b356e65.chunk.js"},{"revision":"fca0f32f364e324466e4453da567d7cf","url":"static/js/12.f8408999.chunk.js"},{"revision":"5d5d5cd899f47b827c613b3983622e08","url":"static/js/13.bece79c8.chunk.js"},{"revision":"53c3b80d207ba6eb62b342b47f3b8321","url":"static/js/14.f09f74f1.chunk.js"},{"revision":"cfe010af6b39f069174a4e92c4bb708f","url":"static/js/15.3e4dc08c.chunk.js"},{"revision":"0ac4b9884fc3dd03f92da73a61e5fd6c","url":"static/js/16.881f617a.chunk.js"},{"revision":"c129b098db6152fb9ef17a78800285df","url":"static/js/17.8d8bc928.chunk.js"},{"revision":"30bfb7e3190c228f18bad560e9556709","url":"static/js/18.1928d395.chunk.js"},{"revision":"a1002ee9a9b77ff8381c47c4ad6b039f","url":"static/js/19.dd9ad9ec.chunk.js"},{"revision":"a20a900c0d3edc37a4841b86a34dec11","url":"static/js/2.1b73ad6f.chunk.js"},{"revision":"8aac675f281c1750db86788749ef0b00","url":"static/js/20.bc1dc34f.chunk.js"},{"revision":"1ebfb673d75834bb28bca4f042b7e75e","url":"static/js/21.07f630ac.chunk.js"},{"revision":"0899a1c6eba85c9b33b9375756d9d83d","url":"static/js/22.22e14c4a.chunk.js"},{"revision":"d77b3fa23b5e36a75732568742edcdf4","url":"static/js/23.0e65a69f.chunk.js"},{"revision":"a1ae07e3f3092cc20e2db34dd0fcb70e","url":"static/js/24.d86f9343.chunk.js"},{"revision":"df5948b6a3741af8c6ca72e669eb3712","url":"static/js/25.f1809ce9.chunk.js"},{"revision":"4c5b6d3c59b63c631e24871b41512b6c","url":"static/js/26.5a377569.chunk.js"},{"revision":"5cf65404405ec0057e183334103bf427","url":"static/js/27.a87d5713.chunk.js"},{"revision":"9182d92d98b0ac56c9ebe43a87f4a559","url":"static/js/28.35225a97.chunk.js"},{"revision":"1e24d0a540a0990f59e8f86ec97fa3b6","url":"static/js/29.34af8b85.chunk.js"},{"revision":"7826443a52139b570a20655bc667a9e2","url":"static/js/3.7f38a4bd.chunk.js"},{"revision":"654412f2cbf4263ec06f890d75974f54","url":"static/js/30.4026b68a.chunk.js"},{"revision":"1be03ed86408f0cccf2257b8cd1bda35","url":"static/js/31.ea23146d.chunk.js"},{"revision":"03e8598cb38d922eba57aaf09be3a82d","url":"static/js/32.70bd2fb9.chunk.js"},{"revision":"9e58d1df6fabea9bbf0e459b99b17c92","url":"static/js/33.74324b92.chunk.js"},{"revision":"f3eebc1dfc059457e1f9460ce3f14dcf","url":"static/js/34.15577999.chunk.js"},{"revision":"094b1efd289500aacbff0361b539ed65","url":"static/js/35.142c7737.chunk.js"},{"revision":"bbf52299660ade849010b3cb3ff693bc","url":"static/js/36.e84f6db2.chunk.js"},{"revision":"642b25a81c106b347d47f982e112df89","url":"static/js/37.7983093d.chunk.js"},{"revision":"790df90ee18ac2a095c234e6146c2332","url":"static/js/38.f4d36362.chunk.js"},{"revision":"47e182bd146365e565b2cfa679597ac4","url":"static/js/39.56d9d67f.chunk.js"},{"revision":"380ee49b810208a9e57bf69d00f0c4dd","url":"static/js/4.0b60ff69.chunk.js"},{"revision":"834762a20cb9398f37232be33c017ec6","url":"static/js/40.b97be6df.chunk.js"},{"revision":"e37b9697baef46516ce2b2fdde8db98c","url":"static/js/41.1c60a814.chunk.js"},{"revision":"2c3f60de516f625b0cf46e0472c7d400","url":"static/js/5.520ddacc.chunk.js"},{"revision":"9dc679fdcd2aaae7f9ae6ea573357ead","url":"static/js/6.3a1c2d59.chunk.js"},{"revision":"3ecaa0ba0aaf0a397ade9eea2a22bb7e","url":"static/js/9.dc2b17a6.chunk.js"},{"revision":"8eaeb00777e3cbd675f2588895686762","url":"static/js/main.968ca358.chunk.js"},{"revision":"7ad5cd1c88fcf9d465de97bd671f816f","url":"static/js/runtime-main.0cd52d73.js"}]);

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
