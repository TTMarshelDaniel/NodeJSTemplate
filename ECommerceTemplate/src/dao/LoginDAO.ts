import { LoginRequest } from "../data/requests/LoginRequest";
import { Logger } from "../Logger/Logger";
import { ClientEntity } from "../entity/ClientEntity";
import { LoginEntity } from "../entity/LoginEntity";
import { RepositoryFactory } from "../repository/RepositoryFactory";
import { Repository } from "typeorm";
import { Inject, Service } from "typedi";

@Service()
export class LoginDAO {

   @Inject(RepositoryFactory.LoginEntity)
   private loginRepository: Repository<LoginEntity> ;

   async getAll() :Promise<LoginEntity[]> {
      return this.loginRepository.find() ;
   }
 
   async addNew(entity: LoginEntity) { 
      return this.loginRepository.save(entity) ;
   }
 
   async getById(id: number) {
      return this.loginRepository.findOne(id) ;
   }
  
   async updateById(id: number, entity: LoginEntity) {
      return this.loginRepository.update(id, entity);
   }
 
   async deleteById(id: number) {
      return this.loginRepository.delete(id);
   }
}