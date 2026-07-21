"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUp,
  BadgePercent,
  Boxes,
  CircleCheckBig,
  Headphones,
  Handshake,
  HeartHandshake,
  Layers3,
  Menu,
  Phone,
  ShieldCheck,
  Sparkles,
  Truck,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { businessInfo, faqItems, highlights, products, servedFor, testimonials } from "@/data/products";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Products", href: "#products" },
  { label: "Why Choose Us", href: "#why-us" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Sparkles,
  BadgePercent,
  Boxes,
  ShieldCheck,
  Layers3,
  Truck,
  Headphones,
  Handshake,
};

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <div className="max-w-2xl space-y-3">
      <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#D62828]">{eyebrow}</p>
      <h2 className="text-3xl font-semibold text-[#1F2937] sm:text-4xl">{title}</h2>
      <p className="text-lg leading-8 text-slate-600">{description}</p>
    </div>
  );
}

export default function SiteShell() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 500);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#FFFDF8] text-[#1F2937]">
      <header id="home" className="sticky top-0 z-50 border-b border-slate-200/80 bg-[#FFFDF8]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="#home" className="flex items-center gap-3">
            <Image src="/images/logo.svg" alt="Bharat Disposal logo" width={44} height={44} className="rounded-2xl shadow-sm" />
            <div>
              <p className="text-lg font-semibold">Bharat Disposal</p>
              <p className="text-sm text-slate-500">Wholesale & Retail</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 text-sm font-medium lg:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-[#D62828]">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="rounded-full border border-slate-200 bg-white/80 p-2 text-slate-700 shadow-sm transition lg:hidden"
              aria-label="Open menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="border-t border-slate-200 bg-white/95 px-4 py-4 lg:hidden">
            <div className="flex flex-col gap-3 text-sm font-medium">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setIsMenuOpen(false)} className="rounded-xl px-2 py-2 transition hover:bg-slate-100 hover:text-[#D62828]">
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>

      <main>
        <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(214,40,40,0.12),_transparent_38%),radial-gradient(circle_at_bottom_right,_rgba(249,115,22,0.16),_transparent_45%)]" />
          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#F4B400]/50 bg-white/90 px-4 py-2 text-sm font-medium shadow-sm">
                <CircleCheckBig className="h-4 w-4 text-[#D62828]" />
                Premium Disposable Supplier in Jaunpur
              </div>
              <div className="space-y-4">
                <h1 className="max-w-2xl text-4xl font-semibold leading-tight text-[#1F2937] sm:text-5xl lg:text-6xl">
                  Bharat Disposal
                </h1>
                <p className="text-xl font-medium text-[#D62828]">{businessInfo.tagline}</p>
                <p className="max-w-xl text-lg leading-8 text-slate-600">
                  A trusted wholesale and retail supplier of premium disposable items for restaurants, hotels, caterers, cafes, offices, and households.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a href="tel:+919616919294" className="inline-flex items-center gap-2 rounded-full bg-[#D62828] px-6 py-3 font-semibold text-white shadow-lg shadow-red-100 transition hover:-translate-y-1">
                  <Phone className="h-4 w-4" /> Call Now
                </a>
                <a href="https://wa.me/919616919294" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[#F97316] bg-white px-6 py-3 font-semibold text-[#F97316] shadow-sm transition hover:-translate-y-1">
                  <HeartHandshake className="h-4 w-4" /> WhatsApp
                </a>
                <a href="#products" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 font-semibold text-slate-700 shadow-sm transition hover:-translate-y-1">
                  View Products
                </a>
              </div>

              <div className="flex flex-wrap gap-3">
                {[
                  "Premium Quality",
                  "Wholesale Prices",
                  "Retail Available",
                ].map((badge) => (
                  <div key={badge} className="rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-medium text-slate-600 shadow-sm">
                    ✓ {badge}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="relative mx-auto w-full max-w-xl">
              <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-[#D62828]/20 via-transparent to-[#F4B400]/20 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/75 p-4 shadow-[0_24px_80px_rgba(31,41,55,0.12)] backdrop-blur-xl">
                <img src="https://tiimg.tistatic.com/fp/1/006/911/disposable-printed-paper-cups-584.jpg" alt="Disposable products displayed elegantly" className="h-[420px] w-full rounded-[1.5rem] object-cover" />
                <div className="absolute left-8 top-8 rounded-2xl border border-white/70 bg-white/85 px-4 py-3 shadow-lg backdrop-blur">
                  <p className="text-sm font-semibold text-[#D62828]">Trusted Supplier</p>
                  <p className="text-lg font-semibold text-slate-800">Bulk & Retail Ready</p>
                </div>
                <div className="absolute bottom-8 right-8 rounded-2xl border border-white/70 bg-[#1F2937]/90 px-4 py-3 text-white shadow-xl">
                  <p className="text-sm">Open Daily</p>
                  <p className="text-lg font-semibold">9:00 AM - 9:00 PM</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="about" className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm lg:grid-cols-[0.9fr_1.1fr] lg:p-12">
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#D62828]">About Bharat Disposal</p>
              <h2 className="text-3xl font-semibold text-[#1F2937] sm:text-4xl">A dependable source for premium disposable essentials.</h2>
              <p className="text-lg leading-8 text-slate-600">
                Bharat Disposal is a trusted supplier of premium-quality disposable products in Jaunpur. We provide high-quality disposable items for restaurants, hotels, caterers, tea stalls, cafes, sweet shops, event organizers, offices, and households. Our focus is quality, affordability, and customer satisfaction.
              </p>
              <div className="flex items-center gap-4 rounded-2xl border border-[#F4B400]/30 bg-[#FFF8E8] p-4 shadow-sm">
                <Image
                  src="/images/owner.jpeg"
                  alt={`${businessInfo.owner}, owner of Bharat Disposal`}
                  width={128}
                  height={128}
                  className="h-28 w-28 shrink-0 rounded-2xl object-cover object-center shadow-sm sm:h-32 sm:w-32"
                />
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#D62828]">Owner</p>
                  <p className="mt-1 text-lg font-semibold text-[#1F2937]">{businessInfo.owner}</p>
                  <p className="mt-1 text-sm text-slate-600">Dedicated to quality products and dependable local service.</p>
                </div>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["Wide Range", "All essentials for events, food service, and daily operations."],
                ["Premium Finish", "Products crafted to look polished and perform reliably."],
                ["Local Trust", "A business built around honest service and long-term relationships."],
                ["Flexible Orders", "Supporting both retail buyers and large wholesale requirements."],
              ].map(([title, description]) => (
                <div key={title} className="rounded-2xl border border-slate-200 bg-[#FFFDF8] p-5 shadow-sm">
                  <h3 className="text-lg font-semibold text-[#1F2937]">{title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="products" className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading eyebrow="Our Products" title="An extensive collection for every food service need" description="From premium paperware to sturdy packaging, our product lineup supports hospitality, retail, and events with style and practicality." />
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {products.map((product, index) => (
                <motion.article key={product.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.35, delay: index * 0.02 }} className="group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl">
                  <div className="relative h-48 w-full bg-slate-100">
                    <img src={product.image} alt={product.title} className="h-48 w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" onError={(e) => { e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect fill='%23e5e7eb' width='400' height='300'/%3E%3Ctext x='50%' y='50%' font-size='16' fill='%236b7280' text-anchor='middle' dy='.3em'%3EProduct Image%3C/text%3E%3Ctext x='50%' y='60%' font-size='12' fill='%239ca3af' text-anchor='middle'%3EAdd to /public/images/%3C/text%3E%3C/svg%3E"; }} />
                  </div>
                  <div className="space-y-2 p-6">
                    <h3 className="text-xl font-semibold text-[#1F2937]">{product.title}</h3>
                    <p className="text-sm leading-7 text-slate-600">{product.description}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="why-us" className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[2rem] border border-[#F4B400]/30 bg-[#FFF8E8] p-8 text-[#1F2937] shadow-[0_24px_80px_rgba(31,41,55,0.08)] lg:p-12">
            <SectionHeading eyebrow="Why Choose Us" title="Why businesses across Jaunpur trust Bharat Disposal" description="We combine premium materials, trustworthy service, and competitive pricing to support your every order." />
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {highlights.map((item, index) => {
                const Icon = iconMap[item.icon] ?? Sparkles;
                return (
                  <motion.div key={item.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.3, delay: index * 0.04 }} className="rounded-[1.5rem] border border-[#F4B400]/25 bg-white/90 p-6 shadow-sm">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#F4B400] to-[#F97316] text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">{item.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm lg:p-12">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <SectionHeading eyebrow="Who We Serve" title="Serving businesses that value quality and consistency" description="From small tea shops to large event organizers, we keep every customer well supplied." />
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-[#D62828] px-5 py-3 font-semibold text-white shadow-lg shadow-red-100">Start Your Order</a>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {servedFor.map((item) => (
                <div key={item} className="rounded-2xl border border-slate-200 bg-[#FFFDF8] px-4 py-4 text-center font-medium text-slate-700">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading eyebrow="Testimonials" title="Happy clients across the hospitality and retail sectors" description="Our customers choose us for consistent quality, dependable service, and a product range that fits every scale." />
            <div className="mt-10 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <motion.article key={testimonial.name} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.3, delay: index * 0.04 }} className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex items-center gap-1 text-[#F4B400]">
                    {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
                      <span key={`${testimonial.name}-${starIndex}`}>★</span>
                    ))}
                  </div>
                  <p className="mt-4 text-base leading-8 text-slate-600">“{testimonial.message}”</p>
                  <div className="mt-6">
                    <p className="font-semibold text-[#1F2937]">{testimonial.name}</p>
                    <p className="text-sm text-slate-500">{testimonial.role}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#D62828]">FAQ</p>
              <h2 className="mt-3 text-3xl font-semibold text-[#1F2937]">Frequently asked questions</h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">Need quick answers before you place your first order? Here are the most common questions from new and returning customers.</p>
            </div>
            <div className="space-y-4">
              {faqItems.map((item) => (
                <details key={item.question} className="group rounded-[1.25rem] border border-slate-200 bg-white p-5 shadow-sm">
                  <summary className="cursor-pointer list-none font-semibold text-[#1F2937]">{item.question}</summary>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="px-4 pb-20 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 rounded-[2rem] border border-slate-200 bg-[#FFFDF8] p-8 shadow-sm lg:grid-cols-[0.95fr_1.05fr] lg:p-12">
            <div className="space-y-6">
              <SectionHeading eyebrow="Contact Us" title="Call, message, or visit our store in Jaunpur" description="Whether you are restocking your shop or planning a large event, our team is ready to help." />
              <div className="space-y-3 rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-lg font-semibold text-[#1F2937]">{businessInfo.name}</p>
                <p className="text-slate-600">Owner: {businessInfo.owner}</p>
                <p className="text-slate-600">{businessInfo.address}</p>
                <div className="space-y-2 pt-2">
                  {businessInfo.phoneNumbers.map((phone) => (
                    <a key={phone} href={`tel:${phone.replace(/\s+/g, "")}`} className="block font-medium text-[#D62828]">{phone}</a>
                  ))}
                </div>
                <p className="pt-2 text-sm text-slate-600">Working Hours: {businessInfo.hours}</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a href="tel:+919616919294" className="rounded-full bg-[#D62828] px-5 py-3 font-semibold text-white">Call Now</a>
                <a href="https://wa.me/919616919294" target="_blank" rel="noreferrer" className="rounded-full border border-[#F97316] px-5 py-3 font-semibold text-[#F97316]">WhatsApp</a>
                <a href={businessInfo.mapUrl} target="_blank" rel="noreferrer" className="rounded-full border border-slate-300 px-5 py-3 font-semibold text-slate-700">Get Directions</a>
              </div>
            </div>
            <div className="overflow-hidden rounded-[1.5rem] border border-slate-200 shadow-sm">
              <iframe src="https://www.google.com/maps?q=Bharat%20Disposal%20Jaunpur%20Uttar%20Pradesh&z=14&output=embed" title="Bharat Disposal location" className="h-[420px] w-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white/80 px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.2fr_0.8fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <Image src="/images/logo.svg" alt="Bharat Disposal logo" width={44} height={44} className="rounded-2xl shadow-sm" />
              <div>
                <p className="font-semibold text-[#1F2937]">Bharat Disposal</p>
                <p className="text-sm text-slate-500">Complete Disposable Solutions</p>
              </div>
            </div>
            <p className="mt-4 max-w-md text-sm leading-7 text-slate-600">A premium supplier for disposable cups, plates, containers, packaging, and household essentials in Jaunpur.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[#1F2937]">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm text-slate-600">
              {navItems.slice(0, 5).map((item) => (
                <li key={item.href}><a href={item.href} className="transition hover:text-[#D62828]">{item.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[#1F2937]">Contact</h3>
            <p className="mt-4 text-sm leading-7 text-slate-600">{businessInfo.address}</p>
            <p className="mt-2 text-sm text-slate-600">{businessInfo.phoneNumbers.join(" • ")}</p>
            <div className="mt-4 flex gap-3">
              <a href="tel:+919616919294" className="rounded-full bg-[#D62828] p-2 text-white"><Phone className="h-4 w-4" /></a>
              <a href="https://wa.me/919616919294" target="_blank" rel="noreferrer" className="rounded-full bg-[#F97316] p-2 text-white"><HeartHandshake className="h-4 w-4" /></a>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-8 flex max-w-7xl flex-col gap-2 border-t border-slate-200 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Bharat Disposal. All rights reserved.</p>
          <p>Designed for premium wholesale and retail service.</p>
        </div>
      </footer>

      <a href="https://wa.me/919616919294" target="_blank" rel="noreferrer" className="fixed bottom-24 right-4 z-40 rounded-full bg-[#25D366] p-4 text-white shadow-xl shadow-green-200 transition hover:-translate-y-1 sm:right-6">
        <HeartHandshake className="h-6 w-6" />
      </a>
      <a href="tel:+919616919294" className="fixed bottom-6 right-4 z-40 rounded-full bg-[#D62828] p-4 text-white shadow-xl shadow-red-200 transition hover:-translate-y-1 sm:right-6">
        <Phone className="h-6 w-6" />
      </a>
      <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className={`fixed bottom-6 left-4 z-40 rounded-full bg-[#1F2937] p-3 text-white shadow-lg transition ${isVisible ? "opacity-100" : "pointer-events-none opacity-0"}`}>
        <ArrowUp className="h-5 w-5" />
      </button>
    </div>
  );
}
