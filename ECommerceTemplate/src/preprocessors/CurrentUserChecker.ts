


import { Action } from "routing-controllers";
import { UserEntity } from "../entity/UserEntity";
import { Service, Inject } from "typedi";
import { UserDAO } from "../dao/UserDAO";

@Service()
export class CurrentUserChecker {

    @Inject()
    private userDAO :UserDAO

    public async check(action: Action) :Promise<UserEntity>  {
       
        try {

            // here you can use request/response objects from action
        // you need to provide a user object that will be injected in controller actions
        // demo code:
            const token = action.request.headers["authorization"];
             return this.userDAO.getByToken(token);
        } catch (err) {

           return null;
        }
        

        // const user = await getEntityManager().findOneByToken(User, token);
        // if (user && !roles.length)
        //     return true;
        // if (user && roles.find(role => user.roles.indexOf(role) !== -1))
        //     return true;

        // return false;
    }
}