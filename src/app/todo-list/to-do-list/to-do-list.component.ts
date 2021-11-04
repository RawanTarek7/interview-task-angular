import { Component, OnInit } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { GetActivityService } from 'src/app/Services/get-activity.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css'],
  animations: [
    trigger('fade', [
      transition('void=>*', [
        style({ color: 'grey', opacity: 0 }),
        animate(500, style({ color: 'white', opacity: 1 })),
      ]),
    ]),
  ],
})
export class ToDoListComponent implements OnInit {
  title = 'TODO list';

  recieveActivity1: string[] = [];
  recieveActivity2: string[] = [];
  recieveActivity3: string[] = [];

  getActivity1FromService() {
    this.recieveActivity1 = this.dService.activity1;
  }
  getActivity2FromService() {
    this.recieveActivity2 = this.dService.activity2;
  }
  getActivity3FromService() {
    this.recieveActivity3 = this.dService.activity3;
  }

  list: any[] = [];
  addTask(item: string) {
    this.list.push({ id: this.list.length, name: item });
    console.warn('list', this.list);
  }

  removeTask(id: number) {
    this.list = this.list.filter((item) => item.id !== id);
  }

  constructor(private dService: GetActivityService) {}

  ngOnInit(): void {}
}
