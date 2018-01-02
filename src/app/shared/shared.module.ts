import {NgModule} from '@angular/core';
import {AppDropdownDirective} from './app-dropdown.directive';
import {CommonModule} from '@angular/common';
import {BasicHightlightDirective} from '../server/directive/basic-hightlight.directive';
import {ResponsiveHighlightDirective} from '../server/directive/responsive-highlight.directive';
import {UnlessDirective} from '../server/directive/unless.directive';
import {BetterHightlightDirective} from '../server/directive/better-hightlight.directive';


@NgModule({
  declarations:[
    AppDropdownDirective, //dknote: by default, anything declared only available to this module, unless you export out.\
    BasicHightlightDirective,
    BetterHightlightDirective,
    ResponsiveHighlightDirective,
    UnlessDirective, // course demo directive
  ],
  imports:[
    CommonModule
  ],
  exports:[
    AppDropdownDirective, // dknote: to make it available to other modules, need export
    BasicHightlightDirective,
    BetterHightlightDirective,
    ResponsiveHighlightDirective,
    UnlessDirective, // course demo directive
  ]
})

export class SharedModule{

}
