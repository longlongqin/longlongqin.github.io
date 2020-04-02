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

var precacheConfig = [["D:/BLOG_QZL/Blog3/public/404.html","f1018d17c21f7412f5c0c03f06f7154b"],["D:/BLOG_QZL/Blog3/public/about/index.html","916706d641b1ef9aaf639b79076fad79"],["D:/BLOG_QZL/Blog3/public/archives/138a.html","a120d699002e1c51e100363a7a91b3c8"],["D:/BLOG_QZL/Blog3/public/archives/167c.html","b0e97e74df15594d2aea35d9ec52e54f"],["D:/BLOG_QZL/Blog3/public/archives/173c.html","8fc5ca3fb858ec54c09dc004e6391521"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/index.html","5174d73aaab8a5a50565c5e09be69857"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/page/2/index.html","b34030f4aea4d88badba57d7d9a9beff"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/page/3/index.html","80db470dc66b4fa4035698733b105d96"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/page/4/index.html","fba8ae81ee064e0ae71be3d3ece7d2d3"],["D:/BLOG_QZL/Blog3/public/archives/2020/04/index.html","b883c5c2054d8cbe856a2181604fe8d5"],["D:/BLOG_QZL/Blog3/public/archives/2020/index.html","89328fa7d8b3091acf61ba9b08c055c1"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/2/index.html","57b85396645df2bbd853002e8a7005c7"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/3/index.html","49dd7227da903ced0acebe0377ba02b4"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/4/index.html","9079fb5b27c26e5def9ef8149ada9f04"],["D:/BLOG_QZL/Blog3/public/archives/28c74e52.html","1de2a21ee9c04cac2f2fa29f33685414"],["D:/BLOG_QZL/Blog3/public/archives/2f66ae56.html","9a9515de10712c5ec421e037beaf4599"],["D:/BLOG_QZL/Blog3/public/archives/3478.html","086e52d45d9600aa65129b797743e859"],["D:/BLOG_QZL/Blog3/public/archives/3ae1bc73.html","35b57a9409f02ec995a7e8f7034887c0"],["D:/BLOG_QZL/Blog3/public/archives/3b16.html","4d47d4e56329aeee8a058fed75ceae9d"],["D:/BLOG_QZL/Blog3/public/archives/427485bf.html","3b49da76763a67d9f9b2eb7d69e4366b"],["D:/BLOG_QZL/Blog3/public/archives/448ac7f1.html","45889abad303d179c316538324181e58"],["D:/BLOG_QZL/Blog3/public/archives/460671de.html","fc579209a5dc4122011c26964548548f"],["D:/BLOG_QZL/Blog3/public/archives/510d.html","55433f0bd4527b06b3447a4b999e5f8f"],["D:/BLOG_QZL/Blog3/public/archives/514b.html","b9f456a5b5f3374a0744282844faa05e"],["D:/BLOG_QZL/Blog3/public/archives/5a757a52.html","a1c9df218574a9936f8ff3ed810dcc32"],["D:/BLOG_QZL/Blog3/public/archives/5fc07ec4.html","d53f24e101d1c1aafe3eb1b6d37ddd3e"],["D:/BLOG_QZL/Blog3/public/archives/622.html","52f193dfbee0b42508d0d3e8eca52ce4"],["D:/BLOG_QZL/Blog3/public/archives/6fc94bb0.html","9b9a2cd79a39a9297ad27f8b860feadb"],["D:/BLOG_QZL/Blog3/public/archives/7b67faab.html","5f8bfbc2580dc3d45acb74fb7eab012c"],["D:/BLOG_QZL/Blog3/public/archives/7c53.html","24edfff8a908fde2e9b9ecc005f0c0d9"],["D:/BLOG_QZL/Blog3/public/archives/7f7e.html","3795e47579f3e0e5bc81c2696dfb3ff1"],["D:/BLOG_QZL/Blog3/public/archives/8632918.html","4e9b8baf1924d4de42c2948a82f26094"],["D:/BLOG_QZL/Blog3/public/archives/87ef.html","c56570985a1f365c08ad9682a72b3b09"],["D:/BLOG_QZL/Blog3/public/archives/9c7f.html","2665118489eeea35892b6879693c05ea"],["D:/BLOG_QZL/Blog3/public/archives/a0a78e77.html","d147c6701089faf83aa35d8022b4c240"],["D:/BLOG_QZL/Blog3/public/archives/ae12.html","3483db81d2ebdd513398705b34e37379"],["D:/BLOG_QZL/Blog3/public/archives/ba04.html","0d8e0a39b71c428df62d0e2f1925a21b"],["D:/BLOG_QZL/Blog3/public/archives/bf113a1c.html","817997db00ac79c7768d99939cf41ca2"],["D:/BLOG_QZL/Blog3/public/archives/c1a4eb67.html","ce5319052e99c9faf57b476973b9daae"],["D:/BLOG_QZL/Blog3/public/archives/d4fa.html","4c147e6e47ebc01c65aeeac9e05d2563"],["D:/BLOG_QZL/Blog3/public/archives/d57d.html","362108a910619818f777dbfe0eafef3b"],["D:/BLOG_QZL/Blog3/public/archives/d84f.html","2863bb3c27e7591e329175ccc572019c"],["D:/BLOG_QZL/Blog3/public/archives/eaabd222.html","b4a12a796937639d3f79bfc323d689a8"],["D:/BLOG_QZL/Blog3/public/archives/f32f.html","20beac125d91e43666bbc0c65b6ad524"],["D:/BLOG_QZL/Blog3/public/archives/f957.html","124fc9482940a96f66d74d5e14f9f351"],["D:/BLOG_QZL/Blog3/public/archives/index.html","8b544bd5f30788839a4b7d180b338d38"],["D:/BLOG_QZL/Blog3/public/archives/page/2/index.html","8b544bd5f30788839a4b7d180b338d38"],["D:/BLOG_QZL/Blog3/public/archives/page/3/index.html","f93a159918591e70229c9a978326967e"],["D:/BLOG_QZL/Blog3/public/archives/page/4/index.html","8b544bd5f30788839a4b7d180b338d38"],["D:/BLOG_QZL/Blog3/public/categories/OJ/index.html","515faf5534ed23fb50b47abdb2807241"],["D:/BLOG_QZL/Blog3/public/categories/hexo博客搭建/index.html","266abcf2d00018d47d47b083b575c3a5"],["D:/BLOG_QZL/Blog3/public/categories/index.html","b5b58dec3630f31058ec9b7fedaee2f3"],["D:/BLOG_QZL/Blog3/public/categories/博客搭建/index.html","b8d04d25293fca0edf2a8c1e929200a4"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/C-C/index.html","9edd93c04fb878ced7fb6fda76a88a47"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/index.html","9562f868ee6e7a8db070ad62b5b1469b"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/page/2/index.html","60b7b99110bccebf400ab9d608f7ffa7"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/page/3/index.html","1dc15b117f72f894399137c475e4ee99"],["D:/BLOG_QZL/Blog3/public/comment/index.html","d67ca24dbbf84d4ef0b95e409858f851"],["D:/BLOG_QZL/Blog3/public/css/style.css","c8fd7484eca1e8ec23112d2a6296def3"],["D:/BLOG_QZL/Blog3/public/easysearch/about/index.html","79b02e4972bb67e19b339791be509b94"],["D:/BLOG_QZL/Blog3/public/easysearch/index.html","fdf25bede0eef8b0074d489ea7c47f4d"],["D:/BLOG_QZL/Blog3/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["D:/BLOG_QZL/Blog3/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["D:/BLOG_QZL/Blog3/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["D:/BLOG_QZL/Blog3/public/friends/index.html","3295add17b2ffb1bd6b016b5344b7af5"],["D:/BLOG_QZL/Blog3/public/img/algolia.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["D:/BLOG_QZL/Blog3/public/img/azure.svg","a7577e663c1e0fb788fed78d7457ff35"],["D:/BLOG_QZL/Blog3/public/img/baidu.svg","124ce00f2785724d84e32ab6403386a6"],["D:/BLOG_QZL/Blog3/public/index.html","08e6016ef36504d92b3b1eb8e2920549"],["D:/BLOG_QZL/Blog3/public/js/app.js","a5d659af4b9d17196436c302e39ec916"],["D:/BLOG_QZL/Blog3/public/js/ergao.js","b1f566c49973d6fdab7ba0b372a4d17f"],["D:/BLOG_QZL/Blog3/public/js/love.js","88b75dcff60dd218bbb0db6cc37f3267"],["D:/BLOG_QZL/Blog3/public/js/search.js","63c61e56f228d83b544e21b4a7ed899c"],["D:/BLOG_QZL/Blog3/public/js/volantis.js","3c2fbf0d8e8c9ce1bbf88f0bf797b9ee"],["D:/BLOG_QZL/Blog3/public/page/2/index.html","e2b91a0ec6669af200797b26016684b5"],["D:/BLOG_QZL/Blog3/public/page/3/index.html","3d331ed8082796e64d070d4ff1c9ac50"],["D:/BLOG_QZL/Blog3/public/page/4/index.html","7595977d144c69437c38b1921751bb93"],["D:/BLOG_QZL/Blog3/public/projects/index.html","c690ec0e603d23c3d83600bd3a1712bd"],["D:/BLOG_QZL/Blog3/public/tags/C-C/index.html","b055e8efb00994d005f8eb4d5f6d2737"],["D:/BLOG_QZL/Blog3/public/tags/C/index.html","74e95692cc7897f38ea223d8b0f58a82"],["D:/BLOG_QZL/Blog3/public/tags/Hexo主题/index.html","770d24593078256f564611e3b13e3dcd"],["D:/BLOG_QZL/Blog3/public/tags/Let-s-Build-A-Simple-Interpreter/index.html","060e51a47ca5fc03319f45acfd5d10a9"],["D:/BLOG_QZL/Blog3/public/tags/Let’s-Build-A-Simple-Interpreter/index.html","fb88d4ff2f72c6ffc2e74123674cfc9c"],["D:/BLOG_QZL/Blog3/public/tags/OJ/index.html","6566c19de4b48fb10fcdd151c674db54"],["D:/BLOG_QZL/Blog3/public/tags/Yilia主题配置/index.html","e6e675843cbe02708c35a3e868a70ca6"],["D:/BLOG_QZL/Blog3/public/tags/forme/index.html","fd38198abd9d8c0d6da992159668d67b"],["D:/BLOG_QZL/Blog3/public/tags/front-matter配置/index.html","80d8429b9041f238da5de347b5f9c6a0"],["D:/BLOG_QZL/Blog3/public/tags/hexo显示pdf/index.html","661d4f69294d971b2843498a3e900788"],["D:/BLOG_QZL/Blog3/public/tags/index.html","ab3aa0dca7a36b7bc50fcd5ba0ec2411"],["D:/BLOG_QZL/Blog3/public/tags/matery主题配置/index.html","7af2758d839982111c849762c955f6f8"],["D:/BLOG_QZL/Blog3/public/tags/《计算机科学速成课》/index.html","bc2b2ef0c2db660ea1170382619e68eb"],["D:/BLOG_QZL/Blog3/public/tags/凸包/index.html","0b13d807f5a0f23b2c4a84c50d3986bc"],["D:/BLOG_QZL/Blog3/public/tags/布尔逻辑和逻辑门/index.html","8a80a470b1c2e283756200fd71e7f9d6"],["D:/BLOG_QZL/Blog3/public/tags/计算几何/index.html","27af18375fdc191204150702d7867a5b"],["D:/BLOG_QZL/Blog3/public/tags/计算机科学速成课/index.html","d5d9260efd96168d907bed60f3f66d99"],["D:/BLOG_QZL/Blog3/public/学习笔记/index.html","7abc7126a6696183362a6e9e90a43030"]];
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







