'use client';
import { useState, useEffect } from 'react';
import { FaBars, FaChevronLeft, FaHome, FaUser, FaCog, FaSignOutAlt } from 'react-icons/fa';
import { useTheme } from 'next-themes';

const MainSidebar = () => {
    const [isCollapsed, setIsCollapsed] = useState(true);
    const { theme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const toggleSidebar = () => {
        setIsCollapsed((prev) => !prev);
    };

    const bgColor = mounted ? (theme === 'dark' ? 'bg-gray-900' : 'bg-gray-800') : 'bg-transparent';

    return (
        <div
            className={`${bgColor} text-white flex flex-col h-screen transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-64'}`}
            id="sidebar"
        >
            <div className="p-4 text-center text-2xl font-bold border-b border-gray-700 flex items-center justify-between">
                <button className="focus:outline-none" onClick={toggleSidebar}>
                    {isCollapsed ? <FaBars className="cursor-pointer" /> : <FaChevronLeft className="cursor-pointer" />}
                </button>
                {!isCollapsed && <span className="text-2xl" id="sidebarTitle">Academic Tracker</span>}
            </div>
            <nav className="flex-1 p-4">
                <ul>
                    {[
                        { icon: <FaHome />, label: 'Home' },
                        { icon: <FaUser />, label: 'Profile' },
                        { icon: <FaCog />, label: 'Settings' },
                        { icon: <FaSignOutAlt />, label: 'Logout' }
                    ].map(({ icon, label }) => (
                        <li className="mb-4" key={label}>
                            <a className="flex items-center p-2 hover:bg-gray-700 rounded" href="#">
                                <span className="text-xl">{icon}</span>
                                {!isCollapsed && <span className="ml-3 sidebar-text">{label}</span>}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default MainSidebar;
