import type { NextPage } from 'next'
import axios from 'axios'

const Home: NextPage = ({ posts }) => {
  
  // interface Post {
  //   posts:
  // }
  console.log(posts);
  
  return (
    <div>
      Totik 
      <p className="bg-red-500 p-2">
        This is a paragraph
      </p>
      
    </div>
  )
}

export const getServerSideProps = async () => {
  const res = await axios.get('http://localhost:3000/api/post')
  return { props: { posts: res.data } }
}
  

export default Home

