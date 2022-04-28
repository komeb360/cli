import {
    green,
    red
} from 'https://deno.land/std@0.136.0/fmt/colors.ts';

export function parse(args:string[]) {
    const flags: string[] = [];
    const commands: string[] = [];

    for (let i = 0; i < args.length; i++) {
        const arg = args[i];
        
        if (arg[0] === '-') {
            flags.push(arg);
        } else {
            commands.push(arg);
        }
    }

    return {
        flags,
        commands
    };
}
export function done(...message: any) {
    console.log(green(`✔ ${message}`));
}
export function error(...message: any) {
    console.log(red(`✖ ${message}`));
}