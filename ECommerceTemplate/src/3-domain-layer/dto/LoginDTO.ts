import { RoleDTO } from "./RoleDTO";

export class LoginDTO {

    loginId? :number;

    userId? :number;

    userName? :string;

    password? :string;

    role? :RoleDTO = RoleDTO.VISITOR;

    isDeleted? :boolean; 
} 