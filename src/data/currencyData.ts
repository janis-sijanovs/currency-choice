export type CurrencyType = {
  id: number;
  name: string,
}

const currencies: CurrencyType[] = [
  {
    id: 1,
    name: 'eur',
  },
  {
    id: 2,
    name: 'pln',
  },
  {
    id: 3,
    name: 'gel',
  },
  {
    id: 4,
    name: 'dkk',
  },
  {
    id: 5,
    name: 'czk',
  },
  {
    id: 6,
    name: 'gbp',
  },
  {
    id: 7,
    name: 'sek',
  },
  {
    id: 8,
    name: 'usd',
  },
  {
    id: 9,
    name: 'rub',
  },
];

export const getCurrencies = () => [...currencies];
export const getCurrency = (id: number) => currencies.find((currency) => currency.id === id);
