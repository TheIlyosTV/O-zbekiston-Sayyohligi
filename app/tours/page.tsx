import Link from 'next/link'

const tours = [
  { id: 1, name: "Buyuk Ipak Yo'li", duration: "7 kun", price: "1000$" },
  { id: 2, name: "Qadimiy Shaharlar", duration: "5 kun", price: "800$" },
  { id: 3, name: "Ziyorat Turi", duration: "3 kun", price: "500$" },
]

export default function Tours() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Sayohat Dasturlari</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tours.map(tour => (
          <div key={tour.id} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">{tour.name}</h2>
            <p className="mb-2">Davomiyligi: {tour.duration}</p>
            <p className="mb-4">Narxi: {tour.price}</p>
            <Link href={`/tours/${tour.id}`} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
              Batafsil
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

