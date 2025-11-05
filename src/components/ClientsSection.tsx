import { useLanguage } from "@/contexts/LanguageContext";
import { hotels } from "@/data/hotels";

const ClientsSection = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('clients.title')}
          </h2>
          <p className="text-xl text-muted-foreground">{t('clients.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {hotels.map((hotel) => (
            <div key={hotel.id} className="text-center">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={`/src/assets/hotels/${hotel.id}.jpg`}
                  onError={(e) => {
                    e.currentTarget.src = "/src/assets/hotels/placeholder.jpg";
                  }}
                  alt={hotel.name}
                  className="w-full h-40 object-cover rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-base font-semibold mt-3 break-words px-2">
                {hotel.name}
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                {hotel.city} {hotel.flag}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
