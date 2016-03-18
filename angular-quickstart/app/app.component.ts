import {Component} from 'angular2/core';
import {UserComponent} from './user/user.component'

@Component({
    selector:'my-app',
    template:'<h1>My Angular 2 App</h1><user-list></user-list>',
    directives: [UserComponent]
})
export class AppComponent{
}