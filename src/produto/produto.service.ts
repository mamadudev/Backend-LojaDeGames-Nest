import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, ILike } from 'typeorm';
import { Produto } from './entities/produto.entity';

@Injectable()
export class ProdutoService {
  constructor(
    @InjectRepository(Produto)
    private produtoRepository: Repository<Produto>,
  ) {}

  findAll(): Promise<Produto[]> {
    return this.produtoRepository.find({
      relations: {
        categoria: true,
      },
    });
  }

  findById(id: number): Promise<Produto | null> {
    return this.produtoRepository.findOne({
      where: { id },
      relations: {
        categoria: true,
      },
    });
  }
  findByTitulo(titulo: string): Promise<Produto[]> {
    return this.produtoRepository.find({
      where: {
        titulo: ILike(`%${titulo}%`),
      },
      relations: {
        categoria: true,
      },
    });
  }

  create(produto: Produto): Promise<Produto> {
    return this.produtoRepository.save(produto);
  }

  update(produto: Produto): Promise<Produto> {
    return this.produtoRepository.save(produto);
  }

  async delete(id: number): Promise<void> {
    await this.produtoRepository.delete(id);
  }
}
