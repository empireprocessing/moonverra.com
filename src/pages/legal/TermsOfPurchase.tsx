import LegalPage, { LegalH2 } from "../../components/LegalPage";
import { site } from "../../data/site";

export default function TermsOfPurchase() {
  return (
    <LegalPage title="Terms of Purchase">
      <p>
        These Terms of Purchase ("Terms") govern your purchases of products available
        through {site.domain} (the "Website"). By purchasing or using any product
        through this Website, you agree to these Terms as well as the Privacy Policy
        and Terms &amp; Conditions available on the site.
      </p>
      <p>
        Please note that this purchase is a one-time payment only. It does not renew
        automatically and does not constitute a subscription.
      </p>

      <LegalH2>General</LegalH2>
      <p>
        By placing an order, you confirm that you are at least 18 years of age,
        capable of entering into a legally binding agreement, and that all
        information you provide is accurate and complete. All purchases must comply
        with applicable laws and regulations.
      </p>

      <LegalH2>Billing Descriptor</LegalH2>
      <p>Your credit card statement will show the descriptor: {site.descriptor}.</p>

      <LegalH2>Order Processing</LegalH2>
      <p>
        Orders are typically processed within 1–2 business days and shipped within
        3–5 business days after confirmation via USPS. Shipping is free within the
        United States. In case of delays or stock shortages, you will be notified
        via email.
      </p>

      <LegalH2>Product Descriptions</LegalH2>
      <p>
        We aim to provide accurate and updated product information, though
        descriptions may contain errors or inaccuracies. If you receive a product not
        as described, your sole remedy is to return it as outlined in the Refund
        Policy.
      </p>

      <LegalH2>Pricing</LegalH2>
      <p>
        Prices are displayed in USD and may change without notice. Each product is a
        one-time purchase at the price shown at checkout. If a pricing error occurs,
        your order may be cancelled and you will be notified.
      </p>

      <LegalH2>Payment Methods</LegalH2>
      <p>We accept Visa, Mastercard, and Discover only.</p>

      <LegalH2>Dispute Resolution</LegalH2>
      <p>For any dispute, please contact our support team first:</p>
      <p>
        Email: {site.email}
        <br />
        Phone: {site.phone}
      </p>
      <p>
        We will investigate and aim to resolve issues within 30 days. If resolution
        is not reached, you may escalate through an independent mediator or
        arbitration. All disputes will be handled confidentially and fairly, under
        the laws of the State of {site.governingState}.
      </p>
    </LegalPage>
  );
}
