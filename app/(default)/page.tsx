export const metadata = {
  title: "SplitChores - Share Tasks, Share Success",
  description: "Transform household chores into a collaborative game. Assign tasks, track progress, and celebrate achievements together with your family or roommates.",
};

import Hero from "@/components/hero-home";
import BusinessCategories from "@/components/business-categories";
import AppScreenPreviews from "@/components/app-screen-previews";
import MobileAppShowcase from "@/components/mobile-app-showcase";
import FeaturesPlanet from "@/components/features-planet";
import LargeTestimonial from "@/components/large-testimonial";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <BusinessCategories />
      <AppScreenPreviews />
      <MobileAppShowcase />
      <FeaturesPlanet />
      <LargeTestimonial />
      <Cta />
    </>
  );
}
