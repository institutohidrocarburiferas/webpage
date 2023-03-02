import type {Consumo} from '../Consumos/types'

import {
  Column,
  Table,
  useReactTable,
  ColumnFiltersState,
  getCoreRowModel,
  getFilteredRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFacetedMinMaxValues,
  getPaginationRowModel,
  getSortedRowModel,
  FilterFn,
  ColumnDef,
  flexRender,
} from '@tanstack/react-table'
import {
  RankingInfo,
  rankItem,
} from '@tanstack/match-sorter-utils'
import {useEffect, useMemo, useReducer, useState} from 'react'

// import {makeData, Consumo} from './makeData'

declare module '@tanstack/table-core' {
  interface FilterFns {
    fuzzy: FilterFn<unknown>
  }
  interface FilterMeta {
    itemRank: RankingInfo
  }
}

const fuzzyFilter: FilterFn<any> = (row, columnId, value, addMeta) => {
  // Rank the item
  const itemRank = rankItem(row.getValue(columnId), value)

  // Store the itemRank info
  addMeta({
    itemRank,
  })

  // Return if the item should be filtered in/out
  return itemRank.passed
}

export const Tabla: React.FC<any> = ({consumos}) => {
  const rerender = useReducer(() => ({}), {})[1]

  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>(
    []
  )
  const [globalFilter, setGlobalFilter] = useState('')

  const columns = useMemo<ColumnDef<Consumo, any>[]>(
    () => [
      {
        accessorFn: row => row['Región'],
        id: 'region',
        cell: info => info.getValue(),
        header: () => <span>Región</span>,
        footer: props => props.column.id,
      },
      {
        accessorFn: row => row.Provincia,
        id: 'provincia',
        cell: info => info.getValue(),
        header: () => <span>Provincia</span>,
        footer: props => props.column.id,
      },
      {
        accessorFn: row => row['Área'],
        id: 'area',
        cell: info => info.getValue(),
        header: () => <span>Área</span>,
        footer: props => props.column.id,
      },
      {
        accessorFn: row => row.Jefatura,
        id: 'jefatura',
        cell: info => info.getValue(),
        header: () => <span>Jefatura</span>,
        footer: props => props.column.id,
      },
      {
        accessorFn: row => row['Tipo de Hogar'],
        id: 'tipoHogar',
        cell: info => info.getValue(),
        header: () => <span>Tipo de Hogar</span>,
        footer: props => props.column.id,
      },
      {
        accessorFn: row => row.Ingreso,
        id: 'ingreso',
        cell: info => info.getValue(),
        header: () => <span>Rango salarial</span>,
        footer: props => props.column.id,
      },
      {
        accessorFn: row => row['Consumo Planilla'],
        id: 'patron',
        cell: info => info.getValue().toFixed(2),
        header: () => <span>Patrón de Consumo</span>,
        footer: props => props.column.id,
      },

    ]
    , []
  )

  const [data, setData] = useState<Consumo[]>(consumos)
  const refreshData = () => setData(consumos)

  const table = useReactTable({
    data,
    columns,
    filterFns: {
      fuzzy: fuzzyFilter,
    },
    state: {
      columnFilters,
      globalFilter,
    },
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: fuzzyFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFacetedMinMaxValues: getFacetedMinMaxValues(),
    debugTable: true,
    debugHeaders: true,
    debugColumns: false,
  })

  useEffect(() => {
    if (table.getState().columnFilters[0]?.id === 'fullName') {
      if (table.getState().sorting[0]?.id !== 'fullName') {
        table.setSorting([{id: 'fullName', desc: false}])
      }
    }
  }, [table.getState().columnFilters[0]?.id])

  return (
    <div className="p-2 ">
      <div className="h-2" />
      <div className='grid overflow-x-scroll'>
        <table>
          <thead>
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => {
                  return (
                    <th key={header.id} colSpan={header.colSpan}>
                      {header.isPlaceholder
                        ? null
                        : (
                        <>
                          <div
                            {...{
                              className: header.column.getCanSort()
                                ? 'cursor-pointer select-none'
                                : '',
                              onClick: header.column.getToggleSortingHandler(),
                            }}
                          >
                            {flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                            {{
                              asc: ' 🔼',
                              desc: ' 🔽',
                            }[header.column.getIsSorted() as string] ?? null}
                          </div>
                          {header.column.getCanFilter()
                            ? (
                            <div>
                              <Filter column={header.column} table={table} />
                            </div>
                              )
                            : null}
                        </>
                          )}
                    </th>
                  )
                })}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map(row => {
              return (
                <tr key={row.id} className='text-center'>
                  {row.getVisibleCells().map(cell => {
                    return (
                      <td key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>

      </div>
      <div className="h-2" />
      <div className="flex flex-wrap items-center gap-2">
        <button
          className="border rounded p-1"
          disabled={!table.getCanPreviousPage()}
          onClick={() => table.setPageIndex(0)}
        >
          {'<<'}
        </button>
        <button
          className="border rounded p-1"
          disabled={!table.getCanPreviousPage()}
          onClick={() => table.previousPage()}
        >
          {'<'}
        </button>
        <button
          className="border rounded p-1"
          disabled={!table.getCanNextPage()}
          onClick={() => table.nextPage()}
        >
          {'>'}
        </button>
        <button
          className="border rounded p-1"
          disabled={!table.getCanNextPage()}
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
        >
          {'>>'}
        </button>
        <span className="flex items-center gap-1">
          <div>Página</div>
          <strong>
            {table.getState().pagination.pageIndex + 1} de{' '}
            {table.getPageCount()}
          </strong>
        </span>
        {/* <span className="flex items-center gap-1">
          | Ir a la página:
          <input
            className="border p-1 rounded w-16"
            defaultValue={table.getState().pagination.pageIndex + 1}
            type="number"
            onChange={e => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0

              table.setPageIndex(page)
            }}
          />
        </span> */}
        <select
          className='border px-2 rounded py-1'
          value={table.getState().pagination.pageSize}
          onChange={e => {
            table.setPageSize(Number(e.target.value))
          }}
        >
          {[10, 20, 30, 40, 50].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Mostrar {pageSize}
            </option>
          ))}
        </select>
      </div>
      <div>{table.getPrePaginationRowModel().rows.length} Filas</div>
      <div>
        {/* <button onClick={() => rerender()}>Forzar Renderizado</button> */}
      </div>
      <div>
        {/* <button onClick={() => refreshData()}>Actualizar datos</button> */}
      </div>
      {/* <pre>{JSON.stringify(table.getState(), null, 2)}</pre> */}
    </div>
  )
}

function Filter ({
  column,
  table,
}: {
  column: Column<any, unknown>
  table: Table<any>
}) {
  const firstValue = table
    .getPreFilteredRowModel()
    .flatRows[0]?.getValue(column.id)

  const columnFilterValue = column.getFilterValue()

  const sortedUniqueValues = useMemo(
    () =>
      typeof firstValue === 'number'
        ? []
        : Array.from(column.getFacetedUniqueValues().keys()).sort(),
    [column.getFacetedUniqueValues()]
  )

  return typeof firstValue === 'number'
    ? (
    <div>
      <div className="flex space-x-2">
        <DebouncedInput
          className="w-24 border shadow rounded"
          max={Number(column.getFacetedMinMaxValues()?.[1] ?? '')}
          min={Number(column.getFacetedMinMaxValues()?.[0] ?? '')}
          placeholder={`Min ${
            column.getFacetedMinMaxValues()?.[0]
              ? `(${column.getFacetedMinMaxValues()?.[0]})`
              : ''
          }`}
          type="number"
          value={(columnFilterValue as [number, number])?.[0] ?? ''}
          onChange={value =>
            column.setFilterValue((old: [number, number]) => [value, old?.[1]])
          }
        />
        <DebouncedInput
          className="w-24 border shadow rounded"
          max={Number(column.getFacetedMinMaxValues()?.[1] ?? '')}
          min={Number(column.getFacetedMinMaxValues()?.[0] ?? '')}
          placeholder={`Max ${
            column.getFacetedMinMaxValues()?.[1]
              ? `(${column.getFacetedMinMaxValues()?.[1]})`
              : ''
          }`}
          type="number"
          value={(columnFilterValue as [number, number])?.[1] ?? ''}
          onChange={value =>
            column.setFilterValue((old: [number, number]) => [old?.[0], value])
          }
        />
      </div>
      <div className="h-1" />
    </div>
      )
    : (
    <>
      <datalist id={column.id + 'list'}>
        {sortedUniqueValues.slice(0, 5000).map((value: any) => (
          <option key={value} value={value} />
        ))}
      </datalist>
      <DebouncedInput
        className="w-36 border shadow rounded"
        list={column.id + 'list'}
        placeholder={`Filtro... (${column.getFacetedUniqueValues().size})`}
        type="text"
        value={(columnFilterValue ?? '') as string}
        onChange={value => column.setFilterValue(value)}
      />
      <div className="h-1" />
    </>
      )
}

// A debounced input react component
function DebouncedInput ({
  value: initialValue,
  onChange,
  debounce = 500,
  ...props
}: {
  value: string | number
  onChange: (value: string | number) => void
  debounce?: number
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'>) {
  const [value, setValue] = useState(initialValue)

  useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value)
    }, debounce)

    return () => clearTimeout(timeout)
  }, [value])

  return (
    <input {...props} value={value} onChange={e => setValue(e.target.value)} />
  )
}
