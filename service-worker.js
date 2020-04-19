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

var precacheConfig = [["D:/BLOG_QZL/Blog3/public/404.html","29afc9a51750f47c2dcc8fa882a5ad8a"],["D:/BLOG_QZL/Blog3/public/about/index.html","697ebf395f950bd54e075f937b307f00"],["D:/BLOG_QZL/Blog3/public/archives/138a.html","13577abeac6d1669b443acecf462af08"],["D:/BLOG_QZL/Blog3/public/archives/167c.html","29144f34d14cf007fd4e0e77ddf5fe00"],["D:/BLOG_QZL/Blog3/public/archives/173c.html","f6ffcb090420e4f9f8a5ec2514dfa425"],["D:/BLOG_QZL/Blog3/public/archives/18085cf9.html","7c86511784c85a6be483fcb16409451e"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/index.html","5d18fce08f718c0bd163020dac1d4331"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/page/2/index.html","8276e90328cb914f57d8ef256f138004"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/page/3/index.html","ea7d9d083ba4baee85590987cfa4c834"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/page/4/index.html","59bf04ab56dd9b132b54f2eb343bd4ae"],["D:/BLOG_QZL/Blog3/public/archives/2020/04/index.html","94df4e01803e544987d8a0ad7528c2a2"],["D:/BLOG_QZL/Blog3/public/archives/2020/04/page/2/index.html","de3fafcc2bb634bab983c7c95d57e907"],["D:/BLOG_QZL/Blog3/public/archives/2020/index.html","0b70085364709a21cce8cb16c08a9007"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/2/index.html","69782cc1d91842364bf01bba11826198"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/3/index.html","03f561e5286273e660bc8a718df6daa8"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/4/index.html","3fcafe825ee586602feec4d24a98f60a"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/5/index.html","ea1ec1dd1f164e136f5841f378d75f6c"],["D:/BLOG_QZL/Blog3/public/archives/260c7660.html","e837d23994b87baaac0bbd24aaf8021c"],["D:/BLOG_QZL/Blog3/public/archives/28c74e52.html","9748ea8cfac570e94fc2fe39aacdf842"],["D:/BLOG_QZL/Blog3/public/archives/2f66ae56.html","3aad8b5901a0266526b6921990d533dc"],["D:/BLOG_QZL/Blog3/public/archives/2faa8a4b.html","f66c9028e2e665ad77d067ec6557bd5b"],["D:/BLOG_QZL/Blog3/public/archives/3478.html","c0c38921d21969aa85810b9e42326d02"],["D:/BLOG_QZL/Blog3/public/archives/3ae1bc73.html","0d6c01102dea79656e50671e54db18fa"],["D:/BLOG_QZL/Blog3/public/archives/3b16.html","0a0fee9a8bf381132e3890e8df7c4db1"],["D:/BLOG_QZL/Blog3/public/archives/426514b1.html","96bd7dc446b3539041527dbaa9c3c43a"],["D:/BLOG_QZL/Blog3/public/archives/427485bf.html","1495aa31820c746e93965e636c81027a"],["D:/BLOG_QZL/Blog3/public/archives/448ac7f1.html","04ea24855b597a90f7b1aca0ee0721aa"],["D:/BLOG_QZL/Blog3/public/archives/460671de.html","776251c08414c7e58b998a970628fd75"],["D:/BLOG_QZL/Blog3/public/archives/510d.html","299d7aef591d592eeaacafff8c356809"],["D:/BLOG_QZL/Blog3/public/archives/514b.html","09fbd1fd97390d0e5f6bb773e57d5f13"],["D:/BLOG_QZL/Blog3/public/archives/5a757a52.html","8244c90b29d033763cdb7e0349ba748b"],["D:/BLOG_QZL/Blog3/public/archives/5fc07ec4.html","271fed133dc89a70d4cd571ff2cf51a4"],["D:/BLOG_QZL/Blog3/public/archives/622.html","938243073416be21825d25272fe90999"],["D:/BLOG_QZL/Blog3/public/archives/67343d3.html","d09183259bdc24fc8eadb4fa84bc1f1d"],["D:/BLOG_QZL/Blog3/public/archives/6de95ae.html","486b834ceef24fea312d123bc24ec169"],["D:/BLOG_QZL/Blog3/public/archives/6fc94bb0.html","d3a94fb8272577dd3c099536be250a3e"],["D:/BLOG_QZL/Blog3/public/archives/7a585be8.html","7f5f1ead54f7163a7754974f01e19d6f"],["D:/BLOG_QZL/Blog3/public/archives/7b67faab.html","30188fde61bbcaeb3893d1f5ec03de1c"],["D:/BLOG_QZL/Blog3/public/archives/7c53.html","13c20b183ceaee5d457b8d3e3cb2c2ba"],["D:/BLOG_QZL/Blog3/public/archives/7f7e.html","b345bfbf670f06ec1148c31833054413"],["D:/BLOG_QZL/Blog3/public/archives/8632918.html","ca800dd6dc6a018de3448d6472d0d3d9"],["D:/BLOG_QZL/Blog3/public/archives/87ef.html","529fe44dae2b2848a85678cd54240687"],["D:/BLOG_QZL/Blog3/public/archives/9c7f.html","7e03ac8aeba60cf8aa7da63aa2d6d55d"],["D:/BLOG_QZL/Blog3/public/archives/9f7a1269.html","4400fed100f12bc1f1bdfe3716d4bcbb"],["D:/BLOG_QZL/Blog3/public/archives/a0a78e77.html","061e204bf73af21cab99dae86f3fada1"],["D:/BLOG_QZL/Blog3/public/archives/ae12.html","499b3f7c41afd20f3d6f4bb824bf98c2"],["D:/BLOG_QZL/Blog3/public/archives/b6a3dbf1.html","6536a63aee8b29585a744ec97182b267"],["D:/BLOG_QZL/Blog3/public/archives/ba04.html","119d15e5c9204d6c97ac443c4dc7949b"],["D:/BLOG_QZL/Blog3/public/archives/bf113a1c.html","3a9dcd11e4147a4db0941e3552d5ee04"],["D:/BLOG_QZL/Blog3/public/archives/c1a4eb67.html","c028b5efd8e3d109c43c968636d216fd"],["D:/BLOG_QZL/Blog3/public/archives/c812a74c.html","e4687909f187a6ff3b6326a91fde9573"],["D:/BLOG_QZL/Blog3/public/archives/d4fa.html","86f29d9629f8598cfaf077007c1b21b8"],["D:/BLOG_QZL/Blog3/public/archives/d57d.html","d8f57f2820f2a521170fc9af0de52dc6"],["D:/BLOG_QZL/Blog3/public/archives/d84f.html","875409375614222f9388218a90ed0a13"],["D:/BLOG_QZL/Blog3/public/archives/eaabd222.html","70d2da2a56324d5b547ccdf1f3c2132d"],["D:/BLOG_QZL/Blog3/public/archives/f32f.html","18368ea51129d64844bca170256f8f9e"],["D:/BLOG_QZL/Blog3/public/archives/f957.html","62ae54b044dca193a5c5826616ee4fa7"],["D:/BLOG_QZL/Blog3/public/archives/index.html","7b00b01586777fc654446f03a41e7776"],["D:/BLOG_QZL/Blog3/public/archives/page/2/index.html","7b00b01586777fc654446f03a41e7776"],["D:/BLOG_QZL/Blog3/public/archives/page/3/index.html","7b00b01586777fc654446f03a41e7776"],["D:/BLOG_QZL/Blog3/public/archives/page/4/index.html","7b00b01586777fc654446f03a41e7776"],["D:/BLOG_QZL/Blog3/public/archives/page/5/index.html","7b00b01586777fc654446f03a41e7776"],["D:/BLOG_QZL/Blog3/public/categories/OJ/index.html","120f78c7ff225728b01802ebe64d37a7"],["D:/BLOG_QZL/Blog3/public/categories/hexo博客搭建/index.html","d1ad728f1498d7e5ac4f95975332f256"],["D:/BLOG_QZL/Blog3/public/categories/index.html","e39cf1ed4d02de2105d052a272f5c577"],["D:/BLOG_QZL/Blog3/public/categories/博客搭建/index.html","d9e5797bfad6c6a322824189d7b8428e"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/C-C/index.html","d84cb31e042a8b8b25a370f8bad39af0"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/C-C/page/2/index.html","8389e8c530a8c739f713fdb19f125027"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/Git/index.html","1e4a17fbb292a571afbbf20ff5f04d7a"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/index.html","89a8f6420d529a3b9ebcbf6143d13b56"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/linux/index.html","baa37a6b0dbef6d2768dabe1a0998382"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/page/2/index.html","ebd47adeede6290c4d1994d581027fdd"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/page/3/index.html","6b6bbb63f496425f15023798a5c7e52c"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/page/4/index.html","46b2c043ac3ecf18136addb3892507b1"],["D:/BLOG_QZL/Blog3/public/categories/实用技巧/index.html","787ab2dd04462d61fcbaf0d9e45cc279"],["D:/BLOG_QZL/Blog3/public/categories/配置/index.html","324732e443745a827b44ede9c5424164"],["D:/BLOG_QZL/Blog3/public/comment/index.html","698025feba7e117fb62a055924153be8"],["D:/BLOG_QZL/Blog3/public/css/style.css","c8fd7484eca1e8ec23112d2a6296def3"],["D:/BLOG_QZL/Blog3/public/easysearch/about/index.html","79b02e4972bb67e19b339791be509b94"],["D:/BLOG_QZL/Blog3/public/easysearch/index.html","fdf25bede0eef8b0074d489ea7c47f4d"],["D:/BLOG_QZL/Blog3/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["D:/BLOG_QZL/Blog3/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["D:/BLOG_QZL/Blog3/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["D:/BLOG_QZL/Blog3/public/friends/index.html","cc5fd72c36485a14ba4eaf79d8cb19d4"],["D:/BLOG_QZL/Blog3/public/img/algolia.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["D:/BLOG_QZL/Blog3/public/img/azure.svg","a7577e663c1e0fb788fed78d7457ff35"],["D:/BLOG_QZL/Blog3/public/img/baidu.svg","124ce00f2785724d84e32ab6403386a6"],["D:/BLOG_QZL/Blog3/public/index.html","3767e9abfbbe0838a05d1a8b8015883c"],["D:/BLOG_QZL/Blog3/public/js/app.js","a5d659af4b9d17196436c302e39ec916"],["D:/BLOG_QZL/Blog3/public/js/ergao.js","b1f566c49973d6fdab7ba0b372a4d17f"],["D:/BLOG_QZL/Blog3/public/js/love.js","88b75dcff60dd218bbb0db6cc37f3267"],["D:/BLOG_QZL/Blog3/public/js/search.js","63c61e56f228d83b544e21b4a7ed899c"],["D:/BLOG_QZL/Blog3/public/js/volantis.js","3c2fbf0d8e8c9ce1bbf88f0bf797b9ee"],["D:/BLOG_QZL/Blog3/public/page/2/index.html","39e74d2ca798f711e87128b5a61ceba3"],["D:/BLOG_QZL/Blog3/public/page/3/index.html","91fd5c72b519395319aad958a40b6302"],["D:/BLOG_QZL/Blog3/public/page/4/index.html","dc12da864883e3e4d14aa8f3f7321db6"],["D:/BLOG_QZL/Blog3/public/page/5/index.html","d5018f06ab6768f1bfd4ef17ac854684"],["D:/BLOG_QZL/Blog3/public/projects/index.html","d2d466980029f2c883618d576a234acf"],["D:/BLOG_QZL/Blog3/public/tags/C-C/index.html","99113360e98e8f7fce434b3f8418ce00"],["D:/BLOG_QZL/Blog3/public/tags/C/index.html","ee4f679b3db0b817676a297f98a14c5f"],["D:/BLOG_QZL/Blog3/public/tags/Git/index.html","dfa69f752c4f0131f96073f0b48f611c"],["D:/BLOG_QZL/Blog3/public/tags/Hexo主题/index.html","33aea4a558fdab6a24ebfc7d9dd6f584"],["D:/BLOG_QZL/Blog3/public/tags/Let-s-Build-A-Simple-Interpreter/index.html","e75f7d9012c358e793f37e04c34cd32f"],["D:/BLOG_QZL/Blog3/public/tags/Let’s-Build-A-Simple-Interpreter/index.html","5cb99a2951ad0dc65f507cb517fc4797"],["D:/BLOG_QZL/Blog3/public/tags/OJ/index.html","beef6d60de719652f1092ebfd9aa4cbf"],["D:/BLOG_QZL/Blog3/public/tags/Yilia主题配置/index.html","e42b19edac124023ceb9c215ed10971c"],["D:/BLOG_QZL/Blog3/public/tags/forme/index.html","3051cb106d29f25ac7523b7575b81c5a"],["D:/BLOG_QZL/Blog3/public/tags/front-matter配置/index.html","47be2f729b76e21663d268687a1140e0"],["D:/BLOG_QZL/Blog3/public/tags/github/index.html","205b21f80b8c95da7e443554c07027db"],["D:/BLOG_QZL/Blog3/public/tags/hexo显示pdf/index.html","020d9f6c55b7f9b9a0c699f12269e957"],["D:/BLOG_QZL/Blog3/public/tags/index.html","00428ee4594261ea007a30fa503288b1"],["D:/BLOG_QZL/Blog3/public/tags/linux/index.html","b25f9f8f66daf41cd336eb5e3c444b95"],["D:/BLOG_QZL/Blog3/public/tags/matery主题配置/index.html","340b8cb6e5ae1f9ac322c09ff5439e2f"],["D:/BLOG_QZL/Blog3/public/tags/《计算机科学速成课》/index.html","852d69a38c038d8b913a2066c977587f"],["D:/BLOG_QZL/Blog3/public/tags/凸包/index.html","a06b5e1df12428611297f8f79343b830"],["D:/BLOG_QZL/Blog3/public/tags/布尔逻辑和逻辑门/index.html","7098b4e9c75817e99f1452b03dc19bda"],["D:/BLOG_QZL/Blog3/public/tags/计算几何/index.html","c4836fbfb628b80e785bea1439d6a34f"],["D:/BLOG_QZL/Blog3/public/tags/计算机科学速成课/index.html","38a1ddbc0988b397211a9f6514e9dc44"],["D:/BLOG_QZL/Blog3/public/tags/配置/index.html","e5c67d5e80c10a911baa5efe798b0019"],["D:/BLOG_QZL/Blog3/public/学习笔记/index.html","ecdeafc0a96dca82be844b304e454065"]];
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







