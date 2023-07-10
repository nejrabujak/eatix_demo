import {Component} from '@angular/core';
import {Route} from '../../contraints/route.constants';

@Component({
    selector: 'app-category',
    templateUrl: './category.component.html',
    styleUrls: ['./category.component.css']
})
export class CategoryComponent {
    public route = Route;

}
