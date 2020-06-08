
import {Interceptor, InterceptorInterface, Action} from "routing-controllers";

export class StringCorrectionInterceptor implements InterceptorInterface {

    intercept(action: Action, content: any) {
        return content.replace("  ", " ");
    }

}