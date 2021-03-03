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

var precacheConfig = [["D:/BLOG_QZL/Blog3/public/404.html","00036f27c12c2df2625a2e1744682b8b"],["D:/BLOG_QZL/Blog3/public/about/index.html","39638387cff7960349d2133b47d3d7fd"],["D:/BLOG_QZL/Blog3/public/archives/122ff534.html","e5a91b37ca03ce914a42095971c8583a"],["D:/BLOG_QZL/Blog3/public/archives/138a.html","fca7726e2cf54edcd5ad0fdce25c57bf"],["D:/BLOG_QZL/Blog3/public/archives/13ba6384.html","5fa0941f5b212f86800f2ee6addf76f0"],["D:/BLOG_QZL/Blog3/public/archives/1459e5c7.html","b5f0b85535a194c086ad9f318c92004b"],["D:/BLOG_QZL/Blog3/public/archives/145edd42.html","2022a6f182f5569f48064f72ae59b150"],["D:/BLOG_QZL/Blog3/public/archives/156886df.html","d35d7c5119f4ae48f2933833bca76208"],["D:/BLOG_QZL/Blog3/public/archives/1639a92e.html","c2ff25601001e8ca0470d404e774a881"],["D:/BLOG_QZL/Blog3/public/archives/167c.html","af9018d65d6c5518045b571e5943517e"],["D:/BLOG_QZL/Blog3/public/archives/173c.html","a442dfb5f8fa1201fc04a7542c0e1316"],["D:/BLOG_QZL/Blog3/public/archives/18085cf9.html","7217798a0134b95f5cfcba270dc7be35"],["D:/BLOG_QZL/Blog3/public/archives/1adb63dd.html","d645d9cc7f2c556e6ec777e467a06554"],["D:/BLOG_QZL/Blog3/public/archives/1f338417.html","fb797d82115a4019f5c6f2af8c981138"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/index.html","6a96f82ad979fd9a3e68e95843ad9805"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/page/2/index.html","370f6154267e42a6bb0f792adcad4615"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/page/3/index.html","b9b0064b82b20a280faeda6282ce0481"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/page/4/index.html","35f4aa88d643cbe910f84e178cceff7b"],["D:/BLOG_QZL/Blog3/public/archives/2020/04/index.html","318b0678d09b5a78313aa5d72d6b8e1f"],["D:/BLOG_QZL/Blog3/public/archives/2020/04/page/2/index.html","354c0e0cb9ac6cab5b91c5bfee992aff"],["D:/BLOG_QZL/Blog3/public/archives/2020/05/index.html","0aa5d39c3ae4e8bfe0f7ebda06853219"],["D:/BLOG_QZL/Blog3/public/archives/2020/05/page/10/index.html","315cf918f0514b22ca0d1e0c2f7c91a0"],["D:/BLOG_QZL/Blog3/public/archives/2020/05/page/2/index.html","2b82e3c2e1014af1d6275eba1826c72d"],["D:/BLOG_QZL/Blog3/public/archives/2020/05/page/3/index.html","29d626101481dacdc405b3e7a48172af"],["D:/BLOG_QZL/Blog3/public/archives/2020/05/page/4/index.html","971dd343ff5c363e06d1847bd9ad7ba0"],["D:/BLOG_QZL/Blog3/public/archives/2020/05/page/5/index.html","9589ee762398d8d13820a496c15f674d"],["D:/BLOG_QZL/Blog3/public/archives/2020/05/page/6/index.html","ed644743066e648db212749c6cd3d8f5"],["D:/BLOG_QZL/Blog3/public/archives/2020/05/page/7/index.html","5cfaaba70826a72e9092bddf375d6faf"],["D:/BLOG_QZL/Blog3/public/archives/2020/05/page/8/index.html","d9a5824a1fe87c5c95ae71e9f6ab3467"],["D:/BLOG_QZL/Blog3/public/archives/2020/05/page/9/index.html","e51c4a36ba8b04c86fe84a6307301821"],["D:/BLOG_QZL/Blog3/public/archives/2020/06/index.html","74de3866e2bf8eb43d67bfeecfc63d03"],["D:/BLOG_QZL/Blog3/public/archives/2020/index.html","f5a687f5710c1e6cf809d0a91a4746c3"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/10/index.html","6bbd27464f39c3f155fe120a4d3a3f3d"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/11/index.html","230f051bd9efe4a636c2155c8567f88e"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/12/index.html","70e022fa8b0849563e235ef95a841608"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/13/index.html","1cf0ae322d7d760e9306bbb8691319c8"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/14/index.html","35afe7fe1eb4c4db3369c41535080b80"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/15/index.html","29e072c7579ee10876618a5e3f665f74"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/2/index.html","23afc312f731f3b757b54a5f0d2aa712"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/3/index.html","51441f8ddd2a53e04b5cdf76c8c7466c"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/4/index.html","9bbef19adeff8fbb906fbcb8b584a9f9"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/5/index.html","f70a8dbf7d322119e5449d20e7c05b7d"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/6/index.html","b458d303d4e91bb3af49abbd35a00caa"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/7/index.html","ccfe9b47871af186dae87692573cd29e"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/8/index.html","3a718071f8eccbfa3eacb6da8a9903ce"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/9/index.html","689783c2f048ba6b08d1d685b77fce75"],["D:/BLOG_QZL/Blog3/public/archives/21aba888.html","db0d670c21e5cdb8e2846d815c96a7cb"],["D:/BLOG_QZL/Blog3/public/archives/260c7660.html","0f70c86f1e849ebbb46fc08ae9fe1186"],["D:/BLOG_QZL/Blog3/public/archives/263cd357.html","21496520e087a67ef2fb1ed8ab50515f"],["D:/BLOG_QZL/Blog3/public/archives/28492eb.html","c9b246ad71859f63de1c7c92fb832f52"],["D:/BLOG_QZL/Blog3/public/archives/28c74e52.html","0be2f1ecffa6fe9744e0bb03e997ecbf"],["D:/BLOG_QZL/Blog3/public/archives/2926b12b.html","9747fd43f6030bd12e4d8e462e77c10b"],["D:/BLOG_QZL/Blog3/public/archives/2b44a8c.html","e9af71b5ef46d11152f8020bbba8513d"],["D:/BLOG_QZL/Blog3/public/archives/2ef705db.html","ed3e62d78e0703e240dc9aa67de845c8"],["D:/BLOG_QZL/Blog3/public/archives/2f66ae56.html","a8fa654548103ef7fc54313dc282c5ae"],["D:/BLOG_QZL/Blog3/public/archives/2faa8a4b.html","976c2ba988c62c5434489b65dec0d620"],["D:/BLOG_QZL/Blog3/public/archives/323fcdb7.html","4c8dd6945843d3c24a1853c7a4078c17"],["D:/BLOG_QZL/Blog3/public/archives/3478.html","8f3080d0b10d1b2e1bc20900db187043"],["D:/BLOG_QZL/Blog3/public/archives/34a9aaba.html","f2a9cf0b270d67f2c781c3cd65631266"],["D:/BLOG_QZL/Blog3/public/archives/388fba4a.html","aa896fe23acd3ff71c28d3111395a53a"],["D:/BLOG_QZL/Blog3/public/archives/38f02bc7.html","9ea349f30d499bb2c652affe291dee99"],["D:/BLOG_QZL/Blog3/public/archives/38f967fd.html","019ed93355ba31af16b39cf144ce3411"],["D:/BLOG_QZL/Blog3/public/archives/3ae1bc73.html","176c2b7dbd0940ec03f3b45ed915db4f"],["D:/BLOG_QZL/Blog3/public/archives/3b16.html","1bb78ccdf66f3802fa5f5565c29d5ed7"],["D:/BLOG_QZL/Blog3/public/archives/3bfe5978.html","784cb1e7ab9fdce78465e712b7b6eae5"],["D:/BLOG_QZL/Blog3/public/archives/3f9a28c4.html","e53d2fddf5a3f9b864fadca8b57b05b8"],["D:/BLOG_QZL/Blog3/public/archives/40d82c05.html","b7cf920e55beb14bb5f7a932cc3e239b"],["D:/BLOG_QZL/Blog3/public/archives/427485bf.html","657737968858fe5bdf7d760039331ded"],["D:/BLOG_QZL/Blog3/public/archives/448ac7f1.html","8f76672623231048ecfb0c86ea3ee6bb"],["D:/BLOG_QZL/Blog3/public/archives/454c1de9.html","3c243142e50adf97e1c5909bbc83508f"],["D:/BLOG_QZL/Blog3/public/archives/460671de.html","f7de59646a6cd8b1774d32d1f1c8b5ff"],["D:/BLOG_QZL/Blog3/public/archives/4635f066.html","83041d0d7a08ea2051bb370fa3f92e64"],["D:/BLOG_QZL/Blog3/public/archives/4be6fd59.html","e637ae138073be4376ce34f9c4213e13"],["D:/BLOG_QZL/Blog3/public/archives/50be15c2.html","ce1b2e1708fb6cf77e61f32929022c14"],["D:/BLOG_QZL/Blog3/public/archives/510d.html","e0360cbfb56c636949ab38b08a0cee21"],["D:/BLOG_QZL/Blog3/public/archives/514b.html","d37f54e18d680422e9fa2a642edc8390"],["D:/BLOG_QZL/Blog3/public/archives/54babab5.html","bbee1e27a37d4f46d223f386d589d286"],["D:/BLOG_QZL/Blog3/public/archives/550c4d87.html","596e735806a212e14c2bb65f94d44d9a"],["D:/BLOG_QZL/Blog3/public/archives/57266241.html","66e213a3f86c5c237e5c43f27c2178b8"],["D:/BLOG_QZL/Blog3/public/archives/5844b406.html","0bb1d95873f1d705965a7697cef635ba"],["D:/BLOG_QZL/Blog3/public/archives/5937092e.html","531dbf068de3dcfa0446b32fe411ae33"],["D:/BLOG_QZL/Blog3/public/archives/5a757a52.html","aa07ab455f81c1beae42bcb795071e68"],["D:/BLOG_QZL/Blog3/public/archives/5b8eb091.html","c1701a23d69a26ef96bc0db3a28eed33"],["D:/BLOG_QZL/Blog3/public/archives/5ded0966.html","6b5249f5f834bd4995ceaac2198f1cc5"],["D:/BLOG_QZL/Blog3/public/archives/5fc07ec4.html","f064e69070f648e5bde5e7e2708ed206"],["D:/BLOG_QZL/Blog3/public/archives/60adc21f.html","18e58691a80ffa010e4abe3102a54fd4"],["D:/BLOG_QZL/Blog3/public/archives/622.html","1dc071d21e03f791a530680cf50cfc79"],["D:/BLOG_QZL/Blog3/public/archives/64f81817.html","32014ec447bb2a72f298a40d367effbf"],["D:/BLOG_QZL/Blog3/public/archives/664c52ef.html","59d952315db3231ca2536fee8f973d2a"],["D:/BLOG_QZL/Blog3/public/archives/66c8de20.html","2e0c18afd518ba4c9ec899f9f61d11a0"],["D:/BLOG_QZL/Blog3/public/archives/67343d3.html","9de867d814ab89530e77f7fd5de4a7a8"],["D:/BLOG_QZL/Blog3/public/archives/67452a19.html","96f4e307f691619fffb0a884e2fcad61"],["D:/BLOG_QZL/Blog3/public/archives/68c36619.html","4b48d7aaeeb1ac2b3761ead142dbe425"],["D:/BLOG_QZL/Blog3/public/archives/6a3f4577.html","125a9a9d20c4ff65307ef3c889866a51"],["D:/BLOG_QZL/Blog3/public/archives/6a59a953.html","250d298a6841b1161c366e9375a104e9"],["D:/BLOG_QZL/Blog3/public/archives/6b2ecf81.html","17a5683a14399ef81568ac4b0a024ee2"],["D:/BLOG_QZL/Blog3/public/archives/6b668399.html","325a0296b9bb29434a357760e00247e0"],["D:/BLOG_QZL/Blog3/public/archives/6c7b6feb.html","067955ac43467ea51defdb53bf6bb26b"],["D:/BLOG_QZL/Blog3/public/archives/6de95ae.html","59a3ce31bcedf9ada56ac7af129764cd"],["D:/BLOG_QZL/Blog3/public/archives/6fc94bb0.html","bf8e98811673900478be4be2b1ea35a4"],["D:/BLOG_QZL/Blog3/public/archives/71c91a8.html","65c20413b78bcfd7c5cf8f5e98aebe13"],["D:/BLOG_QZL/Blog3/public/archives/73608288.html","069d4d86635a32fecd7a830a3aa84256"],["D:/BLOG_QZL/Blog3/public/archives/738b4cec.html","283e5c18b7d78542d1ebcffaae9eee54"],["D:/BLOG_QZL/Blog3/public/archives/781f4530.html","153197e1f130d1146714a76e8073bf54"],["D:/BLOG_QZL/Blog3/public/archives/7b67faab.html","e10b53743a2fec38e0b3161bf9cef4b4"],["D:/BLOG_QZL/Blog3/public/archives/7c53.html","862af73b3ba5eeec40ae0ebb2f62c029"],["D:/BLOG_QZL/Blog3/public/archives/7d1f8966.html","fa67c352b385e50e8264f38a8a7c0ee7"],["D:/BLOG_QZL/Blog3/public/archives/7d6924a1.html","3aede2bb368679dbf84035d59095ef09"],["D:/BLOG_QZL/Blog3/public/archives/7e63bcda.html","35593113250f55fa11fb993ad894e711"],["D:/BLOG_QZL/Blog3/public/archives/7f7e.html","eb1d65488b663c9ecb21029b97af18b7"],["D:/BLOG_QZL/Blog3/public/archives/800f51f0.html","931fa1ab56d4aac2e39b6f49a9c67615"],["D:/BLOG_QZL/Blog3/public/archives/80469b0c.html","3ab389690564aedfeb6770fc430c3efd"],["D:/BLOG_QZL/Blog3/public/archives/82369fbe.html","9bf619ca2f06d227db3bb321cb812ba2"],["D:/BLOG_QZL/Blog3/public/archives/8605edc6.html","1df89995aa3b5806a3fce5162e761392"],["D:/BLOG_QZL/Blog3/public/archives/8632918.html","ec4fc5256b373f96de8079466a46db00"],["D:/BLOG_QZL/Blog3/public/archives/87ef.html","378f7c2ab611a1ff2663857f0e2f5013"],["D:/BLOG_QZL/Blog3/public/archives/8cf18577.html","02b484cb878a2ba4379fe46e59701045"],["D:/BLOG_QZL/Blog3/public/archives/8dd10d3c.html","7537e712998891e2a595320bd314de1c"],["D:/BLOG_QZL/Blog3/public/archives/927246b0.html","e6a00607632fc0b7c4ab33860621db99"],["D:/BLOG_QZL/Blog3/public/archives/960f81eb.html","066a490df2f692726661887311601f65"],["D:/BLOG_QZL/Blog3/public/archives/96b73b83.html","0e981fd684b6626574ef5d0be640c763"],["D:/BLOG_QZL/Blog3/public/archives/9a78acc3.html","4d1d8998f7e92ee71171260113a08f4c"],["D:/BLOG_QZL/Blog3/public/archives/9b640ff1.html","46051d1836d1e82e1c628d13e526b014"],["D:/BLOG_QZL/Blog3/public/archives/9c7f.html","27845df20a24a42b58b8c56d6579c890"],["D:/BLOG_QZL/Blog3/public/archives/9f7a1269.html","88a68b08fcc64740a5de0c745192d965"],["D:/BLOG_QZL/Blog3/public/archives/a0a78e77.html","208730d4e0bb700fa71b9fafbdfc4737"],["D:/BLOG_QZL/Blog3/public/archives/a193c39a.html","67fdb34a05d5865d26d5a3ccf6f2c7fc"],["D:/BLOG_QZL/Blog3/public/archives/a3edb06.html","024dcd4b7bb8c5bc8b2a9abe8ee978b1"],["D:/BLOG_QZL/Blog3/public/archives/a3ee11a9.html","c2cda4229d94bfa005daa353e260dab4"],["D:/BLOG_QZL/Blog3/public/archives/a4b39f57.html","a37be6f0454b6358c6d2180e9cdfbadf"],["D:/BLOG_QZL/Blog3/public/archives/aba94da5.html","6be29c284d509137162be75c8eeb9a1a"],["D:/BLOG_QZL/Blog3/public/archives/ae12.html","5cb71637ab7ca87a51555e53649f44e1"],["D:/BLOG_QZL/Blog3/public/archives/b054a192.html","37415d0094edd69ac5d969d7c4fc1156"],["D:/BLOG_QZL/Blog3/public/archives/b215c449.html","3b1ed6610c805902a88b3baa2c07a661"],["D:/BLOG_QZL/Blog3/public/archives/b2f816aa.html","0c85ad41a5aaad04718b59ac2b7ccc81"],["D:/BLOG_QZL/Blog3/public/archives/b6a3dbf1.html","273495be3d298fdf50fcf86da760f634"],["D:/BLOG_QZL/Blog3/public/archives/ba04.html","fd50cf2f37f2aef20edf1a2720e6e4b5"],["D:/BLOG_QZL/Blog3/public/archives/ba87b609.html","331bd8b56418e053984920e92a936fec"],["D:/BLOG_QZL/Blog3/public/archives/bab62969.html","bfa78cc3c5b7a24afa96a85c8415e522"],["D:/BLOG_QZL/Blog3/public/archives/bc3a234a.html","2a5f8f9e5d461a1692bd31b2e0b0e73d"],["D:/BLOG_QZL/Blog3/public/archives/bf113a1c.html","02504962c1043b8d7e69cad973b7083c"],["D:/BLOG_QZL/Blog3/public/archives/c1a4eb67.html","8e7e6d106c45bcca85d1d2872bb00ef7"],["D:/BLOG_QZL/Blog3/public/archives/c1cd5bf1.html","c4d7b2860f58c6752ba301cd04ad81b2"],["D:/BLOG_QZL/Blog3/public/archives/c4d17f90.html","f03f8410e5f7c04741724209c04b6ca4"],["D:/BLOG_QZL/Blog3/public/archives/c812a74c.html","80a16120c9735d66435e886bd5504692"],["D:/BLOG_QZL/Blog3/public/archives/c9c6ad08.html","0084b085a23f5c0d898d911a1b65abc5"],["D:/BLOG_QZL/Blog3/public/archives/cace6777.html","a491366da3f6b9771c44926c83a0b3b0"],["D:/BLOG_QZL/Blog3/public/archives/cc14dac2.html","e1848b41671ae87e20876caf77b0e0b9"],["D:/BLOG_QZL/Blog3/public/archives/cedb49a3.html","efc6e5b36f5f52a8382798f20c006a29"],["D:/BLOG_QZL/Blog3/public/archives/cf35c829.html","fdfd06333f2d2cc7466ded14f92de842"],["D:/BLOG_QZL/Blog3/public/archives/d0ade39e.html","29ee9a7a2336902e3ed05886d5b38d06"],["D:/BLOG_QZL/Blog3/public/archives/d30baea4.html","0e9701eb3f95a8533b09b36d5596c765"],["D:/BLOG_QZL/Blog3/public/archives/d4fa.html","763b1c3777d72c99f5f97d5c8e2b4a54"],["D:/BLOG_QZL/Blog3/public/archives/d57d.html","38970e110574270dc38d63f192f9734c"],["D:/BLOG_QZL/Blog3/public/archives/d7910ce1.html","4936d5d1974789396943a22829c41ba3"],["D:/BLOG_QZL/Blog3/public/archives/d84f.html","fbdcdf43ab9db06795223badb69ee8b4"],["D:/BLOG_QZL/Blog3/public/archives/dac06bda.html","9effeb4dc7148f7c3f2473025f8f6e0b"],["D:/BLOG_QZL/Blog3/public/archives/dad59d93.html","3d51e0d8fdbc92ca84acc95dd3208721"],["D:/BLOG_QZL/Blog3/public/archives/db2095e5.html","4f0558239ee665a5bc42a9ef6176bc02"],["D:/BLOG_QZL/Blog3/public/archives/db2a8c7a.html","bdadc1626366fc7a0347fcf3c5d28735"],["D:/BLOG_QZL/Blog3/public/archives/dcba50cd.html","e53342167c9101390c8b5bc7b5a55bd2"],["D:/BLOG_QZL/Blog3/public/archives/e16eef53.html","2cbb66fd748f47c5c51b4ea9b6611deb"],["D:/BLOG_QZL/Blog3/public/archives/e56a544e.html","62788db7418a8aa4d1fc620ebe05f756"],["D:/BLOG_QZL/Blog3/public/archives/e8f15917.html","2fcd8c5ae894fce223327b85daf11089"],["D:/BLOG_QZL/Blog3/public/archives/eaabd222.html","ff82c24cd85d5a164bc616d20b1d414d"],["D:/BLOG_QZL/Blog3/public/archives/ee7242dc.html","f4ded89030f33fddb753a327d89d902c"],["D:/BLOG_QZL/Blog3/public/archives/ef749515.html","2032622b684572c5e70589518487534a"],["D:/BLOG_QZL/Blog3/public/archives/f016036.html","48a153b18f1a973e5ffca8a8599603d2"],["D:/BLOG_QZL/Blog3/public/archives/f30af5b2.html","1c4886e76c857d913e676615f6a2b54e"],["D:/BLOG_QZL/Blog3/public/archives/f32f.html","08f0bcfaf4821d720a8675344c967a77"],["D:/BLOG_QZL/Blog3/public/archives/f3aa0b39.html","d897c4475a6ec8390bd1d7ba608f0588"],["D:/BLOG_QZL/Blog3/public/archives/f482f5a8.html","d7f2eec7dbbce60ce87505bd6d20f03b"],["D:/BLOG_QZL/Blog3/public/archives/f7358229.html","40221b12000ab17e266223b6f30d77de"],["D:/BLOG_QZL/Blog3/public/archives/f957.html","e397d13f3415f9adeff37bc9361f8860"],["D:/BLOG_QZL/Blog3/public/archives/fa14c975.html","4e1c7591af947c38d6fbdeb17914cf4f"],["D:/BLOG_QZL/Blog3/public/archives/ff8fbe02.html","6637f6839e800289f4d0a788d49eb11c"],["D:/BLOG_QZL/Blog3/public/archives/index.html","c1cf1a187b671fb6d541b392cd4bafc5"],["D:/BLOG_QZL/Blog3/public/archives/page/10/index.html","c1cf1a187b671fb6d541b392cd4bafc5"],["D:/BLOG_QZL/Blog3/public/archives/page/11/index.html","bf491a37aa515c8af9540d545442b843"],["D:/BLOG_QZL/Blog3/public/archives/page/12/index.html","bf491a37aa515c8af9540d545442b843"],["D:/BLOG_QZL/Blog3/public/archives/page/13/index.html","bf491a37aa515c8af9540d545442b843"],["D:/BLOG_QZL/Blog3/public/archives/page/14/index.html","c1cf1a187b671fb6d541b392cd4bafc5"],["D:/BLOG_QZL/Blog3/public/archives/page/15/index.html","bf491a37aa515c8af9540d545442b843"],["D:/BLOG_QZL/Blog3/public/archives/page/2/index.html","c1cf1a187b671fb6d541b392cd4bafc5"],["D:/BLOG_QZL/Blog3/public/archives/page/3/index.html","c1cf1a187b671fb6d541b392cd4bafc5"],["D:/BLOG_QZL/Blog3/public/archives/page/4/index.html","c1cf1a187b671fb6d541b392cd4bafc5"],["D:/BLOG_QZL/Blog3/public/archives/page/5/index.html","c1cf1a187b671fb6d541b392cd4bafc5"],["D:/BLOG_QZL/Blog3/public/archives/page/6/index.html","c1cf1a187b671fb6d541b392cd4bafc5"],["D:/BLOG_QZL/Blog3/public/archives/page/7/index.html","c1cf1a187b671fb6d541b392cd4bafc5"],["D:/BLOG_QZL/Blog3/public/archives/page/8/index.html","c1cf1a187b671fb6d541b392cd4bafc5"],["D:/BLOG_QZL/Blog3/public/archives/page/9/index.html","c1cf1a187b671fb6d541b392cd4bafc5"],["D:/BLOG_QZL/Blog3/public/categories/OJ/index.html","3c6a726b8c90867783c2c19699a9fbc8"],["D:/BLOG_QZL/Blog3/public/categories/hexo博客搭建/index.html","a4a1e6ba8eabfb5dffec6d84d2c315c9"],["D:/BLOG_QZL/Blog3/public/categories/index.html","64b6688c6931849edc548d8b03b790d0"],["D:/BLOG_QZL/Blog3/public/categories/博客搭建/index.html","176b8a37221a5e6c8f9b0c2a04c45171"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/C-C/index.html","e61ea120f6e1231d9a033125b2bd4545"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/C-C/page/2/index.html","5d1337a3521016f89a2922bc074d88d2"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/C-C/page/3/index.html","d5b79c2cae03d114b6a916ad814f6d00"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/Git/index.html","35b5640947230bde3fc7709dd6763e4b"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/index.html","6dc132f9ae7ddbdcf5f68c89b795832c"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/page/2/index.html","d0103f474ad1b41c530e312e53f2bd34"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/page/3/index.html","a412ecc912cf47b09ddb7bb5005b6cc5"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/page/4/index.html","d00f10239694e0bb85fe6e63409a92cc"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/page/5/index.html","c54be74d814aea2ce1acbff7ff3748f6"],["D:/BLOG_QZL/Blog3/public/categories/实用技巧/index.html","60678176e6ca133f5fdc02b9c93c806f"],["D:/BLOG_QZL/Blog3/public/categories/配置/index.html","341f15a57bcaed92c7f5d0fd7a58b6ac"],["D:/BLOG_QZL/Blog3/public/comment/index.html","6071f39c74768dbd570ba6b8e2a3bd32"],["D:/BLOG_QZL/Blog3/public/css/style.css","c8fd7484eca1e8ec23112d2a6296def3"],["D:/BLOG_QZL/Blog3/public/easysearch/about/index.html","2a3e825b37de430dadda2331dcc4530c"],["D:/BLOG_QZL/Blog3/public/easysearch/index.html","71cce6959e05beb136017abf41e48c1f"],["D:/BLOG_QZL/Blog3/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["D:/BLOG_QZL/Blog3/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["D:/BLOG_QZL/Blog3/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["D:/BLOG_QZL/Blog3/public/friends/index.html","1459a5b8aba9f0a579e8dee439eb6b77"],["D:/BLOG_QZL/Blog3/public/img/algolia.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["D:/BLOG_QZL/Blog3/public/img/azure.svg","a7577e663c1e0fb788fed78d7457ff35"],["D:/BLOG_QZL/Blog3/public/img/baidu.svg","124ce00f2785724d84e32ab6403386a6"],["D:/BLOG_QZL/Blog3/public/index.html","2a4dc4cbb0a4971dd4da78e2c47be32c"],["D:/BLOG_QZL/Blog3/public/js/app.js","a5d659af4b9d17196436c302e39ec916"],["D:/BLOG_QZL/Blog3/public/js/ergao.js","b1f566c49973d6fdab7ba0b372a4d17f"],["D:/BLOG_QZL/Blog3/public/js/love.js","88b75dcff60dd218bbb0db6cc37f3267"],["D:/BLOG_QZL/Blog3/public/js/search.js","63c61e56f228d83b544e21b4a7ed899c"],["D:/BLOG_QZL/Blog3/public/js/volantis.js","3c2fbf0d8e8c9ce1bbf88f0bf797b9ee"],["D:/BLOG_QZL/Blog3/public/page/10/index.html","7ce133150becffc25dfda8a21770a27e"],["D:/BLOG_QZL/Blog3/public/page/11/index.html","8578c6ea142c3f8d04a7f5132db74613"],["D:/BLOG_QZL/Blog3/public/page/12/index.html","72c3232205921ffd0fda940bcc365056"],["D:/BLOG_QZL/Blog3/public/page/13/index.html","b549cd31cc857322fb1f4195eb23a739"],["D:/BLOG_QZL/Blog3/public/page/14/index.html","ebb12ef6b100a667df0d21c954b33904"],["D:/BLOG_QZL/Blog3/public/page/15/index.html","a10f4b6424540eaf2f623e66b6132d7e"],["D:/BLOG_QZL/Blog3/public/page/2/index.html","a4c84d556d74aa794a98f9cfe7211a5e"],["D:/BLOG_QZL/Blog3/public/page/3/index.html","b111b69c1533ffeacb3161721885d07f"],["D:/BLOG_QZL/Blog3/public/page/4/index.html","125693a20d0b767ed50964da77764d89"],["D:/BLOG_QZL/Blog3/public/page/5/index.html","b8468f40b5be6d78fcf83355669fa3a7"],["D:/BLOG_QZL/Blog3/public/page/6/index.html","b8a1a4ea98883f818bc3a7c1e6759146"],["D:/BLOG_QZL/Blog3/public/page/7/index.html","4c8c87f606be29510c4bf702e1270395"],["D:/BLOG_QZL/Blog3/public/page/8/index.html","c64d912b438c381a4645c21f239410b0"],["D:/BLOG_QZL/Blog3/public/page/9/index.html","51ab8c34e5c9a3a4459eafea7fce6aaa"],["D:/BLOG_QZL/Blog3/public/projects/index.html","17fce24d2d7155445cad3a6abd078ad0"],["D:/BLOG_QZL/Blog3/public/tags/C-C/index.html","1bb4bdaefab2dfe76ac2d60ba6f58cc2"],["D:/BLOG_QZL/Blog3/public/tags/C-C/page/2/index.html","1e721b648d6d6183be7f45a6ed035fad"],["D:/BLOG_QZL/Blog3/public/tags/C-C/page/3/index.html","b43d269572ddf5e3082809f6e3237e65"],["D:/BLOG_QZL/Blog3/public/tags/C/index.html","e916de179b1d999cb23ba92ba3eebcaf"],["D:/BLOG_QZL/Blog3/public/tags/Git/index.html","4b237e317029c76ca41479be3595df39"],["D:/BLOG_QZL/Blog3/public/tags/Hexo主题/index.html","d06d8b67c17ef76b18cade958991d504"],["D:/BLOG_QZL/Blog3/public/tags/Let-s-Build-A-Simple-Interpreter/index.html","d9113582e3332095fd43b3dd8f5e9329"],["D:/BLOG_QZL/Blog3/public/tags/Let’s-Build-A-Simple-Interpreter/index.html","1e31859db26e025fba88d779c1d7eb8f"],["D:/BLOG_QZL/Blog3/public/tags/OJ/index.html","da5520426397460a62c7346070c47f87"],["D:/BLOG_QZL/Blog3/public/tags/Yilia主题配置/index.html","b1dbe326e682a7a4859ec20cf81a5109"],["D:/BLOG_QZL/Blog3/public/tags/forme/index.html","5130b52eadc90b7ab1d667717b52f5ef"],["D:/BLOG_QZL/Blog3/public/tags/front-matter配置/index.html","dd9952bb7ecfe34276cf616211cd062b"],["D:/BLOG_QZL/Blog3/public/tags/github/index.html","ce0a92bf4b53c387a0568eb0b958804c"],["D:/BLOG_QZL/Blog3/public/tags/hexo显示pdf/index.html","fefc93e233e69b22f187609ddbcba500"],["D:/BLOG_QZL/Blog3/public/tags/index.html","871801e6d093dee2c39bd5caf27de435"],["D:/BLOG_QZL/Blog3/public/tags/matery主题配置/index.html","5a800ff43539fd13ebc9ac5fe37e67ff"],["D:/BLOG_QZL/Blog3/public/tags/《计算机科学速成课》/index.html","24da7519e4a710736690c01dec56e3bb"],["D:/BLOG_QZL/Blog3/public/tags/凸包/index.html","ffb4914ed1dd3633a082323447c0e399"],["D:/BLOG_QZL/Blog3/public/tags/布尔逻辑和逻辑门/index.html","967a83d11f7cd8bf566c20d2dfe9e5bd"],["D:/BLOG_QZL/Blog3/public/tags/计算几何/index.html","22d59af578937dde72abdcab2aa77d84"],["D:/BLOG_QZL/Blog3/public/tags/计算机科学速成课/index.html","ec85de630e88e3e69d0c12923040b3df"],["D:/BLOG_QZL/Blog3/public/tags/配置/index.html","01ab2bd1868d2331e92817c340e9e1b2"],["D:/BLOG_QZL/Blog3/public/学习笔记/index.html","fcae74799d7d61611780d3e06b2d35ef"]];
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







