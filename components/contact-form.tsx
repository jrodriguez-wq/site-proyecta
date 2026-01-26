"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, User, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Here you would typically send the form data to your backend/API
      // For now, we'll simulate a successful submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        interest: "",
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    } catch (error) {
      setSubmitStatus("error");
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-muted/30 scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-5 md:px-6">
        <motion.div
          className="text-center space-y-3 sm:space-y-4 mb-8 sm:mb-10 md:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight px-2">
            Get in Touch
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground text-base sm:text-lg md:text-xl px-4">
            Fill out the form below and we&apos;ll get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <Card className="shadow-2xl border-2 border-[rgb(23,46,123)]/20 bg-gradient-to-br from-white via-white to-[rgb(23,46,123)]/5">
            <CardHeader className="text-center space-y-2 sm:space-y-3 pb-4 sm:pb-5 md:pb-6 p-4 sm:p-6 md:p-8">
              <CardTitle className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black leading-tight px-4 text-[rgb(23,46,123)]">
                Send Us a Message
              </CardTitle>
              <div className="w-20 sm:w-24 h-1 sm:h-1.5 bg-gradient-to-r from-[rgb(180,22,40)] via-[rgb(180,22,40)]/80 to-[rgb(180,22,40)] rounded-full mx-auto"></div>
              <CardDescription className="text-xs sm:text-sm md:text-base lg:text-lg pt-2 text-muted-foreground px-4 leading-relaxed">
                We&apos;re here to help you find your dream investment.
              </CardDescription>
            </CardHeader>
            <CardContent className="px-4 sm:px-6 md:px-8 lg:px-10 pb-6 sm:pb-8 md:pb-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-semibold text-foreground flex items-center gap-2">
                    <User className="h-4 w-4 text-[rgb(180,22,40)]" />
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-semibold text-foreground flex items-center gap-2">
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

                {/* Phone Field */}
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-semibold text-foreground flex items-center gap-2">
                    <Phone className="h-4 w-4 text-[rgb(180,22,40)]" />
                    Phone
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

                {/* Interest Field */}
                <div className="space-y-2">
                  <Label htmlFor="interest" className="text-sm font-semibold text-foreground flex items-center gap-2">
                    <MessageSquare className="h-4 w-4 text-[rgb(180,22,40)]" />
                    What interests you?
                  </Label>
                  <Textarea
                    id="interest"
                    name="interest"
                    placeholder="Tell us what you're interested in... (e.g., Rent to Own program, specific model, investment opportunities, etc.)"
                    value={formData.interest}
                    onChange={handleChange}
                    required
                    className="w-full min-h-[120px]"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[rgb(180,22,40)] hover:bg-[rgb(144,18,32)] text-white font-bold py-6 text-base sm:text-lg shadow-lg shadow-[rgb(180,22,40)]/25 hover:shadow-xl hover:shadow-[rgb(180,22,40)]/30 transition-all duration-300"
                    size="lg"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                        Sending...
                      </span>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </div>

                {/* Success/Error Messages */}
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-50 border-2 border-green-200 rounded-lg text-green-800 text-sm font-medium text-center"
                  >
                    ✓ Thank you! We&apos;ll get back to you soon.
                  </motion.div>
                )}

                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-50 border-2 border-red-200 rounded-lg text-red-800 text-sm font-medium text-center"
                  >
                    ✗ Something went wrong. Please try again or contact us directly.
                  </motion.div>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
