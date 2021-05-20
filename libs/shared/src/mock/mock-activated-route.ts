import { Observable, of } from 'rxjs';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Data,
  ParamMap,
  Params,
  Route,
  UrlSegment,
  convertToParamMap,
} from '@angular/router';
import { Type } from '@angular/core';
export class MockActivatedRoute implements ActivatedRoute {
  get paramMap(): Observable<ParamMap> {
    return of(convertToParamMap({ id: 1 }));
  }
  get queryParamMap(): Observable<ParamMap> {
    throw new Error('Method not implemented.');
  }
  snapshot: ActivatedRouteSnapshot;
  url: Observable<UrlSegment[]>;
  params: Observable<Params>;
  queryParams: Observable<Params>;
  fragment: Observable<string>;
  data: Observable<Data>;
  outlet: string;
  component: Type<any> | string;
  routeConfig: Route;
  root: ActivatedRoute;
  parent: ActivatedRoute;
  firstChild: ActivatedRoute;
  children: ActivatedRoute[];
  pathFromRoot: ActivatedRoute[];
  toString(): string {
    return '';
  }
}
