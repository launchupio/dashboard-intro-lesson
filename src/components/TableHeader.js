function TableHeader({ textAlign = "left", text, padding = "1" }) {
  return (
    <th
      className={`text-xs uppercase text-gray-500 text-${textAlign} pb-4 pl-${padding}`}
    >
      {text}
    </th>
  );
}
export default TableHeader;
