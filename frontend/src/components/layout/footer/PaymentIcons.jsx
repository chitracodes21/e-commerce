import React from "react";

function PaymentIcons() {
  const paymentIcons = [
    { icon: "fab fa-cc-visa", label: "Visa" },
    { icon: "fab fa-cc-mastercard", label: "Mastercard" },
    { icon: "fab fa-cc-amex", label: "American Express" },
    { icon: "fab fa-cc-paypal", label: "PayPal" },
    { icon: "fab fa-apple-pay", label: "Apple Pay" },
  ];
  return (
    <div className="payment-icons">
      {paymentIcons.map((payment) => {
        return <i className={payment.icon}></i>;
      })}
    </div>
  );
}

export default PaymentIcons;
