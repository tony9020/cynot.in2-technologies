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

const TermsAndConditions = () => (
  <LegalPage
    eyebrow="Legal"
    title="Terms & Conditions"
    updated="Last updated: 19 October 2026"
    description="Terms governing the use of cynot.in and engagements with Cynot Technologies Private Limited for software, web, design, digital marketing and IT support services."
    path="/terms-and-conditions"
    intro="These Terms & Conditions govern the use of this website and the engagement of CYNOT TECHNOLOGIES PRIVATE LIMITED ('Cynot Technologies', 'we', 'us') for software, web, design, data & AI, digital marketing, creative, IT support and digital business services. By using this website, requesting a quotation, or confirming an order, you agree to these Terms."
  >
    <H2>1. About us</H2>
    <P>
      <strong>CYNOT TECHNOLOGIES PRIVATE LIMITED</strong> is a private limited company incorporated in
      India under the Companies Act, 2013 on 6 May 2024, CIN <strong>U62099KL2024PTC087538</strong>,
      registered office: Chaliechen House, Mangalassery, Koratti South, Mukundapuram, Thrissur 680308,
      Kerala, India. Contact: <a href="mailto:tonychristopherofficial@gmail.com" className="text-primary-600 hover:underline">tonychristopherofficial@gmail.com</a> · <a href="tel:+919020555800" className="text-primary-600 hover:underline">+91 9020 555 800</a>.
      We provide services to B2B and B2C clients in India and internationally.
    </P>

    <H2>2. Definitions</H2>
    <ul className="list-disc pl-6 mb-4">
      <LI><strong>"Client", "you"</strong> — the person or entity engaging our services or using the website.</LI>
      <LI><strong>"Services"</strong> — any service we offer: software development, web design &amp; development, UI/UX &amp; graphic design, data, automation &amp; AI, digital marketing, creative &amp; media production, IT support services and digital business services.</LI>
      <LI><strong>"Deliverables"</strong> — the work products specified in a quotation, statement of work (SOW) or order confirmation.</LI>
      <LI><strong>"Proposal"</strong> — our quotation, estimate or scope document, including any SOW incorporated by reference.</LI>
      <LI><strong>"Website"</strong> — cynot.in and its sub-pages, operated by us.</LI>
    </ul>

    <H2>3. Services and scope</H2>
    <P>
      The scope, deliverables, milestones, timeline and fees for each engagement are set out in the
      accepted Proposal. Anything not expressly included in scope is out of scope and will be handled as a
      change request (section 8). We may use qualified employees, contractors and technology partners to
      deliver the Services; we remain responsible for the overall delivery.
    </P>

    <H2>4. Quotations, pricing and payment</H2>
    <ul className="list-disc pl-6 mb-4">
      <LI>We price work using one of three models: <strong>hourly rate</strong> (short-term or support work), <strong>project-based fee</strong> (defined scope), or a <strong>retainer</strong> (reserved capacity over a term).</LI>
      <LI>Unless stated otherwise, projects require an <strong>advance of 40–50% of the estimated fee before kickoff</strong>, with the balance billed against agreed milestones. Retainers and hourly work are billed in arrears, monthly.</LI>
      <LI>Invoices are payable within <strong>7 days</strong> for Indian clients (bank transfer/UPI) and <strong>10 days</strong> for international clients (wire transfer or card). Fees exclude GST and other applicable taxes, which will be added at the prevailing rate where chargeable.</LI>
      <LI>International clients pay in the currency stated on the invoice. All bank, wire, intermediary and payment-gateway charges (including correspondent bank fees) are borne by the client; our invoices must be received net of charges.</LI>
      <LI>Overdue amounts accrue interest at <strong>1.5% per month</strong> (or the maximum permitted by law, if lower) and we may suspend work and access after 10 days' written notice.</LI>
      <LI>Estimates are indicative where scope is undefined; where we offer a fixed fee it is valid for 30 days and conditional on the assumptions listed in the Proposal.</LI>
    </ul>

    <H2>5. Client responsibilities</H2>
    <P>You agree to:</P>
    <ul className="list-disc pl-6 mb-4">
      <LI>Provide content, assets, access credentials, brand materials and approvals in a timely manner.</LI>
      <LI>Review deliverables and give consolidated feedback within <strong>5 business days</strong> of each milestone. Delays extend the schedule day-for-day and may attract rescheduling charges if they materially affect resourcing.</LI>
      <LI>Ensure that all materials you supply (text, images, data, trademarks, software) are accurate and that you have the rights and permissions needed for us to use them for the project.</LI>
      <LI>Keep account credentials confidential and notify us promptly of any unauthorised use or security incident affecting deliverables.</LI>
      <LI>Comply with applicable laws in your jurisdiction, including data protection, consumer protection, e-commerce, advertising standards and sector regulations.</LI>
    </ul>

    <H2>6. Delivery and acceptance</H2>
    <ul className="list-disc pl-6 mb-4">
      <LI>Delivery dates are good-faith estimates and depend on prompt client inputs; we are not liable for delay caused by late content, feedback, access or third-party outages.</LI>
      <LI>Deliverables are delivered electronically (email, repository or cloud link). Access or licences for third-party platforms are provided where included in scope.</LI>
      <LI>You should notify any material non-conformity with the agreed specification within <strong>14 days</strong> of delivery. We will correct verified defects free of charge within a reasonable period.</LI>
      <LI>Deliverables are deemed accepted if not disputed in writing within the review window, or on use in production or for commercial purposes.</LI>
    </ul>

    <H2>7. Intellectual property</H2>
    <ul className="list-disc pl-6 mb-4">
      <LI>On <strong>full payment</strong> of all fees due, you receive ownership of the final custom Deliverables created specifically for you, to the extent permitted by law. Source code is included where stated in the Proposal.</LI>
      <LI>We retain rights in pre-existing intellectual property, frameworks, components, libraries, tools, know-how and templates, and grant you a perpetual, non-exclusive licence to use them as part of the Deliverables.</LI>
      <LI>Third-party and open-source components remain governed by their own licences, which are passed through to you.</LI>
      <LI>Until all fees are paid, all work product remains our property and is licensed to you only for evaluation purposes.</LI>
      <LI>Unless otherwise agreed in writing or under an NDA, we may reference the client name, logo and non-confidential work in our portfolio, case studies and proposals.</LI>
    </ul>

    <H2>8. Change requests</H2>
    <P>
      Requests that alter agreed scope, assumptions or timeline are change requests. We will assess and
      quote them before any work starts; once approved they are added to the SOW. We are not obliged to
      perform out-of-scope work. Pre-approved change work is billed hourly at the applicable rate.
    </P>

    <H2>9. Confidentiality</H2>
    <P>
      Each party will keep the other's confidential information secret, use it only for the engagement,
      and protect it with at least reasonable care. This does not apply to information that is public
      through no breach, already lawfully known, independently developed, or required to be disclosed by
      law or regulator — in which case the disclosing party must, where lawful, notify the other. Obligations
      survive for <strong>3 years</strong> after the engagement ends (or indefinitely for trade secrets).
    </P>

    <H2>10. Warranties</H2>
    <ul className="list-disc pl-6 mb-4">
      <LI>We warrant that Services will be performed with reasonable skill and care and in line with generally accepted industry standards.</LI>
      <LI>We do not warrant that any website, app or campaign will be uninterrupted, error-free, or achieve any specific search ranking, traffic, conversion, sales or revenue outcome — these depend on third-party platforms and market factors.</LI>
      <LI>Except as stated here, all implied warranties (including fitness for a particular purpose and non-infringement, to the extent permitted by law) are excluded.</LI>
      <LI>Your sole remedy for breach of the service warranty is re-performance of the affected Services, or if we cannot do so within a reasonable time, a refund of the fees for the affected, unaccepted portion (see our Refund, Cancellation &amp; Fulfilment Policy).</LI>
    </ul>

    <H2>11. Limitation of liability</H2>
    <P>
      To the maximum extent permitted by law, neither party is liable for indirect, incidental, special,
      consequential or punitive damages, or for loss of profit, revenue, goodwill, data or anticipated
      savings. Our aggregate liability arising out of or relating to any engagement is limited to the
      total fees paid or payable by you to us in the <strong>three (3) months</strong> preceding the event
      giving rise to the claim. Nothing in these Terms limits liability that cannot be limited by law
      (including for fraud or wilful misconduct).
    </P>

    <H2>12. Indemnity</H2>
    <P>
      You agree to indemnify us against third-party claims arising from materials or data you supply, your
      misuse of the Deliverables, your breach of these Terms or applicable law, or claims that content you
      provided infringes another party's rights — except to the extent caused by our breach or negligence.
    </P>

    <H2>13. Third-party services</H2>
    <P>
      Deliverables may rely on third-party platforms (cloud providers, domain registrars, hosting,
      analytics, advertising networks, payment gateways, plugins and marketplaces). These are governed by
      their own terms, availability and pricing, which we do not control. Third-party costs quoted as
      pass-through are payable by you and non-refundable once incurred.
    </P>

    <H2>14. Term, suspension and termination</H2>
    <ul className="list-disc pl-6 mb-4">
      <LI>Either party may terminate an engagement with <strong>15 days' written notice</strong>. Retainers may be cancelled effective at the end of the current billing cycle with 15 days' notice.</LI>
      <LI>We may suspend or terminate immediately for non-payment (after the notice in section 4), material breach, unlawful use, or conduct that risks our systems or reputation.</LI>
      <LI>On termination you pay for all Services performed and non-cancellable third-party commitments incurred up to the termination date; we refund any prepaid fees for Services not yet performed, subject to the Refund, Cancellation &amp; Fulfilment Policy.</LI>
      <LI>Sections on payment, IP, confidentiality, liability, indemnity and governing law survive termination.</LI>
    </ul>

    <H2>15. Refunds and cancellations</H2>
    <P>
      Cancellations, refunds and delivery timelines (including international service delivery) are covered
      by our <a href="/refund-policy" className="text-primary-600 hover:underline">Refund, Cancellation &amp; Fulfilment Policy</a>, which forms part of these Terms.
    </P>

    <H2>16. Force majeure</H2>
    <P>
      Neither party is liable for delay or failure caused by events beyond its reasonable control,
      including natural disasters, war, terrorism, epidemics, government action, internet or power
      failures, cyber-attacks on upstream infrastructure, or failure of third-party platforms. Affected
      obligations are suspended for the duration, and either party may terminate if the event continues
      beyond 60 days.
    </P>

    <H2>17. Governing law and disputes</H2>
    <P>
      These Terms are governed by the laws of <strong>India</strong>. Any dispute is subject to the
      exclusive jurisdiction of the courts at <strong>Thrissur, Kerala</strong>. Before filing proceedings,
      the parties will first attempt to resolve the matter good-faith through written notice and
      escalation to senior contacts within 30 days.
    </P>

    <H2>18. General</H2>
    <ul className="list-disc pl-6 mb-4">
      <LI>These Terms, together with the Proposal, our Privacy Policy and Refund, Cancellation &amp; Fulfilment Policy, form the entire agreement for the engagement and supersede prior discussions.</LI>
      <LI>If any provision is held unenforceable, it will be modified to the minimum extent necessary and the remainder stays in effect.</LI>
      <LI>Our failure to enforce a right is not a waiver of it. You may not assign an engagement without our written consent; we may assign it as part of a reorganisation, merger or sale of business.</LI>
      <LI>Notices may be given by email to the addresses on file and are deemed received on the next business day.</LI>
      <LI>We may update these Terms; the "Last updated" date shows the latest version. Material changes apply to engagements confirmed after the update date.</LI>
    </ul>

    <H2>19. Contact</H2>
    <P>
      <strong>CYNOT TECHNOLOGIES PRIVATE LIMITED</strong> · CIN U62099KL2024PTC087538<br />
      Chaliechen House, Mangalassery, Koratti South, Mukundapuram, Thrissur 680308, Kerala, India<br />
      Email: <a href="mailto:tonychristopherofficial@gmail.com" className="text-primary-600 hover:underline">tonychristopherofficial@gmail.com</a> · Phone: <a href="tel:+919020555800" className="text-primary-600 hover:underline">+91 9020 555 800</a>
    </P>
  </LegalPage>
);

export default TermsAndConditions;
