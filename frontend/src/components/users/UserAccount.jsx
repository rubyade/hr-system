import React, { useState } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Button,
} from '@nextui-org/react';

export default function UserAccount() {
  const [checkin, setCheckin] = useState(false);

  return (
    <div className='bg-gradient-to-r from-red-300 to-purple-500 h-[100vh] justify-center items-center flex'>
      <Card className='max-w-[440px] max-h-[440px]'>
        <CardHeader className='justify-between'>
          <div className='flex gap-5'>
            <Avatar
              isBordered
              radius='full'
              size='md'
              src='https://nextui.org/avatars/avatar-1.png'
            />
            <div className='flex flex-col gap-1 items-start justify-center'>
              <h4 className='text-small font-semibold leading-none text-default-600'>
                Zoey Lang
              </h4>
              <h5 className='text-small tracking-tight text-default-400'>
                @zoeylang
              </h5>
            </div>
          </div>
          <Button
            className={
              checkin ? 'bg-transparent text-foreground border-default-200' : ''
            }
            color='primary'
            radius='full'
            size='sm'
            variant={checkin ? 'bordered' : 'solid'}
            onPress={() => setCheckin(!checkin)}
          >
            {checkin ? 'Clock-In' : 'Clock-Out'}
          </Button>
        </CardHeader>
        <CardBody className='px-3 py-0 text-small text-default-400'>
          <p>
            Frontend developer and UI/UX enthusiast. Join me on this coding
            adventure!
          </p>
          <span className='pt-2'>
            #FrontendWithZoey
            <span className='py-2' aria-label='computer' role='img'>
              💻
            </span>
          </span>
        </CardBody>
        <CardFooter className='gap-3'>
          <div className='flex gap-1'>
            <p className='font-semibold text-default-400 text-small'>4</p>
            <p className=' text-default-400 text-small'>Leave Days Left</p>
          </div>
          <div className='flex gap-1'>
            <p className='font-semibold text-default-400 text-small'>97</p>
            <p className='text-default-400 text-small'>Working Days Left</p>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
