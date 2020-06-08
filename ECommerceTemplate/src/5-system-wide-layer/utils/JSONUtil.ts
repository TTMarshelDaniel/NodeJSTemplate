

export class JSONUtil {

    public static parse(string : string) {

        try {
            
            if (string === null || string === undefined || string === '') return JSON.parse('{}') ;
            return JSON.parse(string) ;
        } catch (error) {
            
            return JSON.parse('{}') ;
        }  
    } 

    public static stringify(object : Object) {

        try {
            
            if (object === null || object === undefined) return ""; 
            return JSON.stringify(object) ;
        } catch (error) {

            return '' ;
        } 
    }
}