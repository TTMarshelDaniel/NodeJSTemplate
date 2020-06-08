import { Service, Inject } from "typedi";
import { Repository, TreeRepository } from "typeorm";
import { CategoryTreeEntity } from "../entity/CategoryTreeEntity";
import { RepositoryFactory } from "../repository/RepositoryFactory";


@Service()
export class CategoryTreeDAO {

    @Inject(RepositoryFactory.CategoryTreeEntity) 
    private categoryTreeRepository: TreeRepository<CategoryTreeEntity> ;

    async getAll() :Promise<CategoryTreeEntity[]> {
        return this.categoryTreeRepository.find() ;
     }
   
     async addNew(entity: CategoryTreeEntity) {
        return this.categoryTreeRepository.save(entity) ;
     }
   
     async getById(id: number) {
        return this.categoryTreeRepository.findOne(id) ;
     }
    
     async updateById(id: number, entity: CategoryTreeEntity) {
        return this.categoryTreeRepository.update(id, entity);
     }
   
     async deleteById(id: number) {
        return this.categoryTreeRepository.delete(id);
     }

}