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

var precacheConfig = [["D:/BLOG_QZL/Blog3/public/404.html","29afc9a51750f47c2dcc8fa882a5ad8a"],["D:/BLOG_QZL/Blog3/public/about/index.html","697ebf395f950bd54e075f937b307f00"],["D:/BLOG_QZL/Blog3/public/archives/138a.html","13577abeac6d1669b443acecf462af08"],["D:/BLOG_QZL/Blog3/public/archives/167c.html","29144f34d14cf007fd4e0e77ddf5fe00"],["D:/BLOG_QZL/Blog3/public/archives/173c.html","f6ffcb090420e4f9f8a5ec2514dfa425"],["D:/BLOG_QZL/Blog3/public/archives/18085cf9.html","7c86511784c85a6be483fcb16409451e"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/index.html","c51dc30ff8ec9c1cf82072930d4f620d"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/page/2/index.html","c7571c95f7fb3e859f4bd9d09778d794"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/page/3/index.html","d6b9458dec19d52ab18395b2f6625023"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/page/4/index.html","59bf04ab56dd9b132b54f2eb343bd4ae"],["D:/BLOG_QZL/Blog3/public/archives/2020/04/index.html","62cf68ce034ea74f57cd78348e66e7e0"],["D:/BLOG_QZL/Blog3/public/archives/2020/04/page/2/index.html","1d5a6dd7b05a3b4f6997eac855ff7011"],["D:/BLOG_QZL/Blog3/public/archives/2020/index.html","a1d29977faf38237bbd283e5412ac51f"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/2/index.html","1e1398526cf0c4e97d28dd2ac2365bde"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/3/index.html","e97e9fd53b1718ea0cfed9a277bebc71"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/4/index.html","6869209ba72f13ca260435388ff6c3a1"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/5/index.html","ea1ec1dd1f164e136f5841f378d75f6c"],["D:/BLOG_QZL/Blog3/public/archives/260c7660.html","2cec49a68ce355e02a6d6918515dbc41"],["D:/BLOG_QZL/Blog3/public/archives/28c74e52.html","bc7233e6bd31e62c8d573766eb455ecf"],["D:/BLOG_QZL/Blog3/public/archives/2f66ae56.html","3c46de5a40442a93b604c16f4a8c0051"],["D:/BLOG_QZL/Blog3/public/archives/2faa8a4b.html","4e9d175102ae33e1cbe041a0bb3751fd"],["D:/BLOG_QZL/Blog3/public/archives/3478.html","c0c38921d21969aa85810b9e42326d02"],["D:/BLOG_QZL/Blog3/public/archives/3ae1bc73.html","0d6c01102dea79656e50671e54db18fa"],["D:/BLOG_QZL/Blog3/public/archives/3b16.html","0a0fee9a8bf381132e3890e8df7c4db1"],["D:/BLOG_QZL/Blog3/public/archives/426514b1.html","8c7de119d0cf002474a7352ccf37ef5e"],["D:/BLOG_QZL/Blog3/public/archives/427485bf.html","2a8d433b695e34c4d9ccc57f6ef2ff5e"],["D:/BLOG_QZL/Blog3/public/archives/448ac7f1.html","47ea0b629d8f20488a9d5f924fb43411"],["D:/BLOG_QZL/Blog3/public/archives/460671de.html","776251c08414c7e58b998a970628fd75"],["D:/BLOG_QZL/Blog3/public/archives/510d.html","299d7aef591d592eeaacafff8c356809"],["D:/BLOG_QZL/Blog3/public/archives/514b.html","09fbd1fd97390d0e5f6bb773e57d5f13"],["D:/BLOG_QZL/Blog3/public/archives/5a757a52.html","8244c90b29d033763cdb7e0349ba748b"],["D:/BLOG_QZL/Blog3/public/archives/5fc07ec4.html","a1fe3dace6f0f7475fdfcb6ae42b6116"],["D:/BLOG_QZL/Blog3/public/archives/622.html","938243073416be21825d25272fe90999"],["D:/BLOG_QZL/Blog3/public/archives/67343d3.html","529c6b656340c3894e2c3f660327bd96"],["D:/BLOG_QZL/Blog3/public/archives/6de95ae.html","c8e88e2c64b3a8e7aaa3cc719ddf5870"],["D:/BLOG_QZL/Blog3/public/archives/6fc94bb0.html","1eefa0afe0dab5be013ef3e59c394455"],["D:/BLOG_QZL/Blog3/public/archives/7a585be8.html","867aac4b0e8e32a028ea861da9355600"],["D:/BLOG_QZL/Blog3/public/archives/7b67faab.html","30188fde61bbcaeb3893d1f5ec03de1c"],["D:/BLOG_QZL/Blog3/public/archives/7c53.html","13c20b183ceaee5d457b8d3e3cb2c2ba"],["D:/BLOG_QZL/Blog3/public/archives/7f7e.html","b345bfbf670f06ec1148c31833054413"],["D:/BLOG_QZL/Blog3/public/archives/8632918.html","4aec34f776ee9e4e964f6998ad491d0a"],["D:/BLOG_QZL/Blog3/public/archives/87ef.html","529fe44dae2b2848a85678cd54240687"],["D:/BLOG_QZL/Blog3/public/archives/9c7f.html","7e03ac8aeba60cf8aa7da63aa2d6d55d"],["D:/BLOG_QZL/Blog3/public/archives/9f7a1269.html","cf2e863a967567104b901895b9df9c38"],["D:/BLOG_QZL/Blog3/public/archives/a0a78e77.html","08e36912c3d5d5adbb32cab35c895039"],["D:/BLOG_QZL/Blog3/public/archives/ae12.html","499b3f7c41afd20f3d6f4bb824bf98c2"],["D:/BLOG_QZL/Blog3/public/archives/b6a3dbf1.html","d11858a33f2732f24e70b3461708b834"],["D:/BLOG_QZL/Blog3/public/archives/ba04.html","119d15e5c9204d6c97ac443c4dc7949b"],["D:/BLOG_QZL/Blog3/public/archives/bf113a1c.html","fcb222bc914a3453ac6e951bfba03262"],["D:/BLOG_QZL/Blog3/public/archives/c1a4eb67.html","c61029fccd4656cf7ba9ff119b0b5c78"],["D:/BLOG_QZL/Blog3/public/archives/c812a74c.html","aa64186a6bdc87e091c3feee19285170"],["D:/BLOG_QZL/Blog3/public/archives/d4fa.html","86f29d9629f8598cfaf077007c1b21b8"],["D:/BLOG_QZL/Blog3/public/archives/d57d.html","d8f57f2820f2a521170fc9af0de52dc6"],["D:/BLOG_QZL/Blog3/public/archives/d84f.html","875409375614222f9388218a90ed0a13"],["D:/BLOG_QZL/Blog3/public/archives/eaabd222.html","53cf41c9a0d88314bfbc1b4ca9240a3b"],["D:/BLOG_QZL/Blog3/public/archives/f32f.html","18368ea51129d64844bca170256f8f9e"],["D:/BLOG_QZL/Blog3/public/archives/f957.html","62ae54b044dca193a5c5826616ee4fa7"],["D:/BLOG_QZL/Blog3/public/archives/index.html","7b00b01586777fc654446f03a41e7776"],["D:/BLOG_QZL/Blog3/public/archives/page/2/index.html","7b00b01586777fc654446f03a41e7776"],["D:/BLOG_QZL/Blog3/public/archives/page/3/index.html","7b00b01586777fc654446f03a41e7776"],["D:/BLOG_QZL/Blog3/public/archives/page/4/index.html","7b00b01586777fc654446f03a41e7776"],["D:/BLOG_QZL/Blog3/public/archives/page/5/index.html","7b00b01586777fc654446f03a41e7776"],["D:/BLOG_QZL/Blog3/public/categories/OJ/index.html","120f78c7ff225728b01802ebe64d37a7"],["D:/BLOG_QZL/Blog3/public/categories/hexo博客搭建/index.html","501e79253c18b6a543f7c54b86c81a99"],["D:/BLOG_QZL/Blog3/public/categories/index.html","e39cf1ed4d02de2105d052a272f5c577"],["D:/BLOG_QZL/Blog3/public/categories/博客搭建/index.html","d9e5797bfad6c6a322824189d7b8428e"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/C-C/index.html","82c1f55ac27de292ce6a756520bde3a4"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/C-C/page/2/index.html","00b18736a44cbaf8f902c3c5a8074f08"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/Git/index.html","1e4a17fbb292a571afbbf20ff5f04d7a"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/index.html","0fd309f9c05a8d11194db06e83d70734"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/linux/index.html","eba19a7a50db6846561520a5b6a55bf4"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/page/2/index.html","c54c7bc24af14b7bc5283dbba2bfad19"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/page/3/index.html","6b6bbb63f496425f15023798a5c7e52c"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/page/4/index.html","6ff91e35de99dda0be627de290db8313"],["D:/BLOG_QZL/Blog3/public/categories/实用技巧/index.html","1d57238374cb1aae0c6fc4d2148d7560"],["D:/BLOG_QZL/Blog3/public/categories/配置/index.html","15d236de6e34ce20feb42cb8507a4b06"],["D:/BLOG_QZL/Blog3/public/comment/index.html","698025feba7e117fb62a055924153be8"],["D:/BLOG_QZL/Blog3/public/css/style.css","c8fd7484eca1e8ec23112d2a6296def3"],["D:/BLOG_QZL/Blog3/public/easysearch/about/index.html","2a3e825b37de430dadda2331dcc4530c"],["D:/BLOG_QZL/Blog3/public/easysearch/index.html","71cce6959e05beb136017abf41e48c1f"],["D:/BLOG_QZL/Blog3/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["D:/BLOG_QZL/Blog3/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["D:/BLOG_QZL/Blog3/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["D:/BLOG_QZL/Blog3/public/friends/index.html","d3efc32a7978fdcf616d5c3f59b0c616"],["D:/BLOG_QZL/Blog3/public/img/algolia.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["D:/BLOG_QZL/Blog3/public/img/azure.svg","a7577e663c1e0fb788fed78d7457ff35"],["D:/BLOG_QZL/Blog3/public/img/baidu.svg","124ce00f2785724d84e32ab6403386a6"],["D:/BLOG_QZL/Blog3/public/index.html","86499edc0557067e76c8a0bd48c19ab8"],["D:/BLOG_QZL/Blog3/public/js/app.js","a5d659af4b9d17196436c302e39ec916"],["D:/BLOG_QZL/Blog3/public/js/ergao.js","b1f566c49973d6fdab7ba0b372a4d17f"],["D:/BLOG_QZL/Blog3/public/js/love.js","88b75dcff60dd218bbb0db6cc37f3267"],["D:/BLOG_QZL/Blog3/public/js/search.js","63c61e56f228d83b544e21b4a7ed899c"],["D:/BLOG_QZL/Blog3/public/js/volantis.js","3c2fbf0d8e8c9ce1bbf88f0bf797b9ee"],["D:/BLOG_QZL/Blog3/public/page/2/index.html","242a9796b86cb999d355a831ed4463c7"],["D:/BLOG_QZL/Blog3/public/page/3/index.html","cc5c18b0f15794dc0d3cf51815f4dc70"],["D:/BLOG_QZL/Blog3/public/page/4/index.html","5abd9bcad31ae8b7e25805d91fab7930"],["D:/BLOG_QZL/Blog3/public/page/5/index.html","d5018f06ab6768f1bfd4ef17ac854684"],["D:/BLOG_QZL/Blog3/public/projects/index.html","d2d466980029f2c883618d576a234acf"],["D:/BLOG_QZL/Blog3/public/tags/C-C/index.html","61add2c649cf669a2651e823bf9da08d"],["D:/BLOG_QZL/Blog3/public/tags/C/index.html","7849404bb43a0b03b818b652dd0c9946"],["D:/BLOG_QZL/Blog3/public/tags/Git/index.html","dfa69f752c4f0131f96073f0b48f611c"],["D:/BLOG_QZL/Blog3/public/tags/Hexo主题/index.html","33aea4a558fdab6a24ebfc7d9dd6f584"],["D:/BLOG_QZL/Blog3/public/tags/Let-s-Build-A-Simple-Interpreter/index.html","42f9c835dedaca8dc89244de03480c5f"],["D:/BLOG_QZL/Blog3/public/tags/Let’s-Build-A-Simple-Interpreter/index.html","89f3eba7647ca1df2a745d83708954c6"],["D:/BLOG_QZL/Blog3/public/tags/OJ/index.html","beef6d60de719652f1092ebfd9aa4cbf"],["D:/BLOG_QZL/Blog3/public/tags/Yilia主题配置/index.html","e42b19edac124023ceb9c215ed10971c"],["D:/BLOG_QZL/Blog3/public/tags/forme/index.html","1c6c5439fd58df4833bf147d96699f25"],["D:/BLOG_QZL/Blog3/public/tags/front-matter配置/index.html","47be2f729b76e21663d268687a1140e0"],["D:/BLOG_QZL/Blog3/public/tags/github/index.html","069ed47d0d2c4cd805387984afb6d344"],["D:/BLOG_QZL/Blog3/public/tags/hexo显示pdf/index.html","50b1d18c5d3f72d6d611bd19c43e20d9"],["D:/BLOG_QZL/Blog3/public/tags/index.html","00428ee4594261ea007a30fa503288b1"],["D:/BLOG_QZL/Blog3/public/tags/linux/index.html","6018a363c60847ce39117a340b51664d"],["D:/BLOG_QZL/Blog3/public/tags/matery主题配置/index.html","340b8cb6e5ae1f9ac322c09ff5439e2f"],["D:/BLOG_QZL/Blog3/public/tags/《计算机科学速成课》/index.html","852d69a38c038d8b913a2066c977587f"],["D:/BLOG_QZL/Blog3/public/tags/凸包/index.html","1382d531189072416282146da3ad2dcd"],["D:/BLOG_QZL/Blog3/public/tags/布尔逻辑和逻辑门/index.html","7098b4e9c75817e99f1452b03dc19bda"],["D:/BLOG_QZL/Blog3/public/tags/计算几何/index.html","c4836fbfb628b80e785bea1439d6a34f"],["D:/BLOG_QZL/Blog3/public/tags/计算机科学速成课/index.html","38a1ddbc0988b397211a9f6514e9dc44"],["D:/BLOG_QZL/Blog3/public/tags/配置/index.html","6071539f41e999623a62acfba5c6a470"],["D:/BLOG_QZL/Blog3/public/学习笔记/index.html","e8d9fe22067e78818b1741fe31740c4d"]];
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







