# Space Defender

Play: <a href="http://spacedefender.freeoda.com">spacedefender.freeoda.com</a>
<p><img src="https://github.com/samet-ozkan/Space-Defender/blob/main/screenshots/1.jpg" width="40%" height="20%"></p>

## TR
Web Tabanlı Programlama dersi Javascript oyun projesi.

Basit bir uzay oyunu.

#### Başlangıç:
<p>Klavyeden herhangi bir tuşa basılmasıyla oyun başlar.</p>

#### Amaç:
<p>Meteorları yok ederek geçişlerini engellemek.</p>

#### Nesneler:
<p>Uzay gemisi, mermi, meteor ve kırmızı panel.</p>

#### Oyun:
<p>Sabit konumu olan ve yön verilebilen bir uzay gemisi bulunur. Geminin tek görevi, tüm meteorları yok etmektir.</p>

#### Kırmızı ve mavi mermiler:
<p>Mavi renkli mermiler etkisizdir, meteorlara hasar vermez. Mermileri aktifleştirmek amacıyla
geminin sağında ve solunda (kırmızı renkli) yardımcı paneller bulunur. Bu paneller mavi renkli mermileri, kırmızı renge dönüştürerek
mermileri etkili hale getirir. Mavi renkli merminin, kırmızı renge dönüşmesi için panellerden herhangi birine bir kez temas etmesi yeterlidir.</p>

#### Mermi sayısı:
<p>Uzay gemisi başlangıçta 20 adet mermiye sahiptir. Her ateşleme sonrası birer mermi azalır. Merminin meteoru yok etmesi
durumunda atılan mermi tekrar uzay gemisine döner. Böylece mermi kaybı yaşanmamış olur. Iskalanan mermi ise uzay gemisi için kayıptır.</p>

#### Meteor sıklığı:
<p>Uzay gemisi her ateş ettiğinde yeni bir meteor belirir. Bu yüzden isabetsiz atışlar uzay gemisi için dezavantajdır.
Oyun sonu: Yeniden oynamak için klavyeden herhangi bir tuşa basılması yeterlidir.</p>

#### HP
<p>Uzay gemisi başlangıçta 100 HP'ye sahiptir. Uzay gemisi engelini geçen her meteor, uzay gemisinden 5 HP alır. HP'nin 0 olduğu durumda
oyun biter.</p>

## Kontroller
<ul>
    <li>Sağ Yön Tuşu: Sağa dön</li>
    <li>Sol Yön Tuşu: Sola dön</li>
    <li>Space: Ateş et</li>
</ul>

## Tasarım
<p>Background, meteor ve uzay gemisi Adobe Photoshop CS6'da pixel art olarak çizildi ve efekt verildi. <br>Panel ve mermi için fillRect(), arc() fonksiyonları kullanıldı.<p>
<p><img src="https://github.com/samet-ozkan/Space-Defender/blob/main/images/space.jpg" width="40%" height="20%"></p>
<p><img src="https://github.com/samet-ozkan/Space-Defender/blob/main/images/meteor.png" width="20%" height="20%"> <img src="https://github.com/samet-ozkan/Space-Defender/blob/main/images/spaceship.png" width="20%" height="20%"></p>

## Teknolojiler
<ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
</ul>

## Kurulum
```sh
git clone https://github.com/samet-ozkan/Space-Defender.git
cd Space-Defender
open index.html
```

## İletişim
<p>Email: <a href="mailto:samet-ozkan@outlook.com">samet-ozkan@outlook.com</a></p>
