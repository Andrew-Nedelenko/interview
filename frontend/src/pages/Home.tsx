import { useEffect, useMemo, useState } from 'react';
import { Loader, SActiveTab, SHome } from './styled.home';
import { Gallery, Carousel } from '../components';
import { httpClient } from '../core';
import { IPicturesResponse } from '../core/types';
import { EPictures } from './types.home';


export const Home = () => {
  const [tab, setTab] = useState<EPictures>(EPictures.IMAGES);
  const [picturesData, setPicturesData] = useState<IPicturesResponse>();

  const handleTabChange = (key: EPictures) => {
    setTab(key);
  };

  useEffect(() => {
    if (!picturesData) httpClient(`${process.env.REACT_APP_API_URL}/images`).then(setPicturesData);
  }, [picturesData]);

  const tabViews = useMemo(() => {
    switch (tab) {
      case EPictures.IMAGES:
        return <Gallery data={picturesData?.images} />;

      case EPictures.PHOTOS:
        return <Carousel data={picturesData?.photos} />;
    }
  }, [tab, picturesData]);

  if (!picturesData) return <Loader>Loading...</Loader>;

  return (
    <SHome>
      <div className="tabs">
        {Object.values(EPictures).map(pic => (
          <SActiveTab onClick={() => handleTabChange(pic)} key={pic} isActive={pic === tab}>
            {pic}
          </SActiveTab>
        ))}
      </div>

      <div>{tabViews}</div>
    </SHome>
  );
};
