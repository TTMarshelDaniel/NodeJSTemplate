import { Service, Inject } from "typedi";
import { LoginEntity } from "../../4-data-layer/entity/LoginEntity";
import { LoginDTO } from "../dto/LoginDTO";
import { Mapper } from "./Mapper";
import { RoleMapper } from "./RoleMapper";
import { Logger } from "../../5-system-wide-layer/Logger/Logger";
import { JSONUtil } from "../../5-system-wide-layer/utils/JSONUtil";


@Service()
export class LoginMapper extends Mapper<LoginEntity, LoginDTO> {
   
    @Inject () 
    private roleMapper :RoleMapper
    
    mapToDTO(entity :LoginEntity): LoginDTO {

        if (entity === null || entity === undefined) return null ;

        let dto = new LoginDTO () ;

        dto.loginId = entity.loginId ;
        dto.userId = entity.userId ;
        dto.userName = entity.userName ;
        dto.password = entity.password ;
        dto.isDeleted = entity.isDeleted ; 

        dto.role = this.roleMapper.mapToDTO(entity.role) ;

        return dto ; 
    }

    mapToEntity(dto :LoginDTO): LoginEntity {
        
        if (dto === null || dto === undefined) return null ;

        let entity = new LoginEntity () ;

        entity.loginId = dto.loginId ;
        entity.userId = dto.userId ;
        entity.userName = dto.userName ;
        entity.password = dto.password ;
        entity.isDeleted = dto.isDeleted ; 

        entity.role = this.roleMapper.mapToEntity(dto.role) ;

        return entity ;
    } 
} 