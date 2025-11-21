import Sidebar from "@/components/Sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            {/* main */}
            <main className="flex">
                <Sidebar />
                <div className="flex-1">
                    {children}
                </div>
            </main>
        </div>
    )
}