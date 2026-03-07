"use client";

import { useState, useRef } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  MapPin,
  Home,
  User,
  Phone,
  Mail,
  Languages,
  ImagePlus,
  FileText,
  Shield,
  CheckSquare,
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/animated-section";

const WARRANTY_CATEGORIES = [
  { value: "structural", label: "Structural" },
  { value: "plumbing", label: "Plumbing" },
  { value: "electrical", label: "Electrical" },
  { value: "hvac", label: "HVAC" },
  { value: "appliances", label: "Appliances" },
  { value: "roof", label: "Roof" },
  { value: "windows_doors", label: "Windows & Doors" },
  { value: "flooring", label: "Flooring" },
  { value: "paint_finishes", label: "Paint & Finishes" },
  { value: "other", label: "Other" },
] as const;

const initialForm = {
  city: "",
  propertyAddress: "",
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  languagePreference: "English",
  problemDescription: "",
  category: [] as string[],
};

export default function WarrantyPage() {
  const [formData, setFormData] = useState(initialForm);
  const [photoFile, setPhotoFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormData((prev) => {
      const next = prev.category.includes(value)
        ? prev.category.filter((c) => c !== value)
        : [...prev.category, value];
      return { ...prev, category: next };
    });
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setPhotoFile(file ?? null);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const form = new FormData();
      form.append("city", formData.city);
      form.append("propertyAddress", formData.propertyAddress);
      form.append("firstName", formData.firstName);
      form.append("lastName", formData.lastName);
      form.append("phone", formData.phone);
      form.append("email", formData.email);
      form.append("languagePreference", formData.languagePreference);
      form.append("problemDescription", formData.problemDescription);
      formData.category.forEach((c) => form.append("category", c));
      if (photoFile) form.append("problemPhoto", photoFile);

      const res = await fetch("/api/warranty", {
        method: "POST",
        body: form,
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setSubmitStatus("error");
        setTimeout(() => setSubmitStatus("idle"), 5000);
        return;
      }

      setSubmitStatus("success");
      setFormData(initialForm);
      setPhotoFile(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <WhatsAppFloat />

      {/* Hero with visible image */}
      <section className="relative w-full h-[320px] sm:h-[400px] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/hero/aurora.webp"
            alt="Warranty - Proyecta Business Group - We stand behind our homes"
            fill
            className="object-cover"
            priority
            sizes="100vw"
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/55 via-black/45 to-black/55 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent z-10" />
        </div>
        <div className="relative z-20 h-full flex items-end pb-8 sm:pb-10">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              className="flex items-center gap-3 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Shield className="h-10 w-10 sm:h-12 sm:w-12 text-[rgb(180,22,40)] shrink-0" />
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
                  Home Warranty Claim
                </h1>
                <p className="text-sm sm:text-base text-white/90 mt-1">
                  Submit your warranty claim and we&apos;ll get back to you soon.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Form + side image section */}
      <AnimatedSection delay={0.1}>
        <section className="py-12 sm:py-16 md:py-20 bg-muted/20">
          <div className="container mx-auto px-4 sm:px-5 md:px-6">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Visible image block - desktop */}
              <div className="hidden lg:block lg:col-span-4 order-2 lg:order-1 sticky top-24">
                <div className="relative rounded-2xl overflow-hidden border-2 border-[rgb(23,46,123)]/15 shadow-xl aspect-[4/5] max-h-[520px]">
                  <Image
                    src="/recursos/familia-casa.webp"
                    alt="Quality homes - Proyecta warranty support"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 400px"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="text-sm font-semibold text-white/90">We stand behind our homes.</p>
                    <p className="text-xs mt-1 text-white/80">Report any issue and we&apos;ll help you resolve it.</p>
                  </div>
                </div>
              </div>
              {/* Form */}
              <div className="lg:col-span-8 order-1 lg:order-2">
              <Card className="shadow-2xl border-2 border-[rgb(23,46,123)]/20 bg-gradient-to-br from-white via-white to-[rgb(23,46,123)]/5">
                <CardHeader className="text-center space-y-2 sm:space-y-3 pb-4 p-4 sm:p-6 md:p-8">
                  <CardTitle className="text-xl sm:text-2xl md:text-3xl font-black leading-tight text-[rgb(23,46,123)]">
                    Warranty Claim Form
                  </CardTitle>
                  <div className="w-20 sm:w-24 h-1 sm:h-1.5 bg-gradient-to-r from-[rgb(180,22,40)] via-[rgb(180,22,40)]/80 to-[rgb(180,22,40)] rounded-full mx-auto" />
                  <CardDescription className="text-sm md:text-base text-muted-foreground">
                    Fill out the form below. Attach a photo of the issue when possible.
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-4 sm:px-6 md:px-8 lg:px-10 pb-8 md:pb-10">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="city" className="text-sm font-semibold flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-[rgb(180,22,40)]" />
                          City
                        </Label>
                        <Input
                          id="city"
                          name="city"
                          type="text"
                          placeholder="e.g. LaBelle"
                          value={formData.city}
                          onChange={handleChange}
                          required
                          className="w-full"
                        />
                      </div>
                      <div className="space-y-2 sm:col-span-2">
                        <Label htmlFor="propertyAddress" className="text-sm font-semibold flex items-center gap-2">
                          <Home className="h-4 w-4 text-[rgb(180,22,40)]" />
                          Property address
                        </Label>
                        <Input
                          id="propertyAddress"
                          name="propertyAddress"
                          type="text"
                          placeholder="Full property address"
                          value={formData.propertyAddress}
                          onChange={handleChange}
                          required
                          className="w-full"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="firstName" className="text-sm font-semibold flex items-center gap-2">
                          <User className="h-4 w-4 text-[rgb(180,22,40)]" />
                          First name
                        </Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          type="text"
                          placeholder="Your first name"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          className="w-full"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName" className="text-sm font-semibold flex items-center gap-2">
                          <User className="h-4 w-4 text-[rgb(180,22,40)]" />
                          Last name
                        </Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          type="text"
                          placeholder="Your last name"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                          className="w-full"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-sm font-semibold flex items-center gap-2">
                          <Phone className="h-4 w-4 text-[rgb(180,22,40)]" />
                          Phone number
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="(123) 456-7890"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-semibold flex items-center gap-2">
                          <Mail className="h-4 w-4 text-[rgb(180,22,40)]" />
                          Email
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="your.email@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="languagePreference" className="text-sm font-semibold flex items-center gap-2">
                        <Languages className="h-4 w-4 text-[rgb(180,22,40)]" />
                        Language preference
                      </Label>
                      <select
                        id="languagePreference"
                        name="languagePreference"
                        value={formData.languagePreference}
                        onChange={handleChange}
                        required
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        aria-label="Language preference"
                      >
                        <option value="English">English</option>
                        <option value="Spanish">Spanish</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="category" className="text-sm font-semibold flex items-center gap-2">
                        <CheckSquare className="h-4 w-4 text-[rgb(180,22,40)]" />
                        Category (select all that apply)
                      </Label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 bg-muted/40 rounded-lg border border-border">
                        {WARRANTY_CATEGORIES.map((cat) => (
                          <label
                            key={cat.value}
                            className="flex items-center gap-2 cursor-pointer text-sm font-medium"
                          >
                            <input
                              type="checkbox"
                              name="category"
                              value={cat.value}
                              checked={formData.category.includes(cat.value)}
                              onChange={handleCategoryChange}
                              className="h-4 w-4 rounded border-input text-[rgb(180,22,40)] focus:ring-[rgb(180,22,40)]"
                              aria-label={cat.label}
                            />
                            {cat.label}
                          </label>
                        ))}
                      </div>
                      {formData.category.length === 0 && (
                        <p className="text-xs text-muted-foreground">Select at least one category.</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="problemPhoto" className="text-sm font-semibold flex items-center gap-2">
                        <ImagePlus className="h-4 w-4 text-[rgb(180,22,40)]" />
                        Attach a photo of the problem
                      </Label>
                      <div className="flex h-12 w-full min-w-0 items-center rounded-lg border-2 border-gray-300 bg-white px-0 py-0 text-sm ring-offset-background focus-within:ring-2 focus-within:ring-[rgb(23,46,123)] focus-within:border-[rgb(23,46,123)] transition-colors">
                        <label
                          htmlFor="problemPhoto"
                          className="flex h-full shrink-0 cursor-pointer items-center justify-center rounded-l-md border-r-2 border-gray-300 bg-[rgb(23,46,123)]/10 px-4 font-medium text-[rgb(23,46,123)] hover:bg-[rgb(23,46,123)]/15"
                        >
                          Choose file
                        </label>
                        <input
                          ref={fileInputRef}
                          id="problemPhoto"
                          name="problemPhoto"
                          type="file"
                          accept="image/jpeg,image/jpg,image/png,image/webp"
                          onChange={handlePhotoChange}
                          className="sr-only"
                          aria-label="Upload photo of the problem"
                        />
                        <span className="truncate px-4 text-gray-500">
                          {photoFile ? photoFile.name : "No file chosen"}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground">JPG, PNG or WebP. Max 10MB. Optional.</p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="problemDescription" className="text-sm font-semibold flex items-center gap-2">
                        <FileText className="h-4 w-4 text-[rgb(180,22,40)]" />
                        Problem description
                      </Label>
                      <Textarea
                        id="problemDescription"
                        name="problemDescription"
                        placeholder="Describe the issue in detail..."
                        value={formData.problemDescription}
                        onChange={handleChange}
                        required
                        className="w-full min-h-[140px]"
                      />
                    </div>

                    {submitStatus === "success" && (
                      <div className="p-4 bg-green-50 border-2 border-green-200 rounded-lg text-green-800 text-sm font-medium text-center">
                        ✓ Your warranty claim was submitted. We&apos;ll contact you soon.
                      </div>
                    )}
                    {submitStatus === "error" && (
                      <div className="p-4 bg-red-50 border-2 border-red-200 rounded-lg text-red-800 text-sm font-medium text-center">
                        ✗ Something went wrong. Please try again or contact us directly.
                      </div>
                    )}

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[rgb(180,22,40)] hover:bg-[rgb(144,18,32)] text-white font-bold py-6 text-base sm:text-lg shadow-lg shadow-[rgb(180,22,40)]/25"
                      size="lg"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                          <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          Submitting...
                        </span>
                      ) : (
                        "Submit warranty claim"
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <Footer />
    </div>
  );
}
