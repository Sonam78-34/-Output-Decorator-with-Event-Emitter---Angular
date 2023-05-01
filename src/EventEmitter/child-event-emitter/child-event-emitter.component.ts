import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child-event-emitter',
  templateUrl: './child-event-emitter.component.html',
  styleUrls: ['./child-event-emitter.component.css']
})
export class ChildEventEmitterComponent 
{

  @Output() message : EventEmitter<any> =new EventEmitter();

  messageEmitFunction()
  {
    this.message.emit("Hii My name is Sonam Kumari and I am sending this message through event emitter output decorator");
  }

}
