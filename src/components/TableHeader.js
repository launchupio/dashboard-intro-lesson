function TableHeader({ textalign, text, padding }) {
  return (
    <th
      className={`text-xs uppercase text-gray-500 ${textalign} pb-4 ${padding}`}
    >
      {text}
    </th>
  );
}
export default TableHeader;
