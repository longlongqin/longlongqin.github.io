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

var precacheConfig = [["D:/BLOG_QZL/Blog3/public/404.html","cf2c8a769779035cfcb30756ea594760"],["D:/BLOG_QZL/Blog3/public/about/index.html","6a4b491b70cadfc86ca3fbd15aabface"],["D:/BLOG_QZL/Blog3/public/archives/122ff534.html","7bf630d46e3827fd5326520e61ed2cfa"],["D:/BLOG_QZL/Blog3/public/archives/138a.html","a0cddeeb4f2571b7a5884475eef0feda"],["D:/BLOG_QZL/Blog3/public/archives/13ba6384.html","aa3f28772157b8ae5238a3f6f19cf5cf"],["D:/BLOG_QZL/Blog3/public/archives/167c.html","7801663765a9de5f98ab2e14dd3bbf3a"],["D:/BLOG_QZL/Blog3/public/archives/173c.html","e2f113f490f0b86f6e438b78d11ceaa2"],["D:/BLOG_QZL/Blog3/public/archives/18085cf9.html","d296d166a105b3166b95962103db43ef"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/index.html","fd5a2c2416ca312e1c9881e6e41eabc5"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/page/2/index.html","e9ef534bd86d0c074a40d0d9500d59d3"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/page/3/index.html","486c7ec9f3c0ccfbb49e108adbb73fe6"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/page/4/index.html","58303b1771a8ec0bff64e16fd79c8cb2"],["D:/BLOG_QZL/Blog3/public/archives/2020/04/index.html","76f3b72166813d28c15d81f25593a249"],["D:/BLOG_QZL/Blog3/public/archives/2020/04/page/2/index.html","74a3b70456007dfbbb3771e7e19723c5"],["D:/BLOG_QZL/Blog3/public/archives/2020/05/index.html","1eacc4d5032a32e85cad9533c80181ee"],["D:/BLOG_QZL/Blog3/public/archives/2020/index.html","7caeb921f1aea1c0ca051bd78ca4ce91"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/2/index.html","ef76e8aa5dc46c1ba88f9c28cd5dfe1a"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/3/index.html","9db29a8f75ee563e9ac0352dc5d83541"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/4/index.html","7f78ef2e3212e48ebfc671f4feae3558"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/5/index.html","4b7eeeb7d92afb0bd67bb2e512ee476d"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/6/index.html","aaf9b22b854d8c7d89f45ee41eb263f4"],["D:/BLOG_QZL/Blog3/public/archives/21aba888.html","bcac30e80fd3f112a7b84bb162c10cb1"],["D:/BLOG_QZL/Blog3/public/archives/260c7660.html","cff9f9acf31faf9d1237769be07eca44"],["D:/BLOG_QZL/Blog3/public/archives/28c74e52.html","8d65b84debf54ec62e593553d0da29b0"],["D:/BLOG_QZL/Blog3/public/archives/2f66ae56.html","0a65a240b6ba8f90dd0b9ab19edd83ba"],["D:/BLOG_QZL/Blog3/public/archives/2faa8a4b.html","fc38d3bfab44d4c068f8484a63ab84fb"],["D:/BLOG_QZL/Blog3/public/archives/3478.html","42496abc2aeedd22024645c7902ba87b"],["D:/BLOG_QZL/Blog3/public/archives/3ae1bc73.html","8e6f632df1637dff3f2fd53492b80827"],["D:/BLOG_QZL/Blog3/public/archives/3b16.html","a7c437961c71ae4e86bbd9a72208d55a"],["D:/BLOG_QZL/Blog3/public/archives/427485bf.html","468269d7d905ea229b38fd4e5b0273f6"],["D:/BLOG_QZL/Blog3/public/archives/448ac7f1.html","47c0dfaf43d7a19c4ece222541e8f804"],["D:/BLOG_QZL/Blog3/public/archives/460671de.html","0e60ddd1dfa980d5bf368d53d1e145cb"],["D:/BLOG_QZL/Blog3/public/archives/510d.html","eff0719668fcf0044c4def9384f0163e"],["D:/BLOG_QZL/Blog3/public/archives/514b.html","2b36a7e27187073a81e00ba2f6236b2e"],["D:/BLOG_QZL/Blog3/public/archives/5937092e.html","c980b4e069d03a4cea3991e9cfb11de6"],["D:/BLOG_QZL/Blog3/public/archives/5a757a52.html","74fe88b96642a9ce32c52de8ac7a92bd"],["D:/BLOG_QZL/Blog3/public/archives/5fc07ec4.html","6009d8d60cbfcdad9dcb45280c9a17a2"],["D:/BLOG_QZL/Blog3/public/archives/622.html","920d50bfe53582d590a8b3c09038713a"],["D:/BLOG_QZL/Blog3/public/archives/67343d3.html","5e0ecb72fa8e2870faa2a83a3267de26"],["D:/BLOG_QZL/Blog3/public/archives/6de95ae.html","f7fd113ea40546b2f10f8c07056425e6"],["D:/BLOG_QZL/Blog3/public/archives/6fc94bb0.html","3c90ef55828fd032d446d3b1395139ee"],["D:/BLOG_QZL/Blog3/public/archives/73608288.html","fb756ceae8d1d13d15edfd8e5ce9a19c"],["D:/BLOG_QZL/Blog3/public/archives/7b67faab.html","c6796f9cd7852faa32ad153f117e5a10"],["D:/BLOG_QZL/Blog3/public/archives/7c53.html","3e547689a6b8b134684bbc3d1dd8c07f"],["D:/BLOG_QZL/Blog3/public/archives/7e63bcda.html","42cce4e664acfb0495f96bcfb4b4a7f5"],["D:/BLOG_QZL/Blog3/public/archives/7f7e.html","6f97cc326dada6aabf83bb4f58bde7ac"],["D:/BLOG_QZL/Blog3/public/archives/8632918.html","0c0e78dc5c31d4cf0a2a5ab69fee9ff8"],["D:/BLOG_QZL/Blog3/public/archives/87ef.html","d9fee2f639a22d79a538708b9c0254a5"],["D:/BLOG_QZL/Blog3/public/archives/960f81eb.html","7acc7ee1dad80ac501fcc13074a5c5fe"],["D:/BLOG_QZL/Blog3/public/archives/9c7f.html","319222b37fd28266d1047bad7d515955"],["D:/BLOG_QZL/Blog3/public/archives/9f7a1269.html","9a3ed58aa13bdd1125adac12a1721fed"],["D:/BLOG_QZL/Blog3/public/archives/a0a78e77.html","1f2eb50fdec44c5f18534b52d50575c4"],["D:/BLOG_QZL/Blog3/public/archives/a4b39f57.html","a3fa224fa61821d0e831196c4a367886"],["D:/BLOG_QZL/Blog3/public/archives/ae12.html","d6b11902c2dead24a1edaed19eca9f96"],["D:/BLOG_QZL/Blog3/public/archives/b6a3dbf1.html","79a2a7da761d4795d45987d482c3e601"],["D:/BLOG_QZL/Blog3/public/archives/ba04.html","1de6be5aff58e3fc61d0c8cce82c1edf"],["D:/BLOG_QZL/Blog3/public/archives/bf113a1c.html","19570571d06c142133f6828dc3b4eb40"],["D:/BLOG_QZL/Blog3/public/archives/c1a4eb67.html","3b10158e59667e5ab2d70ea9d9c0686c"],["D:/BLOG_QZL/Blog3/public/archives/c812a74c.html","3eac74cb82a9f395f28afde15b4bfe3d"],["D:/BLOG_QZL/Blog3/public/archives/d0ade39e.html","63ff21a6e35d0b4ec34906340c9e9738"],["D:/BLOG_QZL/Blog3/public/archives/d4fa.html","2bee8ff2e4a0d404a1673f30fc48dfc6"],["D:/BLOG_QZL/Blog3/public/archives/d57d.html","cfc9dcba6e916f8847c819699623e74a"],["D:/BLOG_QZL/Blog3/public/archives/d84f.html","bf328d161914bebe8487b8a88a25244b"],["D:/BLOG_QZL/Blog3/public/archives/eaabd222.html","08685c2a24b85946e9c6e1a74c9e06f9"],["D:/BLOG_QZL/Blog3/public/archives/f32f.html","d40d1d981ee0ec3428372054a15f7252"],["D:/BLOG_QZL/Blog3/public/archives/f482f5a8.html","1888ba19dfbf5db5e786efec64e71b67"],["D:/BLOG_QZL/Blog3/public/archives/f957.html","de71490fac3bc125b5bbb7e4dbd10b36"],["D:/BLOG_QZL/Blog3/public/archives/fa14c975.html","8a36a8e22ff0b7d9d5c6d6576ec5f80f"],["D:/BLOG_QZL/Blog3/public/archives/index.html","cfac24b99c9697d3dfb7ae3d95e52043"],["D:/BLOG_QZL/Blog3/public/archives/page/2/index.html","c374eb3919e81d5685ff486f5d752a7e"],["D:/BLOG_QZL/Blog3/public/archives/page/3/index.html","c374eb3919e81d5685ff486f5d752a7e"],["D:/BLOG_QZL/Blog3/public/archives/page/4/index.html","c374eb3919e81d5685ff486f5d752a7e"],["D:/BLOG_QZL/Blog3/public/archives/page/5/index.html","cfac24b99c9697d3dfb7ae3d95e52043"],["D:/BLOG_QZL/Blog3/public/archives/page/6/index.html","c374eb3919e81d5685ff486f5d752a7e"],["D:/BLOG_QZL/Blog3/public/categories/OJ/index.html","01d7bd9e1444944a77ad7502026fb6ea"],["D:/BLOG_QZL/Blog3/public/categories/hexo博客搭建/index.html","2a1eb6b7bddd053de420aebb87aa055e"],["D:/BLOG_QZL/Blog3/public/categories/index.html","884e75faa9715511571b1d01fd8930cc"],["D:/BLOG_QZL/Blog3/public/categories/博客搭建/index.html","01e5d5709c209ce076f57efdd71dfaa7"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/C-C/index.html","ef61ef742c37c4fd75cfda3011f0ba84"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/C-C/page/2/index.html","4ed12208a9f6b20147496d0bc9007dd7"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/C-C/page/3/index.html","a66aac7fb9ea82161673975b7ea6c4c3"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/Git/index.html","36c3a63a7425897c69d4866d4cf6cc57"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/index.html","8efe46b1e306b1a821ae89f6dfba11cc"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/page/2/index.html","fd9bf2bf46b6c06e7a096878151ef234"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/page/3/index.html","0345a932b6e45593e590c4e4367168c2"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/page/4/index.html","0303605cc21de7abb42790913086de73"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/page/5/index.html","f94c9a1b12af7f6c6bb2681599165760"],["D:/BLOG_QZL/Blog3/public/categories/实用技巧/index.html","7cc6590e7f378e94d11475cb5e3e91ad"],["D:/BLOG_QZL/Blog3/public/categories/配置/index.html","130f17fed5382aafdf26670f91f960a4"],["D:/BLOG_QZL/Blog3/public/comment/index.html","a1b30e4a2218f916fbe22eb7af313be2"],["D:/BLOG_QZL/Blog3/public/css/style.css","c8fd7484eca1e8ec23112d2a6296def3"],["D:/BLOG_QZL/Blog3/public/easysearch/about/index.html","2a3e825b37de430dadda2331dcc4530c"],["D:/BLOG_QZL/Blog3/public/easysearch/index.html","71cce6959e05beb136017abf41e48c1f"],["D:/BLOG_QZL/Blog3/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["D:/BLOG_QZL/Blog3/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["D:/BLOG_QZL/Blog3/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["D:/BLOG_QZL/Blog3/public/friends/index.html","7e483268359135b1b66371ebb9b29195"],["D:/BLOG_QZL/Blog3/public/img/algolia.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["D:/BLOG_QZL/Blog3/public/img/azure.svg","a7577e663c1e0fb788fed78d7457ff35"],["D:/BLOG_QZL/Blog3/public/img/baidu.svg","124ce00f2785724d84e32ab6403386a6"],["D:/BLOG_QZL/Blog3/public/index.html","a6a29e4a905dc5b0cf081bb2cc62a101"],["D:/BLOG_QZL/Blog3/public/js/app.js","a5d659af4b9d17196436c302e39ec916"],["D:/BLOG_QZL/Blog3/public/js/ergao.js","b1f566c49973d6fdab7ba0b372a4d17f"],["D:/BLOG_QZL/Blog3/public/js/love.js","88b75dcff60dd218bbb0db6cc37f3267"],["D:/BLOG_QZL/Blog3/public/js/search.js","63c61e56f228d83b544e21b4a7ed899c"],["D:/BLOG_QZL/Blog3/public/js/volantis.js","3c2fbf0d8e8c9ce1bbf88f0bf797b9ee"],["D:/BLOG_QZL/Blog3/public/page/2/index.html","68750d4f9b9049d9f97c01c20be219d5"],["D:/BLOG_QZL/Blog3/public/page/3/index.html","54e977b5995ee1f75cf25aaa1ddc1bfc"],["D:/BLOG_QZL/Blog3/public/page/4/index.html","b3cc76c9391a69bcaa8ec1874d9f58ed"],["D:/BLOG_QZL/Blog3/public/page/5/index.html","e59f392035a6d0b9b91e551b739578a0"],["D:/BLOG_QZL/Blog3/public/page/6/index.html","83a180c1bd85fa3609570e0c6bb8c050"],["D:/BLOG_QZL/Blog3/public/projects/index.html","07e4663bbdb0fe60d925bafd140d1533"],["D:/BLOG_QZL/Blog3/public/tags/C-C/index.html","6dc6d78e8a99d8a62304670a9d7561e1"],["D:/BLOG_QZL/Blog3/public/tags/C-C/page/2/index.html","f91adb15d9f3aa505f331310d6ffb000"],["D:/BLOG_QZL/Blog3/public/tags/C/index.html","951ab39b18c73f6f3202dcdeb0fa7171"],["D:/BLOG_QZL/Blog3/public/tags/Git/index.html","01e6c5e8e6c4753c3ce01f854623beb6"],["D:/BLOG_QZL/Blog3/public/tags/Hexo主题/index.html","dd2d69099f4bbc6e36c2762ccd3c63bd"],["D:/BLOG_QZL/Blog3/public/tags/Let-s-Build-A-Simple-Interpreter/index.html","af693a28585b8b8a0ae66002790a5645"],["D:/BLOG_QZL/Blog3/public/tags/Let’s-Build-A-Simple-Interpreter/index.html","eef639c40b78510d9c8fd3aba9a4dba2"],["D:/BLOG_QZL/Blog3/public/tags/OJ/index.html","3e22e6a4be516df54169c88e52c20d83"],["D:/BLOG_QZL/Blog3/public/tags/Yilia主题配置/index.html","e15efaec6babd5acba5612458352c09d"],["D:/BLOG_QZL/Blog3/public/tags/forme/index.html","344c75bfcda69d7a609abbc9f00b80eb"],["D:/BLOG_QZL/Blog3/public/tags/front-matter配置/index.html","4a1001017c165f847bf54a47343470eb"],["D:/BLOG_QZL/Blog3/public/tags/github/index.html","5711866a9780f74ac2cf64a7f5aafaed"],["D:/BLOG_QZL/Blog3/public/tags/hexo显示pdf/index.html","52c3c3d298211da0f60d738a1bea6ced"],["D:/BLOG_QZL/Blog3/public/tags/index.html","f46b1e3fe66684dd0c950de801e9c612"],["D:/BLOG_QZL/Blog3/public/tags/matery主题配置/index.html","0cecaa83e9a6d5686dc99031bfb5d49e"],["D:/BLOG_QZL/Blog3/public/tags/《计算机科学速成课》/index.html","061d1c1c1b91e7b5b9b47d61edf8ef11"],["D:/BLOG_QZL/Blog3/public/tags/凸包/index.html","bd314b23b66cc83f75c145b2193f9e3d"],["D:/BLOG_QZL/Blog3/public/tags/布尔逻辑和逻辑门/index.html","d14828bbfa4732c417a2bedf99b666f0"],["D:/BLOG_QZL/Blog3/public/tags/计算几何/index.html","ba15427d1bcc91438a3b0f1e9b81e82b"],["D:/BLOG_QZL/Blog3/public/tags/计算机科学速成课/index.html","7102463bfec68296bda5d90f6becb42d"],["D:/BLOG_QZL/Blog3/public/tags/配置/index.html","d33e4d2761c5bee9d21438158651f5d1"],["D:/BLOG_QZL/Blog3/public/学习笔记/index.html","954d480f2ec46e76864bcdeb66877572"]];
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







