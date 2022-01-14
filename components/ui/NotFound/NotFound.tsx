export default function NotFound({ title }: { title?: string }) {
  return (
    <div className="flex flex-col justify-center mx-auto items-center min-h-[calc(100vh-120px)]">
      <div className="font-bold text-2xl">
        {title || "Bir sorunla karşılaştık"}
      </div>

      <p className="text-gray-500 mb-4">
        Sorun olduğunu düşünüyorsanız lütfen bunu bize bildirin.
      </p>

      <button className="bg-primary text-white px-7 py-2 font-medium rounded-full">
        Bildir
      </button>
    </div>
  );
}
