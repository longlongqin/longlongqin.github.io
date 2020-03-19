/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["D:/BLOG_QZL/Blog3/public/404.html","83670a4f88f6a6591e4bfef7ae30d79e"],["D:/BLOG_QZL/Blog3/public/about/index.html","ebf877a74a147a3bf19eed7d01e1b89d"],["D:/BLOG_QZL/Blog3/public/archives/138a.html","029c2f1a8ce8ede6b0f9bfa31c946f72"],["D:/BLOG_QZL/Blog3/public/archives/167c.html","97857fa5885fdaa0e3312953e0978a72"],["D:/BLOG_QZL/Blog3/public/archives/173c.html","fd0b79f4b43ccddf76493efbcf8bb976"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/index.html","122c2efb7f8c425ce34aba646e97a4e4"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/page/2/index.html","2ba780b405fe6516fef1ead9f61457ef"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/page/3/index.html","03dd77c4d28efd93fcffc85e424a4ff4"],["D:/BLOG_QZL/Blog3/public/archives/2020/index.html","9d28d78486fa216fcb05124ce10faa87"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/2/index.html","b5da5f4c552f005c327bb464681eea2e"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/3/index.html","13fc1d4d7ce1af21f62753f6f7d90952"],["D:/BLOG_QZL/Blog3/public/archives/3478.html","0336a00e209e647fb091e11520156a4b"],["D:/BLOG_QZL/Blog3/public/archives/3b16.html","c7d7c436f5ae50cc097b4eac2fd30697"],["D:/BLOG_QZL/Blog3/public/archives/427485bf.html","e3aab9ba4f126e24ea33a6da04b1babc"],["D:/BLOG_QZL/Blog3/public/archives/460671de.html","a97f267031d3cf7ad8defaf07eacba83"],["D:/BLOG_QZL/Blog3/public/archives/510d.html","6bab340f6a1b419ec409b3e08cec6f0a"],["D:/BLOG_QZL/Blog3/public/archives/514b.html","fbc912eb2c8b40a36d873ca7e626d14d"],["D:/BLOG_QZL/Blog3/public/archives/5a757a52.html","294dad7c453fa92e8ee7d30e31bf4def"],["D:/BLOG_QZL/Blog3/public/archives/622.html","2a0a05937f723fb611b5cc0fbca5e666"],["D:/BLOG_QZL/Blog3/public/archives/7c53.html","b39e7b5aec123fcccb673916e96484db"],["D:/BLOG_QZL/Blog3/public/archives/7f7e.html","a57ffe2bc278452293a9fc4189b02c6e"],["D:/BLOG_QZL/Blog3/public/archives/8632918.html","2c02914dc9b4f285469a1a8bb31c5554"],["D:/BLOG_QZL/Blog3/public/archives/87ef.html","8787ebace3761675bb87b53a96d7c170"],["D:/BLOG_QZL/Blog3/public/archives/9c7f.html","c9d37431f18d7c903c7d4b24ac47c8e0"],["D:/BLOG_QZL/Blog3/public/archives/a0a78e77.html","aa94f1fdf53e89c40459978d3031332f"],["D:/BLOG_QZL/Blog3/public/archives/ae12.html","9d87375ab6bd101d8cc1dc56bdb42f2c"],["D:/BLOG_QZL/Blog3/public/archives/ba04.html","e0a0563d60df8a20a22d771a9490d8ad"],["D:/BLOG_QZL/Blog3/public/archives/d4fa.html","dd8fb8dd2fb2e5a4746e670b7d9a4c72"],["D:/BLOG_QZL/Blog3/public/archives/d57d.html","745f04ba3addeed3b52e0a586f5feb73"],["D:/BLOG_QZL/Blog3/public/archives/d84f.html","36db8bad5d72fc6e37b0cbec80fc0a1c"],["D:/BLOG_QZL/Blog3/public/archives/f32f.html","3f94aab6bb5220a35463f7b3c90dcb12"],["D:/BLOG_QZL/Blog3/public/archives/f957.html","163d1fc9bfd83a4ce582a8cf91c7f04a"],["D:/BLOG_QZL/Blog3/public/archives/index.html","f065adfa71b081a85967361f05c83b6a"],["D:/BLOG_QZL/Blog3/public/archives/page/2/index.html","f065adfa71b081a85967361f05c83b6a"],["D:/BLOG_QZL/Blog3/public/archives/page/3/index.html","2ea11091da042a58757d3bd0a69f51ef"],["D:/BLOG_QZL/Blog3/public/categories/OJ/index.html","6befab1e3ba456c46c8a50f230ccc3a3"],["D:/BLOG_QZL/Blog3/public/categories/index.html","aa594696740d4f09b3354c62d81bce7c"],["D:/BLOG_QZL/Blog3/public/categories/博客搭建/index.html","631969fdeb33943cd04d5e2939a056be"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/index.html","a71a5a1502744fd6a3122ccaf928f48c"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/page/2/index.html","d8c205e9925175f13ff79a398c3afb44"],["D:/BLOG_QZL/Blog3/public/comment/index.html","cd2d9fa5926bd660085c547645c298cd"],["D:/BLOG_QZL/Blog3/public/css/style.css","5d7ed2943af8942a895ef79e9317a240"],["D:/BLOG_QZL/Blog3/public/easysearch/about/index.html","14339c16bae3fbd8adf624b64d2706f8"],["D:/BLOG_QZL/Blog3/public/easysearch/index.html","bc9edd24e02ac2ad8bf1b79bd6fa4a28"],["D:/BLOG_QZL/Blog3/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["D:/BLOG_QZL/Blog3/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["D:/BLOG_QZL/Blog3/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["D:/BLOG_QZL/Blog3/public/friends/index.html","36b1264c3776e5af286578cfd36243ff"],["D:/BLOG_QZL/Blog3/public/img/2527f9e5ef6e97ad40d0cda072bf9455.jpg","e108ff1ddbc7b1edff65cb9ac5f8a96a"],["D:/BLOG_QZL/Blog3/public/img/algolia.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["D:/BLOG_QZL/Blog3/public/img/azure.svg","a7577e663c1e0fb788fed78d7457ff35"],["D:/BLOG_QZL/Blog3/public/img/baidu.svg","124ce00f2785724d84e32ab6403386a6"],["D:/BLOG_QZL/Blog3/public/img/concurrency/df9b300efaeade58758dbe19544b080e.png","93b8422b3654afb030ded4054a5f16e6"],["D:/BLOG_QZL/Blog3/public/img/favicon.gif","f905362284e3709da8cffa1247423f8a"],["D:/BLOG_QZL/Blog3/public/img/kafka/1567762579648.png","00052c8d326a14e75fa7345004e50ac0"],["D:/BLOG_QZL/Blog3/public/img/kafka/1570611450769.png","60ae4335d4bfebac31585a06e1aca3d0"],["D:/BLOG_QZL/Blog3/public/img/kafka/1570614069844.png","76a6ed7ea38b67723a6668a8723531bf"],["D:/BLOG_QZL/Blog3/public/img/kafka/1570618606027.png","f6040d7655ddae24bb0050493e7e0c6f"],["D:/BLOG_QZL/Blog3/public/img/kafka/1570618923749.png","0c8f32e1404c6f3b0d1879dc79a58e42"],["D:/BLOG_QZL/Blog3/public/img/kafka/1570618945713.png","9bc02885a9b3c5eda2037465b979602f"],["D:/BLOG_QZL/Blog3/public/img/kafka/3951011.png","c81914368f2b957fec030ec74b16eec4"],["D:/BLOG_QZL/Blog3/public/img/kafka/3951012.png","b766a97a52eba7287fac39386a744144"],["D:/BLOG_QZL/Blog3/public/img/kafka/3951013.png","17d68f15e959c3cc2ea0dd1b97d222ab"],["D:/BLOG_QZL/Blog3/public/img/kafka/3951014.png","48687c5b0541e3f4ad62d853551a11b7"],["D:/BLOG_QZL/Blog3/public/img/kafka/3951015.png","00a0e30150ec65bc31e9b87551afbe43"],["D:/BLOG_QZL/Blog3/public/img/kafka/3951016.png","6a3240593ae7099dfe5686df77a42e96"],["D:/BLOG_QZL/Blog3/public/img/kafka/kafka.jpg","b3f8b5af09ba061abfdb73c8bd18139b"],["D:/BLOG_QZL/Blog3/public/index.html","53995979402548702d0ed8c54ff43f1c"],["D:/BLOG_QZL/Blog3/public/js/app.js","a5d659af4b9d17196436c302e39ec916"],["D:/BLOG_QZL/Blog3/public/js/ergao.js","b1f566c49973d6fdab7ba0b372a4d17f"],["D:/BLOG_QZL/Blog3/public/js/love.js","88b75dcff60dd218bbb0db6cc37f3267"],["D:/BLOG_QZL/Blog3/public/js/search.js","63c61e56f228d83b544e21b4a7ed899c"],["D:/BLOG_QZL/Blog3/public/js/volantis.js","3c2fbf0d8e8c9ce1bbf88f0bf797b9ee"],["D:/BLOG_QZL/Blog3/public/mybook/index.html","53a037f08a18702fb04f0ceb7ffcd55e"],["D:/BLOG_QZL/Blog3/public/page/2/index.html","248f68a032a1c3641f0fb0fe8b5d4fe4"],["D:/BLOG_QZL/Blog3/public/page/3/index.html","4e0283d9a10d20137d54dd27adf96743"],["D:/BLOG_QZL/Blog3/public/projects/index.html","328ce596c4dcad4c602d8cd6b5838e1b"],["D:/BLOG_QZL/Blog3/public/tags/C/index.html","f9f496f2a983b4b3f42b392ffa2e3269"],["D:/BLOG_QZL/Blog3/public/tags/Hexo主题/index.html","de170c03e44367d3d9bb631e12c74bef"],["D:/BLOG_QZL/Blog3/public/tags/Let-s-Build-A-Simple-Interpreter/index.html","3bcbdf6071436957b8336b167be86b61"],["D:/BLOG_QZL/Blog3/public/tags/Let’s-Build-A-Simple-Interpreter/index.html","a0d4265f2c1dceb365c8806fa4c1600b"],["D:/BLOG_QZL/Blog3/public/tags/OJ/index.html","b3c322a9e826984d1285132019a272dd"],["D:/BLOG_QZL/Blog3/public/tags/Yilia主题配置/index.html","d8f3b0b460e16afdebe07007b543135c"],["D:/BLOG_QZL/Blog3/public/tags/front-matter配置/index.html","b7712508527f0b9246dd1900211da2f9"],["D:/BLOG_QZL/Blog3/public/tags/index.html","c0a528a64b94ac12cf5cfde780c719d9"],["D:/BLOG_QZL/Blog3/public/tags/matery主题配置/index.html","52dd26e5f12d381798eebaf1a87d93f8"],["D:/BLOG_QZL/Blog3/public/tags/《计算几何》/index.html","aa057ab7de0010b1381e90e379d453fc"],["D:/BLOG_QZL/Blog3/public/tags/《计算机科学速成课》/index.html","b8c6a28c83c431a2ff5c3e95c2e887c1"],["D:/BLOG_QZL/Blog3/public/tags/凸包/index.html","7b3c11cbbb66c6c5dd0228624e54a384"],["D:/BLOG_QZL/Blog3/public/tags/布尔逻辑和逻辑门/index.html","ad48d77e938ddaccbc6aca00edc623f5"],["D:/BLOG_QZL/Blog3/public/tags/计算几何/index.html","b12e6bf05c58a5e627ae9628f9cc92a6"],["D:/BLOG_QZL/Blog3/public/tags/计算机科学速成课/index.html","ba1a2f762bfeb9bed59ea9a61003f859"],["D:/BLOG_QZL/Blog3/public/学习笔记/index.html","b16d3f51eae9e0127bbc35ac44b9a268"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







