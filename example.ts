function SomeClassDecorator(arg1: object) {
  return function decorator<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {};
  }
}

export type SomeDecoratorType = (
  arg1: string,
  arg2: object,
) => (target: any, propertyKey: string) => void;

function SomeFieldDecorator(
  arg1: string,
  arg2: object,
) {
  console.log('SomeFieldDecorator()');
  return function (target: any, propertyKey: string) {
    console.log(`${propertyKey}`);
  };
}


export class BaseClass<T extends any> {}

@SomeClassDecorator({
  prop: 1,
  prop2: () => 'test',
})
export class TestClass extends BaseClass<number> {
  @SomeFieldDecorator(
    'test',
    { prop: 1, prop2: (arg: string) => arg },
  )
  private _someField: number = 100;

  public async someMethod(
    arg1: NonNullable<any>,
    arg2: string | undefined,
    ...restArgs: Array<number | number[]>
  ) {

  }
}
