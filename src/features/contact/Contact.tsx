import { useRef, useState } from "react";
import { motion } from "motion/react";
import emailjs from "@emailjs/browser";
import { Section, SectionHeading, Button, Input, Textarea } from "@shared/ui";
import { FadeIn } from "@shared/ui/motion";
import { ShinyText } from "@shared/ui/react-bits";
import { MapPin, Mail, Send, CheckCircle, AlertCircle } from "lucide-react";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

type FormStatus = "idle" | "sending" | "success" | "error";

const formItemVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
  },
};

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current || status === "sending") return;

    setStatus("sending");

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      formRef.current.reset();
      setTimeout(() => setStatus("idle"), 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <Section id="contact">
      <div className="grid gap-16 md:grid-cols-2">
        {/* Left column */}
        <FadeIn direction="left" blur delay={0}>
          <div>
            <SectionHeading
              label="Contact"
              title="Let's work together"
              subtitle="Have a project in mind or want to collaborate? I'd love to hear from you. Drop me a message and I'll get back to you within 24 hours."
            />
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm text-muted-400">
                <MapPin size={16} className="text-accent-400" />
                <span>Remote — available worldwide</span>
              </div>

              {/* Direct email CTA */}
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-500/10">
                  <Mail size={18} className="text-accent-400" />
                </div>
                <div>
                  <p className="text-xs text-muted-400">Write me directly</p>
                  <a
                    href="mailto:estebansoft2003@gmail.com"
                    className="text-sm font-medium text-white transition-colors duration-300 hover:text-accent-400"
                  >
                    <ShinyText
                      text="estebansoft2003@gmail.com"
                      speed={4}
                      className="text-sm font-medium"
                      color="#ffffff"
                      shineColor="#34d399"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Right column — form with staggered inputs */}
        <FadeIn direction="right" blur delay={0.15}>
          <motion.div
            className="rounded-2xl border border-white/6 bg-surface-800 p-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
            }}
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-5"
            >
              <motion.div variants={formItemVariants} className="grid gap-5 sm:grid-cols-2">
                <Input
                  id="name"
                  name="from_name"
                  label="Name"
                  placeholder="Your name"
                  required
                />
                <Input
                  id="email"
                  name="from_email"
                  label="Email"
                  type="email"
                  placeholder="you@example.com"
                  required
                />
              </motion.div>
              <motion.div variants={formItemVariants}>
                <Input
                  id="subject"
                  name="subject"
                  label="Subject"
                  placeholder="What's this about?"
                  required
                />
              </motion.div>
              <motion.div variants={formItemVariants}>
                <Textarea
                  id="message"
                  name="message"
                  label="Message"
                  placeholder="Tell me about your project..."
                  required
                />
              </motion.div>
              <motion.div variants={formItemVariants}>
                <Button
                  type="submit"
                  className="w-full"
                  disabled={status === "sending"}
                >
                  {status === "sending" ? (
                    <>
                      <span className="mr-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-surface-950 border-t-transparent" />
                      Sending...
                    </>
                  ) : status === "success" ? (
                    <>
                      <CheckCircle size={16} className="mr-2" />
                      Message Sent!
                    </>
                  ) : status === "error" ? (
                    <>
                      <AlertCircle size={16} className="mr-2" />
                      Failed — Try Again
                    </>
                  ) : (
                    <>
                      <Send size={16} className="mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </FadeIn>
      </div>
    </Section>
  );
}
