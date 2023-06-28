import { registerAs } from '@nestjs/config';

export const appConfig = registerAs('app', () => ({
  nodeEnv: process.env.NODE_ENV,
  port: process.env.SERVER_PORT || 3000,
  imagesEndpoint: process.env.ENDPOINT_IMAGES,
  photosEndpoint: process.env.ENDPOINT_PHOTOS,
  imagesStoreUrl: process.env.IMAGES_STORE_URL,
  clientUrl: process.env.CLIENT_URL,
}));
