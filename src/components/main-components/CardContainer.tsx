import React, { useContext, useEffect, useState } from "react";
import Card from "./Card";
import { createApi } from "unsplash-js";
import { queryContext } from "../../context/QueryContext";

interface PropTypes {
  page: number;
}
const CardContainer: React.FC<PropTypes> = ({ page }) => {
  const context = useContext(queryContext);
  if (!context) return;
  const { queryState } = context;
  const suffix = "Wallpaper";
  interface ItemStructure {
    url: string;
    fullUrl: string;
  }
  const [photosData, setPhotosData] = useState<Array<ItemStructure> | undefined>([]);
  const [loaded, setLoaded] = useState<boolean>(false);
  const query = queryState + " " + suffix;
  useEffect(() => {
    const unsplash = createApi({
      accessKey: import.meta.env.VITE_APP_ACCESS_KEY,
    });
    unsplash.search
      .getPhotos({
        query,
        perPage: 3,
        page: page,
      })
      .then((photos) => {
        const items = photos.response?.results.map((photo) => {
          return { url: photo.urls.regular, fullUrl: photo.urls.full };
        });
        setPhotosData(items);
        setLoaded(true);
        console.log(photosData);
      });

    return () => {
      setPhotosData([]);
    };
  }, [queryState]);
  return (
    <div className="card-container align-row">
      {photosData && photosData.map((photo, index) => <Card url={photo.url} loaded={loaded} key={index} fullUrl={photo.fullUrl} />)}
    </div>
  );
};

export default CardContainer;
