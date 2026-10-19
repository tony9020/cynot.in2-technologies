import LegalPage from '../components/LegalPage';
import { ReactNode } from 'react';

const H2 = ({ children }: { children: ReactNode }) => (
  <h2 className="text-2xl font-bold text-neutral-900 mt-10 mb-4 first:mt-0">{children}</h2>
);

const H3 = ({ children }: { children: ReactNode }) => (
  <h3 className="text-lg font-semibold text-neutral-900 mt-6 mb-2">{children}</h3>
);

const P = ({ children }: { children: ReactNode }) => (
  <p className="text-neutral-700 leading-relaxed mb-4">{children}</p>
);

const LI = ({ children }: { children: ReactNode }) => (
  <li className="text-neutral-700 leading-relaxed mb-2">{children}</li>
);

const RefundPolicy = () => (
  <LegalPage
    eyebrow="Legal"
    title="Refund, Cancellation & Fulfilment Policy"
    updated="Last updated: 19 October 2026"
    documentTitle="Refund, Cancellation & Fulfilment Policy | Cynot Technologies"
    intro="This policy sets out how CYNOT TECHNOLOGIES PRIVATE LIMITED delivers services (fulfilment), how and when you can cancel, and the explicit timelines and conditions for refunds — including international engagements. It applies to all clients unless a signed statement of work states otherwise; where terms differ, the signed statement of work prevails."
  >
    <H2>1. Fulfilment: how and when we deliver</H2>
    <P>
      Our Services are digital and are fulfilled electronically. Deliverables are sent by email, shared
      cloud link, code repository, ad/platform account access, or file transfer — no physical shipment is
      required for software, web, design, marketing or IT support work. A deliverable is "fulfilled" when
      we send it to the contact details on your account and, for hosted work, when it is live in the
      environment agreed in the proposal.
    </P>

    <H3>1.1 Standard delivery timelines (from kickoff, assuming inputs arrive within 5 business days)</H3>
    <div className="overflow-x-auto mb-6">
      <table className="w-full text-left text-sm border border-neutral-200">
        <thead className="bg-neutral-50 text-neutral-900">
          <tr>
            <th className="p-3 border-b border-neutral-200 font-semibold">Deliverable</th>
            <th className="p-3 border-b border-neutral-200 font-semibold">Typical fulfilment time</th>
          </tr>
        </thead>
        <tbody className="text-neutral-700">
          <tr><td className="p-3 border-b border-neutral-100">Landing page (design + build)</td><td className="p-3 border-b border-neutral-100">2–3 weeks</td></tr>
          <tr><td className="p-3 border-b border-neutral-100">Business website with CMS (5–15 pages)</td><td className="p-3 border-b border-neutral-100">4–8 weeks</td></tr>
          <tr><td className="p-3 border-b border-neutral-100">E-commerce platform</td><td className="p-3 border-b border-neutral-100">6–12 weeks</td></tr>
          <tr><td className="p-3 border-b border-neutral-100">Web application / admin portal (per phase)</td><td className="p-3 border-b border-neutral-100">8–16 weeks</td></tr>
          <tr><td className="p-3 border-b border-neutral-100">Mobile app (per platform phase, iOS/Android)</td><td className="p-3 border-b border-neutral-100">8–14 weeks</td></tr>
          <tr><td className="p-3 border-b border-neutral-100">UI/UX package (wireframes + prototype, up to 10 screens)</td><td className="p-3 border-b border-neutral-100">2–4 weeks</td></tr>
          <tr><td className="p-3 border-b border-neutral-100">Logo &amp; brand identity</td><td className="p-3 border-b border-neutral-100">2–4 weeks</td></tr>
          <tr><td className="p-3 border-b border-neutral-100">Video / animation (up to 60 seconds)</td><td className="p-3 border-b border-neutral-100">3–5 weeks</td></tr>
          <tr><td className="p-3 border-b border-neutral-100">SEO &amp; digital marketing</td><td className="p-3 border-b border-neutral-100">Ongoing monthly service; first report within 30 days</td></tr>
          <tr><td className="p-3 border-b border-neutral-100">Data, automation &amp; AI workflows</td><td className="p-3 border-b border-neutral-100">3–8 weeks per workflow</td></tr>
          <tr><td className="p-3 border-b border-neutral-100">IT support setup (network, cloud, devices)</td><td className="p-3 border-b border-neutral-100">2–10 business days per site/tenant</td></tr>
        </tbody>
      </table>
    </div>

    <H3>1.2 Support &amp; response times (IT support and managed services)</H3>
    <ul className="list-disc pl-6 mb-4">
      <LI><strong>Critical (service down / security incident):</strong> first response within <strong>4 business hours</strong>, continuous work until restored or mitigated.</LI>
      <LI><strong>High (major feature impaired):</strong> first response within <strong>1 business day</strong>, fix or workaround within 3 business days.</LI>
      <LI><strong>Standard (questions, minor issues):</strong> first response within <strong>2 business days</strong>.</LI>
      <LI>Business hours are <strong>Monday–Friday, 9:00 AM – 8:00 PM IST (UTC+5:30)</strong>, excluding Indian public holidays. International clients in other time zones: we schedule overlap hours by agreement and count response windows in IST business days.</LI>
    </ul>

    <H3>1.3 Conditions that affect timelines</H3>
    <ul className="list-disc pl-6 mb-4">
      <LI>Timelines start from the later of (a) kickoff, (b) receipt of the agreed advance and (c) receipt of complete inputs (content, assets, access, approvals).</LI>
      <LI>Client feedback or content is due within <strong>5 business days</strong> of each request; delays extend delivery <strong>day-for-day</strong>.</LI>
      <LI>Third-party delays (domain/DNS propagation, hosting or marketplace approvals, payment-gateway KYC, app-store review, ad-account review, vendor outages) are outside our control and are excluded from delivery windows.</LI>
      <LI>Change requests approved during an engagement are quoted with their own delivery window before work starts.</LI>
      <LI>Force majeure events (see Terms §16) suspend timelines for their duration.</LI>
    </ul>

    <H3>1.4 Physical goods (only where an order includes print/merchandise)</H3>
    <ul className="list-disc pl-6 mb-4">
      <LI><strong>Domestic India:</strong> dispatched within 3 business days of artwork approval, delivered in <strong>3–7 business days</strong> by courier with tracking.</LI>
      <LI><strong>International:</strong> dispatched within 5 business days, delivered in <strong>7–21 business days</strong> depending on destination and customs clearance.</LI>
      <LI>International duties, import taxes, brokerage and local clearance are payable by the recipient; refusal of customs payment may result in return-to-sender charges being deducted from any refund.</LI>
      <LI>Risk passes on delivery to the carrier; transit damage must be reported within 48 hours with photographs so we can pursue the carrier claim.</LI>
    </ul>

    <H2>2. Cancellation</H2>
    <H3>2.1 Before kickoff</H3>
    <P>
      You may cancel before work starts by writing to <a href="mailto:tonychristopherofficial@gmail.com" className="text-primary-600 hover:underline">tonychristopherofficial@gmail.com</a>. Any advance paid is
      refunded less <strong>5%</strong> administrative and payment-gateway charges (or the actual gateway
      fee if higher), processed within the timelines in section 3.
    </P>

    <H3>2.2 After kickoff (project-based engagements)</H3>
    <P>
      You may cancel at any time with written notice. The refundable amount is:
      <br />
      <strong>Refund = total amounts paid − value of work completed to the cancellation date (at the agreed
      hourly rate where scope is incomplete) − non-cancellable third-party costs already committed.</strong>
    </P>
    <ul className="list-disc pl-6 mb-4">
      <LI>We provide a written work-in-progress statement and all completed deliverables within <strong>5 business days</strong> of cancellation.</LI>
      <LI>Work completed and accepted to date is not refundable. Work in progress is billed pro-rata to the nearest half-day.</LI>
      <LI>Cancellation requests are confirmed in writing within <strong>2 business days</strong>.</LI>
    </ul>

    <H3>2.3 Hourly engagements</H3>
    <P>
      Billed for actual hours worked each month, including time spent on approved change requests and
      reasonable project administration. No cancellation fee applies; the current month's invoice remains
      payable for hours already worked.
    </P>

    <H3>2.4 Retainers and ongoing support</H3>
    <ul className="list-disc pl-6 mb-4">
      <LI>Cancel with <strong>15 days' written notice</strong>; the cancellation takes effect at the end of the current billing cycle, and service continues until then.</LI>
      <LI><strong>Unused prepaid capacity:</strong> hours or credits prepaid for the current month that go unused (through no fault of ours) are refunded pro-rata at the retainer hourly rate — or rolled over for <strong>30 days</strong> if you prefer, by written request at the time of cancellation.</LI>
      <LI>Annual retainers cancelled mid-term: refund of the unused full months remaining, less a <strong>10%</strong> early-termination charge of the annual fee.</LI>
      <LI>Service is not continued after the effective date; you are responsible for alternate arrangements and for exporting your data/configuration before access ends.</LI>
    </ul>

    <H3>2.5 Digital marketing campaigns</H3>
    <P>
      Cancellation of the management service takes effect at the end of the current month. <strong>Media
      spend (Google, Meta, etc.) already paid or committed to the platform is non-refundable</strong>
      because platforms settle it directly; unused platform balance can be transferred to your own
      advertising account on request.
    </P>

    <H2>3. Refunds: timelines and conditions</H2>
    <H3>3.1 When a refund is due</H3>
    <ul className="list-disc pl-6 mb-4">
      <LI>Cancellation under section 2, resulting in a credit balance.</LI>
      <LI>Verified defects we fail to fix within <strong>30 days</strong> of written notice for accepted deliverables.</LI>
      <LI>We cancel or cannot deliver the agreed scope and an alternative is not accepted by you.</LI>
      <LI>Duplicate or erroneous payment.</LI>
      <LI>Statutory cooling-off or consumer rights where applicable.</LI>
    </ul>

    <H3>3.2 Processing timelines</H3>
    <div className="overflow-x-auto mb-6">
      <table className="w-full text-left text-sm border border-neutral-200">
        <thead className="bg-neutral-50 text-neutral-900">
          <tr>
            <th className="p-3 border-b border-neutral-200 font-semibold">Step</th>
            <th className="p-3 border-b border-neutral-200 font-semibold">Timeline</th>
          </tr>
        </thead>
        <tbody className="text-neutral-700">
          <tr><td className="p-3 border-b border-neutral-100">Refund request acknowledged</td><td className="p-3 border-b border-neutral-100">Within <strong>2 business days</strong></td></tr>
          <tr><td className="p-3 border-b border-neutral-100">Refund decision communicated</td><td className="p-3 border-b border-neutral-100">Within <strong>5 business days</strong> of receiving all required details</td></tr>
          <tr><td className="p-3 border-b border-neutral-100">Refund initiated (payment instruction sent)</td><td className="p-3 border-b border-neutral-100">Within <strong>5 business days</strong> of approval</td></tr>
          <tr><td className="p-3 border-b border-neutral-100">Domestic refunds (India: UPI/NEFT/card)</td><td className="p-3 border-b border-neutral-100">Credited in <strong>5–7 business days</strong> to the original payment method</td></tr>
          <tr><td className="p-3 border-b border-neutral-100">International card refunds (Visa/Mastercard/Amex)</td><td className="p-3 border-b border-neutral-100"><strong>10–21 business days</strong>, depending on the issuing bank</td></tr>
          <tr><td className="p-3 border-b border-neutral-100">International bank wire refunds (SWIFT)</td><td className="p-3 border-b border-neutral-100"><strong>10–21 business days</strong> end-to-end: 5 business days on our side, then 5–15 business days for intermediary and beneficiary banks</td></tr>
        </tbody>
      </table>
    </div>

    <H3>3.3 International refunds — specific conditions</H3>
    <ul className="list-disc pl-6 mb-4">
      <LI>Refunds are made in the <strong>original transaction currency</strong>. Fluctuations in exchange rates between payment and refund mean you may receive a slightly different amount in your currency; we do not profit from or compensate forex differences.</LI>
      <LI><strong>All intermediary, correspondent and beneficiary bank charges are deducted from the refund</strong> (typically USD 10–35 per transfer). Our own outgoing bank charges, if any, are borne by us.</LI>
      <LI>Refunds are sent only to the <strong>original payment source</strong>. If the original method is closed or unavailable, we require written confirmation of the beneficiary name, bank, IBAN/SWIFT and account number before an alternate transfer is made.</LI>
      <LI>For wire refunds, you must provide correct banking details and any KYC/authorization your bank requires; delays caused by missing information or bank compliance checks are outside our control.</LI>
      <LI>Payment-gateway fees, bank charges, wire fees, currency-conversion spreads charged by banks and taxes already remitted are <strong>non-refundable</strong>, except where law requires otherwise.</LI>
      <LI>Refunds to clients outside India are made subject to RBI regulations and applicable local law; where a refund cannot lawfully be completed, we will offer service credit or an alternative lawful arrangement.</LI>
      <LI>Nothing here limits statutory rights available to consumers in their jurisdiction.</LI>
    </ul>

    <H2>4. What is not refundable</H2>
    <ul className="list-disc pl-6 mb-4">
      <LI>Work completed, delivered and accepted (including milestone-complete phases).</LI>
      <LI>Third-party costs already incurred or committed: domains, hosting, SSL, CDN, cloud usage, stock assets, fonts, plugins, licences, app-store or marketplace fees.</LI>
      <LI>Advertising/media spend paid to platforms, and platform spend commitments.</LI>
      <LI>Bank, gateway, wire, intermediary and currency-conversion charges.</LI>
      <LI>Change requests, additional revision rounds and out-of-scope work already performed.</LI>
      <LI>Retainer capacity unused through client inaction, beyond section 2.4.</LI>
      <LI>Requests made after <strong>30 days</strong> from the relevant invoice or delivery date, unless a longer statutory period applies.</LI>
    </ul>

    <H2>5. Revisions and defects</H2>
    <ul className="list-disc pl-6 mb-4">
      <LI><strong>Two rounds of revisions per design milestone</strong> are included; further revisions, or changes to already-approved work, are billed at the applicable hourly rate.</LI>
      <LI>Defects reported within 14 days of delivery that conflict with the agreed specification are corrected free of charge within a reasonable period (target: 10 business days).</LI>
      <LI>Requests arising from a change of mind, brand direction change after approval, or new requirements are change requests, not defects.</LI>
      <LI>If a disputed deliverable remains unresolved 30 days after your written defect notice, either party may terminate that scope; you receive a refund of fees paid for unaccepted, undelivered portions under section 2.2.</LI>
    </ul>

    <H2>6. How to request a cancellation or refund</H2>
    <ul className="list-disc pl-6 mb-4">
      <LI>Email <a href="mailto:tonychristopherofficial@gmail.com" className="text-primary-600 hover:underline">tonychristopherofficial@gmail.com</a> with the subject "Cancellation / Refund Request".</LI>
      <LI>Include: your name, company, invoice number(s), payment date and method, amount paid, and the reason (plus evidence for defect claims).</LI>
      <LI>We acknowledge within 2 business days and respond with a decision or any information we need within 5 business days.</LI>
      <LI>Approved refunds follow section 3.2. Escalations: Tony Christopher, Founder &amp; Tech Lead, at the same email address — we aim to resolve grievances within 30 days.</LI>
      <LI>Please contact us before raising a chargeback with your bank; a payment dispute may pause processing while we work it out, and unfounded chargebacks may lead to recovery of bank fees and suspension of service.</LI>
    </ul>

    <H2>7. Contact</H2>
    <P>
      <strong>CYNOT TECHNOLOGIES PRIVATE LIMITED</strong> · CIN U62099KL2024PTC087538<br />
      Chaliechen House, Mangalassery, Koratti South, Mukundapuram, Thrissur 680308, Kerala, India<br />
      Email: <a href="mailto:tonychristopherofficial@gmail.com" className="text-primary-600 hover:underline">tonychristopherofficial@gmail.com</a> · Phone: <a href="tel:+919020555800" className="text-primary-600 hover:underline">+91 9020 555 800</a><br />
      Business hours: Monday–Friday, 9:00 AM – 8:00 PM IST (UTC+5:30)
    </P>
  </LegalPage>
);

export default RefundPolicy;
