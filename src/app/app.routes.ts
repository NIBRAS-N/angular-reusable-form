import { Routes } from '@angular/router';
import { ReusableFormComponent } from './reusable-components/reusable-form/reusable-form.component';
import { AppComponent } from './app.component';
import { WrapperComponentComponent } from './reusable-components/wrapper-component/wrapper-component.component';
export const routes: Routes = [
    {
        path:"originalForm",component:ReusableFormComponent
    },
    {
        path:"wrapperComponent", component:WrapperComponentComponent
    },
    {
        path:"" , redirectTo:"/originalForm" , pathMatch:"full"
    },
    { path: "**", component:AppComponent},
];
