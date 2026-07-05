import { productCategories } from "../../data/productCategories";

interface Props {

  value: string;

  onChange: (value: string) => void;

}

export default function CategoryFilter({

  value,

  onChange,

}: Props) {

  return (

    <select

      value={value}

      onChange={(e) => onChange(e.target.value)}

      className="border rounded-xl px-4 py-3"

    >

      <option value="">

        All Categories

      </option>

      {productCategories.map((category) => (

        <option
          key={category}
          value={category}
        >

          {category}

        </option>

      ))}

    </select>

  );

}