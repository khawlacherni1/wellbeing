import { Component, OnInit } from '@angular/core';
import {Topic} from "../topic";
import {TopicService} from "../topic.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  Topics!: Topic[];

  constructor(private topicService: TopicService) {
  }

 // public copy: string;

  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees() {
    this.topicService.getAllTopic().subscribe(data => {
      this.Topics = data;
      console.log(data);
    });
  }
}
