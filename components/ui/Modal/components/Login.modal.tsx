import classNames from "classnames";
import Flaticon from "components/ui/Flaticon";
import Flexible from "components/ui/Flexible";
import Input from "components/ui/FormElements/Input";
import { CancelFilledIconPath } from "constants/flaticons";
import { IToggle } from "constants/types";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { handleUserLogin } from "services/user";
import { handleAddUser } from "store/actions/user";

export default function LoginModal({ toggle }: IToggle) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const handleLogin = () => {
    setLoading(true);

    if (!username || !password) {
      setErrorMessage("Lütfen tüm alanları doldurunuz");
      return;
    }

    handleUserLogin({ username, password }).then((response) => {
      // check user login

      if (response.status === 200) {
        dispatch(handleAddUser(response.user));
        setSuccessMessage("Giriş başarılı");
        console.log("user logged");
        // set user token
        localStorage.setItem("usertoken", response.jwt);
      } else {
        setErrorMessage(response.error);
      }

      setLoading(false);
    });
  };

  useEffect(() => {
    if (errorMessage) {
      setTimeout(() => setErrorMessage(""), 2000);
    }
  }, [errorMessage]);

  return (
    <div className="p-6">
      <Flexible
        alignItem="items-center"
        className="mb-4"
        justifyContent="justify-between"
      >
        <div className="font-medium">Giriş Yap</div>

        <button
          onClick={toggle}
          className="p-2 hover:bg-opacity-80 duration-200 rounded-md bg-gray-100 dark:bg-dark-border"
        >
          <Flaticon paths={CancelFilledIconPath} size={14} />
        </button>
      </Flexible>

      <div className="mb-4">
        <label
          htmlFor="username"
          className="font-medium text-sm mb-1 text-gray-500 block"
        >
          Kullanıcı Adı
        </label>
        <Input
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setUsername(event.target.value)
          }
          value={username}
          id="username"
          className="!px-4 py-2"
          placeholder="username"
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="password"
          className="font-medium text-sm mb-1 text-gray-500 block"
        >
          Şifre
        </label>
        <Input
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setPassword(event.target.value)
          }
          value={password}
          type="password"
          id="password"
          className="!px-4 py-2"
          placeholder="******"
        />
      </div>

      <button
        onClick={handleLogin}
        className={classNames(
          "bg-primary py-3 w-full rounded-md text-white text-sm font-medium",
          {
            "bg-green-500 !text-gray-900": successMessage,
            "mb-4": errorMessage,
          }
        )}
      >
        {successMessage
          ? "Giriş Başarılı"
          : loading
          ? "Giriş Yapılıyor"
          : "Giriş Yap"}
      </button>

      {errorMessage && (
        <div className="text-red-400 font-medium text-sm">{errorMessage}</div>
      )}
    </div>
  );
}
