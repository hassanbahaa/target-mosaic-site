import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useLanguage } from "@/contexts/LanguageContext";
import { hotels } from "@/data/hotels";
import AutoScroll from "embla-carousel-auto-scroll";

const ClientsSection = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding" dir="ltr">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('clients.title')}
          </h2>
          <p className="text-xl text-muted-foreground">{t('clients.subtitle')}</p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            AutoScroll({
              playOnInit: true,
              speed: 1,
              stopOnInteraction: false,
              stopOnMouseEnter: true,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {[...hotels, ...hotels].map((hotel, index) => (
              <CarouselItem
                key={`${hotel.id}-${index}`}
                className="pl-4 basis-full sm:basis-1/2 lg:basis-1/4"
              >
                <div className="flex items-center justify-center p-4">
                  <div className="text-center group transition-all">
                    <div className="relative overflow-hidden rounded-xl shadow-md">
                      <img
                        src={`/src/assets/hotels/${hotel.id}.jpg`}
                        onError={(e) => {
                          e.currentTarget.src = "/src/assets/hotels/placeholder.jpg";
                        }}
                        alt={hotel.name}
                        className="w-40 h-40 mx-auto object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                      />
                    </div>
                    <h3 className="text-base font-semibold mt-3 break-words px-2">
                      {hotel.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {hotel.city} {hotel.flag}
                    </p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default ClientsSection;
