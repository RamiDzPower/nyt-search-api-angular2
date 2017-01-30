import { Component } from "@angular/core";
import { NewYorkTimesService } from '../services/newyorktimes.service';

@Component({

    moduleId: module.id,
    selector: 'ny-posts',
    providers: [NewYorkTimesService],
    templateUrl: 'newyortimes.component.html',
})

export class NewYorkTimesComponent {

    posts:string;

    constructor(private postsService: NewYorkTimesService){

        this.postsService.getPosts().subscribe(resultPosts => {
            this.posts = resultPosts.results;
        });

    }
}

interface Post{

}
