import Ring from '../entities/Ring';

class RingRepository {
  async create(data: any) {
    return await Ring.create(data);
  }

  async findAll() {
    return await Ring.findAll();
  }

  async findById(id: number) {
    return await Ring.findByPk(id);
  }

  async update(id: number, data: any) {
    return await Ring.update(data, { where: { id } });
  }

  async delete(id: number) {
    return await Ring.destroy({ where: { id } });
  }

  async countRingsByForjadoPor(forgedBy: string) {
    return await Ring.count({ where: { forjadoPor: forgedBy } });
  }
}

export default new RingRepository();
