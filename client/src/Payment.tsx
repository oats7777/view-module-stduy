import usePaymentMethods from './usePaymentMethods';
import { LocalPaymentMethod } from './types';

const PaymentMethods = ({
  paymentMethods,
}: {
  paymentMethods: LocalPaymentMethod[];
}) => {
  return (
    <div>
      {paymentMethods.map((method) => (
        <label key={method.provider}>
          <input
            type="radio"
            name="payment"
            value={method.provider}
            defaultChecked={method.provider === 'cash'}
          />
          <span>{method.label}</span>
        </label>
      ))}
    </div>
  );
};

export const Payment = ({ amount }: { amount: number }) => {
  const { paymentMethods } = usePaymentMethods();
  return (
    <div>
      <h3>Payment</h3>
      <PaymentMethods paymentMethods={paymentMethods} />
      <button>${amount}</button>
    </div>
  );
};
