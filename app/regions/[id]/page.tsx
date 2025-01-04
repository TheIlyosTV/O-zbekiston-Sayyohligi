import Image from "next/image";
import Link from "next/link";

const regions = [
  {
    id: 1,
    name: "Toshkent viloyati",
    image: "/images/tashkent-region.png",
    description: "Poytaxt va zamonaviy shaharlar",
    attractions: [
      "Chorsu bozori",
      "Toshkent teleminorasi",
      "Amir Temur haykali",
    ],
    hotels: [
      "Hyatt Regency Tashkent",
      "Hilton Tashkent City",
      "Wyndham Tashkent",
    ],
    restaurants: [
      "Central Asian Plov Center",
      "Afsona Restaurant",
      "Karavan Restaurant",
    ],
  },
  {
    id: 2,
    name: "Samarqand viloyati",
    image: "/images/samarkand-region.png",
    description: "Tarixiy obidalar va madaniy meros",
    attractions: ["Registon maydoni", "Shohi Zinda", "Ulug'bek rasadxonasi"],
    hotels: ["Samarkand Regency Amir Temur", "DiliMah Hotel", "Platan Hotel"],
    restaurants: [
      "Platan Restaurant",
      "Bibikhanum Teahouse",
      "Karimbek Restaurant",
    ],
  },
  {
    id: 3,
    name: "Buxoro viloyati",
    image: "/images/bukhara-region.jpg",
    description: "Sharqona arxitektura va qadimiy shahar",
    attractions: ["Ark qal'asi", "Chor Minor", "Ismoil Somoniy maqbarasi"],
    hotels: [
      "Asia Bukhara Hotel",
      "Omar Khayyam Hotel",
      "Amelia Boutique Hotel",
    ],
    restaurants: ["Chinar Restaurant", "Lyabi Hauz", "Old Bukhara Restaurant"],
  },
  {
    id: 4,
    name: "Xorazm viloyati",
    image: "/images/khorezm-region.jpg",
    description: "Qadimiy Xiva shahri va Ichan Qal'a",
    attractions: ["Ichan Qal'a", "Kalta Minor", "Islomxo'ja minorasi"],
    hotels: [
      "Hotel Asia Khiva",
      "Farovon Khiva Hotel",
      "Shaherezada Boutique Hotel",
    ],
    restaurants: [
      "Khorezm Art Restaurant",
      "Terrassa Cafe",
      "Zarafshan Restaurant",
    ],
  },
  {
    id: 5,
    name: "Qashqadaryo viloyati",
    image: "/images/kashkadarya-region.jpg",
    description: "Sharqona tarixiy obidalar va tog'lar",
    attractions: ["Shahrisabz Oqsaroy", "Dorut-Tilovat", "G'issar tog'lari"],
    hotels: ["Shahrisabz Hotel", "Oqsaroy Hotel", "Karshi Grand Hotel"],
    restaurants: ["Shahrisabz Restaurant", "Oqsaroy Cafe", "Nasaf Restaurant"],
  },
  {
    id: 6,
    name: "Surxondaryo viloyati",
    image: "/images/surkhandarya-region.png",
    description: "Qadimiy ajdodlar izlari va tog' manzaralari",
    attractions: [
      "Boysun tog'lari",
      "Qoratepa buddist ibodatxonasi",
      "Termiz arxeologiya muzeyi",
    ],
    hotels: ["Surxon Hotel", "Karvon Hotel", "Termiz Star Hotel"],
    restaurants: ["Surxon Cafe", "Baxtiyor Restaurant", "Termiz Plov Center"],
  },
  {
    id: 7,
    name: "Navoiy viloyati",
    image: "/images/navoi-region.png",
    description: "Sahro manzarasi va sanoat markazi",
    attractions: [
      "Qizilqum sahrosi",
      "Sarmishsoy darasi",
      "Raboti Malik karvonsaroyi",
    ],
    hotels: ["Grand Navoiy Hotel", "Zarafshan Hotel", "Sarmishsoy Resort"],
    restaurants: ["Navoiy Restaurant", "Sarmish Cafe", "Zarafshan Cuisine"],
  },

  {
    id: 8,
    name: "Andijon viloyati",
    image: "/images/andijan-region.png",
    description: "Bobur yurtining tarixiy maskanlari",
    attractions: ["Bobur bog'i", "Andijon muzeyi", "Qo'rg'ontepa qal'asi"],
    hotels: ["Andijon Hotel", "Elita Hotel", "Royal Hotel Andijan"],
    restaurants: ["Andijon Restaurant", "Boburcha Cafe", "Barkamol Restaurant"],
  },
  {
    id: 9,
    name: "Farg'ona viloyati",
    image: "/images/fergana-region.png",
    description: "O'zbekistonning eng go'zal tabiatiga ega hudud",
    attractions: [
      "Rishton kulolchilik markazi",
      "Marg'ilon ipak fabrikasi",
      "Quvasoy tog'lari",
    ],
    hotels: ["Asia Fergana Hotel", "Silk Road Kokand", "Grand Fergana Hotel"],
    restaurants: [
      "Toshkent Restaurant",
      "Fergana Cuisine",
      "Nurafshon Restaurant",
    ],
  },
  {
    id: 10,
    name: "Namangan viloyati",
    image: "/images/namangan-region.png",
    description: "Gulzorlar va go'zal bog'lar yurti",
    attractions: [
      "Namangan Guliston bog'i",
      "Mingchinor xiyoboni",
      "Kasansay ko'li",
    ],
    hotels: ["Orzu Hotel", "Silk Road Namangan", "Grand Namangan Hotel"],
    restaurants: ["Chustiy Restaurant", "Dilbar Cafe", "Fayz Restaurant"],
  },
  {
    id: 11,
    name: "Sirdaryo viloyati",
    image: "/images/syrdarya-region.png",
    description: "Paxtakorlar va suv resurslari",
    attractions: ["Baxt ko'li", "Guliston bog'i", "Suv ombori"],
    hotels: ["Sirdaryo Hotel", "Guliston Hotel", "Paxtakor Guesthouse"],
    restaurants: [
      "Sirdaryo Cafe",
      "Guliston Restaurant",
      "Paxtakor Plov Center",
    ],
  },
  {
    id: 12,
    name: "Jizzax viloyati",
    image: "/images/jizzakh-region.png",
    description: "Jizzaxning tabiat go'zalliklari va tarixiy joylari",
    attractions: [
      "Zaamin milliy bog'i",
      "Zomin tog'lari",
      "O'rta Osiyo karvonsaroyi",
    ],
    hotels: ["Zaamin Resort", "Jizzax Hotel", "Grand Zomin Hotel"],
    restaurants: ["Zaamin Cafe", "Karvon Restaurant", "Jizzax Cuisine"],
  },
];

type RegionPageProps = {
  params: {
    id: string;
  };
};

const RegionPage = ({ params }: RegionPageProps) => {
  const region = regions.find((r) => r.id === parseInt(params.id));

  if (!region) {
    return <div>Viloyat topilmadi</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">{region.name}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
            <Image
              src={region.image}
              alt={region.name}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div>
          <p className="text-lg mb-4">{region.description}</p>
          <h2 className="text-2xl font-semibold mb-4">
            Diqqatga sazovor joylar
          </h2>
          <ul className="list-disc list-inside mb-4">
            {region.attractions.map((attraction, index) => (
              <li key={index}>{attraction}</li>
            ))}
          </ul>
          <h2 className="text-2xl font-semibold mb-4">Mehmonxonalar</h2>
          <ul className="list-disc list-inside mb-4">
            {region.hotels.map((hotel, index) => (
              <li key={index}>{hotel}</li>
            ))}
          </ul>
          <h2 className="text-2xl font-semibold mb-4">Restoranlar</h2>
          <ul className="list-disc list-inside mb-4">
            {region.restaurants.map((restaurant, index) => (
              <li key={index}>{restaurant}</li>
            ))}
          </ul>
          <Link
            href={`/plan-trip?region=${region.name}`}
            className="bg-secondary text-white px-6 py-2 rounded-full text-lg font-semibold hover:bg-opacity-90 transition duration-300 mr-4"
          >
            Sayohat buyurtma qilish
          </Link>
          <Link
            href="/regions"
            className="bg-accent text-white px-6 py-2 rounded-full text-lg font-semibold hover:bg-opacity-90 transition duration-300"
          >
            Barcha viloyatlar
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegionPage;
