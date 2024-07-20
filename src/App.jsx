import React from 'react'
import NavAppBar from './components/Navbar/Navbar'
// import ImgMediaCard from './components/Card/Cards'
import MyCard from './components/Card/Cards'
// import Button from '@mui/material/Button';
import Layout from './components/Layout/Layout';





const App = () => {
  return (
   <>
<NavAppBar/>
<Layout/>
<hr/>
<diV className='main'>
<MyCard title='latest-bag' description='MY school bag' image='https://up.yimg.com/ib/th?id=OIP.VkHhx7IX4h443tKyX2xBWgHaIP&pid=Api&rs=1&c=1&qlt=95&w=96&h=107'/>
<MyCard title='latest-bag' description='hand bag' image='https://up.yimg.com/ib/th?id=OIP.I3dWhQGbSYhAR3pAa5lZQAHaHa&pid=Api&rs=1&c=1&qlt=95&w=107&h=107'/>
<MyCard title='latest-bag' description='casual bag' image='https://up.yimg.com/ib/th?id=OIP.wM2pQq-PFStoNxgIXRcCCAHaLH&pid=Api&rs=1&c=1&qlt=95&w=71&h=107'/>
</diV>
<br/>
<br/>
<diV className='main'>
<MyCard/>
<MyCard/>
<MyCard/>
</diV>



   </>
  )
}

export default App