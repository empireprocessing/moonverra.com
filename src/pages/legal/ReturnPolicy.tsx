import LegalPage, { LegalH2 } from "../../components/LegalPage";
import { site } from "../../data/site";

export default function ReturnPolicy() {
  return (
    <LegalPage title="Return Policy">
      <LegalH2>How to Start a Return</LegalH2>
      <p>Contact Customer Support within 30 days of receiving your order:</p>
      <p>
        Email: {site.email}
        <br />
        Phone: {site.phone}
      </p>
      <ol className="list-decimal pl-6 space-y-2">
        <li>Request an RMA (Return Merchandise Authorization) number.</li>
        <li>
          You will receive a prepaid return label. Print and affix it to your
          package.
        </li>
        <li>Clearly write the RMA number on the outside of the package.</li>
        <li>
          Send the opened or unopened product back to the address below within 30
          days of receipt.
        </li>
      </ol>

      <LegalH2>Return Address</LegalH2>
      <p>{site.returnAddress}</p>

      <LegalH2>Refunds</LegalH2>
      <ul className="list-disc pl-6 space-y-1">
        <li>
          Once received and verified, a refund will be issued to your original
          payment method.
        </li>
        <li>
          Refunds typically post within 3–5 business days, depending on your bank.
        </li>
      </ul>
    </LegalPage>
  );
}
