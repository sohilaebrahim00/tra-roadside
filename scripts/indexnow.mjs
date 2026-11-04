// Tells Bing and the other IndexNow engines which pages exist, after a deploy.
// Reads the live sitemap, so it always matches what is published.
//   node scripts/indexnow.mjs
const HOST = "www.txroadsideassistance.com";
const KEY = "35ad1d077d955c5e2fb198da3e7ae610";

const sitemap = await (await fetch(`https://${HOST}/sitemap.xml`)).text();
const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: `https://${HOST}/${KEY}.txt`, urlList }),
});
console.log(`IndexNow: sent ${urlList.length} URLs, status ${res.status}`);
