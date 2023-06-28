import { FC } from 'react';
import { IPictures } from '../../core/types';
import { SGallery } from './styled.gallery';
import { firstLetterToUpper } from '../../utils';

interface IGallery {
  data?: IPictures[];
}

export const Gallery: FC<IGallery> = ({ data }) => {
  if (!data) {
    return <>No data</>;
  }

  return (
    <SGallery>
      {data.map(pic => (
        <div className="picture" key={pic.id}>
          <img src={pic.url.small} alt={pic.title} />
          <p>{firstLetterToUpper(pic.title)}</p>
        </div>
      ))}
    </SGallery>
  );
};
