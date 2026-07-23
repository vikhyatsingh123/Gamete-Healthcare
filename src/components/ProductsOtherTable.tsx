import { useRef, useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  type ColumnDef,
} from "@tanstack/react-table";
import { useVirtualizer } from "@tanstack/react-virtual";
import { Package } from "lucide-react";

export interface MedicineRow {
  id: number;
  productName: string;
  category: string;
  subcategory: string | null;
  dosageForm: string;
  formulation: string;
}

interface ProductsTableProps {
  data: MedicineRow[];
  accentColor: string;
}

const columns: ColumnDef<MedicineRow>[] = [
  {
    accessorKey: "id",
    header: "Sr. No.",
    minSize: 100,
  },
  {
    accessorKey: "productName",
    header: "Product Name",
    minSize: 440,
  },
  {
    accessorKey: "formulation",
    header: "Formulation",
    minSize: 400,
  },
  {
    accessorKey: "dosageForm",
    header: "Dosage Form",
    minSize: 220,
  },
];

const ROW_HEIGHT = 68;

const ProductsTable = ({ data, accentColor }: ProductsTableProps) => {
  const [columnSizing, setColumnSizing] = useState({});
  const tableContainerRef = useRef<HTMLDivElement>(null);

  const table = useReactTable({
    data,
    columns,
    state: { columnSizing },
    onColumnSizingChange: setColumnSizing,
    columnResizeMode: "onChange",
    getCoreRowModel: getCoreRowModel(),
    enableColumnResizing: true,
  });

  const { rows } = table.getRowModel();

  const rowVirtualizer = useVirtualizer({
    count: rows.length,
    getScrollElement: () => tableContainerRef.current,
    estimateSize: () => ROW_HEIGHT,
    overscan: 8,
  });

  const virtualRows = rowVirtualizer.getVirtualItems();
  const totalSize = rowVirtualizer.getTotalSize();
  const paddingTop = virtualRows.length > 0 ? virtualRows[0].start : 0;
  const paddingBottom =
    virtualRows.length > 0
      ? totalSize - virtualRows[virtualRows.length - 1].end
      : 0;

  if (data.length === 0) {
    return (
      <div className="text-center py-20 bg-white rounded-2xl border border-gray-100">
        <Package className="w-12 h-12 text-gray-300 mx-auto mb-3" />
        <p className="text-gray-500 text-sm">
          No products found. Try a different search term.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
      <div
        ref={tableContainerRef}
        className="overflow-auto"
        style={{ maxHeight: 860 }}
      >
        <table
          style={{ width: table.getTotalSize(), tableLayout: "fixed" }}
          className="border-collapse"
        >
          <thead className="sticky top-0 z-10 bg-[#f8fafc]">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    style={{ width: header.getSize(), position: "relative" }}
                    className="text-left px-4 py-3 text-xs font-semibold uppercase tracking-wide text-[#1253A1] border-b border-gray-100"
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                    <div
                      onMouseDown={header.getResizeHandler()}
                      onTouchStart={header.getResizeHandler()}
                      className={`absolute right-0 top-0 h-full w-1 cursor-col-resize select-none touch-none bg-gray-200 ${
                        header.column.getIsResizing() ? "" : "hover:bg-gray-300"
                      }`}
                      style={
                        header.column.getIsResizing()
                          ? { background: accentColor }
                          : {}
                      }
                    />
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {paddingTop > 0 && (
              <tr>
                <td style={{ height: paddingTop }} colSpan={columns.length} />
              </tr>
            )}
            {virtualRows.map((virtualRow) => {
              const row = rows[virtualRow.index];
              return (
                <tr
                  key={row.id}
                  style={{ height: ROW_HEIGHT }}
                  className="border-b border-gray-50 hover:bg-[#f8fafc]/60 transition-colors"
                >
                  {row.getVisibleCells().map((cell) => (
                    <td
                      key={cell.id}
                      style={{ width: cell.column.getSize() }}
                      className="px-4 py-3 align-top overflow-hidden"
                    >
                      {cell.column.id === "name" ? (
                        <span
                          className="text-sm font-semibold"
                          style={{ color: accentColor }}
                        >
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </span>
                      ) : (
                        <span className="text-sm text-gray-600 line-clamp-2">
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          )}
                        </span>
                      )}
                    </td>
                  ))}
                </tr>
              );
            })}
            {paddingBottom > 0 && (
              <tr>
                <td
                  style={{ height: paddingBottom }}
                  colSpan={columns.length}
                />
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductsTable;
