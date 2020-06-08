import { Service, Inject } from "typedi";
import { ClientDAO } from "../dao/ClientDAO";
import { ClientEntity } from "../entity/ClientEntity";
import { CategoryTreeDAO } from "../dao/CategoryTreeDAO";
import { CategoryTreeEntity } from "../entity/CategoryTreeEntity";



@Service()
export class CategoryTreeLogic {
 
    @Inject()
    private categoryTreeDAO: CategoryTreeDAO ;

    async getAll() :Promise<CategoryTreeEntity[]> {

       let clients = await this.categoryTreeDAO.getAll() ; 
       return clients ;
   }
}


