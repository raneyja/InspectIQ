export const metadata = {
  title: "Privacy Policy - InspectIQ",
  description: "Privacy Policy for InspectIQ by RaneyApps",
};

export default function PrivacyPolicy() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl md:text-4xl font-semibold mb-2">Privacy Policy</h1>
      <p className="text-neutral-500 mb-12">Last updated: February 2, 2026</p>

      <div className="prose prose-invert prose-neutral max-w-none space-y-8">
        <section>
          <p className="text-neutral-300">
            InspectIQ (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is
            operated by RaneyApps. This Privacy Policy explains how we collect,
            use, disclose, and safeguard your information when you use our
            mobile application InspectIQ (the &quot;App&quot;). Please read this
            privacy policy carefully.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">What We Collect</h2>
          <p className="text-neutral-300 mb-4">
            We collect information that you provide directly to us:
          </p>
          <ul className="list-disc list-inside text-neutral-400 space-y-2">
            <li>
              <strong className="text-neutral-300">Account Information:</strong>{" "}
              Email address, name, and password when you create an account
            </li>
            <li>
              <strong className="text-neutral-300">Property Photos:</strong>{" "}
              Images you capture during home inspections
            </li>
            <li>
              <strong className="text-neutral-300">Inspection Reports:</strong>{" "}
              Notes, observations, and generated reports you create
            </li>
            <li>
              <strong className="text-neutral-300">Property Information:</strong>{" "}
              Addresses and details of inspected properties
            </li>
            <li>
              <strong className="text-neutral-300">Usage Data:</strong> How you
              interact with the App, including features used and time spent
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">How We Use Your Information</h2>
          <p className="text-neutral-300 mb-4">
            We use the information we collect to:
          </p>
          <ul className="list-disc list-inside text-neutral-400 space-y-2">
            <li>Provide, maintain, and improve the App</li>
            <li>Generate and store your inspection reports</li>
            <li>Process your photos and notes using AI to create professional reports</li>
            <li>Sync your data across devices</li>
            <li>Send you technical notices and support messages</li>
            <li>Respond to your comments and questions</li>
            <li>Analyze usage patterns to improve the App</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Data Storage</h2>
          <p className="text-neutral-300">
            Your data is stored securely using Supabase, a trusted cloud
            infrastructure provider. All data is encrypted in transit using TLS
            and at rest using AES-256 encryption. Your photos and reports are
            stored in secure cloud storage with access controls to ensure only
            you can access your data.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Third-Party Services</h2>
          <p className="text-neutral-300 mb-4">
            We use the following third-party services to provide our App:
          </p>
          <ul className="list-disc list-inside text-neutral-400 space-y-2">
            <li>
              <strong className="text-neutral-300">Supabase:</strong> For user
              authentication, database storage, and file storage. View their{" "}
              <a
                href="https://supabase.com/privacy"
                className="text-blue-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </a>
              .
            </li>
            <li>
              <strong className="text-neutral-300">OpenAI:</strong> For
              AI-powered features including report generation and photo
              analysis. When you use AI features, relevant text and images are
              processed by OpenAI. View their{" "}
              <a
                href="https://openai.com/privacy"
                className="text-blue-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </a>
              .
            </li>
            <li>
              <strong className="text-neutral-300">Apple:</strong> For App Store
              distribution and in-app purchases.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Your Rights</h2>
          <p className="text-neutral-300 mb-4">You have the right to:</p>
          <ul className="list-disc list-inside text-neutral-400 space-y-2">
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your data</li>
            <li>Export your data in a portable format</li>
            <li>Opt out of marketing communications</li>
          </ul>
          <p className="text-neutral-300 mt-4">
            To exercise these rights, contact us at{" "}
            <a
              href="mailto:raneysoftware@gmail.com"
              className="text-blue-400 hover:underline"
            >
              raneysoftware@gmail.com
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Children&apos;s Privacy</h2>
          <p className="text-neutral-300">
            InspectIQ is not intended for use by children under 13 years of age.
            We do not knowingly collect personal information from children under
            13. If you are a parent or guardian and believe your child has
            provided us with personal information, please contact us so we can
            delete such information.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">California Privacy Rights (CCPA)</h2>
          <p className="text-neutral-300">
            If you are a California resident, you have specific rights regarding
            your personal information under the California Consumer Privacy Act
            (CCPA). You have the right to request disclosure of the categories
            and specific pieces of personal information we have collected, the
            right to request deletion of your personal information, and the
            right to opt out of the sale of your personal information. We do not
            sell personal information to third parties.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">European Privacy Rights (GDPR)</h2>
          <p className="text-neutral-300">
            If you are located in the European Economic Area (EEA), you have
            certain data protection rights under the General Data Protection
            Regulation (GDPR). These include the right to access, rectify, port,
            and erase your data, as well as the right to restrict and object to
            certain processing of your data. To exercise these rights, please
            contact us at the email address provided below.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Changes to This Policy</h2>
          <p className="text-neutral-300">
            We may update this Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page
            and updating the &quot;Last updated&quot; date. You are advised to
            review this Privacy Policy periodically for any changes.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          <p className="text-neutral-300">
            If you have any questions about this Privacy Policy, please contact
            us at:{" "}
            <a
              href="mailto:raneysoftware@gmail.com"
              className="text-blue-400 hover:underline"
            >
              raneysoftware@gmail.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
