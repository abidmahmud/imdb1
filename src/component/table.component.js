import TableBody from './table-body.component';
import TableHeader from './table-header.component';

const Table = ({ data, columns }) => {
    return (
        <table className="table">
            <TableHeader columns={columns} />
            <TableBody data={data} columns={columns} />
        </table>
    );
}

export default Table;