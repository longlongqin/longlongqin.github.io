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

var precacheConfig = [["D:/BLOG_QZL/Blog3/public/404.html","ee854def80dd485536028ed78426fc9b"],["D:/BLOG_QZL/Blog3/public/about/index.html","8e828d206e6039741e800436487359ab"],["D:/BLOG_QZL/Blog3/public/archives/138a.html","df920d5bff7c2f0dba25679cb593c857"],["D:/BLOG_QZL/Blog3/public/archives/167c.html","e2bb057aa033891c3869c66d95887a29"],["D:/BLOG_QZL/Blog3/public/archives/173c.html","54ffa7b6f01e20e5877e80d942534f76"],["D:/BLOG_QZL/Blog3/public/archives/18085cf9.html","c70160e5d550a76609e876c4d1122f13"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/index.html","953a3ade82fd1a0b29fce9afbdae6de7"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/page/2/index.html","72f92a688739376d24a023daf4bbb6bb"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/page/3/index.html","80a692ecbc6b0643636deb8c507948bc"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/page/4/index.html","f3d90c4c5dc024a143c41d79c9f77e04"],["D:/BLOG_QZL/Blog3/public/archives/2020/04/index.html","b9b42d47493460a0d9d180192f9ed6be"],["D:/BLOG_QZL/Blog3/public/archives/2020/index.html","c229040cb28915da09c8c0d2cd05d652"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/2/index.html","24609375e27379349e101274d1d81d34"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/3/index.html","fb1bac743ae76ead6dc2d8c89a13c2a2"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/4/index.html","2ffce941c930127257eabd159fe0b895"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/5/index.html","b12636c08d35abad4b8acd55faa26b52"],["D:/BLOG_QZL/Blog3/public/archives/260c7660.html","e54442241940ed1aa2f6651632afdb33"],["D:/BLOG_QZL/Blog3/public/archives/28c74e52.html","b34bc102d5d935ef8a91efdf44376b92"],["D:/BLOG_QZL/Blog3/public/archives/2f66ae56.html","080448c44af6b96f8a5d9938bd3f70ca"],["D:/BLOG_QZL/Blog3/public/archives/2faa8a4b.html","ba4b5d15df3c5c3a7a15161eb8aa484f"],["D:/BLOG_QZL/Blog3/public/archives/3478.html","844a227b1f7d0995520a8422f3f68d94"],["D:/BLOG_QZL/Blog3/public/archives/3ae1bc73.html","0cf61dc85bc53151f8d486040c4511a2"],["D:/BLOG_QZL/Blog3/public/archives/3b16.html","a055a259ce04c5225b2c1cd0b864d5d2"],["D:/BLOG_QZL/Blog3/public/archives/427485bf.html","0c5dc835cfbcc0c7c16d4adc428333ee"],["D:/BLOG_QZL/Blog3/public/archives/448ac7f1.html","360f4f8e2e1b3c8ab0f3d8728d9ec8f9"],["D:/BLOG_QZL/Blog3/public/archives/460671de.html","fb84977e9218a618351690bec7469a30"],["D:/BLOG_QZL/Blog3/public/archives/510d.html","3db48dfec85e1dabd4606322f2ae0721"],["D:/BLOG_QZL/Blog3/public/archives/514b.html","387f472999d7c94633b6fc1d8477290c"],["D:/BLOG_QZL/Blog3/public/archives/5a757a52.html","170c5e58e25d72394b2123956c529f5b"],["D:/BLOG_QZL/Blog3/public/archives/5fc07ec4.html","8b5cf5a41d216b2e088e36d6e9c775d6"],["D:/BLOG_QZL/Blog3/public/archives/622.html","66be244b7602db58e800b7dcbe574ddc"],["D:/BLOG_QZL/Blog3/public/archives/67343d3.html","4534beee19be0667a17e75c34b03d7cb"],["D:/BLOG_QZL/Blog3/public/archives/6de95ae.html","6422d6b6f63e3465bfc3b23284ed109b"],["D:/BLOG_QZL/Blog3/public/archives/6fc94bb0.html","a086677d738b04766da487363da330d6"],["D:/BLOG_QZL/Blog3/public/archives/7a585be8.html","a472922b3f52bd1fbdd4a80b0dc9e319"],["D:/BLOG_QZL/Blog3/public/archives/7b67faab.html","4f2c00a14491bc962aa20c1e36cf4a4c"],["D:/BLOG_QZL/Blog3/public/archives/7c53.html","717713087ee143436616e76f02b74398"],["D:/BLOG_QZL/Blog3/public/archives/7f7e.html","486fab1a50840c5495fba3766223f225"],["D:/BLOG_QZL/Blog3/public/archives/8632918.html","a0fe91015dd0afb04b335cade652adf6"],["D:/BLOG_QZL/Blog3/public/archives/87ef.html","25a79592472989f7350d16eb6c626831"],["D:/BLOG_QZL/Blog3/public/archives/9c7f.html","50515bee4c1a6013d105829643315714"],["D:/BLOG_QZL/Blog3/public/archives/a0a78e77.html","d8edc7e8b7707e1d44e0017d09ec75cb"],["D:/BLOG_QZL/Blog3/public/archives/ae12.html","f5b070cb1256c6512f5bc9a9232bab5e"],["D:/BLOG_QZL/Blog3/public/archives/b6a3dbf1.html","094cd8dae70a474e7be8cee5aa6fb6f5"],["D:/BLOG_QZL/Blog3/public/archives/ba04.html","a68710a8b54e8de3ff9b939c5c613c59"],["D:/BLOG_QZL/Blog3/public/archives/bf113a1c.html","e6af8444bd86f55aea2b2c9b9b4e4d6b"],["D:/BLOG_QZL/Blog3/public/archives/c1a4eb67.html","37628ecff3fb830b051ef4398174368b"],["D:/BLOG_QZL/Blog3/public/archives/d4fa.html","7b10b4ea509a8664e1cbc0e35952e427"],["D:/BLOG_QZL/Blog3/public/archives/d57d.html","2a590e8c2f8d5866c346ffdfb9793243"],["D:/BLOG_QZL/Blog3/public/archives/d84f.html","4f84d3bc4940bc582a267018ef8f074f"],["D:/BLOG_QZL/Blog3/public/archives/eaabd222.html","96d96e97154e115de168cd2e73242a0a"],["D:/BLOG_QZL/Blog3/public/archives/f32f.html","fe354ab75af7cde335606a39a7d22b9b"],["D:/BLOG_QZL/Blog3/public/archives/f957.html","3ad8eaeba65c0cad1cfa9d18fb8db00d"],["D:/BLOG_QZL/Blog3/public/archives/index.html","29c44ece8024dfd13edbe8ac2abc346f"],["D:/BLOG_QZL/Blog3/public/archives/page/2/index.html","1066fc50459aedde07a27f62b52a4437"],["D:/BLOG_QZL/Blog3/public/archives/page/3/index.html","29c44ece8024dfd13edbe8ac2abc346f"],["D:/BLOG_QZL/Blog3/public/archives/page/4/index.html","29c44ece8024dfd13edbe8ac2abc346f"],["D:/BLOG_QZL/Blog3/public/archives/page/5/index.html","1066fc50459aedde07a27f62b52a4437"],["D:/BLOG_QZL/Blog3/public/categories/OJ/index.html","ba1fa629beaf9156a834a1443440bb2c"],["D:/BLOG_QZL/Blog3/public/categories/hexo博客搭建/index.html","07db200318858a7b510e26554df8d618"],["D:/BLOG_QZL/Blog3/public/categories/index.html","9a612c3f27e50e5325941f922e9ed176"],["D:/BLOG_QZL/Blog3/public/categories/博客搭建/index.html","950abaac38ac8da8f1de957720c84e97"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/C-C/index.html","1881203db49f5b98494c19b222fa2b37"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/Git/index.html","a479d037b63ac04dd33678c6a2e6dbf8"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/index.html","2238f3fb003fd360edf112c5a8673cc5"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/linux/index.html","e0587019ef119b5de2f1de2c5ec9814f"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/page/2/index.html","d546b9cb8afe3cd7deaebf1b1e50f75e"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/page/3/index.html","26c01b4a1e3528ed36a7700b89412043"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/page/4/index.html","19b00316d2cd525f140fab4b0d7c120f"],["D:/BLOG_QZL/Blog3/public/categories/实用技巧/index.html","19e24514823e3244af652346cb51f81b"],["D:/BLOG_QZL/Blog3/public/categories/配置/index.html","5b866cccd816bed0894c6836fbba6210"],["D:/BLOG_QZL/Blog3/public/comment/index.html","1b687eacb4fe3eee5037d7c440951543"],["D:/BLOG_QZL/Blog3/public/css/style.css","c8fd7484eca1e8ec23112d2a6296def3"],["D:/BLOG_QZL/Blog3/public/easysearch/about/index.html","79b02e4972bb67e19b339791be509b94"],["D:/BLOG_QZL/Blog3/public/easysearch/index.html","fdf25bede0eef8b0074d489ea7c47f4d"],["D:/BLOG_QZL/Blog3/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["D:/BLOG_QZL/Blog3/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["D:/BLOG_QZL/Blog3/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["D:/BLOG_QZL/Blog3/public/friends/index.html","26ab6d2feaea21f7a2c914d3a61137c5"],["D:/BLOG_QZL/Blog3/public/img/algolia.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["D:/BLOG_QZL/Blog3/public/img/azure.svg","a7577e663c1e0fb788fed78d7457ff35"],["D:/BLOG_QZL/Blog3/public/img/baidu.svg","124ce00f2785724d84e32ab6403386a6"],["D:/BLOG_QZL/Blog3/public/index.html","8eecca09ed7e37616fbef8fefdfd4407"],["D:/BLOG_QZL/Blog3/public/js/app.js","a5d659af4b9d17196436c302e39ec916"],["D:/BLOG_QZL/Blog3/public/js/ergao.js","b1f566c49973d6fdab7ba0b372a4d17f"],["D:/BLOG_QZL/Blog3/public/js/love.js","88b75dcff60dd218bbb0db6cc37f3267"],["D:/BLOG_QZL/Blog3/public/js/search.js","63c61e56f228d83b544e21b4a7ed899c"],["D:/BLOG_QZL/Blog3/public/js/volantis.js","3c2fbf0d8e8c9ce1bbf88f0bf797b9ee"],["D:/BLOG_QZL/Blog3/public/page/2/index.html","036f3759bf6fe96ed19efef181df9977"],["D:/BLOG_QZL/Blog3/public/page/3/index.html","786c1f7acc0f1a98be20942fb150f343"],["D:/BLOG_QZL/Blog3/public/page/4/index.html","cc71e39b6693b0d0ad55e5c703b89e4b"],["D:/BLOG_QZL/Blog3/public/page/5/index.html","c1f2561662c8fb014b0c3f4af036f37c"],["D:/BLOG_QZL/Blog3/public/projects/index.html","48b12a4ad012e6223fd3c8508729b555"],["D:/BLOG_QZL/Blog3/public/tags/C-C/index.html","d44764513623371b4eab676c8cd7a8df"],["D:/BLOG_QZL/Blog3/public/tags/C/index.html","a144e6077b74c4eb15c23f62c8eb9acd"],["D:/BLOG_QZL/Blog3/public/tags/Git/index.html","8f478e295e2ea87ca7ff33407a854d8f"],["D:/BLOG_QZL/Blog3/public/tags/Hexo主题/index.html","dbf33df44afa492d1d03f423ed2c511a"],["D:/BLOG_QZL/Blog3/public/tags/Let-s-Build-A-Simple-Interpreter/index.html","7c072f8881f25254725e66d32ae335e6"],["D:/BLOG_QZL/Blog3/public/tags/Let’s-Build-A-Simple-Interpreter/index.html","d5f2122f6afcf08cba490ab07c0779f0"],["D:/BLOG_QZL/Blog3/public/tags/OJ/index.html","28ae55c669cf508f8f379510127bedad"],["D:/BLOG_QZL/Blog3/public/tags/Yilia主题配置/index.html","dfd733194300f5d046eceb295ab1e237"],["D:/BLOG_QZL/Blog3/public/tags/forme/index.html","66707b8ce26b838b8b783c41d6e2335e"],["D:/BLOG_QZL/Blog3/public/tags/front-matter配置/index.html","8aba453eca89ddc8e4dfb54903c6377e"],["D:/BLOG_QZL/Blog3/public/tags/github/index.html","9c613e97cc8ed117ebbfb11cd0ede449"],["D:/BLOG_QZL/Blog3/public/tags/hexo显示pdf/index.html","46f5dc06feb33482025eec6ca6a35d69"],["D:/BLOG_QZL/Blog3/public/tags/index.html","12eccfe23e3a58f0fec87076712ec778"],["D:/BLOG_QZL/Blog3/public/tags/linux/index.html","167de9746b148e44cb2ef349356478cb"],["D:/BLOG_QZL/Blog3/public/tags/matery主题配置/index.html","d524bc739943a867c349470b9172846a"],["D:/BLOG_QZL/Blog3/public/tags/《计算机科学速成课》/index.html","3b009966774817141c03692bd8f09851"],["D:/BLOG_QZL/Blog3/public/tags/凸包/index.html","85638c85f17ebd2aee621e6ba2a7ef2f"],["D:/BLOG_QZL/Blog3/public/tags/布尔逻辑和逻辑门/index.html","d572cfb49197bddb400fb17261f9e117"],["D:/BLOG_QZL/Blog3/public/tags/计算几何/index.html","3b0c4ff97f459fedb097b19ecae5155c"],["D:/BLOG_QZL/Blog3/public/tags/计算机科学速成课/index.html","abcb2087dd8d3201f623ec17a87572d5"],["D:/BLOG_QZL/Blog3/public/tags/配置/index.html","e8ed34de7290839ed2f0f2f0293dda3d"],["D:/BLOG_QZL/Blog3/public/学习笔记/index.html","219ef16b61ddfc1b49ab9c04f05befa4"]];
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







