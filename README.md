# Space Defender

<h1>Play: <a href="http://spacedefender.freeoda.com">spacedefender.freeoda.com</a></h1>

<h1>TR</h1>
<hr>
Web Tabanlı Programlama dersi Javascript oyun projesi.

Basit bir uzay oyunu.

<h5>Başlangıç:</h5>
<p>Klavyeden herhangi bir tuşa basılmasıyla oyun başlar.</p>

<h5>Amaç:</h5>
<p>Meteorları yok ederek geçişlerini engellemek.</p>

<h5>Nesneler:</h5>
<p>Uzay gemisi, mermi, meteor ve kırmızı panel.</p>

<h5>Oyun:</h5>
<p>Sabit konumu olan ve yön verilebilen bir uzay gemisi bulunur. Geminin tek görevi, tüm meteorları yok etmektir.</p>

<h5>Kırmızı ve mavi mermi:</h5>
<p>Mavi renkli mermiler etkisizdir, meteorlara hasar vermez. Mermileri aktifleştirmek amacıyla
geminin sağında ve solunda (kırmızı renkli) yardımcı paneller bulunur. Bu paneller mavi renkli mermileri, kırmızı renge dönüştürerek
mermileri etkili hale getirir. Mavi renkli merminin, kırmızı renge dönüşmesi için panellerden herhangi birine bir kez temas etmesi yeterlidir.</p>

<h5>Mermi sayısı:</h5>
<p>Uzay gemisi başlangıçta 20 adet mermiye sahiptir. Her ateşleme sonrası birer mermi azalır. Merminin meteoru yok etmesi
durumunda atılan mermi tekrar uzay gemisine döner. Böylece mermi kaybı yaşanmamış olur. Iskalanan mermi ise uzay gemisi için kayıptır.</p>

<h5>Meteor sıklığı:</h5>
<p>Uzay gemisi her ateş ettiğinde yeni bir meteor belirir. Bu yüzden isabetsiz atışlar uzay gemisi için dezavantajdır.
Oyun sonu: Yeniden oynamak için klavyeden herhangi bir tuşa basılması yeterlidir.</p>

<h5>HP:</h5>
<p>Uzay gemisi başlangıçta 100 HP'ye sahiptir. Uzay gemisi engelini geçen her meteor, uzay gemisinden 5 HP alır. HP'nin 0 olduğu durumda
oyun biter.</p>

<h3>Kontroller</h3>
<hr>
<p>Sağ Yön Tuşu: Sağa dön</p>
<p>Sol Yön Tuşu: Sola dön</p>
<p>Space: Ateş et</p>

<h3>Tasarım</h3>
<hr>
<p>Background, meteor ve uzay gemisi Adobe Photoshop CS6'da pixel art olarak çizildi ve efekt verildi. Panel ve mermi için fillRect(), arc() fonksiyonları kullanıldı.<p>
<p><img src="https://github.com/samet-ozkan/Space-Defender/blob/main/images/space.png" width="20%" height="20%"></p>
<p><img src="https://github.com/samet-ozkan/Space-Defender/blob/main/images/meteor.png" width="20%" height="20%"> <img src="https://github.com/samet-ozkan/Space-Defender/blob/main/images/spaceship.png" width="20%" height="20%"></p>

<h3>Ekran Görüntüleri</h3>
<p><img src="https://github.com/samet-ozkan/Space-Defender/blob/main/screenshots/1.jpg" width="20%" height="20%"></p>

<h3>Teknolojiler</h3>
<hr>
<ul>
    <li>HTML</li>
    <li>CSS</li>
    <li>JavaScript</li>
</ul>

<h3>Kurulum<h3>
<hr>
```sh
git clone https://github.com/samet-ozkan/Space-Defender.git
cd Space-Defender
open index.html
```

<h3>İletişim<h3>
<hr>
<p>Email: samet-ozkan@outlook.com</p>







