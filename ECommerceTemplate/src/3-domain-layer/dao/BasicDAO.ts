import { Repository, ObjectLiteral } from "typeorm";
import { Mapper } from "../mapper/Mapper";
import { Service } from "typedi";


export abstract class BasicDAO<Entity extends ObjectLiteral, DTO> {

    
    protected abstract getRepository() :Repository<Entity> ;
    
    protected abstract getMapper() :Mapper<Entity, DTO> ;


    public async getAll() :Promise<DTO[]> { 

        let entities = await this.getRepository().find() ;
        return this.getMapper().mapToDTOList(entities) ;
    }
    
    public async addNew(dto :DTO) :Promise<DTO> {

        let entity = this.getMapper().mapToEntity(dto) ;
        entity = await this.getRepository().save(entity) ;
      
        return this.getMapper().mapToDTO(entity) ;
    }
    
    public async getById(id :number) :Promise<DTO> {
        let entity = await this.getRepository().findOne(id);
        return this.getMapper().mapToDTO(entity) ;
    } 
     
    public async updateById(id: number, dto: DTO) {

        let entity = this.getMapper().mapToEntity(dto) ;
        return await this.getRepository().update(id, entity) ;
    }
    
    public async deleteById(id: number) {
        return this.getRepository().delete(id);
    }
} 