import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import construct = Reflect.construct;

@Injectable()

export class NewYorkTimesService {

    apiKey:string = 'cc9bdd017e2549809642441dab877d85';

    daysInterval:number  = 1;

    constructor(private http: Http) {
        console.log("PostsService Intialized");

    }

    getPosts(){
        return this.http.get('https://api.nytimes.com/svc/mostpopular/v2/mostviewed/all-sections/'+this.daysInterval+'.json?api-key=' + this.apiKey)
            .map(res => res.json());
    }

    getPost(title:string){

        return this.http.get('https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=' + this.apiKey+'&q='+title)
            .map(res => res.json());
    }
}