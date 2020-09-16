import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-novo',
  templateUrl: './novo.component.html',
  styleUrls: ['./novo.component.scss']
})
export class NovoComponent implements OnInit {

  livroForm = new FormGroup({
    titulo: new FormControl('', Validators.required),
    autor: new FormControl('')
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(): boolean {
    return this.livroForm.valid;
  }

}
