!function(){"use strict";const e=1612827827709,t=`cache${e}`,n=["/client/client.c8cbff04.js","/client/inject_styles.5607aec6.js","/client/index.720c4111.js","/client/index.1606d259.js","/client/github.5b969c72.js","/client/[issueNumber].126160a4.js","/client/about.4ad4bd49.js","/client/index.01fc284c.js","/client/[slug].8c0ed0c6.js"].concat(["/service-worker-index.html","/favicon.png","/logo-192.png","/logo-512.png","/manifest.json"]),c=new Set(n);self.addEventListener("install",(e=>{e.waitUntil(caches.open(t).then((e=>e.addAll(n))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((async e=>{for(const n of e)n!==t&&await caches.delete(n);self.clients.claim()})))})),self.addEventListener("fetch",(t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const n=new URL(t.request.url),s=n.protocol.startsWith("http"),a=n.hostname===self.location.hostname&&n.port!==self.location.port,i=n.host===self.location.host&&c.has(n.pathname),o="only-if-cached"===t.request.cache&&!i;!s||a||o||t.respondWith((async()=>i&&await caches.match(t.request)||async function(t){const n=await caches.open(`offline${e}`);try{const e=await fetch(t);return n.put(t,e.clone()),e}catch(e){const c=await n.match(t);if(c)return c;throw e}}(t.request))())}))}();
