import { Component, OnInit } from '@angular/core';
import {Project} from '../../models/project';
import {ProjectService} from '../../services/project.service';
import {Global} from '../../services/global';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: '../create/create.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [ProjectService]
})
export class EditComponent implements OnInit {

  public title: string;
  public project!: Project;
  public status: boolean | undefined;

 
  
  constructor(
    private _projectService: ProjectService,
    private _router: Router,
    private _route: ActivatedRoute
  ){ 
    this.title ="Editar Projecto";
  
  }

  ngOnInit(): void {
    this._route.params.subscribe(params =>{
      let id = params.id;

      this.getProject(id);
    })
  }

  getProject(id: any){
    this._projectService.getProject(id).subscribe(
      response =>{
        this.project = response.project;
      },
      error =>{
        console.log(<any>error);
      }
    )
  }

  onSubmit(form: any){
   
    //Guardar los datps
    this._projectService.updateproject(this.project).subscribe(
      response => {
        if(response.project){
            this.status =true;
      
        }else{
          this.status=false;
        }
      },
      error => {
        console.log(<any>error);
      }
    )
  }
}
