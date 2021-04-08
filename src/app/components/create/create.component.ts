import { Component, OnInit } from '@angular/core';
import { withLatestFrom } from 'rxjs-compat/operator/withLatestFrom';
import {Project} from '../../models/project';
import  {ProjectService} from '../../services/project.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [ProjectService]
})
export class CreateComponent implements OnInit {

  public title: string;
  public project: Project;
  public status: boolean | undefined;

  

  
  constructor(
    private _projectService: ProjectService
  ){ 
    this.title =" Crear Projecto";
    this. project = new Project('','','','',2021,'','');
    this.status = undefined;
  }

  ngOnInit(): void {
  };

  onSubmit(form: any){
   
    //Guardar los datps
    this._projectService.saveProject(this.project).subscribe(
      response => {
        if(response.project){
          
    
            this.status =true;
           
            form.reset();
      
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
