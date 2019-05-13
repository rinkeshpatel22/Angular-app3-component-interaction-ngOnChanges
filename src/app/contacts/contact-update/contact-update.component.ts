import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-contact-update',
  templateUrl: './contact-update.component.html',
  styleUrls: ['./contact-update.component.css']
})
export class ContactUpdateComponent implements OnChanges{

  @Input() contacts: any;

  ngOnChanges(){
    alert('Input value chnaged from parent component. It is deteced in child component.');
  }
}
