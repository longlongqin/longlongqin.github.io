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

var precacheConfig = [["D:/BLOG_QZL/Blog3/public/404.html","a487528a2d5fc169e9334fd69415d7f5"],["D:/BLOG_QZL/Blog3/public/about/index.html","86efb06620f445586339c4d543de08a0"],["D:/BLOG_QZL/Blog3/public/archives/138a.html","429735d7f823588c78c1a93fa0f853fd"],["D:/BLOG_QZL/Blog3/public/archives/167c.html","9032bc256a15dda858795679c01338a7"],["D:/BLOG_QZL/Blog3/public/archives/173c.html","e003dc400beb1eb0f2010b0b93277d0e"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/index.html","e48c1ce5b739c328ca4f689f80469723"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/page/2/index.html","385ef91d67e0132127e00ff065944c74"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/page/3/index.html","22909290ce10ff72f9937d6851024aa5"],["D:/BLOG_QZL/Blog3/public/archives/2020/index.html","e3bca3b0e1dec5b29ece8a8d8c2bcbb1"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/2/index.html","e4fca10b2f969bfd8092f37e52ece50f"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/3/index.html","90811081da6d2da7d0e9eeb5a2032da0"],["D:/BLOG_QZL/Blog3/public/archives/2d6f5e7f.html","58817d8bdbbdb55c934d2eb8413924d3"],["D:/BLOG_QZL/Blog3/public/archives/3478.html","905c390bc07b7949deffceb1697cd0a0"],["D:/BLOG_QZL/Blog3/public/archives/3b16.html","191430a450d3aa05ab8eabe1ab71fd52"],["D:/BLOG_QZL/Blog3/public/archives/427485bf.html","32bbb5453643059c7d17fa6ea033d7d0"],["D:/BLOG_QZL/Blog3/public/archives/460671de.html","725e32cbfcbef30676cbbceceaf45ef3"],["D:/BLOG_QZL/Blog3/public/archives/510d.html","e79bbc65daf1c4f4ccbe3b64be2ae979"],["D:/BLOG_QZL/Blog3/public/archives/514b.html","8d33d3bf64951c82eb6130f80780c3d4"],["D:/BLOG_QZL/Blog3/public/archives/622.html","07bc3d3bf980832ce933c684a8a00f37"],["D:/BLOG_QZL/Blog3/public/archives/7c53.html","3ade5e0323a715d85016d9d972136705"],["D:/BLOG_QZL/Blog3/public/archives/7f7e.html","a7ae392e854773011b64321b566de976"],["D:/BLOG_QZL/Blog3/public/archives/87ef.html","9504e2c5b8e94b5f260e3e4ed82ca87d"],["D:/BLOG_QZL/Blog3/public/archives/9c7f.html","6a6202b3bcc614984309d3d9f1c4638e"],["D:/BLOG_QZL/Blog3/public/archives/ba04.html","80c51fe0415239847da08c521251d7ba"],["D:/BLOG_QZL/Blog3/public/archives/d4fa.html","44b9797c74c4dc375332636b2b7ec5ea"],["D:/BLOG_QZL/Blog3/public/archives/d57d.html","e4d8c173f617e6951fa7f9b669e0870a"],["D:/BLOG_QZL/Blog3/public/archives/d84f.html","a1fc7080615ec0e7fc127b99952b299b"],["D:/BLOG_QZL/Blog3/public/archives/f32f.html","9f745c6d0f99fbfb78ce95ffac4909e6"],["D:/BLOG_QZL/Blog3/public/archives/f957.html","5f2944dcd4c30dd395ce8d4ce69306b5"],["D:/BLOG_QZL/Blog3/public/archives/index.html","3573d82910bea1cd833bf5a151a6f002"],["D:/BLOG_QZL/Blog3/public/archives/page/2/index.html","4ed61834e2c7aaad8a96a0c1843f4a53"],["D:/BLOG_QZL/Blog3/public/archives/page/3/index.html","4ed61834e2c7aaad8a96a0c1843f4a53"],["D:/BLOG_QZL/Blog3/public/categories/OJ/index.html","452a30d6e524beaa5c98fe7637401f27"],["D:/BLOG_QZL/Blog3/public/categories/index.html","64fcd1d3c93027e03f53e65e46630d65"],["D:/BLOG_QZL/Blog3/public/categories/博客搭建/index.html","76a0dc1e87fc6788b754c05a1db73a27"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/index.html","9c66eb79c647b851599393df8ece282d"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/page/2/index.html","9ad3369eafa699f977dd05ece5b8389d"],["D:/BLOG_QZL/Blog3/public/comment/index.html","40d6bd3856b813a9fbd2eb7b0b960381"],["D:/BLOG_QZL/Blog3/public/css/style.css","5d7ed2943af8942a895ef79e9317a240"],["D:/BLOG_QZL/Blog3/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["D:/BLOG_QZL/Blog3/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["D:/BLOG_QZL/Blog3/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["D:/BLOG_QZL/Blog3/public/friends/index.html","5a758c10922a44b7ebdd21a8e89c2daa"],["D:/BLOG_QZL/Blog3/public/img/2527f9e5ef6e97ad40d0cda072bf9455.jpg","e108ff1ddbc7b1edff65cb9ac5f8a96a"],["D:/BLOG_QZL/Blog3/public/img/algolia.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["D:/BLOG_QZL/Blog3/public/img/azure.svg","a7577e663c1e0fb788fed78d7457ff35"],["D:/BLOG_QZL/Blog3/public/img/baidu.svg","124ce00f2785724d84e32ab6403386a6"],["D:/BLOG_QZL/Blog3/public/img/concurrency/df9b300efaeade58758dbe19544b080e.png","93b8422b3654afb030ded4054a5f16e6"],["D:/BLOG_QZL/Blog3/public/img/favicon.gif","f905362284e3709da8cffa1247423f8a"],["D:/BLOG_QZL/Blog3/public/img/kafka/1567762579648.png","00052c8d326a14e75fa7345004e50ac0"],["D:/BLOG_QZL/Blog3/public/img/kafka/1570611450769.png","60ae4335d4bfebac31585a06e1aca3d0"],["D:/BLOG_QZL/Blog3/public/img/kafka/1570614069844.png","76a6ed7ea38b67723a6668a8723531bf"],["D:/BLOG_QZL/Blog3/public/img/kafka/1570618606027.png","f6040d7655ddae24bb0050493e7e0c6f"],["D:/BLOG_QZL/Blog3/public/img/kafka/1570618923749.png","0c8f32e1404c6f3b0d1879dc79a58e42"],["D:/BLOG_QZL/Blog3/public/img/kafka/1570618945713.png","9bc02885a9b3c5eda2037465b979602f"],["D:/BLOG_QZL/Blog3/public/img/kafka/3951011.png","c81914368f2b957fec030ec74b16eec4"],["D:/BLOG_QZL/Blog3/public/img/kafka/3951012.png","b766a97a52eba7287fac39386a744144"],["D:/BLOG_QZL/Blog3/public/img/kafka/3951013.png","17d68f15e959c3cc2ea0dd1b97d222ab"],["D:/BLOG_QZL/Blog3/public/img/kafka/3951014.png","48687c5b0541e3f4ad62d853551a11b7"],["D:/BLOG_QZL/Blog3/public/img/kafka/3951015.png","00a0e30150ec65bc31e9b87551afbe43"],["D:/BLOG_QZL/Blog3/public/img/kafka/3951016.png","6a3240593ae7099dfe5686df77a42e96"],["D:/BLOG_QZL/Blog3/public/img/kafka/kafka.jpg","b3f8b5af09ba061abfdb73c8bd18139b"],["D:/BLOG_QZL/Blog3/public/img/link/bokeyuan.png","ba529c73e5c5c70bdbc3b52710c5fd8d"],["D:/BLOG_QZL/Blog3/public/index.html","e65ea59cd7f29fac1ea00b35a8a023af"],["D:/BLOG_QZL/Blog3/public/js/app.js","a5d659af4b9d17196436c302e39ec916"],["D:/BLOG_QZL/Blog3/public/js/ergao.js","b1f566c49973d6fdab7ba0b372a4d17f"],["D:/BLOG_QZL/Blog3/public/js/love.js","88b75dcff60dd218bbb0db6cc37f3267"],["D:/BLOG_QZL/Blog3/public/js/search.js","63c61e56f228d83b544e21b4a7ed899c"],["D:/BLOG_QZL/Blog3/public/js/volantis.js","3c2fbf0d8e8c9ce1bbf88f0bf797b9ee"],["D:/BLOG_QZL/Blog3/public/mybook/index.html","b08df5af73015fcbcc76512310c54c95"],["D:/BLOG_QZL/Blog3/public/page/2/index.html","2441d6f587cab06613e90565363eef87"],["D:/BLOG_QZL/Blog3/public/page/3/index.html","21eba95caf69a394c7d0828ff3eec9c6"],["D:/BLOG_QZL/Blog3/public/projects/index.html","467909a3e1028a71b5545f2486f3e822"],["D:/BLOG_QZL/Blog3/public/tags/Hexo主题/index.html","5954191ac5bc83cef196341435ddc91a"],["D:/BLOG_QZL/Blog3/public/tags/Let-s-Build-A-Simple-Interpreter/index.html","5b16d0887ed5812b5475428a4e767e70"],["D:/BLOG_QZL/Blog3/public/tags/Let’s-Build-A-Simple-Interpreter/index.html","ea9299b9f834f77f550afe2957470cdd"],["D:/BLOG_QZL/Blog3/public/tags/OJ/index.html","047526ce4830e0506dacac810b8838bb"],["D:/BLOG_QZL/Blog3/public/tags/Yilia主题配置/index.html","32a72774a7108e50202f3af2bb87ab65"],["D:/BLOG_QZL/Blog3/public/tags/front-matter配置/index.html","732b6073b8fe85df4242f0ad163b2232"],["D:/BLOG_QZL/Blog3/public/tags/index.html","e851b55bd07f530b5f12a8d24285a71a"],["D:/BLOG_QZL/Blog3/public/tags/matery主题配置/index.html","a2738da5d878e0087ed1a226e0fdb224"],["D:/BLOG_QZL/Blog3/public/tags/《计算几何》/index.html","b7c33f31c9a69932c1c53102e91fa035"],["D:/BLOG_QZL/Blog3/public/tags/《计算机科学速成课》/index.html","ed58a6dd667637fe3ec1e15f62d9652b"],["D:/BLOG_QZL/Blog3/public/tags/凸包/index.html","c9e4aa96c07139657d9d5c5124b9dcb7"],["D:/BLOG_QZL/Blog3/public/tags/布尔逻辑和逻辑门/index.html","9d0a574dc2d716740b96bc0f2e0b2a8f"],["D:/BLOG_QZL/Blog3/public/tags/计算几何/index.html","5d5756ecc37556e583f23fba7bd95faf"],["D:/BLOG_QZL/Blog3/public/tags/计算机科学速成课/index.html","fcce0ec9611ac87e9ecf41ac3df43add"],["D:/BLOG_QZL/Blog3/public/学习笔记/index.html","750b9d992abe15038ebaa4c853aacbbe"]];
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







