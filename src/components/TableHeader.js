function TableHeader({ textAlign = "left", text, padding = "4" }) {
  return (
    <th
      className="text-xs uppercase text-gray-500 pb-4"
      style={{ textAlign: textAlign, paddingLeft: `${padding}px` }}
    >
      {text}
    </th>
  );
}
export default TableHeader;
