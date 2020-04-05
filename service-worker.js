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

var precacheConfig = [["D:/BLOG_QZL/Blog3/public/404.html","4a8b01330c9aca67bd48f3393e99dd36"],["D:/BLOG_QZL/Blog3/public/about/index.html","5f38135b369ed9d698f2fde453471dfa"],["D:/BLOG_QZL/Blog3/public/archives/138a.html","20f57fbcb7c0506ed404eb900a8e609d"],["D:/BLOG_QZL/Blog3/public/archives/167c.html","93b9b9ab043bbbc87c0bd628cad482a2"],["D:/BLOG_QZL/Blog3/public/archives/173c.html","8f3a20582212531057b148ae49aad8da"],["D:/BLOG_QZL/Blog3/public/archives/18085cf9.html","a0fe5b48976564f404af8bd027a24bf8"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/index.html","ca4b99c8fa94cef673dffd95a3b4a5fc"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/page/2/index.html","3192989db66c25955ed8bf44e8f49e4d"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/page/3/index.html","aa983e7fc03213f3a463bc0491380331"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/page/4/index.html","a4e6ab9516eb9c38516b796d26f13d4c"],["D:/BLOG_QZL/Blog3/public/archives/2020/04/index.html","108685e3969726c78d1f426f9f22ec09"],["D:/BLOG_QZL/Blog3/public/archives/2020/index.html","6a996eaf0761147efc231f990c292dd9"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/2/index.html","af3dadd07020469839d80ebc64048a53"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/3/index.html","c052c2de985eb1fec427f2d5aeeb015d"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/4/index.html","64331357eb67cb51a44c9c63a39fbce5"],["D:/BLOG_QZL/Blog3/public/archives/28c74e52.html","7da3c09a4c591dd8afa48b9c893d7de4"],["D:/BLOG_QZL/Blog3/public/archives/2f66ae56.html","3b9b9f005c79a21235678b2d316886da"],["D:/BLOG_QZL/Blog3/public/archives/3478.html","bf6ced6f526ffd16f2649c500577206a"],["D:/BLOG_QZL/Blog3/public/archives/3ae1bc73.html","77ce72e26f1183693938d58ea7046053"],["D:/BLOG_QZL/Blog3/public/archives/3b16.html","edb36b2317d81d25c49aa44cf90ca174"],["D:/BLOG_QZL/Blog3/public/archives/427485bf.html","f7ad4ad70f15e4552b90f3991c6f2d6e"],["D:/BLOG_QZL/Blog3/public/archives/448ac7f1.html","bea1066d29fe0bfb0f1a13918689a698"],["D:/BLOG_QZL/Blog3/public/archives/460671de.html","9acab75d8968121d9e8ce12b0f240c4b"],["D:/BLOG_QZL/Blog3/public/archives/510d.html","0ee027bbcc166b18b26acfa5f88cca3f"],["D:/BLOG_QZL/Blog3/public/archives/514b.html","62ceceebd7e973dc32d194e58f452671"],["D:/BLOG_QZL/Blog3/public/archives/5a757a52.html","2987e633d33babf8ed61ebeef94a506c"],["D:/BLOG_QZL/Blog3/public/archives/5fc07ec4.html","c9d96cc1bed2f4f9814b9df3339df26f"],["D:/BLOG_QZL/Blog3/public/archives/622.html","953c8c06ca647b1bafca20636fb165f8"],["D:/BLOG_QZL/Blog3/public/archives/67343d3.html","1a1fba35af9432fc5cafc5fa5e47d90e"],["D:/BLOG_QZL/Blog3/public/archives/6fc94bb0.html","7e6b2b7e3883cb77ef1a9d3ac8976a56"],["D:/BLOG_QZL/Blog3/public/archives/7b67faab.html","3db52adf37d1ebe55ce62fcada2f010d"],["D:/BLOG_QZL/Blog3/public/archives/7c53.html","340bc420a08f0d6e7482c9641486e550"],["D:/BLOG_QZL/Blog3/public/archives/7f7e.html","f81b37245eaf7281247a93bdb0ee29e9"],["D:/BLOG_QZL/Blog3/public/archives/8632918.html","a34f3367d52626f9ce38ce5a3ab4514b"],["D:/BLOG_QZL/Blog3/public/archives/87ef.html","8d4dde0ba8bfffe9cb2f27f8fb219399"],["D:/BLOG_QZL/Blog3/public/archives/9c7f.html","03c3bee3b1326a03e15eb9792fda29fe"],["D:/BLOG_QZL/Blog3/public/archives/a0a78e77.html","5bcce2c3a8e2d0e218480ba9f54c7cd6"],["D:/BLOG_QZL/Blog3/public/archives/ae12.html","15e11e75089199dcec1f5e184e90d165"],["D:/BLOG_QZL/Blog3/public/archives/b6a3dbf1.html","4b94e3341c253f7148183c6a96870c5d"],["D:/BLOG_QZL/Blog3/public/archives/ba04.html","3747f0f0ea9399a8d1206921fda757d1"],["D:/BLOG_QZL/Blog3/public/archives/bf113a1c.html","62893b130032d340935885469006b5bb"],["D:/BLOG_QZL/Blog3/public/archives/c1a4eb67.html","24127900f3ac1dad28130f73e6a8ae5d"],["D:/BLOG_QZL/Blog3/public/archives/d4fa.html","c9e0948d6a34b1102b9e1aeecd2f014d"],["D:/BLOG_QZL/Blog3/public/archives/d57d.html","9fe6407eec32122894237339ecdba6f9"],["D:/BLOG_QZL/Blog3/public/archives/d84f.html","9763953419de84348089362fb103528d"],["D:/BLOG_QZL/Blog3/public/archives/eaabd222.html","624c7950123cf9c183a07d73baff7674"],["D:/BLOG_QZL/Blog3/public/archives/f32f.html","076052b7ce6055ced5fd32569db2cf85"],["D:/BLOG_QZL/Blog3/public/archives/f957.html","cbfbb253fdb70861515694a875227070"],["D:/BLOG_QZL/Blog3/public/archives/index.html","121990da6e756f23b603c1e3a74b1d12"],["D:/BLOG_QZL/Blog3/public/archives/page/2/index.html","121990da6e756f23b603c1e3a74b1d12"],["D:/BLOG_QZL/Blog3/public/archives/page/3/index.html","121990da6e756f23b603c1e3a74b1d12"],["D:/BLOG_QZL/Blog3/public/archives/page/4/index.html","121990da6e756f23b603c1e3a74b1d12"],["D:/BLOG_QZL/Blog3/public/categories/OJ/index.html","a1803ccc84d45d0c40457bd83658ca93"],["D:/BLOG_QZL/Blog3/public/categories/hexo博客搭建/index.html","a8bc3f0c8b589cf6892c320670694a7e"],["D:/BLOG_QZL/Blog3/public/categories/index.html","e9878538e59f910b5809d3b43586df0f"],["D:/BLOG_QZL/Blog3/public/categories/博客搭建/index.html","ca1492f053725c07b0b7aea5afe36faf"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/C-C/index.html","e6ebeb0a23baaf63c4c831ab3b915778"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/Git/index.html","19dad06d0360ce3b69339090c22e6e46"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/index.html","f871413f08ffc3ff0e4f7922beecd971"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/page/2/index.html","4d5d5a09ba6aafcfb1c23815188771a0"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/page/3/index.html","56d86171ced85d7f99909c2d9f109191"],["D:/BLOG_QZL/Blog3/public/comment/index.html","be54e4373bc9b929fd140d249fbedccb"],["D:/BLOG_QZL/Blog3/public/css/style.css","c8fd7484eca1e8ec23112d2a6296def3"],["D:/BLOG_QZL/Blog3/public/easysearch/about/index.html","79b02e4972bb67e19b339791be509b94"],["D:/BLOG_QZL/Blog3/public/easysearch/index.html","fdf25bede0eef8b0074d489ea7c47f4d"],["D:/BLOG_QZL/Blog3/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["D:/BLOG_QZL/Blog3/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["D:/BLOG_QZL/Blog3/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["D:/BLOG_QZL/Blog3/public/friends/index.html","6f5def8ea7afc1a4885dc2677e11ba34"],["D:/BLOG_QZL/Blog3/public/img/algolia.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["D:/BLOG_QZL/Blog3/public/img/azure.svg","a7577e663c1e0fb788fed78d7457ff35"],["D:/BLOG_QZL/Blog3/public/img/baidu.svg","124ce00f2785724d84e32ab6403386a6"],["D:/BLOG_QZL/Blog3/public/index.html","7b3c4ed27ea43749fd56208e1f9e1a58"],["D:/BLOG_QZL/Blog3/public/js/app.js","a5d659af4b9d17196436c302e39ec916"],["D:/BLOG_QZL/Blog3/public/js/ergao.js","b1f566c49973d6fdab7ba0b372a4d17f"],["D:/BLOG_QZL/Blog3/public/js/love.js","88b75dcff60dd218bbb0db6cc37f3267"],["D:/BLOG_QZL/Blog3/public/js/search.js","63c61e56f228d83b544e21b4a7ed899c"],["D:/BLOG_QZL/Blog3/public/js/volantis.js","3c2fbf0d8e8c9ce1bbf88f0bf797b9ee"],["D:/BLOG_QZL/Blog3/public/page/2/index.html","9c0828196ce6e1b9a24260046188e26f"],["D:/BLOG_QZL/Blog3/public/page/3/index.html","4a97f8f2279c62e5277f402d30c72ff8"],["D:/BLOG_QZL/Blog3/public/page/4/index.html","544243f9deaa79d5c3c4547b5a337dea"],["D:/BLOG_QZL/Blog3/public/projects/index.html","56576fb1ec071e189e851755c9ba058f"],["D:/BLOG_QZL/Blog3/public/tags/C-C/index.html","ca0838c969db04554606516a4004fcb7"],["D:/BLOG_QZL/Blog3/public/tags/C/index.html","49d69cde66e46064c025f4162f08af4b"],["D:/BLOG_QZL/Blog3/public/tags/Git/index.html","08545cf678b205455dfa50e826fd11b3"],["D:/BLOG_QZL/Blog3/public/tags/Hexo主题/index.html","d9d78ac40204650299af93c172e1bdc5"],["D:/BLOG_QZL/Blog3/public/tags/Let-s-Build-A-Simple-Interpreter/index.html","fc2022547609e2974ad993c34abe47ae"],["D:/BLOG_QZL/Blog3/public/tags/Let’s-Build-A-Simple-Interpreter/index.html","2c5020dc88255d0cf719b3eb0d7dab16"],["D:/BLOG_QZL/Blog3/public/tags/OJ/index.html","5e44d45267ffc61bda1fc4e769268e28"],["D:/BLOG_QZL/Blog3/public/tags/Yilia主题配置/index.html","6e8f5b26eedc4ef377d0b16b39a51af4"],["D:/BLOG_QZL/Blog3/public/tags/forme/index.html","8c4f523e65780c3e73564aace496a189"],["D:/BLOG_QZL/Blog3/public/tags/front-matter配置/index.html","bd49769794a30c861b217ecc05a8beaf"],["D:/BLOG_QZL/Blog3/public/tags/hexo显示pdf/index.html","c3d67b75948da492b009ee74b380a18c"],["D:/BLOG_QZL/Blog3/public/tags/index.html","ab5d9e363f3cefc79db0198219a2abe5"],["D:/BLOG_QZL/Blog3/public/tags/matery主题配置/index.html","9fd0e86f79e783794bcddad772a1f6d6"],["D:/BLOG_QZL/Blog3/public/tags/《计算机科学速成课》/index.html","f4967fac961983e0680539ddfc28df71"],["D:/BLOG_QZL/Blog3/public/tags/凸包/index.html","b493f0bde7cea6c78a500b4c119018db"],["D:/BLOG_QZL/Blog3/public/tags/布尔逻辑和逻辑门/index.html","b95b3db5b50bd1694df1046b9f1f4e57"],["D:/BLOG_QZL/Blog3/public/tags/计算几何/index.html","e1eba77eed5248b2ffa4b75eebd7ddf5"],["D:/BLOG_QZL/Blog3/public/tags/计算机科学速成课/index.html","a9e3745cf3abdc5f8a96eda83e917476"],["D:/BLOG_QZL/Blog3/public/学习笔记/index.html","aced56b6d8fb1d82028c0a0a13e09949"]];
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







