import { createFileRoute } from "@tanstack/react-router";
import { EMAIL, LegalPage } from "@/components/site";

export const Route = createFileRoute("/support")({
  head: () => ({
    meta: [
      { title: "Support | Remote TV by EZMedia Pro VIP" },
      { name: "description", content: "Get help with Remote TV for iPhone. Contact EZMedia Pro VIP support at info@ezflyeu.com." },
      { property: "og:title", content: "Support | Remote TV by EZMedia Pro VIP" },
      { property: "og:description", content: "Get help with Remote TV for iPhone from EZMedia Pro VIP." },
    ],
  }),
  component: () => (
    <LegalPage title="Remote TV Support">
      <p>For product questions, support or business enquiries, email us and we’ll get back to you as soon as possible.</p>
      <a href={`mailto:${EMAIL}`} className="inline-block font-display text-2xl font-semibold">{EMAIL}</a>
      <p className="glass inline-block rounded-full px-4 py-1.5 text-sm text-foreground">Product currently in development.</p>
    </LegalPage>
  ),
});
