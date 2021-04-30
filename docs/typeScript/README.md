---
sidebar: auto
---

# 基础学习，[文档内容来自 TypeScript 入门教程](https://ts.xcatliu.com/basics/any.html)

## typescript 的特性

- 类型是其最核心的特性。
- 按照类型检查时期，为静态类型。
- 按照是否允许隐式类型转换，为弱类型，TypeScript 是完全兼容 JavaScript 的，它不会修改 JavaScript 运行时的特性，所以它们都是弱类型。

## 原始数据类型

JavaScript 的数据类型分为两种：基础数据类型和引用数据类型

- 基础数据类型 Boolean 、Number 、String、 null、 undefined 和 ES6 新增的 Symbol，BigInt

```ts
let loading: boolean = false
let num: number = 6
let str: string = 'yuguaa'

//空值
//JavaScript 没有空值（Void）的概念，在 TypeScript 中，可以用 void 表示没有任何返回值的函数：
const alertMyName = (): void => {
  alert('yuguaa')
}
//声明一个 void 类型的变量没有什么用，因为你只能将它赋值为 undefined 和 null：
let unusable: void = undefined

//Null 和 Undefined
let u: undefined = undefined
let n: null = null
//与 void 的区别是，undefined 和 null 是所有类型的子类型。也就是说 undefined 类型的变量，可以赋值给 number 类型的变量：

// 这样不会报错
let num: number = undefined
// 这样也不会报错
let u: undefined
let num: number = u

//而 void 类型的变量不能赋值给 number 类型的变量：
let u: void
let num: number = u
// Type 'void' is not assignable to type 'number'.
```

## 任意值

- 任意值（Any）用来表示允许赋值为任意类型。

```ts
//如果是一个普通类型，在赋值过程中改变类型是不被允许的：

let myFavoriteNumber: string = 'seven'
myFavoriteNumber = 7

// index.ts(2,1): error TS2322: Type 'number' is not assignable to type 'string'.
//但如果是 any 类型，则允许被赋值为任意类型。

let myFavoriteNumber: any = 'seven'
myFavoriteNumber = 7

//在任意值上访问任何属性都是允许的：
let anyThing: any = 'hello'
console.log(anyThing.myName)
console.log(anyThing.myName.firstName)

//也允许调用任何方法：
let anyThing: any = 'Tom'
anyThing.setName('Jerry')
anyThing.setName('Jerry').sayHello()
anyThing.myName.setFirstName('Cat')

//可以认为，声明一个变量为任意值之后，对它的任何操作，返回的内容的类型都是任意值。
```

## 类型推论

如果没有明确的指定类型，那么 TypeScript 会依照类型推论（Type Inference）的规则推断出一个类型。

### 什么是类型推论

以下代码虽然没有指定类型，但是会在编译的时候报错：

```ts
let myFavoriteNumber = 'seven'
myFavoriteNumber = 7
// index.ts(2,1): error TS2322: Type 'number' is not assignable to type 'string'.
```

事实上，它等价于：

```ts
let myFavoriteNumber: string = 'seven'
myFavoriteNumber = 7
// index.ts(2,1): error TS2322: Type 'number' is not assignable to type 'string'.
```

TypeScript 会在没有明确的指定类型的时候推测出一个类型，这就是类型推论。

如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成 any 类型而完全不被类型检查：

```ts
let myFavoriteNumber
myFavoriteNumber = 'seven'
myFavoriteNumber = 7
```

## 联合类型

联合类型（Union Types）表示取值可以为多种类型中的一种。

### 简单的例子

```ts
let myFavoriteNumber: string | number
myFavoriteNumber = 'seven'
myFavoriteNumber = 7
let myFavoriteNumber: string | number
myFavoriteNumber = true

// index.ts(2,1): error TS2322: Type 'boolean' is not assignable to type 'string | number'.
//   Type 'boolean' is not assignable to type 'number'.
```

联合类型使用 | 分隔每个类型。

这里的 let myFavoriteNumber: string | number 的含义是，允许 myFavoriteNumber 的类型是 string 或者 number，但是不能是其他类型。

### 访问联合类型的属性或方法

当 TypeScript 不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型里共有的属性或方法：

```ts
function getLength(something: string | number): number {
  return something.length
}
// index.ts(2,22): error TS2339: Property 'length' does not exist on type 'string | number'.
//   Property 'length' does not exist on type 'number'.
```

上例中，length 不是 string 和 number 的共有属性，所以会报错。

访问 string 和 number 的共有属性是没问题的：

```rs
function getString(something: string | number): string {
    return something.toString();
}
```

联合类型的变量在被赋值的时候，会根据类型推论的规则推断出一个类型：

```ts
let myFavoriteNumber: string | number
myFavoriteNumber = 'seven'
console.log(myFavoriteNumber.length) // 5
myFavoriteNumber = 7
console.log(myFavoriteNumber.length) // 编译时报错

// index.ts(5,30): error TS2339: Property 'length' does not exist on type 'number'.
```

上例中，第二行的 myFavoriteNumber 被推断成了 string，访问它的 length 属性不会报错。

而第四行的 myFavoriteNumber 被推断成了 number，访问它的 length 属性时就报错了。

##　对象的类型——接口
在 TypeScript 中，我们使用接口（Interfaces）来定义对象的类型。

### 什么是接口

在面向对象语言中，接口（Interfaces）是一个很重要的概念，它是对行为的抽象，而具体如何行动需要由类（classes）去实现（implement）。

TypeScript 中的接口是一个非常灵活的概念，除了可用于对类的一部分行为进行抽象以外，也常用于对「对象的形状（Shape）」进行描述。

简单的例子

```ts
interface Person {
  name: string
  age: number
}

let tom: Person = {
  name: 'Tom',
  age: 25
}
```

上面的例子中，我们定义了一个接口 Person，接着定义了一个变量 tom，它的类型是 Person。这样，我们就约束了 tom 的形状必须和接口 Person 一致。

接口一般首字母大写。有的编程语言中会建议接口的名称加上 I 前缀。

定义的变量比接口少了一些属性是不允许的：

```ts
interface Person {
  name: string
  age: number
}

let tom: Person = {
  name: 'Tom'
}
// index.ts(6,5): error TS2322: Type '{ name: string; }' is not assignable to type 'Person'.
//   Property 'age' is missing in type '{ name: string; }'.
```

多一些属性也是不允许的：

```ts
interface Person {
  name: string
  age: number
}

let tom: Person = {
  name: 'Tom',
  age: 25,
  gender: 'male'
}

// index.ts(9,5): error TS2322: Type '{ name: string; age: number; gender: string; }' is not assignable to type 'Person'.
//   Object literal may only specify known properties, and 'gender' does not exist in type 'Person'.
```

可见，赋值的时候，变量的形状必须和接口的形状保持一致。

### 可选属性

有时我们希望不要完全匹配一个形状，那么可以用可选属性：

```ts
interface Person {
  name: string
  age?: number
}

let tom: Person = {
  name: 'Tom'
}
interface Person {
  name: string
  age?: number
}

let tom: Person = {
  name: 'Tom',
  age: 25
}
```

可选属性的含义是该属性可以不存在。

这时仍然不允许添加未定义的属性：

```ts
interface Person {
  name: string
  age?: number
}

let tom: Person = {
  name: 'Tom',
  age: 25,
  gender: 'male'
}

// examples/playground/index.ts(9,5): error TS2322: Type '{ name: string; age: number; gender: string; }' is not assignable to type 'Person'.
//   Object literal may only specify known properties, and 'gender' does not exist in type 'Person'.
```

### 任意属性

有时候我们希望一个接口允许有任意的属性，可以使用如下方式：

```ts
interface Person {
  name: string
  age?: number
  [propName: string]: any
}

let tom: Person = {
  name: 'Tom',
  gender: 'male'
}
```

使用 [propName: string] 定义了任意属性取 string 类型的值。

需要注意的是，一旦定义了任意属性，那么确定属性和可选属性的类型都必须是它的类型的子集：

```ts
interface Person {
  name: string
  age?: number
  [propName: string]: string
}

let tom: Person = {
  name: 'Tom',
  age: 25,
  gender: 'male'
}

// index.ts(3,5): error TS2411: Property 'age' of type 'number' is not assignable to string index type 'string'.
// index.ts(7,5): error TS2322: Type '{ [x: string]: string | number; name: string; age: number; gender: string; }' is not assignable to type 'Person'.
//   Index signatures are incompatible.
//     Type 'string | number' is not assignable to type 'string'.
//       Type 'number' is not assignable to type 'string'.
```

上例中，任意属性的值允许是 string，但是可选属性 age 的值却是 number，number 不是 string 的子属性，所以报错了。

另外，在报错信息中可以看出，此时 { name: 'Tom', age: 25, gender: 'male' } 的类型被推断成了 { [x: string]: string | number; name: string; age: number; gender: string; }，这是联合类型和接口的结合。

一个接口中只能定义一个任意属性。如果接口中有多个类型的属性，则可以在任意属性中使用联合类型：

```ts
interface Person {
  name: string
  age?: number
  [propName: string]: string | number
}

let tom: Person = {
  name: 'Tom',
  age: 25,
  gender: 'male'
}
```

### 只读属性

有时候我们希望对象中的一些字段只能在创建的时候被赋值，那么可以用 readonly 定义只读属性：

```ts
interface Person {
  readonly id: number
  name: string
  age?: number
  [propName: string]: any
}

let tom: Person = {
  id: 89757,
  name: 'Tom',
  gender: 'male'
}

tom.id = 9527

// index.ts(14,5): error TS2540: Cannot assign to 'id' because it is a constant or a read-only property.
```

上例中，使用 readonly 定义的属性 id 初始化后，又被赋值了，所以报错了。

注意，只读的约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候：

```ts
interface Person {
  readonly id: number
  name: string
  age?: number
  [propName: string]: any
}

let tom: Person = {
  name: 'Tom',
  gender: 'male'
}

tom.id = 89757

// index.ts(8,5): error TS2322: Type '{ name: string; gender: string; }' is not assignable to type 'Person'.
//   Property 'id' is missing in type '{ name: string; gender: string; }'.
// index.ts(13,5): error TS2540: Cannot assign to 'id' because it is a constant or a read-only property.
```

上例中，报错信息有两处，第一处是在对 tom 进行赋值的时候，没有给 id 赋值。

第二处是在给 tom.id 赋值的时候，由于它是只读属性，所以报错了。
