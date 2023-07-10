import {Component} from '@angular/core';
import {Route} from '../../contraints/route.constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public route = Route;

}
