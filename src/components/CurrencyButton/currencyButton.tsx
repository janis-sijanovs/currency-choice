import { CurrencyType } from '../../data/currencyData';
import styles from './currencyButton.module.scss';

type CurrencyButtonProps = {
  currency: CurrencyType,
  isChecked: boolean,
  addSelf: (currency: CurrencyType) => void,
  destroySelf: (currency: CurrencyType) => void,
}

const CurrencyButton = ({
  currency, isChecked, addSelf, destroySelf,
}: CurrencyButtonProps) => (

  <button
    className={styles.container}
    style={isChecked ? { backgroundColor: 'white', borderWidth: '1px' } : {}}
    onClick={() => { if (isChecked) { destroySelf(currency); } else { addSelf(currency); } }}
  >
    <div className={styles.checkbox}>
      {isChecked ? 'X' : ''}
    </div>

    {currency.name.toUpperCase()}

  </button>

);

export default CurrencyButton;
