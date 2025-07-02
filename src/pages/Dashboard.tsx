
import { Routes, Route } from "react-router-dom";
import { AppSidebar } from "@/components/AppSidebar";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { DashboardHeader } from "@/components/DashboardHeader";
import { DashboardContent } from "@/components/DashboardContent";
import VendasPage from "@/pages/VendasPage";
import EstoquePage from "@/pages/EstoquePage";

const Dashboard = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <SidebarInset>
          <DashboardHeader />
          <Routes>
            <Route path="/" element={<DashboardContent />} />
            <Route path="/vendas" element={<VendasPage />} />
            <Route path="/estoque" element={<EstoquePage />} />
          </Routes>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;
