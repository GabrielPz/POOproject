import {Conta, ContaCorrente, ContaPoupanca} from './classes.js';


// Criação de contas
const conta1 = new Conta(1, 1000, 'João Silva', 'Desenvolvedor');
const contaCorrente1 = new ContaCorrente(2, 5000, 'Maria Oliveira', 'Engenheira', 1000, 50);
const contaPoupanca1 = new ContaPoupanca(3, 3000, 'Carlos Andrade', 'Médico', 0.05, 10);

// Chamada dos métodos
console.log('\nExibindo extratos:');
conta1.checarExtrato();
contaCorrente1.checarExtrato();
contaPoupanca1.checarExtrato();

console.log('\nSolicitações de empréstimo:');
conta1.solicitarEmprestimo(2000);
contaCorrente1.solicitarEmprestimo(3000);
contaPoupanca1.solicitarEmprestimo(1000);

console.log('\nGerenciamento de Conta Corrente:');
contaCorrente1.gerenciarLimiteChequeEspecial(1500);
contaCorrente1.calcularTaxaManutencao();

console.log('\nGerenciamento de Conta Poupança:');
contaPoupanca1.calcularJuros();
contaPoupanca1.gerenciarLimiteSaques(5);

// Verificar melhores investimentos para conta poupança
ContaPoupanca.verificarMelhorInvestimento();

// Listar todas as contas
Conta.listarContas();