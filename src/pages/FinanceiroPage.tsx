import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { 
  DollarSign, 
  TrendingUp, 
  TrendingDown, 
  Calculator, 
  FileText,
  Plus,
  Minus,
  Eye,
  Download,
  Calendar,
  PiggyBank,
  CreditCard,
  Banknote
} from "lucide-react";

const FinanceiroPage = () => {
  const [calculatorData, setCalculatorData] = useState({
    custoProduto: "",
    precoVenda: "",
    margem: 0,
    lucro: 0
  });

  const [caixaData, setCaixaData] = useState({
    abertura: "1500.00",
    vendas: "3245.80",
    despesas: "125.50"
  });

  const calcularMargem = () => {
    const custo = parseFloat(calculatorData.custoProduto) || 0;
    const preco = parseFloat(calculatorData.precoVenda) || 0;
    
    if (custo > 0 && preco > 0) {
      const lucro = preco - custo;
      const margem = (lucro / preco) * 100;
      
      setCalculatorData(prev => ({
        ...prev,
        lucro,
        margem
      }));
    }
  };

  const despesasFixas = [
    { categoria: "Aluguel", valor: 2500.00, vencimento: "05/12/2024", status: "Pago" },
    { categoria: "Energia Elétrica", valor: 380.50, vencimento: "15/12/2024", status: "Pendente" },
    { categoria: "Internet", valor: 120.00, vencimento: "20/12/2024", status: "Pago" },
    { categoria: "Telefone", valor: 85.00, vencimento: "18/12/2024", status: "Pendente" }
  ];

  const despesasVariaveis = [
    { categoria: "Compra de Produtos", valor: 15480.00, data: "28/11/2024", tipo: "Estoque" },
    { categoria: "Combustível", valor: 150.00, data: "29/11/2024", tipo: "Transporte" },
    { categoria: "Marketing Digital", valor: 320.00, data: "25/11/2024", tipo: "Marketing" },
    { categoria: "Manutenção", valor: 280.00, data: "22/11/2024", tipo: "Operacional" }
  ];

  const fluxoCaixaHoje = {
    saldoInicial: 1500.00,
    entradas: 3245.80,
    saidas: 125.50,
    saldoFinal: 4620.30
  };

  return (
    <div className="flex-1 space-y-6 p-4 pt-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="font-cantarell text-3xl font-bold tracking-tight text-foreground">
            Financeiro
          </h1>
          <p className="font-inter text-sm text-muted-foreground">
            Controle completo das finanças do seu negócio
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="font-inter">
            <Calendar className="mr-2 h-4 w-4" />
            Período
          </Button>
          <Button className="bg-primary hover:bg-primary-hover font-inter">
            <Download className="mr-2 h-4 w-4" />
            Exportar
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="font-inter text-sm font-medium text-muted-foreground">
              Saldo em Caixa
            </CardTitle>
            <Banknote className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="font-cantarell text-2xl font-bold text-foreground">R$ 4.620,30</div>
            <p className="text-xs text-green-600 font-inter mt-1">
              +R$ 3.120,30 hoje
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="font-inter text-sm font-medium text-muted-foreground">
              Receitas do Mês
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="font-cantarell text-2xl font-bold text-foreground">R$ 98.450,80</div>
            <p className="text-xs text-green-600 font-inter mt-1">
              +12% vs mês anterior
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="font-inter text-sm font-medium text-muted-foreground">
              Despesas do Mês
            </CardTitle>
            <TrendingDown className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="font-cantarell text-2xl font-bold text-foreground">R$ 18.235,50</div>
            <p className="text-xs text-red-600 font-inter mt-1">
              +5% vs mês anterior
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="font-inter text-sm font-medium text-muted-foreground">
              Lucro Líquido
            </CardTitle>
            <DollarSign className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="font-cantarell text-2xl font-bold text-foreground">R$ 80.215,30</div>
            <p className="text-xs text-green-600 font-inter mt-1">
              +18% vs mês anterior
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="caixa" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="caixa" className="font-inter">Fechamento de Caixa</TabsTrigger>
          <TabsTrigger value="calculadora" className="font-inter">Calculadora</TabsTrigger>
          <TabsTrigger value="despesas" className="font-inter">Despesas</TabsTrigger>
          <TabsTrigger value="fluxo" className="font-inter">Fluxo de Caixa</TabsTrigger>
        </TabsList>

        {/* Fechamento de Caixa */}
        <TabsContent value="caixa" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="font-cantarell text-xl font-semibold flex items-center">
                <Calculator className="h-5 w-5 text-primary mr-2" />
                Fechamento de Caixa - {new Date().toLocaleDateString()}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label className="font-inter">Saldo de Abertura</Label>
                    <Input
                      type="number"
                      value={caixaData.abertura}
                      onChange={(e) => setCaixaData(prev => ({ ...prev, abertura: e.target.value }))}
                      className="font-inter"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="font-inter">Total de Vendas</Label>
                    <Input
                      type="number"
                      value={caixaData.vendas}
                      onChange={(e) => setCaixaData(prev => ({ ...prev, vendas: e.target.value }))}
                      className="font-inter"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="font-inter">Total de Despesas</Label>
                    <Input
                      type="number"
                      value={caixaData.despesas}
                      onChange={(e) => setCaixaData(prev => ({ ...prev, despesas: e.target.value }))}
                      className="font-inter"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-secondary/50 p-4 rounded-lg">
                    <h3 className="font-cantarell font-semibold mb-4">Resumo do Caixa</h3>
                    <div className="space-y-2 font-inter text-sm">
                      <div className="flex justify-between">
                        <span>Saldo Inicial:</span>
                        <span>R$ {parseFloat(caixaData.abertura).toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-green-600">
                        <span>+ Vendas:</span>
                        <span>R$ {parseFloat(caixaData.vendas).toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-red-600">
                        <span>- Despesas:</span>
                        <span>R$ {parseFloat(caixaData.despesas).toFixed(2)}</span>
                      </div>
                      <hr className="my-2" />
                      <div className="flex justify-between font-semibold text-foreground">
                        <span>Saldo Final:</span>
                        <span>R$ {(parseFloat(caixaData.abertura) + parseFloat(caixaData.vendas) - parseFloat(caixaData.despesas)).toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary-hover font-inter">
                    <FileText className="mr-2 h-4 w-4" />
                    Gerar Relatório de Fechamento
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Calculadora de Margem */}
        <TabsContent value="calculadora" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="font-cantarell text-xl font-semibold flex items-center">
                <Calculator className="h-5 w-5 text-primary mr-2" />
                Calculadora de Margem de Lucro
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label className="font-inter">Custo do Produto (R$)</Label>
                    <Input
                      type="number"
                      placeholder="Ex: 100.00"
                      value={calculatorData.custoProduto}
                      onChange={(e) => setCalculatorData(prev => ({ ...prev, custoProduto: e.target.value }))}
                      className="font-inter"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="font-inter">Preço de Venda (R$)</Label>
                    <Input
                      type="number"
                      placeholder="Ex: 150.00"
                      value={calculatorData.precoVenda}
                      onChange={(e) => setCalculatorData(prev => ({ ...prev, precoVenda: e.target.value }))}
                      className="font-inter"
                    />
                  </div>
                  <Button onClick={calcularMargem} className="w-full bg-primary hover:bg-primary-hover font-inter">
                    Calcular Margem
                  </Button>
                </div>

                <div className="space-y-4">
                  <div className="bg-secondary/50 p-4 rounded-lg">
                    <h3 className="font-cantarell font-semibold mb-4">Resultado</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between font-inter">
                        <span>Lucro Bruto:</span>
                        <span className="font-semibold text-green-600">
                          R$ {calculatorData.lucro.toFixed(2)}
                        </span>
                      </div>
                      <div className="flex justify-between font-inter">
                        <span>Margem de Lucro:</span>
                        <span className="font-semibold text-primary">
                          {calculatorData.margem.toFixed(1)}%
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <h4 className="font-cantarell font-semibold text-blue-900 mb-2">Dica</h4>
                    <p className="font-inter text-sm text-blue-800">
                      Uma margem saudável para o varejo geralmente fica entre 20% e 50%, 
                      dependendo do tipo de produto e mercado.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Despesas */}
        <TabsContent value="despesas" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Despesas Fixas */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="font-cantarell text-xl font-semibold flex items-center">
                    <PiggyBank className="h-5 w-5 text-primary mr-2" />
                    Despesas Fixas
                  </CardTitle>
                  <Button size="sm" className="bg-primary hover:bg-primary-hover font-inter">
                    <Plus className="mr-2 h-4 w-4" />
                    Adicionar
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="font-inter">Categoria</TableHead>
                      <TableHead className="font-inter">Valor</TableHead>
                      <TableHead className="font-inter">Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {despesasFixas.map((despesa, index) => (
                      <TableRow key={index}>
                        <TableCell>
                          <div>
                            <div className="font-inter font-medium">{despesa.categoria}</div>
                            <div className="font-inter text-sm text-muted-foreground">
                              Venc: {despesa.vencimento}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="font-inter font-semibold">
                          R$ {despesa.valor.toFixed(2)}
                        </TableCell>
                        <TableCell>
                          <span className={`px-2 py-1 rounded-full text-xs font-inter ${
                            despesa.status === 'Pago' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {despesa.status}
                          </span>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Despesas Variáveis */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="font-cantarell text-xl font-semibold flex items-center">
                    <CreditCard className="h-5 w-5 text-primary mr-2" />
                    Despesas Variáveis
                  </CardTitle>
                  <Button size="sm" className="bg-primary hover:bg-primary-hover font-inter">
                    <Plus className="mr-2 h-4 w-4" />
                    Adicionar
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="font-inter">Categoria</TableHead>
                      <TableHead className="font-inter">Valor</TableHead>
                      <TableHead className="font-inter">Data</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {despesasVariaveis.map((despesa, index) => (
                      <TableRow key={index}>
                        <TableCell>
                          <div>
                            <div className="font-inter font-medium">{despesa.categoria}</div>
                            <div className="font-inter text-sm text-muted-foreground">
                              {despesa.tipo}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="font-inter font-semibold">
                          R$ {despesa.valor.toFixed(2)}
                        </TableCell>
                        <TableCell className="font-inter text-sm">
                          {despesa.data}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Fluxo de Caixa */}
        <TabsContent value="fluxo" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="font-cantarell text-xl font-semibold flex items-center">
                <TrendingUp className="h-5 w-5 text-primary mr-2" />
                Fluxo de Caixa - Hoje
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-cantarell font-semibold text-blue-900">Saldo Inicial</h3>
                    <Banknote className="h-5 w-5 text-blue-600" />
                  </div>
                  <p className="font-cantarell text-2xl font-bold text-blue-900">
                    R$ {fluxoCaixaHoje.saldoInicial.toFixed(2)}
                  </p>
                </div>

                <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-cantarell font-semibold text-green-900">Entradas</h3>
                    <Plus className="h-5 w-5 text-green-600" />
                  </div>
                  <p className="font-cantarell text-2xl font-bold text-green-900">
                    R$ {fluxoCaixaHoje.entradas.toFixed(2)}
                  </p>
                  <p className="font-inter text-sm text-green-700 mt-1">
                    Vendas do dia
                  </p>
                </div>

                <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-cantarell font-semibold text-red-900">Saídas</h3>
                    <Minus className="h-5 w-5 text-red-600" />
                  </div>
                  <p className="font-cantarell text-2xl font-bold text-red-900">
                    R$ {fluxoCaixaHoje.saidas.toFixed(2)}
                  </p>
                  <p className="font-inter text-sm text-red-700 mt-1">
                    Despesas do dia
                  </p>
                </div>
              </div>

              <div className="mt-6 bg-primary/10 p-6 rounded-lg border border-primary/20">
                <div className="flex items-center justify-between">
                  <h3 className="font-cantarell text-xl font-semibold text-primary">
                    Saldo Final
                  </h3>
                  <p className="font-cantarell text-3xl font-bold text-primary">
                    R$ {fluxoCaixaHoje.saldoFinal.toFixed(2)}
                  </p>
                </div>
                <p className="font-inter text-sm text-primary/80 mt-2">
                  Posição de caixa atual
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default FinanceiroPage;
