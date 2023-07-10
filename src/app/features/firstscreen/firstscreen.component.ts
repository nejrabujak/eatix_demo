import {Component} from '@angular/core';
import {Route} from '../../contraints/route.constants';

@Component({
    selector: 'app-firstscreen',
    templateUrl: './firstscreen.component.html',
    styleUrls: ['./firstscreen.component.css']
})
export class FirstscreenComponent {
    public route = Route;

}
