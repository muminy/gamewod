import Flexible from "components/ui/Flexible";

export default function Security() {
  return (
    <div>
      <div className="mb-5">
        <h3 className="font-semibold mb-1">Eski Şifreniz</h3>
        <input
          id="pphoto"
          type={"text"}
          placeholder="Kullanıcı Adı"
          className="py-3 px-5 rounded-md w-full border"
        />
      </div>

      <Flexible className="mb-10 space-x-5">
        <div className="w-2/4">
          <h3 className="font-semibold mb-1">Yeni Şifreniz</h3>
          <input
            id="pphoto"
            type={"text"}
            placeholder="Kullanıcı Adı"
            className="py-3 px-5 rounded-md w-full border"
          />
        </div>
        <div className="w-2/4">
          <h3 className="font-semibold mb-1">Yeni Şifre Tekrar</h3>
          <input
            id="pphoto"
            type={"text"}
            placeholder="Kullanıcı Adı"
            className="py-3 px-5 rounded-md w-full border"
          />
        </div>
      </Flexible>

      <button className="bg-gray-900 mb-10 text-white px-6 font-medium py-2.5 rounded-2xl">
        Değiştir
      </button>

      <div className="mb-10">
        <h3 className="font-semibold text-lg">Email Adresiniz</h3>
        <div className="text-gray-500 text-sm mb-3">
          E-mail adresinizi sadece sizin istediğiniz kullanıcılar tarafından
          görülecektir.
        </div>
        <input
          id="pphoto"
          type={"text"}
          placeholder="Email Adresiniz"
          className="py-3 px-5 rounded-md w-full border"
        />
      </div>

      <button className="bg-gray-900 text-white px-6 font-medium py-2.5 rounded-2xl">
        Kaydet
      </button>
    </div>
  );
}
