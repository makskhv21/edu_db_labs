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
    "url": "404.html",
    "revision": "1bd809546986690295dc5b3389e7e58c"
  },
  {
    "url": "assets/css/0.styles.83c7167e.css",
    "revision": "cefff3f8c27847bd006c320ad3563c8b"
  },
  {
    "url": "assets/img/add-grant-to-role-error.3e4056ed.png",
    "revision": "3e4056ed7ab1d2a2f2f9db0b8d8b1c14"
  },
  {
    "url": "assets/img/add-grant-tto-role.526240fc.png",
    "revision": "526240fc76fba5621cc6f3c63a54e598"
  },
  {
    "url": "assets/img/add-media-error.7c3199b1.png",
    "revision": "7c3199b105c6e4ea33f989cc182ce57e"
  },
  {
    "url": "assets/img/add-media-table.499c574a.png",
    "revision": "499c574a9c486eaa2dad14c2afe288ef"
  },
  {
    "url": "assets/img/add-media.db2a8c74.png",
    "revision": "db2a8c740fd87dd2179c6a8928b91374"
  },
  {
    "url": "assets/img/add-origin-error.8179e3b4.png",
    "revision": "8179e3b4321bf9de6c6286dfcc4ba087"
  },
  {
    "url": "assets/img/add-origin-table.4d23ef80.png",
    "revision": "4d23ef8078137e01499149420c7c8c4f"
  },
  {
    "url": "assets/img/add-origin.ff452167.png",
    "revision": "ff45216734c979fca39bd3fe46ae3189"
  },
  {
    "url": "assets/img/add-request-error.f716de06.png",
    "revision": "f716de06031c89b7c5e1f0e476a3348e"
  },
  {
    "url": "assets/img/add-request-table.8201ee41.png",
    "revision": "8201ee41f202c777dd8a246c06a55236"
  },
  {
    "url": "assets/img/add-request.813ea6d9.png",
    "revision": "813ea6d9c27cd8d2d217e2e9258a5ffc"
  },
  {
    "url": "assets/img/add-role-error.69c2affa.png",
    "revision": "69c2affa486f4cb04a90f4fc32ecdd03"
  },
  {
    "url": "assets/img/add-role.73654929.png",
    "revision": "736549299b9f2062ae8256a0a0c121dd"
  },
  {
    "url": "assets/img/add-user-error.2449ec2e.png",
    "revision": "2449ec2e997aee9c80497d816288617b"
  },
  {
    "url": "assets/img/add-user-table.39bf52b7.png",
    "revision": "39bf52b7c510b8417210bf1362b2046e"
  },
  {
    "url": "assets/img/add-user.f3dfa763.png",
    "revision": "f3dfa7635c978b6725248c4561f1f06f"
  },
  {
    "url": "assets/img/change-user-role-table.2808d73a.png",
    "revision": "2808d73abe2eb98a6af08389be8b8590"
  },
  {
    "url": "assets/img/change-user-role.3a5493bc.png",
    "revision": "3a5493bc74d41011475523e362aea03c"
  },
  {
    "url": "assets/img/delete-media-error.869d3a5b.png",
    "revision": "869d3a5b55c02d2b193a8239bb950bd3"
  },
  {
    "url": "assets/img/delete-media-table.7fc061cb.png",
    "revision": "7fc061cb59c31f06704dc611e6156d6a"
  },
  {
    "url": "assets/img/delete-media.35d0df88.png",
    "revision": "35d0df880c3790dc740e198f251f93e5"
  },
  {
    "url": "assets/img/delete-origin-error.e62ee38a.png",
    "revision": "e62ee38ab2a4961023d31129f9f6b255"
  },
  {
    "url": "assets/img/delete-origin-table.1d62d7cf.png",
    "revision": "1d62d7cf20cd234526d99c841a81f113"
  },
  {
    "url": "assets/img/delete-origin.8e5c593f.png",
    "revision": "8e5c593f6cbab16e4288d963b9dfc798"
  },
  {
    "url": "assets/img/delete-request-error.4eb1cf4b.png",
    "revision": "4eb1cf4b8ecb2cdf539ec366b0bbe10e"
  },
  {
    "url": "assets/img/delete-request.9447c0a3.png",
    "revision": "9447c0a34d1567db6b6d09ad1213c454"
  },
  {
    "url": "assets/img/delete-role-error.99e96386.png",
    "revision": "99e9638682b793b24abe81e57a4cf849"
  },
  {
    "url": "assets/img/delete-role.c243b09b.png",
    "revision": "c243b09b656f940ab88edb99807a90d0"
  },
  {
    "url": "assets/img/delete-user-error.80b410ac.png",
    "revision": "80b410ac9e0f5a1c467036dbabda2187"
  },
  {
    "url": "assets/img/delete-user-table.df346ea4.png",
    "revision": "df346ea48b3d11fcaace4ad0bec9ba6f"
  },
  {
    "url": "assets/img/delete-user.95da3376.png",
    "revision": "95da33764acb4616de36b587940ccf0d"
  },
  {
    "url": "assets/img/get-all-users.c4c36206.png",
    "revision": "c4c362060def4ee9242fd8f846760196"
  },
  {
    "url": "assets/img/get-media-by-request.6b586c9f.png",
    "revision": "6b586c9f0b494513836c33ddc0af17d6"
  },
  {
    "url": "assets/img/get-user-by-id.7e5397e3.png",
    "revision": "7e5397e3eedaa25ff5589ffeed004ee3"
  },
  {
    "url": "assets/img/search-media.c970813c.png",
    "revision": "c970813c07d81f3fff1e263a8f205788"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/table_grant.b4ed0cbd.png",
    "revision": "b4ed0cbd565f70bb883303631a2de9e0"
  },
  {
    "url": "assets/img/table_media.00580cd1.png",
    "revision": "00580cd114da4b104111c2816bcde885"
  },
  {
    "url": "assets/img/table_origin.dbd45724.png",
    "revision": "dbd45724d36e91004e14fb3045996b1b"
  },
  {
    "url": "assets/img/table_user.bc52cc1d.png",
    "revision": "bc52cc1d04444e6a84fa12bdbb2f1ccf"
  },
  {
    "url": "assets/js/10.f9708bb3.js",
    "revision": "3f688b92284f1d283b14a5047a9c292f"
  },
  {
    "url": "assets/js/11.b4cc4bb0.js",
    "revision": "4673dce0056527a9d6a27a733b030b5c"
  },
  {
    "url": "assets/js/12.e505b0ce.js",
    "revision": "351cd04f05726677e34ce970e681e72c"
  },
  {
    "url": "assets/js/13.22e674df.js",
    "revision": "ba5eb9ae1d744c4454ca1659d6a3b43f"
  },
  {
    "url": "assets/js/14.542c6b9c.js",
    "revision": "ccbe4c779f551088617be48ed3286f57"
  },
  {
    "url": "assets/js/15.bb4eccf0.js",
    "revision": "b3e6a31f69373b608338bd14daf0801e"
  },
  {
    "url": "assets/js/16.5d45ee28.js",
    "revision": "ebd7b4d7d4f124db10692b20dc805c15"
  },
  {
    "url": "assets/js/17.6515f0a1.js",
    "revision": "c42c1d0d4f8120d346932ee7e311334a"
  },
  {
    "url": "assets/js/18.1af7decb.js",
    "revision": "497c87c26b083c425fb3bd4d7c43b590"
  },
  {
    "url": "assets/js/19.888d9e69.js",
    "revision": "01e4736afdcf366c61dd1017e0ee0599"
  },
  {
    "url": "assets/js/2.c1a0f6b6.js",
    "revision": "d8ff1ee794a4dc077f5b6f8128049c39"
  },
  {
    "url": "assets/js/20.df16f2c4.js",
    "revision": "d403c5b35483c764da601d9bcadd2ece"
  },
  {
    "url": "assets/js/21.64699345.js",
    "revision": "10e885421dcf0187b8a735b0cef9797f"
  },
  {
    "url": "assets/js/22.9909cea3.js",
    "revision": "ac100bcb1e151bab54a793658b209906"
  },
  {
    "url": "assets/js/23.977fef9f.js",
    "revision": "aa376d1a82eef36a96387e28ce68ba85"
  },
  {
    "url": "assets/js/24.1fbe9616.js",
    "revision": "a94aefe15cffc6f6f82afebe6cba553b"
  },
  {
    "url": "assets/js/26.41378db7.js",
    "revision": "e84b1444e5fa2136f6fc2a3708e0ba6f"
  },
  {
    "url": "assets/js/3.3b8b4a51.js",
    "revision": "4aa1078cbd60f43cb1ca54d500fa13ff"
  },
  {
    "url": "assets/js/4.4f2b5775.js",
    "revision": "4ac7fa6cbe8598fb8ff5e3eb198e8d78"
  },
  {
    "url": "assets/js/5.2679090d.js",
    "revision": "4160e510b2ffd2f776396a834923b872"
  },
  {
    "url": "assets/js/6.292eb929.js",
    "revision": "08ce0dac37f2e9571f7453be297fbabf"
  },
  {
    "url": "assets/js/7.b2ffdd99.js",
    "revision": "3448544e4b5b510c66e61152086310ca"
  },
  {
    "url": "assets/js/8.e07079ca.js",
    "revision": "3d79c010da466f8578db56b19a9c4ed2"
  },
  {
    "url": "assets/js/9.b2293b4f.js",
    "revision": "ae802b87d8ae3a34f325a882c21fe371"
  },
  {
    "url": "assets/js/app.b2f81a10.js",
    "revision": "49e6945d3c807e77a71e531d51054f3d"
  },
  {
    "url": "conclusion/index.html",
    "revision": "f26ec40490595b5d20e1cd354b966501"
  },
  {
    "url": "design/index.html",
    "revision": "41d994e154695ea06b3a59217cee0f4b"
  },
  {
    "url": "index.html",
    "revision": "e05fde41983549a214fd66b10111b22f"
  },
  {
    "url": "intro/index.html",
    "revision": "8ee8e70ac9618bf30fc92c08f5e8e229"
  },
  {
    "url": "license.html",
    "revision": "c6ae94487788630ac26fdec72cecb7f2"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "72f56254b637811addf783a57623c0a5"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "4b8c99a9e3549a26c5c17680b73ddfaa"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "b509303e698a3cad0cf9a7344ba61437"
  },
  {
    "url": "software/index.html",
    "revision": "477e200f1670ce87251b78a18e8e9eb3"
  },
  {
    "url": "test/index.html",
    "revision": "4dbb694a413cbc49b88e01bf44a98aa5"
  },
  {
    "url": "use cases/index.html",
    "revision": "00e017c8b446366346e49e80a17808e3"
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
