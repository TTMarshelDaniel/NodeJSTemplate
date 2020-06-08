
import { Repository, TreeRepository, SelectQueryBuilder } from "typeorm";
import { Service, Container } from "typedi";

import { DBConnection } from "../DbConnection/DBConnection";
import { ClientEntity } from "../entity/ClientEntity";
import { LoginEntity } from "../entity/LoginEntity";
import { UserEntity } from "../entity/UserEntity";

import { CategoryTreeEntity } from "../entity/CategoryTreeEntity";


@Service()
export class RepositoryFactory {

    static UserEntity  = "UserEntity.Repository"
    static ClientEntity = "ClientEntity.Repository"
    static LoginEntity = "LoginEntity.Repository"
    static CategoryTreeEntity = "CategoryTreeEntity.Repository"
    

    public static initialize() :Promise<void> {

        return new Promise((resolve, reject) => {

            DBConnection.connect().then(dbConnection => {

                Container.set(RepositoryFactory.UserEntity, dbConnection.createRepository(UserEntity)) ; 
                Container.set(RepositoryFactory.ClientEntity, dbConnection.createRepository(ClientEntity)) ;
                Container.set(RepositoryFactory.LoginEntity, dbConnection.createRepository(LoginEntity)) ;


                Container.set(RepositoryFactory.CategoryTreeEntity, dbConnection.createTreeRepository(CategoryTreeEntity)) ;
                
              
                // RepositoryFactory.userQueryBuilder = dbConnection.createQueryBuilder(UserEntity) ;

                resolve() ;
            }).catch(err => {
    
                reject(err) ; 
            }) ;
        }); 
    } 
}