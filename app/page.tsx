import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-neutral-900 flex items-center justify-center px-6">
      <section className="w-full max-w-6xl grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="AvenueBoard logo"
              width={200}
              height={200}
              className="rounded-md object-contain"
            />
            <span className="text-lg font-semibold tracking-tight">
              
            </span>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 px-4 py-2 text-sm text-neutral-600">
            <span className="h-2 w-2 rounded-full bg-neutral-900" />
            Coming soon
          </div>

          <div className="space-y-5">
            <h1 className="text-5xl md:text-6xl font-semibold tracking-tight leading-[0.95]">
              Rent, simplified.
            </h1>

            <p className="text-lg md:text-xl text-neutral-600 max-w-xl leading-relaxed">
              AvenueBoard is a modern rent collection experience built for
              landlords and designed for tenants.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 text-sm text-neutral-600">
            <span className="rounded-full border border-neutral-200 px-4 py-2">
              Free for landlords
            </span>
            <span className="rounded-full border border-neutral-200 px-4 py-2">
              ACH-first payments
            </span>
            <span className="rounded-full border border-neutral-200 px-4 py-2">
              Simple by design
            </span>
          </div>

          <form className="flex flex-col sm:flex-row gap-3 max-w-xl">
            <input
              type="email"
              placeholder="Enter your email"
              className="h-12 flex-1 rounded-2xl border border-neutral-300 px-4 outline-none focus:ring-2 focus:ring-neutral-300"
            />
            <button
              type="submit"
              className="h-12 rounded-2xl bg-neutral-900 text-white px-6 font-medium hover:opacity-90 transition"
            >
              Notify me
            </button>
          </form>

          <p className="text-sm text-neutral-500">
            Launching soon for self-managed landlords and small property
            managers.
          </p>
        </div>

        <div className="rounded-[2rem] border border-neutral-200 bg-neutral-50 p-6 shadow-sm">
          <div className="rounded-[1.5rem] border border-neutral-200 bg-white p-6 space-y-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-500">AvenueBoard</p>
                <h2 className="text-2xl font-semibold">Early Access</h2>
              </div>
              <div className="rounded-full border border-neutral-200 px-3 py-1 text-sm text-neutral-600">
                Preview
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-neutral-50 border border-neutral-200 p-4">
                <p className="text-sm text-neutral-500">Built for</p>
                <p className="text-lg font-medium mt-1">Landlords</p>
              </div>
              <div className="rounded-2xl bg-neutral-50 border border-neutral-200 p-4">
                <p className="text-sm text-neutral-500">Designed for</p>
                <p className="text-lg font-medium mt-1">Tenants</p>
              </div>
            </div>

            <div className="rounded-2xl border border-neutral-200 p-4 space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-neutral-500">Payments</span>
                <span className="font-medium">ACH-first</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-neutral-500">Pricing</span>
                <span className="font-medium">No landlord subscription</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-neutral-500">Experience</span>
                <span className="font-medium">Minimal &amp; premium</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}