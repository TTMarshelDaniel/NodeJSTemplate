import { Service, Inject } from "typedi";
import { Repository } from "typeorm";

import { RepositoryFactory } from "../../4-data-layer/repository/RepositoryFactory";
import { UserEntity } from "../../4-data-layer/entity/UserEntity";
import { UserMapper } from "../mapper/UserMapper";
import { BasicDAO } from "./BasicDAO";
import { UserDTO } from "../dto/UserDTO";


@Service()
export class UserDAO extends BasicDAO<UserEntity, UserDTO> {

   // repository: Repository<UserEntity> ;
   // mapper: UserMapper ;

   @Inject(RepositoryFactory.UserEntity) 
   private repository: Repository<UserEntity> ;

   @Inject() 
   private mapper: UserMapper ;

   protected getRepository(): Repository<UserEntity> {
    return this.repository ;
  }

  protected getMapper(): UserMapper {
    return this.mapper ;
  }

  // constructor() {
  //     super() ;
  //     super.repository = this.repository ;
  //     super.mapper = this.mapper ;
  // } 

//    constructor(@Inject(RepositoryFactory.UserEntity) repository: Repository<UserEntity>, @Inject() mapper: UserMapper) {
//       super(repository, mapper) ;
//   }  

  public async getByToken(id :number) :Promise<UserDTO> {
     
      let entity = await this.repository.findOne(id);
      return this.mapper.mapToDTO(entity) ;
   } 

} 