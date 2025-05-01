import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Student } from '../interfaces/student';


@Component({
  selector: 'app-students',
  imports: [],
  providers: [HttpClient],
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss'
})
export class StudentsComponent implements OnInit{
  studentsAPI = "http://localhost:4001/students";
  studentsLocalArray:Student[] = [];

  constructor(private http: HttpClient){

  }

  ngOnInit(): void {
    this.http.get< Student[] >(this.studentsAPI).subscribe( studentsDataFromServer => {
      //inside this block - execute after the API returns data
      // console.log(students);
      this.studentsLocalArray = studentsDataFromServer;
      console.log('Students Local Array:', this.studentsLocalArray);
    })
  }

}
