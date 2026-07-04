import { useState } from "react";
import { motion } from "framer-motion";
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { useTranslation } from "react-i18next";
import SplitTextHeading from "@/components/shared/SplitTextHeading";
import MagneticButton from "@/components/shared/MagneticButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { buildMailto, CONTACT_EMAIL } from "@/lib/mailto";
import { fadeUp, stagger } from "@/lib/animations";

const Contact = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const contactInfo = [
    { icon: MapPin, title: t("contact.info.visit.title"), info: t("contact.info.visit.info"), description: t("contact.info.visit.description") },
    { icon: Phone, title: t("contact.info.call.title"), info: t("contact.info.call.info"), description: t("contact.info.call.description") },
    { icon: Mail, title: t("contact.info.email.title"), info: t("contact.info.email.info"), description: t("contact.info.email.description") },
    { icon: Clock, title: t("contact.info.hours.title"), info: t("contact.info.hours.info"), description: t("contact.info.hours.description") },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const mailto = buildMailto(t("contact.form.emailSubject", { name: formData.name }), [
      `${t("contact.form.name")}: ${formData.name}`,
      `${t("contact.form.email")}: ${formData.email}`,
      formData.phone && `${t("contact.form.phone")}: ${formData.phone}`,
      "",
      formData.message,
    ]);
    window.location.href = mailto;

    toast({
      title: t("contact.form.successTitle"),
      description: t("contact.form.successDesc", { email: CONTACT_EMAIL }),
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="mb-16 max-w-3xl">
          <p className="eyebrow mb-4 text-primary/60">{t("contact.badge")}</p>
          <SplitTextHeading
            text={`${t("contact.title")} ${t("contact.titleHighlight")}`}
            className="display-sub font-heading font-extrabold text-foreground"
          />
          <motion.p
            className="mt-6 text-lg text-muted-foreground"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {t("contact.description")}
          </motion.p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-5 lg:gap-16">
          {/* Message form */}
          <motion.div
            className="lg:col-span-3"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <div className="rounded-3xl border border-border bg-card p-8 shadow-card md:p-10">
              <h3 className="font-heading text-2xl font-extrabold text-foreground">
                {t("contact.cta.title")}
              </h3>
              <p className="mt-2 text-muted-foreground">{t("contact.cta.description")}</p>

              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="contact-name">{t("contact.form.name")}</Label>
                    <Input
                      id="contact-name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={t("contact.form.name")}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-email">{t("contact.form.email")}</Label>
                    <Input
                      id="contact-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={t("contact.form.email")}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-phone">
                    {t("contact.form.phone")}{" "}
                    <span className="text-muted-foreground">({t("common.optional")})</span>
                  </Label>
                  <Input
                    id="contact-phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder={t("contact.form.phone")}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contact-message">{t("contact.form.message")}</Label>
                  <Textarea
                    id="contact-message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t("contact.form.messagePlaceholder")}
                  />
                </div>

                <MagneticButton className="block w-full sm:w-auto">
                  <Button type="submit" size="lg" className="premium-button w-full font-semibold text-white sm:w-auto">
                    <Send className="mr-2 h-4 w-4" />
                    {t("contact.form.send")}
                  </Button>
                </MagneticButton>
              </form>
            </div>
          </motion.div>

          {/* Info list */}
          <motion.div
            className="lg:col-span-2"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <div className="space-y-7">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                return (
                  <motion.div key={info.title} variants={fadeUp} className="flex items-start gap-4">
                    <Icon className="mt-1 h-5 w-5 shrink-0 text-secondary" aria-hidden />
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                        {info.title}
                      </p>
                      <p className="font-heading font-bold text-foreground">{info.info}</p>
                      <p className="text-sm text-muted-foreground">{info.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Map */}
        <motion.div
          className="mx-auto mt-16 max-w-6xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ type: "spring", stiffness: 80, damping: 16 }}
        >
          <Card className="premium-card overflow-hidden border-0">
            <CardContent className="p-0">
              <div className="h-[320px] md:h-[400px]">
                <iframe
                  title="London School Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2923.26734455247!2d20.867624000000003!3d42.8883059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135345be74d29c69%3A0xd1d95ee51e5bafba!2sLondon%20School!5e0!3m2!1sen!2s!4v1763657972733!5m2!1sen!2s"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                  className="h-full w-full border-0"
                />
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
