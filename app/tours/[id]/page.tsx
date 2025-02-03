import mapsImage from "@/images/maps.jpg";
import Image from "next/image";
const url = "https://www.course-api.com/images/tours/tour-1.jpeg";
function page({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1 className="text-4xl">ID {params.id}</h1>
      <section className="flex gap-x-4 mt-4">
        <div>
          <Image
            src={mapsImage} 
            priority
            width={192}
            height={192}
            alt="maps"
            className="w-48 h-48 object-cover rounded"
          />
          <h2>Local Image</h2>
        </div>
        <div>
          <Image
            src={url}
            width={192} 
            priority
            height={192}
            alt="maps"
            className="w-48 h-48 object-cover"
          />
        </div>
      </section>
    </div>
  );
}

export default page;
