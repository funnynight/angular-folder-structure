import { Component, OnInit, Input } from '@angular/core';

import { Project } from '../../../../data/schema/project';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss']
})
export class ProjectItemComponent implements OnInit {
  @Input() project: Project;
  flipped = false;

  constructor() {}

  ngOnInit() {}
}
