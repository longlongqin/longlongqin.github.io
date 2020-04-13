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

var precacheConfig = [["D:/BLOG_QZL/Blog3/public/404.html","a20444f6654e32beec62f2a2960b68a4"],["D:/BLOG_QZL/Blog3/public/about/index.html","6e64221fbff358020f33d05757946ebf"],["D:/BLOG_QZL/Blog3/public/archives/138a.html","08554fed98b33390ca93e930c42b8c16"],["D:/BLOG_QZL/Blog3/public/archives/167c.html","9000d2ddb1dc5d785cb2fb96dea6db78"],["D:/BLOG_QZL/Blog3/public/archives/173c.html","d376f0de59ee17c119b64b6bc27114f9"],["D:/BLOG_QZL/Blog3/public/archives/18085cf9.html","ff845cfa0f3838c223b41da8ac61a0bb"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/index.html","ca24c8c34d9e77794b4bae139402c21c"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/page/2/index.html","14650ba74cf0c2fc893c42780fa21d1e"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/page/3/index.html","fd0753743238b0bb5a5d08b2de0ca074"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/page/4/index.html","c989c0ed4b67b93bf872b2928f73e831"],["D:/BLOG_QZL/Blog3/public/archives/2020/04/index.html","991a8be22ca31c2f64faee8044635f6f"],["D:/BLOG_QZL/Blog3/public/archives/2020/index.html","5d2858688812bf317ef3cb547ac87f2e"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/2/index.html","d4ea201d34dd946ae01fb7f219dd9297"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/3/index.html","7875427723538c9bf5789bb43520f61c"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/4/index.html","e062e1847010bb549915c790121a51c6"],["D:/BLOG_QZL/Blog3/public/archives/28c74e52.html","326b64cead7a661231e5e6464c0e9b3f"],["D:/BLOG_QZL/Blog3/public/archives/2f66ae56.html","77caebb813ba30d1e4080d737a33bea0"],["D:/BLOG_QZL/Blog3/public/archives/2faa8a4b.html","ea08a54e355c44ff33d0618ced389239"],["D:/BLOG_QZL/Blog3/public/archives/3478.html","453842098d3a2f300af79eb0a63cf185"],["D:/BLOG_QZL/Blog3/public/archives/3ae1bc73.html","4f79eaa9e08ce3d384a18c26c201945c"],["D:/BLOG_QZL/Blog3/public/archives/3b16.html","0d632f8e5f58c06d482c94a5182d82ae"],["D:/BLOG_QZL/Blog3/public/archives/427485bf.html","8cb290f2fb229b96685c4bd674086ab9"],["D:/BLOG_QZL/Blog3/public/archives/448ac7f1.html","0ba3a67d10f98accacde463ee57cf175"],["D:/BLOG_QZL/Blog3/public/archives/460671de.html","7e5c56f891574eec9a126a44915a081d"],["D:/BLOG_QZL/Blog3/public/archives/510d.html","cf81ff26f38621040d57ed56046db0ee"],["D:/BLOG_QZL/Blog3/public/archives/514b.html","3e4ef21fe6fea9239f553e3b863393e1"],["D:/BLOG_QZL/Blog3/public/archives/5a757a52.html","e9cd0c80f1f4aab3fcaa412748a5295f"],["D:/BLOG_QZL/Blog3/public/archives/5fc07ec4.html","eaa7c2e0c1b284d2faf73ef96436add6"],["D:/BLOG_QZL/Blog3/public/archives/622.html","3291f59dababac14eeef015b621e9d33"],["D:/BLOG_QZL/Blog3/public/archives/67343d3.html","d5f0919ef6a227737b97d5dc2a0f1c5f"],["D:/BLOG_QZL/Blog3/public/archives/6fc94bb0.html","8e50dd905ec0c2ac5b5f5826a41f60d6"],["D:/BLOG_QZL/Blog3/public/archives/7a585be8.html","f2ac72744e97196a4eff1a565a9e726d"],["D:/BLOG_QZL/Blog3/public/archives/7b67faab.html","a62aff927dc3f62e5382885ff8aebbec"],["D:/BLOG_QZL/Blog3/public/archives/7c53.html","907bae4c42bc4011b2475f1a89b55ac5"],["D:/BLOG_QZL/Blog3/public/archives/7f7e.html","3e7e65334958201ca7a5af5bff1afecb"],["D:/BLOG_QZL/Blog3/public/archives/8632918.html","8b65201ecf100bcc3514f4e51c980478"],["D:/BLOG_QZL/Blog3/public/archives/87ef.html","a9f6dd0273ced04192036d04f218d31b"],["D:/BLOG_QZL/Blog3/public/archives/9c7f.html","a78183271a6091e8eb4134729416c6e4"],["D:/BLOG_QZL/Blog3/public/archives/9f0a1d82.html","70feb3f4fe11c35cfe616fe11f0b0165"],["D:/BLOG_QZL/Blog3/public/archives/a0a78e77.html","dfda88297af40637b16fda390d746b85"],["D:/BLOG_QZL/Blog3/public/archives/ae12.html","b1b0c49eb9d512929c0d420a2bca9d99"],["D:/BLOG_QZL/Blog3/public/archives/b6a3dbf1.html","b600c906f6218a67a403852265d45ef7"],["D:/BLOG_QZL/Blog3/public/archives/ba04.html","1550cfd1d26121f1ee57dff308391309"],["D:/BLOG_QZL/Blog3/public/archives/bf113a1c.html","831cf6d4363fb842a2f4aa5e785dbd8d"],["D:/BLOG_QZL/Blog3/public/archives/c1a4eb67.html","1deb83c850fc82672ab5a077278f5725"],["D:/BLOG_QZL/Blog3/public/archives/d4fa.html","67a534ffd8b542dc83e2104b4d292b62"],["D:/BLOG_QZL/Blog3/public/archives/d57d.html","ef902974f4563e6f51cf3929a2e64083"],["D:/BLOG_QZL/Blog3/public/archives/d84f.html","39b6a4a7a27addc9e316bc56a481a5b0"],["D:/BLOG_QZL/Blog3/public/archives/eaabd222.html","a60e84ba7b20d0e32353d9c663a57d6a"],["D:/BLOG_QZL/Blog3/public/archives/f32f.html","dcc934c88fa9759393ba4130a254e95e"],["D:/BLOG_QZL/Blog3/public/archives/f957.html","3b59651f6383295ada36debfbf21d0c0"],["D:/BLOG_QZL/Blog3/public/archives/index.html","27925a8efe0c9f00465ba6aa7eafd1f0"],["D:/BLOG_QZL/Blog3/public/archives/page/2/index.html","7c28b8902548321bbd246eabb9ffb5ce"],["D:/BLOG_QZL/Blog3/public/archives/page/3/index.html","27925a8efe0c9f00465ba6aa7eafd1f0"],["D:/BLOG_QZL/Blog3/public/archives/page/4/index.html","27925a8efe0c9f00465ba6aa7eafd1f0"],["D:/BLOG_QZL/Blog3/public/categories/OJ/index.html","f0e9880dfa0a94a9a99dc0e22b73c0fa"],["D:/BLOG_QZL/Blog3/public/categories/hexo博客搭建/index.html","666f96204fbfe89f6c0929e941b90247"],["D:/BLOG_QZL/Blog3/public/categories/index.html","b4466117a5616b7568a35b00ac3177ef"],["D:/BLOG_QZL/Blog3/public/categories/博客搭建/index.html","37bc6fe0d9ea11f833ae7f20e786b4a5"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/C-C/index.html","8371c7a7c78ed75274d9aa32000888f0"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/Git/index.html","f7b3db3887825f9c552ed057b94f677b"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/index.html","d8aa39658e1622cb6662fef251b8c355"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/linux/index.html","65a26c137b118038322173c64fc2391c"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/page/2/index.html","0d08a6d06e61afca6e047fd70c29c23b"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/page/3/index.html","1a84e9988ac62534a94a5e5f0e21d8a7"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/page/4/index.html","929f5787f6ef32a938e28e089199dbc9"],["D:/BLOG_QZL/Blog3/public/categories/配置/index.html","37f8f34c77714223e08895474ce4aad0"],["D:/BLOG_QZL/Blog3/public/comment/index.html","bd5b4e27b081450f3c6202fc138842fe"],["D:/BLOG_QZL/Blog3/public/css/style.css","c8fd7484eca1e8ec23112d2a6296def3"],["D:/BLOG_QZL/Blog3/public/easysearch/about/index.html","79b02e4972bb67e19b339791be509b94"],["D:/BLOG_QZL/Blog3/public/easysearch/index.html","fdf25bede0eef8b0074d489ea7c47f4d"],["D:/BLOG_QZL/Blog3/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["D:/BLOG_QZL/Blog3/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["D:/BLOG_QZL/Blog3/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["D:/BLOG_QZL/Blog3/public/friends/index.html","076423cf59475715ce7f61af19049448"],["D:/BLOG_QZL/Blog3/public/img/algolia.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["D:/BLOG_QZL/Blog3/public/img/azure.svg","a7577e663c1e0fb788fed78d7457ff35"],["D:/BLOG_QZL/Blog3/public/img/baidu.svg","124ce00f2785724d84e32ab6403386a6"],["D:/BLOG_QZL/Blog3/public/index.html","4362d8f86445b1e4dc429f4ba955f573"],["D:/BLOG_QZL/Blog3/public/js/app.js","a5d659af4b9d17196436c302e39ec916"],["D:/BLOG_QZL/Blog3/public/js/ergao.js","b1f566c49973d6fdab7ba0b372a4d17f"],["D:/BLOG_QZL/Blog3/public/js/love.js","88b75dcff60dd218bbb0db6cc37f3267"],["D:/BLOG_QZL/Blog3/public/js/search.js","63c61e56f228d83b544e21b4a7ed899c"],["D:/BLOG_QZL/Blog3/public/js/volantis.js","3c2fbf0d8e8c9ce1bbf88f0bf797b9ee"],["D:/BLOG_QZL/Blog3/public/page/2/index.html","caa90742f7f899db5f1bf41f009b2bb8"],["D:/BLOG_QZL/Blog3/public/page/3/index.html","f81fcc975ebc34b8c4db750e779cf8e8"],["D:/BLOG_QZL/Blog3/public/page/4/index.html","27310ed76566618c14e57324eb7f8d21"],["D:/BLOG_QZL/Blog3/public/projects/index.html","5fa376c04fd0fb7df41e08c51398cab2"],["D:/BLOG_QZL/Blog3/public/tags/C-C/index.html","165fc34341bd5520d453634fd01c2924"],["D:/BLOG_QZL/Blog3/public/tags/C/index.html","e1e4b2689a0f3712e28b874c34fbab50"],["D:/BLOG_QZL/Blog3/public/tags/Git/index.html","5744b8e09c701dc0abbfb378d1c09db7"],["D:/BLOG_QZL/Blog3/public/tags/Hexo主题/index.html","2bf27be1298cd803a985200d679ff220"],["D:/BLOG_QZL/Blog3/public/tags/Let-s-Build-A-Simple-Interpreter/index.html","b393066e32e977aa0df829ba3ca42993"],["D:/BLOG_QZL/Blog3/public/tags/Let’s-Build-A-Simple-Interpreter/index.html","cf3319204950514cdd81f694b3deb488"],["D:/BLOG_QZL/Blog3/public/tags/OJ/index.html","0fae9206a1972d6b0bb719516f461d31"],["D:/BLOG_QZL/Blog3/public/tags/Yilia主题配置/index.html","f2f210a25849f81ffa4056dd07a98fa6"],["D:/BLOG_QZL/Blog3/public/tags/forme/index.html","aa7024cbcf049c3cb4f0c2c9a2291d1a"],["D:/BLOG_QZL/Blog3/public/tags/front-matter配置/index.html","8de7a4801d19599a3385acbeaf3827f8"],["D:/BLOG_QZL/Blog3/public/tags/hexo显示pdf/index.html","e553eef1e0168c2b2335664f7e66366c"],["D:/BLOG_QZL/Blog3/public/tags/index.html","6d66b8236accc50c2c3ba4996f14094a"],["D:/BLOG_QZL/Blog3/public/tags/linux/index.html","2babad6b7523b934cf3afec6a3fd743d"],["D:/BLOG_QZL/Blog3/public/tags/matery主题配置/index.html","ca0d052841e78014cc2b4ff0f65046bb"],["D:/BLOG_QZL/Blog3/public/tags/opencv/index.html","c7badf3d775815215bbdadd079b396c2"],["D:/BLOG_QZL/Blog3/public/tags/《计算机科学速成课》/index.html","e807b91204d48f4a30b23e3c22b582df"],["D:/BLOG_QZL/Blog3/public/tags/凸包/index.html","1bc1e8cd3b9a023f626c9b942ff8c3a4"],["D:/BLOG_QZL/Blog3/public/tags/布尔逻辑和逻辑门/index.html","4240ccc67c305d3acdeaa7e8595fd443"],["D:/BLOG_QZL/Blog3/public/tags/计算几何/index.html","fa6da78c42fc44e7208ede28bcb9f2af"],["D:/BLOG_QZL/Blog3/public/tags/计算机科学速成课/index.html","830dc63f184199b4c7fee751c173f829"],["D:/BLOG_QZL/Blog3/public/学习笔记/index.html","c2d4e64ded024cd6a2e52432cdd9db14"]];
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







