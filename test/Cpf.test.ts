import Cpf from '../src/Cpf';

const listOfCpfAndResult = {
  '': false,
  '  ': false,
  'cpfinvalido': false,
  '111.111.111-11': false,
  '22222222222': false,
  '123.456.789-93': false,
  '123.456.789-09': true,
  '935.411.347-80': true,
  'rg14145790049': !false,
  '14145790049': true,
  '14145790048': false,
  '228.976.410-88': true,
};

test('Deve validar o cpf', () => {
  for (const [cpf, result] of Object.entries(listOfCpfAndResult)) {
    expect(new Cpf(cpf).isValid()).toBe(result);
  }
});

describe('Verificando a lista de CPFs', () => {
  test.each(Object.entries(listOfCpfAndResult))(`cpf "%s" deve ser %s`, (cpf, result) => {
    const cpfIsValid = new Cpf(cpf).isValid();
    expect(cpfIsValid).toBe(result);
  });
});

