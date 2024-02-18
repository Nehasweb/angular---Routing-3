import { Routes } from '@angular/router';
import { TechdemoComponent } from './techdemo/techdemo.component';
import { BookdemoComponent } from './bookdemo/bookdemo.component';
import { WrongchoiceComponent } from './wrongchoice/wrongchoice.component';

export const routes: Routes = [
    {path : 'technologies', component : TechdemoComponent},
    {path : 'books', component : BookdemoComponent},
    {path : '', component : TechdemoComponent},
    {path : '**', component : WrongchoiceComponent}
];
