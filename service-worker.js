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

var precacheConfig = [["D:/BLOG_QZL/Blog3/public/404.html","a5dbdf9bcfdfda352b68233089b1996b"],["D:/BLOG_QZL/Blog3/public/about/index.html","cad688a0b6071142e806e293315cddd5"],["D:/BLOG_QZL/Blog3/public/archives/138a.html","d41e37a6cdf5a9da5061b8fcc2d1f069"],["D:/BLOG_QZL/Blog3/public/archives/167c.html","82eaffb76e5b949ef4660f6d3231e2cf"],["D:/BLOG_QZL/Blog3/public/archives/173c.html","de9b13fe4f0be7d758b8d601e1933030"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/index.html","52e2110444a5669e102f8ca241601d62"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/page/2/index.html","46105880125fd3b8a820d8d5f6b81e80"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/page/3/index.html","f286d0c150dee40f36b571ee63ca1b3f"],["D:/BLOG_QZL/Blog3/public/archives/2020/index.html","fbf5425de403fe3ba060b056bcfff31a"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/2/index.html","d13656d26b27f8ed45c5f60af3393b5c"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/3/index.html","171a3b57931c4e99cd6100d72bb20d68"],["D:/BLOG_QZL/Blog3/public/archives/2d6f5e7f.html","e2ca061fc07e6aa6d1eb2a035dde3ba4"],["D:/BLOG_QZL/Blog3/public/archives/3478.html","0fa9c2dc88324a0e1de27c8205e97885"],["D:/BLOG_QZL/Blog3/public/archives/3b16.html","80fbf6fc8eae5435c311c58e697489c9"],["D:/BLOG_QZL/Blog3/public/archives/427485bf.html","18d687a59b579c06923591467992285f"],["D:/BLOG_QZL/Blog3/public/archives/460671de.html","1b010a1a9c4792c9b7e6b99730e7eec9"],["D:/BLOG_QZL/Blog3/public/archives/510d.html","e11733055f99913253a59fd877881747"],["D:/BLOG_QZL/Blog3/public/archives/514b.html","126c7452eb8b6e9bc6e240ef4bf1782b"],["D:/BLOG_QZL/Blog3/public/archives/622.html","94adefe66104f51d05ba7233a651a489"],["D:/BLOG_QZL/Blog3/public/archives/7c53.html","0c50ea810f69e034cc4638132c27ef13"],["D:/BLOG_QZL/Blog3/public/archives/7f7e.html","c441099e284f7bf9df4fc13ecf7fb1c8"],["D:/BLOG_QZL/Blog3/public/archives/87ef.html","8ce1b210c5bf6a502bf13ef9e059258b"],["D:/BLOG_QZL/Blog3/public/archives/9c7f.html","d486ebac2a4ba1cd94e3e7ce895c1f2c"],["D:/BLOG_QZL/Blog3/public/archives/ba04.html","030b6402e0e6e495d8dac2225bef5a70"],["D:/BLOG_QZL/Blog3/public/archives/d4fa.html","b04f403ae43db1c6e0acc19de0b55b61"],["D:/BLOG_QZL/Blog3/public/archives/d57d.html","225ae5e7c2e14db6e92ee5fa83457ab4"],["D:/BLOG_QZL/Blog3/public/archives/d84f.html","f1d0cf9594e404d11f7ce5ae0eee4cfe"],["D:/BLOG_QZL/Blog3/public/archives/f32f.html","e02907d6f1cb94e7686f7ea243b904a5"],["D:/BLOG_QZL/Blog3/public/archives/f957.html","c6bbe468b67028f8dd8350514bc6077c"],["D:/BLOG_QZL/Blog3/public/archives/index.html","4ff353018db748e2bd6b4ac7f3a81550"],["D:/BLOG_QZL/Blog3/public/archives/page/2/index.html","ddaa683e92cdbb1a3b946f60c5a60164"],["D:/BLOG_QZL/Blog3/public/archives/page/3/index.html","ddaa683e92cdbb1a3b946f60c5a60164"],["D:/BLOG_QZL/Blog3/public/categories/OJ/index.html","d5d55d65360a2f07316da5def6f4cb9a"],["D:/BLOG_QZL/Blog3/public/categories/index.html","91b6f0c2ac2c31d54dab65c4d396e356"],["D:/BLOG_QZL/Blog3/public/categories/博客搭建/index.html","a26723f1fbd8426de8825b184306fc89"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/index.html","049dfb4f46e415a7a5ec8e6fc4d8c7e1"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/page/2/index.html","e4d82ea98e2df87ebb4a70ddb4e54363"],["D:/BLOG_QZL/Blog3/public/comment/index.html","6e0f2a24880c1609806d7ddee0bb0189"],["D:/BLOG_QZL/Blog3/public/css/style.css","5d7ed2943af8942a895ef79e9317a240"],["D:/BLOG_QZL/Blog3/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["D:/BLOG_QZL/Blog3/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["D:/BLOG_QZL/Blog3/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["D:/BLOG_QZL/Blog3/public/friends/index.html","453f1fe6adb5fbe9251d976ca5bfc4ff"],["D:/BLOG_QZL/Blog3/public/img/2527f9e5ef6e97ad40d0cda072bf9455.jpg","e108ff1ddbc7b1edff65cb9ac5f8a96a"],["D:/BLOG_QZL/Blog3/public/img/algolia.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["D:/BLOG_QZL/Blog3/public/img/azure.svg","a7577e663c1e0fb788fed78d7457ff35"],["D:/BLOG_QZL/Blog3/public/img/baidu.svg","124ce00f2785724d84e32ab6403386a6"],["D:/BLOG_QZL/Blog3/public/img/concurrency/df9b300efaeade58758dbe19544b080e.png","93b8422b3654afb030ded4054a5f16e6"],["D:/BLOG_QZL/Blog3/public/img/favicon.gif","f905362284e3709da8cffa1247423f8a"],["D:/BLOG_QZL/Blog3/public/img/kafka/1567762579648.png","00052c8d326a14e75fa7345004e50ac0"],["D:/BLOG_QZL/Blog3/public/img/kafka/1570611450769.png","60ae4335d4bfebac31585a06e1aca3d0"],["D:/BLOG_QZL/Blog3/public/img/kafka/1570614069844.png","76a6ed7ea38b67723a6668a8723531bf"],["D:/BLOG_QZL/Blog3/public/img/kafka/1570618606027.png","f6040d7655ddae24bb0050493e7e0c6f"],["D:/BLOG_QZL/Blog3/public/img/kafka/1570618923749.png","0c8f32e1404c6f3b0d1879dc79a58e42"],["D:/BLOG_QZL/Blog3/public/img/kafka/1570618945713.png","9bc02885a9b3c5eda2037465b979602f"],["D:/BLOG_QZL/Blog3/public/img/kafka/3951011.png","c81914368f2b957fec030ec74b16eec4"],["D:/BLOG_QZL/Blog3/public/img/kafka/3951012.png","b766a97a52eba7287fac39386a744144"],["D:/BLOG_QZL/Blog3/public/img/kafka/3951013.png","17d68f15e959c3cc2ea0dd1b97d222ab"],["D:/BLOG_QZL/Blog3/public/img/kafka/3951014.png","48687c5b0541e3f4ad62d853551a11b7"],["D:/BLOG_QZL/Blog3/public/img/kafka/3951015.png","00a0e30150ec65bc31e9b87551afbe43"],["D:/BLOG_QZL/Blog3/public/img/kafka/3951016.png","6a3240593ae7099dfe5686df77a42e96"],["D:/BLOG_QZL/Blog3/public/img/kafka/kafka.jpg","b3f8b5af09ba061abfdb73c8bd18139b"],["D:/BLOG_QZL/Blog3/public/img/link/bokeyuan.png","ba529c73e5c5c70bdbc3b52710c5fd8d"],["D:/BLOG_QZL/Blog3/public/index.html","e79532e5455903be4c143ba759cf53ce"],["D:/BLOG_QZL/Blog3/public/js/app.js","a5d659af4b9d17196436c302e39ec916"],["D:/BLOG_QZL/Blog3/public/js/ergao.js","b1f566c49973d6fdab7ba0b372a4d17f"],["D:/BLOG_QZL/Blog3/public/js/love.js","88b75dcff60dd218bbb0db6cc37f3267"],["D:/BLOG_QZL/Blog3/public/js/search.js","63c61e56f228d83b544e21b4a7ed899c"],["D:/BLOG_QZL/Blog3/public/js/volantis.js","3c2fbf0d8e8c9ce1bbf88f0bf797b9ee"],["D:/BLOG_QZL/Blog3/public/mybook/index.html","d426fac1fdebbb58f2c4838dd7f77bc0"],["D:/BLOG_QZL/Blog3/public/page/2/index.html","0a7abbb63723880dc4f2c230ab1e0471"],["D:/BLOG_QZL/Blog3/public/page/3/index.html","32cfee4838dc9a7b2fb66df9b78979d4"],["D:/BLOG_QZL/Blog3/public/projects/index.html","e23a954d3ce0aa508ca56e6312f2e935"],["D:/BLOG_QZL/Blog3/public/tags/Hexo主题/index.html","094db36ec2eabc4f8916c11a0645b2cb"],["D:/BLOG_QZL/Blog3/public/tags/Let-s-Build-A-Simple-Interpreter/index.html","75522903f42d5e23197af06b074ef2e9"],["D:/BLOG_QZL/Blog3/public/tags/Let’s-Build-A-Simple-Interpreter/index.html","ee647d8526262379ceb664107fb1fff3"],["D:/BLOG_QZL/Blog3/public/tags/OJ/index.html","7f5b375df5525f86176aedd2e9627cdc"],["D:/BLOG_QZL/Blog3/public/tags/Yilia主题配置/index.html","3e372720da0a3ff327615aabba88b9fc"],["D:/BLOG_QZL/Blog3/public/tags/front-matter配置/index.html","0ff94e824c19818854687d414add8eda"],["D:/BLOG_QZL/Blog3/public/tags/index.html","42c978f66eb7aaa3977a71a4436e7d46"],["D:/BLOG_QZL/Blog3/public/tags/matery主题配置/index.html","6d0b44633cc1bfabe642b400dc61d20c"],["D:/BLOG_QZL/Blog3/public/tags/《计算几何》/index.html","b9f92298cebe9a1ce112bb33a05fcb2d"],["D:/BLOG_QZL/Blog3/public/tags/《计算机科学速成课》/index.html","ff47b0bbdc44dcd7b3535e7757b54cbf"],["D:/BLOG_QZL/Blog3/public/tags/凸包/index.html","a28c5a7f2fa5fcf4504c207b9bd3abca"],["D:/BLOG_QZL/Blog3/public/tags/布尔逻辑和逻辑门/index.html","d88216e79807c8adb20b3c90aac984d8"],["D:/BLOG_QZL/Blog3/public/tags/计算几何/index.html","240fb357b9d2998da0e64fb952074023"],["D:/BLOG_QZL/Blog3/public/tags/计算机科学速成课/index.html","bcae98e8ff611c9928110e0b444aed3e"],["D:/BLOG_QZL/Blog3/public/学习笔记/index.html","311684475c1ed18ce382d3dee066e809"]];
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







