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

var precacheConfig = [["D:/BLOG_QZL/Blog3/public/404.html","f833ff11c13ca5aded075246e1a1d8a1"],["D:/BLOG_QZL/Blog3/public/about/index.html","fdcc82aa8a0ad5e21d56d8110b0312ae"],["D:/BLOG_QZL/Blog3/public/archives/138a.html","2b8b9b1a08267eaa45030e6940aca294"],["D:/BLOG_QZL/Blog3/public/archives/167c.html","d4f9ad42f3876688374467dd6c267280"],["D:/BLOG_QZL/Blog3/public/archives/173c.html","4e7e5bdc25370d2795692ab35f9e18d4"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/index.html","d0bf08bfb368f8d46968fd298bbeec1f"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/page/2/index.html","3a1c28914ce63724410cf850f1fb8385"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/page/3/index.html","aac5fde032aac32c98b5a2134529905b"],["D:/BLOG_QZL/Blog3/public/archives/2020/index.html","ae034bcc5e365ce5d845353f88f56752"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/2/index.html","642830c767164f9e69ac6ffdee631d70"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/3/index.html","29e3f0afc4bc8250426ec8f125c2a4c1"],["D:/BLOG_QZL/Blog3/public/archives/2d6f5e7f.html","b1e227bc5ac5da82b36317732a84dfe5"],["D:/BLOG_QZL/Blog3/public/archives/3478.html","47de081c18efa2e0c3765ed022e19d1a"],["D:/BLOG_QZL/Blog3/public/archives/3b16.html","788a743dba4c4f7a210225d5405dcbdd"],["D:/BLOG_QZL/Blog3/public/archives/427485bf.html","4d00f04c14dca2addf3a554feb95669c"],["D:/BLOG_QZL/Blog3/public/archives/460671de.html","997ef8bcbfb732e8c5fb221b716e4563"],["D:/BLOG_QZL/Blog3/public/archives/510d.html","e7e9375b2925e7560b69e593fac0eb4f"],["D:/BLOG_QZL/Blog3/public/archives/514b.html","c46a87e94ed188c6590fad81e93438a6"],["D:/BLOG_QZL/Blog3/public/archives/622.html","e039905c1ae84117087918eac81cb7a6"],["D:/BLOG_QZL/Blog3/public/archives/7c53.html","4c6a1db95c3cc2d02b055a35a87ad0ee"],["D:/BLOG_QZL/Blog3/public/archives/7f7e.html","d144386a12ce08837cd4e80ce1cc2cb2"],["D:/BLOG_QZL/Blog3/public/archives/87ef.html","58d24ef5d99308913e9b8183d9a2499a"],["D:/BLOG_QZL/Blog3/public/archives/9c7f.html","1a618c50bf9029ed1d2d49b35d57e9f4"],["D:/BLOG_QZL/Blog3/public/archives/ba04.html","c87e0613fc768273f3f1b51f4aecb816"],["D:/BLOG_QZL/Blog3/public/archives/d4fa.html","513851d77108c5cc950783281b850611"],["D:/BLOG_QZL/Blog3/public/archives/d57d.html","d89dccc898816bfff34d6df2806d3df6"],["D:/BLOG_QZL/Blog3/public/archives/d84f.html","20ddc60142b92e6ed7bc8d2905a8d638"],["D:/BLOG_QZL/Blog3/public/archives/f32f.html","50fe4ca16eb20dc2573ee4d4ed0f4f34"],["D:/BLOG_QZL/Blog3/public/archives/f957.html","c449f9fda75dea51a2bebc6e5009051c"],["D:/BLOG_QZL/Blog3/public/archives/index.html","ce00f6e15191eb25bd94946790e4b67b"],["D:/BLOG_QZL/Blog3/public/archives/page/2/index.html","e6de0f1d4fb0c5ec83675c89135ee1bc"],["D:/BLOG_QZL/Blog3/public/archives/page/3/index.html","e6de0f1d4fb0c5ec83675c89135ee1bc"],["D:/BLOG_QZL/Blog3/public/categories/OJ/index.html","ccca0cbe266f4c759a01adfdf66e95dd"],["D:/BLOG_QZL/Blog3/public/categories/index.html","7fa7f534daf82a3801a468754bb4aaf2"],["D:/BLOG_QZL/Blog3/public/categories/博客搭建/index.html","c3fca149d27aac2d3d44196687fb3da4"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/index.html","090abf48e60d3a63c63a9b34754cbdfe"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/page/2/index.html","ef13330da180144a8db17229d85dd169"],["D:/BLOG_QZL/Blog3/public/comment/index.html","ee3cf36eb1c6ff098773683929e99f9c"],["D:/BLOG_QZL/Blog3/public/css/style.css","5d7ed2943af8942a895ef79e9317a240"],["D:/BLOG_QZL/Blog3/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["D:/BLOG_QZL/Blog3/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["D:/BLOG_QZL/Blog3/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["D:/BLOG_QZL/Blog3/public/friends/index.html","45118ad1c4bce6ee59e1673488e57774"],["D:/BLOG_QZL/Blog3/public/img/2527f9e5ef6e97ad40d0cda072bf9455.jpg","e108ff1ddbc7b1edff65cb9ac5f8a96a"],["D:/BLOG_QZL/Blog3/public/img/algolia.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["D:/BLOG_QZL/Blog3/public/img/azure.svg","a7577e663c1e0fb788fed78d7457ff35"],["D:/BLOG_QZL/Blog3/public/img/baidu.svg","124ce00f2785724d84e32ab6403386a6"],["D:/BLOG_QZL/Blog3/public/img/concurrency/df9b300efaeade58758dbe19544b080e.png","93b8422b3654afb030ded4054a5f16e6"],["D:/BLOG_QZL/Blog3/public/img/favicon.gif","f905362284e3709da8cffa1247423f8a"],["D:/BLOG_QZL/Blog3/public/img/kafka/1567762579648.png","00052c8d326a14e75fa7345004e50ac0"],["D:/BLOG_QZL/Blog3/public/img/kafka/1570611450769.png","60ae4335d4bfebac31585a06e1aca3d0"],["D:/BLOG_QZL/Blog3/public/img/kafka/1570614069844.png","76a6ed7ea38b67723a6668a8723531bf"],["D:/BLOG_QZL/Blog3/public/img/kafka/1570618606027.png","f6040d7655ddae24bb0050493e7e0c6f"],["D:/BLOG_QZL/Blog3/public/img/kafka/1570618923749.png","0c8f32e1404c6f3b0d1879dc79a58e42"],["D:/BLOG_QZL/Blog3/public/img/kafka/1570618945713.png","9bc02885a9b3c5eda2037465b979602f"],["D:/BLOG_QZL/Blog3/public/img/kafka/3951011.png","c81914368f2b957fec030ec74b16eec4"],["D:/BLOG_QZL/Blog3/public/img/kafka/3951012.png","b766a97a52eba7287fac39386a744144"],["D:/BLOG_QZL/Blog3/public/img/kafka/3951013.png","17d68f15e959c3cc2ea0dd1b97d222ab"],["D:/BLOG_QZL/Blog3/public/img/kafka/3951014.png","48687c5b0541e3f4ad62d853551a11b7"],["D:/BLOG_QZL/Blog3/public/img/kafka/3951015.png","00a0e30150ec65bc31e9b87551afbe43"],["D:/BLOG_QZL/Blog3/public/img/kafka/3951016.png","6a3240593ae7099dfe5686df77a42e96"],["D:/BLOG_QZL/Blog3/public/img/kafka/kafka.jpg","b3f8b5af09ba061abfdb73c8bd18139b"],["D:/BLOG_QZL/Blog3/public/img/link/bokeyuan.png","ba529c73e5c5c70bdbc3b52710c5fd8d"],["D:/BLOG_QZL/Blog3/public/index.html","44e64f51485f1dbdedcb0a0e762d26fc"],["D:/BLOG_QZL/Blog3/public/js/app.js","a5d659af4b9d17196436c302e39ec916"],["D:/BLOG_QZL/Blog3/public/js/ergao.js","b1f566c49973d6fdab7ba0b372a4d17f"],["D:/BLOG_QZL/Blog3/public/js/love.js","88b75dcff60dd218bbb0db6cc37f3267"],["D:/BLOG_QZL/Blog3/public/js/search.js","63c61e56f228d83b544e21b4a7ed899c"],["D:/BLOG_QZL/Blog3/public/js/volantis.js","3c2fbf0d8e8c9ce1bbf88f0bf797b9ee"],["D:/BLOG_QZL/Blog3/public/mybook/index.html","74cef9bf0e5399dbb810498eb087767f"],["D:/BLOG_QZL/Blog3/public/page/2/index.html","a2f16e0b7ac9306430675ee38e995d0b"],["D:/BLOG_QZL/Blog3/public/page/3/index.html","f9559dd11dfe5f18758d1db345ac0c6d"],["D:/BLOG_QZL/Blog3/public/projects/index.html","cbc6c23b1103d7dbad23055ca6bee85c"],["D:/BLOG_QZL/Blog3/public/tags/Hexo主题/index.html","003552a3e015e8764559c167f4952c2e"],["D:/BLOG_QZL/Blog3/public/tags/Let-s-Build-A-Simple-Interpreter/index.html","8eb89fb93007bb7d984bd43f97142106"],["D:/BLOG_QZL/Blog3/public/tags/Let’s-Build-A-Simple-Interpreter/index.html","c204797d5f66f13ebe78398eb0551041"],["D:/BLOG_QZL/Blog3/public/tags/OJ/index.html","85fc0ea90fdfcd27da4342048e972b3d"],["D:/BLOG_QZL/Blog3/public/tags/Yilia主题配置/index.html","3aaf5a67d5a5b6dd2c725a0402903060"],["D:/BLOG_QZL/Blog3/public/tags/front-matter配置/index.html","7afba235cbcf99e07c1bf1ec572994f7"],["D:/BLOG_QZL/Blog3/public/tags/index.html","99aa007839bb001bb5b02b58dde30702"],["D:/BLOG_QZL/Blog3/public/tags/matery主题配置/index.html","d5c106e083b371b8700bacdaebafb1fc"],["D:/BLOG_QZL/Blog3/public/tags/《计算几何》/index.html","f1faa06b1c8cba696bb67e3ff506a84f"],["D:/BLOG_QZL/Blog3/public/tags/《计算机科学速成课》/index.html","6443e4506079ac7dd7d1a7c738ee567e"],["D:/BLOG_QZL/Blog3/public/tags/凸包/index.html","be8b597c37a097be71f3c9dc93e92320"],["D:/BLOG_QZL/Blog3/public/tags/布尔逻辑和逻辑门/index.html","8b372a675a5af02037b3425d437879a6"],["D:/BLOG_QZL/Blog3/public/tags/计算几何/index.html","71c5b9ab211aaba6872e9f7ca6bf97f3"],["D:/BLOG_QZL/Blog3/public/tags/计算机科学速成课/index.html","9298b14710d365da69246ca5336920ab"],["D:/BLOG_QZL/Blog3/public/学习笔记/index.html","07fe68521b8461fd8c99d2366fc5c921"]];
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







