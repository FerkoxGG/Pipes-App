import { Component } from "@angular/core";
import { interval, tap } from "rxjs";

@Component({
  selector: "app-uncommon-page",
  templateUrl: "./uncommon-page.component.html",
  styles: ``,
})
export class UncommonPageComponent {
  // i18n Select
  public name: string = "Fernando";
  public gender: "male" | "female" | "no existe" = "male";
  public invitationMap = {
    male: "invitarlo",
    female: "invitarla",
  };

  changeClient(): void {
    this.name = "Melisa";
    this.gender = "female";
  }

  // i18nPlural
  public clients: string[] = [
    "Maria",
    "Pedro",
    "Fernando",
    "Hernando",
    "Eduardo",
    "Melissa",
    "Natalia",
  ];
  public clientsMap = {
    "=0": "no tenemos ningún cliente esperando.",
    "=1": "tenemos un cliente esprando.",
    "=2": "tenemos 2 clientes esperando.",
    other: "tenemos # clientes esperando.",
  };
  deleteClient(): void {
    this.clients.shift();
  }

  // Json Pipe  // KeyValue Pipe

  public person = {
    name: "Fernando",
    age: 27,
    address: "Concepción, Chile",
  };

  // Async Pipe
  public myObservableTimer = interval(2000).pipe(
    tap(value => console.log("tap", value))
  );

  public promiseValue = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Tenemos data en la promesa.");
    }, 3500);
  });
}
