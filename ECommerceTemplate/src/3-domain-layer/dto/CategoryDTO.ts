

export class CategoryDTO {

    id: number;

    name: string;

    description: string;

    level: number;

    parent: CategoryDTO;

    children: CategoryDTO[];
}