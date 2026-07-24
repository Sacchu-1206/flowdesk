import { Helmet } from "react-helmet-async";

import Hero from "../components/Hero";
import Features from "../components/Features";
import Stats from "../components/Stats";
import PricingSection from "../components/PricingSection";
import CTA from "../components/CTA";

function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "FlowDesk",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description:
      "FlowDesk is a modern SaaS platform for project management, collaboration, and productivity.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  return (
    <>
      <Helmet>
        <title>FlowDesk | Project Management Software</title>

        <meta
          name="description"
          content="Manage projects, collaborate with your team, and increase productivity using FlowDesk."
        />

        <meta
          name="keywords"
          content="Project Management, SaaS, Team Collaboration, FlowDesk"
        />

        <meta property="og:title" content="FlowDesk | Project Management Software" />

        <meta
          property="og:description"
          content="Modern SaaS platform for project management, collaboration, and productivity."
        />

        <meta property="og:type" content="website" />

        <meta
          property="og:url"
          content="https://flowdesk-plum.vercel.app"
        />

        <meta
          property="og:image"
          content="https://flowdesk-plum.vercel.app/dashboard.png"
        />

        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <Hero />
      <Features />
      <Stats />
      <PricingSection />
      <CTA />
    </>
  );
}

export default Home;