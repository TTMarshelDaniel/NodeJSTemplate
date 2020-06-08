import { Service } from "typedi";
import { Mapper } from "./Mapper";
import { ClientEntity } from "../../4-data-layer/entity/ClientEntity";
import { ClientDTO } from "../dto/ClientDTO";


@Service()
export class ClientMapper extends Mapper<ClientEntity, ClientDTO> {
   
    mapToDTO(entity: ClientEntity): ClientDTO {

        if (entity === null || entity === undefined) return null ;

        let dto = new ClientDTO () ;
        dto.clientId = entity.clientId ;
        dto.userName = entity.userName ;
        dto.password = entity.password ;
        dto.isDeleted = entity.isDeleted ;
        dto.createdDate = entity.createdDate ;
        dto.modifiedDate = entity.modifiedDate ; 

        return dto ;

    }

    mapToEntity(dto : ClientDTO): ClientEntity {
        
        if (dto === null || dto === undefined) return null ;

        let entity = new ClientEntity () ;
        
        entity.clientId = dto.clientId ;
        entity.userName = dto.userName ;
        entity.password = dto.password ;
        entity.isDeleted = dto.isDeleted ;
        entity.createdDate = dto.createdDate ;
        entity.modifiedDate = dto.modifiedDate ; 

        return entity ;
    } 
} 