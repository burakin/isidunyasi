# Isı Dünyası

Türkiye'deki ev sahiplerine yönelik, Astro + Markdown tabanlı responsive blog prototipi.

## Gereksinimler

- macOS üzerinde Node.js 20.19+ veya 22.12+ (Astro 5 için uyumlu güncel Node önerilir)
- npm

## Kurulum

```bash
cd isi-dunyasi
npm install
npm run dev
```

Terminalde gösterilen `http://localhost:4321` adresini tarayıcıda açın.

## Yeni yazı ekleme

`src/content/blog/` içine yeni bir `.md` dosyası ekleyin. Örnek:

```md
---
title: "Yeni yazı başlığı"
description: "Kısa özet"
date: 2026-10-08
category: "Başlangıç Rehberi"
image: "https://example.com/photo.jpg"
imageAlt: "Fotoğraf açıklaması"
featured: false
readTime: 5
---

## İlk başlık

Yazı metni buraya.
```

Yazı otomatik olarak ana sayfaya ve `/yazilar/dosya-adi/` adresine eklenir. `##` başlıkları içindekiler bölümünde görünür. Görseller prototipte Unsplash üzerinden yüklenir; canlı yayına çıkarken kullanım hakları uygun kendi görsellerinizi `/public/images` içine koymanız önerilir.

## Üretim derlemesi

```bash
npm run build
npm run preview
```

Statik site `dist/` dizinine üretilir. Netlify, Vercel veya Cloudflare Pages üzerinden dağıtılabilir. Yayına çıkmadan önce `astro.config.mjs` içindeki `site` alanını gerçek alan adınızla güncelleyin.

## Notlar

- Bu sürümde arama ve kategori filtreleme tarayıcıda çalışır.
- Yönetim paneli, üyelik veya veritabanı yoktur.
- Örnek içerikler editoryal taslaktır; teknik veriler ve maliyetler yayından önce doğrulanmalıdır.
