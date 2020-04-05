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

var precacheConfig = [["D:/BLOG_QZL/Blog3/public/404.html","22874256a414fa41bc7431adb8f19e96"],["D:/BLOG_QZL/Blog3/public/about/index.html","b7b90e9aa516568b1e0db22eccd848c8"],["D:/BLOG_QZL/Blog3/public/archives/138a.html","f032d4986cf18cbc49b64acf98ded96c"],["D:/BLOG_QZL/Blog3/public/archives/167c.html","21c97750cb8f1e62ca6f28be775a0a5a"],["D:/BLOG_QZL/Blog3/public/archives/173c.html","d4de0ec6306cc04dc0f1f73432957601"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/index.html","a96b367cd89248b723873a66dded3d79"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/page/2/index.html","f07e7259a357d88647142ac0fadaff65"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/page/3/index.html","fd42166fbbb49144431e798e4602c84f"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/page/4/index.html","f56d3fea89b8fed2e0c71d70be5ef8a2"],["D:/BLOG_QZL/Blog3/public/archives/2020/04/index.html","85abb53af16e1bf744f5f96446be911f"],["D:/BLOG_QZL/Blog3/public/archives/2020/index.html","dc95a307ab06bc8585d58a102fc1bb42"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/2/index.html","5f4f2555e2ae324a6788a243fda1f710"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/3/index.html","f3bebb2c544f1627cd4cddee3eba76bb"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/4/index.html","3d6157d6c2b0012ecfc016a3363c2c0b"],["D:/BLOG_QZL/Blog3/public/archives/28c74e52.html","294f823b363362a54468b9e00e9ebe98"],["D:/BLOG_QZL/Blog3/public/archives/2f66ae56.html","59e88aaa34931f0d9bbaf0c3244673de"],["D:/BLOG_QZL/Blog3/public/archives/3478.html","cf3e0af6278c1cc0b6e6c331b9beee22"],["D:/BLOG_QZL/Blog3/public/archives/3ae1bc73.html","1912c55f5cf40b5d0caa0bd99b59ec8b"],["D:/BLOG_QZL/Blog3/public/archives/3b16.html","9908a1729757740caf29ef2b0af76b7e"],["D:/BLOG_QZL/Blog3/public/archives/427485bf.html","c8d1615033f48e50d98a43d9cf2c4b24"],["D:/BLOG_QZL/Blog3/public/archives/448ac7f1.html","159a2402ab02ac2307ac89c5d8168687"],["D:/BLOG_QZL/Blog3/public/archives/460671de.html","faa69b92b48ddcacca086f2f3bd89333"],["D:/BLOG_QZL/Blog3/public/archives/510d.html","a339535c2f73ebbf761999b0e56ab1e4"],["D:/BLOG_QZL/Blog3/public/archives/514b.html","bfacf576e60dc573d8e205bb12ae64a1"],["D:/BLOG_QZL/Blog3/public/archives/5a757a52.html","84ab00dbc18659065492a7efc0d70e78"],["D:/BLOG_QZL/Blog3/public/archives/5fc07ec4.html","7b3befc3fce0a1f0428ab4683a893300"],["D:/BLOG_QZL/Blog3/public/archives/622.html","a6e6fcb3e10fdfaf41476d438d2d99c9"],["D:/BLOG_QZL/Blog3/public/archives/67343d3.html","5aeade49b97032edbf76469437e47973"],["D:/BLOG_QZL/Blog3/public/archives/6fc94bb0.html","de00274d29d84ad3576246e39bc48cee"],["D:/BLOG_QZL/Blog3/public/archives/7b67faab.html","dfa1c135abd772bba9865c8ed8931a63"],["D:/BLOG_QZL/Blog3/public/archives/7c53.html","3e5360301ccfd5acb81a9af2228585f5"],["D:/BLOG_QZL/Blog3/public/archives/7f7e.html","7f9359b318b0d23f2295faa1945aea51"],["D:/BLOG_QZL/Blog3/public/archives/8632918.html","2b5d6b0a27cce64d405f6f5255a041b6"],["D:/BLOG_QZL/Blog3/public/archives/87ef.html","f96c09e4bf7babc3490b2ecc353af38b"],["D:/BLOG_QZL/Blog3/public/archives/9c7f.html","df9b8b16ed9e1454a1753927f79eda38"],["D:/BLOG_QZL/Blog3/public/archives/a0a78e77.html","eefaa6851f58bcfecab13b1043eae29e"],["D:/BLOG_QZL/Blog3/public/archives/ae12.html","2d8e99208ee8b7319faabc5988c7981d"],["D:/BLOG_QZL/Blog3/public/archives/b6a3dbf1.html","a4f7a7a2865e287d9c37fb5db88140f8"],["D:/BLOG_QZL/Blog3/public/archives/ba04.html","2cc095dd930323e73f37789eb99d2bae"],["D:/BLOG_QZL/Blog3/public/archives/bf113a1c.html","c4a00b4a4a874dd863f3dda7fc06645a"],["D:/BLOG_QZL/Blog3/public/archives/c1a4eb67.html","17ca91ae7625711478e9883d6c85ca33"],["D:/BLOG_QZL/Blog3/public/archives/d4fa.html","a09ed7436bcc009c8a771c04f33b9039"],["D:/BLOG_QZL/Blog3/public/archives/d57d.html","5caac108912097d335b8adc39c4394d6"],["D:/BLOG_QZL/Blog3/public/archives/d84f.html","6cf63f84d57b256544313e4375c05869"],["D:/BLOG_QZL/Blog3/public/archives/eaabd222.html","b0a7ff745d7cce4414398b8834f2a1b7"],["D:/BLOG_QZL/Blog3/public/archives/f32f.html","5ab54fc12b437769b14162b02aa4eca5"],["D:/BLOG_QZL/Blog3/public/archives/f957.html","6bb1e397658e6384e6cfbb48c9172628"],["D:/BLOG_QZL/Blog3/public/archives/index.html","67acdc616ad1b365fbd6438b1e703ea4"],["D:/BLOG_QZL/Blog3/public/archives/page/2/index.html","67acdc616ad1b365fbd6438b1e703ea4"],["D:/BLOG_QZL/Blog3/public/archives/page/3/index.html","67acdc616ad1b365fbd6438b1e703ea4"],["D:/BLOG_QZL/Blog3/public/archives/page/4/index.html","67acdc616ad1b365fbd6438b1e703ea4"],["D:/BLOG_QZL/Blog3/public/categories/OJ/index.html","4b5a54ed54ff762485dc025e7affcaa2"],["D:/BLOG_QZL/Blog3/public/categories/hexo博客搭建/index.html","75c366928091652b00f8a01056e934c6"],["D:/BLOG_QZL/Blog3/public/categories/index.html","5a08f344b8e152d6637cf2bb3eee2c1c"],["D:/BLOG_QZL/Blog3/public/categories/博客搭建/index.html","b682358b973e8c4e282df929531fb8a8"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/C-C/index.html","180c057f547e9c336515e027650bd556"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/index.html","a8f0d833de6d084441dcf8c6c30de5bb"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/page/2/index.html","8b1a6af314d3dd861c42cb00017ef281"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/page/3/index.html","66261ec2d48719f5fde8ec215ded51ca"],["D:/BLOG_QZL/Blog3/public/comment/index.html","b4fcccc319a69b7f3039635f3681445c"],["D:/BLOG_QZL/Blog3/public/css/style.css","c8fd7484eca1e8ec23112d2a6296def3"],["D:/BLOG_QZL/Blog3/public/easysearch/about/index.html","79b02e4972bb67e19b339791be509b94"],["D:/BLOG_QZL/Blog3/public/easysearch/index.html","fdf25bede0eef8b0074d489ea7c47f4d"],["D:/BLOG_QZL/Blog3/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["D:/BLOG_QZL/Blog3/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["D:/BLOG_QZL/Blog3/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["D:/BLOG_QZL/Blog3/public/friends/index.html","0c8aaf1c7129b4c6607acb63fa6c7720"],["D:/BLOG_QZL/Blog3/public/img/algolia.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["D:/BLOG_QZL/Blog3/public/img/azure.svg","a7577e663c1e0fb788fed78d7457ff35"],["D:/BLOG_QZL/Blog3/public/img/baidu.svg","124ce00f2785724d84e32ab6403386a6"],["D:/BLOG_QZL/Blog3/public/index.html","6bf0d2ef4f880d0423054754c1594c4a"],["D:/BLOG_QZL/Blog3/public/js/app.js","a5d659af4b9d17196436c302e39ec916"],["D:/BLOG_QZL/Blog3/public/js/ergao.js","b1f566c49973d6fdab7ba0b372a4d17f"],["D:/BLOG_QZL/Blog3/public/js/love.js","88b75dcff60dd218bbb0db6cc37f3267"],["D:/BLOG_QZL/Blog3/public/js/search.js","63c61e56f228d83b544e21b4a7ed899c"],["D:/BLOG_QZL/Blog3/public/js/volantis.js","3c2fbf0d8e8c9ce1bbf88f0bf797b9ee"],["D:/BLOG_QZL/Blog3/public/page/2/index.html","9e7a3ccbf1800eb95ade4a5a6e90c469"],["D:/BLOG_QZL/Blog3/public/page/3/index.html","db415c8873b989337300036e9d7b2bc9"],["D:/BLOG_QZL/Blog3/public/page/4/index.html","58bf942b331ba53659f94b6526141bef"],["D:/BLOG_QZL/Blog3/public/projects/index.html","bf48e1b373e2194b813a6805985086ff"],["D:/BLOG_QZL/Blog3/public/tags/C-C/index.html","141c33981eaaafcc6304719a84052344"],["D:/BLOG_QZL/Blog3/public/tags/C/index.html","d651740deba2a0a2d503dfc3d66299ba"],["D:/BLOG_QZL/Blog3/public/tags/Hexo主题/index.html","e332f9da74b3a0ff7f1f5819160b5510"],["D:/BLOG_QZL/Blog3/public/tags/Let-s-Build-A-Simple-Interpreter/index.html","ef5505f42f4ad683d514a72c651f7e31"],["D:/BLOG_QZL/Blog3/public/tags/Let’s-Build-A-Simple-Interpreter/index.html","c55e65f746a0de9af372c431b2ef8d86"],["D:/BLOG_QZL/Blog3/public/tags/OJ/index.html","935aeee29cd90435af72f51ceaff53a8"],["D:/BLOG_QZL/Blog3/public/tags/Yilia主题配置/index.html","754c08ab06bc43c0a344ae3f3e50658c"],["D:/BLOG_QZL/Blog3/public/tags/forme/index.html","8357ee98b4f7a76ea782ad0dac794303"],["D:/BLOG_QZL/Blog3/public/tags/front-matter配置/index.html","e4e358b26e8523c20b4443514dfd6d6f"],["D:/BLOG_QZL/Blog3/public/tags/hexo显示pdf/index.html","c5650f19354ccdd7a51dcc73133fbd5c"],["D:/BLOG_QZL/Blog3/public/tags/index.html","7b823eb775deec3345cc9d627a82b7c0"],["D:/BLOG_QZL/Blog3/public/tags/matery主题配置/index.html","866cc097811ce693c0ac817f3c44a877"],["D:/BLOG_QZL/Blog3/public/tags/《计算机科学速成课》/index.html","16b70e210768092a079c492817cecd90"],["D:/BLOG_QZL/Blog3/public/tags/凸包/index.html","f16aebade836d60e9a21744125709305"],["D:/BLOG_QZL/Blog3/public/tags/布尔逻辑和逻辑门/index.html","868bfc0b6f6dc6509353644633f84e31"],["D:/BLOG_QZL/Blog3/public/tags/计算几何/index.html","2bdd5c80a0c8424f666710c5d70c575a"],["D:/BLOG_QZL/Blog3/public/tags/计算机科学速成课/index.html","a99f2943d8bf06fc19f59395ae2ebfa9"],["D:/BLOG_QZL/Blog3/public/学习笔记/index.html","df47dcbe903954359a10a645335b60cf"]];
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







