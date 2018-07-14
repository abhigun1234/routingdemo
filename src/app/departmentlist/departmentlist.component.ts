import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
@Component({
  selector: 'app-departmentlist',
  templateUrl: './departmentlist.component.html',
  styleUrls: ['./departmentlist.component.css']
})
export class DepartmentlistComponent implements OnInit {
 deptlist=[{"id":1,name:'machanical'},
 {"id":2,name:'electrical'},
 {"id":3,name:'computers' }
 ]
  constructor(private router :Router) { }

  ngOnInit() {
  }
  onSelect(dls)
  {
    this.router.navigate(['departments',dls])

  }

}
