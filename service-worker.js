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

var precacheConfig = [["D:/BLOG_QZL/Blog3/public/404.html","e1496c32dfc7e90224d4c1a658a45b6e"],["D:/BLOG_QZL/Blog3/public/about/index.html","494b6ee791960d9cde292c3ef73fe2a4"],["D:/BLOG_QZL/Blog3/public/archives/138a.html","66fdcd390b852a5cd4392740c44556eb"],["D:/BLOG_QZL/Blog3/public/archives/167c.html","37fe85db092ec94071fd6008a1f58531"],["D:/BLOG_QZL/Blog3/public/archives/173c.html","db9c40ae657a1f8c332017431ba5733a"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/index.html","0c9398f6e2049c27e2e0505e34b632ee"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/page/2/index.html","d5918b13bc6a37f97809162e0c5ece6c"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/page/3/index.html","1c5bebf5d8f97c4130575cdd095fefa8"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/page/4/index.html","f3c473b0f8b0b68c66f49c822bf1f6f3"],["D:/BLOG_QZL/Blog3/public/archives/2020/04/index.html","afda793cd5457403d452b4e8be112afa"],["D:/BLOG_QZL/Blog3/public/archives/2020/index.html","44794b21bd844f68831329f850a5fc66"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/2/index.html","65f02b74f93ac2ce84357e99193c247d"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/3/index.html","3574b2626e361113c75619e900d794d2"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/4/index.html","85d467218054f69959a18098864387c5"],["D:/BLOG_QZL/Blog3/public/archives/28c74e52.html","792d205ad865b274336fd018073d8d79"],["D:/BLOG_QZL/Blog3/public/archives/2f66ae56.html","0f90f0501ad98bfdfd91d9a06070a33b"],["D:/BLOG_QZL/Blog3/public/archives/3478.html","11cbb5edf6db9055fccba74db3947377"],["D:/BLOG_QZL/Blog3/public/archives/3ae1bc73.html","b899becc767d1252a1060841404f5716"],["D:/BLOG_QZL/Blog3/public/archives/3b16.html","bdc3c329f639e352997baa3842724935"],["D:/BLOG_QZL/Blog3/public/archives/427485bf.html","1a655b7bee7b71665d1a8f1498632bf0"],["D:/BLOG_QZL/Blog3/public/archives/448ac7f1.html","d097ce03347a0696cffeb4b6da5e1585"],["D:/BLOG_QZL/Blog3/public/archives/460671de.html","f4d9279d645a07417233b1100d0001c2"],["D:/BLOG_QZL/Blog3/public/archives/510d.html","c0d6627521d7095c97f21ffddf4c3b1c"],["D:/BLOG_QZL/Blog3/public/archives/514b.html","2720824823c6a87c8b16547437889429"],["D:/BLOG_QZL/Blog3/public/archives/5a757a52.html","8ef43e52f00e8ca7a2a84a3898fec74a"],["D:/BLOG_QZL/Blog3/public/archives/5fc07ec4.html","c6e6e97b8d96a9d6d918058d6afddc7c"],["D:/BLOG_QZL/Blog3/public/archives/622.html","f351e84713d5919e411f514b68c79c39"],["D:/BLOG_QZL/Blog3/public/archives/6fc94bb0.html","24d80708089494e0a75bbf619b0d9b9e"],["D:/BLOG_QZL/Blog3/public/archives/7b67faab.html","a17a4845e5de49630f3f11fd574f65fb"],["D:/BLOG_QZL/Blog3/public/archives/7c53.html","d8ddb0ce0fddb56ea2040ac9e11ac9fd"],["D:/BLOG_QZL/Blog3/public/archives/7f7e.html","b4fefdc4cbc6ce28bc8dc369a7c44488"],["D:/BLOG_QZL/Blog3/public/archives/8632918.html","39b7fb7bb4498aff40db3c86089d6607"],["D:/BLOG_QZL/Blog3/public/archives/87ef.html","8f1b038e1a7781c384cbdce0ffbc162b"],["D:/BLOG_QZL/Blog3/public/archives/9c7f.html","4228b3a2d5064d44efd28a4495a4010b"],["D:/BLOG_QZL/Blog3/public/archives/a0a78e77.html","4d30bceaf0ef40d652a2cb0bdc2c9873"],["D:/BLOG_QZL/Blog3/public/archives/ae12.html","0c8eb5e27530ac3eec1f2853953ebb70"],["D:/BLOG_QZL/Blog3/public/archives/ba04.html","b3018a2c83b6f61eb3d675cf2afbed54"],["D:/BLOG_QZL/Blog3/public/archives/bf113a1c.html","35358e47d96b27a6c2506ffa057458bc"],["D:/BLOG_QZL/Blog3/public/archives/c1a4eb67.html","3b8eec28d6a3f3ef0cd76a849b0c4f73"],["D:/BLOG_QZL/Blog3/public/archives/d4fa.html","89e78ecfcf40bc648c0f4e43352628bb"],["D:/BLOG_QZL/Blog3/public/archives/d57d.html","a5c1df4425fc2a59bfb157c2a9518e00"],["D:/BLOG_QZL/Blog3/public/archives/d84f.html","ad430d2391f50e0a3cd85c3e47c636b2"],["D:/BLOG_QZL/Blog3/public/archives/eaabd222.html","9729f11fa06ceec78e4e2e02464ef2fa"],["D:/BLOG_QZL/Blog3/public/archives/f32f.html","82726713c2e18654b2825a1c662f1f22"],["D:/BLOG_QZL/Blog3/public/archives/f957.html","0fc7909ac70f7d40f6743b5ed708197f"],["D:/BLOG_QZL/Blog3/public/archives/index.html","26eb547d85047a2bc429680915ae2e6f"],["D:/BLOG_QZL/Blog3/public/archives/page/2/index.html","26eb547d85047a2bc429680915ae2e6f"],["D:/BLOG_QZL/Blog3/public/archives/page/3/index.html","49fe2691ff001c5b4fc2b1bfab23d2d7"],["D:/BLOG_QZL/Blog3/public/archives/page/4/index.html","26eb547d85047a2bc429680915ae2e6f"],["D:/BLOG_QZL/Blog3/public/categories/OJ/index.html","818f178730003c1bc2472c464fb27169"],["D:/BLOG_QZL/Blog3/public/categories/hexo博客搭建/index.html","db85264096d42bcb0c0bd4e60e053ce6"],["D:/BLOG_QZL/Blog3/public/categories/index.html","23f67e3cdeb3bb402bbb0a90692f5bde"],["D:/BLOG_QZL/Blog3/public/categories/博客搭建/index.html","347750291cb3a7b72eca732f7244a8f7"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/C-C/index.html","4b9afb1017dee6629747290807156f5d"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/index.html","61493df40e8c66adb1251d50f72e0bfc"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/page/2/index.html","84893e3d25e497ac2013de93a2642699"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/page/3/index.html","1854c1c4d262a4d4ce0253b8477aed37"],["D:/BLOG_QZL/Blog3/public/comment/index.html","0f569f78d6f52e3f835d48abb78ca7c3"],["D:/BLOG_QZL/Blog3/public/css/style.css","c8fd7484eca1e8ec23112d2a6296def3"],["D:/BLOG_QZL/Blog3/public/easysearch/about/index.html","79b02e4972bb67e19b339791be509b94"],["D:/BLOG_QZL/Blog3/public/easysearch/index.html","fdf25bede0eef8b0074d489ea7c47f4d"],["D:/BLOG_QZL/Blog3/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["D:/BLOG_QZL/Blog3/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["D:/BLOG_QZL/Blog3/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["D:/BLOG_QZL/Blog3/public/friends/index.html","e5f6caa05584ad6920e62bc05f449573"],["D:/BLOG_QZL/Blog3/public/img/algolia.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["D:/BLOG_QZL/Blog3/public/img/azure.svg","a7577e663c1e0fb788fed78d7457ff35"],["D:/BLOG_QZL/Blog3/public/img/baidu.svg","124ce00f2785724d84e32ab6403386a6"],["D:/BLOG_QZL/Blog3/public/index.html","bcc7cb32487d5910e4c373192fab2fcd"],["D:/BLOG_QZL/Blog3/public/js/app.js","a5d659af4b9d17196436c302e39ec916"],["D:/BLOG_QZL/Blog3/public/js/ergao.js","b1f566c49973d6fdab7ba0b372a4d17f"],["D:/BLOG_QZL/Blog3/public/js/love.js","88b75dcff60dd218bbb0db6cc37f3267"],["D:/BLOG_QZL/Blog3/public/js/search.js","63c61e56f228d83b544e21b4a7ed899c"],["D:/BLOG_QZL/Blog3/public/js/volantis.js","3c2fbf0d8e8c9ce1bbf88f0bf797b9ee"],["D:/BLOG_QZL/Blog3/public/page/2/index.html","a239d84f4bf44a63486d156b8210f184"],["D:/BLOG_QZL/Blog3/public/page/3/index.html","9b76ae5988b6406cfbb145c8afc46e6b"],["D:/BLOG_QZL/Blog3/public/page/4/index.html","395725d4e2f72a3d80d97a0263f9d840"],["D:/BLOG_QZL/Blog3/public/projects/index.html","9ebdb2013c747339e7be500afc9a8b1b"],["D:/BLOG_QZL/Blog3/public/tags/C-C/index.html","1e3f19765664ccdd25a338d259bd2060"],["D:/BLOG_QZL/Blog3/public/tags/C/index.html","b85b95600bdb0534360f6a9b9f1b2668"],["D:/BLOG_QZL/Blog3/public/tags/Hexo主题/index.html","e6d8d155621b90ad4e3922e8c9aa9bca"],["D:/BLOG_QZL/Blog3/public/tags/Let-s-Build-A-Simple-Interpreter/index.html","af139dd3ed960bdaa79212783a42bda7"],["D:/BLOG_QZL/Blog3/public/tags/Let’s-Build-A-Simple-Interpreter/index.html","cde1c4a54a83699791b7ce908bf763a3"],["D:/BLOG_QZL/Blog3/public/tags/OJ/index.html","cd71b12e660a6adbc06bf566e9243069"],["D:/BLOG_QZL/Blog3/public/tags/Yilia主题配置/index.html","1ffcbdf21a05af02d84bdeadd82a27fc"],["D:/BLOG_QZL/Blog3/public/tags/forme/index.html","dffc64f7ce991dbf0526e53c59c979f3"],["D:/BLOG_QZL/Blog3/public/tags/front-matter配置/index.html","6e354424c40ccf51f871d9dda98686e9"],["D:/BLOG_QZL/Blog3/public/tags/hexo显示pdf/index.html","5d205b9bea2296da7d1a5fa4e1e63e10"],["D:/BLOG_QZL/Blog3/public/tags/index.html","53deb8d37c76473c00c393a3dfe98627"],["D:/BLOG_QZL/Blog3/public/tags/matery主题配置/index.html","07ae20d4bdf7b1a44c64e2d7e135d952"],["D:/BLOG_QZL/Blog3/public/tags/《计算机科学速成课》/index.html","9ebdf0b48f12e2af7c6579c764a0535b"],["D:/BLOG_QZL/Blog3/public/tags/凸包/index.html","0c03559a2aa7df6012c0b47afda5e749"],["D:/BLOG_QZL/Blog3/public/tags/布尔逻辑和逻辑门/index.html","079193863954b322c391dc31f196a978"],["D:/BLOG_QZL/Blog3/public/tags/计算几何/index.html","1055d12765c8a9ee4745bbbf1ecc9911"],["D:/BLOG_QZL/Blog3/public/tags/计算机科学速成课/index.html","f9e7ff4fd3cd149eb7985ae42b4a09c7"],["D:/BLOG_QZL/Blog3/public/学习笔记/index.html","d11d36bd35eabe988c95d0e3e23716f0"]];
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







