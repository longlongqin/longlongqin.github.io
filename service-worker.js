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

var precacheConfig = [["D:/BLOG_QZL/Blog3/public/404.html","5018805211d97b4d7dc4f8af8958a52d"],["D:/BLOG_QZL/Blog3/public/about/index.html","85b973fa62f9694849a52358ba27a66a"],["D:/BLOG_QZL/Blog3/public/archives/138a.html","9aaafcdd8949ea88b186127222c4c702"],["D:/BLOG_QZL/Blog3/public/archives/167c.html","7c580fbb83c750e39a9ea319e3fe8b61"],["D:/BLOG_QZL/Blog3/public/archives/173c.html","2083e406a6dc1e1382856e054e169991"],["D:/BLOG_QZL/Blog3/public/archives/18085cf9.html","0b7a5244d5a8d77b0be4430e756d8114"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/index.html","e9e6a366e3364857a63f092e6e30c0e0"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/page/2/index.html","95f4f9504d42f27a2df75eb5c5b53b03"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/page/3/index.html","6c189a565e730b58e0eacfc8c7696725"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/page/4/index.html","3e8691101c3b652ea44e6eb58110bba1"],["D:/BLOG_QZL/Blog3/public/archives/2020/04/index.html","f55e9f440335fc3e5d0ea49d277d4007"],["D:/BLOG_QZL/Blog3/public/archives/2020/index.html","2c54fbbc77072f5801a090b4853b1c06"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/2/index.html","87930c69819547e9cccee5eaf507396c"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/3/index.html","ce407e8741575b929efc3c20f97eb39a"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/4/index.html","a6794ef6172dc8a0001c5373d03925b8"],["D:/BLOG_QZL/Blog3/public/archives/28c74e52.html","a2012aee3d696ba88601253b64b10128"],["D:/BLOG_QZL/Blog3/public/archives/2f66ae56.html","e4fdd27c838731012b8a74e8c2b72944"],["D:/BLOG_QZL/Blog3/public/archives/2faa8a4b.html","01a1b2c3d6af89fa4fd521e7b9a01dab"],["D:/BLOG_QZL/Blog3/public/archives/3478.html","ab45b80d0ade91f6f223e4a4ae758e8b"],["D:/BLOG_QZL/Blog3/public/archives/3ae1bc73.html","4ed63371e8c5f95229a590bdebf66900"],["D:/BLOG_QZL/Blog3/public/archives/3b16.html","f76210a05bd72c55bb4fe91574b16ebe"],["D:/BLOG_QZL/Blog3/public/archives/427485bf.html","390abf3012f5dbbe3985de585bf95852"],["D:/BLOG_QZL/Blog3/public/archives/448ac7f1.html","7a4480d9312a373b6cc353ba49afd5ff"],["D:/BLOG_QZL/Blog3/public/archives/460671de.html","f6ae0d697b0a0db86609d429e5fca565"],["D:/BLOG_QZL/Blog3/public/archives/510d.html","ecad065cae974c902784470d4d6c6b66"],["D:/BLOG_QZL/Blog3/public/archives/514b.html","35a797cb452212d4398a8fdcfae80273"],["D:/BLOG_QZL/Blog3/public/archives/5a757a52.html","b888a35aec669ffee2dc99f646e74a43"],["D:/BLOG_QZL/Blog3/public/archives/5fc07ec4.html","3513ec26900f797eb26174db9b3f3590"],["D:/BLOG_QZL/Blog3/public/archives/622.html","3915bf1da9c84b95123e4b6a8be5452e"],["D:/BLOG_QZL/Blog3/public/archives/67343d3.html","e87fa9ef690d70753260246f9ea9df35"],["D:/BLOG_QZL/Blog3/public/archives/6fc94bb0.html","15b03149ece548104c989bc1423c847f"],["D:/BLOG_QZL/Blog3/public/archives/7b67faab.html","0e4d05e5d12fea2dd26d116f02bd6ca0"],["D:/BLOG_QZL/Blog3/public/archives/7c53.html","8b9cb7a5aefa7a80bf3b834b7f3f4c49"],["D:/BLOG_QZL/Blog3/public/archives/7f7e.html","653415e0fbae488be3f974aa2aa83fd2"],["D:/BLOG_QZL/Blog3/public/archives/8632918.html","a54fd545ead2ce40a703f5c55995a93f"],["D:/BLOG_QZL/Blog3/public/archives/87ef.html","572235ceacbb4f0cfb760027cfc15503"],["D:/BLOG_QZL/Blog3/public/archives/9c7f.html","13b3243b02ab1e58a6a3c23695f97e82"],["D:/BLOG_QZL/Blog3/public/archives/9f0a1d82.html","55b440313663bd66926eded3d911c6ba"],["D:/BLOG_QZL/Blog3/public/archives/a0a78e77.html","704a87cf3e976ea16fc7d6ee95b1e00d"],["D:/BLOG_QZL/Blog3/public/archives/ae12.html","cd10d35b319bc897748d383b289ef2fa"],["D:/BLOG_QZL/Blog3/public/archives/b6a3dbf1.html","0aeced33cf8e1f318fe6d2db9c9cb818"],["D:/BLOG_QZL/Blog3/public/archives/ba04.html","6c33258951d13aa2f949af12acc61098"],["D:/BLOG_QZL/Blog3/public/archives/bf113a1c.html","9c971937bd324a941a156c69dbec8880"],["D:/BLOG_QZL/Blog3/public/archives/c1a4eb67.html","bb5cf51ccbdcced363fa221ff0ea409d"],["D:/BLOG_QZL/Blog3/public/archives/d4fa.html","1564f4af99e50f8a931ee97a03836c0e"],["D:/BLOG_QZL/Blog3/public/archives/d57d.html","9ac20c5a04f661e8335cf25bae30b0e2"],["D:/BLOG_QZL/Blog3/public/archives/d84f.html","df38098914e990e5293c6bdc83d1da37"],["D:/BLOG_QZL/Blog3/public/archives/eaabd222.html","31a44be5f4b5290fba00f4ee659b7e8c"],["D:/BLOG_QZL/Blog3/public/archives/f32f.html","e6cca8a670cbc7ea3468b5b778ec74a6"],["D:/BLOG_QZL/Blog3/public/archives/f957.html","325617ae719d3073fd008d0401dfd5c2"],["D:/BLOG_QZL/Blog3/public/archives/index.html","536e603c087470123d4cdfd0be955112"],["D:/BLOG_QZL/Blog3/public/archives/page/2/index.html","9adde2e9424b76fdea0e45b0a38d5d04"],["D:/BLOG_QZL/Blog3/public/archives/page/3/index.html","536e603c087470123d4cdfd0be955112"],["D:/BLOG_QZL/Blog3/public/archives/page/4/index.html","536e603c087470123d4cdfd0be955112"],["D:/BLOG_QZL/Blog3/public/categories/OJ/index.html","ce6c0ae4239ab4b82962f7085ce6ac2c"],["D:/BLOG_QZL/Blog3/public/categories/hexo博客搭建/index.html","ebef21c2211b201c0df570ac4984252c"],["D:/BLOG_QZL/Blog3/public/categories/index.html","828dcb28d5730420a0ae162a08fb35c7"],["D:/BLOG_QZL/Blog3/public/categories/博客搭建/index.html","417cfd4fcde6d7db21c13a0505e6d8f0"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/C-C/index.html","53c8a8ff1f6d7ef39e4e8307a0084a27"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/Git/index.html","53164f911761d201db9e99de27ec4d02"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/index.html","341a6196d61d142a84f63bab64a82ea0"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/page/2/index.html","d7b0aa9107064a1fc1361dc78a745635"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/page/3/index.html","7b8759caa92a41aa8981a8c8551a49cc"],["D:/BLOG_QZL/Blog3/public/categories/配置/index.html","ef9b3dd79ab72b4db003eb35cb58577b"],["D:/BLOG_QZL/Blog3/public/comment/index.html","87ce520b992904da172c1a77b3ef12a2"],["D:/BLOG_QZL/Blog3/public/css/style.css","c8fd7484eca1e8ec23112d2a6296def3"],["D:/BLOG_QZL/Blog3/public/easysearch/about/index.html","79b02e4972bb67e19b339791be509b94"],["D:/BLOG_QZL/Blog3/public/easysearch/index.html","fdf25bede0eef8b0074d489ea7c47f4d"],["D:/BLOG_QZL/Blog3/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["D:/BLOG_QZL/Blog3/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["D:/BLOG_QZL/Blog3/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["D:/BLOG_QZL/Blog3/public/friends/index.html","ef142646f2ffe593e29511fba5fa06b3"],["D:/BLOG_QZL/Blog3/public/img/algolia.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["D:/BLOG_QZL/Blog3/public/img/azure.svg","a7577e663c1e0fb788fed78d7457ff35"],["D:/BLOG_QZL/Blog3/public/img/baidu.svg","124ce00f2785724d84e32ab6403386a6"],["D:/BLOG_QZL/Blog3/public/index.html","8f6af2a7dc671888d95f4e93958cd226"],["D:/BLOG_QZL/Blog3/public/js/app.js","a5d659af4b9d17196436c302e39ec916"],["D:/BLOG_QZL/Blog3/public/js/ergao.js","b1f566c49973d6fdab7ba0b372a4d17f"],["D:/BLOG_QZL/Blog3/public/js/love.js","88b75dcff60dd218bbb0db6cc37f3267"],["D:/BLOG_QZL/Blog3/public/js/search.js","63c61e56f228d83b544e21b4a7ed899c"],["D:/BLOG_QZL/Blog3/public/js/volantis.js","3c2fbf0d8e8c9ce1bbf88f0bf797b9ee"],["D:/BLOG_QZL/Blog3/public/page/2/index.html","d48d03c8dc54d0b901880e84134514c6"],["D:/BLOG_QZL/Blog3/public/page/3/index.html","5504f4cb4a47f33202dcaa94885af287"],["D:/BLOG_QZL/Blog3/public/page/4/index.html","fe678ba2bab641336c6e35ddc3d2902c"],["D:/BLOG_QZL/Blog3/public/projects/index.html","8c05fdd6d452310a5b32b53f942c518e"],["D:/BLOG_QZL/Blog3/public/tags/C-C/index.html","619a703a9d6a10aef7e69caec71c8def"],["D:/BLOG_QZL/Blog3/public/tags/C/index.html","5f63d299c2db9ead1e548f5aa0498c6e"],["D:/BLOG_QZL/Blog3/public/tags/Git/index.html","5daa80ad926b2052d0c3d2af6cbe82b6"],["D:/BLOG_QZL/Blog3/public/tags/Hexo主题/index.html","c7a131cf327d035efe5781c398b74aff"],["D:/BLOG_QZL/Blog3/public/tags/Let-s-Build-A-Simple-Interpreter/index.html","93e267fdbb182fe41e42947fef489ebf"],["D:/BLOG_QZL/Blog3/public/tags/Let’s-Build-A-Simple-Interpreter/index.html","cc33bf77a85e7b6e838c54edfe5446d1"],["D:/BLOG_QZL/Blog3/public/tags/OJ/index.html","541bd91815bf29b220e75ae536b97147"],["D:/BLOG_QZL/Blog3/public/tags/Yilia主题配置/index.html","81f28ae9e87c4b4fbf398a3fd6b416b9"],["D:/BLOG_QZL/Blog3/public/tags/forme/index.html","5f75a6bcd4bc396886130b2f6c590c90"],["D:/BLOG_QZL/Blog3/public/tags/front-matter配置/index.html","a7170d6d61f9bf245dab0de3764dd081"],["D:/BLOG_QZL/Blog3/public/tags/hexo显示pdf/index.html","7bebba463964121292eb0fdb1efe6934"],["D:/BLOG_QZL/Blog3/public/tags/index.html","dcb08d790fb1761414d1147dcdb190f4"],["D:/BLOG_QZL/Blog3/public/tags/matery主题配置/index.html","2f22b522cd393b8d99db5c9382e8c758"],["D:/BLOG_QZL/Blog3/public/tags/opencv/index.html","8cb4fe73c45c1f78fd6f1554e805572c"],["D:/BLOG_QZL/Blog3/public/tags/《计算机科学速成课》/index.html","27adfa3b2db9e9d239b3fe7f69049649"],["D:/BLOG_QZL/Blog3/public/tags/凸包/index.html","faa56ea69eb3e407faf9e0e1f605e2a4"],["D:/BLOG_QZL/Blog3/public/tags/布尔逻辑和逻辑门/index.html","9c68b6ef47dafa82f3b0b72ec75fa980"],["D:/BLOG_QZL/Blog3/public/tags/计算几何/index.html","89e166c1f9c75bea73397c29638a4b9b"],["D:/BLOG_QZL/Blog3/public/tags/计算机科学速成课/index.html","9b996146810b11d51129ffed144bfb99"],["D:/BLOG_QZL/Blog3/public/学习笔记/index.html","b412d2af3e00804cde65e653516547ae"]];
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







