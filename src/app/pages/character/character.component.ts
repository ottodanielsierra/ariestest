import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent {
  constructor(private activatedRoute:ActivatedRoute, private http:HttpClient) {}

  character:any;

  ngOnInit() {
    let character_id = this.activatedRoute.snapshot.paramMap.get('id');

    this.http.get<any>("https://hp-api.onrender.com/api/character/" + character_id).subscribe(response=>{
      console.log(response);
      this.character = response[0];
    });
  }
}
