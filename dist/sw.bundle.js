if(!self.define){let e,i={};const n=(n,f)=>(n=new URL(n+".js",f).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(f,c)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let a={};const s=e=>n(e,d),r={module:{uri:d},exports:a,require:s};i[d]=Promise.all(f.map((e=>r[e]||s(e)))).then((e=>(c(...e),a)))}}define(["./workbox-456be40a"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"145.bundle.js",revision:"da5ab545cffb90b6b990fb64eff718b9"},{url:"237.bundle.js",revision:"aff8da425ffd59a0f21e37d93cf63586"},{url:"237.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~49ea73a0.bundle.js",revision:"b79ad51f033c4851deef776ac7d77d03"},{url:"app~49ea73a0.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~ca0940c6.bundle.js",revision:"9d818f8eaf67852ae8061d333a94fbec"},{url:"app~ca0940c6.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~d1658f4b.bundle.js",revision:"810c5e7166e02f36d0626be5cf7ecfc9"},{url:"app~d1658f4b.css",revision:"6a6222a2ac4ea767917e7582c39ab81c"},{url:"app~e4317507.bundle.js",revision:"d8e0384514fc0aa179f14b699c463a62"},{url:"app~e4317507.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~f6563343.bundle.js",revision:"4f3ac26adbadd72c747639f84cb6c341"},{url:"app~f6563343.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"data/DATA.json",revision:"0760fae8cf2d2b172678847987d1d95c"},{url:"favicon.png",revision:"d6e0cdf1213de5e817460e4388dd5401"},{url:"icons/icon-128x128.png",revision:"599f2a367cfd40ae87c3aedfd7f30fb4"},{url:"icons/icon-144x144.png",revision:"599f2a367cfd40ae87c3aedfd7f30fb4"},{url:"icons/icon-152x152.png",revision:"478401c5b560777875567a89c8ae0bce"},{url:"icons/icon-192x192.png",revision:"9cabf3297e9785d243b25b709b99755c"},{url:"icons/icon-384x384.png",revision:"8b2fbfbce0b717dda3d831e193a56d1d"},{url:"icons/icon-512x512.png",revision:"064f7e467154a729619f1dbd643c5cc1"},{url:"icons/icon-72x72.png",revision:"f49091cfc4e13ca8da1611b8bb9e0ec0"},{url:"icons/icon-96x96.png",revision:"2bec948bf1b645d83d6ec0e65b4f990f"},{url:"index.html",revision:"f7bcb8fcb80acbdefe74ffece3e7f981"},{url:"manifest.json",revision:"b37e2191f6f62a13c343257b53ebc0f4"}],{}),e.registerRoute(/^https:\/\/restaurant-api.dicoding.dev\//,new e.StaleWhileRevalidate({cacheName:"2024-04-26T13:26:42.881Z",plugins:[new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));