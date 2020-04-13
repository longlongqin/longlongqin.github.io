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

var precacheConfig = [["D:/BLOG_QZL/Blog3/public/404.html","a20444f6654e32beec62f2a2960b68a4"],["D:/BLOG_QZL/Blog3/public/about/index.html","6e64221fbff358020f33d05757946ebf"],["D:/BLOG_QZL/Blog3/public/archives/138a.html","08554fed98b33390ca93e930c42b8c16"],["D:/BLOG_QZL/Blog3/public/archives/167c.html","9000d2ddb1dc5d785cb2fb96dea6db78"],["D:/BLOG_QZL/Blog3/public/archives/173c.html","d376f0de59ee17c119b64b6bc27114f9"],["D:/BLOG_QZL/Blog3/public/archives/18085cf9.html","38cfe82a87eb6b2093f4783e08af2736"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/index.html","e0860be8365c47bcf03eb401c22e6f0c"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/page/2/index.html","ef71189edf8f69251d52507953d5ee56"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/page/3/index.html","dd5f08987e16a8c8374fc28a2b49832a"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/page/4/index.html","168c22ff8ec98f3d0af506c22b72dc42"],["D:/BLOG_QZL/Blog3/public/archives/2020/04/index.html","ddcabaf7171322eafe694aafc9d2771a"],["D:/BLOG_QZL/Blog3/public/archives/2020/index.html","af6d0ea291e799ea8e35ced82d1492af"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/2/index.html","1587a07e346b2a6de2632591e8f852eb"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/3/index.html","962e63d3599dd6a372f4b91c73acd585"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/4/index.html","003d0969783516d450383d4075f6b0fe"],["D:/BLOG_QZL/Blog3/public/archives/28c74e52.html","326b64cead7a661231e5e6464c0e9b3f"],["D:/BLOG_QZL/Blog3/public/archives/2f66ae56.html","77caebb813ba30d1e4080d737a33bea0"],["D:/BLOG_QZL/Blog3/public/archives/2faa8a4b.html","39a5885e97853a31d6cbea4e4f65f88f"],["D:/BLOG_QZL/Blog3/public/archives/3478.html","453842098d3a2f300af79eb0a63cf185"],["D:/BLOG_QZL/Blog3/public/archives/3ae1bc73.html","4f79eaa9e08ce3d384a18c26c201945c"],["D:/BLOG_QZL/Blog3/public/archives/3b16.html","0d632f8e5f58c06d482c94a5182d82ae"],["D:/BLOG_QZL/Blog3/public/archives/427485bf.html","8cb290f2fb229b96685c4bd674086ab9"],["D:/BLOG_QZL/Blog3/public/archives/448ac7f1.html","0ba3a67d10f98accacde463ee57cf175"],["D:/BLOG_QZL/Blog3/public/archives/460671de.html","7e5c56f891574eec9a126a44915a081d"],["D:/BLOG_QZL/Blog3/public/archives/510d.html","cf81ff26f38621040d57ed56046db0ee"],["D:/BLOG_QZL/Blog3/public/archives/514b.html","3e4ef21fe6fea9239f553e3b863393e1"],["D:/BLOG_QZL/Blog3/public/archives/5a757a52.html","e9cd0c80f1f4aab3fcaa412748a5295f"],["D:/BLOG_QZL/Blog3/public/archives/5fc07ec4.html","eaa7c2e0c1b284d2faf73ef96436add6"],["D:/BLOG_QZL/Blog3/public/archives/622.html","3291f59dababac14eeef015b621e9d33"],["D:/BLOG_QZL/Blog3/public/archives/67343d3.html","d5f0919ef6a227737b97d5dc2a0f1c5f"],["D:/BLOG_QZL/Blog3/public/archives/6fc94bb0.html","8e50dd905ec0c2ac5b5f5826a41f60d6"],["D:/BLOG_QZL/Blog3/public/archives/7a585be8.html","f2ac72744e97196a4eff1a565a9e726d"],["D:/BLOG_QZL/Blog3/public/archives/7b67faab.html","a62aff927dc3f62e5382885ff8aebbec"],["D:/BLOG_QZL/Blog3/public/archives/7c53.html","907bae4c42bc4011b2475f1a89b55ac5"],["D:/BLOG_QZL/Blog3/public/archives/7f7e.html","3e7e65334958201ca7a5af5bff1afecb"],["D:/BLOG_QZL/Blog3/public/archives/8632918.html","8b65201ecf100bcc3514f4e51c980478"],["D:/BLOG_QZL/Blog3/public/archives/87ef.html","a9f6dd0273ced04192036d04f218d31b"],["D:/BLOG_QZL/Blog3/public/archives/9c7f.html","a78183271a6091e8eb4134729416c6e4"],["D:/BLOG_QZL/Blog3/public/archives/a0a78e77.html","dfda88297af40637b16fda390d746b85"],["D:/BLOG_QZL/Blog3/public/archives/ae12.html","b1b0c49eb9d512929c0d420a2bca9d99"],["D:/BLOG_QZL/Blog3/public/archives/b6a3dbf1.html","b600c906f6218a67a403852265d45ef7"],["D:/BLOG_QZL/Blog3/public/archives/ba04.html","1550cfd1d26121f1ee57dff308391309"],["D:/BLOG_QZL/Blog3/public/archives/bf113a1c.html","831cf6d4363fb842a2f4aa5e785dbd8d"],["D:/BLOG_QZL/Blog3/public/archives/c1a4eb67.html","1deb83c850fc82672ab5a077278f5725"],["D:/BLOG_QZL/Blog3/public/archives/d4fa.html","67a534ffd8b542dc83e2104b4d292b62"],["D:/BLOG_QZL/Blog3/public/archives/d57d.html","ef902974f4563e6f51cf3929a2e64083"],["D:/BLOG_QZL/Blog3/public/archives/d84f.html","39b6a4a7a27addc9e316bc56a481a5b0"],["D:/BLOG_QZL/Blog3/public/archives/eaabd222.html","a60e84ba7b20d0e32353d9c663a57d6a"],["D:/BLOG_QZL/Blog3/public/archives/f32f.html","dcc934c88fa9759393ba4130a254e95e"],["D:/BLOG_QZL/Blog3/public/archives/f957.html","3b59651f6383295ada36debfbf21d0c0"],["D:/BLOG_QZL/Blog3/public/archives/index.html","b7e8aafed864685343848f4e953c96fc"],["D:/BLOG_QZL/Blog3/public/archives/page/2/index.html","2e0ce69caa1b7a6768e699bfd1886952"],["D:/BLOG_QZL/Blog3/public/archives/page/3/index.html","b7e8aafed864685343848f4e953c96fc"],["D:/BLOG_QZL/Blog3/public/archives/page/4/index.html","b7e8aafed864685343848f4e953c96fc"],["D:/BLOG_QZL/Blog3/public/categories/OJ/index.html","44fa68935b77df669668d228913d4314"],["D:/BLOG_QZL/Blog3/public/categories/hexo博客搭建/index.html","0ec098feec0193013d4db3b127079d64"],["D:/BLOG_QZL/Blog3/public/categories/index.html","7b6396d3e3bb0edae1700b83e719d101"],["D:/BLOG_QZL/Blog3/public/categories/博客搭建/index.html","d78de010d5c03aea8484be3bcfe968d1"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/C-C/index.html","1c1c97b6f1e4cb45f2e32496fdcf30c1"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/Git/index.html","72de464a26d4a8f1d57512eb6e0aa984"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/index.html","e64845d9e0fea5e5941fcd8a2ad0f593"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/linux/index.html","6af5a6e1837a4fad9d399ab5d2996344"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/page/2/index.html","b1021085358911d71a4db0b5df513596"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/page/3/index.html","afd5a99d1281b3f5f0f90a58145cc6f8"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/page/4/index.html","9a6b5530f5a602f103d7d95b59ce82d6"],["D:/BLOG_QZL/Blog3/public/comment/index.html","bd5b4e27b081450f3c6202fc138842fe"],["D:/BLOG_QZL/Blog3/public/css/style.css","c8fd7484eca1e8ec23112d2a6296def3"],["D:/BLOG_QZL/Blog3/public/easysearch/about/index.html","79b02e4972bb67e19b339791be509b94"],["D:/BLOG_QZL/Blog3/public/easysearch/index.html","fdf25bede0eef8b0074d489ea7c47f4d"],["D:/BLOG_QZL/Blog3/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["D:/BLOG_QZL/Blog3/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["D:/BLOG_QZL/Blog3/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["D:/BLOG_QZL/Blog3/public/friends/index.html","076423cf59475715ce7f61af19049448"],["D:/BLOG_QZL/Blog3/public/img/algolia.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["D:/BLOG_QZL/Blog3/public/img/azure.svg","a7577e663c1e0fb788fed78d7457ff35"],["D:/BLOG_QZL/Blog3/public/img/baidu.svg","124ce00f2785724d84e32ab6403386a6"],["D:/BLOG_QZL/Blog3/public/index.html","6af04735d43169a078308eac5eb07b65"],["D:/BLOG_QZL/Blog3/public/js/app.js","a5d659af4b9d17196436c302e39ec916"],["D:/BLOG_QZL/Blog3/public/js/ergao.js","b1f566c49973d6fdab7ba0b372a4d17f"],["D:/BLOG_QZL/Blog3/public/js/love.js","88b75dcff60dd218bbb0db6cc37f3267"],["D:/BLOG_QZL/Blog3/public/js/search.js","63c61e56f228d83b544e21b4a7ed899c"],["D:/BLOG_QZL/Blog3/public/js/volantis.js","3c2fbf0d8e8c9ce1bbf88f0bf797b9ee"],["D:/BLOG_QZL/Blog3/public/page/2/index.html","8285986eb1e3c5cece6af240ce0bff46"],["D:/BLOG_QZL/Blog3/public/page/3/index.html","11deb3dab82cd704212ab0030c9b4495"],["D:/BLOG_QZL/Blog3/public/page/4/index.html","1df3cf22d5224692d894f63b0a300c71"],["D:/BLOG_QZL/Blog3/public/projects/index.html","5fa376c04fd0fb7df41e08c51398cab2"],["D:/BLOG_QZL/Blog3/public/tags/C-C/index.html","083b2b436bc852e6e7e5e3d2f29ea884"],["D:/BLOG_QZL/Blog3/public/tags/C/index.html","5c96554add6fb75932b76795e5d6c5c6"],["D:/BLOG_QZL/Blog3/public/tags/Git/index.html","a50193bdc653052439bb5ec1acf2df03"],["D:/BLOG_QZL/Blog3/public/tags/Hexo主题/index.html","1c5961714722854cb6c668255e6f7585"],["D:/BLOG_QZL/Blog3/public/tags/Let-s-Build-A-Simple-Interpreter/index.html","739354f8da604a3ee35e2dbacac8a85a"],["D:/BLOG_QZL/Blog3/public/tags/Let’s-Build-A-Simple-Interpreter/index.html","18a07362ba62e8a251402f5e3c02fce2"],["D:/BLOG_QZL/Blog3/public/tags/OJ/index.html","640c314099de7705b107bb782d9d631d"],["D:/BLOG_QZL/Blog3/public/tags/Yilia主题配置/index.html","562487c70ef5c3a7102029ce40c6ea08"],["D:/BLOG_QZL/Blog3/public/tags/forme/index.html","d1ff8810dd9143566bdd621a88429a21"],["D:/BLOG_QZL/Blog3/public/tags/front-matter配置/index.html","15468c09cb470c7e081fa8d1355b8ee9"],["D:/BLOG_QZL/Blog3/public/tags/hexo显示pdf/index.html","e48a2f4f760cf25fc9a12a4ec3f72bd1"],["D:/BLOG_QZL/Blog3/public/tags/index.html","d0eef03853a49a3618dd4ce6d7b56a69"],["D:/BLOG_QZL/Blog3/public/tags/linux/index.html","21157523baa9723082666ef4a6ee26f6"],["D:/BLOG_QZL/Blog3/public/tags/matery主题配置/index.html","c9dde8bbb4b2ec05cc06e9db8cc448ac"],["D:/BLOG_QZL/Blog3/public/tags/《计算机科学速成课》/index.html","93ecbc8e2e59def2386f9f5466f7e6d6"],["D:/BLOG_QZL/Blog3/public/tags/凸包/index.html","4ad6a45abff3e9d746f05fbe37a2e09f"],["D:/BLOG_QZL/Blog3/public/tags/布尔逻辑和逻辑门/index.html","85252658e836b2d9a5f1fbb6b02821f6"],["D:/BLOG_QZL/Blog3/public/tags/计算几何/index.html","ac1d500e6c4ace12a816209fb0d3d247"],["D:/BLOG_QZL/Blog3/public/tags/计算机科学速成课/index.html","a73815c1318ab6de0c6e239bb9118b23"],["D:/BLOG_QZL/Blog3/public/学习笔记/index.html","c2d4e64ded024cd6a2e52432cdd9db14"]];
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







