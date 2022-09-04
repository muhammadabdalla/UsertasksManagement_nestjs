import { BaseEntity, Repository } from 'typeorm';

export class BaseRepository<T extends BaseEntity> extends Repository<T> {
  async findAllRecords() {
    const records = await this.find();

    return records;
  }
}
