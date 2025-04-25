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
            cell: info=> info.getValue(),
            footer: info => info.column.id
        }),
        columnHelper.accessor('name', {
            cell: info=> info.getValue(),
            footer: info => info.column.id
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
            <tfoot>
            {table.getFooterGroups().map(footerGroup => (
                <tr key={footerGroup.id}>
                    {footerGroup.headers.map(header => (
                        <td key={header.id}>
                            {header.isPlaceholder ? null : flexRender(
                                header.column.columnDef.footer,
                                header.getContext()
                            )}
                        </td>
                    ))}
                </tr>
            ))}
            </tfoot>
        </table>
    )

}

export default CategoryTable;
