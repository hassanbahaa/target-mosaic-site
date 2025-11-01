import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import targetLogo from '../assets/targetlogo.png';
import PlatformsSection from "@/components/PlatformsSection";
import ClientsSection from "@/components/ClientsSection";
import { Card, CardContent } from "@/components/ui/card";
import { Hotel, TrendingUp, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const { t, language } = useLanguage();
  const isRTL = language === "ar";

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">{/* Add padding to prevent header overlap */}
        <HeroSection />
        
        {/* About Preview */}
        <section className="section-padding bg-muted/50">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div dir={isRTL ? "rtl" : "ltr"}>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('about.title')}</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  {t('about.description1')}
                </p>
                <Link to="/about">
                  <Button size="lg" variant="outline">
                    {t('about.readMore')}
                  </Button>
                </Link>
              </div>
<div className="relative h-96 rounded-lg overflow-hidden shadow-lg flex items-center justify-center bg-gray-100">
                <img 
                  src={targetLogo} 
                  alt="About Us"
                 className="max-w-full max-h-full object-contain object-center"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('services.title')}</h2>
              <p className="text-xl text-muted-foreground">{t('services.subtitle')}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <Card className="card-hover">
                <CardContent className="p-6 text-center" dir={isRTL ? "rtl" : "ltr"}>
                  <Hotel className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3">{t('services.management.title')}</h3>
                  <p className="text-muted-foreground">
                    {t('services.management.description')}
                  </p>
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardContent className="p-6 text-center" dir={isRTL ? "rtl" : "ltr"}>
                  <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3">{t('services.marketing.title')}</h3>
                  <p className="text-muted-foreground">
                    {t('services.marketing.description')}
                  </p>
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardContent className="p-6 text-center" dir={isRTL ? "rtl" : "ltr"}>
                  <Star className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-3">{t('services.performance.title')}</h3>
                  <p className="text-muted-foreground">
                    {t('services.performance.description')}
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Link to="/services">
                <Button size="lg">
                  {t('services.viewAll')}
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Platforms Section */}
        <PlatformsSection />

        {/* Clients Section */}
        <ClientsSection />

        {/* Testimonials Preview */}
        <section className="section-padding bg-primary/5">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('testimonials.title')}</h2>
              <p className="text-xl text-muted-foreground">{t('testimonials.subtitle')}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <Card className="card-hover">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4" dir="rtl">
                    "شركة ممتازة و تقدم خدمات افضل, انصح بهم و بشدة اعمل معهم منذ 3 سنوات و الحمدلله."
                  </p>
                  <p className="font-bold" dir="rtl">هاني عبد المحسن العمري</p>
                  <p className="text-sm text-primary" dir="rtl">فندق كيان للاجنحة الفندقية جدة</p>
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4" dir="rtl">
                    "شركة من افضل شركات التسويق حيث قامت برفع نسبة الاشغال في وقت قصير و على مدار 4 سنوات و احنا مستمرين معهم."
                  </p>
                  <p className="font-bold" dir="rtl"> محمد</p>
                  <p className="text-sm text-primary" dir="rtl">فندق برج بيات</p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Link to="/testimonials">
                <Button size="lg" variant="outline">
                  {t('testimonials.viewAll')}
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="section-padding bg-primary">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {t('cta.title')}
            </h2>
            <Link to="/contact">
              <Button 
                size="lg"
                className="bg-white text-primary hover:bg-white/90 rounded-full px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {t('cta.button')}
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
