import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent {
  contactList:any = [{ name: 'Rinkesh', mobile: '0987654321'}];
 
  public updateFromParent(): void{
    this.contactList = [{ name: 'Rinkesh', mobile: '999999999'}];
  }
}
