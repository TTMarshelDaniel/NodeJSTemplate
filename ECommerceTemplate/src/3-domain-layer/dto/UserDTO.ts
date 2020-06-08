import { RoleDTO } from "./RoleDTO";

export class UserDTO {

    id? :number;

    firstName? :string;

    lastName? :string;

    age? :number;

    createdDate? :Date ;

    updatedDate :Date ;
 
    roles :RoleDTO = RoleDTO.VISITOR ;
}
