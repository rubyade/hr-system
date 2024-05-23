import { EditIcon, DeleteIcon, EyeIcon } from '../icons';
import { User, Chip, Tooltip } from '@nextui-org/react';

const statusColorMap = {
  approved: 'success',
  pending: 'danger',
  vacation: 'warning',
};

export const columns = [
  {
    key: 'name',
    label: 'NAME',
  },
  {
    key: 'department',
    label: 'DEPARTMENT',
  },
  {
    key: 'role',
    label: 'ROLE',
  },
  {
    key: 'status',
    label: 'STATUS',
  },
  {
    key: 'actions',
    label: 'ACTIONS',
  },
];

export const users = [
  {
    id: '1',
    name: 'Tony Reichert',
    email: 'tonyr@groupa.com',
    department: 'Management',
    role: 'CEO',
    status: 'approved',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
  },
  {
    id: '2',
    name: 'Zoey Lang',
    email: 'zoelang@groupa.com',
    department: 'Engineering',
    role: 'Technical Lead',
    status: 'pending',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
  },
  {
    id: '3',
    name: 'Jane Fisher',
    email: 'janef@groupa.com',
    department: 'Engineering',
    role: 'Senior Developer',
    status: 'pending',
    avatar: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
  },
  {
    id: '4',
    name: 'William Howard',
    email: 'willH@groupa.com',
    role: 'Community Manager',
    department: 'Marketing',
    status: 'approved',
    avatar: 'https://i.pravatar.cc/150?u=a048581f4e29026701d',
  },
  {
    id: 5,
    name: 'Kristen Copper',
    email: 'kristenC@groupa.com',
    role: 'Sales Manager',
    department: 'Sales',
    status: 'approved',
    avatar: 'https://i.pravatar.cc/150?u=a092581d4ef9026700d',
  },
  {
    id: '6',
    name: 'Tony Reichert',
    email: 'tonyr@groupa.com',
    department: 'Management',
    role: 'CEO',
    status: 'approved',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026024d',
  },
  {
    id: '7',
    name: 'Zoey Lang',
    email: 'zoelang@groupa.com',
    department: 'Engineering',
    role: 'Technical Lead',
    status: 'pending',
    avatar: 'https://i.pravatar.cc/150?u=a042581f4e29026704d',
  },
  {
    id: '8',
    name: 'Jane Fisher',
    email: 'janef@groupa.com',
    department: 'Engineering',
    role: 'Senior Developer',
    status: 'pending',
    avatar: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
  },
  {
    id: '9',
    name: 'William Howard',
    email: 'willH@groupa.com',
    role: 'Community Manager',
    department: 'Marketing',
    status: 'approved',
    avatar: 'https://i.pravatar.cc/150?u=a048581f4e29026701d',
  },
  {
    id: 10,
    name: 'Kristen Copper',
    email: 'kristenC@groupa.com',
    role: 'Sales Manager',
    department: 'Sales',
    status: 'approved',
    avatar: 'https://i.pravatar.cc/150?u=a092581d4ef9026700d',
  },
];

export const renderCell = (user, columnKey) => {
  const cellValue = user[columnKey];

  switch (columnKey) {
    case 'name':
      return (
        <User
          avatarProps={{ radius: 'lg', src: user.avatar }}
          description={user.email}
          name={cellValue}
        >
          {user.email}
        </User>
      );
    case 'role':
      return (
        <div className='flex flex-col'>
          <p className='text-bold text-sm capitalize'>{cellValue}</p>
          <p className='text-bold text-sm capitalize text-default-400'>
            {user.department}
          </p>
        </div>
      );
    case 'status':
      return (
        <Chip
          className='capitalize'
          color={statusColorMap[user.status]}
          size='sm'
          variant='flat'
        >
          {cellValue}
        </Chip>
      );
    case 'actions':
      return (
        <div className='relative flex items-center gap-2'>
          <Tooltip content='Details'>
            <span className='text-lg text-default-400 cursor-pointer active:opacity-50'>
              <EyeIcon />
            </span>
          </Tooltip>
          <Tooltip content='Edit user'>
            <span className='text-lg text-default-400 cursor-pointer active:opacity-50'>
              <EditIcon />
            </span>
          </Tooltip>
          <Tooltip color='danger' content='Delete user'>
            <span className='text-lg text-danger cursor-pointer active:opacity-50'>
              <DeleteIcon />
            </span>
          </Tooltip>
        </div>
      );
    default:
      return cellValue;
  }
};
