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

var precacheConfig = [["D:/BLOG_QZL/Blog3/public/404.html","1e7d29527c325d088164724cf6482e3d"],["D:/BLOG_QZL/Blog3/public/about/index.html","7715d25cb9b3e6100c2696edaf921853"],["D:/BLOG_QZL/Blog3/public/archives/138a.html","1fd8aa8a0d8ce031c70a8a99cfc4b705"],["D:/BLOG_QZL/Blog3/public/archives/167c.html","b787f7c2d79c75b47546fe8b468089d3"],["D:/BLOG_QZL/Blog3/public/archives/173c.html","6319c3dff4e69b282aa88a0bab1ff2af"],["D:/BLOG_QZL/Blog3/public/archives/18085cf9.html","a2d1ecc9d1938ba7e0fe6cdfbf958554"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/index.html","917a85a79da2c699d7ff49dd3e27c1db"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/page/2/index.html","bed582d5c236a3228960f614fa9b0147"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/page/3/index.html","924e0b9b45a0882ca1ee7c6ea9913105"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/page/4/index.html","6a8b576184d373643ea77bb201045b22"],["D:/BLOG_QZL/Blog3/public/archives/2020/04/index.html","d458a65cd590f792efb3fb90393ac9cb"],["D:/BLOG_QZL/Blog3/public/archives/2020/index.html","d292167772a300c3a96267e80e9ca561"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/2/index.html","ff91d732ef9714de29a0b907b2506309"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/3/index.html","33651efbff7b96de811a14987262c5c4"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/4/index.html","9eeb83cd0bc1081f132550f7d23525f1"],["D:/BLOG_QZL/Blog3/public/archives/28c74e52.html","4a8d21124d4b22c27eed9ed075155d22"],["D:/BLOG_QZL/Blog3/public/archives/2f66ae56.html","373097825251e738647c34a65a97af13"],["D:/BLOG_QZL/Blog3/public/archives/2faa8a4b.html","6a8198e2e13f23d7785f742c975f3f02"],["D:/BLOG_QZL/Blog3/public/archives/3478.html","873a5adf9b9903f37b760695adf01f0e"],["D:/BLOG_QZL/Blog3/public/archives/3ae1bc73.html","98386e326b295735f27203ba7d56e749"],["D:/BLOG_QZL/Blog3/public/archives/3b16.html","1f45b2aae58c8e4340aa7d9e30abaeae"],["D:/BLOG_QZL/Blog3/public/archives/427485bf.html","85b5c6aaf4177c86ecd59cb4d4aea9bd"],["D:/BLOG_QZL/Blog3/public/archives/448ac7f1.html","61f3b47a6579b7d8237c44a8e52d40e4"],["D:/BLOG_QZL/Blog3/public/archives/460671de.html","2e684abfeb986d36050de4ff8ceb1509"],["D:/BLOG_QZL/Blog3/public/archives/510d.html","13685c558b4e97d80f7a213a41c6c044"],["D:/BLOG_QZL/Blog3/public/archives/514b.html","7281a40a4a95ccff8fb6aab38d822d8b"],["D:/BLOG_QZL/Blog3/public/archives/5a757a52.html","81c624f6701a5bd95ed87e98e0f0e830"],["D:/BLOG_QZL/Blog3/public/archives/5fc07ec4.html","af362009252b2734a16359c4cfb881a8"],["D:/BLOG_QZL/Blog3/public/archives/622.html","95501fa431b848e5786516477457f043"],["D:/BLOG_QZL/Blog3/public/archives/67343d3.html","acd35c79eb2c3f56175585a2bb18f765"],["D:/BLOG_QZL/Blog3/public/archives/6fc94bb0.html","c6ae2292d201692bef73a056b43470c7"],["D:/BLOG_QZL/Blog3/public/archives/7a585be8.html","0729fc794456743717e16ad07ded9bec"],["D:/BLOG_QZL/Blog3/public/archives/7b67faab.html","faa8e8ba4849cd147db44c85a90f1630"],["D:/BLOG_QZL/Blog3/public/archives/7c53.html","2ca929c3bfc23ccc59b4371dc39d7376"],["D:/BLOG_QZL/Blog3/public/archives/7f7e.html","e0f1e79c8873f390a75fa6c2d4322e8c"],["D:/BLOG_QZL/Blog3/public/archives/8632918.html","fff48b0a40e7a0c92ce157fec973d4f5"],["D:/BLOG_QZL/Blog3/public/archives/87ef.html","9310db9e84467dfd128c99d6d8305be7"],["D:/BLOG_QZL/Blog3/public/archives/9c7f.html","39d573023ed357e1f077d0dcd6ace8b7"],["D:/BLOG_QZL/Blog3/public/archives/9f0a1d82.html","9492acb2bb1f74317d583c3cb6cfae0d"],["D:/BLOG_QZL/Blog3/public/archives/a0a78e77.html","1e3e1051f04383a153830595b4021dc3"],["D:/BLOG_QZL/Blog3/public/archives/ae12.html","7f1d338e958f76a0eeab87bd42b17fdc"],["D:/BLOG_QZL/Blog3/public/archives/b6a3dbf1.html","b0dc64e8c154c99f71c89dfde57cc5b4"],["D:/BLOG_QZL/Blog3/public/archives/ba04.html","b07707830ad737b3fee60c1789859eea"],["D:/BLOG_QZL/Blog3/public/archives/bf113a1c.html","caae244d1d29d1433da9c5a260aa678d"],["D:/BLOG_QZL/Blog3/public/archives/c1a4eb67.html","584b8941d685b4c79fecd5e733a63efc"],["D:/BLOG_QZL/Blog3/public/archives/d4fa.html","f204890040775d85d2f4e0b40c6992f9"],["D:/BLOG_QZL/Blog3/public/archives/d57d.html","c0a55b39d264fbc01753a8d7aed3ceb0"],["D:/BLOG_QZL/Blog3/public/archives/d84f.html","cb9fe6bd5a1ed06399de7de2dbc1897d"],["D:/BLOG_QZL/Blog3/public/archives/eaabd222.html","acfbe8e44f1e52d64e6a7bec70dbc2b4"],["D:/BLOG_QZL/Blog3/public/archives/f32f.html","4e59f0d8a6b7982ef4bbb373b97e6231"],["D:/BLOG_QZL/Blog3/public/archives/f957.html","876afb843c799a5a367203913acf4027"],["D:/BLOG_QZL/Blog3/public/archives/index.html","4ea4acbf81d40ca16be115e1d76cc542"],["D:/BLOG_QZL/Blog3/public/archives/page/2/index.html","1ed20daf6d89a1e2e46749c74eca8172"],["D:/BLOG_QZL/Blog3/public/archives/page/3/index.html","4ea4acbf81d40ca16be115e1d76cc542"],["D:/BLOG_QZL/Blog3/public/archives/page/4/index.html","4ea4acbf81d40ca16be115e1d76cc542"],["D:/BLOG_QZL/Blog3/public/categories/OJ/index.html","da0f600771f849536bcc6129c9a66a6f"],["D:/BLOG_QZL/Blog3/public/categories/hexo博客搭建/index.html","d64d610f29e22dd892344ae5cbf28cb5"],["D:/BLOG_QZL/Blog3/public/categories/index.html","fef4caf2d26a715582376d7809003e3b"],["D:/BLOG_QZL/Blog3/public/categories/博客搭建/index.html","28d5bfb7ef5736de8b84fc475fcb15cf"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/C-C/index.html","e67e8189718266bf57fa61f42da95c99"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/Git/index.html","00a81e9a95dece5d21322b93c760d194"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/index.html","06a51cfc5a1ccb277d5059fe3542ee07"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/linux/index.html","d3b69c39733161d8b6d8cf437d003725"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/page/2/index.html","0a4995a2fdee2edff02fd15c1e6f077f"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/page/3/index.html","803f9d5eaa032fe144a036669a3e7fd9"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/page/4/index.html","71aa57578932a881e1b4d1c522f9b25e"],["D:/BLOG_QZL/Blog3/public/categories/配置/index.html","bbf00ea1802709575f0de124875ff31d"],["D:/BLOG_QZL/Blog3/public/comment/index.html","3878356789027868380736ea69d3b994"],["D:/BLOG_QZL/Blog3/public/css/style.css","c8fd7484eca1e8ec23112d2a6296def3"],["D:/BLOG_QZL/Blog3/public/easysearch/about/index.html","79b02e4972bb67e19b339791be509b94"],["D:/BLOG_QZL/Blog3/public/easysearch/index.html","fdf25bede0eef8b0074d489ea7c47f4d"],["D:/BLOG_QZL/Blog3/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["D:/BLOG_QZL/Blog3/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["D:/BLOG_QZL/Blog3/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["D:/BLOG_QZL/Blog3/public/friends/index.html","972d17a37a24c3a4adee8d323bb33736"],["D:/BLOG_QZL/Blog3/public/img/algolia.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["D:/BLOG_QZL/Blog3/public/img/azure.svg","a7577e663c1e0fb788fed78d7457ff35"],["D:/BLOG_QZL/Blog3/public/img/baidu.svg","124ce00f2785724d84e32ab6403386a6"],["D:/BLOG_QZL/Blog3/public/index.html","2f68379af7bea293726fd064b1065573"],["D:/BLOG_QZL/Blog3/public/js/app.js","a5d659af4b9d17196436c302e39ec916"],["D:/BLOG_QZL/Blog3/public/js/ergao.js","b1f566c49973d6fdab7ba0b372a4d17f"],["D:/BLOG_QZL/Blog3/public/js/love.js","88b75dcff60dd218bbb0db6cc37f3267"],["D:/BLOG_QZL/Blog3/public/js/search.js","63c61e56f228d83b544e21b4a7ed899c"],["D:/BLOG_QZL/Blog3/public/js/volantis.js","3c2fbf0d8e8c9ce1bbf88f0bf797b9ee"],["D:/BLOG_QZL/Blog3/public/page/2/index.html","7772e865e299cecd00fb0d8e31934ece"],["D:/BLOG_QZL/Blog3/public/page/3/index.html","3f8f82d4aaf9563e73849bc3449c46e1"],["D:/BLOG_QZL/Blog3/public/page/4/index.html","6b99bc033d3862e643801dcf9a71961e"],["D:/BLOG_QZL/Blog3/public/projects/index.html","d09de938b928ef9817b03d4e79a4bdb1"],["D:/BLOG_QZL/Blog3/public/tags/C-C/index.html","b57c0076164f41d816c3c8274cd9ceb5"],["D:/BLOG_QZL/Blog3/public/tags/C/index.html","29448a137f8b6e0e33c5662fde1881bf"],["D:/BLOG_QZL/Blog3/public/tags/Git/index.html","dbf8a17abcf436edc1d6373711850d83"],["D:/BLOG_QZL/Blog3/public/tags/Hexo主题/index.html","0fa2588e5b1d9fc274e688d11f1e0ba6"],["D:/BLOG_QZL/Blog3/public/tags/Let-s-Build-A-Simple-Interpreter/index.html","b9da98c961d0e76e7d0ac30e78b411b0"],["D:/BLOG_QZL/Blog3/public/tags/Let’s-Build-A-Simple-Interpreter/index.html","911a5f1a935f3bd373d931d6c77358cc"],["D:/BLOG_QZL/Blog3/public/tags/OJ/index.html","25a2d172cfecbb916ffb11dc8776de01"],["D:/BLOG_QZL/Blog3/public/tags/Yilia主题配置/index.html","21723605d6ce7aba9891efbde0c56016"],["D:/BLOG_QZL/Blog3/public/tags/forme/index.html","494271ebac91224a9fcbba1e525888c1"],["D:/BLOG_QZL/Blog3/public/tags/front-matter配置/index.html","02254dc464d4d1fa52e3877109546eaa"],["D:/BLOG_QZL/Blog3/public/tags/hexo显示pdf/index.html","cbed708385bfb431346a7ea3ad3c2608"],["D:/BLOG_QZL/Blog3/public/tags/index.html","b957b097fd03960f30486510bccec242"],["D:/BLOG_QZL/Blog3/public/tags/linux/index.html","628c2d6b5873ef65a082400e7cf127da"],["D:/BLOG_QZL/Blog3/public/tags/matery主题配置/index.html","4416ea00522d4bf5746d05e1140946ab"],["D:/BLOG_QZL/Blog3/public/tags/opencv/index.html","dff9a66b61ac1e3de48b59741530b6bf"],["D:/BLOG_QZL/Blog3/public/tags/《计算机科学速成课》/index.html","7f7ad829c49c80b9a824ce4e9ab45452"],["D:/BLOG_QZL/Blog3/public/tags/凸包/index.html","663c681175023f11940cdc8e005b87c3"],["D:/BLOG_QZL/Blog3/public/tags/布尔逻辑和逻辑门/index.html","d488ec9e03cc548cc759eabc408307ce"],["D:/BLOG_QZL/Blog3/public/tags/计算几何/index.html","34995ae723fceca8e325adb44315333e"],["D:/BLOG_QZL/Blog3/public/tags/计算机科学速成课/index.html","54249f0bc910fcacaa70e39aebced134"],["D:/BLOG_QZL/Blog3/public/学习笔记/index.html","ca59f369ca3618cd3319158b03b18175"]];
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







