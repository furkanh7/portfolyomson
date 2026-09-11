# furkanhilaloglu.com

Kişisel portfolyo sitem. React (Create React App) + Tailwind CSS ile yazıldı,
GitHub Actions ile derlenip GitHub Pages üzerinde yayınlanıyor.

**Canlı:** https://furkanhilaloglu.com

## Kurulum

```bash
npm install
npm start
```

Uygulama http://localhost:3000 adresinde açılır.

İletişim formu EmailJS kullanıyor. Kendi hesabınla denemek istersen
`.env.example` dosyasını `.env` olarak kopyalayıp değerleri doldur; boş
bırakırsan `src/config/emailjs.js` içindeki varsayılanlar geçerli olur.

## Komutlar

| Komut | Ne yapar |
| --- | --- |
| `npm start` | Geliştirme sunucusu |
| `npm run build` | `build/` klasörüne production derlemesi |
| `npm test` | Testleri izleme modunda çalıştırır |

## Yayınlama

`main` dalına her push, [.github/workflows/deploy.yml](.github/workflows/deploy.yml)
iş akışını tetikler: proje derlenir ve `build/` klasörü GitHub Pages'e yüklenir.
Elle tetiklemek için Actions sekmesinden **Run workflow** kullanılabilir.

## Özel domain

Domain GoDaddy'de kayıtlı, DNS kayıtları GitHub Pages'e bakıyor:

| Tür | Ad | Değer |
| --- | --- | --- |
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `furkanh7.github.io` |

Domain adı [public/CNAME](public/CNAME) dosyasında tutulur. Bu dosya `public/`
altında olmak zorunda — derleme çıktısına ancak oradan kopyalanır, repo
kökünde kalırsa Pages'e hiç ulaşmaz.

## Sayfa yönlendirmesi hakkında

GitHub Pages statik dosya sunduğu için `/projects` gibi adresler sunucuda
karşılık bulmaz. [public/404.html](public/404.html) bu adresleri kök adrese
`?redirect=` parametresiyle yönlendirir, `public/index.html` içindeki eş script
adres çubuğunu geri yazar ve react-router doğru sayfayı açar. Yeni bir rota
eklerken ayrıca bir şey yapmak gerekmez.

## Yapı

```
public/          statik dosyalar, CNAME, 404.html, sitemap
src/
  components/    Layout, Navbar, ui (Button/Input/Title)
  config/        EmailJS ayarları
  hooks/         useTheme (açık/koyu tema)
  pages/         about, expertise, project, contact, notFound
```
