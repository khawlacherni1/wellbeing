import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Topic} from "../topic";
import {TopicService} from "../topic.service";


@Component({
  selector: 'app-create-topic',
  templateUrl: './create-topic.component.html',
  styleUrls: ['./create-topic.component.scss']
})
export class CreateTopicComponent implements OnInit {

  topic: Topic = new Topic();
  constructor(private topicService: TopicService,
              private router: Router) { }

  ngOnInit(): void {
  }

  saveTopic(){
    this.topicService.addTopic(this.topic).subscribe( data =>{
          console.log(data);
          //this.goToEmployeeList();
        },
        error => console.log(error));
  }

  /*goToEmployeeList(){
    this.router.navigate(['/employees']);
  }*/

  onSubmit(){
    console.log(this.topic);
    this.saveTopic();
  }
}

