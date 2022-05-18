import { CurrencyType } from '../../data/currencyData';
import styles from './currencyDisplay.module.scss';

type CurrencyDisplayProps = {
  currency: CurrencyType,
  destroySelf: (currency: CurrencyType) => void,
}

const CurrencyDisplay = ({ currency, destroySelf }: CurrencyDisplayProps) => (

  <div className={styles.container}>
    {currency.name.toLowerCase()}

    <button
      className={styles.button}
      onClick={() => destroySelf(currency)}
    >
      X
    </button>

  </div>

);

export default CurrencyDisplay;
