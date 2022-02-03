import classNames from "classnames";
import Layout from "components/core/Layout";
import F from "constants/style";
import style from "styles/about.module.css";

export default function PrivacyPolicy() {
  const website = <b>Gamewod.com</b>;
  return (
    <Layout
      seo={{
        title: "Gizlilik Politikası",
        openGraph: { title: "Gizlilik Politikası" },
      }}
      className={classNames("mb-10", F.paddingHorizontal)}
    >
      <div className="bg-yellow-50 dark:bg-opacity-0 rounded-3xl py-20">
        <div className="max-w-5xl mx-auto">
          <h3 className="font-bold dark:text-white text-3xl mb-0.5 text-gray-700 text-opacity-90">
            Gizlilik Politikası
          </h3>
          <div className="mb-10 dark:text-gray-400">
            Son güncelleme: 29 Ocak 2022
          </div>
          <div className={style.content}>
            <p>
              <b>1.</b> Bu internet sitesine; {website} internet adresinden
              ulaşılmaktadır. Siteye erişmekle veya siteyi kullanmakla, aşağıda
              belirtilen şartlara uymayı kabul etmektesiniz.
            </p>
            <p>
              <b>2.</b> {website} bu sözleşmede her zaman değişiklik yapabilir
              ve bu değişiklikler değiştirilmiş sözleşmenin siteye konulmasıyla
              derhal geçerlilik kazanır. Bu değişikliklerden haberdar olmak
              amacıyla periyodik olarak sözleşmenin son değişiklik tarihini
              takip etmeniz gerekmekte. Siteye erişerek veya siteyi kullanmaya
              devam ederek yeni sözleşmeyi kesin olarak kabul etmiş
              sayılırsınız.
            </p>
            <p>
              <b>3.</b> İşbu internet sitesi ziyaretçilerine ilgi alanlarına
              göre reklam göstermek ve bazı alanları doldururken vakit
              kazanmalarını sağlamak gibi çeşitli amaçlarla cookie olarak
              adlandırılan çerezler kullanmaktadır. Cookie olarak adlandırılan
              çerezlerin kullanılmasını istemeyen ziyaretçiler çerez kullanımını
              tarayıcı ayarlarından kapatabilir.
            </p>
            <p>
              <b>4.</b> {website} yönetimi site içeriğinin doğruluk veya
              kesinliği konusunda hiçbir garanti vermez. İçeriklerde öznel
              yargılara yer verilmiş olabilir.
            </p>
            <p>
              <b>5.</b> İşbu sitede üçüncü şahıslar tarafından idare edilen
              internet sitelerine bağlantılar ve yönlendiriciler sağlanmaktadır.
              Üçüncü kişilere ait sitelerdeki bilgiler, ürünler ve hizmetler
              hiçbir şekilde işletilmemekte ve denetlememektedir. Bu sitede ve
              üçüncü şahıs sitelerindeki içerik olduğu gibi sağlanmaktadır ve
              yukarıdaki paragrafta belirttiğimiz hususlar dahil hiçbir konuda
              açık ya da dolaylı hiç bir garanti verilmemektedir. Ayrıca, bu
              durum üçüncü kişilerin internet sitelerinin içeriğinin doğruluğu
              ve güvenirliğinin onaylandığı anlamına gelmemektedir. Bu nedenle
              üçüncü kişilerin internet sitelerinde yer alan bilgi veya fikir
              konusunda sorumluluk kabul edilmemektedir. Yine üçüncü kişilerin
              siteye verdikleri linklerin internet içeriklerinin doğruluğu ve
              güvenilirliğinin tarafımızdan onaylandığı anlamı da asla
              çıkarılmamalıdır.
            </p>
            <p>
              <b>6.</b> İşbu web sitesindeki bilgiler sadece kullanıcıyı
              bilgilendirmek amacı ile sunulmuş olup; hukuki, tıbbi, finansal,
              yatırım, vergi, muhasebe ve diğer benzeri konularda tavsiye
              niteliğinde değildir. İşbu internet sitesinde yayınlanan bilgilere
              güvenerek yapacağınız herhangi bir işlemin sorumluluğu tamamen
              size aittir.
            </p>
            <p>
              <b>7.</b> İşbu internet sitesine kayıt olan, içerik paylaşan,
              içeriklerine yorum yapan kişilerin IP adresi, elektronik posta
              adresi, isim ve soy ismini kayıt altında tutmaktadır ve hukuki bir
              durum sonucu istendiğinde paylaşabilir.
            </p>
            <p>
              <b>8.</b> İşbu internet sitesi tüm kullanıcılarının
              kullanıcılarının kullandığı internet taryıcısı, işletim sistemi,
              erişim süresi, bağlantının geldiği konum, sayfa içerisindeki
              davranışlar, cinsiyet, ilgi alanı ve ilgili internet adresi gibi
              istatistiksel bilgileri kendisi veya üçüncü parti bir uygulama
              aracılığıyla toplayabilir ve kayıt altında tutabilir. Kayıt edilen
              bu veriler kimlik belirtilmeden istatistik sunumu amacıyla üçüncü
              kişi, kurum ve kuruluşlarla paylaşılabilir.
            </p>
            <p>
              <b>9.</b> İşbu internet sitesinde yer alan içeriğin kısmen veya
              tamamen alıntı yapılması veya yayımlanması iletişim sayfasında yer
              alan e-posta adresleri üzerinden onay alınmadığı sürece yasaktır.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
