import { Service, Inject } from "typedi";
import { Repository, TreeRepository } from "typeorm";

import { CategoryTreeEntity } from "../../4-data-layer/entity/CategoryTreeEntity";
import { RepositoryFactory } from "../../4-data-layer/repository/RepositoryFactory";
import { CategoryDTO } from "../dto/CategoryDTO";
import { CategoryMapper } from "../mapper/CategoryMapper";
import { BasicDAO } from "./BasicDAO";
import { Logger } from "../../5-system-wide-layer/Logger/Logger";
import { Mapper } from "../mapper/Mapper";


@Service()
export class CategoryTreeDAO extends BasicDAO<CategoryTreeEntity, CategoryDTO> {
    

    @Inject(RepositoryFactory.CategoryTreeEntity) 
    private repository: TreeRepository<CategoryTreeEntity> ;

    @Inject() 
    private mapper: CategoryMapper ;


    protected getRepository(): Repository<CategoryTreeEntity> {
        return this.repository ;
    }
    protected getMapper(): CategoryMapper {
        return this.mapper ;
    }

//    constructor() {
//        super() ;
//        super.repository = this.repository ;
//        super.mapper = this.mapper ;

//        Logger.Info("CategoryTreeDAO.repository", this.repository) ;
//        Logger.Info("CategoryTreeDAO.mapper", this.mapper) ;
//    } 

    // constructor(@Inject(RepositoryFactory.CategoryTreeEntity) repository: TreeRepository<CategoryTreeEntity>, @Inject() mapper: CategoryMapper) { 
    //    super(repository, mapper) ;
    // }
}