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

var precacheConfig = [["D:/BLOG_QZL/Blog3/public/404.html","bd51d69ab2cdd64f73c185e638b1a4be"],["D:/BLOG_QZL/Blog3/public/about/index.html","98f058757b5b4365da9d7e2f75f81309"],["D:/BLOG_QZL/Blog3/public/archives/122ff534.html","e4e71586eef90c5e7de16bf969e2b4aa"],["D:/BLOG_QZL/Blog3/public/archives/138a.html","c954162feeb20125a1ec18645ee41371"],["D:/BLOG_QZL/Blog3/public/archives/13ba6384.html","f75690c9e5c750706fe2afc031ccc137"],["D:/BLOG_QZL/Blog3/public/archives/1459e5c7.html","c7be79b3d4ec1305c94e028ac11797ba"],["D:/BLOG_QZL/Blog3/public/archives/145edd42.html","c3c0f83f8b742961ea7e3b405cbc782f"],["D:/BLOG_QZL/Blog3/public/archives/156886df.html","d437c3c158082fe3a81580c2635af5ab"],["D:/BLOG_QZL/Blog3/public/archives/1639a92e.html","f50e45b68322c5d87f2ba6a9c0450e43"],["D:/BLOG_QZL/Blog3/public/archives/167c.html","cdda7b34156de51106225c4c8acdc77c"],["D:/BLOG_QZL/Blog3/public/archives/173c.html","0618cb7ad4a5827be036a25ae27165ec"],["D:/BLOG_QZL/Blog3/public/archives/18085cf9.html","ef197034c9dc9738b9fe36b7c68c11f9"],["D:/BLOG_QZL/Blog3/public/archives/1adb63dd.html","5d7bdb44c3450c64a19ff3939eaad70f"],["D:/BLOG_QZL/Blog3/public/archives/1f338417.html","e124ca3de9a512b8a6bca5bc69f4c567"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/index.html","5af5c65ee9eb3a81f7d109711a25da00"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/page/2/index.html","62b602b481fe48b9840a52feaa087b0c"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/page/3/index.html","e695d9941d306238d11449e0517ff178"],["D:/BLOG_QZL/Blog3/public/archives/2020/03/page/4/index.html","86d9822489457b7a01a5a9f22a4f5e51"],["D:/BLOG_QZL/Blog3/public/archives/2020/04/index.html","843dc715f93875dee1350d162f1fd358"],["D:/BLOG_QZL/Blog3/public/archives/2020/04/page/2/index.html","a0daabadf5ca0906cb1773a1b25f5326"],["D:/BLOG_QZL/Blog3/public/archives/2020/05/index.html","467c5cbdda92c4933fcb2eac7dbc10a0"],["D:/BLOG_QZL/Blog3/public/archives/2020/05/page/10/index.html","ed8296f28819774ff1e9237ef541378c"],["D:/BLOG_QZL/Blog3/public/archives/2020/05/page/2/index.html","db5029158335a7b1f46d84d0ff4ee861"],["D:/BLOG_QZL/Blog3/public/archives/2020/05/page/3/index.html","4a6ae71d5b1dc807fe129f89320c1e40"],["D:/BLOG_QZL/Blog3/public/archives/2020/05/page/4/index.html","e411dfd9fbf9a89c93bdc83e20011618"],["D:/BLOG_QZL/Blog3/public/archives/2020/05/page/5/index.html","d7f2b3dfba0a83673038ec7ee7fdcb8b"],["D:/BLOG_QZL/Blog3/public/archives/2020/05/page/6/index.html","5b9c4713cc7620f7759a6431368c4dd7"],["D:/BLOG_QZL/Blog3/public/archives/2020/05/page/7/index.html","28a534a7ab8c7b2c3d297fa04b2aba92"],["D:/BLOG_QZL/Blog3/public/archives/2020/05/page/8/index.html","b8b21fcc27259375a7dbf9d0319a06b9"],["D:/BLOG_QZL/Blog3/public/archives/2020/05/page/9/index.html","9c01856a6ca06e69cd9a6b7216347cba"],["D:/BLOG_QZL/Blog3/public/archives/2020/06/index.html","b822aae9116217909c867ea242bdedef"],["D:/BLOG_QZL/Blog3/public/archives/2020/index.html","219a5eefffe80c1a485c0ea514164478"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/10/index.html","1ae3e5628b3970828cebab703aeab7bb"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/11/index.html","48a50fc193e18fcabdb23120b4c821f1"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/12/index.html","78f45c86820906dc9809eb4af0d2dee0"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/13/index.html","448c7d202b5398a421484e53066684bc"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/14/index.html","3a6b8e6fb6953bd872d706b63eda965b"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/15/index.html","513e16d76500019b9c491bcab17e820c"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/2/index.html","2a1bf6604c6f3044928f0e87ea25a95b"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/3/index.html","a2b507fec8aa73112bd511a344fc721b"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/4/index.html","18c94d76f4a2e1ee860be026861cf8ac"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/5/index.html","c3a9e6c983ed15a43140544e82ce0bb0"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/6/index.html","8e3cbf6240f094f3a5bc7b20c9c1f338"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/7/index.html","d89634e3f4f9f8c63b311729340a0066"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/8/index.html","ba53028719dcb2edbd9874290f0b5ab6"],["D:/BLOG_QZL/Blog3/public/archives/2020/page/9/index.html","0bf063610a2f0ef4484539d43f3ab7c2"],["D:/BLOG_QZL/Blog3/public/archives/21aba888.html","4fabe7a019c3bbb44619d79b33561ddf"],["D:/BLOG_QZL/Blog3/public/archives/260c7660.html","8016726f6f953b0f1bbc3aa2f4deb9f0"],["D:/BLOG_QZL/Blog3/public/archives/263cd357.html","6dc235da221ad1ccacd15ef272f568db"],["D:/BLOG_QZL/Blog3/public/archives/28492eb.html","5d749b6227aee0fb0c5c126191f5a216"],["D:/BLOG_QZL/Blog3/public/archives/28c74e52.html","8c27af4e7381c10a190ea962228eea3c"],["D:/BLOG_QZL/Blog3/public/archives/2926b12b.html","fffb3e95623378934d5e23b78a44b008"],["D:/BLOG_QZL/Blog3/public/archives/2b44a8c.html","ee45ef4014adc078c3d0033fb83e3000"],["D:/BLOG_QZL/Blog3/public/archives/2ef705db.html","a3aa99e657772a046128491f87badb2d"],["D:/BLOG_QZL/Blog3/public/archives/2f66ae56.html","d891949aa9b7ffd0e961383ae691213c"],["D:/BLOG_QZL/Blog3/public/archives/2faa8a4b.html","3600b6cd46418e3b5a20b04ed1179ea2"],["D:/BLOG_QZL/Blog3/public/archives/323fcdb7.html","344bd989ed96be6e580e6df242761eab"],["D:/BLOG_QZL/Blog3/public/archives/3478.html","a8e6348e2112f84deb7d1bed3e5970a8"],["D:/BLOG_QZL/Blog3/public/archives/34a9aaba.html","6556a88b3c5bcefec2f93f75f3e50e28"],["D:/BLOG_QZL/Blog3/public/archives/388fba4a.html","0d5db810e13541672194cbaf1fd066ae"],["D:/BLOG_QZL/Blog3/public/archives/38f02bc7.html","7e36812b77d34c7e1a674cd1202c7064"],["D:/BLOG_QZL/Blog3/public/archives/38f967fd.html","3a5d150e78e8b3a4d312e587aaa887eb"],["D:/BLOG_QZL/Blog3/public/archives/3ae1bc73.html","c436931bf960b634efaea7634eb0c117"],["D:/BLOG_QZL/Blog3/public/archives/3b16.html","acd65f10c8ee4f98c86eb104db9b1c30"],["D:/BLOG_QZL/Blog3/public/archives/3bfe5978.html","c13e6e8991100b2f1faf1f2fe1c7db3f"],["D:/BLOG_QZL/Blog3/public/archives/3f9a28c4.html","ecd1d89d59edb83f6864c7473706ba27"],["D:/BLOG_QZL/Blog3/public/archives/40d82c05.html","702dd7fcd614aeeae4493ec4dfe9d3b8"],["D:/BLOG_QZL/Blog3/public/archives/427485bf.html","418465ba6a16a058b5570e9437f3c314"],["D:/BLOG_QZL/Blog3/public/archives/448ac7f1.html","7cf963b1c53ffe67aa563640ce358bf8"],["D:/BLOG_QZL/Blog3/public/archives/454c1de9.html","c85ee0a708a7708637afa9bd234a8423"],["D:/BLOG_QZL/Blog3/public/archives/460671de.html","fa34d2912ab70da0ffb53068d77e11fd"],["D:/BLOG_QZL/Blog3/public/archives/4635f066.html","1a34c0d982ca9c8f3a76ccd48b187ead"],["D:/BLOG_QZL/Blog3/public/archives/4be6fd59.html","957350fa4eb0cda29bbd8a81fbcdfeb8"],["D:/BLOG_QZL/Blog3/public/archives/50be15c2.html","2046371e10aaf43915bb656596a39c02"],["D:/BLOG_QZL/Blog3/public/archives/510d.html","ac04451fa10ee95477787b90205cd053"],["D:/BLOG_QZL/Blog3/public/archives/514b.html","74fefcead3267ad929c6897cc1c501b2"],["D:/BLOG_QZL/Blog3/public/archives/54babab5.html","f13792c36036e25daed5dcfba5bdb4d8"],["D:/BLOG_QZL/Blog3/public/archives/550c4d87.html","880188b186ddf2ad61eecf9d4425137d"],["D:/BLOG_QZL/Blog3/public/archives/57266241.html","65c247fa2f59c4369dfc6be017b5d429"],["D:/BLOG_QZL/Blog3/public/archives/5844b406.html","95bc227a0a5ed4d8ccd2d6ee98aa0501"],["D:/BLOG_QZL/Blog3/public/archives/5937092e.html","1d5e09c333e7be1cf8196134d9b8c930"],["D:/BLOG_QZL/Blog3/public/archives/5a757a52.html","ac7f8f88888f161e4b73849278f96210"],["D:/BLOG_QZL/Blog3/public/archives/5b8eb091.html","30ca86fd20bcbe4de877dfadddba5c98"],["D:/BLOG_QZL/Blog3/public/archives/5ded0966.html","4dba3d6eb90f316afb928540b7e73b72"],["D:/BLOG_QZL/Blog3/public/archives/5fc07ec4.html","6ead363713fedda3ffbbd9de04baf4ff"],["D:/BLOG_QZL/Blog3/public/archives/60adc21f.html","457857fe045e28aaf2e602eddf348d40"],["D:/BLOG_QZL/Blog3/public/archives/622.html","31cdb9c37a99c30d73a774c2c86f071e"],["D:/BLOG_QZL/Blog3/public/archives/64f81817.html","fc60a44b161ed3313701b2d0fdac0e65"],["D:/BLOG_QZL/Blog3/public/archives/664c52ef.html","b488c8b696deba37df46400a7000c1ab"],["D:/BLOG_QZL/Blog3/public/archives/66c8de20.html","983a0810c0d94fefd90cf729ab44a3ae"],["D:/BLOG_QZL/Blog3/public/archives/67343d3.html","697aaacaf03387fa303cc08824c4a25c"],["D:/BLOG_QZL/Blog3/public/archives/67452a19.html","bb20389437a012f57340aa8b7d2b60bb"],["D:/BLOG_QZL/Blog3/public/archives/68c36619.html","6caa2f21fb9eb7a2e89e12305e6070f1"],["D:/BLOG_QZL/Blog3/public/archives/6a3f4577.html","302250de53fc0e349ffceacbac4e2157"],["D:/BLOG_QZL/Blog3/public/archives/6a59a953.html","0a795e94371bebf10344dbca951fdd74"],["D:/BLOG_QZL/Blog3/public/archives/6b2ecf81.html","2f6db1af6e35240a85341ea070ce75ae"],["D:/BLOG_QZL/Blog3/public/archives/6b668399.html","9eb6b985f241952cd81d72b7bfae55ad"],["D:/BLOG_QZL/Blog3/public/archives/6c7b6feb.html","0654c3ee3b51be5d7a902b2950cd6483"],["D:/BLOG_QZL/Blog3/public/archives/6de95ae.html","3d51bd07ff84b7c2c6ebbd26f2cba132"],["D:/BLOG_QZL/Blog3/public/archives/6fc94bb0.html","c2cf437f9c8189f95adeeb331a9a5e97"],["D:/BLOG_QZL/Blog3/public/archives/71c91a8.html","0ea024e0f554b1c32f8f57256ad7007b"],["D:/BLOG_QZL/Blog3/public/archives/73608288.html","5bc81ff87e0e49610ae004e6418b9532"],["D:/BLOG_QZL/Blog3/public/archives/738b4cec.html","80bf55c5bbdea7e56ed55ad5ad11ea34"],["D:/BLOG_QZL/Blog3/public/archives/781f4530.html","3da7f1776afc3007cb2e06094b267237"],["D:/BLOG_QZL/Blog3/public/archives/7b67faab.html","485a1db471fb7022f400b6259dc93c74"],["D:/BLOG_QZL/Blog3/public/archives/7c53.html","3e7e2715ae47e6deed99a976909667dd"],["D:/BLOG_QZL/Blog3/public/archives/7d1f8966.html","82320d74d72b5a10834328d155a8e2b0"],["D:/BLOG_QZL/Blog3/public/archives/7d6924a1.html","a4dc1ee55a3c274e5df1b51d9a6511f7"],["D:/BLOG_QZL/Blog3/public/archives/7e63bcda.html","1ee8439ce9c9467994d5e1fe7ecf63f0"],["D:/BLOG_QZL/Blog3/public/archives/7f7e.html","a60b042611eb6fec92940421d181b33b"],["D:/BLOG_QZL/Blog3/public/archives/800f51f0.html","b5a9f7dee25f41c92794ca0bffb7fe8e"],["D:/BLOG_QZL/Blog3/public/archives/80469b0c.html","b3ff2212a50747f9b205e97dc0a40d25"],["D:/BLOG_QZL/Blog3/public/archives/82369fbe.html","2b69beba213e7e51ba0bdd4de498dbb2"],["D:/BLOG_QZL/Blog3/public/archives/8605edc6.html","9c2ae7cecdadf21713cb3e882cabaa76"],["D:/BLOG_QZL/Blog3/public/archives/8632918.html","cfb3c9b2e94a73359d5d05ec0a651424"],["D:/BLOG_QZL/Blog3/public/archives/87ef.html","90d6f85ef5908bf9c1c670a211a26849"],["D:/BLOG_QZL/Blog3/public/archives/8cf18577.html","5cd3613e84d7a7ff3047d251892b5c52"],["D:/BLOG_QZL/Blog3/public/archives/8dd10d3c.html","c133578f0b423ec6c1638f9ec1171190"],["D:/BLOG_QZL/Blog3/public/archives/927246b0.html","47c5b0df040bad627705b784e8ad3d8d"],["D:/BLOG_QZL/Blog3/public/archives/960f81eb.html","dbde71ef5ce29197108a0e8a2049b60a"],["D:/BLOG_QZL/Blog3/public/archives/96b73b83.html","44ab09a4676dd021c2dfae39f692cff3"],["D:/BLOG_QZL/Blog3/public/archives/9a78acc3.html","6a6e731933adccf1c6725a04e81077ef"],["D:/BLOG_QZL/Blog3/public/archives/9b640ff1.html","e1807f487fc87bd81ff9cf7c80488cde"],["D:/BLOG_QZL/Blog3/public/archives/9c7f.html","efbe962a68b44136dddec1e042eadfff"],["D:/BLOG_QZL/Blog3/public/archives/9f7a1269.html","66634dec96ebf170f2d2a8d09221c16f"],["D:/BLOG_QZL/Blog3/public/archives/a0a78e77.html","923e3a5d661bcbb24ad11c50e1652c04"],["D:/BLOG_QZL/Blog3/public/archives/a193c39a.html","401d96640294f01cd1578313332291a3"],["D:/BLOG_QZL/Blog3/public/archives/a3edb06.html","426772c9806170185eece130eb4a60f1"],["D:/BLOG_QZL/Blog3/public/archives/a3ee11a9.html","dd3b70e792a775843803a734b0b17b5d"],["D:/BLOG_QZL/Blog3/public/archives/a4b39f57.html","1e7f8dcbfd4fc7bac90c8f2799432b86"],["D:/BLOG_QZL/Blog3/public/archives/aba94da5.html","40d1efae2cb624191d6f2b5f276fcf8b"],["D:/BLOG_QZL/Blog3/public/archives/ae12.html","b5d9db895aee7776941195bf488c76f9"],["D:/BLOG_QZL/Blog3/public/archives/b054a192.html","b785ef26777f368e6eaa25e3f49ba5b3"],["D:/BLOG_QZL/Blog3/public/archives/b215c449.html","a683e68598de30ae9dda58f1aea4fe57"],["D:/BLOG_QZL/Blog3/public/archives/b2f816aa.html","3953b8f77801718107c35c1a38f64dc6"],["D:/BLOG_QZL/Blog3/public/archives/b6a3dbf1.html","61a1dd3d8068fa9b32d0f378c0dfb44d"],["D:/BLOG_QZL/Blog3/public/archives/ba04.html","9e596b1463e9df530d4f3fd5fa992f35"],["D:/BLOG_QZL/Blog3/public/archives/ba87b609.html","be5477fb8942607c6414208afc9eb6a2"],["D:/BLOG_QZL/Blog3/public/archives/bab62969.html","97c871f10e1a4d5b79ae0d2dc8632ad2"],["D:/BLOG_QZL/Blog3/public/archives/bc3a234a.html","f616d7ab4d2b9d1d8a767c11d7644b50"],["D:/BLOG_QZL/Blog3/public/archives/bf113a1c.html","cf1d0bbe77a1b509d0f68583c0f34075"],["D:/BLOG_QZL/Blog3/public/archives/c1a4eb67.html","e0f4312492b8dbeea4afcf263843700d"],["D:/BLOG_QZL/Blog3/public/archives/c1cd5bf1.html","a1ddff1038dbac301597c3ae3a717e93"],["D:/BLOG_QZL/Blog3/public/archives/c4d17f90.html","dd115905fd14c8a26e714c1068006bf8"],["D:/BLOG_QZL/Blog3/public/archives/c812a74c.html","919f45c2e637b13a7340304559770d4f"],["D:/BLOG_QZL/Blog3/public/archives/c9c6ad08.html","b295d499390560e79109ea6e7079b887"],["D:/BLOG_QZL/Blog3/public/archives/cace6777.html","4c552d10f9d72479fdb8377378094773"],["D:/BLOG_QZL/Blog3/public/archives/cc14dac2.html","49c0f6a4c964f02565ab6439e1c3a3ce"],["D:/BLOG_QZL/Blog3/public/archives/cedb49a3.html","7380c5795cb1c6abc608d3508b49b226"],["D:/BLOG_QZL/Blog3/public/archives/cf35c829.html","d461285922648f56b81a27ca082df05a"],["D:/BLOG_QZL/Blog3/public/archives/d0ade39e.html","95936a0e0bc789ec04169546fd0247b8"],["D:/BLOG_QZL/Blog3/public/archives/d30baea4.html","e46af5ef2362292ab73f54c33c21c2d9"],["D:/BLOG_QZL/Blog3/public/archives/d4fa.html","a661e070d8c51d855120350bfba37c17"],["D:/BLOG_QZL/Blog3/public/archives/d57d.html","311088f25e657a093c5af8fdc5c34b81"],["D:/BLOG_QZL/Blog3/public/archives/d7910ce1.html","8a9e371f4490525faed8b628ca05b11d"],["D:/BLOG_QZL/Blog3/public/archives/d84f.html","2ade4b7e4120de428e78e76635f6fea3"],["D:/BLOG_QZL/Blog3/public/archives/dac06bda.html","112e4eb6eccd7db597b81b6c61f35fb4"],["D:/BLOG_QZL/Blog3/public/archives/dad59d93.html","1ff7e4dbf0c2444d67c3d6868f69a369"],["D:/BLOG_QZL/Blog3/public/archives/db2095e5.html","08be79e4ef05e9ef29d2a7e3b509eb83"],["D:/BLOG_QZL/Blog3/public/archives/db2a8c7a.html","b271a93bff974e68d4f19137a3fe1119"],["D:/BLOG_QZL/Blog3/public/archives/dcba50cd.html","47567e4c9962d186290f6f51b4c2328c"],["D:/BLOG_QZL/Blog3/public/archives/e16eef53.html","df8d3c019048ada40f4c92aa5d8b830e"],["D:/BLOG_QZL/Blog3/public/archives/e56a544e.html","29299f5199153e1c38cb5ea5281e8036"],["D:/BLOG_QZL/Blog3/public/archives/e8f15917.html","95583320b66ff11054a026ef8d6d0abf"],["D:/BLOG_QZL/Blog3/public/archives/eaabd222.html","03bd2366586ea22e1c5b4c978358d11e"],["D:/BLOG_QZL/Blog3/public/archives/ee7242dc.html","0e3d26d41ca97d3fce18a54a755beddd"],["D:/BLOG_QZL/Blog3/public/archives/ef749515.html","772a9596f7880ab45ae4b8f52810b086"],["D:/BLOG_QZL/Blog3/public/archives/f016036.html","d5863db65caf7e28252cc530768b142d"],["D:/BLOG_QZL/Blog3/public/archives/f30af5b2.html","e890944ea9b692cd2880672f86e46565"],["D:/BLOG_QZL/Blog3/public/archives/f32f.html","7ad63ded5a505354bb0bbed690b49dfa"],["D:/BLOG_QZL/Blog3/public/archives/f3aa0b39.html","600b0fd34d37e5cc2fcd9a2df935cb81"],["D:/BLOG_QZL/Blog3/public/archives/f482f5a8.html","3f70dc05b59927b68f0ad147ea7292fa"],["D:/BLOG_QZL/Blog3/public/archives/f7358229.html","24ef47a6050924aa565baef2d2c36864"],["D:/BLOG_QZL/Blog3/public/archives/f957.html","9e68a357c670264c352da44e3f825e49"],["D:/BLOG_QZL/Blog3/public/archives/fa14c975.html","5770f7d033cad0ccb262365f71669338"],["D:/BLOG_QZL/Blog3/public/archives/ff8fbe02.html","5e89304395af62e9ed1dc6b373498850"],["D:/BLOG_QZL/Blog3/public/archives/index.html","39b574146d6ef297be54f583aa41512a"],["D:/BLOG_QZL/Blog3/public/archives/page/10/index.html","39b574146d6ef297be54f583aa41512a"],["D:/BLOG_QZL/Blog3/public/archives/page/11/index.html","99bb7d530d530a232126a564be9aa754"],["D:/BLOG_QZL/Blog3/public/archives/page/12/index.html","99bb7d530d530a232126a564be9aa754"],["D:/BLOG_QZL/Blog3/public/archives/page/13/index.html","99bb7d530d530a232126a564be9aa754"],["D:/BLOG_QZL/Blog3/public/archives/page/14/index.html","39b574146d6ef297be54f583aa41512a"],["D:/BLOG_QZL/Blog3/public/archives/page/15/index.html","99bb7d530d530a232126a564be9aa754"],["D:/BLOG_QZL/Blog3/public/archives/page/2/index.html","39b574146d6ef297be54f583aa41512a"],["D:/BLOG_QZL/Blog3/public/archives/page/3/index.html","39b574146d6ef297be54f583aa41512a"],["D:/BLOG_QZL/Blog3/public/archives/page/4/index.html","39b574146d6ef297be54f583aa41512a"],["D:/BLOG_QZL/Blog3/public/archives/page/5/index.html","39b574146d6ef297be54f583aa41512a"],["D:/BLOG_QZL/Blog3/public/archives/page/6/index.html","39b574146d6ef297be54f583aa41512a"],["D:/BLOG_QZL/Blog3/public/archives/page/7/index.html","39b574146d6ef297be54f583aa41512a"],["D:/BLOG_QZL/Blog3/public/archives/page/8/index.html","39b574146d6ef297be54f583aa41512a"],["D:/BLOG_QZL/Blog3/public/archives/page/9/index.html","39b574146d6ef297be54f583aa41512a"],["D:/BLOG_QZL/Blog3/public/categories/OJ/index.html","d1b4b6fe326bf504c81cb35e086707cf"],["D:/BLOG_QZL/Blog3/public/categories/hexo博客搭建/index.html","7f9e8f9879f04878e7512e752d051693"],["D:/BLOG_QZL/Blog3/public/categories/index.html","ded8b85bd98aa728991cb05a1f28006f"],["D:/BLOG_QZL/Blog3/public/categories/博客搭建/index.html","3d5c6be26241cd2f6f827289662deeb4"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/C-C/index.html","748ce7a56b85622f671c88c445aa2550"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/C-C/page/2/index.html","28f84eb4820754a2861b663962244b8d"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/C-C/page/3/index.html","eedefaca22db91d92877e9194d964f7a"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/Git/index.html","1cbe3b73caf7c9a6c5d0b7a03ae67559"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/index.html","9f45e9dad6b12435b004a489a4299832"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/page/2/index.html","a0939146921d46aae8a0caf74f0eb920"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/page/3/index.html","38d6d2ad5df247bf709367bb9590f59f"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/page/4/index.html","c27f6a24c4347e366ac7533cd431caf0"],["D:/BLOG_QZL/Blog3/public/categories/学习笔记/page/5/index.html","11242180d842b0cbdc994b3cc338567d"],["D:/BLOG_QZL/Blog3/public/categories/实用技巧/index.html","b843bd5d7607ead3e64e781068508c70"],["D:/BLOG_QZL/Blog3/public/categories/配置/index.html","864d4e01189e0276b6f4f0a40983a851"],["D:/BLOG_QZL/Blog3/public/comment/index.html","db75a2a3d10ce28815f130a2f4a007db"],["D:/BLOG_QZL/Blog3/public/css/style.css","c8fd7484eca1e8ec23112d2a6296def3"],["D:/BLOG_QZL/Blog3/public/easysearch/about/index.html","2a3e825b37de430dadda2331dcc4530c"],["D:/BLOG_QZL/Blog3/public/easysearch/index.html","71cce6959e05beb136017abf41e48c1f"],["D:/BLOG_QZL/Blog3/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["D:/BLOG_QZL/Blog3/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["D:/BLOG_QZL/Blog3/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["D:/BLOG_QZL/Blog3/public/friends/index.html","75384bdeb2efe28f754e4f02c8dd9aed"],["D:/BLOG_QZL/Blog3/public/img/algolia.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["D:/BLOG_QZL/Blog3/public/img/azure.svg","a7577e663c1e0fb788fed78d7457ff35"],["D:/BLOG_QZL/Blog3/public/img/baidu.svg","124ce00f2785724d84e32ab6403386a6"],["D:/BLOG_QZL/Blog3/public/index.html","0d35cb71f1bed49108194771b9c49564"],["D:/BLOG_QZL/Blog3/public/js/app.js","a5d659af4b9d17196436c302e39ec916"],["D:/BLOG_QZL/Blog3/public/js/ergao.js","b1f566c49973d6fdab7ba0b372a4d17f"],["D:/BLOG_QZL/Blog3/public/js/love.js","88b75dcff60dd218bbb0db6cc37f3267"],["D:/BLOG_QZL/Blog3/public/js/search.js","63c61e56f228d83b544e21b4a7ed899c"],["D:/BLOG_QZL/Blog3/public/js/volantis.js","3c2fbf0d8e8c9ce1bbf88f0bf797b9ee"],["D:/BLOG_QZL/Blog3/public/page/10/index.html","908f73110b59287b90fd8fd6ef5233e6"],["D:/BLOG_QZL/Blog3/public/page/11/index.html","422f6f2254c877e061d19bfd98b1fbb0"],["D:/BLOG_QZL/Blog3/public/page/12/index.html","f7880d66ab63cf974715755df1f9abfa"],["D:/BLOG_QZL/Blog3/public/page/13/index.html","8c2d34e81da61cd99d8cb6b75d8764cc"],["D:/BLOG_QZL/Blog3/public/page/14/index.html","0986b81be767fb5d4b49c1dbe8abeeb2"],["D:/BLOG_QZL/Blog3/public/page/15/index.html","0645b27a7a13ee11784ce01d751c1286"],["D:/BLOG_QZL/Blog3/public/page/2/index.html","fa21436bd5499e41a3301d97964ca489"],["D:/BLOG_QZL/Blog3/public/page/3/index.html","393251ed0e5d5886fab982f31a848307"],["D:/BLOG_QZL/Blog3/public/page/4/index.html","dcb627290100a5e2b488fe9c17196c91"],["D:/BLOG_QZL/Blog3/public/page/5/index.html","f9b62a1582d6b6452e45481bd03f0af8"],["D:/BLOG_QZL/Blog3/public/page/6/index.html","15b2e81841ba48165a9cc7cae3b79df6"],["D:/BLOG_QZL/Blog3/public/page/7/index.html","ce79a866121024cbeda6053b4a83144f"],["D:/BLOG_QZL/Blog3/public/page/8/index.html","1089a9efcd667c2071648e7761cfd95b"],["D:/BLOG_QZL/Blog3/public/page/9/index.html","48b81ada4f193dc5f46e919e2a8d004e"],["D:/BLOG_QZL/Blog3/public/projects/index.html","8595843d784861ed194c000bd8cc2240"],["D:/BLOG_QZL/Blog3/public/tags/C-C/index.html","3d8e15583815c532ea5a88d0ffc84bef"],["D:/BLOG_QZL/Blog3/public/tags/C-C/page/2/index.html","cc7d833fa45605a49f7c114af0abc61b"],["D:/BLOG_QZL/Blog3/public/tags/C-C/page/3/index.html","92dd4a1f2f1f9e2e7930af0bfdb8cd0d"],["D:/BLOG_QZL/Blog3/public/tags/C/index.html","ca68b8ba38cc8114d976f40ee33ffec1"],["D:/BLOG_QZL/Blog3/public/tags/Git/index.html","db5f3385b9b054a7c83ef8ddd39c5ca8"],["D:/BLOG_QZL/Blog3/public/tags/Hexo主题/index.html","82c22e2d467a56c64e3c5c6e6e98c577"],["D:/BLOG_QZL/Blog3/public/tags/Let-s-Build-A-Simple-Interpreter/index.html","d48d7cda384dd236bd9852c4883bbd7e"],["D:/BLOG_QZL/Blog3/public/tags/Let’s-Build-A-Simple-Interpreter/index.html","d4566a9cc0ba30144ba7a05d27d379e8"],["D:/BLOG_QZL/Blog3/public/tags/OJ/index.html","90af50ef7d083db02a02004840b8443f"],["D:/BLOG_QZL/Blog3/public/tags/Yilia主题配置/index.html","6478cf60b7adfd99dba191bf771648bf"],["D:/BLOG_QZL/Blog3/public/tags/forme/index.html","b164f182c97bb4d3180bfc0af49aaf47"],["D:/BLOG_QZL/Blog3/public/tags/front-matter配置/index.html","aecef06777b5e839497cc0c516126b9e"],["D:/BLOG_QZL/Blog3/public/tags/github/index.html","aa70abc8f50176031aea59a25eb8f7c6"],["D:/BLOG_QZL/Blog3/public/tags/hexo显示pdf/index.html","d157737ef79cd68cb64a3c93c99927ae"],["D:/BLOG_QZL/Blog3/public/tags/index.html","93952802e5fc3515a3559f8fd02e5abf"],["D:/BLOG_QZL/Blog3/public/tags/matery主题配置/index.html","6b61dd0d4d2bcf7912c681e78cb9efb2"],["D:/BLOG_QZL/Blog3/public/tags/《计算机科学速成课》/index.html","e219dafd0ff1e0136f739afce762e63f"],["D:/BLOG_QZL/Blog3/public/tags/凸包/index.html","7c81fee50e993f50945e930d193e9364"],["D:/BLOG_QZL/Blog3/public/tags/布尔逻辑和逻辑门/index.html","585dd12ced4a5e480baecbde365770c2"],["D:/BLOG_QZL/Blog3/public/tags/计算几何/index.html","afff9af0092e97d0e3b80eb686db21a7"],["D:/BLOG_QZL/Blog3/public/tags/计算机科学速成课/index.html","05bf445fec90a2257fe80b980dd78ff3"],["D:/BLOG_QZL/Blog3/public/tags/配置/index.html","6653d65f35e7715be35511ad5674328a"],["D:/BLOG_QZL/Blog3/public/学习笔记/index.html","7c060d482ed6c88b6538f08c2b8593c5"]];
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







