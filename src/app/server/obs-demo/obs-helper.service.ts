import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';


@Injectable()
export class ObsHelperService {
  public obsHelper = new Subject();


}
