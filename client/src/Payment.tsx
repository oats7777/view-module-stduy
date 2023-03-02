import usePaymentMethods from './usePaymentMethods';
import PaymentMethod from './PaymentMethod';

const PaymentMethods = ({ options }: { options: PaymentMethod[] }) => {
  return (
    <div>
      {options.map((method) => (
        <label key={method.provider}>
          <input
            type="radio"
            name="payment"
            value={method.provider}
            defaultChecked={method.isDefaultMethod}
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
      <PaymentMethods options={paymentMethods} />
      <button>${amount}</button>
    </div>
  );
};
