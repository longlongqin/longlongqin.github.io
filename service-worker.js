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

var precacheConfig = [["D:/BLOG_QZL/Blog3/public/404.html","d0ac0b9231358d2e1b1eb23586cdacc6"],["D:/BLOG_QZL/Blog3/public/about/index.html","1c12e5237f6f33433a7af548356d1c4b"],["D:/BLOG_QZL/Blog3/public/archives/138a.html","e460fa0181ca0f20d2efede53144edb3"],["D:/BLOG_QZL/Blog3/public/archives/167c.html","1cc555871c354f8bf11710108a43d0ea"],["D:/BLOG_QZL/Blog3/public/archives/173c.html","999c643c06deb04ae252b555cc7d52e1"],["D:/BLOG_QZL/Blog3/public/archives/18085cf9.html","ac584642d06cdf1a07c28f8267419d9e"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/index.html","6c472e8dcfc897a7d87989d73f861793"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/page/2/index.html","330b7167ca3dbcb89485f304f3ce93dd"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/page/3/index.html","11e8d6da22ebefbf77b3eb384e96518a"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/page/4/index.html","e45f6b791bda2721cca913cb94be5a00"],["D:/BLOG_QZL/Blog3/public/archives/2020/04/index.html","8429b32d2531ef5dd1c92ada25c32874"],["D:/BLOG_QZL/Blog3/public/archives/2020/index.html","bd6576325ea3f4270aee676c634d9647"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/2/index.html","e0d8eee6b4d545236ebb72f186587e92"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/3/index.html","9ffde968c0d76b073ea3d48c7c566b23"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/4/index.html","117554b8490a2afc603252b83fc2ce7c"],["D:/BLOG_QZL/Blog3/public/archives/28c74e52.html","fb9b0df62cdfdfe8e100684417922e89"],["D:/BLOG_QZL/Blog3/public/archives/2f66ae56.html","0975202db5d21e51454e7b62549d40f7"],["D:/BLOG_QZL/Blog3/public/archives/2faa8a4b.html","e1e12e8b3188fa1fd917462172a31971"],["D:/BLOG_QZL/Blog3/public/archives/3478.html","5f546d0b6b2cc9ce800c42726a989bbc"],["D:/BLOG_QZL/Blog3/public/archives/3ae1bc73.html","fdea84ede81dee3c43335cfae5d4ad50"],["D:/BLOG_QZL/Blog3/public/archives/3b16.html","6c671fa6ff5daba76907d49320c48628"],["D:/BLOG_QZL/Blog3/public/archives/427485bf.html","d73ee995e4661300ae75266642383db6"],["D:/BLOG_QZL/Blog3/public/archives/448ac7f1.html","f0b4dc84807b69b1f328bd2a93cea0e5"],["D:/BLOG_QZL/Blog3/public/archives/460671de.html","3b3dbc60fade94e85d67226716589156"],["D:/BLOG_QZL/Blog3/public/archives/510d.html","77e96a595be2cc28965049a8983e09a2"],["D:/BLOG_QZL/Blog3/public/archives/514b.html","3bb100bb5b61010a3995f389c5324211"],["D:/BLOG_QZL/Blog3/public/archives/5a757a52.html","a7eac05ceb986db91c7e649524d3fe03"],["D:/BLOG_QZL/Blog3/public/archives/5fc07ec4.html","5b609688ecca230000255b8441cd21b1"],["D:/BLOG_QZL/Blog3/public/archives/622.html","0c44aa526bb269bd4334fbb386bb9c50"],["D:/BLOG_QZL/Blog3/public/archives/67343d3.html","52600a681edbfe3165d7925295c5f88a"],["D:/BLOG_QZL/Blog3/public/archives/6fc94bb0.html","0dd11629d3f03d862aac0861e5c329f9"],["D:/BLOG_QZL/Blog3/public/archives/7a585be8.html","c4d904e0775951c41d189175168c832e"],["D:/BLOG_QZL/Blog3/public/archives/7b67faab.html","1c4051a52798222694f3787262a28bc7"],["D:/BLOG_QZL/Blog3/public/archives/7c53.html","2681b36c2d7080dbf4718434d820b68c"],["D:/BLOG_QZL/Blog3/public/archives/7f7e.html","a39f96d27b6da5a1310b92c81835db9a"],["D:/BLOG_QZL/Blog3/public/archives/8632918.html","31fbe0eecd2817d919e73ec9011dabd4"],["D:/BLOG_QZL/Blog3/public/archives/87ef.html","8175c1533587cab81f88ae0e12ab6e76"],["D:/BLOG_QZL/Blog3/public/archives/9c7f.html","9fc397bbbdb9b105a1c5a351361f33b2"],["D:/BLOG_QZL/Blog3/public/archives/9f0a1d82.html","e3a64a5a39785d711fe601fe56053870"],["D:/BLOG_QZL/Blog3/public/archives/a0a78e77.html","0d7c4157c916958e0e444d67b895a215"],["D:/BLOG_QZL/Blog3/public/archives/ae12.html","ab3cef0f8c81c66f724180f5668e0348"],["D:/BLOG_QZL/Blog3/public/archives/b6a3dbf1.html","a649178762a81a9f6e4269f0c863deb5"],["D:/BLOG_QZL/Blog3/public/archives/ba04.html","d3098a0cbbb884dbbe6ba1f76299d7fc"],["D:/BLOG_QZL/Blog3/public/archives/bf113a1c.html","1ab4de8a21736e0660b5eb6eaa93d05d"],["D:/BLOG_QZL/Blog3/public/archives/c1a4eb67.html","f82c1d8c2b60a0e42b84ebcbb5b4fca6"],["D:/BLOG_QZL/Blog3/public/archives/d4fa.html","d0088c60d957d5d683ae7f93141334eb"],["D:/BLOG_QZL/Blog3/public/archives/d57d.html","0985ed31c68bd48aa997f3f8936aeeef"],["D:/BLOG_QZL/Blog3/public/archives/d84f.html","3fc87c7a1b5567b20d6d4e7bad6787ba"],["D:/BLOG_QZL/Blog3/public/archives/eaabd222.html","dea5aeb526a6239ec90c3fbd5b06b403"],["D:/BLOG_QZL/Blog3/public/archives/f32f.html","940b011b59b48d0730df7808c86b4824"],["D:/BLOG_QZL/Blog3/public/archives/f957.html","982a63c3bcd9b531d3651a04b2f6b2b0"],["D:/BLOG_QZL/Blog3/public/archives/index.html","4bee321313a53abb650367cf67f4ad37"],["D:/BLOG_QZL/Blog3/public/archives/page/2/index.html","232402e2c3a22c8002342c07ff0120f3"],["D:/BLOG_QZL/Blog3/public/archives/page/3/index.html","4bee321313a53abb650367cf67f4ad37"],["D:/BLOG_QZL/Blog3/public/archives/page/4/index.html","4bee321313a53abb650367cf67f4ad37"],["D:/BLOG_QZL/Blog3/public/categories/OJ/index.html","4f262235eaf4fd683a65a834b9a4f6cf"],["D:/BLOG_QZL/Blog3/public/categories/hexo博客搭建/index.html","04905d4ed9ee359246bc7d71b58e3ef5"],["D:/BLOG_QZL/Blog3/public/categories/index.html","992f57f7e2cb3f5558dcc579231dd15f"],["D:/BLOG_QZL/Blog3/public/categories/博客搭建/index.html","980a38c5cb870e105aa9d1797172e04d"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/C-C/index.html","eac6acd15f2b43ca3800ae9ba22d90c7"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/Git/index.html","4108eb7c5875f6205f40d3427ef23a32"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/index.html","0719eefdc883fcba91df89302cc92366"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/linux/index.html","f9b81e2a1325c68f4e022420f948e513"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/page/2/index.html","617a65f39f199553270ee2e720c9245f"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/page/3/index.html","6085251f66cdb3edf817901c13015a75"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/page/4/index.html","b428bc8b0046bc4f3612940839d610a6"],["D:/BLOG_QZL/Blog3/public/categories/配置/index.html","f25b440d60ab816d425c6c97ebc1d9d7"],["D:/BLOG_QZL/Blog3/public/comment/index.html","913dd98d1a3a05a64184b19d742c63bd"],["D:/BLOG_QZL/Blog3/public/css/style.css","c8fd7484eca1e8ec23112d2a6296def3"],["D:/BLOG_QZL/Blog3/public/easysearch/about/index.html","79b02e4972bb67e19b339791be509b94"],["D:/BLOG_QZL/Blog3/public/easysearch/index.html","fdf25bede0eef8b0074d489ea7c47f4d"],["D:/BLOG_QZL/Blog3/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["D:/BLOG_QZL/Blog3/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["D:/BLOG_QZL/Blog3/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["D:/BLOG_QZL/Blog3/public/friends/index.html","3bb6df20aac75d9f67db83008b347cbf"],["D:/BLOG_QZL/Blog3/public/img/algolia.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["D:/BLOG_QZL/Blog3/public/img/azure.svg","a7577e663c1e0fb788fed78d7457ff35"],["D:/BLOG_QZL/Blog3/public/img/baidu.svg","124ce00f2785724d84e32ab6403386a6"],["D:/BLOG_QZL/Blog3/public/index.html","0d17e252fb3fd036e0f301701c732ec5"],["D:/BLOG_QZL/Blog3/public/js/app.js","a5d659af4b9d17196436c302e39ec916"],["D:/BLOG_QZL/Blog3/public/js/ergao.js","b1f566c49973d6fdab7ba0b372a4d17f"],["D:/BLOG_QZL/Blog3/public/js/love.js","88b75dcff60dd218bbb0db6cc37f3267"],["D:/BLOG_QZL/Blog3/public/js/search.js","63c61e56f228d83b544e21b4a7ed899c"],["D:/BLOG_QZL/Blog3/public/js/volantis.js","3c2fbf0d8e8c9ce1bbf88f0bf797b9ee"],["D:/BLOG_QZL/Blog3/public/page/2/index.html","cd64bad3e82f548aab2777ad1c2fa127"],["D:/BLOG_QZL/Blog3/public/page/3/index.html","57d18a3b361ce03ec2e70e4eded4433b"],["D:/BLOG_QZL/Blog3/public/page/4/index.html","15c17024b7b2b849274cf72838cd3ef7"],["D:/BLOG_QZL/Blog3/public/projects/index.html","a5c6f25e13237d3122a30254868a2a07"],["D:/BLOG_QZL/Blog3/public/tags/C-C/index.html","822d2c25026a132a4a27a716445e7898"],["D:/BLOG_QZL/Blog3/public/tags/C/index.html","cf27a1953740c0ab00ee0af244f9bd47"],["D:/BLOG_QZL/Blog3/public/tags/Git/index.html","ee932a81857d1abf8f114ca5caa8f8ea"],["D:/BLOG_QZL/Blog3/public/tags/Hexo主题/index.html","9982b0dfad8ecd6a94d4ad8872f038ac"],["D:/BLOG_QZL/Blog3/public/tags/Let-s-Build-A-Simple-Interpreter/index.html","12356b3c2ad223ac0c9bc9d018b92255"],["D:/BLOG_QZL/Blog3/public/tags/Let’s-Build-A-Simple-Interpreter/index.html","df000b204287f942fb5d605fa87f09f7"],["D:/BLOG_QZL/Blog3/public/tags/OJ/index.html","02e3e222332b40874e7e77d777118807"],["D:/BLOG_QZL/Blog3/public/tags/Yilia主题配置/index.html","a7b6763e0ce8d7e9b1432f4d8dbcd881"],["D:/BLOG_QZL/Blog3/public/tags/forme/index.html","69896e9057b5dd8b50ce57a1851fbd9c"],["D:/BLOG_QZL/Blog3/public/tags/front-matter配置/index.html","7ce16cc941bdecbadfa92971e61a5f4c"],["D:/BLOG_QZL/Blog3/public/tags/hexo显示pdf/index.html","16ef2d498abf66aca10a2ef3c4a605d6"],["D:/BLOG_QZL/Blog3/public/tags/index.html","0d0c628df1aafe8665b04e90fbf6c1d7"],["D:/BLOG_QZL/Blog3/public/tags/linux/index.html","62e1c5be17ffd8d5f1330f748ee089ad"],["D:/BLOG_QZL/Blog3/public/tags/matery主题配置/index.html","5b1c776240e2ff302aee90ea77bec02e"],["D:/BLOG_QZL/Blog3/public/tags/opencv/index.html","2cae5c15e3ae9fe39afa9ccb89b71f52"],["D:/BLOG_QZL/Blog3/public/tags/《计算机科学速成课》/index.html","6cb397a13b0de04197f81aa0565399f9"],["D:/BLOG_QZL/Blog3/public/tags/凸包/index.html","ac67737cb89a03ae48f62965d41d6778"],["D:/BLOG_QZL/Blog3/public/tags/布尔逻辑和逻辑门/index.html","1e8ebb6da9b7e70ccfbc518dc5d300ea"],["D:/BLOG_QZL/Blog3/public/tags/计算几何/index.html","d07de4901cfa69f46d955aef6c3d232d"],["D:/BLOG_QZL/Blog3/public/tags/计算机科学速成课/index.html","33b5e0433dc8f90be9a52b317dab1206"],["D:/BLOG_QZL/Blog3/public/学习笔记/index.html","883305a56d7f91e88a011865a11453e5"]];
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







