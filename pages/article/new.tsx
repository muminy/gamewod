import Layout from "components/core/Layout";
import Flexible from "components/ui/Flexible";

export default function Article() {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto py-20">
        <div className="mb-10">
          <div className="font-semibold mb-2">Konu Başlığı</div>
          <input
            placeholder="Sorum size..."
            className="border-b-2 py-1 outline-none w-full focus:border-gray-500"
          />
        </div>

        <div className="mb-10">
          <div className="font-semibold">Konu İçeriği</div>
          <div className="text-sm mb-2 text-gray-600">
            Konu içeriği{" "}
            <a
              className="text-blue-600 font-medium"
              href="https://github.com/kaymal/Markdown#:~:text=Markdown%2C%20yaz%C4%B1lar%C4%B1m%C4%B1z%C4%B1%20d%C3%BCz%20metin%20olarak,bile%20metnin%20rahat%C3%A7a%20okunmas%C4%B1n%C4%B1%20sa%C4%9Flamakt%C4%B1r."
            >
              markdown
            </a>{" "}
            ile güçlendirilmiştir
          </div>

          <Flexible justifyContent="justify-end" className="mb-3">
            <button className="py-2 border-b-2 font-medium text-sm px-2 border-black">
              Editor
            </button>
            <button className="py-2 border-b-2 font-medium text-sm px-2 text-gray-400">
              Ön İzleme
            </button>
          </Flexible>

          <textarea
            placeholder="İçerik..."
            rows={6}
            className="border-b-2 resize-none py-1 outline-none w-full focus:border-gray-500"
          />
        </div>

        <button className="bg-blue-600 text-white py-3 px-10 rounded-full">
          Konuyu Paylaş
        </button>
      </div>
    </Layout>
  );
}
