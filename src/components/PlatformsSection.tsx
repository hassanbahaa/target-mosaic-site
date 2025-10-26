import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";

const platforms = [
  { name: "Booking.com", logo: "https://logo.clearbit.com/booking.com" },
  { name: "Expedia", logo: "https://logo.clearbit.com/expedia.com" },
  { name: "Agoda", logo: "https://logo.clearbit.com/agoda.com" },
  { name: "TripAdvisor", logo: "https://logo.clearbit.com/tripadvisor.com" },
  { name: "Airbnb", logo: "https://logo.clearbit.com/airbnb.com" },
];

const PlatformsSection = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" dir="rtl">
            المنصات التي نعمل عليها
          </h2>
          <p className="text-xl text-muted-foreground">
            Platforms We Work With
          </p>
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
              stopOnInteraction: true,
              stopOnMouseEnter: true,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {[...platforms, ...platforms].map((platform, index) => (
              <CarouselItem
                key={`${platform.name}-${index}`}
                className="pl-4 basis-1/2 md:basis-1/3 lg:basis-1/5"
              >
                <div className="flex items-center justify-center p-4">
                  <div className="platform-circle group overflow-hidden">
                    <img
                      src={platform.logo}
                      alt={platform.name}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = "/placeholder.svg";
                      }}
                    />
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

export default PlatformsSection;
