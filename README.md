# Ülke Listesi / Istatistikleri Uygulaması

<video src="https://user-images.githubusercontent.com/58252790/126675421-c65996ac-560d-4c9d-9308-b0dcadb3cda3.mp4" width="1280" height="720" controls preload autoplay></video>
<p align="center">
  <img src="https://user-images.githubusercontent.com/58252790/126676645-7c655e9c-af3d-4c74-bfdf-430ce7e68784.png" width="250" height="140" />
  <img src="https://user-images.githubusercontent.com/58252790/126676640-d74d5dee-d02a-43fb-b109-cff11b8b2cb4.png" width="250" height="140" />
  <img src="https://user-images.githubusercontent.com/58252790/126676626-0899c34e-59ab-4270-a9ff-f17b71bcb3d2.png" width="250" height="140" />
</p>

#### [Projenin en son calisan haline buradan ulasabilirsiniz](https://country-app-yusufcmlt.netlify.app/)

#### Gereksinimler:

- [x] Ulke listesi icin [REST Countries API](https://restcountries.eu/) kullanildi.
- [x] Ulke listesi ve istatistikleri iceren 2 adet tab bulunuyor.
- [x] Ulke listesi secili oldugunda ulke bilgilerini iceren kartlar goruntulenebilir, bulunduklari bolgelere gore veya isim ile filtrelenebilir durumda.
- [x] Ulke istatistiklerini iceren tab.
- [x] Netlify uzerinde yayinlanmis demo linkine ustten ulasilabilir.

#### Projeyi calistirmak icin:

1. Repoyu clonelayin.
2. `yarn install` komutunu calistirin.
3. `yarn start` komutunu calistirin .

---

### Odev hakkinda

- Lütfen bu uygulamanızı React kullanarak yapın.
- Bu uygulamada Create-React-App kullanarak bir başlangıç yapın.

### Uygulama detayı

- Açılış sayfasında [Ülke Listesi, Istatistikler] adında iki buton olmalı. Ulke listesi ise açılışta seçili olarak gelmeli. (Tab gibi düşünebilirsiniz.)

- Ülke listesi seçili olduğu zaman ekranda API'dan dönen ülkelerin [Isim, Bayrak, Baskent, Dil] bilgilerinin yer aldığı bir kart olacak.

- Istatistikler seçili olduğu zaman ise ekranda bu ülkelerde en çok konuşulan 10 dil aşağıdaki formatta yer alacak.

  ```
  1) Dil Adı - Konusulan ulke sayisi
  ...
  10) Dil Adı - Konusulan ulke sayisi


  Orn:
  1) English - 91
  2) French  - 45
  ```

- Olsa iyi olur: Uygulamanızi bir link üzerinden yayınlamayı deneyin (deploy). Yayınlayabilirseniz readme dosyanıza live preview olarak o linki ekleyin. Kullanabileceğiniz örnek servisler: Vercel, Netlify (Başka yöntem kullanmakta özgürsünüz)

### API Link

https://restcountries.eu/rest/v2/all
