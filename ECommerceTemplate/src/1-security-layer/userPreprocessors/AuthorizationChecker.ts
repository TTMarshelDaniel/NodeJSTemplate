
import { Action } from "routing-controllers";
import { Service, Inject } from "typedi";
import { UserDAO } from "../../3-domain-layer/dao/UserDAO";

@Service()
export class AuthorizationChecker {

    @Inject()
    private userDAO :UserDAO
    
    public async check(action: Action, roles: string[]) :Promise<boolean>  {
       
        try {

            const token = action.request.headers["authorization"];
            const user = await this.userDAO.getByToken(token);


            if (user && !roles.length) {
                return true;
            }

            // if (user && roles.find(role => user.roles.indexOf(role) !== -1)) {
                return true;
            // }



        // return false;
           
        } catch (err) {

          return false;
        }
    }
}