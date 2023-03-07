import usePaymentMethods from '../hooks/usePaymentMethods';
import { useRoundUp } from '../hooks/useRoundUp';
import { PaymentMethods } from './PaymentMethods';

const formatCheckboxLabel = (agreeToDonate: boolean, tip: number) => {
  return agreeToDonate
    ? 'Thanks for your donation.'
    : `I would like to donate $${tip} to charity.`;
};

export const Payment = ({ amount }: { amount: number }) => {
  const { paymentMethods } = usePaymentMethods();
  const { agreeToDonate, total, tip, updateAgreeToDonate } = useRoundUp(amount);

  return (
    <div>
      <h3>Payment</h3>
      <PaymentMethods options={paymentMethods} />
      <div>
        <label>
          <input
            type="checkbox"
            onChange={updateAgreeToDonate}
            checked={agreeToDonate}
          />
          <p>{formatCheckboxLabel(agreeToDonate, tip)}</p>
        </label>
      </div>
      <button>${total}</button>
    </div>
  );
};
