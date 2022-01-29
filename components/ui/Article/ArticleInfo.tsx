import Input from "../FormElements/Input";

export default function ArticleInfo() {
  return (
    <div className="px-5 sticky top-0 py-4 flex flex-col justify-between">
      <div className="flex h-full">
        <Input placeholder="Araa" />
      </div>

      <div className="justify-end items-end">footer</div>
    </div>
  );
}
