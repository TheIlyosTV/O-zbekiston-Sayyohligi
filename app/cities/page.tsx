import VideoPlayer from "../../components/VideoPlayer";

const cities = [
  {
    id: 1,
    name: "Toshkent",
    videoUrl: "https://example.com/tashkent-video.mp4",
  },
  {
    id: 2,
    name: "Samarqand",
    videoUrl: "https://example.com/samarkand-video.mp4",
  },
  { id: 3, name: "Buxoro", videoUrl: "https://example.com/bukhara-video.mp4" },
  { id: 4, name: "Xiva", videoUrl: "https://example.com/khiva-video.mp4" },
];

export default function Cities() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">O'zbekiston Shaharlari</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {cities.map((city) => (
          <div
            key={city.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <VideoPlayer videoUrl={city.videoUrl} />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{city.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
