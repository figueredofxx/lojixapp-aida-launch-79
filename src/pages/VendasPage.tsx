
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Search, Filter } from "lucide-react";

const VendasPage = () => {
  return (
    <div className="flex-1 space-y-4 p-4 pt-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-cantarell text-3xl font-bold tracking-tight text-foreground">
            Vendas
          </h1>
          <p className="font-inter text-sm text-muted-foreground">
            Gerencie suas vendas e pedidos
          </p>
        </div>
        <Button className="bg-primary hover:bg-primary-hover font-inter">
          <Plus className="mr-2 h-4 w-4" />
          Nova Venda
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="font-inter text-sm font-medium">
              Vendas Hoje
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="font-cantarell text-2xl font-bold">R$ 2.350,00</div>
            <p className="font-inter text-xs text-muted-foreground">
              +12% em relação a ontem
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="font-inter text-sm font-medium">
              Pedidos Hoje
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="font-cantarell text-2xl font-bold">23</div>
            <p className="font-inter text-xs text-muted-foreground">
              +5 novos pedidos
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="font-inter text-sm font-medium">
              Ticket Médio
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="font-cantarell text-2xl font-bold">R$ 102,17</div>
            <p className="font-inter text-xs text-muted-foreground">
              +2% este mês
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="font-inter text-sm font-medium">
              Meta Mensal
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="font-cantarell text-2xl font-bold">73%</div>
            <p className="font-inter text-xs text-muted-foreground">
              R$ 18.750,00 de R$ 25.000,00
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="font-cantarell text-xl font-semibold">
              Vendas Recentes
            </CardTitle>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="font-inter">
                <Search className="mr-2 h-4 w-4" />
                Buscar
              </Button>
              <Button variant="outline" size="sm" className="font-inter">
                <Filter className="mr-2 h-4 w-4" />
                Filtrar
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="text-center py-12">
            <p className="font-inter text-muted-foreground text-lg">
              Funcionalidade em desenvolvimento
            </p>
            <p className="font-inter text-sm text-muted-foreground mt-2">
              Em breve você poderá visualizar e gerenciar todas as suas vendas aqui
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default VendasPage;
