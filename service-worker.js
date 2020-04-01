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

var precacheConfig = [["D:/BLOG_QZL/Blog3/public/404.html","71dfaa5e1818abcfac7624d619cb59c0"],["D:/BLOG_QZL/Blog3/public/about/index.html","e6d8f7f773b6100ab27363771cf16a30"],["D:/BLOG_QZL/Blog3/public/archives/138a.html","597f5071a4b9ebef68ccf46508464e91"],["D:/BLOG_QZL/Blog3/public/archives/167c.html","e3d002711911c57583edf7b1d5339b89"],["D:/BLOG_QZL/Blog3/public/archives/173c.html","86a3b82e47e1a391201b915f0b94a31e"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/index.html","44ff2187e7bbbf785e829840a3b6c512"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/page/2/index.html","3cd57d5903185d4ae868b92ed523fb07"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/page/3/index.html","1ea4e12be357df31c61bdbfdec8b4c75"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/page/4/index.html","0176d8a89263b7eb8d60a76e1484f992"],["D:/BLOG_QZL/Blog3/public/archives/2020/04/index.html","c54f6643c8f4a777cd93f857a8549ee4"],["D:/BLOG_QZL/Blog3/public/archives/2020/index.html","4f7c8ee5aa84ba04e1cb5dae2a03e18e"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/2/index.html","7d263f11cf973b097a265a4fba853879"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/3/index.html","8cf7fb6a469cb05a7295b0e25b3d06d6"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/4/index.html","a2b28f73accf66c0d70247ddd22c2b52"],["D:/BLOG_QZL/Blog3/public/archives/28c74e52.html","09a58b20c3b8bca7df84949ae0cb8256"],["D:/BLOG_QZL/Blog3/public/archives/2f66ae56.html","a6871a53acde23361a1596990281161f"],["D:/BLOG_QZL/Blog3/public/archives/3478.html","776efb4994c109beda0318c2f538dd01"],["D:/BLOG_QZL/Blog3/public/archives/3ae1bc73.html","f0c1dee0906739f0a9efae14f7aae1e3"],["D:/BLOG_QZL/Blog3/public/archives/3b16.html","f06173436336cb9a43812dabf5e30417"],["D:/BLOG_QZL/Blog3/public/archives/427485bf.html","09cef279359677e76544e556940b7aa1"],["D:/BLOG_QZL/Blog3/public/archives/448ac7f1.html","d8fded62421cffe439c3d7d4ade90bf7"],["D:/BLOG_QZL/Blog3/public/archives/460671de.html","cdd3b42bcd7cf8470f7a37422700e813"],["D:/BLOG_QZL/Blog3/public/archives/510d.html","2d876448a6a8bfd1b3b4fc1af3be2a26"],["D:/BLOG_QZL/Blog3/public/archives/514b.html","6987a587cb1d28c12a912ac1148fac5b"],["D:/BLOG_QZL/Blog3/public/archives/5a757a52.html","052dd3a2790daacc979693338be29d2f"],["D:/BLOG_QZL/Blog3/public/archives/5fc07ec4.html","5be535280753791ed1ebe59a5ef970c4"],["D:/BLOG_QZL/Blog3/public/archives/622.html","dfff83c88809d09795e4acee5af610e9"],["D:/BLOG_QZL/Blog3/public/archives/6fc94bb0.html","8c8852c0ddd9f3cd450bd67887b6c67c"],["D:/BLOG_QZL/Blog3/public/archives/7b67faab.html","1c82ce707514a3f1533804577efaf40b"],["D:/BLOG_QZL/Blog3/public/archives/7c53.html","2bb9560e0d99c4fafbdfc1d3e00b6df4"],["D:/BLOG_QZL/Blog3/public/archives/7f7e.html","b360aa22eec721b38cb15a9e904e853e"],["D:/BLOG_QZL/Blog3/public/archives/8632918.html","65892f5094b5e7438d39759fb721df3f"],["D:/BLOG_QZL/Blog3/public/archives/87ef.html","8f7af62499b7dc609c0e618a302308f6"],["D:/BLOG_QZL/Blog3/public/archives/9c7f.html","ba1742e1b29a995a226aadbdd5c6cc13"],["D:/BLOG_QZL/Blog3/public/archives/a0a78e77.html","37cc285241a935c6a7cf15f7ae7fdc41"],["D:/BLOG_QZL/Blog3/public/archives/ae12.html","1ac49c88ab8978b8dfc1e6718c5a0a54"],["D:/BLOG_QZL/Blog3/public/archives/ba04.html","b70e1fa0aa902e7fa1c315c2646b9de0"],["D:/BLOG_QZL/Blog3/public/archives/bf113a1c.html","236b479cceffc9100ebae32bdc287c18"],["D:/BLOG_QZL/Blog3/public/archives/c1a4eb67.html","e1cd46735ccf09dd9a142e69d08c27b6"],["D:/BLOG_QZL/Blog3/public/archives/d4fa.html","b4c03056a3b4b078c68f7c78e9b361df"],["D:/BLOG_QZL/Blog3/public/archives/d57d.html","04cb8773d09a7cbef47ec8102cb50b64"],["D:/BLOG_QZL/Blog3/public/archives/d84f.html","711ebb1e93fc8757653d105c1ccde382"],["D:/BLOG_QZL/Blog3/public/archives/f32f.html","0ca0b733695058e69374f1288cddbf28"],["D:/BLOG_QZL/Blog3/public/archives/f957.html","ec22126846001037fe990fa0bd2996e2"],["D:/BLOG_QZL/Blog3/public/archives/index.html","5a4b46ad4d3e5d5a71e73a9e616328be"],["D:/BLOG_QZL/Blog3/public/archives/page/2/index.html","5a4b46ad4d3e5d5a71e73a9e616328be"],["D:/BLOG_QZL/Blog3/public/archives/page/3/index.html","e49091877d303425d5714bdb6c6361b6"],["D:/BLOG_QZL/Blog3/public/archives/page/4/index.html","5a4b46ad4d3e5d5a71e73a9e616328be"],["D:/BLOG_QZL/Blog3/public/categories/OJ/index.html","89469a0369fa13060bdc020009278d3f"],["D:/BLOG_QZL/Blog3/public/categories/hexo博客搭建/index.html","54a56af4af4d2a215b6c75f24b88babf"],["D:/BLOG_QZL/Blog3/public/categories/index.html","cd28e94532606d4257393d82366d919d"],["D:/BLOG_QZL/Blog3/public/categories/博客搭建/index.html","d611bf0318976c1b7dc07a2a80884e8e"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/C-C/index.html","660aeb52fa611011b400dbea4b1ed86e"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/index.html","e708880a0027e5462f5978d28b45143d"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/page/2/index.html","a283c804b228fb015ffc4879714a69fb"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/page/3/index.html","4bac66de6767e747a26249365d85fbb3"],["D:/BLOG_QZL/Blog3/public/comment/index.html","eacbf6d4eda12d6b5c711890fe9f27e9"],["D:/BLOG_QZL/Blog3/public/css/style.css","c8fd7484eca1e8ec23112d2a6296def3"],["D:/BLOG_QZL/Blog3/public/easysearch/about/index.html","79b02e4972bb67e19b339791be509b94"],["D:/BLOG_QZL/Blog3/public/easysearch/index.html","fdf25bede0eef8b0074d489ea7c47f4d"],["D:/BLOG_QZL/Blog3/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["D:/BLOG_QZL/Blog3/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["D:/BLOG_QZL/Blog3/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["D:/BLOG_QZL/Blog3/public/friends/index.html","e6272ed5e8b3bdc00ccc1ac2dbcdb550"],["D:/BLOG_QZL/Blog3/public/img/algolia.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["D:/BLOG_QZL/Blog3/public/img/azure.svg","a7577e663c1e0fb788fed78d7457ff35"],["D:/BLOG_QZL/Blog3/public/img/baidu.svg","124ce00f2785724d84e32ab6403386a6"],["D:/BLOG_QZL/Blog3/public/index.html","f3d16bc400de8a60cc2e0e3d11752872"],["D:/BLOG_QZL/Blog3/public/js/app.js","a5d659af4b9d17196436c302e39ec916"],["D:/BLOG_QZL/Blog3/public/js/ergao.js","b1f566c49973d6fdab7ba0b372a4d17f"],["D:/BLOG_QZL/Blog3/public/js/love.js","88b75dcff60dd218bbb0db6cc37f3267"],["D:/BLOG_QZL/Blog3/public/js/search.js","63c61e56f228d83b544e21b4a7ed899c"],["D:/BLOG_QZL/Blog3/public/js/volantis.js","3c2fbf0d8e8c9ce1bbf88f0bf797b9ee"],["D:/BLOG_QZL/Blog3/public/page/2/index.html","1d53528e71c22f3d63406b2318b3798b"],["D:/BLOG_QZL/Blog3/public/page/3/index.html","fda9cd80cdb1fd6c85cbb05f469ec8c7"],["D:/BLOG_QZL/Blog3/public/page/4/index.html","212d3ea71cf6a841470e8ef2ea6aac97"],["D:/BLOG_QZL/Blog3/public/projects/index.html","7f3669eabecf570ab233d28703e862e1"],["D:/BLOG_QZL/Blog3/public/tags/C-C/index.html","9e24e60d13044f439578e57760844803"],["D:/BLOG_QZL/Blog3/public/tags/C/index.html","93aa137e4207ff164fe04a83caeb94eb"],["D:/BLOG_QZL/Blog3/public/tags/Hexo主题/index.html","15e2b2bf34531b17489ad4b9dad0acac"],["D:/BLOG_QZL/Blog3/public/tags/Let-s-Build-A-Simple-Interpreter/index.html","6b12e57c12d615563d9c2036ed3a2a38"],["D:/BLOG_QZL/Blog3/public/tags/Let’s-Build-A-Simple-Interpreter/index.html","bdd9c5a2edbe781de7e79be2425219b6"],["D:/BLOG_QZL/Blog3/public/tags/OJ/index.html","4a1f7b2a03c172b41aac4abd1ea9855b"],["D:/BLOG_QZL/Blog3/public/tags/Yilia主题配置/index.html","2f18c226c0f12c224c71799d73a5d38b"],["D:/BLOG_QZL/Blog3/public/tags/front-matter配置/index.html","bb0ef119cadae116722a238e18adcbe0"],["D:/BLOG_QZL/Blog3/public/tags/hexo显示pdf/index.html","feac3c1f1b1da8d939604c9b99d69985"],["D:/BLOG_QZL/Blog3/public/tags/index.html","1a81aaec42542f726806c4420f0b42ae"],["D:/BLOG_QZL/Blog3/public/tags/matery主题配置/index.html","8de8877f447faea2827c5e20c515af26"],["D:/BLOG_QZL/Blog3/public/tags/《计算机科学速成课》/index.html","70f6510bf308105bda3f66b296b94d14"],["D:/BLOG_QZL/Blog3/public/tags/凸包/index.html","2e4dea4ec9405831532743cd8244f48a"],["D:/BLOG_QZL/Blog3/public/tags/布尔逻辑和逻辑门/index.html","b9f7f41e7c67c78851b74b3a8c2dd0aa"],["D:/BLOG_QZL/Blog3/public/tags/计算几何/index.html","5c688de55902652372a033be3a35aebf"],["D:/BLOG_QZL/Blog3/public/tags/计算机科学速成课/index.html","b12dc938406040b4e03accc7e786e5ff"],["D:/BLOG_QZL/Blog3/public/学习笔记/index.html","e102affeccd6ca1d5c1140a6be9ca41d"]];
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







