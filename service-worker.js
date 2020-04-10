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

var precacheConfig = [["D:/BLOG_QZL/Blog3/public/404.html","67f56c9eb1d68c91da42012cb8caded0"],["D:/BLOG_QZL/Blog3/public/about/index.html","de755b0a2e189688daf4b2711748041f"],["D:/BLOG_QZL/Blog3/public/archives/138a.html","d3915a082eea00c808670f98f35ca6fc"],["D:/BLOG_QZL/Blog3/public/archives/167c.html","b5e1d64667befdb732421f701390d5da"],["D:/BLOG_QZL/Blog3/public/archives/173c.html","5b4f49d33b8018c3eddf11664cd1a66d"],["D:/BLOG_QZL/Blog3/public/archives/18085cf9.html","274a0c893698e7939483fa1aa11f9af8"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/index.html","94769691b80c767e125c34ce542233ee"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/page/2/index.html","e7307e94693d039cba5962a41241f8d5"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/page/3/index.html","0a13a4f8adee1a6a439f9567c2d221e1"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/page/4/index.html","b8d9fe74dd5c04aa6841a4839c0da640"],["D:/BLOG_QZL/Blog3/public/archives/2020/04/index.html","47ad90540f2b9ee5b4c5d97550bda325"],["D:/BLOG_QZL/Blog3/public/archives/2020/index.html","b021b82a3778904c871944638b1b17db"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/2/index.html","019734cf246e40d16ec484fee29d49ee"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/3/index.html","e24b19bae3f1231acb59774ae566e630"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/4/index.html","5384efd553058a044c49bf90d614d08a"],["D:/BLOG_QZL/Blog3/public/archives/28c74e52.html","a479282de5189767cb7fd21f64576442"],["D:/BLOG_QZL/Blog3/public/archives/2f66ae56.html","1504c33eaa67246eab6d69458940df57"],["D:/BLOG_QZL/Blog3/public/archives/2faa8a4b.html","6946f259d54fa46be353778ef170b36c"],["D:/BLOG_QZL/Blog3/public/archives/3478.html","fdc85d99659965bef3fb15279c7b33b1"],["D:/BLOG_QZL/Blog3/public/archives/3ae1bc73.html","452d1d90eef7945420564c385c94e9a1"],["D:/BLOG_QZL/Blog3/public/archives/3b16.html","37508e6ba47468c9403d14f0dcf17957"],["D:/BLOG_QZL/Blog3/public/archives/427485bf.html","e54bec831cf8d6014f3aad4f20c6e730"],["D:/BLOG_QZL/Blog3/public/archives/448ac7f1.html","af8a37c7ab898e1811bb4792c944c429"],["D:/BLOG_QZL/Blog3/public/archives/460671de.html","d20c022377440ba1f26908f5d807b99f"],["D:/BLOG_QZL/Blog3/public/archives/510d.html","b84c7eeaf08fba2fca34f73420fa3169"],["D:/BLOG_QZL/Blog3/public/archives/514b.html","75e54dd9b0639aa492768df2bf17a9da"],["D:/BLOG_QZL/Blog3/public/archives/5a757a52.html","5ccc799af7b8b961bee530f29cc14630"],["D:/BLOG_QZL/Blog3/public/archives/5fc07ec4.html","4c666f99f51b01044371c711b19ad096"],["D:/BLOG_QZL/Blog3/public/archives/622.html","283ab0004a9c3b807d7ebefecea237ff"],["D:/BLOG_QZL/Blog3/public/archives/67343d3.html","8864dde273585af55f8e8f5dfdf20219"],["D:/BLOG_QZL/Blog3/public/archives/6fc94bb0.html","dd230c56548786804d971fa28652355b"],["D:/BLOG_QZL/Blog3/public/archives/7a585be8.html","bb6d1d7d734f19a135dc4529bb60984e"],["D:/BLOG_QZL/Blog3/public/archives/7b67faab.html","ccb75447143954efa15c67df2b7dfeb5"],["D:/BLOG_QZL/Blog3/public/archives/7c53.html","018fcc2f529b86affd476865b4c293d5"],["D:/BLOG_QZL/Blog3/public/archives/7f7e.html","362cdaf0e824f5a2ad120c31e1190d43"],["D:/BLOG_QZL/Blog3/public/archives/8632918.html","8a0cf20db7067fa50cac0a05eae050b5"],["D:/BLOG_QZL/Blog3/public/archives/87ef.html","59f7b946703adc733e1822fff403484a"],["D:/BLOG_QZL/Blog3/public/archives/9c7f.html","b22a6d0dae67d7cda81617dbdfcbfd1e"],["D:/BLOG_QZL/Blog3/public/archives/9f0a1d82.html","ab210f8b14cb806422219c1364ddd5cf"],["D:/BLOG_QZL/Blog3/public/archives/a0a78e77.html","d65bd01d9d837828c20624fe5c7d5ac6"],["D:/BLOG_QZL/Blog3/public/archives/ae12.html","27115e3f53b125cc347645454d504068"],["D:/BLOG_QZL/Blog3/public/archives/b6a3dbf1.html","e44369b75c9fc6a6cc6df7b268c73435"],["D:/BLOG_QZL/Blog3/public/archives/ba04.html","c5a7733636b9e864026072ed7270be04"],["D:/BLOG_QZL/Blog3/public/archives/bf113a1c.html","2ae4b37a3ce023b5bbfa83ac4f29bb77"],["D:/BLOG_QZL/Blog3/public/archives/c1a4eb67.html","d456451c97f89cdd24a5cdd987256ba2"],["D:/BLOG_QZL/Blog3/public/archives/d4fa.html","a58792b333f3e4aab69749ab5e2e0447"],["D:/BLOG_QZL/Blog3/public/archives/d57d.html","d225e9e2fbe548622e904e1ba0615b91"],["D:/BLOG_QZL/Blog3/public/archives/d84f.html","1dc38530dbf5ac5f309991a717c50949"],["D:/BLOG_QZL/Blog3/public/archives/eaabd222.html","0f29c45a0d8590dddb3ebbaaed8a76c0"],["D:/BLOG_QZL/Blog3/public/archives/f32f.html","64737fad708f1df4ac6d2630e0549cee"],["D:/BLOG_QZL/Blog3/public/archives/f957.html","3e9a8709a7eaa58647824fecb27c8f55"],["D:/BLOG_QZL/Blog3/public/archives/index.html","d4f3502bb28eb11af05351f562f0052a"],["D:/BLOG_QZL/Blog3/public/archives/page/2/index.html","96fd1b4efe6b954da7d482a460e5fa3b"],["D:/BLOG_QZL/Blog3/public/archives/page/3/index.html","d4f3502bb28eb11af05351f562f0052a"],["D:/BLOG_QZL/Blog3/public/archives/page/4/index.html","d4f3502bb28eb11af05351f562f0052a"],["D:/BLOG_QZL/Blog3/public/categories/OJ/index.html","7313ffc79d89bcb4a91c0b03cccab64a"],["D:/BLOG_QZL/Blog3/public/categories/hexo博客搭建/index.html","4fa79b2d2de470bc9564a59ebb516707"],["D:/BLOG_QZL/Blog3/public/categories/index.html","a9fb0c0c2579366d2750794a3791c8c4"],["D:/BLOG_QZL/Blog3/public/categories/博客搭建/index.html","e129018a46cbfc10ac98fcc11f8f2f5f"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/C-C/index.html","3695d2880a8a07c7b596f1b10b67b6d6"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/Git/index.html","b905c8977e487be913c3a0ad365dca24"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/index.html","516d3c722e8e801e0f6ee40fcdd9798f"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/linux/index.html","10183c86a5c2ddbbb6e0650269828bb9"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/page/2/index.html","768c5075ca18b6033639784a561e0a97"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/page/3/index.html","98cac42e7add7b7b635e46f86b1816a5"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/page/4/index.html","449d714361642a063dc3978b026f8f28"],["D:/BLOG_QZL/Blog3/public/categories/配置/index.html","7f528fade7249ab9faaa28f902691429"],["D:/BLOG_QZL/Blog3/public/comment/index.html","e45f4faaf7dc87391ef05138b5b6c236"],["D:/BLOG_QZL/Blog3/public/css/style.css","c8fd7484eca1e8ec23112d2a6296def3"],["D:/BLOG_QZL/Blog3/public/easysearch/about/index.html","79b02e4972bb67e19b339791be509b94"],["D:/BLOG_QZL/Blog3/public/easysearch/index.html","fdf25bede0eef8b0074d489ea7c47f4d"],["D:/BLOG_QZL/Blog3/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["D:/BLOG_QZL/Blog3/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["D:/BLOG_QZL/Blog3/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["D:/BLOG_QZL/Blog3/public/friends/index.html","12a4f078b376aa96751337a0f5169da8"],["D:/BLOG_QZL/Blog3/public/img/algolia.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["D:/BLOG_QZL/Blog3/public/img/azure.svg","a7577e663c1e0fb788fed78d7457ff35"],["D:/BLOG_QZL/Blog3/public/img/baidu.svg","124ce00f2785724d84e32ab6403386a6"],["D:/BLOG_QZL/Blog3/public/index.html","d3d25931f9fe5d476588fd9801f0af39"],["D:/BLOG_QZL/Blog3/public/js/app.js","a5d659af4b9d17196436c302e39ec916"],["D:/BLOG_QZL/Blog3/public/js/ergao.js","b1f566c49973d6fdab7ba0b372a4d17f"],["D:/BLOG_QZL/Blog3/public/js/love.js","88b75dcff60dd218bbb0db6cc37f3267"],["D:/BLOG_QZL/Blog3/public/js/search.js","63c61e56f228d83b544e21b4a7ed899c"],["D:/BLOG_QZL/Blog3/public/js/volantis.js","3c2fbf0d8e8c9ce1bbf88f0bf797b9ee"],["D:/BLOG_QZL/Blog3/public/page/2/index.html","23ee720214fac1f5531e8348aa34e0fc"],["D:/BLOG_QZL/Blog3/public/page/3/index.html","9feff0a7960f7f352b1efb48fa031966"],["D:/BLOG_QZL/Blog3/public/page/4/index.html","47fa1734fd8b43b687bd6e8d44f4936d"],["D:/BLOG_QZL/Blog3/public/projects/index.html","9cb759a11533b0de35dcc9af1f5c76c7"],["D:/BLOG_QZL/Blog3/public/tags/C-C/index.html","9c6c4858909ff468bd5c0bb5870a4624"],["D:/BLOG_QZL/Blog3/public/tags/C/index.html","bb79144d7a94956e9c714379ec7bd9b1"],["D:/BLOG_QZL/Blog3/public/tags/Git/index.html","61917a395ae4d8a2ca3e8188d07b87d6"],["D:/BLOG_QZL/Blog3/public/tags/Hexo主题/index.html","58bf90785ec13f5402b2ae8c00bc2042"],["D:/BLOG_QZL/Blog3/public/tags/Let-s-Build-A-Simple-Interpreter/index.html","adb9027ee47dc754771090937da27b36"],["D:/BLOG_QZL/Blog3/public/tags/Let’s-Build-A-Simple-Interpreter/index.html","a6ac9d00d9441d527417ae92444e3705"],["D:/BLOG_QZL/Blog3/public/tags/OJ/index.html","ae9dc50ee4fef8e990c74cc807713bf4"],["D:/BLOG_QZL/Blog3/public/tags/Yilia主题配置/index.html","d7666dc3cbec327423aa80b155b0d56d"],["D:/BLOG_QZL/Blog3/public/tags/forme/index.html","3560e1326b1744dcf24385f30eb739cd"],["D:/BLOG_QZL/Blog3/public/tags/front-matter配置/index.html","a50707d66d1277127903a8227f14704a"],["D:/BLOG_QZL/Blog3/public/tags/hexo显示pdf/index.html","2592fa50af0e25a5a34c05f502bcaaff"],["D:/BLOG_QZL/Blog3/public/tags/index.html","7cfb85ae64baec2084e4a6f52df5627e"],["D:/BLOG_QZL/Blog3/public/tags/linux/index.html","3c571f3546e5679ce7d8914957c5a135"],["D:/BLOG_QZL/Blog3/public/tags/matery主题配置/index.html","7660fc181fbbca74ad656add0aa88c02"],["D:/BLOG_QZL/Blog3/public/tags/opencv/index.html","3f4e595b0beb3012b31e856e41484bfb"],["D:/BLOG_QZL/Blog3/public/tags/《计算机科学速成课》/index.html","ba68c93aa7f7c480ec11b64d218f0a1c"],["D:/BLOG_QZL/Blog3/public/tags/凸包/index.html","8c0edfb556a90e66acc51b6cb758bd6a"],["D:/BLOG_QZL/Blog3/public/tags/布尔逻辑和逻辑门/index.html","de6ddc5102b0605fdbfd6fe90dc0c1a8"],["D:/BLOG_QZL/Blog3/public/tags/计算几何/index.html","eeaa8f1829c266fce00f9d4c26a3ebc3"],["D:/BLOG_QZL/Blog3/public/tags/计算机科学速成课/index.html","decfb130a778d2ea1221142a6a41d68e"],["D:/BLOG_QZL/Blog3/public/学习笔记/index.html","e60fbc52459196a5f6887bdc630934d6"]];
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







