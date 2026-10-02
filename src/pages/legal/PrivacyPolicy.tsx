import LegalPage, { LegalH2 } from "../../components/LegalPage";
import { site } from "../../data/site";

export default function PrivacyPolicy() {
  return (
    <LegalPage title="Privacy Policy" subtitle="Effective Date: October 2026">
      <p>
        This Privacy Policy explains how {site.domain} ("Website") collects, uses,
        and protects your information. By using the Website, you agree to this
        Policy. This Policy may be updated at any time; continued use means you
        accept the current version.
      </p>

      <LegalH2>Information We Collect</LegalH2>
      <p>
        You provide: name, email, phone, billing/shipping address, order details,
        payment info (processed by our payment partners), support messages.
      </p>
      <p>
        Automatic data: IP address, device/browser, pages viewed, timestamps,
        referral URLs, and general location.
      </p>
      <p>
        Cookies &amp; similar tech: to operate the site, remember preferences,
        analyze traffic, and measure marketing.
      </p>

      <LegalH2>How We Use Information</LegalH2>
      <p>Process and deliver orders, provide support, send service notices.</p>
      <p>Improve Website performance, prevent fraud, and secure transactions.</p>
      <p>
        (With your consent where required) send offers or updates. You can opt out
        anytime.
      </p>

      <LegalH2>Sharing of Information</LegalH2>
      <p>
        Service providers: payment processing, fulfillment/shipping, email,
        analytics, customer support who act on our behalf.
      </p>
      <p>
        Fraud prevention/Legal: to protect our rights, comply with law, or respond
        to lawful requests.
      </p>
      <p>We never sell your personal information to third parties.</p>

      <LegalH2>Cookies &amp; Analytics</LegalH2>
      <p>
        We use cookies, pixels, and analytics tools to understand usage and improve
        performance. You can control cookies in your browser; some features may not
        function without them.
      </p>

      <LegalH2>Marketing Preferences</LegalH2>
      <p>
        You can unsubscribe from marketing emails via the link in each message or by
        contacting us. If SMS is offered and you opt in, standard carrier rates
        apply; reply STOP to opt out.
      </p>

      <LegalH2>Data Security &amp; Retention</LegalH2>
      <p>
        We use reasonable administrative, technical, and physical safeguards. No
        method is 100% secure. We keep data only as long as necessary for the
        purposes described or as required by law.
      </p>

      <LegalH2>Children's Privacy</LegalH2>
      <p>
        The Website is not intended for individuals under 18. We do not knowingly
        collect data from children under 16.
      </p>

      <LegalH2>Your Rights (GDPR / CCPA)</LegalH2>
      <p>
        Depending on your location, you may request access, correction, deletion, or
        restriction of your personal information. EEA residents have rights under the
        GDPR; California residents have rights under the CCPA, including the right to
        know, delete, and opt out. We will verify and respond as required by
        applicable law. We never sell personal information to third parties.
      </p>

      <LegalH2>International Transfers</LegalH2>
      <p>
        Your information may be processed in countries other than where you reside.
        By using the Website, you consent to such transfers subject to appropriate
        safeguards.
      </p>

      <LegalH2>Contact</LegalH2>
      <p>
        Email: {site.email}
        <br />
        Phone: {site.phone}
      </p>

      <LegalH2>Changes to this Policy</LegalH2>
      <p>
        We may update this Policy periodically. The "Effective Date" reflects the
        latest version.
      </p>
    </LegalPage>
  );
}
