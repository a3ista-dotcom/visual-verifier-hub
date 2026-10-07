import { createFileRoute } from "@tanstack/react-router";
import { EMAIL, LegalPage } from "@/components/site";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | EZMedia Pro VIP" },
      { name: "description", content: "Privacy Policy for the EZMedia Pro VIP website and the Remote TV app, currently in development." },
      { property: "og:title", content: "Privacy Policy | EZMedia Pro VIP" },
      { property: "og:description", content: "How EZMedia Pro VIP approaches privacy for Remote TV." },
    ],
  }),
  component: () => (
    <LegalPage title="Privacy Policy" updated="Last updated: October 2026">
      <p>This Privacy Policy applies to the website ezflyeu.com and to Remote TV, an iPhone app by EZMedia Pro VIP (Slovenia, European Union) that is currently in development and not yet publicly released.</p>
      <h2>Website</h2>
      <p>This website does not use user accounts, analytics or advertising trackers. If you contact us by email, we use the information you send only to respond to your enquiry.</p>
      <h2>The Remote TV app</h2>
      <p>Remote TV has not been publicly released. Its final data practices will be described in this policy and in the App Store privacy details before release.</p>
      <h2>Your rights</h2>
      <p>Under the EU General Data Protection Regulation (GDPR) you may request access to, correction of, or deletion of personal data we hold about you.</p>
      <h2>Updates</h2>
      <p>This policy will be updated before public release if product data practices change.</p>
      <h2>Contact</h2>
      <p><a href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
    </LegalPage>
  ),
});
