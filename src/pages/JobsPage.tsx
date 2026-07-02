import { useTranslation } from "react-i18next";
import Header from "@/components/Header";
import PageHero from "@/components/shared/PageHero";
import JobOpenings from "@/components/JobOpenings";

const JobsPage = () => {
  const { t } = useTranslation();

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />
      <PageHero
        eyebrow={t("jobs.badge")}
        title={t("pages.jobs.title")}
        description={t("pages.jobs.description")}
      />
      <JobOpenings />
    </main>
  );
};

export default JobsPage;
