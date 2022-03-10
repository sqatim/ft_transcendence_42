import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Stats } from 'src/core/entities/stats.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StatsService {
  constructor(
    @InjectRepository(Stats)
    private statsRepository: Repository<Stats>,
  ) {}


  findAll(): Promise<Stats[]> {
    return this.statsRepository.find();
  }

  async findOneByIdOfUser(id: number) {
    return await this.statsRepository.find({ user: id });
  }

  async findOneById(id: number) {
    return await this.statsRepository.findOne(id);
  }

  async updateStats(type: string)
  {
    switch (type){
      case
    }
  }

  save(stats: Stats): Promise<any> {
    return this.statsRepository.save(stats);
  }
}
