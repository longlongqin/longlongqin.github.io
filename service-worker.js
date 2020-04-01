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

var precacheConfig = [["D:/BLOG_QZL/Blog3/public/404.html","a7413fae450282c830f5f0ac1f2d26ea"],["D:/BLOG_QZL/Blog3/public/about/index.html","96f8d21fd89f622b63d333025e72119e"],["D:/BLOG_QZL/Blog3/public/archives/138a.html","d07f580b23fa827746334cab4944cbbf"],["D:/BLOG_QZL/Blog3/public/archives/167c.html","b4467eb114f641183247d73134bb00c4"],["D:/BLOG_QZL/Blog3/public/archives/173c.html","51c9e7f37236cdd5e36bbfbcb8c917ab"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/index.html","d3b9b4a7c820fbc656bd6a608af0f6fe"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/page/2/index.html","18e0f61f57db7da55325d975555ba826"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/page/3/index.html","db563118b7cc71f62ac54881a3611984"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/page/4/index.html","09fa3604cc5752133c8ca31a5f6a8cf8"],["D:/BLOG_QZL/Blog3/public/archives/2020/index.html","53c702caf9d730c82c728db8f1630136"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/2/index.html","5ef97b52077eef2b15c3d4f6f45817d1"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/3/index.html","69d08290d17074c0c6cb831796b61b4b"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/4/index.html","10c1186c199932626236081b9087c204"],["D:/BLOG_QZL/Blog3/public/archives/28c74e52.html","4331eeec579d1b4cad8967419133df92"],["D:/BLOG_QZL/Blog3/public/archives/2f66ae56.html","5c32d3e9ee33daa349b8637f5d01db72"],["D:/BLOG_QZL/Blog3/public/archives/3478.html","cdb4df3be9c6e84832ebf24090db33bc"],["D:/BLOG_QZL/Blog3/public/archives/3b16.html","191ac32289509ef2dc0ae3e044a59f9b"],["D:/BLOG_QZL/Blog3/public/archives/427485bf.html","d72ac5ec15ed429b7b05b11e3ccc5817"],["D:/BLOG_QZL/Blog3/public/archives/448ac7f1.html","ac1e49b028c61573ce7d2a29bce5c56f"],["D:/BLOG_QZL/Blog3/public/archives/460671de.html","02e35abe023ce9512bbedc790d638c20"],["D:/BLOG_QZL/Blog3/public/archives/510d.html","eb441de86e3aff6a5bfa468f1ed864d4"],["D:/BLOG_QZL/Blog3/public/archives/514b.html","a2055148e8933817e3c0443daa594ebe"],["D:/BLOG_QZL/Blog3/public/archives/5a757a52.html","1173ae34e3be52e9e040c9b8f21dcb18"],["D:/BLOG_QZL/Blog3/public/archives/5fc07ec4.html","1d2c8ca3a28cf2d379defc124aaea856"],["D:/BLOG_QZL/Blog3/public/archives/622.html","c7757466e0a8ca8034303bd046e1ed84"],["D:/BLOG_QZL/Blog3/public/archives/6fc94bb0.html","8a0ec30609844043da99af2fecf342ce"],["D:/BLOG_QZL/Blog3/public/archives/7b67faab.html","03fe5859a408f1802a44371cf0414d29"],["D:/BLOG_QZL/Blog3/public/archives/7c53.html","094aa31be285397e9e60831f4ef04356"],["D:/BLOG_QZL/Blog3/public/archives/7f7e.html","907cf8e2ece84298ad32724387081ee3"],["D:/BLOG_QZL/Blog3/public/archives/8632918.html","3a507316260b99afb2b3bed6f92d66e7"],["D:/BLOG_QZL/Blog3/public/archives/87ef.html","566d37f3bad71a1790bf4b97d2e1e008"],["D:/BLOG_QZL/Blog3/public/archives/9c7f.html","df8470b86fcee883b6b0b8f7066a6271"],["D:/BLOG_QZL/Blog3/public/archives/a0a78e77.html","7d5a90b782d81fa91aaf768d3c8b4add"],["D:/BLOG_QZL/Blog3/public/archives/ae12.html","a64fb9925fe939db6ca8f2419a951501"],["D:/BLOG_QZL/Blog3/public/archives/ba04.html","5184cb51f1a3405f6fb22eb5e5587fe9"],["D:/BLOG_QZL/Blog3/public/archives/bf113a1c.html","a167be252a820b51883fd7f6d6fe1f10"],["D:/BLOG_QZL/Blog3/public/archives/c1a4eb67.html","26e0f3908ce73b0f0bd8983fd0c656e6"],["D:/BLOG_QZL/Blog3/public/archives/d4fa.html","2dfa3eea5ccc7f8d4a8229827ab7a9aa"],["D:/BLOG_QZL/Blog3/public/archives/d57d.html","d454702c83c4771535d51fcda21920ee"],["D:/BLOG_QZL/Blog3/public/archives/d84f.html","4b02792870aaadcb8471df431a44d06d"],["D:/BLOG_QZL/Blog3/public/archives/eaabd222.html","3a0d57dc01eaa79a1bdf79d4292a1201"],["D:/BLOG_QZL/Blog3/public/archives/f32f.html","bab7ccb45447fb033fb71080b9defd2e"],["D:/BLOG_QZL/Blog3/public/archives/f957.html","fb1347685e1cd5f85f0a9ff1c1e30214"],["D:/BLOG_QZL/Blog3/public/archives/index.html","7dff2e38b85adc804d2a771d6b3d9db0"],["D:/BLOG_QZL/Blog3/public/archives/page/2/index.html","9abf0a5aba4099c7621c732e1876317b"],["D:/BLOG_QZL/Blog3/public/archives/page/3/index.html","7dff2e38b85adc804d2a771d6b3d9db0"],["D:/BLOG_QZL/Blog3/public/archives/page/4/index.html","9abf0a5aba4099c7621c732e1876317b"],["D:/BLOG_QZL/Blog3/public/categories/OJ/index.html","ba692f09ce727986f7d0a2da0e38ba1a"],["D:/BLOG_QZL/Blog3/public/categories/hexo博客搭建/index.html","0c164eba3697736186b213f0fa61f77e"],["D:/BLOG_QZL/Blog3/public/categories/index.html","83da311c835ab94145706740ab253011"],["D:/BLOG_QZL/Blog3/public/categories/博客搭建/index.html","85b2e01185bd5343f98e66ba541dfcfa"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/C-C/index.html","7ec41df710d051d1bffc1fbfee999f84"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/index.html","42333ba1974431a5c057b66854acf40f"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/page/2/index.html","430b06e3bc807774e7284ce45c1eb9fc"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/page/3/index.html","e8e4c91c0a9b504f9865b7777422fda2"],["D:/BLOG_QZL/Blog3/public/comment/index.html","161b5426c9235a44785cea3e937b322f"],["D:/BLOG_QZL/Blog3/public/css/style.css","c8fd7484eca1e8ec23112d2a6296def3"],["D:/BLOG_QZL/Blog3/public/easysearch/about/index.html","79b02e4972bb67e19b339791be509b94"],["D:/BLOG_QZL/Blog3/public/easysearch/index.html","fdf25bede0eef8b0074d489ea7c47f4d"],["D:/BLOG_QZL/Blog3/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["D:/BLOG_QZL/Blog3/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["D:/BLOG_QZL/Blog3/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["D:/BLOG_QZL/Blog3/public/friends/index.html","7336b15652859238ade213cce1ef7946"],["D:/BLOG_QZL/Blog3/public/img/algolia.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["D:/BLOG_QZL/Blog3/public/img/azure.svg","a7577e663c1e0fb788fed78d7457ff35"],["D:/BLOG_QZL/Blog3/public/img/baidu.svg","124ce00f2785724d84e32ab6403386a6"],["D:/BLOG_QZL/Blog3/public/index.html","dabc301ed90d1357b89b4b886db70643"],["D:/BLOG_QZL/Blog3/public/js/app.js","a5d659af4b9d17196436c302e39ec916"],["D:/BLOG_QZL/Blog3/public/js/ergao.js","b1f566c49973d6fdab7ba0b372a4d17f"],["D:/BLOG_QZL/Blog3/public/js/love.js","88b75dcff60dd218bbb0db6cc37f3267"],["D:/BLOG_QZL/Blog3/public/js/search.js","63c61e56f228d83b544e21b4a7ed899c"],["D:/BLOG_QZL/Blog3/public/js/volantis.js","3c2fbf0d8e8c9ce1bbf88f0bf797b9ee"],["D:/BLOG_QZL/Blog3/public/page/2/index.html","78b4340cd34c722e8d13a395a85724ce"],["D:/BLOG_QZL/Blog3/public/page/3/index.html","9c170a94e287459dec1525fcb3abf6cb"],["D:/BLOG_QZL/Blog3/public/page/4/index.html","f1ba1d6d7fd2f64c91028dfefab5851b"],["D:/BLOG_QZL/Blog3/public/projects/index.html","1902d8f29451f5c263f5dc63ac30e023"],["D:/BLOG_QZL/Blog3/public/tags/C-C/index.html","d89b408ddc9b2ccb5e47f54a468e404f"],["D:/BLOG_QZL/Blog3/public/tags/C/index.html","7dd4b1c328296d30e3f5b7ee8dd29fef"],["D:/BLOG_QZL/Blog3/public/tags/Hexo主题/index.html","690a8ff7a7b76314253fd5c16b9ded47"],["D:/BLOG_QZL/Blog3/public/tags/Let-s-Build-A-Simple-Interpreter/index.html","9ad6d9ab0bdd4e1c87bf542355813854"],["D:/BLOG_QZL/Blog3/public/tags/Let’s-Build-A-Simple-Interpreter/index.html","a884978e9af6e74a3d84c6b14bf535d2"],["D:/BLOG_QZL/Blog3/public/tags/OJ/index.html","4726a3a2a1effb2f8d05b64981028444"],["D:/BLOG_QZL/Blog3/public/tags/Yilia主题配置/index.html","d2fb5c0ba924d8234d707f8864d2c2a3"],["D:/BLOG_QZL/Blog3/public/tags/forme/index.html","af4b6a1196e17b1419fa67ca4434a195"],["D:/BLOG_QZL/Blog3/public/tags/front-matter配置/index.html","9086e2a4d0c09d03a87f86ad55aaa0ab"],["D:/BLOG_QZL/Blog3/public/tags/hexo显示pdf/index.html","f3468f3cdabc007e1c931c71abd3394f"],["D:/BLOG_QZL/Blog3/public/tags/index.html","357a2fc68a643cb0bf4529a322e373a6"],["D:/BLOG_QZL/Blog3/public/tags/matery主题配置/index.html","e6036f182a175fd3d0b2ed8c9e63dde9"],["D:/BLOG_QZL/Blog3/public/tags/《计算机科学速成课》/index.html","8b114c8659eba8f2ee837c7c3364bfda"],["D:/BLOG_QZL/Blog3/public/tags/凸包/index.html","e47bc8e85f1cdd42fa1e46dddb5b33d5"],["D:/BLOG_QZL/Blog3/public/tags/布尔逻辑和逻辑门/index.html","aa3d3ce250a38babd5ffeb46eb2de0dd"],["D:/BLOG_QZL/Blog3/public/tags/计算几何/index.html","33919871e2b7191a5ec806c8a656b62f"],["D:/BLOG_QZL/Blog3/public/tags/计算机科学速成课/index.html","430c2d4372e40c78d6acda07333adcf5"],["D:/BLOG_QZL/Blog3/public/学习笔记/index.html","f2c2a873254044330910322cb5876fc0"]];
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







