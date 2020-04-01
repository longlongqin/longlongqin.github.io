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

var precacheConfig = [["D:/BLOG_QZL/Blog3/public/404.html","0ccd72eccc74d7ffa868a83105ac4f15"],["D:/BLOG_QZL/Blog3/public/about/index.html","e855cf35bfdde1c13ef3e22ede253cde"],["D:/BLOG_QZL/Blog3/public/archives/138a.html","f62efd231cc5cdd686cfd8e99d352cff"],["D:/BLOG_QZL/Blog3/public/archives/167c.html","07d7128a3527adb826ff472b54b77d78"],["D:/BLOG_QZL/Blog3/public/archives/173c.html","cf4c5cf09a8f16aae7067887479a1d21"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/index.html","088efc27a5871f160df1d092732f1459"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/page/2/index.html","858f2bf81f8e29e6e8aa9f82131a0263"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/page/3/index.html","605343ac540953832933a69fc3b1e740"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/page/4/index.html","d75dcbcdea8708fc4ac08b6cce5a2dcb"],["D:/BLOG_QZL/Blog3/public/archives/2020/04/index.html","d05c3b5c1484dd7413557c2ae971622b"],["D:/BLOG_QZL/Blog3/public/archives/2020/index.html","7fffe3dd895fc1ffb3a7b998cdd45346"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/2/index.html","3baab6e10032f10278dbd8339be2b733"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/3/index.html","e7bfda162afaeca3a8964c43d489d0fa"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/4/index.html","cf92f411723320648fe55ddd7a236c8b"],["D:/BLOG_QZL/Blog3/public/archives/28c74e52.html","b3d27f05387bc7ac04b52de3e290122c"],["D:/BLOG_QZL/Blog3/public/archives/2f66ae56.html","a9231ffb0d8b0d88d5334e1d230ba536"],["D:/BLOG_QZL/Blog3/public/archives/3478.html","ec76f65a70b3630b9e1bad16bf420218"],["D:/BLOG_QZL/Blog3/public/archives/3ae1bc73.html","2fb840f6549d73f492e3ebcca1bd28c7"],["D:/BLOG_QZL/Blog3/public/archives/3b16.html","987b37361f13ac790207ea754c094d6e"],["D:/BLOG_QZL/Blog3/public/archives/427485bf.html","bb9101f6f47307eae0c93f4e9b00f032"],["D:/BLOG_QZL/Blog3/public/archives/448ac7f1.html","83d6341dfee9ba9d7eb79056435bccdb"],["D:/BLOG_QZL/Blog3/public/archives/460671de.html","da0ed926ec9d25c0fb536cada1a76f1a"],["D:/BLOG_QZL/Blog3/public/archives/510d.html","9b8af393fd5a89c7e1035a7c295c5d00"],["D:/BLOG_QZL/Blog3/public/archives/514b.html","94ca3f9e23613ec2fea3911fa1ec356d"],["D:/BLOG_QZL/Blog3/public/archives/5a757a52.html","5df66ee6854cc089c9a7ffc948f5a8f6"],["D:/BLOG_QZL/Blog3/public/archives/5fc07ec4.html","387735850ee5a3b0e3ef713a0493e1eb"],["D:/BLOG_QZL/Blog3/public/archives/622.html","3be3ea61f8497883aa180f25476e8d30"],["D:/BLOG_QZL/Blog3/public/archives/6fc94bb0.html","532f425ddcc3a9a27b10252a5073abba"],["D:/BLOG_QZL/Blog3/public/archives/7b67faab.html","59c4520db889c21f7a45101266f0e408"],["D:/BLOG_QZL/Blog3/public/archives/7c53.html","144ffb5175a79221a8cce9b84b286eb8"],["D:/BLOG_QZL/Blog3/public/archives/7f7e.html","69d7d9dac13d1f1941f6d59df5e043b9"],["D:/BLOG_QZL/Blog3/public/archives/8632918.html","7bae580738dc2cfb583172117e6936cd"],["D:/BLOG_QZL/Blog3/public/archives/87ef.html","7990e28121ad18c87918b01e09935b55"],["D:/BLOG_QZL/Blog3/public/archives/9c7f.html","24ce1a7cfaf06e8f8f93439024ab3d41"],["D:/BLOG_QZL/Blog3/public/archives/a0a78e77.html","50962ee25a089fa6b389ded56ee7abe3"],["D:/BLOG_QZL/Blog3/public/archives/ae12.html","0bb2ba27b6d9dbbfcbec9e50bec4d462"],["D:/BLOG_QZL/Blog3/public/archives/ba04.html","12e8a3a950dc6b00d7fa8098afede0b1"],["D:/BLOG_QZL/Blog3/public/archives/bf113a1c.html","7f1151a771e5b7d08be7efc142077e76"],["D:/BLOG_QZL/Blog3/public/archives/c1a4eb67.html","9950502fd013000307b60329eecd4562"],["D:/BLOG_QZL/Blog3/public/archives/d4fa.html","78e08339be3c58e4a79ce7008000d7de"],["D:/BLOG_QZL/Blog3/public/archives/d57d.html","4e7a0f941d4e8b19b0c7ef8ad04a6e78"],["D:/BLOG_QZL/Blog3/public/archives/d84f.html","dbb2065ba6bb1eab8edb2088fe8548b3"],["D:/BLOG_QZL/Blog3/public/archives/f32f.html","93d744fda1ed278897a7b70cfc403480"],["D:/BLOG_QZL/Blog3/public/archives/f957.html","42720917b1bbe3fa98c6ecb344c0e92b"],["D:/BLOG_QZL/Blog3/public/archives/index.html","c76f9b47db94d6c8f26e599a33b54282"],["D:/BLOG_QZL/Blog3/public/archives/page/2/index.html","c76f9b47db94d6c8f26e599a33b54282"],["D:/BLOG_QZL/Blog3/public/archives/page/3/index.html","eb5ce45ac5a4cb6f1e2b3188eed3be35"],["D:/BLOG_QZL/Blog3/public/archives/page/4/index.html","c76f9b47db94d6c8f26e599a33b54282"],["D:/BLOG_QZL/Blog3/public/categories/OJ/index.html","4215a3c666b227c9896425a70fa564c0"],["D:/BLOG_QZL/Blog3/public/categories/hexo博客搭建/index.html","308f188e057e4e65eeac495f93df4322"],["D:/BLOG_QZL/Blog3/public/categories/index.html","6bf75e6eb1aeede90146e6741e6992ce"],["D:/BLOG_QZL/Blog3/public/categories/博客搭建/index.html","bd4263897b382e1d718c6eb2f52b2185"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/C-C/index.html","5c7a914fc4651e456f9658e5925b3d27"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/index.html","b2541743c337688fd8ab22b8be79b15b"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/page/2/index.html","a8b28c8e987e366dd947cb36a725beed"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/page/3/index.html","fcd306b513f18283bf5037bd6c39796c"],["D:/BLOG_QZL/Blog3/public/comment/index.html","a175d622ccb40c42af11030644eed6eb"],["D:/BLOG_QZL/Blog3/public/css/style.css","c8fd7484eca1e8ec23112d2a6296def3"],["D:/BLOG_QZL/Blog3/public/easysearch/about/index.html","79b02e4972bb67e19b339791be509b94"],["D:/BLOG_QZL/Blog3/public/easysearch/index.html","fdf25bede0eef8b0074d489ea7c47f4d"],["D:/BLOG_QZL/Blog3/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["D:/BLOG_QZL/Blog3/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["D:/BLOG_QZL/Blog3/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["D:/BLOG_QZL/Blog3/public/friends/index.html","77bf1f9716dd4664eb837e5a22b9888b"],["D:/BLOG_QZL/Blog3/public/img/algolia.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["D:/BLOG_QZL/Blog3/public/img/azure.svg","a7577e663c1e0fb788fed78d7457ff35"],["D:/BLOG_QZL/Blog3/public/img/baidu.svg","124ce00f2785724d84e32ab6403386a6"],["D:/BLOG_QZL/Blog3/public/index.html","d4397d060d80969887a0be148481896c"],["D:/BLOG_QZL/Blog3/public/js/app.js","a5d659af4b9d17196436c302e39ec916"],["D:/BLOG_QZL/Blog3/public/js/ergao.js","b1f566c49973d6fdab7ba0b372a4d17f"],["D:/BLOG_QZL/Blog3/public/js/love.js","88b75dcff60dd218bbb0db6cc37f3267"],["D:/BLOG_QZL/Blog3/public/js/search.js","63c61e56f228d83b544e21b4a7ed899c"],["D:/BLOG_QZL/Blog3/public/js/volantis.js","3c2fbf0d8e8c9ce1bbf88f0bf797b9ee"],["D:/BLOG_QZL/Blog3/public/page/2/index.html","cc7b88acc4a8d7b9446ee081ff27bec7"],["D:/BLOG_QZL/Blog3/public/page/3/index.html","25579ca193ca53835823920e2517a757"],["D:/BLOG_QZL/Blog3/public/page/4/index.html","492d81f65422f86546cde698162cc347"],["D:/BLOG_QZL/Blog3/public/projects/index.html","a8d3ff6c74b54fa8e26ebb80e524546a"],["D:/BLOG_QZL/Blog3/public/tags/C-C/index.html","3f5a822aa095b27b6fd3f9c9b4e87904"],["D:/BLOG_QZL/Blog3/public/tags/C/index.html","5b07d17a03773eebb67756649bdfddcc"],["D:/BLOG_QZL/Blog3/public/tags/Hexo主题/index.html","a874b587f3213398171001cd47c7b1e8"],["D:/BLOG_QZL/Blog3/public/tags/Let-s-Build-A-Simple-Interpreter/index.html","eef5afb9d883ced6a8b9d8df8e14f865"],["D:/BLOG_QZL/Blog3/public/tags/Let’s-Build-A-Simple-Interpreter/index.html","6583ff93b66f51cb7caca6e67dc25216"],["D:/BLOG_QZL/Blog3/public/tags/OJ/index.html","37a0cb3b60f43d9ff9232b32ae5f96c7"],["D:/BLOG_QZL/Blog3/public/tags/Yilia主题配置/index.html","3ae412a61a246324046817dc3b37ba20"],["D:/BLOG_QZL/Blog3/public/tags/front-matter配置/index.html","67130a44b0cc3509b98de0fddbf14d09"],["D:/BLOG_QZL/Blog3/public/tags/hexo显示pdf/index.html","69a1a886e6fa02e78fccbd362e2ecc2d"],["D:/BLOG_QZL/Blog3/public/tags/index.html","a3a6a94540b973140a86ecb407d8ac3f"],["D:/BLOG_QZL/Blog3/public/tags/matery主题配置/index.html","0793066a83f1aa6f4c073645db2bbc78"],["D:/BLOG_QZL/Blog3/public/tags/《计算机科学速成课》/index.html","423aadc7ec567ac95a63087538b90591"],["D:/BLOG_QZL/Blog3/public/tags/凸包/index.html","adb30197e19a152af7d07ca88cc65565"],["D:/BLOG_QZL/Blog3/public/tags/布尔逻辑和逻辑门/index.html","f4f138060c53401923e14c6be92936d2"],["D:/BLOG_QZL/Blog3/public/tags/计算几何/index.html","cc8c1b79113ada916c140523b9547157"],["D:/BLOG_QZL/Blog3/public/tags/计算机科学速成课/index.html","199148eaacda00cf49ca1b5c6eca0762"],["D:/BLOG_QZL/Blog3/public/学习笔记/index.html","600cb13f2f2aa14b97893ad1348bf95f"]];
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







