import { Component ,OnInit} from '@angular/core';
import { Postservice } from '../postservice';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-posts',
  imports: [CommonModule],
  templateUrl: './posts.html',
  styleUrl: './posts.scss'
})
export class Posts implements OnInit  {

  apiResponse:any;
  constructor(private postSvc: Postservice) { }
  getPosts(){
    this.postSvc.getPosts().subscribe(response=>{
     this.apiResponse=response;
    });
  }

  ngOnInit(): void {
    this.getPosts();
  }

}
