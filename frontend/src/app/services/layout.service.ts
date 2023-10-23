import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  private _isMobile: boolean;
  private _isTablet: boolean;

  set isMobile(isMobile: boolean) {
    this._isMobile = isMobile;
    this.$isMobileChanged.next(isMobile);
  }

  set isTablet(isTablet: boolean) {
   this._isTablet = isTablet;
   this.$isTabletChanged.next(isTablet);
 }

  get isMobile() {
    return this._isMobile;
  }

  get isTablet() {
   return this._isTablet;
 }

  $isMobileChanged = new Subject<boolean>();
  $isTabletChanged = new Subject<boolean>();
}
