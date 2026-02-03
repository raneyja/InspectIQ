export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm text-neutral-500 mb-4">
              AI-Powered Documentation
            </p>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-balance">
              Professional Inspection Reports{" "}
              <span className="text-neutral-500">in Minutes, Not Hours</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-neutral-400">
              InspectIQ uses AI to help home inspectors document properties faster.
              Capture photos, dictate notes, and generate professional reports
              automatically.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://apps.apple.com/app/inspectiq"
                className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-neutral-200 transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                Download on the App Store
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/screenshots/onboarding-reports.png"
              alt="InspectIQ App Screenshot"
              className="w-96 md:w-[480px] h-auto"
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-white/10 py-12">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-3xl md:text-4xl font-semibold">5x</p>
            <p className="text-sm text-neutral-500 mt-1">Faster Reports</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-semibold">∞</p>
            <p className="text-sm text-neutral-500 mt-1">Photos Supported</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-semibold">AI</p>
            <p className="text-sm text-neutral-500 mt-1">Powered Insights</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-semibold">🔒</p>
            <p className="text-sm text-neutral-500 mt-1">Secure Storage</p>
          </div>
        </div>
      </section>

      {/* App Screenshots */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-center">
          See InspectIQ in Action
        </h2>
        <p className="text-neutral-400 mb-12 max-w-2xl mx-auto text-center">
          From photo capture to final report, InspectIQ streamlines your entire workflow.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="relative mb-4 rounded-2xl overflow-hidden bg-white/5 border border-white/10 aspect-[9/16]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/screenshots/onboarding-capture.png"
                alt="Photo Capture Screen"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-semibold mb-1">Capture & Document</h3>
            <p className="text-sm text-neutral-400">Photos organized by room</p>
          </div>

          <div className="text-center">
            <div className="relative mb-4 rounded-2xl overflow-hidden bg-white/5 border border-white/10 aspect-[9/16]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/screenshots/onboarding-voice.png"
                alt="Voice Notes Screen"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-semibold mb-1">Voice Notes</h3>
            <p className="text-sm text-neutral-400">Speak, don&apos;t type</p>
          </div>

          <div className="text-center">
            <div className="relative mb-4 rounded-2xl overflow-hidden bg-white/5 border border-white/10 aspect-[9/16]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/screenshots/onboarding-ai.png"
                alt="AI Analysis Screen"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-semibold mb-1">AI Analysis</h3>
            <p className="text-sm text-neutral-400">Smart issue detection</p>
          </div>

          <div className="text-center">
            <div className="relative mb-4 rounded-2xl overflow-hidden bg-white/5 border border-white/10 aspect-[9/16]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/screenshots/onboarding-reports.png"
                alt="Reports Screen"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-semibold mb-1">Professional Reports</h3>
            <p className="text-sm text-neutral-400">One-tap PDF export</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Everything you need for professional inspections
        </h2>
        <p className="text-neutral-400 mb-12 max-w-2xl">
          Built by inspectors, for inspectors. InspectIQ streamlines every step
          of your documentation workflow.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center mb-4">
              <span className="text-xl">📸</span>
            </div>
            <h3 className="font-semibold mb-2">Smart Photo Capture</h3>
            <p className="text-sm text-neutral-400">
              Take photos and let AI automatically categorize them by room and
              defect type.
            </p>
          </div>

          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <div className="w-10 h-10 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4">
              <span className="text-xl">🎤</span>
            </div>
            <h3 className="font-semibold mb-2">Voice-to-Text Notes</h3>
            <p className="text-sm text-neutral-400">
              Dictate your observations hands-free. AI transcribes and formats
              your notes professionally.
            </p>
          </div>

          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <div className="w-10 h-10 bg-green-500/20 rounded-xl flex items-center justify-center mb-4">
              <span className="text-xl">📄</span>
            </div>
            <h3 className="font-semibold mb-2">Auto-Generated Reports</h3>
            <p className="text-sm text-neutral-400">
              Transform your notes and photos into polished, client-ready PDF
              reports instantly.
            </p>
          </div>

          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <div className="w-10 h-10 bg-orange-500/20 rounded-xl flex items-center justify-center mb-4">
              <span className="text-xl">🏠</span>
            </div>
            <h3 className="font-semibold mb-2">Property Templates</h3>
            <p className="text-sm text-neutral-400">
              Pre-built templates for different property types ensure you never
              miss a checklist item.
            </p>
          </div>

          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <div className="w-10 h-10 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-4">
              <span className="text-xl">☁️</span>
            </div>
            <h3 className="font-semibold mb-2">Cloud Sync</h3>
            <p className="text-sm text-neutral-400">
              All your inspections are securely synced and backed up. Access
              them from any device.
            </p>
          </div>

          <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
            <div className="w-10 h-10 bg-red-500/20 rounded-xl flex items-center justify-center mb-4">
              <span className="text-xl">⚡</span>
            </div>
            <h3 className="font-semibold mb-2">Offline Mode</h3>
            <p className="text-sm text-neutral-400">
              Work without internet. Your data syncs automatically when you're
              back online.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 py-24 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Ready to inspect smarter?
        </h2>
        <p className="text-neutral-400 mb-8">
          Download InspectIQ and transform your inspection workflow today.
        </p>
        <a
          href="https://apps.apple.com/app/inspectiq"
          className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-neutral-200 transition-colors"
        >
          Download on the App Store
        </a>
      </section>
    </div>
  );
}
