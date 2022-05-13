import { Outlet } from 'react-router-dom';
import Header from './Header';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

export default function Layout() {
    return (
        <div className="mx-auto flex min-h-screen max-w-[1440px]">
            <Navbar />
            <div className="ml-16 flex-1">
                <Header />
                <div className="flex min-h-full">
                    <Sidebar />
                    <div className="flex-1 bg-gray-100 p-6">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
}
