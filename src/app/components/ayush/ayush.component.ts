import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component ({
    selector:'ayush',
    templateUrl:'./ayush.component.html',
    styleUrls:['./ayush.component.css'],
})

export class AyushComponent{
        users:any[];
        
        constructor(public dataService:DataService){
            this.dataService.getUsers().subscribe(users=> {
                this.users = users; 
            }

            )
        }
    }