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

var precacheConfig = [["D:/BLOG_QZL/Blog3/public/404.html","e916501a8d828f70012708b7895ed45d"],["D:/BLOG_QZL/Blog3/public/about/index.html","7a586f7ea809ca7dc8452bbeedf46a82"],["D:/BLOG_QZL/Blog3/public/archives/138a.html","41dc79a7bed40cc3552185c4e74b3581"],["D:/BLOG_QZL/Blog3/public/archives/167c.html","e4a8fd41a6e7b05e76db7bf882042a55"],["D:/BLOG_QZL/Blog3/public/archives/173c.html","55ef50b0645189005d8484a0de2a74ff"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/index.html","572172b065972caa71603dc885b6089b"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/page/2/index.html","abaf938e16775b92e51c41e577eae93a"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/page/3/index.html","c8f75d18b260eab0a675bb8eabb04255"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/page/4/index.html","bbe6cc38711e49eaddada3915cea4bcf"],["D:/BLOG_QZL/Blog3/public/archives/2020/04/index.html","5bce26609a1f43595ce99ea02db51e6a"],["D:/BLOG_QZL/Blog3/public/archives/2020/index.html","f67918dc1a37c1e8618cfb77e2e9c21c"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/2/index.html","29663a864992e5b299fa9c42801d2211"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/3/index.html","9edfd43eb34022807bca8be12833b77f"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/4/index.html","823e359000e681459f8801d5523b9cb7"],["D:/BLOG_QZL/Blog3/public/archives/28c74e52.html","eebdb99c6c20b4083288a8478d3b1310"],["D:/BLOG_QZL/Blog3/public/archives/2f66ae56.html","f3b832f305e0879918bd3da5a4a3eaf9"],["D:/BLOG_QZL/Blog3/public/archives/3478.html","36a3c4eb9cc02ffaaf037a3e40bf21a0"],["D:/BLOG_QZL/Blog3/public/archives/3ae1bc73.html","ff994d803609962603e45c564fa7d7e9"],["D:/BLOG_QZL/Blog3/public/archives/3b16.html","03cd768e61da6033fcbb37e06a09a3c7"],["D:/BLOG_QZL/Blog3/public/archives/427485bf.html","8bc9e73f74c19ab36f68f69e48f9f077"],["D:/BLOG_QZL/Blog3/public/archives/448ac7f1.html","b1a5a88c1554acf9e6427cfd70d51019"],["D:/BLOG_QZL/Blog3/public/archives/460671de.html","cbe8ab173e622ad1b5c2d06253f0df61"],["D:/BLOG_QZL/Blog3/public/archives/510d.html","0fa329a74b5f9dd201d51173c613e66f"],["D:/BLOG_QZL/Blog3/public/archives/514b.html","8c8015a895b2c66e542b02e01fc76b5d"],["D:/BLOG_QZL/Blog3/public/archives/5a757a52.html","ed9d6fdc5aff511c0ce9b13b2b9414a8"],["D:/BLOG_QZL/Blog3/public/archives/5fc07ec4.html","c40a72a6907068c3765186dd8dfe8523"],["D:/BLOG_QZL/Blog3/public/archives/622.html","cd58d96ee1c24d9c041491aa199983ab"],["D:/BLOG_QZL/Blog3/public/archives/6fc94bb0.html","08ebc94b5d6cfa56d35038669b1b8e12"],["D:/BLOG_QZL/Blog3/public/archives/7b67faab.html","6cceed18d7961fa2087af3f570e56159"],["D:/BLOG_QZL/Blog3/public/archives/7c53.html","68ddd0ed51564e8d21f71101bc122ed8"],["D:/BLOG_QZL/Blog3/public/archives/7f7e.html","89e5a491aa096dd8ad7614d9fdad2c63"],["D:/BLOG_QZL/Blog3/public/archives/8632918.html","c82c8c947d3f4b79de3dcf4a25fe6102"],["D:/BLOG_QZL/Blog3/public/archives/87ef.html","d3c98c89530613bb99156a29100a059b"],["D:/BLOG_QZL/Blog3/public/archives/9c7f.html","3447abdccab23c2c69c2c09023a1a150"],["D:/BLOG_QZL/Blog3/public/archives/a0a78e77.html","aafa2e1686a6309dbec8558e6877fc84"],["D:/BLOG_QZL/Blog3/public/archives/ae12.html","49a2f2031fc2126700c3d9798a688980"],["D:/BLOG_QZL/Blog3/public/archives/b6a3dbf1.html","99386bedffe049360f3003d5d7934ad9"],["D:/BLOG_QZL/Blog3/public/archives/ba04.html","aa437787ed66e2b34c7abc3e094ceae1"],["D:/BLOG_QZL/Blog3/public/archives/bf113a1c.html","328c38b579632cc2af6a8a53b1602554"],["D:/BLOG_QZL/Blog3/public/archives/c1a4eb67.html","0be9a39ba5d7432d3d4851c3f8a1748f"],["D:/BLOG_QZL/Blog3/public/archives/d4fa.html","b040a71156520efa5b0a3ccf38e2fdae"],["D:/BLOG_QZL/Blog3/public/archives/d57d.html","77deb3aa201ae9867dcdc3a9edf21fd5"],["D:/BLOG_QZL/Blog3/public/archives/d84f.html","ebccced2247906b005350ee965ed9931"],["D:/BLOG_QZL/Blog3/public/archives/eaabd222.html","18eb5364c8d645529b2aa81c7baf9e92"],["D:/BLOG_QZL/Blog3/public/archives/f32f.html","87c6a829ea5d21929b799129db7854f3"],["D:/BLOG_QZL/Blog3/public/archives/f957.html","f9e5568444373def509183491ee911d7"],["D:/BLOG_QZL/Blog3/public/archives/index.html","9b4f6f89137810b7c1bb37cfbc73a51a"],["D:/BLOG_QZL/Blog3/public/archives/page/2/index.html","9b4f6f89137810b7c1bb37cfbc73a51a"],["D:/BLOG_QZL/Blog3/public/archives/page/3/index.html","b6ece7734cb136da8758847e6e6547c1"],["D:/BLOG_QZL/Blog3/public/archives/page/4/index.html","9b4f6f89137810b7c1bb37cfbc73a51a"],["D:/BLOG_QZL/Blog3/public/categories/OJ/index.html","af0c2725f8d8db19ee4d13d1e6a747e5"],["D:/BLOG_QZL/Blog3/public/categories/hexo博客搭建/index.html","efada3414aea06485f933ffe15bf66a7"],["D:/BLOG_QZL/Blog3/public/categories/index.html","22c0953ec04c9e0dc037c96014c106bf"],["D:/BLOG_QZL/Blog3/public/categories/博客搭建/index.html","01ecc8171d2ad528a6b4355567cf8fa5"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/C-C/index.html","d77da2004230e8a6c0cf64b70b160580"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/index.html","b49480184f2505fdc495948cf2a8be31"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/page/2/index.html","8b85223849b438474687bd627fc66efb"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/page/3/index.html","9d2071125d8b804c955c39372ca94ef6"],["D:/BLOG_QZL/Blog3/public/comment/index.html","83273d8251b03c0e68588d4c133b25ea"],["D:/BLOG_QZL/Blog3/public/css/style.css","c8fd7484eca1e8ec23112d2a6296def3"],["D:/BLOG_QZL/Blog3/public/easysearch/about/index.html","79b02e4972bb67e19b339791be509b94"],["D:/BLOG_QZL/Blog3/public/easysearch/index.html","fdf25bede0eef8b0074d489ea7c47f4d"],["D:/BLOG_QZL/Blog3/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["D:/BLOG_QZL/Blog3/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["D:/BLOG_QZL/Blog3/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["D:/BLOG_QZL/Blog3/public/friends/index.html","fd41b5b16f54dc07bba2d8a7a077a5b8"],["D:/BLOG_QZL/Blog3/public/img/algolia.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["D:/BLOG_QZL/Blog3/public/img/azure.svg","a7577e663c1e0fb788fed78d7457ff35"],["D:/BLOG_QZL/Blog3/public/img/baidu.svg","124ce00f2785724d84e32ab6403386a6"],["D:/BLOG_QZL/Blog3/public/index.html","6d520317b3254271252f335fd23ef8fc"],["D:/BLOG_QZL/Blog3/public/js/app.js","a5d659af4b9d17196436c302e39ec916"],["D:/BLOG_QZL/Blog3/public/js/ergao.js","b1f566c49973d6fdab7ba0b372a4d17f"],["D:/BLOG_QZL/Blog3/public/js/love.js","88b75dcff60dd218bbb0db6cc37f3267"],["D:/BLOG_QZL/Blog3/public/js/search.js","63c61e56f228d83b544e21b4a7ed899c"],["D:/BLOG_QZL/Blog3/public/js/volantis.js","3c2fbf0d8e8c9ce1bbf88f0bf797b9ee"],["D:/BLOG_QZL/Blog3/public/page/2/index.html","160e1cab0d0f965ccf7f747b084bce36"],["D:/BLOG_QZL/Blog3/public/page/3/index.html","49021b9ad6c50b3d29d4d11d2de54251"],["D:/BLOG_QZL/Blog3/public/page/4/index.html","462fa3fec4f00adc8e72acd9cb3d3dc2"],["D:/BLOG_QZL/Blog3/public/projects/index.html","4d4d0ed9a205313f20ce58db32360384"],["D:/BLOG_QZL/Blog3/public/tags/C-C/index.html","2fc59347743d26afa8d4a0c7d27dbc82"],["D:/BLOG_QZL/Blog3/public/tags/C/index.html","627875e3cb7017d75b56fcfc6665dbfb"],["D:/BLOG_QZL/Blog3/public/tags/Hexo主题/index.html","a581c59c39336d5eb65c20e601e025c6"],["D:/BLOG_QZL/Blog3/public/tags/Let-s-Build-A-Simple-Interpreter/index.html","e00e2ba9b35cdda5ab8a1496fa702276"],["D:/BLOG_QZL/Blog3/public/tags/Let’s-Build-A-Simple-Interpreter/index.html","217b431fdc4ab4497b7a3d3ab33805e6"],["D:/BLOG_QZL/Blog3/public/tags/OJ/index.html","f98220c504dead11a53795163d215122"],["D:/BLOG_QZL/Blog3/public/tags/Yilia主题配置/index.html","8df90fa060bd10d3c3127e7d00c55f35"],["D:/BLOG_QZL/Blog3/public/tags/forme/index.html","4e706f73a260daf7ce7e9f5f844da1f9"],["D:/BLOG_QZL/Blog3/public/tags/front-matter配置/index.html","1886628588678df72e1c94504cad1c76"],["D:/BLOG_QZL/Blog3/public/tags/hexo显示pdf/index.html","375e2e4f64fe4e80e4dd8a8f72abe659"],["D:/BLOG_QZL/Blog3/public/tags/index.html","97b32418fd9aaeb6167f95f31d7baf60"],["D:/BLOG_QZL/Blog3/public/tags/matery主题配置/index.html","e29707ad8f2d1286f4763cda4300f577"],["D:/BLOG_QZL/Blog3/public/tags/《计算机科学速成课》/index.html","7377009193cbcc9812bf8e4cb126b4bd"],["D:/BLOG_QZL/Blog3/public/tags/凸包/index.html","b8fbd91c68724921c5c31f3bcb55375e"],["D:/BLOG_QZL/Blog3/public/tags/布尔逻辑和逻辑门/index.html","1cb714fc252fc8cd3c901a8ce2607468"],["D:/BLOG_QZL/Blog3/public/tags/计算几何/index.html","dfc7a2110481c7fd76efc5fa70cf4cae"],["D:/BLOG_QZL/Blog3/public/tags/计算机科学速成课/index.html","f0efd71c7f333f6be7f8856f03c734cd"],["D:/BLOG_QZL/Blog3/public/学习笔记/index.html","f2d037add64e775d03e65c82bb9c8291"]];
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







