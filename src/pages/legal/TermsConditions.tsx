import LegalPage, { LegalH2 } from "../../components/LegalPage";
import { products } from "../../data/products";
import { site } from "../../data/site";

export default function TermsConditions() {
  return (
    <LegalPage title="Terms & Conditions" subtitle="Effective Date: October 2026">
      <p>
        By placing an order on https://{site.domain}, you agree to the Terms and
        Conditions described below. Please read carefully before purchase.
      </p>
      <p>
        Please note that this purchase is a one-time payment only. It does not
        renew automatically and does not constitute a subscription.
      </p>

      <LegalH2>Products and Pricing</LegalH2>
      <p>
        The following products are available for one-time purchase on this
        website:
      </p>
      <ul className="list-disc pl-6 space-y-1">
        {products.map((p) => (
          <li key={p.id}>
            {p.name} — ${p.price.toFixed(2)}
          </li>
        ))}
      </ul>
      <p>
        All prices are in U.S. dollars. Shipping is free within the United States.
        We currently ship to the United States only. Your card will be charged a
        single time for the amount shown at checkout.
      </p>

      <LegalH2>Billing Descriptor</LegalH2>
      <p>
        Your credit card statement will show the following descriptor for your
        purchase: {site.descriptor}. This is how the charge will appear on the
        cardholder's billing statement.
      </p>

      <LegalH2>Payment Methods</LegalH2>
      <p>
        We accept Visa, Mastercard, and Discover only. Payment can only be made
        using a credit or debit card.
      </p>

      <LegalH2>Health Disclaimer</LegalH2>
      <p>
        Products sold through this website have not been evaluated by the Food and
        Drug Administration. They are not intended to diagnose, treat, cure, or
        prevent any disease. Always consult your physician before use if you are
        pregnant, nursing, taking medication, or have a medical condition.
        Individual results may vary.
      </p>

      <LegalH2>Shipping Policy</LegalH2>
      <p>
        Orders are processed within one to two (1–2) business days and typically
        arrive in 5–7 business days for U.S. shipments via USPS. Shipping is free.
      </p>

      <LegalH2>Refund Policy</LegalH2>
      <p>
        To request a refund, contact customer service within 30 days of receiving
        your order to obtain an RMA number. Products must be returned (opened or
        unopened) within 30 days of receipt. Return shipping costs are the
        responsibility of the customer. Refunds are processed within 5–7 business
        days after inspection.
      </p>

      <LegalH2>Return Address</LegalH2>
      <p>{site.returnAddress}</p>

      <LegalH2>Contact</LegalH2>
      <p>
        {site.phone}
        <br />
        {site.email}
      </p>

      <LegalH2>Disclaimer and Limitation of Liability</LegalH2>
      <p>
        All information on this website is for general informational purposes only
        and not a substitute for medical advice. https://{site.domain} shall not be
        liable for indirect or consequential damages beyond the total purchase
        price of the order.
      </p>

      <LegalH2>Governing Terms</LegalH2>
      <p>
        We reserve the right to update these Terms at any time without prior notice.
        Continued use of this site implies acceptance of the current version. These
        Terms are governed by the laws of the State of {site.governingState},
        United States.
      </p>
    </LegalPage>
  );
}
