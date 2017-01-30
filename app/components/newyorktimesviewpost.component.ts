import {Component} from "@angular/core";
import { Router, ActivatedRoute } from '@angular/router';
import { NewYorkTimesService } from '../services/newyorktimes.service';


@Component({
    moduleId: module.id,
    selector: 'ny-posts',
    providers: [NewYorkTimesService],
    templateUrl: 'newyortimesviewpost.component.html',
})

export class NewYorkTimesViewPostComponent {

    post:Object;
    searchTerms:string;

    constructor(private _route: ActivatedRoute,private _router: Router, private postsService: NewYorkTimesService)
    {
         this.post = {};
         this.searchTerms = "";
          this._route.params.subscribe( params => {
            let title = params['title'];
            this.postsService.getPost(title).subscribe(post => {

                console.log("got the post");
                console.log(post.response.docs[0]);
                let post_title = post.response.docs[0].headline.main;
                let content = post.response.docs[0].lead_paragraph;
                let publish_dated = post.response.docs[0].pub_date;

                this.post = {
                    title: title,
                    abstract: content,
                    published_date: publish_dated
                }

            });

        });
    }

}

interface Post{


}
