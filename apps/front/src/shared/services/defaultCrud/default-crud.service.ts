/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoaderFeedbackService } from '@test-luizalabs/shared';
@Injectable({
  providedIn: 'root',
})
export class DefaultCrudService {
  private url = '@test-luizalabs-api/';
  constructor(
    private http: HttpClient,
    public snackBar: MatSnackBar,
    private loaderService: LoaderFeedbackService,
  ) {}
  httpGet(endPoint: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.loaderService.addLoad('httpGet');
      this.http.get(`${this.url}${endPoint}`).subscribe(
        (res: any) => {
          this.loaderService.removeLoad('httpGet');
          resolve(res);
        },
        (rej: HttpErrorResponse) => {
          const errorMessage = rej.error?.message ?? rej.message;
          this.loaderService.removeLoad('httpGet');
          this.snackBar.open(errorMessage, null, {
            duration: 2000,
          });
          reject(rej);
        }
      );
    });
  }
  httpDelete(endPoint: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.loaderService.addLoad('httpDelete');
      this.http.delete(`${this.url}${endPoint}`).subscribe(
        (res: any) => {
          this.snackBar.open(res.message, null, {
            duration: 2000,
          });
          resolve(res);
          this.loaderService.removeLoad('httpDelete');
        },
        (rej: HttpErrorResponse) => {
          const err = rej.error;
          this.loaderService.removeLoad('httpDelete');
          this.snackBar.open(err.message, null, {
            duration: 2000,
          });
          reject(rej);
        }
      );
    });
  }
  httpPost(endPoint: string, data: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.loaderService.addLoad('httpPost');
      this.http.post(`${this.url}${endPoint}`, data).subscribe(
        (res: any) => {
          if (res.message) {
            this.snackBar.open(res.message, null, {
              duration: 2000,
            });
          }
          resolve(res);
          this.loaderService.removeLoad('httpPost');
        },
        (rej: HttpErrorResponse) => {
          const err = rej.error;
          this.loaderService.removeLoad('httpPost');
          if (Array.isArray(err)) {
            for (const errItem of err) {
              this.snackBar.open(errItem.message, null, {
                duration: 2000,
              });
            }
            reject(rej);
            return;
          }

          this.snackBar.open(err.message, null, {
            duration: 2000,
          });
          reject(rej);
        }
      );
    });
  }
  httpPut(endPoint: string, data: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.loaderService.addLoad('httpPut');
      this.http.put(`${this.url}${endPoint}`, data).subscribe(
        (res: any) => {
          this.snackBar.open(res.message, null, {
            duration: 2000,
          });
          resolve(res);
          this.loaderService.removeLoad('httpPut');
        },
        (rej: HttpErrorResponse) => {
          const err: any = rej.error;
          this.loaderService.removeLoad('httpPut');
          if (Array.isArray(err)) {
            for (const errItem of err) {
              this.snackBar.open(errItem.message, null, {
                duration: 2000,
              });
            }
            reject(rej);
            return;
          }

          this.snackBar.open(err.message, null, {
            duration: 2000,
          });
          reject(rej);
        }
      );
    });
  }
}
