'use client'

import { IcnArrowLeftRetro, IcnArrowRightRetro } from '@assets/icons';

import { ReactNode, useState } from 'react';
import clsx from "clsx"
import { useReactTable, getCoreRowModel, flexRender, getPaginationRowModel, PaginationState } from '@tanstack/react-table'
import type { ColumnDef } from '@tanstack/react-table';

import { Button } from '@/components';

interface CustomTableProps<T extends object> {
  extraClassName?: string;
  data: T[];
  columns: ColumnDef<T>[];
  onRowClick?: (rowData: T) => void;
  defaultEmptyContent?: ReactNode;
  defaultEmptyTitle?: string;
  defaultEmptyParagraph?: string;
  removePagination?: boolean;
  pageSize?: number;
}

export const CustomTable = <T extends object> (
  {
    extraClassName,
    data,
    columns,
    onRowClick,
    defaultEmptyContent,
    defaultEmptyTitle,
    defaultEmptyParagraph,
    removePagination,
    pageSize = 20,
  }: CustomTableProps<T>) => {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: pageSize,
  })

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onPaginationChange: setPagination,
    state: {
      pagination,
    },
  })

  const totalPageCount = Math.ceil(table.getCoreRowModel().rows.length / pagination.pageSize)

  const handleRowClick = (rowData: T) => {
    if (onRowClick) {
      onRowClick(rowData) // Call the provided onRowClick callback
    } else {
      // Handle default behavior or do nothing
    }
  }

  const allCellsEmpty = table
    .getRowModel()
    .rows.every((row) =>
      row.getVisibleCells().every((cell) => {
        const cellValue = flexRender(
          cell.column.columnDef.cell,
          cell.getContext()
        )
        return !cellValue || cellValue === ""
      })
    )

  return (
    <>
      <table className={clsx("c-table", onRowClick && "has-hoverable-row" , extraClassName && extraClassName)}>

        <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
              </th>
            ))}
          </tr>
        ))}
        </thead>

        {allCellsEmpty ? (
          <tfoot>
          <tr>
            <td colSpan={columns.length}>
              <div className="c-table-tfoot-td default-empty">
                {defaultEmptyContent? (
                  <>{defaultEmptyContent}</>
                ):(
                  <>
                    <h2 className="h3">
                      {defaultEmptyTitle? defaultEmptyTitle : "No data found"}
                    </h2>

                    <p>
                      {defaultEmptyParagraph? defaultEmptyParagraph : "There is no data available at this moment"}
                    </p>
                  </>
                )}
              </div>
            </td>
          </tr>
          </tfoot>
        ):(
          <>
            <tbody className={clsx(allCellsEmpty && "hidden")}>
            {table.getRowModel().rows.map((row) => (
              <tr
                key={row.id}
                onClick={() => handleRowClick(row.original)}
                className={clsx(onRowClick? "is-hoverable" : "")}
              >
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
            </tbody>

          </>
        )}
      </table>

      {!removePagination && (
        <div className="c-table-pagination">

          <Button
            extraClassName="c-table-pagination-btn previous"
            btnVariant="icon"
            btnColor="ghost"
            title="Previous"
            btnSize="sm"
            icon={<IcnArrowLeftRetro/>}
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          />

          <div className="c-button-container">
            {[...Array(totalPageCount)].map((_, pageIndex) => (
              <Button
                key={pageIndex}
                extraClassName={clsx("c-table-pagination-btn index", table.getState().pagination.pageIndex === pageIndex && "is-active",)}
                btnVariant="icon"
                btnColor="ghost"
                btnSize="sm"
                icon={pageIndex + 1}
                onClick={() => table.setPageIndex(pageIndex)}
                disabled={totalPageCount < 2}
              />
            ))}

          </div>

          <Button
            extraClassName="c-table-pagination-btn next"
            btnVariant="icon"
            btnColor="ghost"
            btnSize="sm"
            title="Next"
            icon={<IcnArrowRightRetro/>}
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          />

        </div>
      )}
    </>
  )
}
