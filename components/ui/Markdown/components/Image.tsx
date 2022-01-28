import Image from "next/image";

interface IProps {
  src: string;
}

export default function ImageComponent(props: IProps) {
  const blurDataURL = "/assets/images/default.webp";
  return (
    <span className="relative block w-full rounded-xl h-[400px]">
      <Image
        placeholder="blur"
        blurDataURL={blurDataURL}
        className="rounded-xl"
        src={props.src}
        layout="fill"
        objectFit="cover"
      />
    </span>
  );
}
