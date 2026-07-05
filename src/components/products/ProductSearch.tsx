interface Props {

  value: string;

  onChange: (value: string) => void;

}

export default function ProductSearch({

  value,

  onChange,

}: Props) {

  return (

    <input
      type="text"
      placeholder="Search products..."

      value={value}

      onChange={(e) => onChange(e.target.value)}

      className="w-full md:w-80 border rounded-xl px-4 py-3"
    />

  );

}