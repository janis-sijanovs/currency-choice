import { useState } from 'react';
import CurrencyButton from './components/CurrencyButton/currencyButton';
import CurrencyDisplay from './components/CurrencyDisplay/currencyDisplay';
import { CurrencyType, getCurrencies } from './data/currencyData';
import styles from './App.module.scss';

const App = () => {
  const [selectedCurrencies, setSelectedCurrencies] = useState<CurrencyType[]>([] as CurrencyType[]);
  const allCurrencies = getCurrencies();

  const removeCurrency = (currency: CurrencyType) => {
    if (selectedCurrencies) {
      const index: number = selectedCurrencies?.indexOf(currency);

      const newArray: CurrencyType[] = [...selectedCurrencies]
        .slice(0, index)
        .concat([...selectedCurrencies]
          .slice(index + 1));

      setSelectedCurrencies(newArray);
    }
  };

  const addCurrency = (currency: CurrencyType) => {
    if (selectedCurrencies && !selectedCurrencies?.includes(currency)) {
      setSelectedCurrencies([...selectedCurrencies, currency]);
    }
  };

  return (
    <div className={styles.app}>
      {selectedCurrencies.length > 0 && (

      <div className={styles.itemList}>

        {selectedCurrencies && selectedCurrencies.map(((currency) => (
          <CurrencyDisplay
            key={currency.id}
            currency={currency}
            destroySelf={removeCurrency}
          />
        )))}
      </div>

      )}

      <div className={styles.itemList}>

        {allCurrencies.map((currency) => (
          <CurrencyButton
            key={currency.id}
            currency={currency}
            isChecked={selectedCurrencies.includes(currency)}
            addSelf={addCurrency}
            destroySelf={removeCurrency}
          />
        ))}

      </div>
    </div>
  );
};

export default App;
