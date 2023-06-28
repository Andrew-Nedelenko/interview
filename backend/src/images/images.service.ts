import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateImageDto } from './dto/create-image.dto';
import { UpdateImageDto } from './dto/update-image.dto';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { catchError, forkJoin, map } from 'rxjs';
import { IImages, IPhotos, ImageSize } from './images.types';

@Injectable()
export class ImagesService {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}
  create(createImageDto: CreateImageDto) {
    return 'This action adds a new image';
  }

  async findAll() {
    const resources = [
      this.configService.get('app.imagesEndpoint'),
      this.configService.get('app.photosEndpoint'),
    ];

    return forkJoin(
      resources.map((resource) =>
        this.httpService.get(resource).pipe(
          catchError((error) => {
            // Log here
            console.error('Request failed:', error);
            throw new HttpException(
              'Fetch data is failed',
              HttpStatus.SERVICE_UNAVAILABLE,
            );
          }),
        ),
      ),
    ).pipe(
      map(([imagesRes, photosRes]) => ({
        images: imagesRes.data[0].map((image: IImages) => ({
          id: image.id,
          albumId: image.albumId,
          title: image.title,
          url: {
            small: this.getImageUrlWithSize(image.path, ImageSize.SMALL),
            medium: this.getImageUrlWithSize(image.path, ImageSize.MEDIUM),
          },
        })),
        photos: photosRes.data[0].map((photo: IPhotos) => ({
          id: photo.id,
          albumId: photo.albumId,
          title: photo.title,
          url: {
            small: this.getImageUrlWithSize(
              photo.thumbnailUrl,
              ImageSize.SMALL,
            ),
            medium: this.getImageUrlWithSize(photo.url, ImageSize.MEDIUM),
          },
        })),
      })),
    );
  }

  findOne(id: number) {
    return `This action returns a #${id} image`;
  }

  update(id: number, updateImageDto: UpdateImageDto) {
    return `This action updates a #${id} image`;
  }

  remove(id: number) {
    return `This action removes a #${id} image`;
  }

  getImageUrlWithSize(link: string, size?: number) {
    const linkSplit = link.split('/');
    const extractImageSize = linkSplit[3];
    const extractImageId = linkSplit[4];

    if (extractImageSize && extractImageId && !size) {
      return link;
    }

    return `${this.configService.get('app.imagesStoreUrl')}${size}/${
      linkSplit[linkSplit.length - 1]
    }`;
  }
}
