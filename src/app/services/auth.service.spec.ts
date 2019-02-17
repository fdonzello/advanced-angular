import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { of, throwError } from 'rxjs';

describe('AuthService', () => {
  const spy = jasmine.createSpyObj('AuthService', ['login']);
  let authServiceSpy: jasmine.SpyObj<AuthService>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthService,
        { provide: AuthService, useValue: spy }
      ]
    });

    authServiceSpy = TestBed.get(AuthService);
  });

  it('should be created', () => {
    expect(authServiceSpy).toBeTruthy();
  });

  it('should states that the user in logged in when login is successful', (done: DoneFn) => {
    // login() will return this stub value.
    const stubValue = of(true);
    authServiceSpy.login.and.returnValue(stubValue);

    authServiceSpy.login('email@email.me', 'password').subscribe(isLoggedIn => {
      expect(isLoggedIn).toBeTruthy();

      expect(authServiceSpy.login.calls.count())
        .toBe(1, 'spy login() method was called once');

      done();
    }, error => {
      fail('no errors expected!');
    });

  });

  it('should return an error when login fails', () => {

    const stubResponse = throwError(new Error('bad credentials'));
    authServiceSpy.login.and.returnValue(stubResponse);

    authServiceSpy.login('bad-email@email.me', 'bad-password').subscribe(
      _ => {
        fail('error expected');
      },
      error => {
        expect(error.message).toContain('bad credentials');
      }
    );
  });
});
