import { Service, Inject } from "typedi";
import { Repository } from "typeorm";

import { RepositoryFactory } from "../../4-data-layer/repository/RepositoryFactory";
import { ClientEntity } from "../../4-data-layer/entity/ClientEntity";
import { BasicDAO } from "./BasicDAO";
import { ClientDTO } from "../dto/ClientDTO";
import { ClientMapper } from "../mapper/ClientMapper";
import { Logger } from "../../5-system-wide-layer/Logger/Logger";


@Service()
export class ClientDAO extends BasicDAO<ClientEntity, ClientDTO> {

    @Inject(RepositoryFactory.ClientEntity)
    private repository: Repository<ClientEntity> ;

    @Inject() 
    private mapper: ClientMapper ;


    protected getRepository(): Repository<ClientEntity> {
        return this.repository ;
    }
    protected getMapper(): ClientMapper {
        return this.mapper ;
    }

//    constructor() {
//        super() ;
//        super.repository = this.repository ;
//        super.mapper = this.mapper ;

//        Logger.Info("ClientDAO.repository", this.repository) ;
//        Logger.Info("ClientDAO.mapper", this.mapper) ;
//    } 

}