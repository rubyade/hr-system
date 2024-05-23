'use client';
import { columns, renderCell, users } from './columns';
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from '@nextui-org/react';

// const rows = [
//   {
//     key: '1',
//     name: 'Tony Reichert',
//     email: 'tonyr@groupa.com',
//     department: 'Management',
//     role: 'CEO',
//     status: 'approved',
//   },
//   {
//     key: '2',
//     name: 'Zoey Lang',
//     email: 'zoelang@groupa.com',
//     department: 'Engineering',
//     role: 'Technical Lead',
//     status: 'pending',
//   },
//   {
//     key: '3',
//     name: 'Jane Fisher',
//     email: 'janef@groupa.com',
//     department: 'Engineering',
//     role: 'Senior Developer',
//     status: 'pending',
//   },
//   {
//     key: '4',
//     name: 'William Howard',
//     email: 'willH@groupa.com',
//     role: 'Community Manager',
//     department: 'Marketing',
//     status: 'approved',
//   },
// ];

export default function UserTable() {
  return (
    <Table aria-label='Example table with dynamic content'>
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={users}>
        {(item) => (
          <TableRow key={item.key}>
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
