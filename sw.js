/* GUARDIAN:BEGIN
   🛡️ QuranKarem.org — © 2026 Artist Altayeb Amer
   الفنان الطيب عامر  ·  https://qurankarem.org
   Protected by ALTAYEB GUARDIAN v4.0
   GUARDIAN:END */
// QuranKarem Service Worker — v69
// استراتيجية: Network-First لملفات الموقع (HTML/JS) حتى تظهر التحديثات فوراً،
// وCache-First لمكتبات CDN والخطوط والصوت لتوفير الباندويدث والعمل بلا اتصال.
const CACHE = 'qurankarem-v70';
const CORE = ['/', '/index.html', '/app.js?v=70', '/manifest.json', '/guardian.js?v=1', '/icon-192.png', '/icon-512.png'];

// التثبيت — خزّن النواة ثم تولَّ التحكم فوراً
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE).then((c) => c.addAll(CORE).catch(() => {}))
      .then(() => self.skipWaiting())
  );
});

// التفعيل — احذف الكاشات القديمة وتحكّم بكل الصفحات فوراً
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = req.url;
  if (url.startsWith('chrome-extension://')) return;

  const sameOrigin = url.startsWith(self.location.origin);
  const isNavigation = req.mode === 'navigate';
  const isCore = sameOrigin && (isNavigation ||
    /\/(index\.html)?(\?|$)/.test(url.replace(self.location.origin, '')) ||
    url.includes('/app.js') || url.includes('/manifest.json') || url.includes('/guardian.js') || url.includes('/sw.js') ||
    url.includes('/supporters.json'));   // بيانات الداعمين تُحدَّث يدوياً — يجب ألا تعلق في الكاش

  // API — شبكة فقط (طازج دائماً)
  if (url.includes('api.alquran.cloud') || url.includes('api.aladhan.com') ||
      url.includes('api.quran.com') || url.includes('api.anthropic.com')) {
    e.respondWith(fetch(req).catch(() =>
      new Response('{"error":"offline"}', { headers: { 'Content-Type': 'application/json' } })));
    return;
  }

  // ملفات الموقع (HTML/JS/manifest) — Network First → كاش احتياطي عند انقطاع الشبكة
  if (isCore) {
    e.respondWith(
      fetch(req).then((res) => {
        if (res && res.status === 200) {
          const clone = res.clone();
          caches.open(CACHE).then((c) => c.put(req, clone));
        }
        return res;
      }).catch(() => caches.match(req).then((c) => c || caches.match('/index.html')))
    );
    return;
  }

  // الصوت والخطوط ومكتبات CDN — Cache First (توفير باندويدث + عمل بلا اتصال)
  e.respondWith(
    caches.match(req).then((cached) => {
      if (cached) return cached;
      return fetch(req).then((res) => {
        if (res && res.status === 200 && (res.type === 'basic' || res.type === 'cors')) {
          const clone = res.clone();
          caches.open(CACHE).then((c) => c.put(req, clone));
        }
        return res;
      }).catch(() => undefined);
    })
  );
});

// السماح للصفحة بطلب تفعيل التحديث فوراً
self.addEventListener('message', (e) => {
  if (e.data === 'skipWaiting') self.skipWaiting();
});
