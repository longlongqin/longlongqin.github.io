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

var precacheConfig = [["D:/BLOG_QZL/Blog3/public/404.html","e15cb727a4499766ab95307b07c35948"],["D:/BLOG_QZL/Blog3/public/about/index.html","e3686fc4d4dcdc11dc7f8fa549c4bba4"],["D:/BLOG_QZL/Blog3/public/archives/138a.html","055ecebf825e3a9528333c9f834fbc7d"],["D:/BLOG_QZL/Blog3/public/archives/167c.html","61d5e4d14a383bc1ec24e9586bf197ab"],["D:/BLOG_QZL/Blog3/public/archives/173c.html","6d268bb32537226cb47b71a0d03aee51"],["D:/BLOG_QZL/Blog3/public/archives/18085cf9.html","31152ef2f4ed3baa9815e69fb7c27ab8"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/index.html","016475915bb3df45016bcaaa0c633d5e"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/page/2/index.html","f16122d56765a551a45cfdb319ac1abe"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/page/3/index.html","3ad53039482e8b43dd52f1b9e50bbe33"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/page/4/index.html","e3e92e707306a42237532126860b8a9f"],["D:/BLOG_QZL/Blog3/public/archives/2020/04/index.html","f1162ce5bf60931a34cd6dcf78d3fabd"],["D:/BLOG_QZL/Blog3/public/archives/2020/index.html","c7481475ce684462182b6066c87f093c"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/2/index.html","3f42edfb16e1437f6cc2760aeef0820b"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/3/index.html","9a6438c9f7c6625efb1f1b94f3a96682"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/4/index.html","63a9d8add0f1a736e06f46e28d5c31a0"],["D:/BLOG_QZL/Blog3/public/archives/28c74e52.html","e9e4bfc526a92f316aee979b66df032e"],["D:/BLOG_QZL/Blog3/public/archives/2f66ae56.html","cba965d856b820b74e3e7efd9639068f"],["D:/BLOG_QZL/Blog3/public/archives/3478.html","c24d86c05d632d1fb6dab16f668d1a82"],["D:/BLOG_QZL/Blog3/public/archives/3ae1bc73.html","999dab761c9a2c2246df07f80be08acc"],["D:/BLOG_QZL/Blog3/public/archives/3b16.html","2c4380eb70146977732e4d8f30e9d6ed"],["D:/BLOG_QZL/Blog3/public/archives/427485bf.html","332a2607fcf7972f0d13920167a5c5eb"],["D:/BLOG_QZL/Blog3/public/archives/448ac7f1.html","06d012c9741853ee2d246909a145b7f1"],["D:/BLOG_QZL/Blog3/public/archives/460671de.html","0eb7593173c20afaf35a7480390198fb"],["D:/BLOG_QZL/Blog3/public/archives/510d.html","e5c30666db00099da8b30c6155a88744"],["D:/BLOG_QZL/Blog3/public/archives/514b.html","a1afb419e3b08528352400a77237b339"],["D:/BLOG_QZL/Blog3/public/archives/5a757a52.html","ec0f305ed6d10bcd1e66f2b4c9951e16"],["D:/BLOG_QZL/Blog3/public/archives/5fc07ec4.html","6b2fdc90eb79546e286e446bb06468c1"],["D:/BLOG_QZL/Blog3/public/archives/622.html","5d87fe4377c1ce15f056148eaf83af12"],["D:/BLOG_QZL/Blog3/public/archives/67343d3.html","bd019a8947e7c69b0458ace1a201b00f"],["D:/BLOG_QZL/Blog3/public/archives/6fc94bb0.html","06e024f0a5bb74e330b6e86b1870c155"],["D:/BLOG_QZL/Blog3/public/archives/7b67faab.html","b1e19667dc09f74714740b62290c33ec"],["D:/BLOG_QZL/Blog3/public/archives/7c53.html","5da1488f44e4aa2ec46f20b390afa38b"],["D:/BLOG_QZL/Blog3/public/archives/7f7e.html","95f831ced0ff480663e5bca2fcdf33f8"],["D:/BLOG_QZL/Blog3/public/archives/8632918.html","6415ad362ccf695baeafd3427ed80683"],["D:/BLOG_QZL/Blog3/public/archives/87ef.html","4424f5c5dff3e2f5aab0995c7295f775"],["D:/BLOG_QZL/Blog3/public/archives/9c7f.html","56178759b26bef81668a1c819257475c"],["D:/BLOG_QZL/Blog3/public/archives/9f0a1d82.html","29f49e9299333697defd0cfa472060a8"],["D:/BLOG_QZL/Blog3/public/archives/a0a78e77.html","35777a90f9a66c78750be4cf2a1114be"],["D:/BLOG_QZL/Blog3/public/archives/ae12.html","76941b482dfd0c721e25a02d9a094730"],["D:/BLOG_QZL/Blog3/public/archives/b6a3dbf1.html","9337930cdeb62d2421796557e2aa1adc"],["D:/BLOG_QZL/Blog3/public/archives/ba04.html","27d05788ad15ac7567e745f5bc77258e"],["D:/BLOG_QZL/Blog3/public/archives/bf113a1c.html","2f915f0e7dbca546111a5982080ee8aa"],["D:/BLOG_QZL/Blog3/public/archives/c1a4eb67.html","b570c44ad378c32775f5ab8deb327406"],["D:/BLOG_QZL/Blog3/public/archives/d4fa.html","d3e1546b317b9026dee82cefe0e98c6e"],["D:/BLOG_QZL/Blog3/public/archives/d57d.html","e3c6c7be5ef89433cd7327f02c481ffb"],["D:/BLOG_QZL/Blog3/public/archives/d84f.html","573a23795c1f6281b817f510446ad125"],["D:/BLOG_QZL/Blog3/public/archives/eaabd222.html","5c2c880e24dd1ef7e4d894a0cd1f6223"],["D:/BLOG_QZL/Blog3/public/archives/f32f.html","e5d067fa076cd3ee4e2899966cebba62"],["D:/BLOG_QZL/Blog3/public/archives/f957.html","791d74ba97d8cc6345586b095d5373bb"],["D:/BLOG_QZL/Blog3/public/archives/index.html","b4fdd70e23b27644d9c3ca6dcaf0bed3"],["D:/BLOG_QZL/Blog3/public/archives/page/2/index.html","0e3016acabf9c179dd02f9b0bad4883c"],["D:/BLOG_QZL/Blog3/public/archives/page/3/index.html","b4fdd70e23b27644d9c3ca6dcaf0bed3"],["D:/BLOG_QZL/Blog3/public/archives/page/4/index.html","b4fdd70e23b27644d9c3ca6dcaf0bed3"],["D:/BLOG_QZL/Blog3/public/categories/OJ/index.html","c566f6a436db1755271b857cca98c210"],["D:/BLOG_QZL/Blog3/public/categories/hexo博客搭建/index.html","26fcf1d55d8bb965751afa2f8aacf62d"],["D:/BLOG_QZL/Blog3/public/categories/index.html","511c4f515589c568a16747bd33c45eec"],["D:/BLOG_QZL/Blog3/public/categories/博客搭建/index.html","015cafde4682655483425fbb56e6e71b"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/C-C/index.html","78ec3f1dada51ec3127a1f8ac40eb03f"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/Git/index.html","c0983c17c67556b07d8db6b1655eb439"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/index.html","cc96dbbcaaa09bcb0173ddc99b761e75"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/page/2/index.html","5c2a75bb06cc580932ac09c50f9d8f08"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/page/3/index.html","35c338ba1500b6140ed6abf45df51c22"],["D:/BLOG_QZL/Blog3/public/categories/配置/index.html","33a65b104d4f00e04e6f8b1492cc32a0"],["D:/BLOG_QZL/Blog3/public/comment/index.html","1f61fe0e7381f002df5b73028c09c721"],["D:/BLOG_QZL/Blog3/public/css/style.css","c8fd7484eca1e8ec23112d2a6296def3"],["D:/BLOG_QZL/Blog3/public/easysearch/about/index.html","79b02e4972bb67e19b339791be509b94"],["D:/BLOG_QZL/Blog3/public/easysearch/index.html","fdf25bede0eef8b0074d489ea7c47f4d"],["D:/BLOG_QZL/Blog3/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["D:/BLOG_QZL/Blog3/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["D:/BLOG_QZL/Blog3/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["D:/BLOG_QZL/Blog3/public/friends/index.html","d64f3787822796585e69356c9a136122"],["D:/BLOG_QZL/Blog3/public/img/algolia.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["D:/BLOG_QZL/Blog3/public/img/azure.svg","a7577e663c1e0fb788fed78d7457ff35"],["D:/BLOG_QZL/Blog3/public/img/baidu.svg","124ce00f2785724d84e32ab6403386a6"],["D:/BLOG_QZL/Blog3/public/index.html","f57d1c9eb93412bdcba128d594ac0ec1"],["D:/BLOG_QZL/Blog3/public/js/app.js","a5d659af4b9d17196436c302e39ec916"],["D:/BLOG_QZL/Blog3/public/js/ergao.js","b1f566c49973d6fdab7ba0b372a4d17f"],["D:/BLOG_QZL/Blog3/public/js/love.js","88b75dcff60dd218bbb0db6cc37f3267"],["D:/BLOG_QZL/Blog3/public/js/search.js","63c61e56f228d83b544e21b4a7ed899c"],["D:/BLOG_QZL/Blog3/public/js/volantis.js","3c2fbf0d8e8c9ce1bbf88f0bf797b9ee"],["D:/BLOG_QZL/Blog3/public/page/2/index.html","806164152a027b8353e1fd6d4cee2b59"],["D:/BLOG_QZL/Blog3/public/page/3/index.html","aa4c37cf24ccbc53a1805723921621a5"],["D:/BLOG_QZL/Blog3/public/page/4/index.html","4722dab0a307dca1a3a3b9c0f9cfea04"],["D:/BLOG_QZL/Blog3/public/projects/index.html","08c4b5645857899adad3d832af8543b5"],["D:/BLOG_QZL/Blog3/public/tags/C-C/index.html","f357c39d6e6c230783c2bdf0f6bc42ac"],["D:/BLOG_QZL/Blog3/public/tags/C/index.html","199f5c4cafb521d9953499f2c6ea6cd6"],["D:/BLOG_QZL/Blog3/public/tags/Git/index.html","99b7fbbe0886b00e2e5c81bbe071e17f"],["D:/BLOG_QZL/Blog3/public/tags/Hexo主题/index.html","3d64265f2f9c74911925664040511f96"],["D:/BLOG_QZL/Blog3/public/tags/Let-s-Build-A-Simple-Interpreter/index.html","b480fca1fa6df76802c204aab47aa36f"],["D:/BLOG_QZL/Blog3/public/tags/Let’s-Build-A-Simple-Interpreter/index.html","55f31f2a2229869b6b1ba0fc4a8639d0"],["D:/BLOG_QZL/Blog3/public/tags/OJ/index.html","fed49367e43fff3d45531a6e30c22bd8"],["D:/BLOG_QZL/Blog3/public/tags/Yilia主题配置/index.html","778e34e1f33e4dc6abb185349dc14910"],["D:/BLOG_QZL/Blog3/public/tags/forme/index.html","5a4ec888874cd9510db1f4cb710c7da2"],["D:/BLOG_QZL/Blog3/public/tags/front-matter配置/index.html","5173a5051896837d278e418e1b61b916"],["D:/BLOG_QZL/Blog3/public/tags/hexo显示pdf/index.html","c6bf599aa887085268d0c2511be92221"],["D:/BLOG_QZL/Blog3/public/tags/index.html","e518ae2efee46406a9f258eb84653603"],["D:/BLOG_QZL/Blog3/public/tags/matery主题配置/index.html","dd29c40875536751c87ecc020cf60a7c"],["D:/BLOG_QZL/Blog3/public/tags/opencv/index.html","0183c16cd3de6db99559b47775334460"],["D:/BLOG_QZL/Blog3/public/tags/《计算机科学速成课》/index.html","33aeab535da42cf6df9ef3b63cd3245e"],["D:/BLOG_QZL/Blog3/public/tags/凸包/index.html","a1d0f0e182b2c43a89aa05fab78d359d"],["D:/BLOG_QZL/Blog3/public/tags/布尔逻辑和逻辑门/index.html","4e21aa4dbebdd83ac9238d30bb9c9d05"],["D:/BLOG_QZL/Blog3/public/tags/计算几何/index.html","ec702aef87e6dfceebffc31168ec254f"],["D:/BLOG_QZL/Blog3/public/tags/计算机科学速成课/index.html","53044573b09ee3350e30f918a9ae103e"],["D:/BLOG_QZL/Blog3/public/学习笔记/index.html","83fe98de1a977d143991a0a01da873f8"]];
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







