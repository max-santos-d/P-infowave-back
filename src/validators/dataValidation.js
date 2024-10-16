import validator from 'validator';

const cpfValidate = (cpf) => {
  const validationNumbers = /^\d+$/.test(cpf);

  if (!validationNumbers) return false;

  if (cpf.length !== 11 || /^(\d)\1+$/.test(cpf)) {
    return false;
  }

  const calcCheckDigit = (cpfArray, factor) => {
    let total = 0;
    for (let i = 0; i < factor - 1; i++) {
      total += cpfArray[i] * (factor - i);
    }
    const remainder = total % 11;
    return remainder < 2 ? 0 : 11 - remainder;
  };

  const cpfArray = cpf.split('').map((digit) => parseInt(digit, 10));

  const firstCheckDigit = calcCheckDigit(cpfArray, 10);
  const secondCheckDigit = calcCheckDigit(cpfArray, 11);

  return firstCheckDigit === cpfArray[9] && secondCheckDigit === cpfArray[10];
};

const urlValidate = (url) => {
  return validator.isURL(url);
};

export default {
  cpfValidate,
  urlValidate,
};
