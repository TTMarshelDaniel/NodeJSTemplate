

import "reflect-metadata"; // this shim is required
import {createExpressServer, createKoaServer, useContainer, RoutingControllersOptions, Action} from "routing-controllers";

import { RepositoryFactory } from "./repository/RepositoryFactory";
import { Logger } from "./Logger/Logger";
import { AuthorizationChecker } from "./preprocessors/AuthorizationChecker";
import { Container, Service, Inject } from "typedi";
import { CurrentUserChecker } from "./preprocessors/CurrentUserChecker";
 
const routePrefix = "/api" ;


@Service()
class Server {

    @Inject()
    private authorizationChecker :AuthorizationChecker;

    @Inject()
    private currentUserChecker :CurrentUserChecker;


    public start() { 

        const routingControllersOptions :RoutingControllersOptions  = {
        
            routePrefix: routePrefix,
            controllers: [__dirname + "/controllers/*.ts"] ,
        
            authorizationChecker: this.authorizationChecker.check ,
            currentUserChecker : this.currentUserChecker.check ,
        } ;

        useContainer(Container);

        // ExpressServer
        // const app = createExpressServer(routingControllersOptions);

        // KoaServer 
        const app = createKoaServer(routingControllersOptions);

        app.listen(3001);
  }
}


function initializeApp() {

    const routingControllersOptions :RoutingControllersOptions  = {

        routePrefix: routePrefix,
        controllers: [__dirname + "/controllers/*.ts"] ,
    
        // authorizationChecker: AuthorizationChecker.authorizationChecker ,
        //currentUserChecker
    } ;

    useContainer(Container);

    // ExpressServer
    // const app = createExpressServer(routingControllersOptions);

    // KoaServer 
    const app = createKoaServer(routingControllersOptions);

    app.listen(3001);
}

RepositoryFactory.initialize().then(v => {
 
    Logger.Success("DBConnection.isSuccess", ""); 
    initializeApp() ;

}).catch(error => {

    Logger.Error("DBConnection.error", error);
}) ; 
 
