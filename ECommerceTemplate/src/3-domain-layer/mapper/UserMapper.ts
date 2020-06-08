import { Mapper } from "./Mapper";
import { Service } from "typedi";
import { UserEntity } from "../../4-data-layer/entity/UserEntity";
import { UserDTO } from "../dto/UserDTO";


@Service()
export class UserMapper extends Mapper<UserEntity, UserDTO> {
   
    mapToDTO(entity: UserEntity): UserDTO {

        if (entity === null || entity === undefined) return null ;

        let dto = new UserDTO () ;

        return dto ;  
    }

    mapToEntity(dto : UserDTO): UserEntity {
        
        if (dto === null || dto === undefined) return null ;

        let entity = new UserEntity () ;

        return entity ;
    } 
}