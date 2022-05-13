import { Menu } from 'react-feather';
import Profile from '../../Profile';
import SearchField from './SearchField';

export default function Header() {
    return (
        <div className="flex items-center justify-between px-6 py-4 shadow-sm">
            <div className="flex items-center">
                <div className="w-52">
                    <div className="h-8 w-24 bg-slate-200" />
                </div>
                <button>
                    <Menu />
                </button>
            </div>
            <div className="flex items-center gap-6">
                <SearchField />
                <Profile />
            </div>
        </div>
    );
}
