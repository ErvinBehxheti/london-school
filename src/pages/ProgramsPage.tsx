import { motion } from "framer-motion";
import { CheckCircle, Star } from "lucide-react";
import { useTranslation } from "react-i18next";
import Header from "@/components/Header";
import PageHero from "@/components/shared/PageHero";
import Programs from "@/components/Programs";
import ContactCTA from "@/components/ContactCTA";
import SplitTextHeading from "@/components/shared/SplitTextHeading";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SUCCESS_STORIES } from "@/data/testimonials";
import { cardVariant, stagger } from "@/lib/animations";

const ProgramsPage = () => {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />
      <PageHero
        eyebrow={t("programs.badge")}
        title={t("pages.programs.title")}
        description={t("pages.programs.description")}
      />

      <Programs />

      {/* Success stories */}
      <section className="bg-background py-24">
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <Badge className="mb-4 border-accent/20 bg-accent/10 text-accent">
              {t("testimonials.success.badge")}
            </Badge>
            <SplitTextHeading
              text={t("testimonials.success.title")}
              className="display-sub font-heading font-extrabold text-foreground"
            />
            <p className="mx-auto mt-4 max-w-3xl text-xl text-muted-foreground">
              {t("testimonials.success.description")}
            </p>
          </div>

          <motion.div
            className="grid grid-cols-1 gap-8 md:grid-cols-3"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {SUCCESS_STORIES.map((story) => (
              <motion.div key={story.key} variants={cardVariant}>
                <Card className="premium-card h-full border-0">
                  <CardHeader>
                    <div className="mb-2 flex items-center justify-between">
                      <Badge variant="outline">
                        {t(`testimonials.success.${story.key}.program`)}
                      </Badge>
                      <div className="flex">
                        {[...Array(story.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 fill-secondary text-secondary"
                          />
                        ))}
                      </div>
                    </div>
                    <CardTitle className="font-heading text-lg">
                      {t(`testimonials.success.${story.key}.name`)}
                    </CardTitle>
                    <CardDescription className="flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4 text-accent" />
                      {t(`testimonials.success.${story.key}.achievement`)}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="italic text-muted-foreground">
                      “{t(`testimonials.success.${story.key}.quote`)}”
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <ContactCTA />
    </main>
  );
};

export default ProgramsPage;
