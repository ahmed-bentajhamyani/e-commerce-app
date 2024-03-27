export default function SelectBox({
  setSort,
}: {
  setSort: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <select
      defaultValue={"default"}
      onChange={(e) => setSort(e.currentTarget.value)}
      id="countries"
      className="bg-bg-secondary border-b-[3px] rounded-sm border-secondary/50 text-gray-900 text-sm outline-none w-full p-3"
    >
      <option value="default">Sort By...</option>
      <option value="LH">price:low/high</option>
      <option value="HL">price:high/low</option>
    </select>
  );
}
