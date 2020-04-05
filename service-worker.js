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

var precacheConfig = [["D:/BLOG_QZL/Blog3/public/404.html","5707d3ec4ac778015d81128b875bd341"],["D:/BLOG_QZL/Blog3/public/about/index.html","9e66bd7549eb094ba5a832a582b28622"],["D:/BLOG_QZL/Blog3/public/archives/138a.html","d17fdb9ace52b29306b9873372e23dd8"],["D:/BLOG_QZL/Blog3/public/archives/167c.html","8439e837da1859e2b28107321c1761c4"],["D:/BLOG_QZL/Blog3/public/archives/173c.html","986c83f99340bf9bce37ee3d650e4fc0"],["D:/BLOG_QZL/Blog3/public/archives/18085cf9.html","aa23e8ef1e3ebba524b7ff469fe4abc7"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/index.html","226f590ec7fde84a1998d3468310e141"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/page/2/index.html","e999d353e8104139a9d89f9d6b5a75ee"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/page/3/index.html","21d187c78be454d8fa661cf99bc1fb01"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/page/4/index.html","668f5de6f84c6b88ef37ccdf0b7449cb"],["D:/BLOG_QZL/Blog3/public/archives/2020/04/index.html","a9b5a7c3d9c44cb1f51964a2262ba506"],["D:/BLOG_QZL/Blog3/public/archives/2020/index.html","9787be6d82b58a97066501046e38049e"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/2/index.html","9c3bf2a780851575924e9e368caaa2e8"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/3/index.html","fb905ac312aaedcda8cd368cb73dae07"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/4/index.html","92dff109eca9286f952ef2551395f892"],["D:/BLOG_QZL/Blog3/public/archives/28c74e52.html","0e172657125e2650434edcfaaf651962"],["D:/BLOG_QZL/Blog3/public/archives/2f66ae56.html","20f1ee0a750e902e0401bb486d12338c"],["D:/BLOG_QZL/Blog3/public/archives/3478.html","cf925190d5237f9d82ac42b923149cdd"],["D:/BLOG_QZL/Blog3/public/archives/3ae1bc73.html","7a4b3f3b4170779a1d9df1239069b2b5"],["D:/BLOG_QZL/Blog3/public/archives/3b16.html","121ef4152bffc0d2f8c824e69d161cea"],["D:/BLOG_QZL/Blog3/public/archives/427485bf.html","74e87b976c626fe075c56ca305555088"],["D:/BLOG_QZL/Blog3/public/archives/448ac7f1.html","675847a003295549c990139aa5ae66c2"],["D:/BLOG_QZL/Blog3/public/archives/460671de.html","1f2355482611579f5045322c032ce158"],["D:/BLOG_QZL/Blog3/public/archives/510d.html","71dfcd83b01b042b13ef89178753a2b8"],["D:/BLOG_QZL/Blog3/public/archives/514b.html","9bacddf6f9b0bfbc95e3ee8628bea519"],["D:/BLOG_QZL/Blog3/public/archives/5a757a52.html","48b72947939005df732ac82f0a1ead1e"],["D:/BLOG_QZL/Blog3/public/archives/5fc07ec4.html","100a6482df3b8ed32af76948351b5e55"],["D:/BLOG_QZL/Blog3/public/archives/622.html","dc4f71daeee449059c84d9b1b9c52020"],["D:/BLOG_QZL/Blog3/public/archives/67343d3.html","673a858d3617e54e7f9c7ebba977e7ec"],["D:/BLOG_QZL/Blog3/public/archives/6fc94bb0.html","64289bb5dc648ca51df887594d172ff8"],["D:/BLOG_QZL/Blog3/public/archives/7b67faab.html","28cbbc6422490b7a8bfd101d074536af"],["D:/BLOG_QZL/Blog3/public/archives/7c53.html","4ae62b16baaf2a4864eb19d9006fdbfc"],["D:/BLOG_QZL/Blog3/public/archives/7f7e.html","079c361c889fbe350c741221109e7e55"],["D:/BLOG_QZL/Blog3/public/archives/8632918.html","fa1021df3a3c8ba4411a48f4dfad494f"],["D:/BLOG_QZL/Blog3/public/archives/87ef.html","f0a3ca50c0dd5a221e4eda37d3ee4f0f"],["D:/BLOG_QZL/Blog3/public/archives/9c7f.html","62a1d1c7ab1361205984273f5e31ebcf"],["D:/BLOG_QZL/Blog3/public/archives/a0a78e77.html","05d0686114279c743b5605756b96b514"],["D:/BLOG_QZL/Blog3/public/archives/ae12.html","af54dd822a253d10e7a62a3c37463ddd"],["D:/BLOG_QZL/Blog3/public/archives/b6a3dbf1.html","ae98262cc74769ab72609b234a9f656a"],["D:/BLOG_QZL/Blog3/public/archives/ba04.html","5ccc5bb2c90305e6d2c78aef15dd62d1"],["D:/BLOG_QZL/Blog3/public/archives/bf113a1c.html","8e99ae308e43b0a66b40c75835a3b5ed"],["D:/BLOG_QZL/Blog3/public/archives/c1a4eb67.html","782c1694950d22879c05e1919961fc69"],["D:/BLOG_QZL/Blog3/public/archives/d4fa.html","bafa9b1eeec83e7729b0637dcf3166f2"],["D:/BLOG_QZL/Blog3/public/archives/d57d.html","d28809537419b012676fbedf813b723c"],["D:/BLOG_QZL/Blog3/public/archives/d84f.html","5dd1494f982991bb538e03b3ac023316"],["D:/BLOG_QZL/Blog3/public/archives/eaabd222.html","023efd322a2cd3caa11dabbe5707d395"],["D:/BLOG_QZL/Blog3/public/archives/f32f.html","0653d628737e38f3212974c3e3ef43de"],["D:/BLOG_QZL/Blog3/public/archives/f957.html","2269ba33a2a272cb3f99412da6208160"],["D:/BLOG_QZL/Blog3/public/archives/index.html","645bfb1a2dacaef0cb35cbd5cc1d5f8d"],["D:/BLOG_QZL/Blog3/public/archives/page/2/index.html","645bfb1a2dacaef0cb35cbd5cc1d5f8d"],["D:/BLOG_QZL/Blog3/public/archives/page/3/index.html","645bfb1a2dacaef0cb35cbd5cc1d5f8d"],["D:/BLOG_QZL/Blog3/public/archives/page/4/index.html","645bfb1a2dacaef0cb35cbd5cc1d5f8d"],["D:/BLOG_QZL/Blog3/public/categories/OJ/index.html","79accf7a0f59e24c2a34447bb8531e79"],["D:/BLOG_QZL/Blog3/public/categories/hexo博客搭建/index.html","38fa2cf0779fa398266c0cbf1cf3e126"],["D:/BLOG_QZL/Blog3/public/categories/index.html","12e856fd361a871b316dbfd87b43799f"],["D:/BLOG_QZL/Blog3/public/categories/博客搭建/index.html","e653e5b0de862f95c297492e174517c6"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/C-C/index.html","b3dce1377cfdc5f7d4c5f8c65cf14826"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/Git/index.html","8e9b45b9afc35eb14108443d23f9d751"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/index.html","d5e077b9f5ea422761354e70b28d1f9e"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/page/2/index.html","9f222426c6a163c9c69436e34caf0737"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/page/3/index.html","60a630e1f4810d4aeff4635c4f313066"],["D:/BLOG_QZL/Blog3/public/comment/index.html","3ea72b334db0ddfe3b2c3f64af7d8ecc"],["D:/BLOG_QZL/Blog3/public/css/style.css","c8fd7484eca1e8ec23112d2a6296def3"],["D:/BLOG_QZL/Blog3/public/easysearch/about/index.html","79b02e4972bb67e19b339791be509b94"],["D:/BLOG_QZL/Blog3/public/easysearch/index.html","fdf25bede0eef8b0074d489ea7c47f4d"],["D:/BLOG_QZL/Blog3/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["D:/BLOG_QZL/Blog3/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["D:/BLOG_QZL/Blog3/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["D:/BLOG_QZL/Blog3/public/friends/index.html","c8551854802ae9486c5ca4b376bb54a2"],["D:/BLOG_QZL/Blog3/public/img/algolia.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["D:/BLOG_QZL/Blog3/public/img/azure.svg","a7577e663c1e0fb788fed78d7457ff35"],["D:/BLOG_QZL/Blog3/public/img/baidu.svg","124ce00f2785724d84e32ab6403386a6"],["D:/BLOG_QZL/Blog3/public/index.html","15bda2b328ca12525d6840fed9615ed0"],["D:/BLOG_QZL/Blog3/public/js/app.js","a5d659af4b9d17196436c302e39ec916"],["D:/BLOG_QZL/Blog3/public/js/ergao.js","b1f566c49973d6fdab7ba0b372a4d17f"],["D:/BLOG_QZL/Blog3/public/js/love.js","88b75dcff60dd218bbb0db6cc37f3267"],["D:/BLOG_QZL/Blog3/public/js/search.js","63c61e56f228d83b544e21b4a7ed899c"],["D:/BLOG_QZL/Blog3/public/js/volantis.js","3c2fbf0d8e8c9ce1bbf88f0bf797b9ee"],["D:/BLOG_QZL/Blog3/public/page/2/index.html","9b12eca5aa2e472dc2a4b669e0076ad4"],["D:/BLOG_QZL/Blog3/public/page/3/index.html","2873bc725ee3bf74a359215388b02c28"],["D:/BLOG_QZL/Blog3/public/page/4/index.html","4c592c625556910b55e302d07f2411fd"],["D:/BLOG_QZL/Blog3/public/projects/index.html","2ca7d89deb93dfe6666c043aa1996f8e"],["D:/BLOG_QZL/Blog3/public/tags/C-C/index.html","cba429ef42e464f6a6528dd269f4116c"],["D:/BLOG_QZL/Blog3/public/tags/C/index.html","9af33b1bf73c40186c004946dab06e70"],["D:/BLOG_QZL/Blog3/public/tags/Git/index.html","87b575ab0c0e597921ef6443221ce168"],["D:/BLOG_QZL/Blog3/public/tags/Hexo主题/index.html","e01f96dd877e2188918689df35f9d595"],["D:/BLOG_QZL/Blog3/public/tags/Let-s-Build-A-Simple-Interpreter/index.html","7450477fc718b778bcb3943c07f698e5"],["D:/BLOG_QZL/Blog3/public/tags/Let’s-Build-A-Simple-Interpreter/index.html","001524cc515b6bda72a6668c8826cc77"],["D:/BLOG_QZL/Blog3/public/tags/OJ/index.html","4d6bdb28c4ec3faa741013cdf1356f4c"],["D:/BLOG_QZL/Blog3/public/tags/Yilia主题配置/index.html","65ff90629df1f5f48df9ee7aa75e4e54"],["D:/BLOG_QZL/Blog3/public/tags/forme/index.html","2a16eac87cf700c9d144a5328efd7d5d"],["D:/BLOG_QZL/Blog3/public/tags/front-matter配置/index.html","6475a4170017cc2387d729ca83ef8714"],["D:/BLOG_QZL/Blog3/public/tags/hexo显示pdf/index.html","f0abe103c38cd806d557c9422b4da6c5"],["D:/BLOG_QZL/Blog3/public/tags/index.html","7808dc68e411b1ba533d2000b3e25e03"],["D:/BLOG_QZL/Blog3/public/tags/matery主题配置/index.html","55b8c8218475cdf3e61871131138379e"],["D:/BLOG_QZL/Blog3/public/tags/《计算机科学速成课》/index.html","52c0a6e50bd8b74af7453831e38a5ff5"],["D:/BLOG_QZL/Blog3/public/tags/凸包/index.html","80302f5a63a3edef3bc10b498dca3231"],["D:/BLOG_QZL/Blog3/public/tags/布尔逻辑和逻辑门/index.html","aaacf37d37f0e0253fd37333366e7246"],["D:/BLOG_QZL/Blog3/public/tags/计算几何/index.html","48a2d617f78ec4f52ca86de77244fe3c"],["D:/BLOG_QZL/Blog3/public/tags/计算机科学速成课/index.html","1ce65ea29ed4a77a55d63435c324a1f5"],["D:/BLOG_QZL/Blog3/public/学习笔记/index.html","ea5699ce0afed7c503151164aea928bf"]];
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







