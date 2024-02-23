### Typescript Error Handling

```
type Either<L, R> = Left<L> | Right<R>;

class Left<L> {
  readonly value: L;

  constructor(value: L) {
    this.value = value;
  }

  isLeft(): this is Left<L> {
    return true;
  }

  isRight(): this is Right<never> {
    return false;
  }
}

class Right<R> {
  readonly value: R;

  constructor(value: R) {
    this.value = value;
  }

  isLeft(): this is Left<never> {
    return false;
  }

  isRight(): this is Right<R> {
    return true;
  }
}

function divide(a: number, b: number): Either<string, number> {
  if (b === 0) {
    return new Left("Cannot divide by zero");
  }

  return new Right(a / b);
}

const result = divide(10, 2);
if (result.isLeft()) {
  console.error(result.value); // Handle the error case
} else {
  console.log(result.value); // Handle the success case
}

```