import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "canFly"
})
export class CanFlyPipe implements PipeTransform {
  transform(value: boolean): "vuela" | "No vuela" {
    return value ? "vuela" : "No vuela";
  }
}
