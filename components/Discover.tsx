import React from 'react';
import { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { topics } from '../utils/constants';


const Discover: NextPage = () => {
    const router = useRouter();
    const { currentTopic } = router.query;
    const activeTopicStyle ='flex items-center gap-3 hover:bg-primary p-3 justify-center xl:justify-start cursor-pointer font-semibold text-[#F51997] rounded'; // className for active link
    const topicStyle = 'flex items-center justify-center p-3 border gap-3 border-gray-200 rounded-md  cursor-pointer '
  return (
       <div className='xl:border-b-2 xl:border-gray-200 pb-6'>
      <p className='text-gray-500 font-semibold m-3 mt-4 hidden xl:block'>
        Popular Topics
          </p>
          <div className=' flex flex-wrap  gap-3'>
              {topics.map((topic, index) => (
                  <Link href={`/?currentTopic=${topic.name}`} key={index}>
                      <div className={currentTopic === topic.name ? activeTopicStyle : topicStyle}>
                             
                          <span className='font-bold text-2xl xl:text-md'
                          >{topic.icon}</span>
                          <span
                            className='hidden xl:block'
                          >
                              
                                {topic.name}</span>
                      </div>
                  </Link>
              ))}
              </div>
                                  
      </div>
      
  )
}

export default Discover