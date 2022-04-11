import React from "react";
import { useSelector } from "react-redux";
import useSearchVideo from "../hooks/useSearchVideo";
import Search from "../components/Search";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
import Header from "../components/Header";
import NotFound from "./NotFound";
import "../assets/styles/App.scss";

const Home = () => {
  const myList = useSelector((state) => state.myList.data);
  const originals = useSelector((state) => state.originals.data);
  const trends = useSelector((state) => state.trends.data);
  const term = useSelector((state) => state.search.term);
  const { results } = useSearchVideo();
  console.log(results);

  return (
    <>
      <Header />
      <Search isHome />
      {term &&
        (results.length ? (
          <Categories title="Resultados de la búsqueda">
            <Carousel>
              {results.map((item) => (
                <CarouselItem key={item.id} {...item} isList />
              ))}
            </Carousel>
          </Categories>
        ) : (
          <Categories title={"Resultados de la búsqueda"}>
            <NotFound />
          </Categories>
        ))}

      {myList.length > 0 && (
        <Categories title="Mi Lista">
          <Carousel>
            {myList.map((item) => (
              <CarouselItem key={item.id} {...item} isList />
            ))}
          </Carousel>
        </Categories>
      )}
      <Categories title="Tendencias">
        <Carousel>
          {trends.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>
      <Categories title="Originales de Platzi Video">
        <Carousel>
          {originals.map((item) => (
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>
    </>
  );
};

export default Home;
