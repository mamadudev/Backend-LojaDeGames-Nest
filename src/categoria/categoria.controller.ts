import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { CategoriaService } from './categoria.service';
import { Categoria } from './entities/categoria.entity';

@Controller('/categoria')
export class CategoriaController {
  constructor(private readonly service: CategoriaService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get('/:id')
  findById(@Param('id') id: number) {
    return this.service.findById(id);
  }

  @Get('/nome/:nome')
  findByNome(@Param('nome') nome: string) {
    return this.service.findByNome(nome);
  }

  @Post()
  create(@Body() categoria: Categoria) {
    return this.service.create(categoria);
  }

  @Put()
  update(@Body() categoria: Categoria) {
    return this.service.update(categoria);
  }

  @Delete('/:id')
  delete(@Param('id') id: number) {
    return this.service.delete(id);
  }
}
