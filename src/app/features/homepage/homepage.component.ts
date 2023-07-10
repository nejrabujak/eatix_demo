import {Component} from '@angular/core';
import {Route} from '../../contraints/route.constants';

@Component({
    selector: 'app-homepage',
    templateUrl: './homepage.component.html',
    styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
    public route = Route;

}
