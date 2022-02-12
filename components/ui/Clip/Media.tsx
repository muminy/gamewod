import { IClip } from "constants/types";
import Link from "next/link";

export interface MediaProps extends IClip {}

export default function Media(props: MediaProps) {
  return (
    <div className="">
      <div className="w-full rounded-2xl overflow-hidden mb-4 xl:h-[800px] lg:h-[600px] h-[400px]">
        <iframe
          src={`${props.detail.embed_url}&parent=gamewod.com`}
          height="100%"
          width="100%"
          allowFullScreen
        ></iframe>
      </div>

      <div className="font-bold text-2xl dark:text-white mb-1">
        {props.title}
      </div>

      <div className="font-semibold mb-4 text-sm dark:text-dark-borderlight text-gray-900 text-opacity-50">
        {props.detail.broadcaster_name}
      </div>

      <div className="max-w-5xl">
        <div className="text-sm mb-4 dark:text-white text-gray-900 text-opacity-60 font-medium">
          {props.content}
        </div>

        <div className="space-y-5">
          <Link href={"/"}>
            <a className="block">
              <span className="rounded-2xl dark:bg-dark-border dark:text-white text-gray-700 font-semibold text-sm px-5 py-2 bg-gray-100">
                Twitter Hesabımız
              </span>
            </a>
          </Link>
          <Link href={"/"}>
            <a className="block">
              <span className="rounded-2xl dark:bg-dark-border dark:text-white text-gray-700 font-semibold text-sm px-5 py-2 bg-gray-100">
                Tiktok Hesabımız
              </span>
            </a>
          </Link>
          <Link href={"/"}>
            <a className="block">
              <span className="rounded-2xl dark:bg-dark-border dark:text-white text-gray-700 font-semibold text-sm px-5 py-2 bg-gray-100">
                Instagram Hesabımız
              </span>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
