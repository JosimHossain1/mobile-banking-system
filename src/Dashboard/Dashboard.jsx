import { useState } from 'react';
import Sidebar from './Sidebar';

const Dashboard = () => {
 const [open, setOpen] = useState(true)
  const handleMenuBar = () =>{
    setOpen(!open)
  }

  return (
    <div className='flex space-x-5'>
      <div className={`${open? "w-[20%]" : "w-[10%]"} bg-gray-200 h-screen`}>
        <Sidebar handleMenuBar={handleMenuBar} open={open} />
      </div>
      <div>
        <h1>Dashboard Content</h1>
      </div>
    </div>
  );
};

export default Dashboard;
