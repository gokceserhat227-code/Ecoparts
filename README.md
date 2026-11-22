# Ecoparts — oto yedek parça mağazası

Hafif, responsive ve sunucu gerektirmeyen e-ticaret arayüzü. Ürün arama/kategori filtreleme, araç seçimi, tarayıcıda sepet saklama ve WhatsApp üzerinden sipariş oluşturma özellikleri içerir. Ödeme yöntemi havale/EFT olarak sunulur; sipariş ve ödeme mağaza tarafından WhatsApp'ta manuel teyit edilir.

## Çalıştırma

Projeyi klonlayın veya dosyaları indirin. `index.html` dosyasını tarayıcıda açabilir ya da klasörde basit bir yerel web sunucusu başlatabilirsiniz:

```bash
python3 -m http.server 8000
```

Ardından `http://localhost:8000` adresini açın. Derleme adımı veya paket kurulumu gerekmez. GitHub Pages ile yayınlamak için depoda **Settings → Pages** bölümünden `main` dalını ve `/ (root)` klasörünü seçin.

## Canlı kullanımdan önce yapılandırma

`config.js` dosyasını açıp mağaza bilgilerinizi doldurun:

- `whatsappNumber`: WhatsApp numarası, ülke koduyla ve `+`/boşluk olmadan. Örnek biçim: `905xxxxxxxxx`.
- `bankName`: banka adı.
- `accountHolder`: IBAN hesap sahibi/alıcı adı.
- `iban`: müşterilerin havale/EFT yapacağı gerçek IBAN.

Bunlar doldurulmadığı sürece demo ürünler ve sepet çalışır, fakat WhatsApp siparişi açılmaz; IBAN da sipariş mesajında açıkça yapılandırılmadı olarak gösterilir. Gerçek ödeme almadan önce IBAN, alıcı ve sipariş tutarını WhatsApp üzerinden teyit edin. Bu statik sürüm banka hesabını doğrulamaz, ödemeyi otomatik tahsil/teyit etmez ve siparişleri sunucuya kaydetmez.

## Mağaza özellikleri

- Örnek ürün kataloğu (`app.js` içindeki `products` dizisi); fiyat, stok ve uyumluluk bilgilerini kendi kataloğunuzla güncelleyin.
- Arama, kategori seçimi, fiyata göre sıralama ve örnek marka/model araç seçici.
- Sepete ekleme/çıkarma, miktar değiştirme ve `localStorage` ile tarayıcıda saklama.
- Sipariş formu, sepet özeti ve IBAN/Havale-EFT bilgilerini içeren WhatsApp mesajı.
- Ürün favorileri bu demo sürümünde yalnızca arayüz durumudur; hesaplar arasında kaydedilmez.

Ürün, stok, marka/model uyumluluğu ve fiyatlar örnek amaçlıdır; satışa açmadan önce doğrulanmış bilgilerle değiştirin. Hedef alınan başka bir sitenin marka, görsel veya ürün metinlerini izinsiz kopyalamaz.
