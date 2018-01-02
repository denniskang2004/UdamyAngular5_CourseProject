import {NgModule} from '@angular/core';
import {AppDropdownDirective} from './app-dropdown.directive';
import {CommonModule} from '@angular/common';


@NgModule({
  declarations:[
    AppDropdownDirective //dknote: by default, anything declared only available to this module, unless you export out.
  ],
  imports:[
    CommonModule
  ],
  exports:[
    AppDropdownDirective // dknote: to make it available to other modules, need export
  ]
})

export class SharedModule{

}
