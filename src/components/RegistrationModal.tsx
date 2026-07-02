import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Sparkles } from "lucide-react";

interface RegistrationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const RegistrationModal = ({ open, onOpenChange }: RegistrationModalProps) => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    program: "",
    age: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: t("registration.success"),
        description: t("registration.successDesc"),
      });
      setIsSubmitting(false);
      onOpenChange(false);
      setFormData({ name: "", email: "", phone: "", program: "", age: "" });
    }, 1000);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <DialogTitle className="text-2xl">{t("registration.title")}</DialogTitle>
          </div>
          <DialogDescription>{t("registration.description")}</DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name">
              {t("contact.form.name")} <span className="text-destructive">*</span>
            </Label>
            <Input
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder={t("contact.form.name")}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">
              {t("contact.form.email")} <span className="text-destructive">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder={t("contact.form.email")}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">
              {t("contact.form.phone")} <span className="text-destructive">*</span>
            </Label>
            <Input
              id="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder={t("contact.form.phone")}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="age">
              {t("registration.ageGroup")} <span className="text-destructive">*</span>
            </Label>
            <Select
              required
              value={formData.age}
              onValueChange={(value) => setFormData({ ...formData, age: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder={t("registration.selectAge")} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="kids">{t("registration.age.kids")}</SelectItem>
                <SelectItem value="juniors">{t("registration.age.juniors")}</SelectItem>
                <SelectItem value="teens">{t("registration.age.teens")}</SelectItem>
                <SelectItem value="adults">{t("registration.age.adults")}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="program">
              {t("contact.form.program")} <span className="text-destructive">*</span>
            </Label>
            <Select
              required
              value={formData.program}
              onValueChange={(value) => setFormData({ ...formData, program: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder={t("contact.form.selectProgram")} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="english">{t("contact.form.englishOption")}</SelectItem>
                <SelectItem value="german">{t("contact.form.germanOption")}</SelectItem>
                <SelectItem value="programming">{t("contact.form.programmingOption")}</SelectItem>
                <SelectItem value="logiscool">{t("contact.form.logiscoolOption")}</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 mt-6">
            <p className="text-sm font-semibold text-accent mb-1">
              {t("registration.earlyBird")}
            </p>
            <p className="text-xs text-muted-foreground">
              {t("registration.earlyBirdDesc")}
            </p>
          </div>

          <Button
            type="submit"
            className="w-full premium-button text-white font-semibold"
            disabled={isSubmitting}
          >
            {isSubmitting ? t("contact.form.sending") : t("registration.submit")}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default RegistrationModal;
