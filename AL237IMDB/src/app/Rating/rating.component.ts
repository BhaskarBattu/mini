import {Component, OnInit} from '@angular/core';
import 'rxjs/add/operator/switchMap';
import {SigninCmponent} from "../user-management/signin.cmponent"
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {RatingService} from "./rating.service";
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {SigninService} from "../user-management/signin.service";

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: [ './rating.component.css' ]
})
export class RatingComponent implements OnInit{
  parseGiveRatingName: any;
  parseGiveRatingImagePath: any;
  username: any;
  commentResponse: any;


  commentForm: FormGroup;

  constructor(private router: Router, private route: ActivatedRoute,
              private ratingServie: RatingService, private _formBuilder: FormBuilder,
              private signinService: SigninService) { }


  ngOnInit(): void {
    this.route.params
      .subscribe((params: ParamMap) => { this.parseGiveRatingName = params['giveratingName'],
        this.parseGiveRatingImagePath = params['giveratingImage']; });


    this.commentForm = this._formBuilder.group({
      textareacomments: ['', [Validators.required]],
      rating: ['', [Validators.required]]
     // firstName: ['', [Validators.required]]
    });
    //this.signinService.username.subscribe(name => this.username = name);
    this.username=window.localStorage.getItem('username');

  }
  onSubmit() {
      if(this.username!=null) {
        this.ratingServie.postCommeents(this.commentForm.value.textareacomments, this.commentForm.value.rating, this.username, this.parseGiveRatingName)
          .subscribe((response) => {
            if (response.ok === true) {
              this.commentResponse = response.json();
              if (this.commentResponse !== true) {
                alert('comments are not inserted please try again or login');
                this.router.navigate(['/dashboard']);
              } else {
                alert('Your comments are added successfully');
                this.router.navigate(['/']);
              }
            }
          });
      }
  }
  goBack(): void {
    this.router.navigate(['/dashboard']);
  }
}
