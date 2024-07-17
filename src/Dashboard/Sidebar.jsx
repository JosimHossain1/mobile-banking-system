import { LuArrowLeftFromLine, LuArrowRightFromLine } from "react-icons/lu";

const Sidebar = ({ handleMenuBar, open }) => {
  return (
    <div>
      <div className='flex justify-between'>
        <span>Logo</span>
        <span onClick={handleMenuBar}>
          {open ? <LuArrowLeftFromLine /> : <LuArrowRightFromLine />
          }
        </span>
      </div>
      Sidebar
    </div>
  );
};

export default Sidebar;
