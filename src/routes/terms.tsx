import { createFileRoute } from "@tanstack/react-router";
import { EMAIL, LegalPage } from "@/components/site";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Use | EZMedia Pro VIP" },
      { name: "description", content: "Terms of Use for the EZMedia Pro VIP website and the pre-release Remote TV app." },
      { property: "og:title", content: "Terms of Use | EZMedia Pro VIP" },
      { property: "og:description", content: "Terms of Use for ezflyeu.com and Remote TV." },
    ],
  }),
  component: () => (
    <LegalPage title="Terms of Use" updated="Last updated: October 2026">
      <p>These terms govern your use of ezflyeu.com, operated by EZMedia Pro VIP, Slovenia, European Union.</p>
      <h2>Pre-release product</h2>
      <p>Remote TV is in active development. Features, design and availability described on this website may change and are provided for information only. Features marked “In development” or “Coming soon” are not yet available.</p>
      <h2>Use of this website</h2>
      <p>You may use this website for lawful, personal and informational purposes. Content on this site is provided “as is” without warranties of any kind.</p>
      <h2>Intellectual property</h2>
      <p>All content, names and designs on this website belong to EZMedia Pro VIP unless otherwise stated. Other trademarks belong to their respective owners.</p>
      <h2>App terms</h2>
      <p>Separate terms for the Remote TV app will be provided upon release.</p>
      <h2>Governing law</h2>
      <p>These terms are governed by the laws of the Republic of Slovenia and applicable EU law.</p>
      <h2>Contact</h2>
      <p><a href={`mailto:${EMAIL}`}>{EMAIL}</a></p>
    </LegalPage>
  ),
});
