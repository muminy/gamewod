interface IProps {
  title: string;
  date: string;
}

export default function ForumHead(props: IProps) {
  return (
    <h1 className="text-4xl mb-10 leading-[50px] dark:text-white font-semibold">
      {props.title}
    </h1>
  );
}
