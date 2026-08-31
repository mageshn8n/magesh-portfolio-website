import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import ProcessRail from "@/components/home/ProcessRail";
import DefineSection from "@/components/home/DefineSection";
import IdeateWork from "@/components/home/IdeateWork";
import DesignMorph from "@/components/home/DesignMorph";
import PrototypeInteractive from "@/components/home/PrototypeInteractive";
import TestLoop from "@/components/home/TestLoop";
import RefineShowcase from "@/components/home/RefineShowcase";
import LaunchSection from "@/components/home/LaunchSection";

export default function Home() {
  return (
    <>
      <ProcessRail />
      <Hero />
      <DefineSection />
      <IdeateWork />
      <DesignMorph />
      <PrototypeInteractive />
      <TestLoop />
      <Testimonials />
      <RefineShowcase />
      <LaunchSection />
    </>
  );
}
