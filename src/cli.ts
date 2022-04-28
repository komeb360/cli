import {
    parse,
    done,
    error
} from './functions.ts';
import config from '../config/default.ts';

export default async function (args: string[]) {
    const mainArg = args[0];
    const afterMainArgs = parse(args.slice(1));

    try {
        const commandArg = await import(`../lib/${mainArg}.ts`);

        done(`Command ${mainArg} (${mainArg}.ts) is fined.`);

        commandArg.main(afterMainArgs);
    } catch (errorDev) {
        error(`Cannot find main function or command ${mainArg} (${mainArg}.ts).`);

        if (config.dev) {
            console.log(errorDev);
        }
    }
}