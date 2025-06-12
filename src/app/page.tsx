'use client'
import Hero from "@/shared/components/landing-page/hero";
import { ContactForm } from "../shared/components/landing-page/contact-form";
import About from "@/shared/components/landing-page/about";
import BusinessModel from "@/shared/components/landing-page/business-model";
import Attributes from "@/shared/components/landing-page/attributes";
import { Products } from "@/shared/components/landing-page/products";

export default function Home() {
  return (
    <div>
      <Hero />
      <About /> 
      <BusinessModel />
      <Attributes />  

      {/* Products */}
      <Products />

      {/* Contact Form */}
      <div className="container mx-auto px-4 mb-8 py-16 sm:px-6 lg:px-8 flex-1">
        <ContactForm />
      </div>
    </div>
  );
}
