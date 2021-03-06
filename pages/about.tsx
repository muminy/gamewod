import classNames from "classnames";
import Layout from "components/core/Layout";
import F from "constants/style";
import style from "styles/about.module.css";

export default function About() {
  return (
    <Layout
      seo={{ title: "Hakkımızda" }}
      className={classNames(
        style.staticcontainer,
        "bg-pink-50 h-full dark:bg-black"
      )}
    >
      <div className="max-w-5xl mx-auto">
        <h3 className="font-bold dark:text-white mb-2 text-lg text-gray-700 text-opacity-90">
          Hakkımızda
        </h3>
        <div className={style.content}>
          <p>
            <b>Gamewod.com</b> Elektronik spor alanında sizlere hizmet
            sunabilmek amacı ile kurulmuş bir websitesidir. <b>Gamewod.com</b>{" "}
            ile birlikte <b>CS:GO</b>, <b>PUBG</b>, <b>Valorant</b> ve{" "}
            <b>LOL</b> alanlarındaki son gelişmeleri, önemli anları yada video
            cliplerini keşfedebilir diğer kullanıcılarla birlikte iletişim
            halinde olabilirsiniz
          </p>

          <h3 className="font-bold mb-2 text-lg dark:text-white">
            Hedeflerimiz
          </h3>
          <p>
            İlk hedeflerimizden birisi de içerisinde <b>game</b> geçen bir
            domain bulmaktı. Bunda ki amacımız game kelimesi ile globale
            oynayabilmekti. İlk hedefimiz olan domain alma işini{" "}
            <b>gamewod.com</b> ile çözmüş olduk.
          </p>
          <p>
            İkinci ve en büyük hedeflerimizden biriside kullanıcıların
            birbirleri ile iletişim halinde olabileceği bir website
            oluşturmaktı. Bunu da ilk versiyon ile birlikte kullanıcıların
            hizmetine sunduk.
          </p>
        </div>
      </div>
    </Layout>
  );
}
