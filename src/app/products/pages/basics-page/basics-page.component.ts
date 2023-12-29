import { Component } from "@angular/core";

@Component({
  selector: "app-basics-page",
  templateUrl: "./basics-page.component.html",
  styles: ``
})
export class BasicsPageComponent {
  public nameLower: string = "fernando";
  public nameUpper: string = "FERNANDO";
  public fullName: string = "fErnAnDo gOnzáLeZ";

  public customDate: Date = new Date();
}
