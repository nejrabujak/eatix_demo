import {Component} from '@angular/core';
import {Route} from '../../contraints/route.constants';

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
    public route = Route;

}
