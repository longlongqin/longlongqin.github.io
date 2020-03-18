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

var precacheConfig = [["D:/BLOG_QZL/Blog3/public/404.html","21d52db499ee4aa2b4cbc2172bc74745"],["D:/BLOG_QZL/Blog3/public/about/index.html","063e75aec4a588a6279e50c682a94a27"],["D:/BLOG_QZL/Blog3/public/archives/138a.html","61df39ff1c88037b00591c21782bc356"],["D:/BLOG_QZL/Blog3/public/archives/167c.html","44ca0f7ab65674c433b03e35e7c94b08"],["D:/BLOG_QZL/Blog3/public/archives/173c.html","8101bce3d2c6109a06ad3c52c6f147a0"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/index.html","78a17134df9f6117e2c0c905368cf359"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/page/2/index.html","eed61b4d6596a72177ec0e630f8ffa63"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/page/3/index.html","007fdf836ed4df15d60a226e392e9345"],["D:/BLOG_QZL/Blog3/public/archives/2020/index.html","a393c16481612cfb13f213e4cfddecdd"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/2/index.html","3838eacda8ca53955384df0133f05f67"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/3/index.html","139b7925677f71a03923a9daf6991299"],["D:/BLOG_QZL/Blog3/public/archives/2d6f5e7f.html","b046f9d5a49a82761fdf8e0c8c1f34ed"],["D:/BLOG_QZL/Blog3/public/archives/3478.html","f397332e899d229ffbfe1cf6fd61965c"],["D:/BLOG_QZL/Blog3/public/archives/3b16.html","44355cb13b5254e4b9c6b02c9d46e99c"],["D:/BLOG_QZL/Blog3/public/archives/427485bf.html","46cb33b26190b3b2f2dbfb5c62e23a83"],["D:/BLOG_QZL/Blog3/public/archives/460671de.html","9ff52d9448c3ae7f170ac9333772df4f"],["D:/BLOG_QZL/Blog3/public/archives/510d.html","e4df7e43b5b727c31fe35f28b4e5011a"],["D:/BLOG_QZL/Blog3/public/archives/514b.html","8d26e15be3dfd533694457da02fc227a"],["D:/BLOG_QZL/Blog3/public/archives/622.html","174d214199fe9aef2426d0acc720f532"],["D:/BLOG_QZL/Blog3/public/archives/7c53.html","3a32f6930468ca8834242aa954cd18aa"],["D:/BLOG_QZL/Blog3/public/archives/7f7e.html","612e71681af4b60c60d1d9365e3f55a6"],["D:/BLOG_QZL/Blog3/public/archives/87ef.html","a1a0064a631ea97fdaee6701c986b62c"],["D:/BLOG_QZL/Blog3/public/archives/9c7f.html","be3352b6e80792984a2a753253323864"],["D:/BLOG_QZL/Blog3/public/archives/ae12.html","e93762c7cb36a579149a0bbe616b41c6"],["D:/BLOG_QZL/Blog3/public/archives/ba04.html","7e78d5a701273d5de243d03e1a46de12"],["D:/BLOG_QZL/Blog3/public/archives/d4fa.html","619b37835de556512991e66e5821a7c8"],["D:/BLOG_QZL/Blog3/public/archives/d57d.html","b5dbb05306c5bebb1c413c544cb6824b"],["D:/BLOG_QZL/Blog3/public/archives/d84f.html","84156ee15f700127fa4d714abc208105"],["D:/BLOG_QZL/Blog3/public/archives/f32f.html","e66899f82b6267069e0aae5b2e9c1f43"],["D:/BLOG_QZL/Blog3/public/archives/f957.html","1f37fd68a487dce205dd9b7e72cc96be"],["D:/BLOG_QZL/Blog3/public/archives/index.html","d3749a3c35ef8e3511440970d362cdb4"],["D:/BLOG_QZL/Blog3/public/archives/page/2/index.html","d3749a3c35ef8e3511440970d362cdb4"],["D:/BLOG_QZL/Blog3/public/archives/page/3/index.html","eb4f3bb877e14ba2879569692bd64569"],["D:/BLOG_QZL/Blog3/public/categories/OJ/index.html","d6d5dcd18d9ce225e0d5a42e01ef15c6"],["D:/BLOG_QZL/Blog3/public/categories/index.html","a656475a30c7cd536474f181613a9dc9"],["D:/BLOG_QZL/Blog3/public/categories/博客搭建/index.html","2939eced6116d2ecfa4af5ef1a1337cf"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/index.html","3b2028844cee91fe1c4b125c6b75d347"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/page/2/index.html","17ac732a3c0501dc3cbf844829ce6a6c"],["D:/BLOG_QZL/Blog3/public/comment/index.html","a2dd1d43fd9c3cf74991d19564748756"],["D:/BLOG_QZL/Blog3/public/css/style.css","5d7ed2943af8942a895ef79e9317a240"],["D:/BLOG_QZL/Blog3/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["D:/BLOG_QZL/Blog3/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["D:/BLOG_QZL/Blog3/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["D:/BLOG_QZL/Blog3/public/friends/index.html","79d88ce4dda785e48a504b3cb56f0fb3"],["D:/BLOG_QZL/Blog3/public/img/2527f9e5ef6e97ad40d0cda072bf9455.jpg","e108ff1ddbc7b1edff65cb9ac5f8a96a"],["D:/BLOG_QZL/Blog3/public/img/algolia.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["D:/BLOG_QZL/Blog3/public/img/azure.svg","a7577e663c1e0fb788fed78d7457ff35"],["D:/BLOG_QZL/Blog3/public/img/baidu.svg","124ce00f2785724d84e32ab6403386a6"],["D:/BLOG_QZL/Blog3/public/img/concurrency/df9b300efaeade58758dbe19544b080e.png","93b8422b3654afb030ded4054a5f16e6"],["D:/BLOG_QZL/Blog3/public/img/favicon.gif","f905362284e3709da8cffa1247423f8a"],["D:/BLOG_QZL/Blog3/public/img/kafka/1567762579648.png","00052c8d326a14e75fa7345004e50ac0"],["D:/BLOG_QZL/Blog3/public/img/kafka/1570611450769.png","60ae4335d4bfebac31585a06e1aca3d0"],["D:/BLOG_QZL/Blog3/public/img/kafka/1570614069844.png","76a6ed7ea38b67723a6668a8723531bf"],["D:/BLOG_QZL/Blog3/public/img/kafka/1570618606027.png","f6040d7655ddae24bb0050493e7e0c6f"],["D:/BLOG_QZL/Blog3/public/img/kafka/1570618923749.png","0c8f32e1404c6f3b0d1879dc79a58e42"],["D:/BLOG_QZL/Blog3/public/img/kafka/1570618945713.png","9bc02885a9b3c5eda2037465b979602f"],["D:/BLOG_QZL/Blog3/public/img/kafka/3951011.png","c81914368f2b957fec030ec74b16eec4"],["D:/BLOG_QZL/Blog3/public/img/kafka/3951012.png","b766a97a52eba7287fac39386a744144"],["D:/BLOG_QZL/Blog3/public/img/kafka/3951013.png","17d68f15e959c3cc2ea0dd1b97d222ab"],["D:/BLOG_QZL/Blog3/public/img/kafka/3951014.png","48687c5b0541e3f4ad62d853551a11b7"],["D:/BLOG_QZL/Blog3/public/img/kafka/3951015.png","00a0e30150ec65bc31e9b87551afbe43"],["D:/BLOG_QZL/Blog3/public/img/kafka/3951016.png","6a3240593ae7099dfe5686df77a42e96"],["D:/BLOG_QZL/Blog3/public/img/kafka/kafka.jpg","b3f8b5af09ba061abfdb73c8bd18139b"],["D:/BLOG_QZL/Blog3/public/index.html","4548a25fcf4103090ff6eadaf44c10b5"],["D:/BLOG_QZL/Blog3/public/js/app.js","a5d659af4b9d17196436c302e39ec916"],["D:/BLOG_QZL/Blog3/public/js/ergao.js","b1f566c49973d6fdab7ba0b372a4d17f"],["D:/BLOG_QZL/Blog3/public/js/love.js","88b75dcff60dd218bbb0db6cc37f3267"],["D:/BLOG_QZL/Blog3/public/js/search.js","63c61e56f228d83b544e21b4a7ed899c"],["D:/BLOG_QZL/Blog3/public/js/volantis.js","3c2fbf0d8e8c9ce1bbf88f0bf797b9ee"],["D:/BLOG_QZL/Blog3/public/mybook/index.html","4a363ecd4931869332e269295ddf808f"],["D:/BLOG_QZL/Blog3/public/page/2/index.html","3a178f23f073e9d07eaee0341e544a33"],["D:/BLOG_QZL/Blog3/public/page/3/index.html","74a24b6eb189862396178e6792c5647c"],["D:/BLOG_QZL/Blog3/public/projects/index.html","0fa768a8f125dcc9b9581a315f205151"],["D:/BLOG_QZL/Blog3/public/tags/Hexo主题/index.html","cf488a8c15430a1b03a4a10e262ba0dd"],["D:/BLOG_QZL/Blog3/public/tags/Let-s-Build-A-Simple-Interpreter/index.html","20625911c7444ea7bd07b42312467dad"],["D:/BLOG_QZL/Blog3/public/tags/Let’s-Build-A-Simple-Interpreter/index.html","ce875448c67b5830c9df47119572dd58"],["D:/BLOG_QZL/Blog3/public/tags/OJ/index.html","27191b0d02d81cf5d742106bd91b7fc1"],["D:/BLOG_QZL/Blog3/public/tags/Yilia主题配置/index.html","0f9a83cf416c948a3cd1e4decd70afa7"],["D:/BLOG_QZL/Blog3/public/tags/front-matter配置/index.html","0b45bc36b19fb94dfec1cc273ebaca2d"],["D:/BLOG_QZL/Blog3/public/tags/index.html","83c8af8dcd16a28fff5b8615b6505074"],["D:/BLOG_QZL/Blog3/public/tags/matery主题配置/index.html","4ec69864ae525c2b8bcc54facd78a4f7"],["D:/BLOG_QZL/Blog3/public/tags/《计算几何》/index.html","44036c920c734bbc73f2ab5c229d5ef9"],["D:/BLOG_QZL/Blog3/public/tags/《计算机科学速成课》/index.html","4de5b03798ccdb5fd036a31c9c1f2add"],["D:/BLOG_QZL/Blog3/public/tags/凸包/index.html","baa2cb44c1b6cef2bdf0edab1370fd53"],["D:/BLOG_QZL/Blog3/public/tags/布尔逻辑和逻辑门/index.html","1d4308d06c784bfb7ca81af1e017f1f8"],["D:/BLOG_QZL/Blog3/public/tags/计算几何/index.html","a5fe3259bccf52a340d941c609a32324"],["D:/BLOG_QZL/Blog3/public/tags/计算机科学速成课/index.html","233a9429d517861f4072e27bf6b42908"],["D:/BLOG_QZL/Blog3/public/学习笔记/index.html","7b626766b90941d07d548dc12f6ef82c"]];
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







