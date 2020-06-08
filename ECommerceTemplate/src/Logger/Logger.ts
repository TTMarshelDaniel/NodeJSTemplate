
import { Chalk } from 'chalk'; 
import chalk = require('chalk');


export class Logger { 

    public static Info(tag = '', message :any) {  
        console.log(chalk.white.bold(process.title + '.' + tag + " : "), chalk.white(message))  
    }

    public static Error(tag = '', message :any) { 
        console.log(chalk.red.bold(process.title + '.' + tag + " : "), chalk.red(message)) 
    }
    
    public static Warning(tag = '', message :any) { 
        console.log(chalk.yellow.bold(process.title + '.' + tag + " : "), chalk.yellow(message)) 
    }

    public static Success(tag = '', message :any) { 
        console.log(chalk.green.bold(process.title + '.' + tag + " : "), chalk.green(message)) 
    } 
}