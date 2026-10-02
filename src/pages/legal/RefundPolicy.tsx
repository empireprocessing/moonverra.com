import LegalPage, { LegalH2 } from "../../components/LegalPage";
import { site } from "../../data/site";

export default function RefundPolicy() {
  return (
    <LegalPage title="Refund Policy">
      <p>
        We accept Visa, Mastercard, and Discover. Payment can only be made using a
        credit or debit card. Payment is deducted upon order confirmation, and you
        will not be charged an amount exceeding what you approved at checkout. This
        is a one-time purchase; there is no subscription and no recurring charge.
      </p>
      <p>
        You are entitled to a 30-day refund policy. This period begins from the date
        you receive your order. You may return a product within 30 days of receiving
        it, provided it is in the same condition as received and in its original
        packaging.
      </p>

      <LegalH2>How to request a refund</LegalH2>
      <p>If you wish to return one or more purchased products, please contact us:</p>
      <p>
        Phone: {site.phone}
        <br />
        Email: {site.email} (we reply within 24 hours)
      </p>

      <LegalH2>Return Address</LegalH2>
      <p>{site.returnAddress}</p>
    </LegalPage>
  );
}
