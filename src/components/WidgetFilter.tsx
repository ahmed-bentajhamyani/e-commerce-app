interface IWidgetFilter {
  title: string;
  sub: string[];
  onColorChange: (value: string) => void;
}

export default function WidgetFilter({
  title,
  sub,
  onColorChange,
}: IWidgetFilter) {
  return (
    <div className="flex flex-col gap-6 p-4 h-[200px]">
      <h3 className="uppercase font-playfair-display font-semibold">{title}</h3>
      <ul className="text-secondary uppercase overflow-y-auto overflow-x-hidden">
        {sub.map((item) => (
          <li
            key={item}
            onClick={() => onColorChange(item)}
            className="hover:opacity-50 cursor-pointer"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
