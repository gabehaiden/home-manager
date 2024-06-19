import { PartialType } from '@nestjs/mapped-types';
import { CreateHomeDTO } from './create-home.dto';

export class UpdateHomeDto extends PartialType(CreateHomeDTO) { }
