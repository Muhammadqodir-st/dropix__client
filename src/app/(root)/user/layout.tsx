import Sidebar from "./components/Sidebar";

export default function User({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex">
            <div className="flex-1">
                {children}
            </div>
            <Sidebar />
        </div>
    )
}