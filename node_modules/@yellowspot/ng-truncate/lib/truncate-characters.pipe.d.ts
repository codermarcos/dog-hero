import { PipeTransform } from '@angular/core';
export declare class TruncateCharactersPipe implements PipeTransform {
    transform(value: string, limit?: number, trail?: string): string;
}
