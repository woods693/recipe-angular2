import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  //Property needs to be pu8blic because its going to bind to the template
  //Angular ony binds to public component properties
  constructor(public messageService: MessageService) { }

  ngOnInit(): void {
  }

}
