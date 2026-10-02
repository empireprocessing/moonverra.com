import LegalPage, { LegalH2 } from "../../components/LegalPage";
import { site } from "../../data/site";

export default function ShippingPolicy() {
  return (
    <LegalPage title="Shipping Policy">
      <LegalH2>Where do you ship?</LegalH2>
      <p>We ship to the United States only. Shipping is free on every order.</p>

      <LegalH2>When can I expect to receive my shipment?</LegalH2>
      <p>
        Orders are processed within 1–2 business days and typically arrive within
        5–7 business days via USPS.
      </p>

      <LegalH2>How can I track my order?</LegalH2>
      <p>
        A tracking number will be sent to you by email once your order has shipped.
      </p>

      <LegalH2>How can I change my shipping address?</LegalH2>
      <p>
        Address changes are only accepted until 11:00 PM (PDT) on the same day the
        order is placed. Please contact us at {site.email} for assistance.
      </p>

      <LegalH2>Can I ship to a different address than my billing address?</LegalH2>
      <p>Yes, alternate delivery addresses are accepted.</p>

      <LegalH2>How is my order shipped?</LegalH2>
      <p>
        Orders are shipped via USPS. Shipments are not dispatched on weekends or
        public holidays.
      </p>
    </LegalPage>
  );
}
