
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Package, BarChart3 } from "lucide-react";
import { ProductRegistrationForm } from "@/components/ProductRegistrationForm";

const EstoquePage = () => {
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);

  return (
    <div className="flex-1 space-y-4 p-4 pt-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-cantarell text-3xl font-bold tracking-tight text-foreground">
            Estoque
          </h1>
          <p className="font-inter text-sm text-muted-foreground">
            Gerencie seus produtos e controle de estoque
          </p>
        </div>
        <Button 
          onClick={() => setShowRegistrationForm(true)}
          className="bg-primary hover:bg-primary-hover font-inter"
        >
          <Plus className="mr-2 h-4 w-4" />
          Cadastrar Produto
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="font-inter text-sm font-medium">
              Total de Produtos
            </CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="font-cantarell text-2xl font-bold">1,247</div>
            <p className="font-inter text-xs text-muted-foreground">
              +23 novos este mês
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="font-inter text-sm font-medium">
              Produtos em Falta
            </CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="font-cantarell text-2xl font-bold text-destructive">12</div>
            <p className="font-inter text-xs text-muted-foreground">
              Necessita reposição
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="font-inter text-sm font-medium">
              Valor do Estoque
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="font-cantarell text-2xl font-bold">R$ 89.450,00</div>
            <p className="font-inter text-xs text-muted-foreground">
              Total investido
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="font-inter text-sm font-medium">
              Categorias
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="font-cantarell text-2xl font-bold">8</div>
            <p className="font-inter text-xs text-muted-foreground">
              Categorias ativas
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="font-cantarell text-xl font-semibold">
            Produtos Cadastrados
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-12">
            <Package className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
            <p className="font-inter text-muted-foreground text-lg">
              Nenhum produto cadastrado ainda
            </p>
            <p className="font-inter text-sm text-muted-foreground mt-2 mb-4">
              Comece cadastrando seu primeiro produto
            </p>
            <Button 
              onClick={() => setShowRegistrationForm(true)}
              className="bg-primary hover:bg-primary-hover font-inter"
            >
              <Plus className="mr-2 h-4 w-4" />
              Cadastrar Primeiro Produto
            </Button>
          </div>
        </CardContent>
      </Card>

      {showRegistrationForm && (
        <ProductRegistrationForm 
          onClose={() => setShowRegistrationForm(false)}
          onSave={(product) => {
            console.log('Produto cadastrado:', product);
            setShowRegistrationForm(false);
          }}
        />
      )}
    </div>
  );
};

export default EstoquePage;
