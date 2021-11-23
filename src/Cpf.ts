export default class Cpf {
  constructor(readonly cpf: string) {}

  isValid() : boolean {
    const LENGTH_CPF = 11;
    const cpf = this.cpf.replace(/\D/g, '');
    if (!cpf) return false;
    if (cpf.length !== LENGTH_CPF) return false;
    const repeated = new Set(cpf.split('')).size === 1;
    if (repeated) return false;
    const firstDigit = this.calcDV( cpf.split('', 9) );
    const secondDigit = this.calcDV( cpf.split('', 10) );
    return cpf.slice( 9 ) === `${firstDigit}${secondDigit}`;
  }

  private calcDV(arrayOfDigits) : number {
    let sum : number = 0;
    arrayOfDigits.forEach((digit, index) => {
      sum += parseInt(digit) * (1+arrayOfDigits.length-index);
    });
    const rest = (sum % 11);
    return (rest < 2) ? 0 : 11 - rest;
  };
}
