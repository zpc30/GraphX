import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { CommentCard, CommentsList } from 'src/app/model/comment-card.model';
import { Graphic } from 'src/app/model/graphic.model';
import { GraphicService } from 'src/app/service/graphic.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comments: CommentsList = new CommentsList()
  dateNow: Date = new Date()
  commentCard: number = 0;
  form: FormGroup = new FormGroup({
    author: new FormControl(''),
    text: new FormControl(''),
    date: new FormControl(this.dateNow)
  })

  constructor(private route: ActivatedRoute, private graphicService: GraphicService) { }

  params = {
    sort: 'date',
    sortDirection: 'desc',
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params)=> {
      this.commentCard = params['id']
      this.graphicService.getId(params['id'],this.params).subscribe({
        next: (response: CommentsList) => this.comments = response
      })
    })
  }

  onSubmit() {
    let newComment = new CommentCard(this.form.value)
    newComment.cards = this.commentCard
    this.graphicService.postComment(newComment).subscribe({
      next: (response: any) => {
        this.form.reset()
        this.ngOnInit()
      }
    })
  }
}
