import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router'

@Component({
  selector: 'app-dept-detail',
  templateUrl: './dept-detail.component.html',
  styleUrls: ['./dept-detail.component.css']
})
export class DeptDetailComponent implements OnInit {
  id=''
  name=''
  department;
  constructor(private route : ActivatedRoute,private router :Router) { }

  ngOnInit() {

    this.id=this.route.snapshot.paramMap.get('id')
    this.department=this.route.data
    alert(this.id)
  
  }
  showOverView()
  {
    this.router.navigate(['overview'],{relativeTo :this.route})

  }

}
