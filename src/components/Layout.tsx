import React from "react";
import Sidebar from "./menu/Sidebar";
import Header from "./menu/Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <main className="flex flex-row h-screen w-screen overflow-hidden bg-slate-50">
      <aside className="flex-shrink-0">
        <Sidebar/>
      </aside>
      <section className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 py-8 px-4 overflow-y-auto">
            {children}
        </main>
      </section>
    </main>
  );
};

export default Layout;