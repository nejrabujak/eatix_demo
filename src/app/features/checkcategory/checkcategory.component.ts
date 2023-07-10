import {Component} from '@angular/core';
import {Route} from '../../contraints/route.constants';

@Component({
    selector: 'app-checkcategory',
    templateUrl: './checkcategory.component.html',
    styleUrls: ['./checkcategory.component.css']
})
export class CheckcategoryComponent {
    public route = Route;

}
