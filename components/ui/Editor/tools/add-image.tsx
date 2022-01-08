import Input from "components/ui/FormElements/Input";
import React, { useState } from "react";

interface Props {
  handleUrl: (url: string) => void;
}

export default function AddImage(props: Props) {
  const [url, setUrl] = useState("");

  return (
    <div>
      <div className="text-gray-500 text-sm mb-2">
        Lütfen resminiz için bir URL sağlayın.
      </div>
      <Input
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setUrl(e.target.value)
        }
        value={url}
        className="text-sm py-2 px-5 mb-4"
        placeholder="Url.com/defaul.png"
      />

      <button
        onClick={() => props.handleUrl(url)}
        className="px-4 py-1 bg-primary rounded-full text-sm text-white font-medium"
      >
        Ekle
      </button>
    </div>
  );
}
