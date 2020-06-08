import "reflect-metadata";
import { createConnection, Connection, getConnection, getRepository, ObjectType, Repository, 
    TreeRepository, SelectQueryBuilder, getTreeRepository, getCustomRepository, createQueryBuilder as queryBuilder } from "typeorm";


// const options: ConnectionOptions = {
//     // ... other options
//     entities: [__dirname + "/entity/*.js"]
// };

// let connection = await createConnection(options);

// createConnection({
//     type: "mysql",
//     port: 3306,
//     entities: [
//         __dirname + "/entity/*.js"
//     ],
//     synchronize: true,
// }).then(async connection => {
    
//     console.log("Inserting a new user into the database...");
//     const user = new User();
//     user.firstName = "Timber";
//     user.lastName = "Saw";
//     user.age = 25;
//     await connection.manager.save(user);
//     console.log("Saved a new user with id: " + user.id);

//     console.log("Loading users from the database...");
//     const users = await connection.manager.find(User);
//     console.log("Loaded users: ", users);

//     let userRepository = connection.getRepository(User);
//     let allPhotos = await userRepository.find();

//     console.log("Here you can setup and run express/koa/any other framework.");

// }).catch(error => console.log(error));


export class DBConnection {

    private static connection? :Connection = null;
     
    private constructor(conn :Connection) {      
    }

    public static connect() :Promise<DBConnection> {
 
        return new Promise<DBConnection>((resolve, reject) => {

            createConnection().then(async connection => {  

                if (connection.isConnected === true) {
     
                    DBConnection.connection = connection ; 
                    resolve(new DBConnection(connection)) ;
                } else {
      
                    reject('DBConnection.connection.isConnected == false') ;
                }
            }).catch(error => {

                reject(error) ; 
            });
        }) ; 
    }

    public createRepository<Entity>(entityClass: ObjectType<Entity>) :Repository<Entity> {
        return getRepository(entityClass) ;
    }

    public createTreeRepository<Entity>(entityClass: ObjectType<Entity>) :TreeRepository<Entity> {
        return getTreeRepository(entityClass) ;
    }

    public createCustomRepository<T>(entityClass: ObjectType<T>) :T {
        return getCustomRepository(entityClass) ;
    }

    public createQueryBuilder<Entity>(entityClass: ObjectType<Entity>) :SelectQueryBuilder<Entity> {
        return queryBuilder(entityClass) ;
    }
}