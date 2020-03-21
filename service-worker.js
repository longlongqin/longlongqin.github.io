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

var precacheConfig = [["D:/BLOG_QZL/Blog3/public/404.html","dc70251031ffbcee683b66b58c96de21"],["D:/BLOG_QZL/Blog3/public/about/index.html","c98ec37b294d2e29d9266372d0fb94a6"],["D:/BLOG_QZL/Blog3/public/archives/138a.html","62b18415ef106b18589c8190772de98f"],["D:/BLOG_QZL/Blog3/public/archives/167c.html","f276a12237a5edd80d0863540994867c"],["D:/BLOG_QZL/Blog3/public/archives/173c.html","7a19cd8ab53443542ee5b77b3b4cf319"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/index.html","c631e222ec1251c14be569f726bf6c38"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/page/2/index.html","6d5b3568bed13261e6a2a9205fc22c70"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/page/3/index.html","e8abd5c9974a4fe4c0a08e0e3382cac9"],["D:/BLOG_QZL/Blog3/public/archives/2020/index.html","8d8a21e223969e3a286d75c2c2d75993"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/2/index.html","1a469941f2887e0eb171949ab5ee4eca"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/3/index.html","79bc2319fc5dc8c5026a8f90a9ba14e2"],["D:/BLOG_QZL/Blog3/public/archives/3478.html","73f118ebf311b07e16cb691d19db2880"],["D:/BLOG_QZL/Blog3/public/archives/3b16.html","db680d4f3a9729fbd4a2c5b569dc7856"],["D:/BLOG_QZL/Blog3/public/archives/427485bf.html","f36d68b3aee62ac54de11c56653da3eb"],["D:/BLOG_QZL/Blog3/public/archives/448ac7f1.html","43a18879decd5aff3db881cdea6e3ecc"],["D:/BLOG_QZL/Blog3/public/archives/460671de.html","6e526e05b8d9b924f7033d97bda0d307"],["D:/BLOG_QZL/Blog3/public/archives/510d.html","cb381be477c6766edd7a9302fd6657cb"],["D:/BLOG_QZL/Blog3/public/archives/514b.html","79204486a45f6c17838e2cda7cdfc6e6"],["D:/BLOG_QZL/Blog3/public/archives/5a757a52.html","79b7272541644f94af42acfe41a590a1"],["D:/BLOG_QZL/Blog3/public/archives/622.html","b55b8fe6a0dc76669cb80785195ab603"],["D:/BLOG_QZL/Blog3/public/archives/7c53.html","21bbbab906dd0c6ed7a3b9e4141f4b5e"],["D:/BLOG_QZL/Blog3/public/archives/7f7e.html","12f0bca583397e30e77ad7ceab86c872"],["D:/BLOG_QZL/Blog3/public/archives/8632918.html","d6a0050bc7c0e6a9e30716879d03b915"],["D:/BLOG_QZL/Blog3/public/archives/87ef.html","5bf29bf313551d0f04cf61c05a422806"],["D:/BLOG_QZL/Blog3/public/archives/9c7f.html","82686a89be98e8613b998f8525f2b957"],["D:/BLOG_QZL/Blog3/public/archives/a0a78e77.html","16280871ff19c3cf151734adf34d0ad8"],["D:/BLOG_QZL/Blog3/public/archives/ae12.html","b51787412311aa579e4b04f2c6f0f1d4"],["D:/BLOG_QZL/Blog3/public/archives/ba04.html","76c2594f67ddd361a5ab3f1d038c09b5"],["D:/BLOG_QZL/Blog3/public/archives/d4fa.html","5281b688f21f3549ca2e9131b2bc11b9"],["D:/BLOG_QZL/Blog3/public/archives/d57d.html","024e955e93d3a832ab774f87626c04a3"],["D:/BLOG_QZL/Blog3/public/archives/d84f.html","1b784bf28184e70cb491a4ae5aec6ff2"],["D:/BLOG_QZL/Blog3/public/archives/f32f.html","054891d724e9509c5cb1ae1fe03ec543"],["D:/BLOG_QZL/Blog3/public/archives/f957.html","911e1f05a59908d6537af5405f1596eb"],["D:/BLOG_QZL/Blog3/public/archives/index.html","ba81d81de96a7d0d70d6b96a4bd8135b"],["D:/BLOG_QZL/Blog3/public/archives/page/2/index.html","b0dbf29de17526f6e042f1e9fde2d09c"],["D:/BLOG_QZL/Blog3/public/archives/page/3/index.html","ba81d81de96a7d0d70d6b96a4bd8135b"],["D:/BLOG_QZL/Blog3/public/categories/OJ/index.html","9bb3f0529b96a9f778fa591417b4b106"],["D:/BLOG_QZL/Blog3/public/categories/hexo博客搭建/index.html","f5f0b2de99911ba826b3574bce9d39c9"],["D:/BLOG_QZL/Blog3/public/categories/index.html","3eb6b0ada5b7d893becbdf2a0a9651e1"],["D:/BLOG_QZL/Blog3/public/categories/博客搭建/index.html","3260a6309f83f834930ec3ef802b9c0b"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/index.html","f069903b06780aae41354e913a5ce80f"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/page/2/index.html","fafd9e6a6893a4ac27bcda50a5d0cd9e"],["D:/BLOG_QZL/Blog3/public/comment/index.html","4281747ccaaaa4ea8cb1d043a2c81ab1"],["D:/BLOG_QZL/Blog3/public/css/style.css","c8fd7484eca1e8ec23112d2a6296def3"],["D:/BLOG_QZL/Blog3/public/easysearch/about/index.html","14339c16bae3fbd8adf624b64d2706f8"],["D:/BLOG_QZL/Blog3/public/easysearch/index.html","1c61d716ba6c439f697bee989be3b727"],["D:/BLOG_QZL/Blog3/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["D:/BLOG_QZL/Blog3/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["D:/BLOG_QZL/Blog3/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["D:/BLOG_QZL/Blog3/public/friends/index.html","f41198e4df78b65a81d71e1e4fb3e8a1"],["D:/BLOG_QZL/Blog3/public/img/2527f9e5ef6e97ad40d0cda072bf9455.jpg","e108ff1ddbc7b1edff65cb9ac5f8a96a"],["D:/BLOG_QZL/Blog3/public/img/algolia.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["D:/BLOG_QZL/Blog3/public/img/azure.svg","a7577e663c1e0fb788fed78d7457ff35"],["D:/BLOG_QZL/Blog3/public/img/baidu.svg","124ce00f2785724d84e32ab6403386a6"],["D:/BLOG_QZL/Blog3/public/img/concurrency/df9b300efaeade58758dbe19544b080e.png","93b8422b3654afb030ded4054a5f16e6"],["D:/BLOG_QZL/Blog3/public/img/favicon.gif","f905362284e3709da8cffa1247423f8a"],["D:/BLOG_QZL/Blog3/public/img/kafka/1567762579648.png","00052c8d326a14e75fa7345004e50ac0"],["D:/BLOG_QZL/Blog3/public/img/kafka/1570611450769.png","60ae4335d4bfebac31585a06e1aca3d0"],["D:/BLOG_QZL/Blog3/public/img/kafka/1570614069844.png","76a6ed7ea38b67723a6668a8723531bf"],["D:/BLOG_QZL/Blog3/public/img/kafka/1570618606027.png","f6040d7655ddae24bb0050493e7e0c6f"],["D:/BLOG_QZL/Blog3/public/img/kafka/1570618923749.png","0c8f32e1404c6f3b0d1879dc79a58e42"],["D:/BLOG_QZL/Blog3/public/img/kafka/1570618945713.png","9bc02885a9b3c5eda2037465b979602f"],["D:/BLOG_QZL/Blog3/public/img/kafka/3951011.png","c81914368f2b957fec030ec74b16eec4"],["D:/BLOG_QZL/Blog3/public/img/kafka/3951012.png","b766a97a52eba7287fac39386a744144"],["D:/BLOG_QZL/Blog3/public/img/kafka/3951013.png","17d68f15e959c3cc2ea0dd1b97d222ab"],["D:/BLOG_QZL/Blog3/public/img/kafka/3951014.png","48687c5b0541e3f4ad62d853551a11b7"],["D:/BLOG_QZL/Blog3/public/img/kafka/3951015.png","00a0e30150ec65bc31e9b87551afbe43"],["D:/BLOG_QZL/Blog3/public/img/kafka/3951016.png","6a3240593ae7099dfe5686df77a42e96"],["D:/BLOG_QZL/Blog3/public/img/kafka/kafka.jpg","b3f8b5af09ba061abfdb73c8bd18139b"],["D:/BLOG_QZL/Blog3/public/index.html","ef9ded81aca51360f1efb82b30df7354"],["D:/BLOG_QZL/Blog3/public/js/app.js","a5d659af4b9d17196436c302e39ec916"],["D:/BLOG_QZL/Blog3/public/js/ergao.js","b1f566c49973d6fdab7ba0b372a4d17f"],["D:/BLOG_QZL/Blog3/public/js/love.js","88b75dcff60dd218bbb0db6cc37f3267"],["D:/BLOG_QZL/Blog3/public/js/search.js","63c61e56f228d83b544e21b4a7ed899c"],["D:/BLOG_QZL/Blog3/public/js/volantis.js","3c2fbf0d8e8c9ce1bbf88f0bf797b9ee"],["D:/BLOG_QZL/Blog3/public/mybook/index.html","68ff711cc780e421e02ba9dbc995faea"],["D:/BLOG_QZL/Blog3/public/page/2/index.html","15d75d5cb52c5c1ec4d3c388688f8b47"],["D:/BLOG_QZL/Blog3/public/page/3/index.html","474242f9957b4614f3cd658e73ef175b"],["D:/BLOG_QZL/Blog3/public/projects/index.html","cbda27e81508e313ef3986ead288e3eb"],["D:/BLOG_QZL/Blog3/public/tags/C/index.html","97d53b9ef33730dcbac0197e0a58d955"],["D:/BLOG_QZL/Blog3/public/tags/Hexo主题/index.html","e3bd19f12d7733ddc83caa48c1637c0a"],["D:/BLOG_QZL/Blog3/public/tags/Let-s-Build-A-Simple-Interpreter/index.html","eb74a8fe695b597e530da630ede19886"],["D:/BLOG_QZL/Blog3/public/tags/Let’s-Build-A-Simple-Interpreter/index.html","90441f9b15827b8645c93cff6f4edebc"],["D:/BLOG_QZL/Blog3/public/tags/OJ/index.html","419f754362a2d6684486e312d0c61407"],["D:/BLOG_QZL/Blog3/public/tags/Yilia主题配置/index.html","94619b33453bf37ea73395b5e4e90840"],["D:/BLOG_QZL/Blog3/public/tags/front-matter配置/index.html","cf9798c165ce6d68005062b73214fb21"],["D:/BLOG_QZL/Blog3/public/tags/hexo显示pdf/index.html","a5ad33c58017a256c60607180c128c45"],["D:/BLOG_QZL/Blog3/public/tags/index.html","5ddf2b4f2ed30906b7129be81ae2f642"],["D:/BLOG_QZL/Blog3/public/tags/matery主题配置/index.html","aece249430e7e257e36f32c832adc6ec"],["D:/BLOG_QZL/Blog3/public/tags/《计算机科学速成课》/index.html","f861b7889bbb2ac4cb0654f613005dce"],["D:/BLOG_QZL/Blog3/public/tags/凸包/index.html","f7cb9d2c13ff6cb44551288883ff909c"],["D:/BLOG_QZL/Blog3/public/tags/布尔逻辑和逻辑门/index.html","b83699bc5ed79a2774c70211a8428697"],["D:/BLOG_QZL/Blog3/public/tags/计算几何/index.html","093cd608ce8dd3d05f128d7df979654c"],["D:/BLOG_QZL/Blog3/public/tags/计算机科学速成课/index.html","b160c501ea5b0d9272bc2d8cda4fff59"],["D:/BLOG_QZL/Blog3/public/学习笔记/index.html","5424acc99c1ff5cdba6b9ef9bdcde85b"]];
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







