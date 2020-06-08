import { Service } from "typedi";
import { RoleEntity } from "../../4-data-layer/entity/RoleEntity";
import { RoleDTO } from "../dto/RoleDTO";
import { Mapper } from "./Mapper";


@Service()
export class RoleMapper extends Mapper<RoleEntity, RoleDTO> {

    mapToDTO(entity: RoleEntity): RoleDTO {

        if (entity === null || entity === undefined) return RoleDTO.VISITOR ;

        switch (entity) {

            case RoleEntity.VISITOR : return RoleDTO.VISITOR ;
            case RoleEntity.SUPER_ADMIN : return RoleDTO.SUPER_ADMIN ;
            case RoleEntity.ADMIN : return RoleDTO.ADMIN ;
            case RoleEntity.SELLER : return RoleDTO.SELLER ;
            case RoleEntity.CLIENT : return RoleDTO.CLIENT ;
        }
    }

    mapToEntity(dto: RoleDTO): RoleEntity { 

        if (dto === null || dto === undefined) return RoleEntity.VISITOR ;

        switch (dto) {
            
            case RoleDTO.VISITOR : return RoleEntity.VISITOR ;
            case RoleDTO.SUPER_ADMIN : return RoleEntity.SUPER_ADMIN ;
            case RoleDTO.ADMIN : return RoleEntity.ADMIN ;
            case RoleDTO.SELLER : return RoleEntity.SELLER ;
            case RoleDTO.CLIENT : return RoleEntity.CLIENT ;
        }
    }

}
