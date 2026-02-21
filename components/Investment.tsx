import FadeIn from "./FadeIn";
import InvestForm from "./InvestForm";

export default function Investment() {
  return (
    <section id="invest" className="mx-auto w-full max-w-6xl px-6 py-24">
      <div className="grid gap-10 md:grid-cols-2 md:items-start">
        <FadeIn>
          <div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              SAFE Investment
            </h2>
            <p className="mt-4 max-w-xl text-zinc-400">
              Strategic investors can complete intake via Stripe Checkout. Upon
              successful payment, webhook events can be used for compliance
              workflows, investor records, and SAFE documentation follow-up.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-zinc-300">
              <li>• Stripe Checkout session creation</li>
              <li>• Webhook-ready backend scaffold</li>
              <li>• CMS-ready content architecture</li>
            </ul>
          </div>
        </FadeIn>

        <FadeIn>
          <InvestForm />
        </FadeIn>
      </div>
    </section>
  );
}
