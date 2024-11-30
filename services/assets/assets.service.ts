class AssetsService {
  getAsset(file: string) {
    return `https://assets.blahaj.land/${file}`;
  }
}

export const assetsService = new AssetsService();

export const $get = assetsService.getAsset;
