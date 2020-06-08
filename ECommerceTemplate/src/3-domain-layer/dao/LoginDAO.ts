import { Repository } from "typeorm";
import { Inject, Service } from "typedi";

import { LoginEntity } from "../../4-data-layer/entity/LoginEntity";
import { RepositoryFactory } from "../../4-data-layer/repository/RepositoryFactory";
import { LoginDTO } from "../dto/LoginDTO";
import { BasicDAO } from "./BasicDAO";
import { LoginMapper } from "../mapper/LoginMapper";


@Service()
export class LoginDAO extends BasicDAO<LoginEntity, LoginDTO> {


   @Inject(RepositoryFactory.LoginEntity) 
   private repository: Repository<LoginEntity> ;
   
   @Inject() 
   private mapper: LoginMapper ;

   
   protected getRepository(): Repository<LoginEntity> {
      return this.repository ;
   }

   protected getMapper(): LoginMapper {
      return this.mapper ;
   } 
}