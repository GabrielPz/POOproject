// Classe base Conta
export class Conta {
    #numeroConta;
    #saldo;
    static contas = []; // Array para gerenciar todas as contas criadas

    constructor(numeroConta, saldoInicial, nomeUsuario, profissaoUsuario) {
        this.#numeroConta = numeroConta;
        this.#saldo = saldoInicial;
        this.nomeUsuario = nomeUsuario;
        this.profissaoUsuario = profissaoUsuario;
        this.criarConta();
    }

    criarConta() {
        Conta.contas.push(this);
        console.log(`Conta número ${this.#numeroConta} criada com sucesso para o usuário ${this.nomeUsuario}.`);
    }

    checarExtrato() {
        console.log(`Extrato da conta ${this.#numeroConta}: Saldo atual é ${this.#saldo}, Nome do usuário: ${this.nomeUsuario}, Profissão do usuário: ${this.profissaoUsuario}.`);
    }

    solicitarEmprestimo(valor) {
        console.log(`Empréstimo de ${valor} solicitado na conta ${this.#numeroConta}.`);
    }

    static validNumber(number){
        const isNumber = Number(number);
        if(number <= 0 || !isNumber){
            return false;
        }
        return true;
    }

    static imprimirInstrucoes() {
        console.log("Instruções: Para criar uma conta, instancie uma nova Conta. Use os métodos disponíveis para gerenciar a conta.");
    }

    // Getters e Setters para atributos privados
    get numeroConta() {
        return this.#numeroConta;
    }

    get saldo() {
        return this.#saldo;
    }

    set saldo(novoSaldo) {
        this.#saldo = novoSaldo;
    }

    // Método estático para listar todas as contas
    static listarContas() {
        console.log("Listando todas as contas criadas:");
        this.contas.forEach(conta => {
            console.log(`Conta: ${conta.numeroConta}, Nome do usuário: ${conta.nomeUsuario}, Saldo: ${conta.saldo}`);
        });
    }
}


// Classe ContaCorrente que herda de Conta
export class ContaCorrente extends Conta {
    #limiteChequeEspecial;
    #taxaManutencao;
    static contasCorrente = [];

    constructor(numeroConta, saldoInicial, nomeUsuario, profissaoUsuario, limiteChequeEspecial, taxaManutencao) {
        super(numeroConta, saldoInicial, nomeUsuario, profissaoUsuario);
        this.#limiteChequeEspecial = limiteChequeEspecial;
        this.#taxaManutencao = taxaManutencao;
        ContaCorrente.contasCorrente.push(this);
    }

    gerenciarLimiteChequeEspecial(novoLimite) {
        const isValid = Conta.validNumber(novoLimite);
        if(!isValid){
            console.log('Insira um valor válido');
            return;
        }
        this.#limiteChequeEspecial = novoLimite;
        console.log(`Limite do cheque especial atualizado para ${novoLimite}.`);
    }

    calcularTaxaManutencao() {
        console.log(`Taxa de manutenção é ${this.#taxaManutencao}.`);
    }

    static listarTodasContasCorrente() {
        console.log("Contas corrente:");
        this.contasCorrente.forEach(conta => console.log(conta));
    }

}

// Classe ContaPoupanca que herda de Conta
export class ContaPoupanca extends Conta {
    #taxaJuros;
    #limiteSaques;
    static melhoresInvestimentos = ["Tesouro Direto", "Ações"];

    constructor(numeroConta, saldoInicial, nomeUsuario, profissaoUsuario, taxaJuros, limiteSaques) {
        super(numeroConta, saldoInicial, nomeUsuario, profissaoUsuario);
        this.#taxaJuros = taxaJuros;
        this.#limiteSaques = limiteSaques;
    }

    calcularJuros() {
        console.log(`Juros calculados com taxa de ${this.#taxaJuros}.`);
    }

    gerenciarLimiteSaques(novoLimite) {
        const isValid = Conta.validNumber(novoLimite);
        if(!isValid){
            console.log('Insira um valor válido');
            return;
        }
        this.#limiteSaques = novoLimite;
        console.log(`Limite de saques atualizado para ${novoLimite}.`);
    }

    static verificarMelhorInvestimento() {
        console.log("Melhores investimentos: " + this.melhoresInvestimentos.join(", "));
    }

}

