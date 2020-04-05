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

var precacheConfig = [["D:/BLOG_QZL/Blog3/public/404.html","4871eca039b756fa8669df441c484192"],["D:/BLOG_QZL/Blog3/public/about/index.html","4db8fc8b29dd21d6aa224566044a6e3e"],["D:/BLOG_QZL/Blog3/public/archives/138a.html","feb9a544c8603e165d7cab135cb5a824"],["D:/BLOG_QZL/Blog3/public/archives/167c.html","932fea764992ebfafa1b47c7cf903e06"],["D:/BLOG_QZL/Blog3/public/archives/173c.html","4f4bf02f4e7159b1fc6ab0d43af21622"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/index.html","aa3d7e996b9e084ce7c86cee3615fd93"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/page/2/index.html","8ff2e37ca36e5766ce22e71d4aac021a"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/page/3/index.html","36a9c76e27a798e7bb4f93913e9b7801"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/page/4/index.html","fc972d64e998b01cb6f33203b6caeae1"],["D:/BLOG_QZL/Blog3/public/archives/2020/04/index.html","01e89bd7ca8711a41579b030106e6b55"],["D:/BLOG_QZL/Blog3/public/archives/2020/index.html","08c8ea2e29af891af7d04e3337f0e9e8"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/2/index.html","d7d6c2f7eb00afd356a17b97feec851d"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/3/index.html","82bac7b91cc9b8d63efc15d59bc065a3"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/4/index.html","b2580a71688ee7a99c21c11a7f7735a3"],["D:/BLOG_QZL/Blog3/public/archives/28c74e52.html","18458ed8b4a9f8aca2d477f5cc68c11a"],["D:/BLOG_QZL/Blog3/public/archives/2f66ae56.html","fae9b30348c27420346d7356edf67345"],["D:/BLOG_QZL/Blog3/public/archives/3478.html","12102708bf6c50fd8879c0dfb166bd9d"],["D:/BLOG_QZL/Blog3/public/archives/3ae1bc73.html","5668f0aebc847c24f8ef3b39818de0dd"],["D:/BLOG_QZL/Blog3/public/archives/3b16.html","45e667bac45b1d9e274cc45fe2318165"],["D:/BLOG_QZL/Blog3/public/archives/427485bf.html","56818b88dd1e815a3a700c987d921a95"],["D:/BLOG_QZL/Blog3/public/archives/448ac7f1.html","6a00578d40bc8c636ba6ada2a11e458d"],["D:/BLOG_QZL/Blog3/public/archives/460671de.html","270dcfba2b604fb7ac08a75c095c5cd1"],["D:/BLOG_QZL/Blog3/public/archives/510d.html","e3403988632e222d0a9a0103ca40b81a"],["D:/BLOG_QZL/Blog3/public/archives/514b.html","291026c860ee482e9100c03b5701a63c"],["D:/BLOG_QZL/Blog3/public/archives/5a757a52.html","76489742a6992618e8a4631bdc8a0917"],["D:/BLOG_QZL/Blog3/public/archives/5fc07ec4.html","722fc42405d562b40407b3875d4e9894"],["D:/BLOG_QZL/Blog3/public/archives/622.html","aa2193aba6bd04e2237928381028ae07"],["D:/BLOG_QZL/Blog3/public/archives/67343d3.html","9d7560344615e22158a6b7087dcbe11b"],["D:/BLOG_QZL/Blog3/public/archives/6fc94bb0.html","eaab62cf27f9e0b512599217a48efe15"],["D:/BLOG_QZL/Blog3/public/archives/7b67faab.html","f6680db5c61605927c8610c1396e76df"],["D:/BLOG_QZL/Blog3/public/archives/7c53.html","0f7c067dc5eb73b409acd116af9da936"],["D:/BLOG_QZL/Blog3/public/archives/7f7e.html","5f332e7aa8f6115bf86426abdba7cfb2"],["D:/BLOG_QZL/Blog3/public/archives/8632918.html","cb368476bd3743c6e928c83ee7c9172f"],["D:/BLOG_QZL/Blog3/public/archives/87ef.html","4c45d8b2e6838925158e288220cd5d6f"],["D:/BLOG_QZL/Blog3/public/archives/9c7f.html","12ca4454c4a1f4183129be376245433e"],["D:/BLOG_QZL/Blog3/public/archives/a0a78e77.html","aa03921091d007e5b637d3248c2e769f"],["D:/BLOG_QZL/Blog3/public/archives/ae12.html","7c5a784f847d7b72b2d64ed57e4149da"],["D:/BLOG_QZL/Blog3/public/archives/b6a3dbf1.html","4e996d2aceeb2d6045404a715f6a63f7"],["D:/BLOG_QZL/Blog3/public/archives/ba04.html","5ffd30c2462f2e766a204ab509487d2b"],["D:/BLOG_QZL/Blog3/public/archives/bf113a1c.html","acb6ce7c1a2f89561c45945bab2e1350"],["D:/BLOG_QZL/Blog3/public/archives/c1a4eb67.html","aed2e13a064468b4db1089b5e01a7d0c"],["D:/BLOG_QZL/Blog3/public/archives/d4fa.html","1f370c726bc4549e36eb15cce8966cc5"],["D:/BLOG_QZL/Blog3/public/archives/d57d.html","5d5756cc9e9951c6b08c1e1df1512b62"],["D:/BLOG_QZL/Blog3/public/archives/d84f.html","f0fa074d7ed804d0f3574b90b2019138"],["D:/BLOG_QZL/Blog3/public/archives/eaabd222.html","5e2cccd8859d95c3dff7b278be622e81"],["D:/BLOG_QZL/Blog3/public/archives/f32f.html","cc5dc56dec243f377d2af3d4feabd5fe"],["D:/BLOG_QZL/Blog3/public/archives/f957.html","8c9b14a1b97d2c6eeb24ac034a794b60"],["D:/BLOG_QZL/Blog3/public/archives/index.html","dded2a6e55834e5b83e6c7970838e0d0"],["D:/BLOG_QZL/Blog3/public/archives/page/2/index.html","dded2a6e55834e5b83e6c7970838e0d0"],["D:/BLOG_QZL/Blog3/public/archives/page/3/index.html","dded2a6e55834e5b83e6c7970838e0d0"],["D:/BLOG_QZL/Blog3/public/archives/page/4/index.html","dded2a6e55834e5b83e6c7970838e0d0"],["D:/BLOG_QZL/Blog3/public/categories/OJ/index.html","04d380d70c15c7b65fa9ef2c80881546"],["D:/BLOG_QZL/Blog3/public/categories/hexo博客搭建/index.html","f5ed22edf9b2adcdb4b90a08d1c94ac7"],["D:/BLOG_QZL/Blog3/public/categories/index.html","00eae682b23419f3e08d044657a3b3c8"],["D:/BLOG_QZL/Blog3/public/categories/博客搭建/index.html","2b053139f6bedd344680574919874f5d"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/C-C/index.html","d60b14d186806ccdcef3e17a512024bb"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/index.html","aacd387099fa8df322ac8b1ca5ca204d"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/page/2/index.html","45ebf7788fbfe9b8412b32a6891c5492"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/page/3/index.html","602cc3751be56f7f156ead414404351d"],["D:/BLOG_QZL/Blog3/public/comment/index.html","733d82b6435044a9110e9f71e3d3c185"],["D:/BLOG_QZL/Blog3/public/css/style.css","c8fd7484eca1e8ec23112d2a6296def3"],["D:/BLOG_QZL/Blog3/public/easysearch/about/index.html","79b02e4972bb67e19b339791be509b94"],["D:/BLOG_QZL/Blog3/public/easysearch/index.html","fdf25bede0eef8b0074d489ea7c47f4d"],["D:/BLOG_QZL/Blog3/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["D:/BLOG_QZL/Blog3/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["D:/BLOG_QZL/Blog3/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["D:/BLOG_QZL/Blog3/public/friends/index.html","e83ee19294c471d97b0075f133165f99"],["D:/BLOG_QZL/Blog3/public/img/algolia.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["D:/BLOG_QZL/Blog3/public/img/azure.svg","a7577e663c1e0fb788fed78d7457ff35"],["D:/BLOG_QZL/Blog3/public/img/baidu.svg","124ce00f2785724d84e32ab6403386a6"],["D:/BLOG_QZL/Blog3/public/index.html","57d2719d37cca8683e5281ac246281c8"],["D:/BLOG_QZL/Blog3/public/js/app.js","a5d659af4b9d17196436c302e39ec916"],["D:/BLOG_QZL/Blog3/public/js/ergao.js","b1f566c49973d6fdab7ba0b372a4d17f"],["D:/BLOG_QZL/Blog3/public/js/love.js","88b75dcff60dd218bbb0db6cc37f3267"],["D:/BLOG_QZL/Blog3/public/js/search.js","63c61e56f228d83b544e21b4a7ed899c"],["D:/BLOG_QZL/Blog3/public/js/volantis.js","3c2fbf0d8e8c9ce1bbf88f0bf797b9ee"],["D:/BLOG_QZL/Blog3/public/page/2/index.html","e073489aec11c6c7abb7229c8a106a64"],["D:/BLOG_QZL/Blog3/public/page/3/index.html","b81ca65060147312871cc66788caf6a1"],["D:/BLOG_QZL/Blog3/public/page/4/index.html","e81b8a8214a8622d3ad9a0a4ab12bf10"],["D:/BLOG_QZL/Blog3/public/projects/index.html","e7276c21418d25dbb044ebbc8ec8691b"],["D:/BLOG_QZL/Blog3/public/tags/C-C/index.html","e29cfa8bc2c0c68ec329cfdcdb4b8a09"],["D:/BLOG_QZL/Blog3/public/tags/C/index.html","19930cf9d101f4553992a376c00825e3"],["D:/BLOG_QZL/Blog3/public/tags/Hexo主题/index.html","2c356b5a468d6816c958fc2e3c71da83"],["D:/BLOG_QZL/Blog3/public/tags/Let-s-Build-A-Simple-Interpreter/index.html","22020e772e3101b15628d0126e4471d9"],["D:/BLOG_QZL/Blog3/public/tags/Let’s-Build-A-Simple-Interpreter/index.html","36bc879f73390782906fe45949746bcc"],["D:/BLOG_QZL/Blog3/public/tags/OJ/index.html","c724e3fd2b3b4ff314e6d6e328fe8b6a"],["D:/BLOG_QZL/Blog3/public/tags/Yilia主题配置/index.html","116e0e441f15184de2dabe85af135e0b"],["D:/BLOG_QZL/Blog3/public/tags/forme/index.html","fcaae9ca32d63bebb5893c7c0edb6d67"],["D:/BLOG_QZL/Blog3/public/tags/front-matter配置/index.html","3e484bbb5d00d73b0b8b08b8694949d8"],["D:/BLOG_QZL/Blog3/public/tags/hexo显示pdf/index.html","618d6fd32deb01d38a6a0d866405c5c4"],["D:/BLOG_QZL/Blog3/public/tags/index.html","f2a2876414cc890e046b7178ad55a6c0"],["D:/BLOG_QZL/Blog3/public/tags/matery主题配置/index.html","fb0eb66034c1316332acdb89f4e00f80"],["D:/BLOG_QZL/Blog3/public/tags/《计算机科学速成课》/index.html","83f127447d3b22066d96ef97b9e9a22b"],["D:/BLOG_QZL/Blog3/public/tags/凸包/index.html","86cfb900cf916d5a7688414fb0ce6392"],["D:/BLOG_QZL/Blog3/public/tags/布尔逻辑和逻辑门/index.html","6b60acc0c2a62abc5d243c4ac5ea6033"],["D:/BLOG_QZL/Blog3/public/tags/计算几何/index.html","037a8e72321081da147d17377fdfee40"],["D:/BLOG_QZL/Blog3/public/tags/计算机科学速成课/index.html","9da472962624833478223e784367e3ae"],["D:/BLOG_QZL/Blog3/public/学习笔记/index.html","dd9ce4fa3fb9a7dad576de97a61b3987"]];
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







