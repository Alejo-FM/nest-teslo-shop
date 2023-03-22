import { join } from 'path';

import { Injectable, BadRequestException } from '@nestjs/common';
import { existsSync } from 'fs';


@Injectable()
export class FilesService {

  getStaticProductImage( imageName: string){

    const path = join(__dirname, '../../static/products', imageName);
    console.log(path)
    if( !existsSync(path)) 
      throw new BadRequestException(`No product found with image ${ imageName}`);
    
    return path;
  }

}
