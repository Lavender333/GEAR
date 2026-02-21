import { NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";

export async function POST(req: Request) {
  try {
    const stripe = getStripe();
    const body = (await req.json()) as { amount?: number };
    const amount = Number(body.amount);

    if (!Number.isFinite(amount) || amount < 10_000) {
      return NextResponse.json(
        { error: "Invalid amount. Minimum is 10000." },
        { status: 400 },
      );
    }

    if (!process.env.NEXT_PUBLIC_URL) {
      return NextResponse.json(
        { error: "Missing NEXT_PUBLIC_URL environment variable." },
        { status: 500 },
      );
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "GEAR SAFE Investment",
            },
            unit_amount: Math.round(amount * 100),
          },
          quantity: 1,
        },
      ],
      success_url: `${process.env.NEXT_PUBLIC_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_URL}/cancel`,
      metadata: {
        investment_type: "SAFE",
        amount_usd: String(amount),
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Failed to create checkout session.",
      },
      { status: 500 },
    );
  }
}
