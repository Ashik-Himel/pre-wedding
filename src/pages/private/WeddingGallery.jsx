import { Helmet } from "react-helmet-async";
import PhotoAlbum from "react-photo-album";
import L1 from "../../assets/images/gallery/L1.jpg";
import L2 from "../../assets/images/gallery/L2.jpg";
import L3 from "../../assets/images/gallery/L3.jpg";
import L4 from "../../assets/images/gallery/L4.jpg";
import W1 from "../../assets/images/gallery/W1.jpg";
import W2 from "../../assets/images/gallery/W2.jpg";
import W3 from "../../assets/images/gallery/W3.jpg";
import W4 from "../../assets/images/gallery/W4.jpg";
import W5 from "../../assets/images/gallery/W5.jpg";
import W6 from "../../assets/images/gallery/W6.jpg";
import W7 from "../../assets/images/gallery/W7.jpg";
import W8 from "../../assets/images/gallery/W8.jpg";
import W9 from "../../assets/images/gallery/W9.jpg";
import W10 from "../../assets/images/gallery/W10.jpg";
import W11 from "../../assets/images/gallery/W11.jpg";

const photos = [
  { src: W1, width: 4, height: 3 },
  { src: W2, width: 4, height: 3 },
  { src: L1, width: 4, height: 6 },
  { src: W3, width: 4, height: 3 },
  { src: W4, width: 4, height: 3 },
  { src: L2, width: 4, height: 6 },
  { src: W5, width: 4, height: 3 },
  { src: W6, width: 4, height: 3 },
  { src: L3, width: 4, height: 6 },
  { src: W7, width: 4, height: 3 },
  { src: W8, width: 4, height: 3 },
  { src: L4, width: 4, height: 6 },
  { src: W9, width: 4, height: 3 },
  { src: W10, width: 4, height: 3 },
  { src: W11, width: 4, height: 3 }
];

const columns = () => {
  const width = window.innerWidth;
  if (width > 1280) return "4"
  else if (width >  1024) return "3"
  else if (width > 640) return "2"
  else return "1"
}

const WeddingGallery = () => {
  return (
    <main className="my-10">
      <Helmet>
        <title>Wedding Gallery - PreWedding</title>
      </Helmet>

      <section>
        <div className="container">
          <h2 className="text-center text-3xl font-semibold mb-2">Wedding <span className="text-primary">Gallery</span></h2>
          <p className="text-center max-w-[550px] mx-auto text-para-color mb-10">Here are some wedding event photoshoot that are clicked on our previous wedding events!</p>

          <PhotoAlbum
            photos={photos}
            layout="masonry"
            columns={columns}
            spacing="8"
          />
        </div>
      </section>
    </main>
  );
};

export default WeddingGallery;