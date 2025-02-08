import { useEffect, useState } from "react";
import Masonry from "react-masonry-component";

export default function Gallery() {
  const [images, setImages] = useState([]);
  const fetchData = () => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => setImages(res))
      .catch((err) => console.error(err));
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="App">
      <Masonry>
        {images?.products?.map((data) => (
          <img src={data?.thumbnail} alt="img unavailable" />
        ))}
      </Masonry>
    </div>
  );
}
