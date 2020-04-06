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

var precacheConfig = [["D:/BLOG_QZL/Blog3/public/404.html","f8ca447a48d5d8f93a1c7c0bc775259b"],["D:/BLOG_QZL/Blog3/public/about/index.html","ffa5f7214f8af6086956992bcab3a9f0"],["D:/BLOG_QZL/Blog3/public/archives/138a.html","b3ad6f8b068c81a78a0785db5e4ccfad"],["D:/BLOG_QZL/Blog3/public/archives/167c.html","8d3c91d945c0882768f9476557a0f5b8"],["D:/BLOG_QZL/Blog3/public/archives/173c.html","197e90d4d283d26024d2a02d9d6cfb81"],["D:/BLOG_QZL/Blog3/public/archives/18085cf9.html","f8ed7696fe8edba408439a38e75c1e2e"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/index.html","f7e5015428c79f569a317a06f73733fd"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/page/2/index.html","0fb500fa2bad3b580e8cd1204555eb10"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/page/3/index.html","973ab1c8b67872f31b610c9587ca9580"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/page/4/index.html","6d6212eb9617712690a482758804f0fa"],["D:/BLOG_QZL/Blog3/public/archives/2020/04/index.html","59ef527d9176af5075a9f47b9bd92df9"],["D:/BLOG_QZL/Blog3/public/archives/2020/index.html","9d985aae6b6ff259a98d47d14e5625d3"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/2/index.html","910cdade585bbff5f6e2c0cfed35da29"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/3/index.html","ffcf2a61ea1d7345d67884e59118be0b"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/4/index.html","e0270a6d70fc28224d624a2cb9afa286"],["D:/BLOG_QZL/Blog3/public/archives/28c74e52.html","99e0a56337ba215a61113a1b5e528d2c"],["D:/BLOG_QZL/Blog3/public/archives/2f66ae56.html","16104df9909c81eec8948752c7747e0d"],["D:/BLOG_QZL/Blog3/public/archives/3478.html","c42ccccba618768f12e4788cb1f3d5dc"],["D:/BLOG_QZL/Blog3/public/archives/3ae1bc73.html","aedf925ed5e2f5794193e6d08b9ea2bc"],["D:/BLOG_QZL/Blog3/public/archives/3b16.html","c000a1ef4532dce7c32ef7ff1c46cfd2"],["D:/BLOG_QZL/Blog3/public/archives/427485bf.html","05c9761284012795d7da14fa806114c2"],["D:/BLOG_QZL/Blog3/public/archives/448ac7f1.html","fede8d6f8fa0cca1a5aeb4b0baf80147"],["D:/BLOG_QZL/Blog3/public/archives/460671de.html","f7b0b9b5262babfaca6277f80ef092c4"],["D:/BLOG_QZL/Blog3/public/archives/510d.html","a0ff154a23e6e83ec9ca6fa36ca024d4"],["D:/BLOG_QZL/Blog3/public/archives/514b.html","f183e49e83b877350b9a69cf1231575d"],["D:/BLOG_QZL/Blog3/public/archives/5a757a52.html","8cf876cbb298d37fe4384172f30d90ec"],["D:/BLOG_QZL/Blog3/public/archives/5fc07ec4.html","d74004b58b43857ddea3c1054aa76827"],["D:/BLOG_QZL/Blog3/public/archives/622.html","730a2c73becd2bd9dee538525b57559c"],["D:/BLOG_QZL/Blog3/public/archives/67343d3.html","d4cfb343afe131d66e968901671ad868"],["D:/BLOG_QZL/Blog3/public/archives/6fc94bb0.html","20806b761960b925228a1c198c2ceda7"],["D:/BLOG_QZL/Blog3/public/archives/7b67faab.html","bf1b02dbb8b8846bcd7494802d74ff45"],["D:/BLOG_QZL/Blog3/public/archives/7c53.html","e561cdb6d1edc7f95daa619500f1f678"],["D:/BLOG_QZL/Blog3/public/archives/7f7e.html","fdd5456ba6f936bf6e092d671e375ad1"],["D:/BLOG_QZL/Blog3/public/archives/8632918.html","b75a616ea6ea8ce6b42159413d7b3467"],["D:/BLOG_QZL/Blog3/public/archives/87ef.html","02013b78e27a2897992417c5154a5d69"],["D:/BLOG_QZL/Blog3/public/archives/9c7f.html","a3c88575d757f7e57c7241ee2ae8a6c1"],["D:/BLOG_QZL/Blog3/public/archives/9f0a1d82.html","e35c730dbf66371ad9d0f219872f4554"],["D:/BLOG_QZL/Blog3/public/archives/a0a78e77.html","7c57bc11177752ec8d587729ca7d1b65"],["D:/BLOG_QZL/Blog3/public/archives/ae12.html","867382ef20b4044c434c3ea88aa5bf2e"],["D:/BLOG_QZL/Blog3/public/archives/b6a3dbf1.html","9bbfab9a76475ffa85898bc5d9fce33b"],["D:/BLOG_QZL/Blog3/public/archives/ba04.html","2d780181cb7bbfd62e0187f563ec3473"],["D:/BLOG_QZL/Blog3/public/archives/bf113a1c.html","b4d2c5c37c66d5b39a5d25d061a8e1b0"],["D:/BLOG_QZL/Blog3/public/archives/c1a4eb67.html","a3dc7d1651273a72a1c521127f9206f3"],["D:/BLOG_QZL/Blog3/public/archives/d4fa.html","974f0a0a62d31a4fc7a539ae680c7a8e"],["D:/BLOG_QZL/Blog3/public/archives/d57d.html","d122a754edd6b58739361f041d24f121"],["D:/BLOG_QZL/Blog3/public/archives/d84f.html","cdf5548e126635ee53aacf9127bfe3d1"],["D:/BLOG_QZL/Blog3/public/archives/eaabd222.html","626d2362271ccdf0be900599d2eec20d"],["D:/BLOG_QZL/Blog3/public/archives/f32f.html","3eb6c0909737695011251b8432c4febf"],["D:/BLOG_QZL/Blog3/public/archives/f957.html","acf72f531ac2d6c218d426e8058c883a"],["D:/BLOG_QZL/Blog3/public/archives/index.html","a06be5be78c7b3128d343b09c0a11d3d"],["D:/BLOG_QZL/Blog3/public/archives/page/2/index.html","606676e05016a20c47b0f63ea72f6924"],["D:/BLOG_QZL/Blog3/public/archives/page/3/index.html","a06be5be78c7b3128d343b09c0a11d3d"],["D:/BLOG_QZL/Blog3/public/archives/page/4/index.html","a06be5be78c7b3128d343b09c0a11d3d"],["D:/BLOG_QZL/Blog3/public/categories/OJ/index.html","cf08161cf3ae1e0527a27d5d5a7486ca"],["D:/BLOG_QZL/Blog3/public/categories/hexo博客搭建/index.html","59f715295f819da3b4196171a4ab935d"],["D:/BLOG_QZL/Blog3/public/categories/index.html","8e8ad2e63feb3d0d0c26fe69ec229870"],["D:/BLOG_QZL/Blog3/public/categories/博客搭建/index.html","901bf4ce8bff9306875bf8575a1f7d02"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/C-C/index.html","5cefe2c76230bf64ca58c3834fba1491"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/Git/index.html","f904f46d2a82f513fc20389b7021b816"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/index.html","85039c49f9d4262ebfc741371d8af0e0"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/page/2/index.html","7d74f150ad51b5756a4320fc88a5b8d6"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/page/3/index.html","28a92b94dab14c325e95a100f87328f8"],["D:/BLOG_QZL/Blog3/public/categories/配置/index.html","2c3fd55b177fb5448d3f6a281627ed06"],["D:/BLOG_QZL/Blog3/public/comment/index.html","6a966b419bf293f43b212d7a582f738c"],["D:/BLOG_QZL/Blog3/public/css/style.css","c8fd7484eca1e8ec23112d2a6296def3"],["D:/BLOG_QZL/Blog3/public/easysearch/about/index.html","79b02e4972bb67e19b339791be509b94"],["D:/BLOG_QZL/Blog3/public/easysearch/index.html","fdf25bede0eef8b0074d489ea7c47f4d"],["D:/BLOG_QZL/Blog3/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["D:/BLOG_QZL/Blog3/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["D:/BLOG_QZL/Blog3/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["D:/BLOG_QZL/Blog3/public/friends/index.html","8b31fef3eecd6b0e03d944352c02fee4"],["D:/BLOG_QZL/Blog3/public/img/algolia.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["D:/BLOG_QZL/Blog3/public/img/azure.svg","a7577e663c1e0fb788fed78d7457ff35"],["D:/BLOG_QZL/Blog3/public/img/baidu.svg","124ce00f2785724d84e32ab6403386a6"],["D:/BLOG_QZL/Blog3/public/index.html","87c63053901a2135445c61e2ac509bb9"],["D:/BLOG_QZL/Blog3/public/js/app.js","a5d659af4b9d17196436c302e39ec916"],["D:/BLOG_QZL/Blog3/public/js/ergao.js","b1f566c49973d6fdab7ba0b372a4d17f"],["D:/BLOG_QZL/Blog3/public/js/love.js","88b75dcff60dd218bbb0db6cc37f3267"],["D:/BLOG_QZL/Blog3/public/js/search.js","63c61e56f228d83b544e21b4a7ed899c"],["D:/BLOG_QZL/Blog3/public/js/volantis.js","3c2fbf0d8e8c9ce1bbf88f0bf797b9ee"],["D:/BLOG_QZL/Blog3/public/page/2/index.html","a4fa821b9cc96c2de1a25d49c2c74a1c"],["D:/BLOG_QZL/Blog3/public/page/3/index.html","6e55eb9ea216b39969ab1ece2e5bbc81"],["D:/BLOG_QZL/Blog3/public/page/4/index.html","6913d4afe85bc8d856562ca3b1195e62"],["D:/BLOG_QZL/Blog3/public/projects/index.html","cf6ffa69c34d1df95f967b2ad916f9a7"],["D:/BLOG_QZL/Blog3/public/tags/C-C/index.html","6fd72d98cb07faac9b3798c2c4784ffa"],["D:/BLOG_QZL/Blog3/public/tags/C/index.html","5e5e4ee8f19cbbb7f5f3bc69cd8b9362"],["D:/BLOG_QZL/Blog3/public/tags/Git/index.html","1806b3e271fcbc22a84c87c2c971d011"],["D:/BLOG_QZL/Blog3/public/tags/Hexo主题/index.html","090a1e63c54c2f87b45c90982373da88"],["D:/BLOG_QZL/Blog3/public/tags/Let-s-Build-A-Simple-Interpreter/index.html","959126c9e36f255057266ddc3e9bec4b"],["D:/BLOG_QZL/Blog3/public/tags/Let’s-Build-A-Simple-Interpreter/index.html","390d5c182bbe10a9b92b14ee552698eb"],["D:/BLOG_QZL/Blog3/public/tags/OJ/index.html","a33212694b62c09415ea4d56151a185d"],["D:/BLOG_QZL/Blog3/public/tags/Yilia主题配置/index.html","51e7da0b5f2724f9c954e130d290aecb"],["D:/BLOG_QZL/Blog3/public/tags/forme/index.html","73013b31e027fd40f0ca50896232284b"],["D:/BLOG_QZL/Blog3/public/tags/front-matter配置/index.html","ff0f9b505053e5383bfea13feeb9eb83"],["D:/BLOG_QZL/Blog3/public/tags/hexo显示pdf/index.html","9be58e552b69505bd8e7c51aabb65d85"],["D:/BLOG_QZL/Blog3/public/tags/index.html","a722f1ce8d2aa9d35d5c2fdf2deacbd4"],["D:/BLOG_QZL/Blog3/public/tags/matery主题配置/index.html","33afca0d592a803f9a1a985e74ab71c4"],["D:/BLOG_QZL/Blog3/public/tags/opencv/index.html","0383f5fa23585c2e586baa01c2ea6d07"],["D:/BLOG_QZL/Blog3/public/tags/《计算机科学速成课》/index.html","2392f80cfbc5470762487068be9c871e"],["D:/BLOG_QZL/Blog3/public/tags/凸包/index.html","140bdd7f0208979e3c0cb90c87297119"],["D:/BLOG_QZL/Blog3/public/tags/布尔逻辑和逻辑门/index.html","f05702e5d02c284dc58b0e4d361cfc47"],["D:/BLOG_QZL/Blog3/public/tags/计算几何/index.html","b7fe45cfee571c3c69360580ddb04175"],["D:/BLOG_QZL/Blog3/public/tags/计算机科学速成课/index.html","8202877693b1cbf96a9d51da780c5673"],["D:/BLOG_QZL/Blog3/public/学习笔记/index.html","943ff48fe2ba3f8570aa90bed837665b"]];
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







