import { LuArrowLeftFromLine, LuArrowRightFromLine } from 'react-icons/lu';
import { NavLink } from 'react-router-dom';
const Sidebar = ({ handleMenuBar, open }) => {
  const menuItems = [
    { path: '/', title: 'Dashboard' },
    { path: '/send-money', title: 'Send Money' },
    { path: '/cash-in', title: 'Cash In' },
    { path: '/cash-out', title: 'Cash Out' },
    { path: '/history', title: 'History' },
    { path: '/settings', title: 'Settings' },
  ];

  const menus = menuItems.map((item) => (
    <NavLink
      key={item.title}
      href={item.path}
      className='bg-indigo-400 hover:bg-indigo-500 text-white font-semibold p-2'
    >
      {item.title}
    </NavLink>
  ));

  return (
    <div>
      <div className='flex justify-between'>
        <span>Logo</span>
        <span onClick={handleMenuBar}>
          {open ? <LuArrowLeftFromLine /> : <LuArrowRightFromLine />}
        </span>
      </div>
      <div className='flex flex-col space-y-2 overflow-hidden'>{menus}</div>
    </div>
  );
};

export default Sidebar;
