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

var precacheConfig = [["D:/BLOG_QZL/Blog3/public/404.html","4a85ea0e958f63ae6685f9916217c4bb"],["D:/BLOG_QZL/Blog3/public/about/index.html","a8435e6ed7581e0638c02fa724745ab3"],["D:/BLOG_QZL/Blog3/public/archives/138a.html","f73622c681795b1ecf2bfa2b4f6c03c5"],["D:/BLOG_QZL/Blog3/public/archives/167c.html","d4c7675ae65fe96de7f29036c5d49e9d"],["D:/BLOG_QZL/Blog3/public/archives/173c.html","5b22ca0d1590e1dc4e3e36bb1870ea48"],["D:/BLOG_QZL/Blog3/public/archives/18085cf9.html","d75ca4061fa4ec7de594171aacf4707e"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/index.html","96d88ef9bc91b9469de406e5d875211e"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/page/2/index.html","cb9f3ad0d9c9a62395c834082804255b"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/page/3/index.html","6ce657138e0e1e3578968a088bef25be"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/page/4/index.html","9422f78e67b36bbed55c0a0a5de915cc"],["D:/BLOG_QZL/Blog3/public/archives/2020/04/index.html","b984f7ede281f69b928caaf54d8269ea"],["D:/BLOG_QZL/Blog3/public/archives/2020/index.html","d38df9f0b627df0c4aa0bf2354d8d956"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/2/index.html","d78fe5bd7350acf5dbf0dedcd9349a2b"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/3/index.html","00bf682ee4ba426387d815e088e818b5"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/4/index.html","c3a417d81dcddbb1e0c2c40b8cdec2c6"],["D:/BLOG_QZL/Blog3/public/archives/28c74e52.html","026b16076ef10bafef9a3ac9f83d5704"],["D:/BLOG_QZL/Blog3/public/archives/2f66ae56.html","67d0a486eb5e1534cdba0f23c2f1d4b6"],["D:/BLOG_QZL/Blog3/public/archives/2faa8a4b.html","7c8f24bd16237378b35c356047602379"],["D:/BLOG_QZL/Blog3/public/archives/3478.html","ed686e78d3bf5abbe1e9fe8f84dde5db"],["D:/BLOG_QZL/Blog3/public/archives/3ae1bc73.html","88589f58bd0131154db111cb954d0437"],["D:/BLOG_QZL/Blog3/public/archives/3b16.html","5aa2331aae0e104f0a0ae92c7f36bf81"],["D:/BLOG_QZL/Blog3/public/archives/427485bf.html","649cd75d02ca817f7bdd8d50a77d1cef"],["D:/BLOG_QZL/Blog3/public/archives/448ac7f1.html","93617d32d0b9a7f63c1cc38d522178dc"],["D:/BLOG_QZL/Blog3/public/archives/460671de.html","89a8088536236f78cc814d4778c18fab"],["D:/BLOG_QZL/Blog3/public/archives/510d.html","7b446a20e92e0b6bca0dab58016a7ade"],["D:/BLOG_QZL/Blog3/public/archives/514b.html","113151f7da347b802d9795d872cdce6d"],["D:/BLOG_QZL/Blog3/public/archives/5a757a52.html","7f688e04e4ca4af0541b5bd00ef3c1d7"],["D:/BLOG_QZL/Blog3/public/archives/5fc07ec4.html","83a945aa9ff9b75d3ef48eaf05774080"],["D:/BLOG_QZL/Blog3/public/archives/622.html","b265bf3c66af63b609029ad6739f17d3"],["D:/BLOG_QZL/Blog3/public/archives/67343d3.html","2419320dd09528b50e9623c0e0a2e1fe"],["D:/BLOG_QZL/Blog3/public/archives/6fc94bb0.html","af996497722c5b1a39f6d7c68debf205"],["D:/BLOG_QZL/Blog3/public/archives/7a585be8.html","1eff04dd0676960306ab54ee2566d240"],["D:/BLOG_QZL/Blog3/public/archives/7b67faab.html","c9a9d021044c279168429284fe37a932"],["D:/BLOG_QZL/Blog3/public/archives/7c53.html","4a925c8345b95f9180ed9b00a3d2e9af"],["D:/BLOG_QZL/Blog3/public/archives/7f7e.html","df6823656d2af1095fb5f489200c79d2"],["D:/BLOG_QZL/Blog3/public/archives/8632918.html","d6ab8c43f4e0f9e3222e602406e3cc60"],["D:/BLOG_QZL/Blog3/public/archives/87ef.html","6caeac360a2cc64319123bee20c49451"],["D:/BLOG_QZL/Blog3/public/archives/9c7f.html","b59b414dec784989f2db6fbe0866beda"],["D:/BLOG_QZL/Blog3/public/archives/9f0a1d82.html","3828dd09c9f6f9d7a84ec2508235a408"],["D:/BLOG_QZL/Blog3/public/archives/a0a78e77.html","fda885386226c8bce1042d494d274e13"],["D:/BLOG_QZL/Blog3/public/archives/ae12.html","543fea730e96e2da621f39ef984f2cde"],["D:/BLOG_QZL/Blog3/public/archives/b6a3dbf1.html","42455d75395c191667e2b83fdd15da46"],["D:/BLOG_QZL/Blog3/public/archives/ba04.html","8c1a31b4b05af7c8ea5695354945d5a5"],["D:/BLOG_QZL/Blog3/public/archives/bf113a1c.html","93444308c8e1797073a183f5af33dad4"],["D:/BLOG_QZL/Blog3/public/archives/c1a4eb67.html","6b09db4883ee6dc065fa77d2d47288bc"],["D:/BLOG_QZL/Blog3/public/archives/d4fa.html","82924f4d5ab0d791f236737e1d349395"],["D:/BLOG_QZL/Blog3/public/archives/d57d.html","e81201fe19734c9a74c0639263ed077e"],["D:/BLOG_QZL/Blog3/public/archives/d84f.html","52133d21be34dc2b61a8424fe7d1a9d4"],["D:/BLOG_QZL/Blog3/public/archives/eaabd222.html","1409e7a8a1ee77c3b22f04c262946980"],["D:/BLOG_QZL/Blog3/public/archives/f32f.html","e815407c3c1c6583fb834be66c73e02b"],["D:/BLOG_QZL/Blog3/public/archives/f957.html","4f39d0cdd13ff180f163c73aaf5f0275"],["D:/BLOG_QZL/Blog3/public/archives/index.html","be1cdd424c8c9e80387da4c40959049a"],["D:/BLOG_QZL/Blog3/public/archives/page/2/index.html","2642c29ebc6e2ccb07d1553c2b7b9734"],["D:/BLOG_QZL/Blog3/public/archives/page/3/index.html","be1cdd424c8c9e80387da4c40959049a"],["D:/BLOG_QZL/Blog3/public/archives/page/4/index.html","be1cdd424c8c9e80387da4c40959049a"],["D:/BLOG_QZL/Blog3/public/categories/OJ/index.html","04fbc1a72ef855da19f70b4020dd33b8"],["D:/BLOG_QZL/Blog3/public/categories/hexo博客搭建/index.html","05c8be075f2060a82f3e7dd9c406d48c"],["D:/BLOG_QZL/Blog3/public/categories/index.html","80a0644b4cff1021419b1a9b37bf299e"],["D:/BLOG_QZL/Blog3/public/categories/博客搭建/index.html","b362b055fba627df3c1a67df35c224c9"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/C-C/index.html","8f3d2fab7785783999cf53d717d76835"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/Git/index.html","ceec9ae69096b4fed787045385ef9991"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/index.html","32b8d9949753f58a8e8db768b8282eba"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/linux/index.html","14985f60b7af71951a76707ee91e393a"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/page/2/index.html","0eefcfcc76b12c6aa80537e56e2c9384"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/page/3/index.html","5dda7c335ecd926d44f01fb9997bb19a"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/page/4/index.html","c9979d3956a842d4b3a7a05b8434f96c"],["D:/BLOG_QZL/Blog3/public/categories/配置/index.html","355371f4eb783e95ee5af112cd906513"],["D:/BLOG_QZL/Blog3/public/comment/index.html","1df237f5ca76d4f490db8d63bd9a254c"],["D:/BLOG_QZL/Blog3/public/css/style.css","c8fd7484eca1e8ec23112d2a6296def3"],["D:/BLOG_QZL/Blog3/public/easysearch/about/index.html","79b02e4972bb67e19b339791be509b94"],["D:/BLOG_QZL/Blog3/public/easysearch/index.html","fdf25bede0eef8b0074d489ea7c47f4d"],["D:/BLOG_QZL/Blog3/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["D:/BLOG_QZL/Blog3/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["D:/BLOG_QZL/Blog3/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["D:/BLOG_QZL/Blog3/public/friends/index.html","7149eba50b7a03f795be047dd8ec5f9d"],["D:/BLOG_QZL/Blog3/public/img/algolia.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["D:/BLOG_QZL/Blog3/public/img/azure.svg","a7577e663c1e0fb788fed78d7457ff35"],["D:/BLOG_QZL/Blog3/public/img/baidu.svg","124ce00f2785724d84e32ab6403386a6"],["D:/BLOG_QZL/Blog3/public/index.html","61c558e2d7b9ae1b5b2126632e66371e"],["D:/BLOG_QZL/Blog3/public/js/app.js","a5d659af4b9d17196436c302e39ec916"],["D:/BLOG_QZL/Blog3/public/js/ergao.js","b1f566c49973d6fdab7ba0b372a4d17f"],["D:/BLOG_QZL/Blog3/public/js/love.js","88b75dcff60dd218bbb0db6cc37f3267"],["D:/BLOG_QZL/Blog3/public/js/search.js","63c61e56f228d83b544e21b4a7ed899c"],["D:/BLOG_QZL/Blog3/public/js/volantis.js","3c2fbf0d8e8c9ce1bbf88f0bf797b9ee"],["D:/BLOG_QZL/Blog3/public/page/2/index.html","1a88767108e1730854d93e0662b91949"],["D:/BLOG_QZL/Blog3/public/page/3/index.html","103105601b6cfc25161a75bc21a64d68"],["D:/BLOG_QZL/Blog3/public/page/4/index.html","fc6eaafe50d03b4b19447a6a78139452"],["D:/BLOG_QZL/Blog3/public/projects/index.html","42116b509d6a73f6ad2701977d3ad1c4"],["D:/BLOG_QZL/Blog3/public/tags/C-C/index.html","aefdff27c3203ea75f624800908534a8"],["D:/BLOG_QZL/Blog3/public/tags/C/index.html","bc06ca061a9ed4f169f959263fc9c17a"],["D:/BLOG_QZL/Blog3/public/tags/Git/index.html","91208330c5b66ef70ccc87777a9fd24d"],["D:/BLOG_QZL/Blog3/public/tags/Hexo主题/index.html","fbcafadebbbffe11ed5afd726afd4fec"],["D:/BLOG_QZL/Blog3/public/tags/Let-s-Build-A-Simple-Interpreter/index.html","987ba310cc634bddf87c3a0f15cc1663"],["D:/BLOG_QZL/Blog3/public/tags/Let’s-Build-A-Simple-Interpreter/index.html","8b86f536e882616a4f4f1ab371e226e8"],["D:/BLOG_QZL/Blog3/public/tags/OJ/index.html","8a9d1b6f4b650a915b78dcba02e3e030"],["D:/BLOG_QZL/Blog3/public/tags/Yilia主题配置/index.html","3aacc0a2d9d5ac6d79a4a610527914ee"],["D:/BLOG_QZL/Blog3/public/tags/forme/index.html","048522fc12968a65be0590a5281230f4"],["D:/BLOG_QZL/Blog3/public/tags/front-matter配置/index.html","2ffec38e7174e1cf07b0b315debadc56"],["D:/BLOG_QZL/Blog3/public/tags/hexo显示pdf/index.html","554ce701674a52d648e718ce6b71e2c3"],["D:/BLOG_QZL/Blog3/public/tags/index.html","da6a688f8937418eaa3ce2bdf65195bf"],["D:/BLOG_QZL/Blog3/public/tags/linux/index.html","5b7b4adb524975b9c5a1429e0dc9db11"],["D:/BLOG_QZL/Blog3/public/tags/matery主题配置/index.html","519c6e5bf88a6ec454ea7fe426acce83"],["D:/BLOG_QZL/Blog3/public/tags/opencv/index.html","83d49fba0642acc4bd1431d8750cf447"],["D:/BLOG_QZL/Blog3/public/tags/《计算机科学速成课》/index.html","ee798fde538f730ca96ac4d94272949d"],["D:/BLOG_QZL/Blog3/public/tags/凸包/index.html","2bbce7de513160f89aca4942506f2021"],["D:/BLOG_QZL/Blog3/public/tags/布尔逻辑和逻辑门/index.html","c27543912933825677da5a2f7d775567"],["D:/BLOG_QZL/Blog3/public/tags/计算几何/index.html","f7e8aa0cb468a90bdbb6d7a94744a965"],["D:/BLOG_QZL/Blog3/public/tags/计算机科学速成课/index.html","1c82d4c2824982f9dd032efa4b07fd0d"],["D:/BLOG_QZL/Blog3/public/学习笔记/index.html","8534014f93c227236fc5f2bfb71dec00"]];
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







