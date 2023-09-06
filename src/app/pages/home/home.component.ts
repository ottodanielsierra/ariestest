import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private http:HttpClient, private router:Router) {}

  characters:any = [];

  ngOnInit() {
    this.http.get<any>("https://hp-api.onrender.com/api/characters").subscribe(response=>{
      console.log(response);
      this.characters = response.filter((c:any) => c.image);
    });
  }

  viewCharacter(character_id:string) {
    this.router.navigate(['character', character_id]);
  }

}
