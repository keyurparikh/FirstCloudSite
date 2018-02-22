import { Pipe, Directive } from "@angular/core";
import { PipeTransform } from "@angular/core/src/change_detection/pipe_transform";

@Pipe ({
    name: 'converToBold'
})

export class ConverToBold implements PipeTransform {   
    
    transform(value: string): string {
        return value.bold();
    }

}