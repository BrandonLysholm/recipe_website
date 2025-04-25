// working off of: https://tanstack.com/table/latest/docs/framework/react/examples/basic?panel=code
import {
    createColumnHelper,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from 'react-table';

type Category = {
    id: number;
    name: string;
}




function CategoryTable(data) {

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
                {/*{table.getHeadrsGroups}*/}
            </thead>
        </table>
    )

}

export default CategoryTable;
