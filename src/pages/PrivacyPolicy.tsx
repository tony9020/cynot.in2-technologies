import LegalPage from '../components/LegalPage';
import { ReactNode } from 'react';

const H2 = ({ children }: { children: ReactNode }) => (
  <h2 className="text-2xl font-bold text-neutral-900 mt-10 mb-4 first:mt-0">{children}</h2>
);

const P = ({ children }: { children: ReactNode }) => (
  <p className="text-neutral-700 leading-relaxed mb-4">{children}</p>
);

const LI = ({ children }: { children: ReactNode }) => (
  <li className="text-neutral-700 leading-relaxed mb-2">{children}</li>
);

const PrivacyPolicy = () => (
  <LegalPage
    eyebrow="Legal"
    title="Privacy Policy"
    updated="Last updated: 19 October 2026"
    description="How Cynot Technologies Private Limited collects, uses, stores and protects personal data — cookies, analytics, retention periods and your rights under India's DPDP Act, 2023."
    path="/privacy-policy"
    intro="This Privacy Policy explains how CYNOT TECHNOLOGIES PRIVATE LIMITED ('Cynot Technologies', 'we', 'us') collects, uses, stores and shares personal information when you visit cynot.in, contact us, or use our services. It applies to business (B2B) and consumer (B2C) clients and website visitors in India and internationally."
  >
    <H2>1. Who we are</H2>
    <P>
      The data controller for this website is <strong>CYNOT TECHNOLOGIES PRIVATE LIMITED</strong>, a private
      limited company incorporated under the Companies Act, 2013 on 6 May 2024, Corporate Identity Number
      (CIN) <strong>U62099KL2024PTC087538</strong>, having its registered office at Chaliechen House,
      Mangalassery, Koratti South, Mukundapuram, Thrissur 680308, Kerala, India.
    </P>
    <P>
      Privacy questions or requests: <a href="mailto:tonychristopherofficial@gmail.com" className="text-primary-600 hover:underline">tonychristopherofficial@gmail.com</a> · <a href="tel:+919020555800" className="text-primary-600 hover:underline">+91 9020 555 800</a>. Grievance Officer: Tony Christopher, Founder &amp; Tech Lead.
    </P>

    <H2>2. Information we collect</H2>
    <ul className="list-disc pl-6 mb-4">
      <LI><strong>Information you give us:</strong> name, email address, phone number, company name, subject, service interest and message submitted through our contact form, or sent by email, phone or messaging.</LI>
      <LI><strong>Engagement information:</strong> project scope documents, brand assets, credentials and content you provide, invoicing and billing details (including GST number for Indian clients), and correspondence during delivery.</LI>
      <LI><strong>Technical information:</strong> IP address, browser type and version, device type, operating system, referring page, pages viewed and time spent, collected automatically through cookies and Google Analytics (tag ID G-GVC2RHEDV9).</LI>
      <LI><strong>Transaction information:</strong> invoices, payment references and refund records. We do not store full card or bank account numbers — payments are processed by our payment partners.</LI>
    </ul>

    <H2>3. How we use your information</H2>
    <ul className="list-disc pl-6 mb-4">
      <LI>To respond to enquiries and provide quotations.</LI>
      <LI>To deliver, manage and support the services you engage us for (software, web, design, data &amp; AI, digital marketing, creative production, IT support and digital business services).</LI>
      <LI>To invoice, collect payment, process refunds and maintain statutory accounting and tax records.</LI>
      <LI>To operate, secure, troubleshoot and improve our website and services, and to understand how visitors use it.</LI>
      <LI>To send service-related notices (project updates, maintenance windows, policy changes) and, only where you have consented, marketing communications you may unsubscribe from at any time.</LI>
      <LI>To comply with legal obligations, respond to lawful requests, and protect the rights, property and safety of our clients, our company and others.</LI>
    </ul>

    <H2>4. Legal basis and consent (India)</H2>
    <P>
      We process personal data in accordance with the Digital Personal Data Protection Act, 2023 (India)
      and other applicable law. Where consent is required, we ask for it at the point of collection and you
      may withdraw it at any time by writing to us. We also rely on legitimate uses permitted by law,
      including processing data you have voluntarily provided for a specified purpose, fulfilling a contract
      with you, and complying with statutory obligations.
    </P>
    <P>
      Our website is not directed at children under 18 and we do not knowingly collect personal data from
      children. Business contacts confirm they are at least 18 years old (or of contractual age) when
      corresponding with us.
    </P>

    <H2>5. Cookies and analytics</H2>
    <P>
      We use strictly necessary cookies to make the site function and optional analytics cookies (Google
      Analytics) to count visits and understand traffic sources. Analytics data is aggregated and does not
      identify you directly. You can block or delete cookies in your browser settings, and opt out of
      Google Analytics with the Google Analytics opt-out browser add-on. Disabling cookies may affect
      site functionality. We do not sell personal data and do not use third-party advertising cookies for
      cross-site ad profiling on this website.
    </P>

    <H2>6. Sharing your information</H2>
    <P>We share personal data only with:</P>
    <ul className="list-disc pl-6 mb-4">
      <LI>Service providers who help us operate — hosting and deployment (Vercel), analytics (Google), email and communication tools, payment gateways and banking partners, accounting and professional advisers.</LI>
      <LI>Subcontractors or technology partners assigned to your project, who are bound by confidentiality and data protection obligations no less protective than ours.</LI>
      <LI>Authorities where required by law, regulation, court order, or to establish, exercise or defend legal claims.</LI>
      <LI>A successor entity in the event of a merger, restructuring or sale of the business, subject to this Policy.</LI>
    </ul>

    <H2>7. International transfers</H2>
    <P>
      We are based in India. Cloud, analytics and collaboration providers may process data on servers
      located outside India, including in the United States and European Union. Where data is transferred
      internationally, we take reasonable steps — such as contractual safeguards with the receiving party —
      consistent with applicable law. By using our website or engaging our services you understand that
      data may be processed in these jurisdictions.
    </P>

    <H2>8. Retention</H2>
    <ul className="list-disc pl-6 mb-4">
      <LI>Enquiry and contact-form data: up to <strong>24 months</strong> from our last meaningful interaction, unless you become a client.</LI>
      <LI>Client project and contract records: for the duration of the engagement plus <strong>7 years</strong>, to meet Indian accounting, tax and legal requirements.</LI>
      <LI>Marketing consents and opt-outs: until withdrawn, plus a record of the withdrawal.</LI>
      <LI>Analytics data: as per Google's retention settings, up to 14 months.</LI>
    </ul>
    <P>After these periods, data is deleted or irreversibly anonymised.</P>

    <H2>9. Security</H2>
    <P>
      We use reasonable technical and organisational measures to protect personal data — access controls,
      strong authentication, encrypted transport (HTTPS), least-privilege access for team members and
      vendors, and secure backup practices. No method of transmission or storage is completely secure;
      please avoid sending passwords or payment card details through the contact form or by email.
    </P>

    <H2>10. Your rights</H2>
    <P>Subject to applicable law, you may ask us to:</P>
    <ul className="list-disc pl-6 mb-4">
      <LI>Confirm whether we process your personal data and provide access to it.</LI>
      <LI>Correct or update inaccurate or incomplete data.</LI>
      <LI>Erase data we no longer need to retain, or withdraw consent on which we rely.</LI>
      <LI>Provide information about the entities with whom your data has been shared.</LI>
      <LI>Withdraw marketing consent at any time, and raise a complaint with our grievance contact or the Data Protection Board.</LI>
    </ul>
    <P>
      Write to <a href="mailto:tonychristopherofficial@gmail.com" className="text-primary-600 hover:underline">tonychristopherofficial@gmail.com</a> with the subject "Privacy Request". We acknowledge
      requests within <strong>7 days</strong> and aim to resolve them within <strong>30 days</strong>.
    </P>

    <H2>11. Third-party links</H2>
    <P>
      Our site links to third-party websites and social platforms (LinkedIn, Instagram, Facebook, X).
      Their privacy practices are governed by their own policies, which we encourage you to read.
    </P>

    <H2>12. Changes to this Policy</H2>
    <P>
      We may update this Policy from time to time. The "Last updated" date at the top shows when it was
      last revised; material changes will be notified on this page or by email. Continued use of the
      website after changes constitutes acceptance of the revised Policy.
    </P>

    <H2>13. Contact us</H2>
    <P>
      <strong>CYNOT TECHNOLOGIES PRIVATE LIMITED</strong><br />
      CIN: U62099KL2024PTC087538<br />
      Registered Office: Chaliechen House, Mangalassery, Koratti South, Mukundapuram, Thrissur 680308,
      Kerala, India<br />
      Email: <a href="mailto:tonychristopherofficial@gmail.com" className="text-primary-600 hover:underline">tonychristopherofficial@gmail.com</a> · Phone: <a href="tel:+919020555800" className="text-primary-600 hover:underline">+91 9020 555 800</a>
    </P>
  </LegalPage>
);

export default PrivacyPolicy;
