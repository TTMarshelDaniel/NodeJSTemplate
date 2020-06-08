import { UserEntity } from "../entity/UserEntity";
import { RepositoryFactory } from "../repository/RepositoryFactory";
import { Logger } from "../Logger/Logger";
import { ClientEntity } from "../entity/ClientEntity";
import { Service, Inject } from "typedi";
import { Repository } from "typeorm";


@Service()
export class ClientDAO {

   @Inject(RepositoryFactory.ClientEntity) 
   private clientRepository: Repository<ClientEntity> ;

   async getAll() :Promise<ClientEntity[]> {
      return this.clientRepository.find() ;
   }
 
   async addNew(entity: ClientEntity) {
      return this.clientRepository.save(entity) ;
   }
 
   async getById(id: number) {
      return this.clientRepository.findOne(id) ;
   }
  
   async updateById(id: number, entity: ClientEntity) {
      return this.clientRepository.update(id, entity);
   }
 
   async deleteById(id: number) {
      return this.clientRepository.delete(id);
   }
}