import { Component, OnInit } from '@angular/core';
import { GraphicList } from '../model/graphic.model';
import { GraphicService } from '../service/graphic.service';

@Component({
  selector: 'app-graphics-list',
  templateUrl: './graphics-list.component.html',
  styleUrls: ['./graphics-list.component.css']
})
export class GraphicsListComponent implements OnInit {
  graphics: GraphicList = new GraphicList()
  btnGroup: number[] = [5,10,15]

  constructor(private graphicService: GraphicService) { }

  params = {
    page: 1,
    pageSize: 3,
  }

  ngOnInit(): void {
    this.graphicService.getAll(this.params).subscribe({
      next: (response: GraphicList) => this.graphics = response
    })
  }

  perPage(event: any) {
    this.params.pageSize = event.target.firstChild.data
    this.ngOnInit()
  }

  pageUpdate(event: any) {
    this.params.page = event
    this.ngOnInit()
  }

  cardVote(event: any) {
    this.ngOnInit()
  }
}
