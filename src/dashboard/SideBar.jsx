import { Sidebar } from 'flowbite-react';
import { useContext } from 'react';
import { BiBuoy } from 'react-icons/bi';
//import { FaBook } from 'react-icons/fa6';
import { HiArrowSmRight, HiChartPie, HiInbox, HiOutlineCloudUpload, HiShoppingBag, HiTable, HiUser, HiViewBoards } from 'react-icons/hi';
//import { Link } from 'react-router-dom';
import { AuthContext } from '../contects/AuthProvider';

const SideBar = () => {
    const {user} = useContext(AuthContext);
    console.log(user)
    return (
        <Sidebar aria-label="Sidebar with content separator example">
            <Sidebar.Logo href='#' img={user?.photoURL} imgAlt='' rounded>
                <p>
                    {
                        user?.displayName || "Demo User"
                    }
                </p>

                {/* <Link to="/" className="font-bold text-blue-700"><FaBook className="inline-block"/> Books-Store</Link> */}
            </Sidebar.Logo>
            <Sidebar.Items>
                <Sidebar.ItemGroup>
                <Sidebar.Item href="/admin/dashboard" icon={HiChartPie}>
                    Dashboard
                </Sidebar.Item>
                <Sidebar.Item href="/admin/dashboard/upload" icon={HiOutlineCloudUpload}>
                    Upload Book
                </Sidebar.Item>
                <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox}>
                    Manage Books
                </Sidebar.Item>
                <Sidebar.Item href="#" icon={HiUser}>
                    Users
                </Sidebar.Item>
                <Sidebar.Item href="#" icon={HiShoppingBag}>
                    Products
                </Sidebar.Item>
                <Sidebar.Item href="#" icon={HiArrowSmRight}>
                    Sign In
                </Sidebar.Item>
                <Sidebar.Item href="#" icon={HiTable}>
                    Sign Up
                </Sidebar.Item>
                </Sidebar.ItemGroup>
                <Sidebar.ItemGroup>
                <Sidebar.Item href="#" icon={HiChartPie}>
                    Upgrade to Pro
                </Sidebar.Item>
                <Sidebar.Item href="#" icon={HiViewBoards}>
                    Documentation
                </Sidebar.Item>
                <Sidebar.Item href="#" icon={BiBuoy}>
                    Help
                </Sidebar.Item>
                </Sidebar.ItemGroup>
            </Sidebar.Items>
        </Sidebar>
    );
};

export default SideBar;