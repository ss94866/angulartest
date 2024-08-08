import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CommonModule, NgFor } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, NgFor, ReactiveFormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
  providers: [ApiService]
})
export class ProfileComponent {
  data: any = [];
  titleFC = new FormControl('');
  constructor(private apiService: ApiService) {
  }

  // ngOnInit(): void {
  //   this.data = this.apiService.getNumbers()
  // }


  getNumbers() {
    console.log(this.apiService.getNumbers())
  }

  retrievePost(){
    this.apiService.getPosts({
      id: 0,
      userId: 2,
      body: "test",
      title: this.titleFC.value || ""
    }).subscribe(res => {
      this.data = res
    })
  }

}
