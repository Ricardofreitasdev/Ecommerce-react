import { useEffect, useState } from "react";
import store from "../data/store.json";

export default function useStore() {
  const [testimonials, setTestimonials] = useState([]);
  const [products, setProducts] = useState([]);
  const [infos, setInfos] = useState([]);
  const [categories, setCategories] = useState([]);
  const [banners, setBanners] = useState([]);
  const [logos, setLogos] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      setBanners(store.banners);
      setTestimonials(store.testimonials);
      setProducts(store.products);
      setInfos(store.infos);
      setCategories(store.categories);
      setLogos(store.logo);
    } finally {
      setLoading(false);
    }
  }, []);

  return { products, testimonials, infos, categories, banners, loading, logos };
}
