import { Service, Inject } from "typedi";
import { RepositoryFactory } from "../repository/RepositoryFactory";
import { UserEntity } from "../entity/UserEntity";
import { Repository } from "typeorm";


@Service()
export class UserDAO {

   @Inject(RepositoryFactory.UserEntity)
   private userRepository: Repository<UserEntity> ;

   async getAll() :Promise<UserEntity[]> {
      return this.userRepository.find() ;
   }
 
   async addNew(entity: UserEntity) { 
      return this.userRepository.save(entity) ;
   }
 
   async getById(id: number) {
      return this.userRepository.findOne(id) ;
   }

   async getByToken(token: string) {
     return this.userRepository.findOne(token) ;
   }

   async updateById(id: number, entity: UserEntity) {
      return this.userRepository.update(id, entity);
   }
 
   async deleteById(id: number) {
      return this.userRepository.delete(id);
   }
}