import { Service } from "typedi";
import { CategoryTreeEntity } from "../../4-data-layer/entity/CategoryTreeEntity";
import { CategoryDTO } from "../dto/CategoryDTO";
import { Mapper } from "./Mapper";


@Service()
export class CategoryMapper extends Mapper<CategoryTreeEntity, CategoryDTO> {
   
    mapToDTO(entity: CategoryTreeEntity): CategoryDTO {

        if (entity === null || entity === undefined) return null ;

        let dto = new CategoryDTO () ;

        return dto ; 
    }

    mapToEntity(dto : CategoryDTO): CategoryTreeEntity {
        
        if (dto === null || dto === undefined) return null ;

        let entity = new CategoryTreeEntity () ;

        return entity ;
    } 
}


