import Link from "next/link";

export default function Media() {
  return (
    <div className="">
      <div className="w-full mb-4 h-[400px]">
        <img
          className="w-full h-full object-cover rounded-xl"
          src="https://cdn.dribbble.com/users/434606/screenshots/6165524/media/7ffeccc0f831aab8c1531a8997371092.jpg?compress=1&resize=1200x900&vertical=top"
        />
      </div>

      <div className="font-bold text-2xl mb-4">
        Poster and Tshirt design i did for @streamelementsofficial Twitch Con
        2018. Enjoy!
      </div>

      <div className="flex space-x-2 mb-4 items-center">
        <div className="w-6 h-6 rounded-full bg-gray-200">
          <img src="https://cdn.dribbble.com/users/434606/avatars/small/959c52f157b8e22f8a78b4c96b154976.png?1577959569" />
        </div>
        <div className="font-semibold text-sm text-gray-900 text-opacity-75">
          billy
        </div>
      </div>
      <div className="max-w-5xl">
        <div className="text-sm mb-4 text-gray-900 text-opacity-60 font-medium">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry{"'"}s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled.
        </div>

        <div className="flex space-x-3">
          <Link href={"/"}>
            <a className="inline-flex rounded-2xl text-gray-700 font-semibold text-sm px-5 py-2 bg-gray-100">
              <span>Twitter Hesabımız</span>
            </a>
          </Link>
          <Link href={"/"}>
            <a className="inline-flex rounded-2xl text-gray-700 font-semibold text-sm px-5 py-2 bg-gray-100">
              <span>Instagram Hesabımız</span>
            </a>
          </Link>
          <Link href={"/"}>
            <a className="inline-flex rounded-2xl text-gray-700 font-semibold text-sm px-5 py-2 bg-gray-100">
              <span>Tiktok Hesabımız</span>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
