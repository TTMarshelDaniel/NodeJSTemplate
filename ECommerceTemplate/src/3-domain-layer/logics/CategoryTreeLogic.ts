import { Service, Inject } from "typedi";

import { ClientDAO } from "../dao/ClientDAO";
import { ClientEntity } from "../../4-data-layer/entity/ClientEntity";
import { CategoryTreeDAO } from "../dao/CategoryTreeDAO";
import { CategoryTreeEntity } from "../../4-data-layer/entity/CategoryTreeEntity";


@Service()
export class CategoryTreeLogic {
 
    @Inject()
    private categoryTreeDAO: CategoryTreeDAO ;

    async getAll() :Promise<CategoryTreeEntity[]> {

       let clients = await this.categoryTreeDAO.getAll() ; 
       return clients ;
    }

    async add(category :CategoryTreeEntity) :Promise<CategoryTreeEntity> {

        category = await this.categoryTreeDAO.addNew(category) ; 
        return category ;
     }
}


