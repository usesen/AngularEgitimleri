# AngularEgitimleri
Angular Eğiitimleri Beginner and Advanced DDD banckend 

1. Form Yönetimi
Reactive Forms ve Template-driven Forms yapılarını kullanarak formlar oluşturmayı öğrenmiş olmalısın. Form doğrulama, hata mesajları ve kullanıcı girişi doğrulama işlemlerine hâkim olman önemlidir.
2. Component Yapısı ve İletişim
Component'ler arasında veri alışverişi (parent-child component iletişimi, @Input() ve @Output() direktifleri).
Component lifecycle (bileşen yaşam döngüsü) ve hook'lar (örneğin ngOnInit, ngOnDestroy).
3. Routing ve Navigation
Angular’da Routing ile farklı sayfalar arası geçişi öğrenmelisin.
Dinamik parametreler ile URL yönetimi ve guard (yönlendirme koruması) kullanarak yetkilendirme işlemlerini yönetmek de önemli.
4. Services ve Dependency Injection (DI)
Service yapıları ile iş mantığını komponentlerden ayırıp modüler bir yapı oluşturmuş olmalısın.
Dependency Injection (Bağımlılık Enjeksiyonu) prensibini anlamış olman ve servisleri farklı component'lerde kullanabilmen beklenir.
5. HTTP Client ve API İletişimi
Web API'leri ile Angular’da HttpClient kullanarak GET, POST, PUT ve DELETE istekleri yapmayı öğrenmiş olmalısın.
Interceptor kullanarak isteklerin başına veya sonuna ekleme yapmayı (örneğin, JWT token eklemek) öğrenmek de önemli.
6. State Management (Durum Yönetimi)
Küçük projelerde service tabanlı durum yönetimi yeterli olabilir, ancak daha büyük projelerde NgRx gibi bir state management kütüphanesi kullanmak isteyebilirsin.
7. Form Validasyonları
FormGroup, FormControl ve Validators kullanarak validasyon yapmış olman önemli.
Özelleştirilmiş validasyonlar oluşturmayı öğrenmek de işine yarayacaktır.
8. Angular Modülleri
Lazy Loading (Geç Yükleme) ve modüler yapı ile büyük projelerde modüllerin performansını artırmayı öğrenmen gerek.
9. Pipes ve Directives
Kendi Custom Pipes (özel pipe'lar) ve Directives (özel direktifler) oluşturmayı öğrenmiş olmalısın.
10. Testing (Test Yazma)
Unit test ve integration test yazmayı öğrenmek, Karma ve Jasmine kullanarak component'lerin ve servislerin testlerini yapabilmek önemli.
11. Performans Optimizasyonu
Change Detection Strategy kullanarak performans optimizasyonu yapmak ve büyük projelerde performansı iyileştirmek için OnPush stratejisini öğrenmek önemlidir.
Async pipe ve TrackBy gibi performans artırıcı teknikleri de bilmelisin.
12. Angular Material ve UI Kütüphaneleri
Angular Material veya PrimeNG gibi popüler UI kütüphaneleriyle kullanıcı arayüzü (UI) oluşturmuş olman faydalı olacaktır.
13. Authentication ve Authorization
Kullanıcı kimlik doğrulaması ve yetkilendirme süreçlerini yönetmek için JWT veya OAuth2 gibi yöntemlerle entegrasyon yapmayı öğrenmek önemli.
14. Deployment (Yayınlama)
Angular uygulamalarını production build (prod build) haline getirmek ve sunucuya deploy etmeyi öğrenmek önemli bir beceridir.
15. Responsive Design
Uygulamanın mobil uyumlu olması için CSS Media Queries, Angular Flex Layout veya Bootstrap gibi kütüphaneleri kullanarak duyarlı (responsive) tasarım yapmayı öğrenmen gerekir.
# Angular Dersleri

## Proje Açıklaması
Bu proje, **Angular** çerçevesinde menüler, componentler, routing (yönlendirme) ve guard (koruma) yapılarını içeren bir eğitim uygulamasıdır. Proje, Angular ile dinamik web uygulamaları geliştirmek isteyenler için temel bir örnek teşkil etmektedir.

## Başlangıç
Bu adımları izleyerek projeyi kendi bilgisayarınıza kurabilirsiniz.

### Gereksinimler
- **Node.js**: Projenin çalışması için en son sürüm Node.js yüklü olmalıdır.
- **Angular CLI**: Angular projeleri oluşturmak ve yönetmek için gereklidir.

### Kurulum
Projeyi yerel bilgisayarınıza kurmak için aşağıdaki adımları takip edin:

1. Bu projeyi klonlayın:
   ```bash
   git clone https://github.com/kullanici-adiniz/angular-dersleri.git
