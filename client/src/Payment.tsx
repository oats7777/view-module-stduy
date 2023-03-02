import { useEffect, useState } from 'react';

export const Payment = ({ amount }: { amount: number }) => {
  const [paymentMethods, setPaymentMethods] = useState<any[]>([]);

  useEffect(() => {
    const fetchPaymentMethods = async () => {
      const url = 'http://localhost:8080/';

      const response = await fetch(url);
      const methods: any[] = await response.json();

      if (methods.length > 0) {
        const extended = methods.map((method) => ({
          provider: method.name,
          label: `Pay with ${method.name}`,
        }));
        extended.push({ provider: 'cash', label: 'Pay in cash' });
        setPaymentMethods(extended);
      } else {
        setPaymentMethods([]);
      }
    };

    fetchPaymentMethods();
  }, []);

  return (
    <div>
      <h3>Payment</h3>
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
      <button>${amount}</button>
    </div>
  );
};
