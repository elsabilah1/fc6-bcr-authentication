import { Home, Truck } from 'react-feather';
import Text from '../../Text';

export default function Navbar() {
    return (
        <div className="fixed h-full w-16 bg-blue-800">
            <div className="mx-auto my-4 h-8 w-8 bg-slate-200" />
            <div className="text-center text-white">
                <button className="w-full space-y-1 bg-slate-200/40 py-3">
                    <Home className="mx-auto" />
                    <Text type="small">
                        <span className="font-semibold">Dashboard</span>
                    </Text>
                </button>
                <button className="w-full space-y-1 py-3">
                    <Truck className="mx-auto" />
                    <Text type="small">Cars</Text>
                </button>
            </div>
        </div>
    );
}
