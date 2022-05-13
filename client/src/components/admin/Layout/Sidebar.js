import Text from '../../Text';

export default function Sidebar() {
    return (
        <div className="w-52 pt-6 shadow-sm">
            <div className="px-6 py-3 text-gray-400">
                <Text type="bold">DASHBOARD</Text>
            </div>
            <div className="bg-slate-200 px-6 py-3">
                <Text type="bold">Dashboard</Text>
            </div>
        </div>
    );
}
