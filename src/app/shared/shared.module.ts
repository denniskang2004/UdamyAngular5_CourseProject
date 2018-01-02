import {NgModule} from '@angular/core';
import {AppDropdownDirective} from './app-dropdown.directive';
import {CommonModule} from '@angular/common';


@NgModule({
  declarations:[
    AppDropdownDirective
  ],
  imports:[
    CommonModule
  ],
  exports:[
    AppDropdownDirective
  ]
})

export class SharedModule{

}
