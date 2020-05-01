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

var precacheConfig = [["D:/BLOG_QZL/Blog3/public/404.html","160d9674d8aa4a45dc04fea6746305f1"],["D:/BLOG_QZL/Blog3/public/about/index.html","56498fead9add2eb3cf91b2b60fcaabe"],["D:/BLOG_QZL/Blog3/public/archives/138a.html","ad100a222de36674eac282fd9a156328"],["D:/BLOG_QZL/Blog3/public/archives/167c.html","cc5006922dba409245b1fa7ade171334"],["D:/BLOG_QZL/Blog3/public/archives/173c.html","079d1533ca6c9f012dac502c8d736101"],["D:/BLOG_QZL/Blog3/public/archives/18085cf9.html","7078ce072a1a13e76192bb58e8ca14d7"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/index.html","dfad95539159343ad8291bf74a3749dd"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/page/2/index.html","63d7569fcb412ef57c55e5babaf56fe1"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/page/3/index.html","d0bbe216eda8a575d80063a44a2b3a17"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/page/4/index.html","5f92d40caf9134e8beb20c7a57fef3d7"],["D:/BLOG_QZL/Blog3/public/archives/2020/04/index.html","11cfe0243b712c733e56ec0d88a3599b"],["D:/BLOG_QZL/Blog3/public/archives/2020/04/page/2/index.html","4137861cc9780841a4b66162d85cacae"],["D:/BLOG_QZL/Blog3/public/archives/2020/index.html","f542473715405cb73703d304abc58dae"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/2/index.html","009e031375e783352c21b859b62133a4"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/3/index.html","7a70ef9745058379e8b8da698e0c8f93"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/4/index.html","2a1a453fb816ee294505c463aaf606ec"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/5/index.html","53e9ee22626a376966479223f0ec2ad9"],["D:/BLOG_QZL/Blog3/public/archives/260c7660.html","4c04b67c908203f9572dc76644390e21"],["D:/BLOG_QZL/Blog3/public/archives/28c74e52.html","87eceefeb84f38f739e7a362d7de6799"],["D:/BLOG_QZL/Blog3/public/archives/2f66ae56.html","3d6158f7e68b3f1d06424584ee4eb316"],["D:/BLOG_QZL/Blog3/public/archives/2faa8a4b.html","5c4d099ff70ebce860a3cdac81263348"],["D:/BLOG_QZL/Blog3/public/archives/3478.html","e2ab01a01591a4182bb8d46d9dba873a"],["D:/BLOG_QZL/Blog3/public/archives/3ae1bc73.html","7ea64d6735ae6f220338a965da557a9b"],["D:/BLOG_QZL/Blog3/public/archives/3b16.html","503044310d0c925672973e38e525bddd"],["D:/BLOG_QZL/Blog3/public/archives/426514b1.html","dc3061301ee9132bc96542e9b934556c"],["D:/BLOG_QZL/Blog3/public/archives/427485bf.html","a0466d5169f096607c289fd6d02a4ed1"],["D:/BLOG_QZL/Blog3/public/archives/448ac7f1.html","782ac9a3a3f08f1d82d83bc51546652d"],["D:/BLOG_QZL/Blog3/public/archives/460671de.html","4991c346f48b0a9b7cd7768efee41714"],["D:/BLOG_QZL/Blog3/public/archives/510d.html","14feafa8bfb98c466e65996ee807fd24"],["D:/BLOG_QZL/Blog3/public/archives/514b.html","015990daff9f20722213d2107dfb4bb1"],["D:/BLOG_QZL/Blog3/public/archives/5a757a52.html","fc70774f062898eac1d123ff055fdd73"],["D:/BLOG_QZL/Blog3/public/archives/5fc07ec4.html","a7291f4212b94948617ccd28f8f97845"],["D:/BLOG_QZL/Blog3/public/archives/622.html","f3fb2b13a73cb20cf012458f92e9627f"],["D:/BLOG_QZL/Blog3/public/archives/67343d3.html","f1372ec865722033db637fa9e8b962d5"],["D:/BLOG_QZL/Blog3/public/archives/6de95ae.html","c4b0a3dbe1b8ef7e9db6e82f8f546b52"],["D:/BLOG_QZL/Blog3/public/archives/6fc94bb0.html","66be3e3b6527595de3dac0f637fb29a5"],["D:/BLOG_QZL/Blog3/public/archives/7a585be8.html","6240e1aba18b943ea76e0efe303cb666"],["D:/BLOG_QZL/Blog3/public/archives/7b67faab.html","73cdc5514b04ddfbaf8a5aa470964981"],["D:/BLOG_QZL/Blog3/public/archives/7c53.html","ebe1340f12378a9353eb0d4ebe364a0e"],["D:/BLOG_QZL/Blog3/public/archives/7f7e.html","be5b7e73328d9a087571c6650e4253a8"],["D:/BLOG_QZL/Blog3/public/archives/8632918.html","90386a6e673cbd868b9b5e676824b3bd"],["D:/BLOG_QZL/Blog3/public/archives/87ef.html","4321fddd09f155f467fc6993d0eaf09a"],["D:/BLOG_QZL/Blog3/public/archives/9c7f.html","1e86cb73cd38fc4d9d2a306ddc2b71b5"],["D:/BLOG_QZL/Blog3/public/archives/9f7a1269.html","1dda0ba2f1cd971815ad7770960229f0"],["D:/BLOG_QZL/Blog3/public/archives/a0a78e77.html","a23b377259cae981f9c82bf48865173e"],["D:/BLOG_QZL/Blog3/public/archives/ae12.html","38e09e2f0774b3579392ad29f518da94"],["D:/BLOG_QZL/Blog3/public/archives/b6a3dbf1.html","3c7a3ddbe18a2b2f47f69b62702bc71a"],["D:/BLOG_QZL/Blog3/public/archives/ba04.html","6e5946ec9f85e8b5de8349b37e2861bb"],["D:/BLOG_QZL/Blog3/public/archives/bf113a1c.html","7da056c973464b894651fd20b326be95"],["D:/BLOG_QZL/Blog3/public/archives/c1a4eb67.html","6a0b3fc62d48c3344593d788345b64fd"],["D:/BLOG_QZL/Blog3/public/archives/c812a74c.html","b75d93fce6f7d2252f7c45c7195252db"],["D:/BLOG_QZL/Blog3/public/archives/d4fa.html","13b99889991239f409da2d3f79181191"],["D:/BLOG_QZL/Blog3/public/archives/d57d.html","e24a3a1b8c5bbdb2060d75ac351d4cee"],["D:/BLOG_QZL/Blog3/public/archives/d84f.html","e980d381ee2a6642e3594d2a88942f75"],["D:/BLOG_QZL/Blog3/public/archives/eaabd222.html","c44d738e1c6620030814d9eec07b6abf"],["D:/BLOG_QZL/Blog3/public/archives/f32f.html","825ac1e83e93b8fa463025adc35bdb5a"],["D:/BLOG_QZL/Blog3/public/archives/f957.html","5ef5a447dd97df7d417b36e57f4629f6"],["D:/BLOG_QZL/Blog3/public/archives/index.html","5879d996687c48b232b293d85b4f3bcf"],["D:/BLOG_QZL/Blog3/public/archives/page/2/index.html","5879d996687c48b232b293d85b4f3bcf"],["D:/BLOG_QZL/Blog3/public/archives/page/3/index.html","5879d996687c48b232b293d85b4f3bcf"],["D:/BLOG_QZL/Blog3/public/archives/page/4/index.html","5879d996687c48b232b293d85b4f3bcf"],["D:/BLOG_QZL/Blog3/public/archives/page/5/index.html","5879d996687c48b232b293d85b4f3bcf"],["D:/BLOG_QZL/Blog3/public/categories/OJ/index.html","aa7d32c9a6041ae1514dcad2a9e615cf"],["D:/BLOG_QZL/Blog3/public/categories/hexo博客搭建/index.html","547b311b1c7a7db8d8b42df261b1a5dc"],["D:/BLOG_QZL/Blog3/public/categories/index.html","8bcf7ca80c05864a94ee33bafa9c4946"],["D:/BLOG_QZL/Blog3/public/categories/博客搭建/index.html","b96dbde3b6b7f596f1ecf30580506306"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/C-C/index.html","a2e12983bd2ba3d97f54c8e46b8f180e"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/C-C/page/2/index.html","2f947b2b72acb4809fabb514ca7ecdc8"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/Git/index.html","e4fc1963e6869bf583850a22c2e04fcd"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/index.html","a32f18767cba05ab31ade59eb11aab6a"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/linux/index.html","3e5d7cfb9f83534e3df61dcef33d0d6d"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/page/2/index.html","1b37db10abce90f1c9e10c47e02009d5"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/page/3/index.html","0c85d39b96c67ddc7171f019b1cc18de"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/page/4/index.html","5ca2baf0ad1f68df6bdcdc85d36755eb"],["D:/BLOG_QZL/Blog3/public/categories/实用技巧/index.html","9debd23d958ccc1d04f069eb0add82cf"],["D:/BLOG_QZL/Blog3/public/categories/配置/index.html","dc5582ad8cf4f9e083e11a9ac16d1e68"],["D:/BLOG_QZL/Blog3/public/comment/index.html","548bec532b9f7645c1f6c26c22610e96"],["D:/BLOG_QZL/Blog3/public/css/style.css","c8fd7484eca1e8ec23112d2a6296def3"],["D:/BLOG_QZL/Blog3/public/easysearch/about/index.html","2a3e825b37de430dadda2331dcc4530c"],["D:/BLOG_QZL/Blog3/public/easysearch/index.html","71cce6959e05beb136017abf41e48c1f"],["D:/BLOG_QZL/Blog3/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["D:/BLOG_QZL/Blog3/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["D:/BLOG_QZL/Blog3/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["D:/BLOG_QZL/Blog3/public/friends/index.html","920687ea151f1abdce72b4069dbd5afd"],["D:/BLOG_QZL/Blog3/public/img/algolia.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["D:/BLOG_QZL/Blog3/public/img/azure.svg","a7577e663c1e0fb788fed78d7457ff35"],["D:/BLOG_QZL/Blog3/public/img/baidu.svg","124ce00f2785724d84e32ab6403386a6"],["D:/BLOG_QZL/Blog3/public/index.html","2cd32cea748e756e09c686c2328d61e0"],["D:/BLOG_QZL/Blog3/public/js/app.js","a5d659af4b9d17196436c302e39ec916"],["D:/BLOG_QZL/Blog3/public/js/ergao.js","b1f566c49973d6fdab7ba0b372a4d17f"],["D:/BLOG_QZL/Blog3/public/js/love.js","88b75dcff60dd218bbb0db6cc37f3267"],["D:/BLOG_QZL/Blog3/public/js/search.js","63c61e56f228d83b544e21b4a7ed899c"],["D:/BLOG_QZL/Blog3/public/js/volantis.js","3c2fbf0d8e8c9ce1bbf88f0bf797b9ee"],["D:/BLOG_QZL/Blog3/public/page/2/index.html","e84daa420938069aeb2013f27fcd85cf"],["D:/BLOG_QZL/Blog3/public/page/3/index.html","6e3c0f8438d8b08db38113740f917b80"],["D:/BLOG_QZL/Blog3/public/page/4/index.html","9ac10a9f74304ce198338afb0f41b59a"],["D:/BLOG_QZL/Blog3/public/page/5/index.html","da43fe2349f25400d50f0dbd23049519"],["D:/BLOG_QZL/Blog3/public/projects/index.html","30f5fc00801e68a585fc1696dc50091e"],["D:/BLOG_QZL/Blog3/public/tags/C-C/index.html","005c581207028603e996416df90e179a"],["D:/BLOG_QZL/Blog3/public/tags/C/index.html","ddc432ed5b8063f3dce85b0fee793436"],["D:/BLOG_QZL/Blog3/public/tags/Git/index.html","0b7b9e263137ea76e731be3f3ac6e25a"],["D:/BLOG_QZL/Blog3/public/tags/Hexo主题/index.html","f379385f2c3100ff888a08f515477f3d"],["D:/BLOG_QZL/Blog3/public/tags/Let-s-Build-A-Simple-Interpreter/index.html","7dcdea3aacde59e2b5a1b7610bb02bba"],["D:/BLOG_QZL/Blog3/public/tags/Let’s-Build-A-Simple-Interpreter/index.html","b87462d9428368122743ea1e6cdda4c0"],["D:/BLOG_QZL/Blog3/public/tags/OJ/index.html","6ac3d4e06bfa8c6fc4e0b66648c22980"],["D:/BLOG_QZL/Blog3/public/tags/Yilia主题配置/index.html","4bee88b874362bddd0954913bbf137de"],["D:/BLOG_QZL/Blog3/public/tags/forme/index.html","bafb399cc4ef9a3c22787f8717c8850d"],["D:/BLOG_QZL/Blog3/public/tags/front-matter配置/index.html","b306ce0d6556815c2210fbe48bc692f4"],["D:/BLOG_QZL/Blog3/public/tags/github/index.html","c230a8c3922844a427cb34ef23289eb8"],["D:/BLOG_QZL/Blog3/public/tags/hexo显示pdf/index.html","4a0dbf3e22994d935d9be8ed51afc34b"],["D:/BLOG_QZL/Blog3/public/tags/index.html","7e47d5bf1de2fd92693c273022332047"],["D:/BLOG_QZL/Blog3/public/tags/linux/index.html","fd785411510484332a8222a31ac403cd"],["D:/BLOG_QZL/Blog3/public/tags/matery主题配置/index.html","799a0e83edeadd514b6d19716176d39a"],["D:/BLOG_QZL/Blog3/public/tags/《计算机科学速成课》/index.html","cdc31323f0d4edb54be8c5cae0d6721f"],["D:/BLOG_QZL/Blog3/public/tags/凸包/index.html","8fd87dee0fd165359bcb97f803db0f26"],["D:/BLOG_QZL/Blog3/public/tags/布尔逻辑和逻辑门/index.html","3b00fb7a0e28a4700f8660e8a353ac00"],["D:/BLOG_QZL/Blog3/public/tags/计算几何/index.html","af4ce9b4f7343f30e42e3d155608a6fd"],["D:/BLOG_QZL/Blog3/public/tags/计算机科学速成课/index.html","c325fa47229cbfce8d1feb6402c00c72"],["D:/BLOG_QZL/Blog3/public/tags/配置/index.html","ecd8b6f09332b7e35633cd21339324ec"],["D:/BLOG_QZL/Blog3/public/学习笔记/index.html","032800432d6628d00ee90d617a2d2a9b"]];
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







