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

var precacheConfig = [["D:/BLOG_QZL/Blog3/public/404.html","f26f227cbbc4ce31f9486fe80eb767a4"],["D:/BLOG_QZL/Blog3/public/about/index.html","0a37bf011b08f0fa38e5a8ee52c7bf32"],["D:/BLOG_QZL/Blog3/public/archives/138a.html","61ef34f35eae752cbb9ddc1b3af9d55a"],["D:/BLOG_QZL/Blog3/public/archives/167c.html","fab4075b6e6196607b7e91f9d63ffbbf"],["D:/BLOG_QZL/Blog3/public/archives/173c.html","0efcb2a4a238c1bea0efbcedc56254e9"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/index.html","8d8f01d5625d2adec837b9b34dcce621"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/page/2/index.html","70aea221fef99012780ad610c63305db"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/page/3/index.html","16bc3a777298b81716b47d78ce440266"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/page/4/index.html","0d4e1fed32227c06a22914ca0500ca6c"],["D:/BLOG_QZL/Blog3/public/archives/2020/04/index.html","a3013400e359f05bad8b6c8d54d40ff3"],["D:/BLOG_QZL/Blog3/public/archives/2020/index.html","85c245be2f402782d87dc23110465221"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/2/index.html","46d046273b25a1d4cf4be28ce073adf8"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/3/index.html","4371b0b0a8bfbb172da92b859ef13e7f"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/4/index.html","8aceccef96a60e257b29d912150328bb"],["D:/BLOG_QZL/Blog3/public/archives/28c74e52.html","906d4010e2eeea1f8d3bd62905148284"],["D:/BLOG_QZL/Blog3/public/archives/2f66ae56.html","7223d91de4487d3d9110cc0766c09a8d"],["D:/BLOG_QZL/Blog3/public/archives/3478.html","59c63bf78d3e9fc21be5deff043ae069"],["D:/BLOG_QZL/Blog3/public/archives/3ae1bc73.html","8258d0109df30016da9bc6c005b6c1f9"],["D:/BLOG_QZL/Blog3/public/archives/3b16.html","2a1f87c707d58e60d8af719560ae26d5"],["D:/BLOG_QZL/Blog3/public/archives/427485bf.html","77361bc27947e2951660c726bca1bdc7"],["D:/BLOG_QZL/Blog3/public/archives/448ac7f1.html","ac3713f3bc2938740b2346015f06a83d"],["D:/BLOG_QZL/Blog3/public/archives/460671de.html","5225a98f1ae7326020c00045dec4da72"],["D:/BLOG_QZL/Blog3/public/archives/510d.html","bb854efd4e8bc8deae0f96050aa1fd65"],["D:/BLOG_QZL/Blog3/public/archives/514b.html","6503a8786b74c51920ff117ffeb8d54b"],["D:/BLOG_QZL/Blog3/public/archives/5a757a52.html","51f581025e4775a83270fe1f41a61e08"],["D:/BLOG_QZL/Blog3/public/archives/5fc07ec4.html","8c2ddc7558abf6274abf4626e9775659"],["D:/BLOG_QZL/Blog3/public/archives/622.html","913890cfb86ff7f903af76f3e95fd5e2"],["D:/BLOG_QZL/Blog3/public/archives/6fc94bb0.html","85ddd3b1b9e4d9cbabc659f9c6f522b1"],["D:/BLOG_QZL/Blog3/public/archives/7b67faab.html","a99ac7dd1b35941aa80b55b2d48194de"],["D:/BLOG_QZL/Blog3/public/archives/7c53.html","43361d3adda889e51b107469ac56ebfc"],["D:/BLOG_QZL/Blog3/public/archives/7f7e.html","3b8173a9975bb69d720cc9db636f8f71"],["D:/BLOG_QZL/Blog3/public/archives/8632918.html","d430c8cef0db29658505293ff92efd09"],["D:/BLOG_QZL/Blog3/public/archives/87ef.html","63f94489b5f8f8bcef8a3bd6b52ae06d"],["D:/BLOG_QZL/Blog3/public/archives/9c7f.html","0279204839811c82e08ddd35e550dd4a"],["D:/BLOG_QZL/Blog3/public/archives/a0a78e77.html","26a58c21caced619e6a9536cb8cf9eac"],["D:/BLOG_QZL/Blog3/public/archives/ae12.html","4f579ffe16eb7bd80d6c86cee3797c2a"],["D:/BLOG_QZL/Blog3/public/archives/ba04.html","3e3215cd7685db7a8ed0a7c7b05c2b02"],["D:/BLOG_QZL/Blog3/public/archives/bf113a1c.html","92aebdd0b7be0c59b2fe9491e0b7f021"],["D:/BLOG_QZL/Blog3/public/archives/c1a4eb67.html","50d28440679e98638a03cae0aad2e409"],["D:/BLOG_QZL/Blog3/public/archives/d4fa.html","205f3ce93c4c4e099c5968ec3a64e056"],["D:/BLOG_QZL/Blog3/public/archives/d57d.html","eb1ca7732b7b11ecaaecd3e42dabe261"],["D:/BLOG_QZL/Blog3/public/archives/d84f.html","a9e832fa3dcdd24376b45d3ca7d7edaa"],["D:/BLOG_QZL/Blog3/public/archives/eaabd222.html","c562b3b3344b492e6b2460779520d21f"],["D:/BLOG_QZL/Blog3/public/archives/f32f.html","a8c9216e6309ec08531ce0ad9761ca17"],["D:/BLOG_QZL/Blog3/public/archives/f957.html","3f420f7807e2ee443077dc7540b8d25e"],["D:/BLOG_QZL/Blog3/public/archives/index.html","2f0a1c9609fa8054ad6a9b739b1c8e1c"],["D:/BLOG_QZL/Blog3/public/archives/page/2/index.html","2f0a1c9609fa8054ad6a9b739b1c8e1c"],["D:/BLOG_QZL/Blog3/public/archives/page/3/index.html","80c150f5f2371f9c7630c63932f8bb5f"],["D:/BLOG_QZL/Blog3/public/archives/page/4/index.html","2f0a1c9609fa8054ad6a9b739b1c8e1c"],["D:/BLOG_QZL/Blog3/public/categories/OJ/index.html","d49e0e40eaf3f1b54c8f19760c7d453f"],["D:/BLOG_QZL/Blog3/public/categories/hexo博客搭建/index.html","d56c1aab98ce227cbebeea7a894696ec"],["D:/BLOG_QZL/Blog3/public/categories/index.html","7859db747d307013bdb64b2956e72687"],["D:/BLOG_QZL/Blog3/public/categories/博客搭建/index.html","a86a155ff4a2f07218392b4c49c1b4f8"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/C-C/index.html","e0d739354a4bfeace864d5a37694378b"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/index.html","36bf051603b111bee96592f7c36998c0"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/page/2/index.html","63fcfe8c62bf5745944fe2bcb663711f"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/page/3/index.html","10918a920717075b658e11b619f15c68"],["D:/BLOG_QZL/Blog3/public/comment/index.html","365316c5a268ecc944d100de1d6f463d"],["D:/BLOG_QZL/Blog3/public/css/style.css","c8fd7484eca1e8ec23112d2a6296def3"],["D:/BLOG_QZL/Blog3/public/easysearch/about/index.html","79b02e4972bb67e19b339791be509b94"],["D:/BLOG_QZL/Blog3/public/easysearch/index.html","fdf25bede0eef8b0074d489ea7c47f4d"],["D:/BLOG_QZL/Blog3/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["D:/BLOG_QZL/Blog3/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["D:/BLOG_QZL/Blog3/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["D:/BLOG_QZL/Blog3/public/friends/index.html","1346e10f2275e494cb2ac30ea834574e"],["D:/BLOG_QZL/Blog3/public/img/algolia.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["D:/BLOG_QZL/Blog3/public/img/azure.svg","a7577e663c1e0fb788fed78d7457ff35"],["D:/BLOG_QZL/Blog3/public/img/baidu.svg","124ce00f2785724d84e32ab6403386a6"],["D:/BLOG_QZL/Blog3/public/index.html","00a309c3244b3950a49e1050ef11c016"],["D:/BLOG_QZL/Blog3/public/js/app.js","a5d659af4b9d17196436c302e39ec916"],["D:/BLOG_QZL/Blog3/public/js/ergao.js","b1f566c49973d6fdab7ba0b372a4d17f"],["D:/BLOG_QZL/Blog3/public/js/love.js","88b75dcff60dd218bbb0db6cc37f3267"],["D:/BLOG_QZL/Blog3/public/js/search.js","63c61e56f228d83b544e21b4a7ed899c"],["D:/BLOG_QZL/Blog3/public/js/volantis.js","3c2fbf0d8e8c9ce1bbf88f0bf797b9ee"],["D:/BLOG_QZL/Blog3/public/page/2/index.html","daab3cfc48659e4f8ba68f9f68a49125"],["D:/BLOG_QZL/Blog3/public/page/3/index.html","e97877f79b40fd684cd60fe93048bc93"],["D:/BLOG_QZL/Blog3/public/page/4/index.html","6cd5b960356fc85c58a62a011241486d"],["D:/BLOG_QZL/Blog3/public/projects/index.html","fbc7a8cd11a49f79a93fb1bac26ab310"],["D:/BLOG_QZL/Blog3/public/tags/C-C/index.html","dff8450ed14d3284357585d1d2454583"],["D:/BLOG_QZL/Blog3/public/tags/C/index.html","943b61594d6849d139cb1275a8fb95d8"],["D:/BLOG_QZL/Blog3/public/tags/Hexo主题/index.html","11d2b2a3be44b7b256595baf0e1f6417"],["D:/BLOG_QZL/Blog3/public/tags/Let-s-Build-A-Simple-Interpreter/index.html","ab697477b1b66751eb33f1162e0abe4e"],["D:/BLOG_QZL/Blog3/public/tags/Let’s-Build-A-Simple-Interpreter/index.html","267f237f22af7552960d1b1a4277188b"],["D:/BLOG_QZL/Blog3/public/tags/OJ/index.html","8ea4dd72c3b110bd1d7683cbd43bb386"],["D:/BLOG_QZL/Blog3/public/tags/Yilia主题配置/index.html","8fdfce121e3a17cf074631f876541a39"],["D:/BLOG_QZL/Blog3/public/tags/forme/index.html","c441dbe5b7fbb58fbdf6e38e62ac0698"],["D:/BLOG_QZL/Blog3/public/tags/front-matter配置/index.html","17bb40e68c6ffa4028ac9e92e237ce4d"],["D:/BLOG_QZL/Blog3/public/tags/hexo显示pdf/index.html","630d50cb9eed5189690c5d206634cd14"],["D:/BLOG_QZL/Blog3/public/tags/index.html","ed56e9233d618c21eacc18b41fb7409d"],["D:/BLOG_QZL/Blog3/public/tags/matery主题配置/index.html","b94afbd7c6b2f367f4101e91a11f31ac"],["D:/BLOG_QZL/Blog3/public/tags/《计算机科学速成课》/index.html","cef87cfe1c0d897300cefaabe0634996"],["D:/BLOG_QZL/Blog3/public/tags/凸包/index.html","fbb44ed9f7d3bd2220f0af4300ac9500"],["D:/BLOG_QZL/Blog3/public/tags/布尔逻辑和逻辑门/index.html","2e1a372ebac89a23834d823669ccbff1"],["D:/BLOG_QZL/Blog3/public/tags/计算几何/index.html","07d156fc48cb3529a00f6269b3a667af"],["D:/BLOG_QZL/Blog3/public/tags/计算机科学速成课/index.html","accfc324b07e6067331d835e668fed68"],["D:/BLOG_QZL/Blog3/public/学习笔记/index.html","8a71c11a436e4968a0d05fac9d55b189"]];
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







