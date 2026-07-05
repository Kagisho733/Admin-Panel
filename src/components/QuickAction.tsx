interface Props {
  title: string;
  description: string;
}

export default function QuickAction({
  title,
  description,
}: Props) {
  return (
    <button className="bg-white rounded-xl shadow p-5 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 transition text-left">

      <h3 className="font-bold text-lg">
        {title}
      </h3>

      <p className="text-gray-500 mt-2">
        {description}
      </p>

    </button>
  );
}