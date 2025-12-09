import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { Produto } from './entities/produto.entity';

@Controller('/produto')
export class ProdutoController {
  constructor(private readonly service: ProdutoService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get('/:id')
  findById(@Param('id') id: number) {
    return this.service.findById(id);
  }

  @Get('/titulo/:titulo')
  findByTitulo(@Param('titulo') titulo: string) {
    return this.service.findByTitulo(titulo);
  }

  @Post()
  create(@Body() produto: Produto) {
    return this.service.create(produto);
  }

  @Put()
  update(@Body() produto: Produto) {
    return this.service.update(produto);
  }

  @Delete('/:id')
  delete(@Param('id') id: number) {
    return this.service.delete(id);
  }
}
