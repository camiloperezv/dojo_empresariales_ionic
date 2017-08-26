import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GithubProvider } from '../../providers/github/github'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit{
  user:any = {}
  repos:any = {}
  userId:string;
  constructor(public navCtrl: NavController, private github:GithubProvider) {

  }
  getUsers():void{
    console.log('lalalala',this.userId)
    this.github.getUser(this.userId)
      .then(success=>{
          this.user = success;
          console.log('the user is',success)
        },error=>{
          this.user = {
            "login": "cperezvinsite",
            "id": 13039748,
            "avatar_url": "https://avatars1.githubusercontent.com/u/13039748?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/cperezvinsite",
            "html_url": "https://github.com/cperezvinsite",
            "followers_url": "https://api.github.com/users/cperezvinsite/followers",
            "following_url": "https://api.github.com/users/cperezvinsite/following{/other_user}",
            "gists_url": "https://api.github.com/users/cperezvinsite/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/cperezvinsite/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/cperezvinsite/subscriptions",
            "organizations_url": "https://api.github.com/users/cperezvinsite/orgs",
            "repos_url": "https://api.github.com/users/cperezvinsite/repos",
            "events_url": "https://api.github.com/users/cperezvinsite/events{/privacy}",
            "received_events_url": "https://api.github.com/users/cperezvinsite/received_events",
            "type": "User",
            "site_admin": false,
            "name": "Camilo Pérez",
            "company": "Insite SAS",
            "blog": "",
            "location": "Colombia",
            "email": null,
            "hireable": null,
            "bio": "Software Developer and team leader ",
            "public_repos": 3,
            "public_gists": 0,
            "followers": 0,
            "following": 2,
            "created_at": "2015-06-24T21:12:20Z",
            "updated_at": "2017-08-26T13:38:34Z"
          }
      })
      .catch((err)=>{
        this.user = {
          "login": "cperezvinsite",
          "id": 13039748,
          "avatar_url": "https://avatars1.githubusercontent.com/u/13039748?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/cperezvinsite",
          "html_url": "https://github.com/cperezvinsite",
          "followers_url": "https://api.github.com/users/cperezvinsite/followers",
          "following_url": "https://api.github.com/users/cperezvinsite/following{/other_user}",
          "gists_url": "https://api.github.com/users/cperezvinsite/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/cperezvinsite/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/cperezvinsite/subscriptions",
          "organizations_url": "https://api.github.com/users/cperezvinsite/orgs",
          "repos_url": "https://api.github.com/users/cperezvinsite/repos",
          "events_url": "https://api.github.com/users/cperezvinsite/events{/privacy}",
          "received_events_url": "https://api.github.com/users/cperezvinsite/received_events",
          "type": "User",
          "site_admin": false,
          "name": "Camilo Pérez",
          "company": "Insite SAS",
          "blog": "",
          "location": "Colombia",
          "email": null,
          "hireable": null,
          "bio": "Software Developer and team leader ",
          "public_repos": 3,
          "public_gists": 0,
          "followers": 0,
          "following": 2,
          "created_at": "2015-06-24T21:12:20Z",
          "updated_at": "2017-08-26T13:38:34Z"
        }
        console.log('the error on init is',err,this.user)
      })
  }
  ngOnInit():void{
    this.userId = 'cperezvinsite'
    this.github.getUser(this.userId)
      .then(success=>{
          this.user = success;
        },error=>{
          this.user = {
            "login": "cperezvinsite",
            "id": 13039748,
            "avatar_url": "https://avatars1.githubusercontent.com/u/13039748?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/cperezvinsite",
            "html_url": "https://github.com/cperezvinsite",
            "followers_url": "https://api.github.com/users/cperezvinsite/followers",
            "following_url": "https://api.github.com/users/cperezvinsite/following{/other_user}",
            "gists_url": "https://api.github.com/users/cperezvinsite/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/cperezvinsite/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/cperezvinsite/subscriptions",
            "organizations_url": "https://api.github.com/users/cperezvinsite/orgs",
            "repos_url": "https://api.github.com/users/cperezvinsite/repos",
            "events_url": "https://api.github.com/users/cperezvinsite/events{/privacy}",
            "received_events_url": "https://api.github.com/users/cperezvinsite/received_events",
            "type": "User",
            "site_admin": false,
            "name": "Camilo Pérez",
            "company": "Insite SAS",
            "blog": "",
            "location": "Colombia",
            "email": null,
            "hireable": null,
            "bio": "Software Developer and team leader ",
            "public_repos": 3,
            "public_gists": 0,
            "followers": 0,
            "following": 2,
            "created_at": "2015-06-24T21:12:20Z",
            "updated_at": "2017-08-26T13:38:34Z"
          }
      })
      .catch((err)=>{
        this.user = {
          "login": "cperezvinsite",
          "id": 13039748,
          "avatar_url": "https://avatars1.githubusercontent.com/u/13039748?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/cperezvinsite",
          "html_url": "https://github.com/cperezvinsite",
          "followers_url": "https://api.github.com/users/cperezvinsite/followers",
          "following_url": "https://api.github.com/users/cperezvinsite/following{/other_user}",
          "gists_url": "https://api.github.com/users/cperezvinsite/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/cperezvinsite/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/cperezvinsite/subscriptions",
          "organizations_url": "https://api.github.com/users/cperezvinsite/orgs",
          "repos_url": "https://api.github.com/users/cperezvinsite/repos",
          "events_url": "https://api.github.com/users/cperezvinsite/events{/privacy}",
          "received_events_url": "https://api.github.com/users/cperezvinsite/received_events",
          "type": "User",
          "site_admin": false,
          "name": "Camilo Pérez",
          "company": "Insite SAS",
          "blog": "",
          "location": "Colombia",
          "email": null,
          "hireable": null,
          "bio": "Software Developer and team leader ",
          "public_repos": 3,
          "public_gists": 0,
          "followers": 0,
          "following": 2,
          "created_at": "2015-06-24T21:12:20Z",
          "updated_at": "2017-08-26T13:38:34Z"
        }
        console.log('the error on init is',err,this.user)
      })
  }
  goToRepos():void{
    console.log('going to repos')
    this.github.getRepo('cperezvinsite').then(success=>{
        this.repos = success;
      },error=>{
        console.log('error getting repos')
    })
    .catch((err)=>{
      console.log('the error on init is',err,this.user)
    })
  }
}
