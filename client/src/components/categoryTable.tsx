// working off of: https://tanstack.com/table/latest/docs/framework/react/examples/basic?panel=code
import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from '@tanstack/react-table';






function CategoryTable(data) {

    type Category = {
        id: number;
        name: string;
    }

    const columnHelper = createColumnHelper<Category>();

    const columns = [
        columnHelper.accessor('id', {
            header: 'ID',
            cell: info=> info.getValue(),
        }),
        columnHelper.accessor('name', {
            header: 'Name',
            cell: info=> info.getValue(),
        })
    ]

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    return (
        <table>
            <thead>
                {table.getHeaderGroups().map(headerGroup => (
                    <tr key={headerGroup.id}>
                        {headerGroup.headers.map(header =>(
                        <th key={header.id}>
                            {header.isPlaceholder ? null : flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                            )}
                        </th>
                    ))}
                    </tr>
                ))}
            </thead>
            <tbody>
            {table.getRowModel().rows.map(row =>(
                <tr key={row.id}>
                    {row.getVisibleCells().map(cell => (
                        <td key={cell.id}>
                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </td>
                    ))}
                </tr>
            ))}
            </tbody>
        </table>
    )

}

export default CategoryTable;
