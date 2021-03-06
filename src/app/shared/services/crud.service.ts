import { Injectable } from '@angular/core'
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { catchError, map, take, tap } from 'rxjs/operators'
import { Observable, throwError } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  constructor(private http: HttpClient) {}

  public async getData(serviceUrl, queryParam) {
    const headers = new HttpHeaders({
      'x-apikey': 'b8e2adea67fddc20e1ded62f8234d3ed58ad7',
    })
    return await this.http
      .get(serviceUrl, {
        params: queryParam,
        observe: 'response',
        headers,
      })
      .toPromise()
      .then(response => {
        return response.body
      })
      .catch(error => {
        console.error(error, serviceUrl)
      })
  }

  public saveData(serviceUrl, requestBody) {
    const headers = new HttpHeaders({
      'x-apikey': 'b8e2adea67fddc20e1ded62f8234d3ed58ad7',
    })
    const options = { headers }
    return this.http.post(serviceUrl, requestBody, options).pipe(
      map(response => {
        return response
      })
    )
  }

  public delete<T>(url: string): Observable<boolean> {
    const options = {
      headers: new HttpHeaders({
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'DELETE',
        'x-apikey': 'b8e2adea67fddc20e1ded62f8234d3ed58ad7',
      }),
    }

    return this.http.delete<any>(url, options).pipe(
      tap(_ => this.logResponse('DELETE', url, _)),
      catchError(this.handleError('DELETE', url)),
      take(1),
      map(_ => true)
    )
  }

  // TODO: send the log to remote logging infrastructure
  private logResponse(operation: string, url: string, response?: any): any {
    // console.log({
    //   request: `[${operation}] ${url}`,
    //   response,
    // })
  }

  private handleError(operation: string, url: string) {
    return (error: HttpErrorResponse) => {
      return throwError('Something bad happened; please try again later.')
    }
  }
}
