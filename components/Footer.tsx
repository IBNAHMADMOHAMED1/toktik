import React from 'react';
import { NextPage } from 'next';
import { footerList1, footerList2, footerList3 } from '../utils/constants';
import Link from 'next/link';

const List = ({ items, mt }: { items: string[], mt: Boolean }) => (



  <div className={`flex flex-wrap gap-2 ${mt && 'mt-5'}`}>
    {items.map((item: string) => (
      <p key={item} className='text-gray-400 text-sm  hover:underline cursor-pointer' >
        {item}
      </p>
    ))}
  </div>
);

const Footer: NextPage = () => (
  <div className='mt-6 hidden xl:block'>
    <List items={footerList1} mt={false} />
    <List items={footerList2} mt />
    <List items={footerList3} mt />
    <Link
     
      href='https://github.com/IBNAHMADMOHAMED1'>
      <a className='text-gray-400 text-sm hover:underline cursor-pointer hover:text-primary'>
        Copyright © 2022 IBNAHMADMOHAMED
      </a>
    </Link>

 
    
  </div>
);

export default Footer;
