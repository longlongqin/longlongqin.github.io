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

var precacheConfig = [["D:/BLOG_QZL/Blog3/public/404.html","dcbc5967b95af46fe66265106b7f1290"],["D:/BLOG_QZL/Blog3/public/about/index.html","e8a342acc40d788206c8ed56b172ef33"],["D:/BLOG_QZL/Blog3/public/archives/138a.html","63a54c6022e44d5aab2167db2397fbb7"],["D:/BLOG_QZL/Blog3/public/archives/167c.html","e62c30d85479af42434d4a85d1a19e4e"],["D:/BLOG_QZL/Blog3/public/archives/173c.html","992386ce5985402fa36f8f723718acd6"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/index.html","8a16e6f0d326b42c3a646e806df5d9cc"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/page/2/index.html","a1dd46435a9d69d74aab1b2f8c436b80"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/page/3/index.html","078122f64da83039873059838ebcaf4b"],["D:/BLOG_QZL/Blog3/public/archives/2020/index.html","aa14821b8f0e93352b7b4a62a205aa3f"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/2/index.html","972ed386c6cc086a2b2971d93b0f70e3"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/3/index.html","66b9fe0cd4a724527d83623bc3e34de0"],["D:/BLOG_QZL/Blog3/public/archives/3478.html","95284beee2f6fd3ad857730b9e62e8aa"],["D:/BLOG_QZL/Blog3/public/archives/3b16.html","c7d5dc5f501ef440a5cf2aa57ba8802e"],["D:/BLOG_QZL/Blog3/public/archives/427485bf.html","fbb89a8f417b13234c0f5a9bcf0745c9"],["D:/BLOG_QZL/Blog3/public/archives/448ac7f1.html","269e7933ae3ad671111dc6c5a64e4ce0"],["D:/BLOG_QZL/Blog3/public/archives/460671de.html","7c374516af51d38187f816c5ba0774b7"],["D:/BLOG_QZL/Blog3/public/archives/510d.html","a81b861ee80d03d4158f817e241ca56a"],["D:/BLOG_QZL/Blog3/public/archives/514b.html","fdb7fbc3f112005ed793656918b23f0c"],["D:/BLOG_QZL/Blog3/public/archives/5a757a52.html","576a77da2a22804a500a1e5abf28b9df"],["D:/BLOG_QZL/Blog3/public/archives/622.html","b343d6f9952d24eda60f8ac685357dcb"],["D:/BLOG_QZL/Blog3/public/archives/7b67faab.html","b21c5669d168af8e9680de2836f2bbf7"],["D:/BLOG_QZL/Blog3/public/archives/7c53.html","8f5afcf6cafbbce8188aee1d9d99e941"],["D:/BLOG_QZL/Blog3/public/archives/7f7e.html","8215bbf2950516d3fc712e1290578966"],["D:/BLOG_QZL/Blog3/public/archives/8632918.html","fae7618b74fbab9260325f81d2dd83f1"],["D:/BLOG_QZL/Blog3/public/archives/87ef.html","63702a3cd6b51ac3f9106a8c77a4349f"],["D:/BLOG_QZL/Blog3/public/archives/9c7f.html","b7ce189cb65aa936c2e02485dee8ca6e"],["D:/BLOG_QZL/Blog3/public/archives/a0a78e77.html","98ea810742f8ac1fbb0aa6e47d829dbb"],["D:/BLOG_QZL/Blog3/public/archives/ae12.html","b385d25c5fd2add94983f6b5b66c1f83"],["D:/BLOG_QZL/Blog3/public/archives/ba04.html","821a0b14fb3e35b255f5892b1e65f137"],["D:/BLOG_QZL/Blog3/public/archives/bf113a1c.html","c23a5046be9c875f66f304ff6a1402d2"],["D:/BLOG_QZL/Blog3/public/archives/d4fa.html","20b0d6561c8204fde057ee73ebcf4cd6"],["D:/BLOG_QZL/Blog3/public/archives/d57d.html","14ccc556e15db76a72601a6f42b5816e"],["D:/BLOG_QZL/Blog3/public/archives/d84f.html","ff690a0b6ad06e0f852513a2e7aff767"],["D:/BLOG_QZL/Blog3/public/archives/eaabd222.html","49836051efb0ea3de5c5243d6e2cb805"],["D:/BLOG_QZL/Blog3/public/archives/f32f.html","5a22eee049be854bebff1f505d79296e"],["D:/BLOG_QZL/Blog3/public/archives/f957.html","ae8567b534668b9921e129f79880def4"],["D:/BLOG_QZL/Blog3/public/archives/index.html","229e26c02dc0340e0bf27c3b4084e4f2"],["D:/BLOG_QZL/Blog3/public/archives/page/2/index.html","25ec0ff517cdde932c416ecfb607d16c"],["D:/BLOG_QZL/Blog3/public/archives/page/3/index.html","25ec0ff517cdde932c416ecfb607d16c"],["D:/BLOG_QZL/Blog3/public/categories/OJ/index.html","4a65b7c2e1501f3930560addfadf2115"],["D:/BLOG_QZL/Blog3/public/categories/hexo博客搭建/index.html","21e5bb94ae5d59c98f95b517d8617bb0"],["D:/BLOG_QZL/Blog3/public/categories/index.html","30c59303bc01e7e543a97541bd7b8e04"],["D:/BLOG_QZL/Blog3/public/categories/博客搭建/index.html","a9e44540cc63039eb25c5b32b2027987"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/index.html","a41846b144e89d9ec108a6a63f2350d4"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/page/2/index.html","04e8cf9019d986108913c24f11cda897"],["D:/BLOG_QZL/Blog3/public/comment/index.html","c8e60ef5ac9a152b4700192eb32b9dfd"],["D:/BLOG_QZL/Blog3/public/css/style.css","c8fd7484eca1e8ec23112d2a6296def3"],["D:/BLOG_QZL/Blog3/public/easysearch/about/index.html","79b02e4972bb67e19b339791be509b94"],["D:/BLOG_QZL/Blog3/public/easysearch/index.html","4119fd524526d60e15dc4b0162129b26"],["D:/BLOG_QZL/Blog3/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["D:/BLOG_QZL/Blog3/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["D:/BLOG_QZL/Blog3/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["D:/BLOG_QZL/Blog3/public/friends/index.html","d5989de64bc67534b546c07837e13d1d"],["D:/BLOG_QZL/Blog3/public/img/algolia.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["D:/BLOG_QZL/Blog3/public/img/azure.svg","a7577e663c1e0fb788fed78d7457ff35"],["D:/BLOG_QZL/Blog3/public/img/baidu.svg","124ce00f2785724d84e32ab6403386a6"],["D:/BLOG_QZL/Blog3/public/index.html","e1da0f232d7471ed1cb9d1bf7680e26a"],["D:/BLOG_QZL/Blog3/public/js/app.js","a5d659af4b9d17196436c302e39ec916"],["D:/BLOG_QZL/Blog3/public/js/ergao.js","b1f566c49973d6fdab7ba0b372a4d17f"],["D:/BLOG_QZL/Blog3/public/js/love.js","88b75dcff60dd218bbb0db6cc37f3267"],["D:/BLOG_QZL/Blog3/public/js/search.js","63c61e56f228d83b544e21b4a7ed899c"],["D:/BLOG_QZL/Blog3/public/js/volantis.js","3c2fbf0d8e8c9ce1bbf88f0bf797b9ee"],["D:/BLOG_QZL/Blog3/public/mybook/index.html","b4f10f0274dab15aba64c208d953634e"],["D:/BLOG_QZL/Blog3/public/page/2/index.html","029bb8c3b435c885e4171989c1bd54f8"],["D:/BLOG_QZL/Blog3/public/page/3/index.html","5a927918241e14ca3c0e127b1b8d9947"],["D:/BLOG_QZL/Blog3/public/projects/index.html","8808bc9d8beedc9f2708dc4a6c1bbd93"],["D:/BLOG_QZL/Blog3/public/tags/C/index.html","1cf1b34bc61fe4d8db971169f6c3baf0"],["D:/BLOG_QZL/Blog3/public/tags/Hexo主题/index.html","40a31e48b5b57b7708693125b797d000"],["D:/BLOG_QZL/Blog3/public/tags/Let-s-Build-A-Simple-Interpreter/index.html","f2bc14163c8908dbe9e6ad65a4825b68"],["D:/BLOG_QZL/Blog3/public/tags/Let’s-Build-A-Simple-Interpreter/index.html","1b21e4a58df4c11853ff22a2ca030381"],["D:/BLOG_QZL/Blog3/public/tags/OJ/index.html","895603895450ba98c4a605c14b28bb03"],["D:/BLOG_QZL/Blog3/public/tags/Yilia主题配置/index.html","782360f558f0acb9ed30e403109e915b"],["D:/BLOG_QZL/Blog3/public/tags/forme/index.html","a248fa7ba8ed37a577eeeca39ebe5089"],["D:/BLOG_QZL/Blog3/public/tags/front-matter配置/index.html","a753e9d07bd7d2967fcaf0ab0952a7cf"],["D:/BLOG_QZL/Blog3/public/tags/hexo显示pdf/index.html","5f11f549cb92c23139eefa96f47d3a64"],["D:/BLOG_QZL/Blog3/public/tags/index.html","e4091664f0462745ffc1d80e09924633"],["D:/BLOG_QZL/Blog3/public/tags/matery主题配置/index.html","2786c387799ad913d0c37d27ebe809b4"],["D:/BLOG_QZL/Blog3/public/tags/《计算机科学速成课》/index.html","5e554f56831454f1ec6eda45e6a06ac3"],["D:/BLOG_QZL/Blog3/public/tags/凸包/index.html","94fdaa176cecbc90f1ded3b339cde828"],["D:/BLOG_QZL/Blog3/public/tags/布尔逻辑和逻辑门/index.html","6c778ec8116658af78f099d56df44a69"],["D:/BLOG_QZL/Blog3/public/tags/计算几何/index.html","9847b6da9cff878bf7c426cb5efc6d4b"],["D:/BLOG_QZL/Blog3/public/tags/计算机科学速成课/index.html","2f020e0b22e9c750812365b5b58487ac"],["D:/BLOG_QZL/Blog3/public/个人书签/index.html","fb3015d1dd5db994020b1c13cb9bafeb"],["D:/BLOG_QZL/Blog3/public/学习笔记/index.html","a6b61f6060d1a3317d8d522965820ab5"]];
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







