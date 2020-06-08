

export abstract class Mapper<Entity, DTO> {
 
    mapToDTOList(entityList :Entity[]) :DTO[]  {

        let list : DTO[] = [] ;
        if (entityList === null || entityList === undefined || entityList.length < 1) return list ;

        entityList.forEach(entity => {
            
            let dto = this.mapToDTO(entity) ;
            if (dto !== null || dto !== undefined) {

                list.push(dto) ;
            }
        });

        return list ;
    }

     mapToEntityList(dtoList :DTO[]) :Entity[]  {

        let list : Entity[] = [] ;
        if (dtoList === null || dtoList === undefined || dtoList.length < 1) return list ;

        dtoList.forEach(dto => {
            
            let entity = this.mapToEntity(dto) ;
            if (entity !== null || entity !== undefined) {

                list.push(entity) ;
            }
        });

        return list ;
     }

    abstract mapToDTO(entity :Entity) :DTO ;

    abstract mapToEntity(dto :DTO) :Entity ;
}
