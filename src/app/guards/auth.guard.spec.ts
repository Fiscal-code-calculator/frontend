import { TestBed } from "@angular/core/testing";
import { CanActivateFn,CanActivateChildFn } from "@angular/router";

import { authGuardParent,authGuardChildren } from "./auth.guard";

describe("authGuardParent", () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
      TestBed.runInInjectionContext(() => authGuardParent(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it("should be created", () => {
    expect(executeGuard).toBeTruthy();
  });
});

describe("authGuardChildren", () => {
  const executeGuard: CanActivateChildFn = (...guardParameters) =>
      TestBed.runInInjectionContext(() => authGuardChildren(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it("should be created", () => {
    expect(executeGuard).toBeTruthy();
  });
});
