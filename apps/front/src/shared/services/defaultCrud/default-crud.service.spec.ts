/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TestBed } from '@angular/core/testing';

import { DefaultCrudService } from './default-crud.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { of, throwError } from 'rxjs';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('DefaultCrudService', () => {
  let service: DefaultCrudService;
  let httpClient: HttpClient;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, MatSnackBarModule, NoopAnimationsModule],
    });
    service = TestBed.inject(DefaultCrudService);
    httpClient = TestBed.inject(HttpClient);
  });

  it('should call a http get function', async () => {
    const httpClientGetSpyOn = spyOn(httpClient, 'get').and.returnValue(of([]));

    await service.httpGet('auth');
    void expect(httpClientGetSpyOn).toHaveBeenCalled();
  });
  it('should call a http post function', async () => {
    const httpClientPostSpyOn = spyOn(httpClient, 'post').and.returnValue(of([]));
    await service.httpPost('auth1', {});
    void expect(httpClientPostSpyOn).toHaveBeenCalled();
  });
  it('should call a http post function and return a object', async () => {
    const httpClientPostSpyOn = spyOn(httpClient, 'post').and.returnValue(of({ message: 'Salvo!' }));
    await service.httpPost('auth1', {}).then(() => {});
    void expect(httpClientPostSpyOn).toHaveBeenCalled();
  });
  it('should call a http put function', async () => {
    const httpClientPutSpyOn = spyOn(httpClient, 'put').and.returnValue(of([]));
    await service.httpPut('auth', {});

    void expect(httpClientPutSpyOn).toHaveBeenCalled();
  });
  it('should call a http delete function', async () => {
    const httpClientDeleteSpyOn = spyOn(httpClient, 'delete').and.returnValue(of([]));
    await service.httpDelete('auth');

    void expect(httpClientDeleteSpyOn).toHaveBeenCalled();
  });
  it('should throw a error when call a http get function', async () => {
    spyOn(httpClient, 'get').and.returnValue(
      throwError({
        message: 'error',
      })
    );
    await service.httpGet('auth').catch((err) => {
      void expect(err).toEqual({
        message: 'error',
      });
    });
  });
  it('should throw a error when call a http get function', async () => {
    spyOn(httpClient, 'get').and.returnValue(
      throwError({
        error: { message: 'error' },
      })
    );
    await service.httpGet('auth').catch((err) => {
      void expect(err).toEqual({
        error: { message: 'error' },
      });
    });
  });
  it('should throw a error when call a http post function', async () => {
    spyOn(httpClient, 'post').and.returnValue(
      throwError({
        error: [{ message: 'error' }],
      })
    );
    await service.httpPost('auth', {}).catch((err) => {
      void expect(err.error[0].message).toEqual('error');
    });
  });
  it('should throw a error when call a http post function and error a single error', async () => {
    spyOn(httpClient, 'post').and.returnValue(
      throwError({
        error: { message: 'error' },
      })
    );
    await service.httpPost('auth', {}).catch((err) => {
      void expect(err.error.message).toEqual('error');
    });
  });
  it('should throw a error when call a http put function and error a single error', async () => {
    spyOn(httpClient, 'put').and.returnValue(
      throwError({
        error: { message: 'error' },
      })
    );
    await service.httpPut('auth', {}).catch((err) => {
      void expect(err.error.message).toEqual('error');
    });
  });
  it('should throw a error when call a http put function', async () => {
    spyOn(httpClient, 'put').and.returnValue(
      throwError({
        error: [{ message: 'error' }],
      })
    );
    await service.httpPut('auth', {}).catch((err) => {
      void expect(err.error[0].message).toEqual('error');
    });
  });
  it('should throw a error when call a http delete function', async () => {
    spyOn(httpClient, 'delete').and.returnValue(
      throwError({
        error: [{ message: 'error' }],
      })
    );
    await service.httpDelete('auth').catch((err) => {
      void expect(err.error[0].message).toEqual('error');
    });
  });
});
