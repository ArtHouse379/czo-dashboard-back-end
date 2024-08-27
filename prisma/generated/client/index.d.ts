
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Customer
 * 
 */
export type Customer = $Result.DefaultSelection<Prisma.$CustomerPayload>
/**
 * Model Procurement
 * 
 */
export type Procurement = $Result.DefaultSelection<Prisma.$ProcurementPayload>
/**
 * Model JointProcurement
 * 
 */
export type JointProcurement = $Result.DefaultSelection<Prisma.$JointProcurementPayload>
/**
 * Model Contract
 * 
 */
export type Contract = $Result.DefaultSelection<Prisma.$ContractPayload>
/**
 * Model contractAgreement
 * 
 */
export type contractAgreement = $Result.DefaultSelection<Prisma.$contractAgreementPayload>
/**
 * Model Task
 * 
 */
export type Task = $Result.DefaultSelection<Prisma.$TaskPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Priority: {
  low: 'low',
  medium: 'medium',
  high: 'high'
};

export type Priority = (typeof Priority)[keyof typeof Priority]

}

export type Priority = $Enums.Priority

export const Priority: typeof $Enums.Priority

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.CustomerDelegate<ExtArgs>;

  /**
   * `prisma.procurement`: Exposes CRUD operations for the **Procurement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Procurements
    * const procurements = await prisma.procurement.findMany()
    * ```
    */
  get procurement(): Prisma.ProcurementDelegate<ExtArgs>;

  /**
   * `prisma.jointProcurement`: Exposes CRUD operations for the **JointProcurement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JointProcurements
    * const jointProcurements = await prisma.jointProcurement.findMany()
    * ```
    */
  get jointProcurement(): Prisma.JointProcurementDelegate<ExtArgs>;

  /**
   * `prisma.contract`: Exposes CRUD operations for the **Contract** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contracts
    * const contracts = await prisma.contract.findMany()
    * ```
    */
  get contract(): Prisma.ContractDelegate<ExtArgs>;

  /**
   * `prisma.contractAgreement`: Exposes CRUD operations for the **contractAgreement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContractAgreements
    * const contractAgreements = await prisma.contractAgreement.findMany()
    * ```
    */
  get contractAgreement(): Prisma.contractAgreementDelegate<ExtArgs>;

  /**
   * `prisma.task`: Exposes CRUD operations for the **Task** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tasks
    * const tasks = await prisma.task.findMany()
    * ```
    */
  get task(): Prisma.TaskDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.13.0
   * Query Engine version: b9a39a7ee606c28e3455d0fd60e78c3ba82b1a2b
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Customer: 'Customer',
    Procurement: 'Procurement',
    JointProcurement: 'JointProcurement',
    Contract: 'Contract',
    contractAgreement: 'contractAgreement',
    Task: 'Task'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'customer' | 'procurement' | 'jointProcurement' | 'contract' | 'contractAgreement' | 'task'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Customer: {
        payload: Prisma.$CustomerPayload<ExtArgs>
        fields: Prisma.CustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findFirst: {
            args: Prisma.CustomerFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findMany: {
            args: Prisma.CustomerFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          create: {
            args: Prisma.CustomerCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          createMany: {
            args: Prisma.CustomerCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CustomerDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          update: {
            args: Prisma.CustomerUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          deleteMany: {
            args: Prisma.CustomerDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CustomerUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCustomer>
          }
          groupBy: {
            args: Prisma.CustomerGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerCountArgs<ExtArgs>,
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number
          }
        }
      }
      Procurement: {
        payload: Prisma.$ProcurementPayload<ExtArgs>
        fields: Prisma.ProcurementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProcurementFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProcurementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProcurementFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProcurementPayload>
          }
          findFirst: {
            args: Prisma.ProcurementFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProcurementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProcurementFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProcurementPayload>
          }
          findMany: {
            args: Prisma.ProcurementFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProcurementPayload>[]
          }
          create: {
            args: Prisma.ProcurementCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProcurementPayload>
          }
          createMany: {
            args: Prisma.ProcurementCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ProcurementDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProcurementPayload>
          }
          update: {
            args: Prisma.ProcurementUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProcurementPayload>
          }
          deleteMany: {
            args: Prisma.ProcurementDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ProcurementUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ProcurementUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProcurementPayload>
          }
          aggregate: {
            args: Prisma.ProcurementAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProcurement>
          }
          groupBy: {
            args: Prisma.ProcurementGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProcurementGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProcurementCountArgs<ExtArgs>,
            result: $Utils.Optional<ProcurementCountAggregateOutputType> | number
          }
        }
      }
      JointProcurement: {
        payload: Prisma.$JointProcurementPayload<ExtArgs>
        fields: Prisma.JointProcurementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.JointProcurementFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JointProcurementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.JointProcurementFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JointProcurementPayload>
          }
          findFirst: {
            args: Prisma.JointProcurementFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JointProcurementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.JointProcurementFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JointProcurementPayload>
          }
          findMany: {
            args: Prisma.JointProcurementFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JointProcurementPayload>[]
          }
          create: {
            args: Prisma.JointProcurementCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JointProcurementPayload>
          }
          createMany: {
            args: Prisma.JointProcurementCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.JointProcurementDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JointProcurementPayload>
          }
          update: {
            args: Prisma.JointProcurementUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JointProcurementPayload>
          }
          deleteMany: {
            args: Prisma.JointProcurementDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.JointProcurementUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.JointProcurementUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$JointProcurementPayload>
          }
          aggregate: {
            args: Prisma.JointProcurementAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateJointProcurement>
          }
          groupBy: {
            args: Prisma.JointProcurementGroupByArgs<ExtArgs>,
            result: $Utils.Optional<JointProcurementGroupByOutputType>[]
          }
          count: {
            args: Prisma.JointProcurementCountArgs<ExtArgs>,
            result: $Utils.Optional<JointProcurementCountAggregateOutputType> | number
          }
        }
      }
      Contract: {
        payload: Prisma.$ContractPayload<ExtArgs>
        fields: Prisma.ContractFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContractFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContractPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContractFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          findFirst: {
            args: Prisma.ContractFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContractPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContractFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          findMany: {
            args: Prisma.ContractFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>[]
          }
          create: {
            args: Prisma.ContractCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          createMany: {
            args: Prisma.ContractCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ContractDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          update: {
            args: Prisma.ContractUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          deleteMany: {
            args: Prisma.ContractDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ContractUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ContractUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContractPayload>
          }
          aggregate: {
            args: Prisma.ContractAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateContract>
          }
          groupBy: {
            args: Prisma.ContractGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ContractGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContractCountArgs<ExtArgs>,
            result: $Utils.Optional<ContractCountAggregateOutputType> | number
          }
        }
      }
      contractAgreement: {
        payload: Prisma.$contractAgreementPayload<ExtArgs>
        fields: Prisma.contractAgreementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.contractAgreementFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$contractAgreementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.contractAgreementFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$contractAgreementPayload>
          }
          findFirst: {
            args: Prisma.contractAgreementFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$contractAgreementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.contractAgreementFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$contractAgreementPayload>
          }
          findMany: {
            args: Prisma.contractAgreementFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$contractAgreementPayload>[]
          }
          create: {
            args: Prisma.contractAgreementCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$contractAgreementPayload>
          }
          createMany: {
            args: Prisma.contractAgreementCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.contractAgreementDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$contractAgreementPayload>
          }
          update: {
            args: Prisma.contractAgreementUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$contractAgreementPayload>
          }
          deleteMany: {
            args: Prisma.contractAgreementDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.contractAgreementUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.contractAgreementUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$contractAgreementPayload>
          }
          aggregate: {
            args: Prisma.ContractAgreementAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateContractAgreement>
          }
          groupBy: {
            args: Prisma.contractAgreementGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ContractAgreementGroupByOutputType>[]
          }
          count: {
            args: Prisma.contractAgreementCountArgs<ExtArgs>,
            result: $Utils.Optional<ContractAgreementCountAggregateOutputType> | number
          }
        }
      }
      Task: {
        payload: Prisma.$TaskPayload<ExtArgs>
        fields: Prisma.TaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TaskFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TaskFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findFirst: {
            args: Prisma.TaskFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TaskFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          findMany: {
            args: Prisma.TaskFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>[]
          }
          create: {
            args: Prisma.TaskCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          createMany: {
            args: Prisma.TaskCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TaskDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          update: {
            args: Prisma.TaskUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          deleteMany: {
            args: Prisma.TaskDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TaskUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TaskUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TaskPayload>
          }
          aggregate: {
            args: Prisma.TaskAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTask>
          }
          groupBy: {
            args: Prisma.TaskGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.TaskCountArgs<ExtArgs>,
            result: $Utils.Optional<TaskCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    tasks: number
    procurements: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | UserCountOutputTypeCountTasksArgs
    procurements?: boolean | UserCountOutputTypeCountProcurementsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProcurementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProcurementWhereInput
  }


  /**
   * Count Type CustomerCountOutputType
   */

  export type CustomerCountOutputType = {
    procurements: number
  }

  export type CustomerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    procurements?: boolean | CustomerCountOutputTypeCountProcurementsArgs
  }

  // Custom InputTypes
  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     */
    select?: CustomerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountProcurementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProcurementWhereInput
  }


  /**
   * Count Type ProcurementCountOutputType
   */

  export type ProcurementCountOutputType = {
    contracts: number
  }

  export type ProcurementCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contracts?: boolean | ProcurementCountOutputTypeCountContractsArgs
  }

  // Custom InputTypes
  /**
   * ProcurementCountOutputType without action
   */
  export type ProcurementCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcurementCountOutputType
     */
    select?: ProcurementCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProcurementCountOutputType without action
   */
  export type ProcurementCountOutputTypeCountContractsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContractWhereInput
  }


  /**
   * Count Type JointProcurementCountOutputType
   */

  export type JointProcurementCountOutputType = {
    procurements: number
  }

  export type JointProcurementCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    procurements?: boolean | JointProcurementCountOutputTypeCountProcurementsArgs
  }

  // Custom InputTypes
  /**
   * JointProcurementCountOutputType without action
   */
  export type JointProcurementCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JointProcurementCountOutputType
     */
    select?: JointProcurementCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * JointProcurementCountOutputType without action
   */
  export type JointProcurementCountOutputTypeCountProcurementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProcurementWhereInput
  }


  /**
   * Count Type ContractCountOutputType
   */

  export type ContractCountOutputType = {
    agreements: number
  }

  export type ContractCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    agreements?: boolean | ContractCountOutputTypeCountAgreementsArgs
  }

  // Custom InputTypes
  /**
   * ContractCountOutputType without action
   */
  export type ContractCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractCountOutputType
     */
    select?: ContractCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ContractCountOutputType without action
   */
  export type ContractCountOutputTypeCountAgreementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: contractAgreementWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    email: string | null
    name: string | null
    surname: string | null
    password: string | null
    position: string | null
    role: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    email: string | null
    name: string | null
    surname: string | null
    password: string | null
    position: string | null
    role: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    email: number
    name: number
    surname: number
    password: number
    position: number
    role: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    email?: true
    name?: true
    surname?: true
    password?: true
    position?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    email?: true
    name?: true
    surname?: true
    password?: true
    position?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    email?: true
    name?: true
    surname?: true
    password?: true
    position?: true
    role?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    email: string
    name: string | null
    surname: string | null
    password: string
    position: string | null
    role: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    email?: boolean
    name?: boolean
    surname?: boolean
    password?: boolean
    position?: boolean
    role?: boolean
    tasks?: boolean | User$tasksArgs<ExtArgs>
    procurements?: boolean | User$procurementsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    email?: boolean
    name?: boolean
    surname?: boolean
    password?: boolean
    position?: boolean
    role?: boolean
  }


  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tasks?: boolean | User$tasksArgs<ExtArgs>
    procurements?: boolean | User$procurementsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      tasks: Prisma.$TaskPayload<ExtArgs>[]
      procurements: Prisma.$ProcurementPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      email: string
      name: string | null
      surname: string | null
      password: string
      position: string | null
      role: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    tasks<T extends User$tasksArgs<ExtArgs> = {}>(args?: Subset<T, User$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, 'findMany'> | Null>;

    procurements<T extends User$procurementsArgs<ExtArgs> = {}>(args?: Subset<T, User$procurementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProcurementPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly surname: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly position: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.tasks
   */
  export type User$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    cursor?: TaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * User.procurements
   */
  export type User$procurementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Procurement
     */
    select?: ProcurementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcurementInclude<ExtArgs> | null
    where?: ProcurementWhereInput
    orderBy?: ProcurementOrderByWithRelationInput | ProcurementOrderByWithRelationInput[]
    cursor?: ProcurementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProcurementScalarFieldEnum | ProcurementScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerMinAggregateOutputType = {
    id: string | null
    name: string | null
    code: string | null
    email: string | null
    phone: string | null
  }

  export type CustomerMaxAggregateOutputType = {
    id: string | null
    name: string | null
    code: string | null
    email: string | null
    phone: string | null
  }

  export type CustomerCountAggregateOutputType = {
    id: number
    name: number
    code: number
    email: number
    phone: number
    _all: number
  }


  export type CustomerMinAggregateInputType = {
    id?: true
    name?: true
    code?: true
    email?: true
    phone?: true
  }

  export type CustomerMaxAggregateInputType = {
    id?: true
    name?: true
    code?: true
    email?: true
    phone?: true
  }

  export type CustomerCountAggregateInputType = {
    id?: true
    name?: true
    code?: true
    email?: true
    phone?: true
    _all?: true
  }

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customer to aggregate.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type CustomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithAggregationInput | CustomerOrderByWithAggregationInput[]
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum
    having?: CustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }

  export type CustomerGroupByOutputType = {
    id: string
    name: string
    code: string
    email: string
    phone: string
    _count: CustomerCountAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type CustomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    email?: boolean
    phone?: boolean
    procurements?: boolean | Customer$procurementsArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectScalar = {
    id?: boolean
    name?: boolean
    code?: boolean
    email?: boolean
    phone?: boolean
  }


  export type CustomerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    procurements?: boolean | Customer$procurementsArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $CustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customer"
    objects: {
      procurements: Prisma.$ProcurementPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      code: string
      email: string
      phone: string
    }, ExtArgs["result"]["customer"]>
    composites: {}
  }


  type CustomerGetPayload<S extends boolean | null | undefined | CustomerDefaultArgs> = $Result.GetResult<Prisma.$CustomerPayload, S>

  type CustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CustomerFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface CustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Customer'], meta: { name: 'Customer' } }
    /**
     * Find zero or one Customer that matches the filter.
     * @param {CustomerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CustomerFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CustomerFindUniqueArgs<ExtArgs>>
    ): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Customer that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CustomerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CustomerFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CustomerFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CustomerFindFirstArgs<ExtArgs>>
    ): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CustomerFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerWithIdOnly = await prisma.customer.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CustomerFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CustomerFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Customer.
     * @param {CustomerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
    **/
    create<T extends CustomerCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CustomerCreateArgs<ExtArgs>>
    ): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Customers.
     *     @param {CustomerCreateManyArgs} args - Arguments to create many Customers.
     *     @example
     *     // Create many Customers
     *     const customer = await prisma.customer.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CustomerCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CustomerCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Customer.
     * @param {CustomerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
    **/
    delete<T extends CustomerDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CustomerDeleteArgs<ExtArgs>>
    ): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Customer.
     * @param {CustomerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CustomerUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CustomerUpdateArgs<ExtArgs>>
    ): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Customers.
     * @param {CustomerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CustomerDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CustomerDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CustomerUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CustomerUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Customer.
     * @param {CustomerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
    **/
    upsert<T extends CustomerUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CustomerUpsertArgs<ExtArgs>>
    ): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomerCountArgs>(
      args?: Subset<T, CustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerGroupByArgs['orderBy'] }
        : { orderBy?: CustomerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Customer model
   */
  readonly fields: CustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    procurements<T extends Customer$procurementsArgs<ExtArgs> = {}>(args?: Subset<T, Customer$procurementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProcurementPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Customer model
   */ 
  interface CustomerFieldRefs {
    readonly id: FieldRef<"Customer", 'String'>
    readonly name: FieldRef<"Customer", 'String'>
    readonly code: FieldRef<"Customer", 'String'>
    readonly email: FieldRef<"Customer", 'String'>
    readonly phone: FieldRef<"Customer", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Customer findUnique
   */
  export type CustomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findUniqueOrThrow
   */
  export type CustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findFirst
   */
  export type CustomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findFirstOrThrow
   */
  export type CustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findMany
   */
  export type CustomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer create
   */
  export type CustomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to create a Customer.
     */
    data: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
  }

  /**
   * Customer createMany
   */
  export type CustomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer update
   */
  export type CustomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to update a Customer.
     */
    data: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
    /**
     * Choose, which Customer to update.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer updateMany
   */
  export type CustomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
  }

  /**
   * Customer upsert
   */
  export type CustomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The filter to search for the Customer to update in case it exists.
     */
    where: CustomerWhereUniqueInput
    /**
     * In case the Customer found by the `where` argument doesn't exist, create a new Customer with this data.
     */
    create: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
    /**
     * In case the Customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
  }

  /**
   * Customer delete
   */
  export type CustomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter which Customer to delete.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer deleteMany
   */
  export type CustomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customers to delete
     */
    where?: CustomerWhereInput
  }

  /**
   * Customer.procurements
   */
  export type Customer$procurementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Procurement
     */
    select?: ProcurementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcurementInclude<ExtArgs> | null
    where?: ProcurementWhereInput
    orderBy?: ProcurementOrderByWithRelationInput | ProcurementOrderByWithRelationInput[]
    cursor?: ProcurementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProcurementScalarFieldEnum | ProcurementScalarFieldEnum[]
  }

  /**
   * Customer without action
   */
  export type CustomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
  }


  /**
   * Model Procurement
   */

  export type AggregateProcurement = {
    _count: ProcurementCountAggregateOutputType | null
    _avg: ProcurementAvgAggregateOutputType | null
    _sum: ProcurementSumAggregateOutputType | null
    _min: ProcurementMinAggregateOutputType | null
    _max: ProcurementMaxAggregateOutputType | null
  }

  export type ProcurementAvgAggregateOutputType = {
    expectedValue: Decimal | null
    resultValue: Decimal | null
  }

  export type ProcurementSumAggregateOutputType = {
    expectedValue: Decimal | null
    resultValue: Decimal | null
  }

  export type ProcurementMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    expectedValue: Decimal | null
    resultValue: Decimal | null
    announcedAt: Date | null
    finishedAt: Date | null
    prozorroId: string | null
    prozorroLink: string | null
    product: string | null
    unit: string | null
    scope: string | null
    status: string | null
    customerId: string | null
    userId: string | null
    jointProcurementid: string | null
  }

  export type ProcurementMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    expectedValue: Decimal | null
    resultValue: Decimal | null
    announcedAt: Date | null
    finishedAt: Date | null
    prozorroId: string | null
    prozorroLink: string | null
    product: string | null
    unit: string | null
    scope: string | null
    status: string | null
    customerId: string | null
    userId: string | null
    jointProcurementid: string | null
  }

  export type ProcurementCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    expectedValue: number
    resultValue: number
    announcedAt: number
    finishedAt: number
    prozorroId: number
    prozorroLink: number
    product: number
    unit: number
    scope: number
    status: number
    customerId: number
    userId: number
    jointProcurementid: number
    _all: number
  }


  export type ProcurementAvgAggregateInputType = {
    expectedValue?: true
    resultValue?: true
  }

  export type ProcurementSumAggregateInputType = {
    expectedValue?: true
    resultValue?: true
  }

  export type ProcurementMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    expectedValue?: true
    resultValue?: true
    announcedAt?: true
    finishedAt?: true
    prozorroId?: true
    prozorroLink?: true
    product?: true
    unit?: true
    scope?: true
    status?: true
    customerId?: true
    userId?: true
    jointProcurementid?: true
  }

  export type ProcurementMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    expectedValue?: true
    resultValue?: true
    announcedAt?: true
    finishedAt?: true
    prozorroId?: true
    prozorroLink?: true
    product?: true
    unit?: true
    scope?: true
    status?: true
    customerId?: true
    userId?: true
    jointProcurementid?: true
  }

  export type ProcurementCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    expectedValue?: true
    resultValue?: true
    announcedAt?: true
    finishedAt?: true
    prozorroId?: true
    prozorroLink?: true
    product?: true
    unit?: true
    scope?: true
    status?: true
    customerId?: true
    userId?: true
    jointProcurementid?: true
    _all?: true
  }

  export type ProcurementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Procurement to aggregate.
     */
    where?: ProcurementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Procurements to fetch.
     */
    orderBy?: ProcurementOrderByWithRelationInput | ProcurementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProcurementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Procurements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Procurements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Procurements
    **/
    _count?: true | ProcurementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProcurementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProcurementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProcurementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProcurementMaxAggregateInputType
  }

  export type GetProcurementAggregateType<T extends ProcurementAggregateArgs> = {
        [P in keyof T & keyof AggregateProcurement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProcurement[P]>
      : GetScalarType<T[P], AggregateProcurement[P]>
  }




  export type ProcurementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProcurementWhereInput
    orderBy?: ProcurementOrderByWithAggregationInput | ProcurementOrderByWithAggregationInput[]
    by: ProcurementScalarFieldEnum[] | ProcurementScalarFieldEnum
    having?: ProcurementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProcurementCountAggregateInputType | true
    _avg?: ProcurementAvgAggregateInputType
    _sum?: ProcurementSumAggregateInputType
    _min?: ProcurementMinAggregateInputType
    _max?: ProcurementMaxAggregateInputType
  }

  export type ProcurementGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    expectedValue: Decimal
    resultValue: Decimal | null
    announcedAt: Date | null
    finishedAt: Date | null
    prozorroId: string | null
    prozorroLink: string | null
    product: string
    unit: string
    scope: string
    status: string
    customerId: string
    userId: string
    jointProcurementid: string | null
    _count: ProcurementCountAggregateOutputType | null
    _avg: ProcurementAvgAggregateOutputType | null
    _sum: ProcurementSumAggregateOutputType | null
    _min: ProcurementMinAggregateOutputType | null
    _max: ProcurementMaxAggregateOutputType | null
  }

  type GetProcurementGroupByPayload<T extends ProcurementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProcurementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProcurementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProcurementGroupByOutputType[P]>
            : GetScalarType<T[P], ProcurementGroupByOutputType[P]>
        }
      >
    >


  export type ProcurementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    expectedValue?: boolean
    resultValue?: boolean
    announcedAt?: boolean
    finishedAt?: boolean
    prozorroId?: boolean
    prozorroLink?: boolean
    product?: boolean
    unit?: boolean
    scope?: boolean
    status?: boolean
    customerId?: boolean
    userId?: boolean
    jointProcurementid?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    manager?: boolean | UserDefaultArgs<ExtArgs>
    jointProcurement?: boolean | Procurement$jointProcurementArgs<ExtArgs>
    contracts?: boolean | Procurement$contractsArgs<ExtArgs>
    _count?: boolean | ProcurementCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["procurement"]>

  export type ProcurementSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    expectedValue?: boolean
    resultValue?: boolean
    announcedAt?: boolean
    finishedAt?: boolean
    prozorroId?: boolean
    prozorroLink?: boolean
    product?: boolean
    unit?: boolean
    scope?: boolean
    status?: boolean
    customerId?: boolean
    userId?: boolean
    jointProcurementid?: boolean
  }


  export type ProcurementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    manager?: boolean | UserDefaultArgs<ExtArgs>
    jointProcurement?: boolean | Procurement$jointProcurementArgs<ExtArgs>
    contracts?: boolean | Procurement$contractsArgs<ExtArgs>
    _count?: boolean | ProcurementCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ProcurementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Procurement"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs>
      manager: Prisma.$UserPayload<ExtArgs>
      jointProcurement: Prisma.$JointProcurementPayload<ExtArgs> | null
      contracts: Prisma.$ContractPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      expectedValue: Prisma.Decimal
      resultValue: Prisma.Decimal | null
      announcedAt: Date | null
      finishedAt: Date | null
      prozorroId: string | null
      prozorroLink: string | null
      product: string
      unit: string
      scope: string
      status: string
      customerId: string
      userId: string
      jointProcurementid: string | null
    }, ExtArgs["result"]["procurement"]>
    composites: {}
  }


  type ProcurementGetPayload<S extends boolean | null | undefined | ProcurementDefaultArgs> = $Result.GetResult<Prisma.$ProcurementPayload, S>

  type ProcurementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProcurementFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProcurementCountAggregateInputType | true
    }

  export interface ProcurementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Procurement'], meta: { name: 'Procurement' } }
    /**
     * Find zero or one Procurement that matches the filter.
     * @param {ProcurementFindUniqueArgs} args - Arguments to find a Procurement
     * @example
     * // Get one Procurement
     * const procurement = await prisma.procurement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProcurementFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ProcurementFindUniqueArgs<ExtArgs>>
    ): Prisma__ProcurementClient<$Result.GetResult<Prisma.$ProcurementPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Procurement that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProcurementFindUniqueOrThrowArgs} args - Arguments to find a Procurement
     * @example
     * // Get one Procurement
     * const procurement = await prisma.procurement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProcurementFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProcurementFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ProcurementClient<$Result.GetResult<Prisma.$ProcurementPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Procurement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcurementFindFirstArgs} args - Arguments to find a Procurement
     * @example
     * // Get one Procurement
     * const procurement = await prisma.procurement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProcurementFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ProcurementFindFirstArgs<ExtArgs>>
    ): Prisma__ProcurementClient<$Result.GetResult<Prisma.$ProcurementPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Procurement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcurementFindFirstOrThrowArgs} args - Arguments to find a Procurement
     * @example
     * // Get one Procurement
     * const procurement = await prisma.procurement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProcurementFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProcurementFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ProcurementClient<$Result.GetResult<Prisma.$ProcurementPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Procurements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcurementFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Procurements
     * const procurements = await prisma.procurement.findMany()
     * 
     * // Get first 10 Procurements
     * const procurements = await prisma.procurement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const procurementWithIdOnly = await prisma.procurement.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProcurementFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProcurementFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProcurementPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Procurement.
     * @param {ProcurementCreateArgs} args - Arguments to create a Procurement.
     * @example
     * // Create one Procurement
     * const Procurement = await prisma.procurement.create({
     *   data: {
     *     // ... data to create a Procurement
     *   }
     * })
     * 
    **/
    create<T extends ProcurementCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ProcurementCreateArgs<ExtArgs>>
    ): Prisma__ProcurementClient<$Result.GetResult<Prisma.$ProcurementPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Procurements.
     *     @param {ProcurementCreateManyArgs} args - Arguments to create many Procurements.
     *     @example
     *     // Create many Procurements
     *     const procurement = await prisma.procurement.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProcurementCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProcurementCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Procurement.
     * @param {ProcurementDeleteArgs} args - Arguments to delete one Procurement.
     * @example
     * // Delete one Procurement
     * const Procurement = await prisma.procurement.delete({
     *   where: {
     *     // ... filter to delete one Procurement
     *   }
     * })
     * 
    **/
    delete<T extends ProcurementDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ProcurementDeleteArgs<ExtArgs>>
    ): Prisma__ProcurementClient<$Result.GetResult<Prisma.$ProcurementPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Procurement.
     * @param {ProcurementUpdateArgs} args - Arguments to update one Procurement.
     * @example
     * // Update one Procurement
     * const procurement = await prisma.procurement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProcurementUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ProcurementUpdateArgs<ExtArgs>>
    ): Prisma__ProcurementClient<$Result.GetResult<Prisma.$ProcurementPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Procurements.
     * @param {ProcurementDeleteManyArgs} args - Arguments to filter Procurements to delete.
     * @example
     * // Delete a few Procurements
     * const { count } = await prisma.procurement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProcurementDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProcurementDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Procurements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcurementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Procurements
     * const procurement = await prisma.procurement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProcurementUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ProcurementUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Procurement.
     * @param {ProcurementUpsertArgs} args - Arguments to update or create a Procurement.
     * @example
     * // Update or create a Procurement
     * const procurement = await prisma.procurement.upsert({
     *   create: {
     *     // ... data to create a Procurement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Procurement we want to update
     *   }
     * })
    **/
    upsert<T extends ProcurementUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ProcurementUpsertArgs<ExtArgs>>
    ): Prisma__ProcurementClient<$Result.GetResult<Prisma.$ProcurementPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Procurements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcurementCountArgs} args - Arguments to filter Procurements to count.
     * @example
     * // Count the number of Procurements
     * const count = await prisma.procurement.count({
     *   where: {
     *     // ... the filter for the Procurements we want to count
     *   }
     * })
    **/
    count<T extends ProcurementCountArgs>(
      args?: Subset<T, ProcurementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProcurementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Procurement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcurementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProcurementAggregateArgs>(args: Subset<T, ProcurementAggregateArgs>): Prisma.PrismaPromise<GetProcurementAggregateType<T>>

    /**
     * Group by Procurement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcurementGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProcurementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProcurementGroupByArgs['orderBy'] }
        : { orderBy?: ProcurementGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProcurementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProcurementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Procurement model
   */
  readonly fields: ProcurementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Procurement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProcurementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    manager<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    jointProcurement<T extends Procurement$jointProcurementArgs<ExtArgs> = {}>(args?: Subset<T, Procurement$jointProcurementArgs<ExtArgs>>): Prisma__JointProcurementClient<$Result.GetResult<Prisma.$JointProcurementPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    contracts<T extends Procurement$contractsArgs<ExtArgs> = {}>(args?: Subset<T, Procurement$contractsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Procurement model
   */ 
  interface ProcurementFieldRefs {
    readonly id: FieldRef<"Procurement", 'String'>
    readonly createdAt: FieldRef<"Procurement", 'DateTime'>
    readonly updatedAt: FieldRef<"Procurement", 'DateTime'>
    readonly expectedValue: FieldRef<"Procurement", 'Decimal'>
    readonly resultValue: FieldRef<"Procurement", 'Decimal'>
    readonly announcedAt: FieldRef<"Procurement", 'DateTime'>
    readonly finishedAt: FieldRef<"Procurement", 'DateTime'>
    readonly prozorroId: FieldRef<"Procurement", 'String'>
    readonly prozorroLink: FieldRef<"Procurement", 'String'>
    readonly product: FieldRef<"Procurement", 'String'>
    readonly unit: FieldRef<"Procurement", 'String'>
    readonly scope: FieldRef<"Procurement", 'String'>
    readonly status: FieldRef<"Procurement", 'String'>
    readonly customerId: FieldRef<"Procurement", 'String'>
    readonly userId: FieldRef<"Procurement", 'String'>
    readonly jointProcurementid: FieldRef<"Procurement", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Procurement findUnique
   */
  export type ProcurementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Procurement
     */
    select?: ProcurementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcurementInclude<ExtArgs> | null
    /**
     * Filter, which Procurement to fetch.
     */
    where: ProcurementWhereUniqueInput
  }

  /**
   * Procurement findUniqueOrThrow
   */
  export type ProcurementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Procurement
     */
    select?: ProcurementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcurementInclude<ExtArgs> | null
    /**
     * Filter, which Procurement to fetch.
     */
    where: ProcurementWhereUniqueInput
  }

  /**
   * Procurement findFirst
   */
  export type ProcurementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Procurement
     */
    select?: ProcurementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcurementInclude<ExtArgs> | null
    /**
     * Filter, which Procurement to fetch.
     */
    where?: ProcurementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Procurements to fetch.
     */
    orderBy?: ProcurementOrderByWithRelationInput | ProcurementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Procurements.
     */
    cursor?: ProcurementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Procurements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Procurements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Procurements.
     */
    distinct?: ProcurementScalarFieldEnum | ProcurementScalarFieldEnum[]
  }

  /**
   * Procurement findFirstOrThrow
   */
  export type ProcurementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Procurement
     */
    select?: ProcurementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcurementInclude<ExtArgs> | null
    /**
     * Filter, which Procurement to fetch.
     */
    where?: ProcurementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Procurements to fetch.
     */
    orderBy?: ProcurementOrderByWithRelationInput | ProcurementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Procurements.
     */
    cursor?: ProcurementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Procurements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Procurements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Procurements.
     */
    distinct?: ProcurementScalarFieldEnum | ProcurementScalarFieldEnum[]
  }

  /**
   * Procurement findMany
   */
  export type ProcurementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Procurement
     */
    select?: ProcurementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcurementInclude<ExtArgs> | null
    /**
     * Filter, which Procurements to fetch.
     */
    where?: ProcurementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Procurements to fetch.
     */
    orderBy?: ProcurementOrderByWithRelationInput | ProcurementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Procurements.
     */
    cursor?: ProcurementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Procurements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Procurements.
     */
    skip?: number
    distinct?: ProcurementScalarFieldEnum | ProcurementScalarFieldEnum[]
  }

  /**
   * Procurement create
   */
  export type ProcurementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Procurement
     */
    select?: ProcurementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcurementInclude<ExtArgs> | null
    /**
     * The data needed to create a Procurement.
     */
    data: XOR<ProcurementCreateInput, ProcurementUncheckedCreateInput>
  }

  /**
   * Procurement createMany
   */
  export type ProcurementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Procurements.
     */
    data: ProcurementCreateManyInput | ProcurementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Procurement update
   */
  export type ProcurementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Procurement
     */
    select?: ProcurementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcurementInclude<ExtArgs> | null
    /**
     * The data needed to update a Procurement.
     */
    data: XOR<ProcurementUpdateInput, ProcurementUncheckedUpdateInput>
    /**
     * Choose, which Procurement to update.
     */
    where: ProcurementWhereUniqueInput
  }

  /**
   * Procurement updateMany
   */
  export type ProcurementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Procurements.
     */
    data: XOR<ProcurementUpdateManyMutationInput, ProcurementUncheckedUpdateManyInput>
    /**
     * Filter which Procurements to update
     */
    where?: ProcurementWhereInput
  }

  /**
   * Procurement upsert
   */
  export type ProcurementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Procurement
     */
    select?: ProcurementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcurementInclude<ExtArgs> | null
    /**
     * The filter to search for the Procurement to update in case it exists.
     */
    where: ProcurementWhereUniqueInput
    /**
     * In case the Procurement found by the `where` argument doesn't exist, create a new Procurement with this data.
     */
    create: XOR<ProcurementCreateInput, ProcurementUncheckedCreateInput>
    /**
     * In case the Procurement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProcurementUpdateInput, ProcurementUncheckedUpdateInput>
  }

  /**
   * Procurement delete
   */
  export type ProcurementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Procurement
     */
    select?: ProcurementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcurementInclude<ExtArgs> | null
    /**
     * Filter which Procurement to delete.
     */
    where: ProcurementWhereUniqueInput
  }

  /**
   * Procurement deleteMany
   */
  export type ProcurementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Procurements to delete
     */
    where?: ProcurementWhereInput
  }

  /**
   * Procurement.jointProcurement
   */
  export type Procurement$jointProcurementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JointProcurement
     */
    select?: JointProcurementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JointProcurementInclude<ExtArgs> | null
    where?: JointProcurementWhereInput
  }

  /**
   * Procurement.contracts
   */
  export type Procurement$contractsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    where?: ContractWhereInput
    orderBy?: ContractOrderByWithRelationInput | ContractOrderByWithRelationInput[]
    cursor?: ContractWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContractScalarFieldEnum | ContractScalarFieldEnum[]
  }

  /**
   * Procurement without action
   */
  export type ProcurementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Procurement
     */
    select?: ProcurementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcurementInclude<ExtArgs> | null
  }


  /**
   * Model JointProcurement
   */

  export type AggregateJointProcurement = {
    _count: JointProcurementCountAggregateOutputType | null
    _avg: JointProcurementAvgAggregateOutputType | null
    _sum: JointProcurementSumAggregateOutputType | null
    _min: JointProcurementMinAggregateOutputType | null
    _max: JointProcurementMaxAggregateOutputType | null
  }

  export type JointProcurementAvgAggregateOutputType = {
    expectedValue: Decimal | null
    resultValue: Decimal | null
  }

  export type JointProcurementSumAggregateOutputType = {
    expectedValue: Decimal | null
    resultValue: Decimal | null
  }

  export type JointProcurementMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    expectedValue: Decimal | null
    resultValue: Decimal | null
    announcedAt: Date | null
    finishedAt: Date | null
    prozorroId: string | null
    prozorroLink: string | null
    product: string | null
    unit: string | null
    scope: string | null
    status: string | null
  }

  export type JointProcurementMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    expectedValue: Decimal | null
    resultValue: Decimal | null
    announcedAt: Date | null
    finishedAt: Date | null
    prozorroId: string | null
    prozorroLink: string | null
    product: string | null
    unit: string | null
    scope: string | null
    status: string | null
  }

  export type JointProcurementCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    expectedValue: number
    resultValue: number
    announcedAt: number
    finishedAt: number
    prozorroId: number
    prozorroLink: number
    product: number
    unit: number
    scope: number
    status: number
    _all: number
  }


  export type JointProcurementAvgAggregateInputType = {
    expectedValue?: true
    resultValue?: true
  }

  export type JointProcurementSumAggregateInputType = {
    expectedValue?: true
    resultValue?: true
  }

  export type JointProcurementMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    expectedValue?: true
    resultValue?: true
    announcedAt?: true
    finishedAt?: true
    prozorroId?: true
    prozorroLink?: true
    product?: true
    unit?: true
    scope?: true
    status?: true
  }

  export type JointProcurementMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    expectedValue?: true
    resultValue?: true
    announcedAt?: true
    finishedAt?: true
    prozorroId?: true
    prozorroLink?: true
    product?: true
    unit?: true
    scope?: true
    status?: true
  }

  export type JointProcurementCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    expectedValue?: true
    resultValue?: true
    announcedAt?: true
    finishedAt?: true
    prozorroId?: true
    prozorroLink?: true
    product?: true
    unit?: true
    scope?: true
    status?: true
    _all?: true
  }

  export type JointProcurementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JointProcurement to aggregate.
     */
    where?: JointProcurementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JointProcurements to fetch.
     */
    orderBy?: JointProcurementOrderByWithRelationInput | JointProcurementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: JointProcurementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JointProcurements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JointProcurements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JointProcurements
    **/
    _count?: true | JointProcurementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JointProcurementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JointProcurementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JointProcurementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JointProcurementMaxAggregateInputType
  }

  export type GetJointProcurementAggregateType<T extends JointProcurementAggregateArgs> = {
        [P in keyof T & keyof AggregateJointProcurement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJointProcurement[P]>
      : GetScalarType<T[P], AggregateJointProcurement[P]>
  }




  export type JointProcurementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: JointProcurementWhereInput
    orderBy?: JointProcurementOrderByWithAggregationInput | JointProcurementOrderByWithAggregationInput[]
    by: JointProcurementScalarFieldEnum[] | JointProcurementScalarFieldEnum
    having?: JointProcurementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JointProcurementCountAggregateInputType | true
    _avg?: JointProcurementAvgAggregateInputType
    _sum?: JointProcurementSumAggregateInputType
    _min?: JointProcurementMinAggregateInputType
    _max?: JointProcurementMaxAggregateInputType
  }

  export type JointProcurementGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    expectedValue: Decimal
    resultValue: Decimal | null
    announcedAt: Date | null
    finishedAt: Date | null
    prozorroId: string | null
    prozorroLink: string | null
    product: string
    unit: string
    scope: string
    status: string
    _count: JointProcurementCountAggregateOutputType | null
    _avg: JointProcurementAvgAggregateOutputType | null
    _sum: JointProcurementSumAggregateOutputType | null
    _min: JointProcurementMinAggregateOutputType | null
    _max: JointProcurementMaxAggregateOutputType | null
  }

  type GetJointProcurementGroupByPayload<T extends JointProcurementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<JointProcurementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof JointProcurementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], JointProcurementGroupByOutputType[P]>
            : GetScalarType<T[P], JointProcurementGroupByOutputType[P]>
        }
      >
    >


  export type JointProcurementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    expectedValue?: boolean
    resultValue?: boolean
    announcedAt?: boolean
    finishedAt?: boolean
    prozorroId?: boolean
    prozorroLink?: boolean
    product?: boolean
    unit?: boolean
    scope?: boolean
    status?: boolean
    procurements?: boolean | JointProcurement$procurementsArgs<ExtArgs>
    _count?: boolean | JointProcurementCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["jointProcurement"]>

  export type JointProcurementSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    expectedValue?: boolean
    resultValue?: boolean
    announcedAt?: boolean
    finishedAt?: boolean
    prozorroId?: boolean
    prozorroLink?: boolean
    product?: boolean
    unit?: boolean
    scope?: boolean
    status?: boolean
  }


  export type JointProcurementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    procurements?: boolean | JointProcurement$procurementsArgs<ExtArgs>
    _count?: boolean | JointProcurementCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $JointProcurementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "JointProcurement"
    objects: {
      procurements: Prisma.$ProcurementPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      expectedValue: Prisma.Decimal
      resultValue: Prisma.Decimal | null
      announcedAt: Date | null
      finishedAt: Date | null
      prozorroId: string | null
      prozorroLink: string | null
      product: string
      unit: string
      scope: string
      status: string
    }, ExtArgs["result"]["jointProcurement"]>
    composites: {}
  }


  type JointProcurementGetPayload<S extends boolean | null | undefined | JointProcurementDefaultArgs> = $Result.GetResult<Prisma.$JointProcurementPayload, S>

  type JointProcurementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<JointProcurementFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: JointProcurementCountAggregateInputType | true
    }

  export interface JointProcurementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['JointProcurement'], meta: { name: 'JointProcurement' } }
    /**
     * Find zero or one JointProcurement that matches the filter.
     * @param {JointProcurementFindUniqueArgs} args - Arguments to find a JointProcurement
     * @example
     * // Get one JointProcurement
     * const jointProcurement = await prisma.jointProcurement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends JointProcurementFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, JointProcurementFindUniqueArgs<ExtArgs>>
    ): Prisma__JointProcurementClient<$Result.GetResult<Prisma.$JointProcurementPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one JointProcurement that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {JointProcurementFindUniqueOrThrowArgs} args - Arguments to find a JointProcurement
     * @example
     * // Get one JointProcurement
     * const jointProcurement = await prisma.jointProcurement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends JointProcurementFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, JointProcurementFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__JointProcurementClient<$Result.GetResult<Prisma.$JointProcurementPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first JointProcurement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JointProcurementFindFirstArgs} args - Arguments to find a JointProcurement
     * @example
     * // Get one JointProcurement
     * const jointProcurement = await prisma.jointProcurement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends JointProcurementFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, JointProcurementFindFirstArgs<ExtArgs>>
    ): Prisma__JointProcurementClient<$Result.GetResult<Prisma.$JointProcurementPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first JointProcurement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JointProcurementFindFirstOrThrowArgs} args - Arguments to find a JointProcurement
     * @example
     * // Get one JointProcurement
     * const jointProcurement = await prisma.jointProcurement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends JointProcurementFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, JointProcurementFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__JointProcurementClient<$Result.GetResult<Prisma.$JointProcurementPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more JointProcurements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JointProcurementFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JointProcurements
     * const jointProcurements = await prisma.jointProcurement.findMany()
     * 
     * // Get first 10 JointProcurements
     * const jointProcurements = await prisma.jointProcurement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jointProcurementWithIdOnly = await prisma.jointProcurement.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends JointProcurementFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, JointProcurementFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$JointProcurementPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a JointProcurement.
     * @param {JointProcurementCreateArgs} args - Arguments to create a JointProcurement.
     * @example
     * // Create one JointProcurement
     * const JointProcurement = await prisma.jointProcurement.create({
     *   data: {
     *     // ... data to create a JointProcurement
     *   }
     * })
     * 
    **/
    create<T extends JointProcurementCreateArgs<ExtArgs>>(
      args: SelectSubset<T, JointProcurementCreateArgs<ExtArgs>>
    ): Prisma__JointProcurementClient<$Result.GetResult<Prisma.$JointProcurementPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many JointProcurements.
     *     @param {JointProcurementCreateManyArgs} args - Arguments to create many JointProcurements.
     *     @example
     *     // Create many JointProcurements
     *     const jointProcurement = await prisma.jointProcurement.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends JointProcurementCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, JointProcurementCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a JointProcurement.
     * @param {JointProcurementDeleteArgs} args - Arguments to delete one JointProcurement.
     * @example
     * // Delete one JointProcurement
     * const JointProcurement = await prisma.jointProcurement.delete({
     *   where: {
     *     // ... filter to delete one JointProcurement
     *   }
     * })
     * 
    **/
    delete<T extends JointProcurementDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, JointProcurementDeleteArgs<ExtArgs>>
    ): Prisma__JointProcurementClient<$Result.GetResult<Prisma.$JointProcurementPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one JointProcurement.
     * @param {JointProcurementUpdateArgs} args - Arguments to update one JointProcurement.
     * @example
     * // Update one JointProcurement
     * const jointProcurement = await prisma.jointProcurement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends JointProcurementUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, JointProcurementUpdateArgs<ExtArgs>>
    ): Prisma__JointProcurementClient<$Result.GetResult<Prisma.$JointProcurementPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more JointProcurements.
     * @param {JointProcurementDeleteManyArgs} args - Arguments to filter JointProcurements to delete.
     * @example
     * // Delete a few JointProcurements
     * const { count } = await prisma.jointProcurement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends JointProcurementDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, JointProcurementDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more JointProcurements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JointProcurementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JointProcurements
     * const jointProcurement = await prisma.jointProcurement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends JointProcurementUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, JointProcurementUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one JointProcurement.
     * @param {JointProcurementUpsertArgs} args - Arguments to update or create a JointProcurement.
     * @example
     * // Update or create a JointProcurement
     * const jointProcurement = await prisma.jointProcurement.upsert({
     *   create: {
     *     // ... data to create a JointProcurement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JointProcurement we want to update
     *   }
     * })
    **/
    upsert<T extends JointProcurementUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, JointProcurementUpsertArgs<ExtArgs>>
    ): Prisma__JointProcurementClient<$Result.GetResult<Prisma.$JointProcurementPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of JointProcurements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JointProcurementCountArgs} args - Arguments to filter JointProcurements to count.
     * @example
     * // Count the number of JointProcurements
     * const count = await prisma.jointProcurement.count({
     *   where: {
     *     // ... the filter for the JointProcurements we want to count
     *   }
     * })
    **/
    count<T extends JointProcurementCountArgs>(
      args?: Subset<T, JointProcurementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JointProcurementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JointProcurement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JointProcurementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends JointProcurementAggregateArgs>(args: Subset<T, JointProcurementAggregateArgs>): Prisma.PrismaPromise<GetJointProcurementAggregateType<T>>

    /**
     * Group by JointProcurement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JointProcurementGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends JointProcurementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JointProcurementGroupByArgs['orderBy'] }
        : { orderBy?: JointProcurementGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, JointProcurementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJointProcurementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the JointProcurement model
   */
  readonly fields: JointProcurementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for JointProcurement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__JointProcurementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    procurements<T extends JointProcurement$procurementsArgs<ExtArgs> = {}>(args?: Subset<T, JointProcurement$procurementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProcurementPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the JointProcurement model
   */ 
  interface JointProcurementFieldRefs {
    readonly id: FieldRef<"JointProcurement", 'String'>
    readonly createdAt: FieldRef<"JointProcurement", 'DateTime'>
    readonly updatedAt: FieldRef<"JointProcurement", 'DateTime'>
    readonly expectedValue: FieldRef<"JointProcurement", 'Decimal'>
    readonly resultValue: FieldRef<"JointProcurement", 'Decimal'>
    readonly announcedAt: FieldRef<"JointProcurement", 'DateTime'>
    readonly finishedAt: FieldRef<"JointProcurement", 'DateTime'>
    readonly prozorroId: FieldRef<"JointProcurement", 'String'>
    readonly prozorroLink: FieldRef<"JointProcurement", 'String'>
    readonly product: FieldRef<"JointProcurement", 'String'>
    readonly unit: FieldRef<"JointProcurement", 'String'>
    readonly scope: FieldRef<"JointProcurement", 'String'>
    readonly status: FieldRef<"JointProcurement", 'String'>
  }
    

  // Custom InputTypes
  /**
   * JointProcurement findUnique
   */
  export type JointProcurementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JointProcurement
     */
    select?: JointProcurementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JointProcurementInclude<ExtArgs> | null
    /**
     * Filter, which JointProcurement to fetch.
     */
    where: JointProcurementWhereUniqueInput
  }

  /**
   * JointProcurement findUniqueOrThrow
   */
  export type JointProcurementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JointProcurement
     */
    select?: JointProcurementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JointProcurementInclude<ExtArgs> | null
    /**
     * Filter, which JointProcurement to fetch.
     */
    where: JointProcurementWhereUniqueInput
  }

  /**
   * JointProcurement findFirst
   */
  export type JointProcurementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JointProcurement
     */
    select?: JointProcurementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JointProcurementInclude<ExtArgs> | null
    /**
     * Filter, which JointProcurement to fetch.
     */
    where?: JointProcurementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JointProcurements to fetch.
     */
    orderBy?: JointProcurementOrderByWithRelationInput | JointProcurementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JointProcurements.
     */
    cursor?: JointProcurementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JointProcurements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JointProcurements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JointProcurements.
     */
    distinct?: JointProcurementScalarFieldEnum | JointProcurementScalarFieldEnum[]
  }

  /**
   * JointProcurement findFirstOrThrow
   */
  export type JointProcurementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JointProcurement
     */
    select?: JointProcurementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JointProcurementInclude<ExtArgs> | null
    /**
     * Filter, which JointProcurement to fetch.
     */
    where?: JointProcurementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JointProcurements to fetch.
     */
    orderBy?: JointProcurementOrderByWithRelationInput | JointProcurementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JointProcurements.
     */
    cursor?: JointProcurementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JointProcurements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JointProcurements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JointProcurements.
     */
    distinct?: JointProcurementScalarFieldEnum | JointProcurementScalarFieldEnum[]
  }

  /**
   * JointProcurement findMany
   */
  export type JointProcurementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JointProcurement
     */
    select?: JointProcurementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JointProcurementInclude<ExtArgs> | null
    /**
     * Filter, which JointProcurements to fetch.
     */
    where?: JointProcurementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JointProcurements to fetch.
     */
    orderBy?: JointProcurementOrderByWithRelationInput | JointProcurementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JointProcurements.
     */
    cursor?: JointProcurementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JointProcurements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JointProcurements.
     */
    skip?: number
    distinct?: JointProcurementScalarFieldEnum | JointProcurementScalarFieldEnum[]
  }

  /**
   * JointProcurement create
   */
  export type JointProcurementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JointProcurement
     */
    select?: JointProcurementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JointProcurementInclude<ExtArgs> | null
    /**
     * The data needed to create a JointProcurement.
     */
    data: XOR<JointProcurementCreateInput, JointProcurementUncheckedCreateInput>
  }

  /**
   * JointProcurement createMany
   */
  export type JointProcurementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many JointProcurements.
     */
    data: JointProcurementCreateManyInput | JointProcurementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * JointProcurement update
   */
  export type JointProcurementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JointProcurement
     */
    select?: JointProcurementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JointProcurementInclude<ExtArgs> | null
    /**
     * The data needed to update a JointProcurement.
     */
    data: XOR<JointProcurementUpdateInput, JointProcurementUncheckedUpdateInput>
    /**
     * Choose, which JointProcurement to update.
     */
    where: JointProcurementWhereUniqueInput
  }

  /**
   * JointProcurement updateMany
   */
  export type JointProcurementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update JointProcurements.
     */
    data: XOR<JointProcurementUpdateManyMutationInput, JointProcurementUncheckedUpdateManyInput>
    /**
     * Filter which JointProcurements to update
     */
    where?: JointProcurementWhereInput
  }

  /**
   * JointProcurement upsert
   */
  export type JointProcurementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JointProcurement
     */
    select?: JointProcurementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JointProcurementInclude<ExtArgs> | null
    /**
     * The filter to search for the JointProcurement to update in case it exists.
     */
    where: JointProcurementWhereUniqueInput
    /**
     * In case the JointProcurement found by the `where` argument doesn't exist, create a new JointProcurement with this data.
     */
    create: XOR<JointProcurementCreateInput, JointProcurementUncheckedCreateInput>
    /**
     * In case the JointProcurement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<JointProcurementUpdateInput, JointProcurementUncheckedUpdateInput>
  }

  /**
   * JointProcurement delete
   */
  export type JointProcurementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JointProcurement
     */
    select?: JointProcurementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JointProcurementInclude<ExtArgs> | null
    /**
     * Filter which JointProcurement to delete.
     */
    where: JointProcurementWhereUniqueInput
  }

  /**
   * JointProcurement deleteMany
   */
  export type JointProcurementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which JointProcurements to delete
     */
    where?: JointProcurementWhereInput
  }

  /**
   * JointProcurement.procurements
   */
  export type JointProcurement$procurementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Procurement
     */
    select?: ProcurementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcurementInclude<ExtArgs> | null
    where?: ProcurementWhereInput
    orderBy?: ProcurementOrderByWithRelationInput | ProcurementOrderByWithRelationInput[]
    cursor?: ProcurementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProcurementScalarFieldEnum | ProcurementScalarFieldEnum[]
  }

  /**
   * JointProcurement without action
   */
  export type JointProcurementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the JointProcurement
     */
    select?: JointProcurementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: JointProcurementInclude<ExtArgs> | null
  }


  /**
   * Model Contract
   */

  export type AggregateContract = {
    _count: ContractCountAggregateOutputType | null
    _avg: ContractAvgAggregateOutputType | null
    _sum: ContractSumAggregateOutputType | null
    _min: ContractMinAggregateOutputType | null
    _max: ContractMaxAggregateOutputType | null
  }

  export type ContractAvgAggregateOutputType = {
    startValue: Decimal | null
    currentValue: Decimal | null
  }

  export type ContractSumAggregateOutputType = {
    startValue: Decimal | null
    currentValue: Decimal | null
  }

  export type ContractMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    number: string | null
    prozorroLink: string | null
    startValue: Decimal | null
    currentValue: Decimal | null
    signatureDate: Date | null
    terminationDate: Date | null
    product: string | null
    unit: string | null
    scope: string | null
    procurementId: string | null
  }

  export type ContractMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    number: string | null
    prozorroLink: string | null
    startValue: Decimal | null
    currentValue: Decimal | null
    signatureDate: Date | null
    terminationDate: Date | null
    product: string | null
    unit: string | null
    scope: string | null
    procurementId: string | null
  }

  export type ContractCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    number: number
    prozorroLink: number
    startValue: number
    currentValue: number
    signatureDate: number
    terminationDate: number
    product: number
    unit: number
    scope: number
    procurementId: number
    _all: number
  }


  export type ContractAvgAggregateInputType = {
    startValue?: true
    currentValue?: true
  }

  export type ContractSumAggregateInputType = {
    startValue?: true
    currentValue?: true
  }

  export type ContractMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    number?: true
    prozorroLink?: true
    startValue?: true
    currentValue?: true
    signatureDate?: true
    terminationDate?: true
    product?: true
    unit?: true
    scope?: true
    procurementId?: true
  }

  export type ContractMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    number?: true
    prozorroLink?: true
    startValue?: true
    currentValue?: true
    signatureDate?: true
    terminationDate?: true
    product?: true
    unit?: true
    scope?: true
    procurementId?: true
  }

  export type ContractCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    number?: true
    prozorroLink?: true
    startValue?: true
    currentValue?: true
    signatureDate?: true
    terminationDate?: true
    product?: true
    unit?: true
    scope?: true
    procurementId?: true
    _all?: true
  }

  export type ContractAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contract to aggregate.
     */
    where?: ContractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contracts to fetch.
     */
    orderBy?: ContractOrderByWithRelationInput | ContractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contracts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contracts
    **/
    _count?: true | ContractCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContractAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContractSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContractMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContractMaxAggregateInputType
  }

  export type GetContractAggregateType<T extends ContractAggregateArgs> = {
        [P in keyof T & keyof AggregateContract]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContract[P]>
      : GetScalarType<T[P], AggregateContract[P]>
  }




  export type ContractGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContractWhereInput
    orderBy?: ContractOrderByWithAggregationInput | ContractOrderByWithAggregationInput[]
    by: ContractScalarFieldEnum[] | ContractScalarFieldEnum
    having?: ContractScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContractCountAggregateInputType | true
    _avg?: ContractAvgAggregateInputType
    _sum?: ContractSumAggregateInputType
    _min?: ContractMinAggregateInputType
    _max?: ContractMaxAggregateInputType
  }

  export type ContractGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    number: string
    prozorroLink: string | null
    startValue: Decimal
    currentValue: Decimal | null
    signatureDate: Date
    terminationDate: Date
    product: string
    unit: string
    scope: string
    procurementId: string
    _count: ContractCountAggregateOutputType | null
    _avg: ContractAvgAggregateOutputType | null
    _sum: ContractSumAggregateOutputType | null
    _min: ContractMinAggregateOutputType | null
    _max: ContractMaxAggregateOutputType | null
  }

  type GetContractGroupByPayload<T extends ContractGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContractGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContractGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContractGroupByOutputType[P]>
            : GetScalarType<T[P], ContractGroupByOutputType[P]>
        }
      >
    >


  export type ContractSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    number?: boolean
    prozorroLink?: boolean
    startValue?: boolean
    currentValue?: boolean
    signatureDate?: boolean
    terminationDate?: boolean
    product?: boolean
    unit?: boolean
    scope?: boolean
    procurementId?: boolean
    procurement?: boolean | ProcurementDefaultArgs<ExtArgs>
    agreements?: boolean | Contract$agreementsArgs<ExtArgs>
    _count?: boolean | ContractCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contract"]>

  export type ContractSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    number?: boolean
    prozorroLink?: boolean
    startValue?: boolean
    currentValue?: boolean
    signatureDate?: boolean
    terminationDate?: boolean
    product?: boolean
    unit?: boolean
    scope?: boolean
    procurementId?: boolean
  }


  export type ContractInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    procurement?: boolean | ProcurementDefaultArgs<ExtArgs>
    agreements?: boolean | Contract$agreementsArgs<ExtArgs>
    _count?: boolean | ContractCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ContractPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Contract"
    objects: {
      procurement: Prisma.$ProcurementPayload<ExtArgs>
      agreements: Prisma.$contractAgreementPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      number: string
      prozorroLink: string | null
      startValue: Prisma.Decimal
      currentValue: Prisma.Decimal | null
      signatureDate: Date
      terminationDate: Date
      product: string
      unit: string
      scope: string
      procurementId: string
    }, ExtArgs["result"]["contract"]>
    composites: {}
  }


  type ContractGetPayload<S extends boolean | null | undefined | ContractDefaultArgs> = $Result.GetResult<Prisma.$ContractPayload, S>

  type ContractCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ContractFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ContractCountAggregateInputType | true
    }

  export interface ContractDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Contract'], meta: { name: 'Contract' } }
    /**
     * Find zero or one Contract that matches the filter.
     * @param {ContractFindUniqueArgs} args - Arguments to find a Contract
     * @example
     * // Get one Contract
     * const contract = await prisma.contract.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ContractFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ContractFindUniqueArgs<ExtArgs>>
    ): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Contract that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ContractFindUniqueOrThrowArgs} args - Arguments to find a Contract
     * @example
     * // Get one Contract
     * const contract = await prisma.contract.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ContractFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ContractFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Contract that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractFindFirstArgs} args - Arguments to find a Contract
     * @example
     * // Get one Contract
     * const contract = await prisma.contract.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ContractFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ContractFindFirstArgs<ExtArgs>>
    ): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Contract that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractFindFirstOrThrowArgs} args - Arguments to find a Contract
     * @example
     * // Get one Contract
     * const contract = await prisma.contract.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ContractFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ContractFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Contracts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contracts
     * const contracts = await prisma.contract.findMany()
     * 
     * // Get first 10 Contracts
     * const contracts = await prisma.contract.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contractWithIdOnly = await prisma.contract.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ContractFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ContractFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Contract.
     * @param {ContractCreateArgs} args - Arguments to create a Contract.
     * @example
     * // Create one Contract
     * const Contract = await prisma.contract.create({
     *   data: {
     *     // ... data to create a Contract
     *   }
     * })
     * 
    **/
    create<T extends ContractCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ContractCreateArgs<ExtArgs>>
    ): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Contracts.
     *     @param {ContractCreateManyArgs} args - Arguments to create many Contracts.
     *     @example
     *     // Create many Contracts
     *     const contract = await prisma.contract.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ContractCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ContractCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Contract.
     * @param {ContractDeleteArgs} args - Arguments to delete one Contract.
     * @example
     * // Delete one Contract
     * const Contract = await prisma.contract.delete({
     *   where: {
     *     // ... filter to delete one Contract
     *   }
     * })
     * 
    **/
    delete<T extends ContractDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ContractDeleteArgs<ExtArgs>>
    ): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Contract.
     * @param {ContractUpdateArgs} args - Arguments to update one Contract.
     * @example
     * // Update one Contract
     * const contract = await prisma.contract.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ContractUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ContractUpdateArgs<ExtArgs>>
    ): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Contracts.
     * @param {ContractDeleteManyArgs} args - Arguments to filter Contracts to delete.
     * @example
     * // Delete a few Contracts
     * const { count } = await prisma.contract.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ContractDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ContractDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contracts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contracts
     * const contract = await prisma.contract.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ContractUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ContractUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Contract.
     * @param {ContractUpsertArgs} args - Arguments to update or create a Contract.
     * @example
     * // Update or create a Contract
     * const contract = await prisma.contract.upsert({
     *   create: {
     *     // ... data to create a Contract
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contract we want to update
     *   }
     * })
    **/
    upsert<T extends ContractUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ContractUpsertArgs<ExtArgs>>
    ): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Contracts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractCountArgs} args - Arguments to filter Contracts to count.
     * @example
     * // Count the number of Contracts
     * const count = await prisma.contract.count({
     *   where: {
     *     // ... the filter for the Contracts we want to count
     *   }
     * })
    **/
    count<T extends ContractCountArgs>(
      args?: Subset<T, ContractCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContractCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contract.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContractAggregateArgs>(args: Subset<T, ContractAggregateArgs>): Prisma.PrismaPromise<GetContractAggregateType<T>>

    /**
     * Group by Contract.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContractGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContractGroupByArgs['orderBy'] }
        : { orderBy?: ContractGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContractGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContractGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Contract model
   */
  readonly fields: ContractFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Contract.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContractClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    procurement<T extends ProcurementDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProcurementDefaultArgs<ExtArgs>>): Prisma__ProcurementClient<$Result.GetResult<Prisma.$ProcurementPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    agreements<T extends Contract$agreementsArgs<ExtArgs> = {}>(args?: Subset<T, Contract$agreementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$contractAgreementPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Contract model
   */ 
  interface ContractFieldRefs {
    readonly id: FieldRef<"Contract", 'String'>
    readonly createdAt: FieldRef<"Contract", 'DateTime'>
    readonly updatedAt: FieldRef<"Contract", 'DateTime'>
    readonly number: FieldRef<"Contract", 'String'>
    readonly prozorroLink: FieldRef<"Contract", 'String'>
    readonly startValue: FieldRef<"Contract", 'Decimal'>
    readonly currentValue: FieldRef<"Contract", 'Decimal'>
    readonly signatureDate: FieldRef<"Contract", 'DateTime'>
    readonly terminationDate: FieldRef<"Contract", 'DateTime'>
    readonly product: FieldRef<"Contract", 'String'>
    readonly unit: FieldRef<"Contract", 'String'>
    readonly scope: FieldRef<"Contract", 'String'>
    readonly procurementId: FieldRef<"Contract", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Contract findUnique
   */
  export type ContractFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * Filter, which Contract to fetch.
     */
    where: ContractWhereUniqueInput
  }

  /**
   * Contract findUniqueOrThrow
   */
  export type ContractFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * Filter, which Contract to fetch.
     */
    where: ContractWhereUniqueInput
  }

  /**
   * Contract findFirst
   */
  export type ContractFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * Filter, which Contract to fetch.
     */
    where?: ContractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contracts to fetch.
     */
    orderBy?: ContractOrderByWithRelationInput | ContractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contracts.
     */
    cursor?: ContractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contracts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contracts.
     */
    distinct?: ContractScalarFieldEnum | ContractScalarFieldEnum[]
  }

  /**
   * Contract findFirstOrThrow
   */
  export type ContractFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * Filter, which Contract to fetch.
     */
    where?: ContractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contracts to fetch.
     */
    orderBy?: ContractOrderByWithRelationInput | ContractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contracts.
     */
    cursor?: ContractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contracts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contracts.
     */
    distinct?: ContractScalarFieldEnum | ContractScalarFieldEnum[]
  }

  /**
   * Contract findMany
   */
  export type ContractFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * Filter, which Contracts to fetch.
     */
    where?: ContractWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contracts to fetch.
     */
    orderBy?: ContractOrderByWithRelationInput | ContractOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contracts.
     */
    cursor?: ContractWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contracts.
     */
    skip?: number
    distinct?: ContractScalarFieldEnum | ContractScalarFieldEnum[]
  }

  /**
   * Contract create
   */
  export type ContractCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * The data needed to create a Contract.
     */
    data: XOR<ContractCreateInput, ContractUncheckedCreateInput>
  }

  /**
   * Contract createMany
   */
  export type ContractCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contracts.
     */
    data: ContractCreateManyInput | ContractCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Contract update
   */
  export type ContractUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * The data needed to update a Contract.
     */
    data: XOR<ContractUpdateInput, ContractUncheckedUpdateInput>
    /**
     * Choose, which Contract to update.
     */
    where: ContractWhereUniqueInput
  }

  /**
   * Contract updateMany
   */
  export type ContractUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contracts.
     */
    data: XOR<ContractUpdateManyMutationInput, ContractUncheckedUpdateManyInput>
    /**
     * Filter which Contracts to update
     */
    where?: ContractWhereInput
  }

  /**
   * Contract upsert
   */
  export type ContractUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * The filter to search for the Contract to update in case it exists.
     */
    where: ContractWhereUniqueInput
    /**
     * In case the Contract found by the `where` argument doesn't exist, create a new Contract with this data.
     */
    create: XOR<ContractCreateInput, ContractUncheckedCreateInput>
    /**
     * In case the Contract was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContractUpdateInput, ContractUncheckedUpdateInput>
  }

  /**
   * Contract delete
   */
  export type ContractDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
    /**
     * Filter which Contract to delete.
     */
    where: ContractWhereUniqueInput
  }

  /**
   * Contract deleteMany
   */
  export type ContractDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contracts to delete
     */
    where?: ContractWhereInput
  }

  /**
   * Contract.agreements
   */
  export type Contract$agreementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contractAgreement
     */
    select?: contractAgreementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contractAgreementInclude<ExtArgs> | null
    where?: contractAgreementWhereInput
    orderBy?: contractAgreementOrderByWithRelationInput | contractAgreementOrderByWithRelationInput[]
    cursor?: contractAgreementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContractAgreementScalarFieldEnum | ContractAgreementScalarFieldEnum[]
  }

  /**
   * Contract without action
   */
  export type ContractDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract
     */
    select?: ContractSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractInclude<ExtArgs> | null
  }


  /**
   * Model contractAgreement
   */

  export type AggregateContractAgreement = {
    _count: ContractAgreementCountAggregateOutputType | null
    _min: ContractAgreementMinAggregateOutputType | null
    _max: ContractAgreementMaxAggregateOutputType | null
  }

  export type ContractAgreementMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    number: string | null
    signatureDate: Date | null
    reason: string | null
    changes: string | null
    contractId: string | null
  }

  export type ContractAgreementMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    number: string | null
    signatureDate: Date | null
    reason: string | null
    changes: string | null
    contractId: string | null
  }

  export type ContractAgreementCountAggregateOutputType = {
    id: number
    createdAt: number
    number: number
    signatureDate: number
    reason: number
    changes: number
    contractId: number
    _all: number
  }


  export type ContractAgreementMinAggregateInputType = {
    id?: true
    createdAt?: true
    number?: true
    signatureDate?: true
    reason?: true
    changes?: true
    contractId?: true
  }

  export type ContractAgreementMaxAggregateInputType = {
    id?: true
    createdAt?: true
    number?: true
    signatureDate?: true
    reason?: true
    changes?: true
    contractId?: true
  }

  export type ContractAgreementCountAggregateInputType = {
    id?: true
    createdAt?: true
    number?: true
    signatureDate?: true
    reason?: true
    changes?: true
    contractId?: true
    _all?: true
  }

  export type ContractAgreementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which contractAgreement to aggregate.
     */
    where?: contractAgreementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contractAgreements to fetch.
     */
    orderBy?: contractAgreementOrderByWithRelationInput | contractAgreementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: contractAgreementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contractAgreements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contractAgreements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned contractAgreements
    **/
    _count?: true | ContractAgreementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContractAgreementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContractAgreementMaxAggregateInputType
  }

  export type GetContractAgreementAggregateType<T extends ContractAgreementAggregateArgs> = {
        [P in keyof T & keyof AggregateContractAgreement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContractAgreement[P]>
      : GetScalarType<T[P], AggregateContractAgreement[P]>
  }




  export type contractAgreementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: contractAgreementWhereInput
    orderBy?: contractAgreementOrderByWithAggregationInput | contractAgreementOrderByWithAggregationInput[]
    by: ContractAgreementScalarFieldEnum[] | ContractAgreementScalarFieldEnum
    having?: contractAgreementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContractAgreementCountAggregateInputType | true
    _min?: ContractAgreementMinAggregateInputType
    _max?: ContractAgreementMaxAggregateInputType
  }

  export type ContractAgreementGroupByOutputType = {
    id: string
    createdAt: Date
    number: string
    signatureDate: Date
    reason: string
    changes: string
    contractId: string
    _count: ContractAgreementCountAggregateOutputType | null
    _min: ContractAgreementMinAggregateOutputType | null
    _max: ContractAgreementMaxAggregateOutputType | null
  }

  type GetContractAgreementGroupByPayload<T extends contractAgreementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContractAgreementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContractAgreementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContractAgreementGroupByOutputType[P]>
            : GetScalarType<T[P], ContractAgreementGroupByOutputType[P]>
        }
      >
    >


  export type contractAgreementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    number?: boolean
    signatureDate?: boolean
    reason?: boolean
    changes?: boolean
    contractId?: boolean
    contract?: boolean | ContractDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contractAgreement"]>

  export type contractAgreementSelectScalar = {
    id?: boolean
    createdAt?: boolean
    number?: boolean
    signatureDate?: boolean
    reason?: boolean
    changes?: boolean
    contractId?: boolean
  }


  export type contractAgreementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contract?: boolean | ContractDefaultArgs<ExtArgs>
  }


  export type $contractAgreementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "contractAgreement"
    objects: {
      contract: Prisma.$ContractPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      number: string
      signatureDate: Date
      reason: string
      changes: string
      contractId: string
    }, ExtArgs["result"]["contractAgreement"]>
    composites: {}
  }


  type contractAgreementGetPayload<S extends boolean | null | undefined | contractAgreementDefaultArgs> = $Result.GetResult<Prisma.$contractAgreementPayload, S>

  type contractAgreementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<contractAgreementFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ContractAgreementCountAggregateInputType | true
    }

  export interface contractAgreementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['contractAgreement'], meta: { name: 'contractAgreement' } }
    /**
     * Find zero or one ContractAgreement that matches the filter.
     * @param {contractAgreementFindUniqueArgs} args - Arguments to find a ContractAgreement
     * @example
     * // Get one ContractAgreement
     * const contractAgreement = await prisma.contractAgreement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends contractAgreementFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, contractAgreementFindUniqueArgs<ExtArgs>>
    ): Prisma__contractAgreementClient<$Result.GetResult<Prisma.$contractAgreementPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ContractAgreement that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {contractAgreementFindUniqueOrThrowArgs} args - Arguments to find a ContractAgreement
     * @example
     * // Get one ContractAgreement
     * const contractAgreement = await prisma.contractAgreement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends contractAgreementFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, contractAgreementFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__contractAgreementClient<$Result.GetResult<Prisma.$contractAgreementPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ContractAgreement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contractAgreementFindFirstArgs} args - Arguments to find a ContractAgreement
     * @example
     * // Get one ContractAgreement
     * const contractAgreement = await prisma.contractAgreement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends contractAgreementFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, contractAgreementFindFirstArgs<ExtArgs>>
    ): Prisma__contractAgreementClient<$Result.GetResult<Prisma.$contractAgreementPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ContractAgreement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contractAgreementFindFirstOrThrowArgs} args - Arguments to find a ContractAgreement
     * @example
     * // Get one ContractAgreement
     * const contractAgreement = await prisma.contractAgreement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends contractAgreementFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, contractAgreementFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__contractAgreementClient<$Result.GetResult<Prisma.$contractAgreementPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ContractAgreements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contractAgreementFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContractAgreements
     * const contractAgreements = await prisma.contractAgreement.findMany()
     * 
     * // Get first 10 ContractAgreements
     * const contractAgreements = await prisma.contractAgreement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contractAgreementWithIdOnly = await prisma.contractAgreement.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends contractAgreementFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, contractAgreementFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$contractAgreementPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ContractAgreement.
     * @param {contractAgreementCreateArgs} args - Arguments to create a ContractAgreement.
     * @example
     * // Create one ContractAgreement
     * const ContractAgreement = await prisma.contractAgreement.create({
     *   data: {
     *     // ... data to create a ContractAgreement
     *   }
     * })
     * 
    **/
    create<T extends contractAgreementCreateArgs<ExtArgs>>(
      args: SelectSubset<T, contractAgreementCreateArgs<ExtArgs>>
    ): Prisma__contractAgreementClient<$Result.GetResult<Prisma.$contractAgreementPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ContractAgreements.
     *     @param {contractAgreementCreateManyArgs} args - Arguments to create many ContractAgreements.
     *     @example
     *     // Create many ContractAgreements
     *     const contractAgreement = await prisma.contractAgreement.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends contractAgreementCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, contractAgreementCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ContractAgreement.
     * @param {contractAgreementDeleteArgs} args - Arguments to delete one ContractAgreement.
     * @example
     * // Delete one ContractAgreement
     * const ContractAgreement = await prisma.contractAgreement.delete({
     *   where: {
     *     // ... filter to delete one ContractAgreement
     *   }
     * })
     * 
    **/
    delete<T extends contractAgreementDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, contractAgreementDeleteArgs<ExtArgs>>
    ): Prisma__contractAgreementClient<$Result.GetResult<Prisma.$contractAgreementPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ContractAgreement.
     * @param {contractAgreementUpdateArgs} args - Arguments to update one ContractAgreement.
     * @example
     * // Update one ContractAgreement
     * const contractAgreement = await prisma.contractAgreement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends contractAgreementUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, contractAgreementUpdateArgs<ExtArgs>>
    ): Prisma__contractAgreementClient<$Result.GetResult<Prisma.$contractAgreementPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ContractAgreements.
     * @param {contractAgreementDeleteManyArgs} args - Arguments to filter ContractAgreements to delete.
     * @example
     * // Delete a few ContractAgreements
     * const { count } = await prisma.contractAgreement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends contractAgreementDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, contractAgreementDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContractAgreements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contractAgreementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContractAgreements
     * const contractAgreement = await prisma.contractAgreement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends contractAgreementUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, contractAgreementUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ContractAgreement.
     * @param {contractAgreementUpsertArgs} args - Arguments to update or create a ContractAgreement.
     * @example
     * // Update or create a ContractAgreement
     * const contractAgreement = await prisma.contractAgreement.upsert({
     *   create: {
     *     // ... data to create a ContractAgreement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContractAgreement we want to update
     *   }
     * })
    **/
    upsert<T extends contractAgreementUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, contractAgreementUpsertArgs<ExtArgs>>
    ): Prisma__contractAgreementClient<$Result.GetResult<Prisma.$contractAgreementPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ContractAgreements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contractAgreementCountArgs} args - Arguments to filter ContractAgreements to count.
     * @example
     * // Count the number of ContractAgreements
     * const count = await prisma.contractAgreement.count({
     *   where: {
     *     // ... the filter for the ContractAgreements we want to count
     *   }
     * })
    **/
    count<T extends contractAgreementCountArgs>(
      args?: Subset<T, contractAgreementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContractAgreementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContractAgreement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractAgreementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContractAgreementAggregateArgs>(args: Subset<T, ContractAgreementAggregateArgs>): Prisma.PrismaPromise<GetContractAgreementAggregateType<T>>

    /**
     * Group by ContractAgreement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {contractAgreementGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends contractAgreementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: contractAgreementGroupByArgs['orderBy'] }
        : { orderBy?: contractAgreementGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, contractAgreementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContractAgreementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the contractAgreement model
   */
  readonly fields: contractAgreementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for contractAgreement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__contractAgreementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    contract<T extends ContractDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ContractDefaultArgs<ExtArgs>>): Prisma__ContractClient<$Result.GetResult<Prisma.$ContractPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the contractAgreement model
   */ 
  interface contractAgreementFieldRefs {
    readonly id: FieldRef<"contractAgreement", 'String'>
    readonly createdAt: FieldRef<"contractAgreement", 'DateTime'>
    readonly number: FieldRef<"contractAgreement", 'String'>
    readonly signatureDate: FieldRef<"contractAgreement", 'DateTime'>
    readonly reason: FieldRef<"contractAgreement", 'String'>
    readonly changes: FieldRef<"contractAgreement", 'String'>
    readonly contractId: FieldRef<"contractAgreement", 'String'>
  }
    

  // Custom InputTypes
  /**
   * contractAgreement findUnique
   */
  export type contractAgreementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contractAgreement
     */
    select?: contractAgreementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contractAgreementInclude<ExtArgs> | null
    /**
     * Filter, which contractAgreement to fetch.
     */
    where: contractAgreementWhereUniqueInput
  }

  /**
   * contractAgreement findUniqueOrThrow
   */
  export type contractAgreementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contractAgreement
     */
    select?: contractAgreementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contractAgreementInclude<ExtArgs> | null
    /**
     * Filter, which contractAgreement to fetch.
     */
    where: contractAgreementWhereUniqueInput
  }

  /**
   * contractAgreement findFirst
   */
  export type contractAgreementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contractAgreement
     */
    select?: contractAgreementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contractAgreementInclude<ExtArgs> | null
    /**
     * Filter, which contractAgreement to fetch.
     */
    where?: contractAgreementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contractAgreements to fetch.
     */
    orderBy?: contractAgreementOrderByWithRelationInput | contractAgreementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for contractAgreements.
     */
    cursor?: contractAgreementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contractAgreements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contractAgreements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of contractAgreements.
     */
    distinct?: ContractAgreementScalarFieldEnum | ContractAgreementScalarFieldEnum[]
  }

  /**
   * contractAgreement findFirstOrThrow
   */
  export type contractAgreementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contractAgreement
     */
    select?: contractAgreementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contractAgreementInclude<ExtArgs> | null
    /**
     * Filter, which contractAgreement to fetch.
     */
    where?: contractAgreementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contractAgreements to fetch.
     */
    orderBy?: contractAgreementOrderByWithRelationInput | contractAgreementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for contractAgreements.
     */
    cursor?: contractAgreementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contractAgreements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contractAgreements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of contractAgreements.
     */
    distinct?: ContractAgreementScalarFieldEnum | ContractAgreementScalarFieldEnum[]
  }

  /**
   * contractAgreement findMany
   */
  export type contractAgreementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contractAgreement
     */
    select?: contractAgreementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contractAgreementInclude<ExtArgs> | null
    /**
     * Filter, which contractAgreements to fetch.
     */
    where?: contractAgreementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of contractAgreements to fetch.
     */
    orderBy?: contractAgreementOrderByWithRelationInput | contractAgreementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing contractAgreements.
     */
    cursor?: contractAgreementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` contractAgreements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` contractAgreements.
     */
    skip?: number
    distinct?: ContractAgreementScalarFieldEnum | ContractAgreementScalarFieldEnum[]
  }

  /**
   * contractAgreement create
   */
  export type contractAgreementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contractAgreement
     */
    select?: contractAgreementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contractAgreementInclude<ExtArgs> | null
    /**
     * The data needed to create a contractAgreement.
     */
    data: XOR<contractAgreementCreateInput, contractAgreementUncheckedCreateInput>
  }

  /**
   * contractAgreement createMany
   */
  export type contractAgreementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many contractAgreements.
     */
    data: contractAgreementCreateManyInput | contractAgreementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * contractAgreement update
   */
  export type contractAgreementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contractAgreement
     */
    select?: contractAgreementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contractAgreementInclude<ExtArgs> | null
    /**
     * The data needed to update a contractAgreement.
     */
    data: XOR<contractAgreementUpdateInput, contractAgreementUncheckedUpdateInput>
    /**
     * Choose, which contractAgreement to update.
     */
    where: contractAgreementWhereUniqueInput
  }

  /**
   * contractAgreement updateMany
   */
  export type contractAgreementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update contractAgreements.
     */
    data: XOR<contractAgreementUpdateManyMutationInput, contractAgreementUncheckedUpdateManyInput>
    /**
     * Filter which contractAgreements to update
     */
    where?: contractAgreementWhereInput
  }

  /**
   * contractAgreement upsert
   */
  export type contractAgreementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contractAgreement
     */
    select?: contractAgreementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contractAgreementInclude<ExtArgs> | null
    /**
     * The filter to search for the contractAgreement to update in case it exists.
     */
    where: contractAgreementWhereUniqueInput
    /**
     * In case the contractAgreement found by the `where` argument doesn't exist, create a new contractAgreement with this data.
     */
    create: XOR<contractAgreementCreateInput, contractAgreementUncheckedCreateInput>
    /**
     * In case the contractAgreement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<contractAgreementUpdateInput, contractAgreementUncheckedUpdateInput>
  }

  /**
   * contractAgreement delete
   */
  export type contractAgreementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contractAgreement
     */
    select?: contractAgreementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contractAgreementInclude<ExtArgs> | null
    /**
     * Filter which contractAgreement to delete.
     */
    where: contractAgreementWhereUniqueInput
  }

  /**
   * contractAgreement deleteMany
   */
  export type contractAgreementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which contractAgreements to delete
     */
    where?: contractAgreementWhereInput
  }

  /**
   * contractAgreement without action
   */
  export type contractAgreementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the contractAgreement
     */
    select?: contractAgreementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: contractAgreementInclude<ExtArgs> | null
  }


  /**
   * Model Task
   */

  export type AggregateTask = {
    _count: TaskCountAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  export type TaskMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    priority: $Enums.Priority | null
    status: string | null
    terminationDate: Date | null
    isCompleted: boolean | null
    notes: string | null
    userId: string | null
  }

  export type TaskMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    priority: $Enums.Priority | null
    status: string | null
    terminationDate: Date | null
    isCompleted: boolean | null
    notes: string | null
    userId: string | null
  }

  export type TaskCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    name: number
    priority: number
    status: number
    terminationDate: number
    isCompleted: number
    notes: number
    userId: number
    _all: number
  }


  export type TaskMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    priority?: true
    status?: true
    terminationDate?: true
    isCompleted?: true
    notes?: true
    userId?: true
  }

  export type TaskMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    priority?: true
    status?: true
    terminationDate?: true
    isCompleted?: true
    notes?: true
    userId?: true
  }

  export type TaskCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    priority?: true
    status?: true
    terminationDate?: true
    isCompleted?: true
    notes?: true
    userId?: true
    _all?: true
  }

  export type TaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Task to aggregate.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tasks
    **/
    _count?: true | TaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TaskMaxAggregateInputType
  }

  export type GetTaskAggregateType<T extends TaskAggregateArgs> = {
        [P in keyof T & keyof AggregateTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTask[P]>
      : GetScalarType<T[P], AggregateTask[P]>
  }




  export type TaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TaskWhereInput
    orderBy?: TaskOrderByWithAggregationInput | TaskOrderByWithAggregationInput[]
    by: TaskScalarFieldEnum[] | TaskScalarFieldEnum
    having?: TaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TaskCountAggregateInputType | true
    _min?: TaskMinAggregateInputType
    _max?: TaskMaxAggregateInputType
  }

  export type TaskGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    name: string
    priority: $Enums.Priority | null
    status: string
    terminationDate: Date
    isCompleted: boolean
    notes: string | null
    userId: string
    _count: TaskCountAggregateOutputType | null
    _min: TaskMinAggregateOutputType | null
    _max: TaskMaxAggregateOutputType | null
  }

  type GetTaskGroupByPayload<T extends TaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TaskGroupByOutputType[P]>
            : GetScalarType<T[P], TaskGroupByOutputType[P]>
        }
      >
    >


  export type TaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    priority?: boolean
    status?: boolean
    terminationDate?: boolean
    isCompleted?: boolean
    notes?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["task"]>

  export type TaskSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    priority?: boolean
    status?: boolean
    terminationDate?: boolean
    isCompleted?: boolean
    notes?: boolean
    userId?: boolean
  }


  export type TaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $TaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Task"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      name: string
      priority: $Enums.Priority | null
      status: string
      terminationDate: Date
      isCompleted: boolean
      notes: string | null
      userId: string
    }, ExtArgs["result"]["task"]>
    composites: {}
  }


  type TaskGetPayload<S extends boolean | null | undefined | TaskDefaultArgs> = $Result.GetResult<Prisma.$TaskPayload, S>

  type TaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TaskFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TaskCountAggregateInputType | true
    }

  export interface TaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Task'], meta: { name: 'Task' } }
    /**
     * Find zero or one Task that matches the filter.
     * @param {TaskFindUniqueArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TaskFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TaskFindUniqueArgs<ExtArgs>>
    ): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Task that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TaskFindUniqueOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TaskFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TaskFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Task that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TaskFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TaskFindFirstArgs<ExtArgs>>
    ): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Task that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindFirstOrThrowArgs} args - Arguments to find a Task
     * @example
     * // Get one Task
     * const task = await prisma.task.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TaskFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TaskFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Tasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tasks
     * const tasks = await prisma.task.findMany()
     * 
     * // Get first 10 Tasks
     * const tasks = await prisma.task.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const taskWithIdOnly = await prisma.task.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TaskFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TaskFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Task.
     * @param {TaskCreateArgs} args - Arguments to create a Task.
     * @example
     * // Create one Task
     * const Task = await prisma.task.create({
     *   data: {
     *     // ... data to create a Task
     *   }
     * })
     * 
    **/
    create<T extends TaskCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TaskCreateArgs<ExtArgs>>
    ): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Tasks.
     *     @param {TaskCreateManyArgs} args - Arguments to create many Tasks.
     *     @example
     *     // Create many Tasks
     *     const task = await prisma.task.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TaskCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TaskCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Task.
     * @param {TaskDeleteArgs} args - Arguments to delete one Task.
     * @example
     * // Delete one Task
     * const Task = await prisma.task.delete({
     *   where: {
     *     // ... filter to delete one Task
     *   }
     * })
     * 
    **/
    delete<T extends TaskDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TaskDeleteArgs<ExtArgs>>
    ): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Task.
     * @param {TaskUpdateArgs} args - Arguments to update one Task.
     * @example
     * // Update one Task
     * const task = await prisma.task.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TaskUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TaskUpdateArgs<ExtArgs>>
    ): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Tasks.
     * @param {TaskDeleteManyArgs} args - Arguments to filter Tasks to delete.
     * @example
     * // Delete a few Tasks
     * const { count } = await prisma.task.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TaskDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TaskDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tasks
     * const task = await prisma.task.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TaskUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TaskUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Task.
     * @param {TaskUpsertArgs} args - Arguments to update or create a Task.
     * @example
     * // Update or create a Task
     * const task = await prisma.task.upsert({
     *   create: {
     *     // ... data to create a Task
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Task we want to update
     *   }
     * })
    **/
    upsert<T extends TaskUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TaskUpsertArgs<ExtArgs>>
    ): Prisma__TaskClient<$Result.GetResult<Prisma.$TaskPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Tasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskCountArgs} args - Arguments to filter Tasks to count.
     * @example
     * // Count the number of Tasks
     * const count = await prisma.task.count({
     *   where: {
     *     // ... the filter for the Tasks we want to count
     *   }
     * })
    **/
    count<T extends TaskCountArgs>(
      args?: Subset<T, TaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TaskAggregateArgs>(args: Subset<T, TaskAggregateArgs>): Prisma.PrismaPromise<GetTaskAggregateType<T>>

    /**
     * Group by Task.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TaskGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TaskGroupByArgs['orderBy'] }
        : { orderBy?: TaskGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Task model
   */
  readonly fields: TaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Task.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Task model
   */ 
  interface TaskFieldRefs {
    readonly id: FieldRef<"Task", 'String'>
    readonly createdAt: FieldRef<"Task", 'DateTime'>
    readonly updatedAt: FieldRef<"Task", 'DateTime'>
    readonly name: FieldRef<"Task", 'String'>
    readonly priority: FieldRef<"Task", 'Priority'>
    readonly status: FieldRef<"Task", 'String'>
    readonly terminationDate: FieldRef<"Task", 'DateTime'>
    readonly isCompleted: FieldRef<"Task", 'Boolean'>
    readonly notes: FieldRef<"Task", 'String'>
    readonly userId: FieldRef<"Task", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Task findUnique
   */
  export type TaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findUniqueOrThrow
   */
  export type TaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task findFirst
   */
  export type TaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findFirstOrThrow
   */
  export type TaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Task to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tasks.
     */
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task findMany
   */
  export type TaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter, which Tasks to fetch.
     */
    where?: TaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tasks to fetch.
     */
    orderBy?: TaskOrderByWithRelationInput | TaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tasks.
     */
    cursor?: TaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tasks.
     */
    skip?: number
    distinct?: TaskScalarFieldEnum | TaskScalarFieldEnum[]
  }

  /**
   * Task create
   */
  export type TaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to create a Task.
     */
    data: XOR<TaskCreateInput, TaskUncheckedCreateInput>
  }

  /**
   * Task createMany
   */
  export type TaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tasks.
     */
    data: TaskCreateManyInput | TaskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Task update
   */
  export type TaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The data needed to update a Task.
     */
    data: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
    /**
     * Choose, which Task to update.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task updateMany
   */
  export type TaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tasks.
     */
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyInput>
    /**
     * Filter which Tasks to update
     */
    where?: TaskWhereInput
  }

  /**
   * Task upsert
   */
  export type TaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * The filter to search for the Task to update in case it exists.
     */
    where: TaskWhereUniqueInput
    /**
     * In case the Task found by the `where` argument doesn't exist, create a new Task with this data.
     */
    create: XOR<TaskCreateInput, TaskUncheckedCreateInput>
    /**
     * In case the Task was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TaskUpdateInput, TaskUncheckedUpdateInput>
  }

  /**
   * Task delete
   */
  export type TaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
    /**
     * Filter which Task to delete.
     */
    where: TaskWhereUniqueInput
  }

  /**
   * Task deleteMany
   */
  export type TaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tasks to delete
     */
    where?: TaskWhereInput
  }

  /**
   * Task without action
   */
  export type TaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Task
     */
    select?: TaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TaskInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    email: 'email',
    name: 'name',
    surname: 'surname',
    password: 'password',
    position: 'position',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CustomerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    code: 'code',
    email: 'email',
    phone: 'phone'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const ProcurementScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    expectedValue: 'expectedValue',
    resultValue: 'resultValue',
    announcedAt: 'announcedAt',
    finishedAt: 'finishedAt',
    prozorroId: 'prozorroId',
    prozorroLink: 'prozorroLink',
    product: 'product',
    unit: 'unit',
    scope: 'scope',
    status: 'status',
    customerId: 'customerId',
    userId: 'userId',
    jointProcurementid: 'jointProcurementid'
  };

  export type ProcurementScalarFieldEnum = (typeof ProcurementScalarFieldEnum)[keyof typeof ProcurementScalarFieldEnum]


  export const JointProcurementScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    expectedValue: 'expectedValue',
    resultValue: 'resultValue',
    announcedAt: 'announcedAt',
    finishedAt: 'finishedAt',
    prozorroId: 'prozorroId',
    prozorroLink: 'prozorroLink',
    product: 'product',
    unit: 'unit',
    scope: 'scope',
    status: 'status'
  };

  export type JointProcurementScalarFieldEnum = (typeof JointProcurementScalarFieldEnum)[keyof typeof JointProcurementScalarFieldEnum]


  export const ContractScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    number: 'number',
    prozorroLink: 'prozorroLink',
    startValue: 'startValue',
    currentValue: 'currentValue',
    signatureDate: 'signatureDate',
    terminationDate: 'terminationDate',
    product: 'product',
    unit: 'unit',
    scope: 'scope',
    procurementId: 'procurementId'
  };

  export type ContractScalarFieldEnum = (typeof ContractScalarFieldEnum)[keyof typeof ContractScalarFieldEnum]


  export const ContractAgreementScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    number: 'number',
    signatureDate: 'signatureDate',
    reason: 'reason',
    changes: 'changes',
    contractId: 'contractId'
  };

  export type ContractAgreementScalarFieldEnum = (typeof ContractAgreementScalarFieldEnum)[keyof typeof ContractAgreementScalarFieldEnum]


  export const TaskScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    name: 'name',
    priority: 'priority',
    status: 'status',
    terminationDate: 'terminationDate',
    isCompleted: 'isCompleted',
    notes: 'notes',
    userId: 'userId'
  };

  export type TaskScalarFieldEnum = (typeof TaskScalarFieldEnum)[keyof typeof TaskScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Priority'
   */
  export type EnumPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Priority'>
    


  /**
   * Reference to a field of type 'Priority[]'
   */
  export type ListEnumPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Priority[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    surname?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    position?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    tasks?: TaskListRelationFilter
    procurements?: ProcurementListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    surname?: SortOrderInput | SortOrder
    password?: SortOrder
    position?: SortOrderInput | SortOrder
    role?: SortOrder
    tasks?: TaskOrderByRelationAggregateInput
    procurements?: ProcurementOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    name?: StringNullableFilter<"User"> | string | null
    surname?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    position?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    tasks?: TaskListRelationFilter
    procurements?: ProcurementListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    surname?: SortOrderInput | SortOrder
    password?: SortOrder
    position?: SortOrderInput | SortOrder
    role?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    surname?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringWithAggregatesFilter<"User"> | string
    position?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: StringWithAggregatesFilter<"User"> | string
  }

  export type CustomerWhereInput = {
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    id?: StringFilter<"Customer"> | string
    name?: StringFilter<"Customer"> | string
    code?: StringFilter<"Customer"> | string
    email?: StringFilter<"Customer"> | string
    phone?: StringFilter<"Customer"> | string
    procurements?: ProcurementListRelationFilter
  }

  export type CustomerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    procurements?: ProcurementOrderByRelationAggregateInput
  }

  export type CustomerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    name?: StringFilter<"Customer"> | string
    code?: StringFilter<"Customer"> | string
    email?: StringFilter<"Customer"> | string
    phone?: StringFilter<"Customer"> | string
    procurements?: ProcurementListRelationFilter
  }, "id">

  export type CustomerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    _count?: CustomerCountOrderByAggregateInput
    _max?: CustomerMaxOrderByAggregateInput
    _min?: CustomerMinOrderByAggregateInput
  }

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    OR?: CustomerScalarWhereWithAggregatesInput[]
    NOT?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Customer"> | string
    name?: StringWithAggregatesFilter<"Customer"> | string
    code?: StringWithAggregatesFilter<"Customer"> | string
    email?: StringWithAggregatesFilter<"Customer"> | string
    phone?: StringWithAggregatesFilter<"Customer"> | string
  }

  export type ProcurementWhereInput = {
    AND?: ProcurementWhereInput | ProcurementWhereInput[]
    OR?: ProcurementWhereInput[]
    NOT?: ProcurementWhereInput | ProcurementWhereInput[]
    id?: StringFilter<"Procurement"> | string
    createdAt?: DateTimeFilter<"Procurement"> | Date | string
    updatedAt?: DateTimeFilter<"Procurement"> | Date | string
    expectedValue?: DecimalFilter<"Procurement"> | Decimal | DecimalJsLike | number | string
    resultValue?: DecimalNullableFilter<"Procurement"> | Decimal | DecimalJsLike | number | string | null
    announcedAt?: DateTimeNullableFilter<"Procurement"> | Date | string | null
    finishedAt?: DateTimeNullableFilter<"Procurement"> | Date | string | null
    prozorroId?: StringNullableFilter<"Procurement"> | string | null
    prozorroLink?: StringNullableFilter<"Procurement"> | string | null
    product?: StringFilter<"Procurement"> | string
    unit?: StringFilter<"Procurement"> | string
    scope?: StringFilter<"Procurement"> | string
    status?: StringFilter<"Procurement"> | string
    customerId?: StringFilter<"Procurement"> | string
    userId?: StringFilter<"Procurement"> | string
    jointProcurementid?: StringNullableFilter<"Procurement"> | string | null
    customer?: XOR<CustomerRelationFilter, CustomerWhereInput>
    manager?: XOR<UserRelationFilter, UserWhereInput>
    jointProcurement?: XOR<JointProcurementNullableRelationFilter, JointProcurementWhereInput> | null
    contracts?: ContractListRelationFilter
  }

  export type ProcurementOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    expectedValue?: SortOrder
    resultValue?: SortOrderInput | SortOrder
    announcedAt?: SortOrderInput | SortOrder
    finishedAt?: SortOrderInput | SortOrder
    prozorroId?: SortOrderInput | SortOrder
    prozorroLink?: SortOrderInput | SortOrder
    product?: SortOrder
    unit?: SortOrder
    scope?: SortOrder
    status?: SortOrder
    customerId?: SortOrder
    userId?: SortOrder
    jointProcurementid?: SortOrderInput | SortOrder
    customer?: CustomerOrderByWithRelationInput
    manager?: UserOrderByWithRelationInput
    jointProcurement?: JointProcurementOrderByWithRelationInput
    contracts?: ContractOrderByRelationAggregateInput
  }

  export type ProcurementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProcurementWhereInput | ProcurementWhereInput[]
    OR?: ProcurementWhereInput[]
    NOT?: ProcurementWhereInput | ProcurementWhereInput[]
    createdAt?: DateTimeFilter<"Procurement"> | Date | string
    updatedAt?: DateTimeFilter<"Procurement"> | Date | string
    expectedValue?: DecimalFilter<"Procurement"> | Decimal | DecimalJsLike | number | string
    resultValue?: DecimalNullableFilter<"Procurement"> | Decimal | DecimalJsLike | number | string | null
    announcedAt?: DateTimeNullableFilter<"Procurement"> | Date | string | null
    finishedAt?: DateTimeNullableFilter<"Procurement"> | Date | string | null
    prozorroId?: StringNullableFilter<"Procurement"> | string | null
    prozorroLink?: StringNullableFilter<"Procurement"> | string | null
    product?: StringFilter<"Procurement"> | string
    unit?: StringFilter<"Procurement"> | string
    scope?: StringFilter<"Procurement"> | string
    status?: StringFilter<"Procurement"> | string
    customerId?: StringFilter<"Procurement"> | string
    userId?: StringFilter<"Procurement"> | string
    jointProcurementid?: StringNullableFilter<"Procurement"> | string | null
    customer?: XOR<CustomerRelationFilter, CustomerWhereInput>
    manager?: XOR<UserRelationFilter, UserWhereInput>
    jointProcurement?: XOR<JointProcurementNullableRelationFilter, JointProcurementWhereInput> | null
    contracts?: ContractListRelationFilter
  }, "id">

  export type ProcurementOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    expectedValue?: SortOrder
    resultValue?: SortOrderInput | SortOrder
    announcedAt?: SortOrderInput | SortOrder
    finishedAt?: SortOrderInput | SortOrder
    prozorroId?: SortOrderInput | SortOrder
    prozorroLink?: SortOrderInput | SortOrder
    product?: SortOrder
    unit?: SortOrder
    scope?: SortOrder
    status?: SortOrder
    customerId?: SortOrder
    userId?: SortOrder
    jointProcurementid?: SortOrderInput | SortOrder
    _count?: ProcurementCountOrderByAggregateInput
    _avg?: ProcurementAvgOrderByAggregateInput
    _max?: ProcurementMaxOrderByAggregateInput
    _min?: ProcurementMinOrderByAggregateInput
    _sum?: ProcurementSumOrderByAggregateInput
  }

  export type ProcurementScalarWhereWithAggregatesInput = {
    AND?: ProcurementScalarWhereWithAggregatesInput | ProcurementScalarWhereWithAggregatesInput[]
    OR?: ProcurementScalarWhereWithAggregatesInput[]
    NOT?: ProcurementScalarWhereWithAggregatesInput | ProcurementScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Procurement"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Procurement"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Procurement"> | Date | string
    expectedValue?: DecimalWithAggregatesFilter<"Procurement"> | Decimal | DecimalJsLike | number | string
    resultValue?: DecimalNullableWithAggregatesFilter<"Procurement"> | Decimal | DecimalJsLike | number | string | null
    announcedAt?: DateTimeNullableWithAggregatesFilter<"Procurement"> | Date | string | null
    finishedAt?: DateTimeNullableWithAggregatesFilter<"Procurement"> | Date | string | null
    prozorroId?: StringNullableWithAggregatesFilter<"Procurement"> | string | null
    prozorroLink?: StringNullableWithAggregatesFilter<"Procurement"> | string | null
    product?: StringWithAggregatesFilter<"Procurement"> | string
    unit?: StringWithAggregatesFilter<"Procurement"> | string
    scope?: StringWithAggregatesFilter<"Procurement"> | string
    status?: StringWithAggregatesFilter<"Procurement"> | string
    customerId?: StringWithAggregatesFilter<"Procurement"> | string
    userId?: StringWithAggregatesFilter<"Procurement"> | string
    jointProcurementid?: StringNullableWithAggregatesFilter<"Procurement"> | string | null
  }

  export type JointProcurementWhereInput = {
    AND?: JointProcurementWhereInput | JointProcurementWhereInput[]
    OR?: JointProcurementWhereInput[]
    NOT?: JointProcurementWhereInput | JointProcurementWhereInput[]
    id?: StringFilter<"JointProcurement"> | string
    createdAt?: DateTimeFilter<"JointProcurement"> | Date | string
    updatedAt?: DateTimeFilter<"JointProcurement"> | Date | string
    expectedValue?: DecimalFilter<"JointProcurement"> | Decimal | DecimalJsLike | number | string
    resultValue?: DecimalNullableFilter<"JointProcurement"> | Decimal | DecimalJsLike | number | string | null
    announcedAt?: DateTimeNullableFilter<"JointProcurement"> | Date | string | null
    finishedAt?: DateTimeNullableFilter<"JointProcurement"> | Date | string | null
    prozorroId?: StringNullableFilter<"JointProcurement"> | string | null
    prozorroLink?: StringNullableFilter<"JointProcurement"> | string | null
    product?: StringFilter<"JointProcurement"> | string
    unit?: StringFilter<"JointProcurement"> | string
    scope?: StringFilter<"JointProcurement"> | string
    status?: StringFilter<"JointProcurement"> | string
    procurements?: ProcurementListRelationFilter
  }

  export type JointProcurementOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    expectedValue?: SortOrder
    resultValue?: SortOrderInput | SortOrder
    announcedAt?: SortOrderInput | SortOrder
    finishedAt?: SortOrderInput | SortOrder
    prozorroId?: SortOrderInput | SortOrder
    prozorroLink?: SortOrderInput | SortOrder
    product?: SortOrder
    unit?: SortOrder
    scope?: SortOrder
    status?: SortOrder
    procurements?: ProcurementOrderByRelationAggregateInput
  }

  export type JointProcurementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: JointProcurementWhereInput | JointProcurementWhereInput[]
    OR?: JointProcurementWhereInput[]
    NOT?: JointProcurementWhereInput | JointProcurementWhereInput[]
    createdAt?: DateTimeFilter<"JointProcurement"> | Date | string
    updatedAt?: DateTimeFilter<"JointProcurement"> | Date | string
    expectedValue?: DecimalFilter<"JointProcurement"> | Decimal | DecimalJsLike | number | string
    resultValue?: DecimalNullableFilter<"JointProcurement"> | Decimal | DecimalJsLike | number | string | null
    announcedAt?: DateTimeNullableFilter<"JointProcurement"> | Date | string | null
    finishedAt?: DateTimeNullableFilter<"JointProcurement"> | Date | string | null
    prozorroId?: StringNullableFilter<"JointProcurement"> | string | null
    prozorroLink?: StringNullableFilter<"JointProcurement"> | string | null
    product?: StringFilter<"JointProcurement"> | string
    unit?: StringFilter<"JointProcurement"> | string
    scope?: StringFilter<"JointProcurement"> | string
    status?: StringFilter<"JointProcurement"> | string
    procurements?: ProcurementListRelationFilter
  }, "id">

  export type JointProcurementOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    expectedValue?: SortOrder
    resultValue?: SortOrderInput | SortOrder
    announcedAt?: SortOrderInput | SortOrder
    finishedAt?: SortOrderInput | SortOrder
    prozorroId?: SortOrderInput | SortOrder
    prozorroLink?: SortOrderInput | SortOrder
    product?: SortOrder
    unit?: SortOrder
    scope?: SortOrder
    status?: SortOrder
    _count?: JointProcurementCountOrderByAggregateInput
    _avg?: JointProcurementAvgOrderByAggregateInput
    _max?: JointProcurementMaxOrderByAggregateInput
    _min?: JointProcurementMinOrderByAggregateInput
    _sum?: JointProcurementSumOrderByAggregateInput
  }

  export type JointProcurementScalarWhereWithAggregatesInput = {
    AND?: JointProcurementScalarWhereWithAggregatesInput | JointProcurementScalarWhereWithAggregatesInput[]
    OR?: JointProcurementScalarWhereWithAggregatesInput[]
    NOT?: JointProcurementScalarWhereWithAggregatesInput | JointProcurementScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"JointProcurement"> | string
    createdAt?: DateTimeWithAggregatesFilter<"JointProcurement"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"JointProcurement"> | Date | string
    expectedValue?: DecimalWithAggregatesFilter<"JointProcurement"> | Decimal | DecimalJsLike | number | string
    resultValue?: DecimalNullableWithAggregatesFilter<"JointProcurement"> | Decimal | DecimalJsLike | number | string | null
    announcedAt?: DateTimeNullableWithAggregatesFilter<"JointProcurement"> | Date | string | null
    finishedAt?: DateTimeNullableWithAggregatesFilter<"JointProcurement"> | Date | string | null
    prozorroId?: StringNullableWithAggregatesFilter<"JointProcurement"> | string | null
    prozorroLink?: StringNullableWithAggregatesFilter<"JointProcurement"> | string | null
    product?: StringWithAggregatesFilter<"JointProcurement"> | string
    unit?: StringWithAggregatesFilter<"JointProcurement"> | string
    scope?: StringWithAggregatesFilter<"JointProcurement"> | string
    status?: StringWithAggregatesFilter<"JointProcurement"> | string
  }

  export type ContractWhereInput = {
    AND?: ContractWhereInput | ContractWhereInput[]
    OR?: ContractWhereInput[]
    NOT?: ContractWhereInput | ContractWhereInput[]
    id?: StringFilter<"Contract"> | string
    createdAt?: DateTimeFilter<"Contract"> | Date | string
    updatedAt?: DateTimeFilter<"Contract"> | Date | string
    number?: StringFilter<"Contract"> | string
    prozorroLink?: StringNullableFilter<"Contract"> | string | null
    startValue?: DecimalFilter<"Contract"> | Decimal | DecimalJsLike | number | string
    currentValue?: DecimalNullableFilter<"Contract"> | Decimal | DecimalJsLike | number | string | null
    signatureDate?: DateTimeFilter<"Contract"> | Date | string
    terminationDate?: DateTimeFilter<"Contract"> | Date | string
    product?: StringFilter<"Contract"> | string
    unit?: StringFilter<"Contract"> | string
    scope?: StringFilter<"Contract"> | string
    procurementId?: StringFilter<"Contract"> | string
    procurement?: XOR<ProcurementRelationFilter, ProcurementWhereInput>
    agreements?: ContractAgreementListRelationFilter
  }

  export type ContractOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    number?: SortOrder
    prozorroLink?: SortOrderInput | SortOrder
    startValue?: SortOrder
    currentValue?: SortOrderInput | SortOrder
    signatureDate?: SortOrder
    terminationDate?: SortOrder
    product?: SortOrder
    unit?: SortOrder
    scope?: SortOrder
    procurementId?: SortOrder
    procurement?: ProcurementOrderByWithRelationInput
    agreements?: contractAgreementOrderByRelationAggregateInput
  }

  export type ContractWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ContractWhereInput | ContractWhereInput[]
    OR?: ContractWhereInput[]
    NOT?: ContractWhereInput | ContractWhereInput[]
    createdAt?: DateTimeFilter<"Contract"> | Date | string
    updatedAt?: DateTimeFilter<"Contract"> | Date | string
    number?: StringFilter<"Contract"> | string
    prozorroLink?: StringNullableFilter<"Contract"> | string | null
    startValue?: DecimalFilter<"Contract"> | Decimal | DecimalJsLike | number | string
    currentValue?: DecimalNullableFilter<"Contract"> | Decimal | DecimalJsLike | number | string | null
    signatureDate?: DateTimeFilter<"Contract"> | Date | string
    terminationDate?: DateTimeFilter<"Contract"> | Date | string
    product?: StringFilter<"Contract"> | string
    unit?: StringFilter<"Contract"> | string
    scope?: StringFilter<"Contract"> | string
    procurementId?: StringFilter<"Contract"> | string
    procurement?: XOR<ProcurementRelationFilter, ProcurementWhereInput>
    agreements?: ContractAgreementListRelationFilter
  }, "id">

  export type ContractOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    number?: SortOrder
    prozorroLink?: SortOrderInput | SortOrder
    startValue?: SortOrder
    currentValue?: SortOrderInput | SortOrder
    signatureDate?: SortOrder
    terminationDate?: SortOrder
    product?: SortOrder
    unit?: SortOrder
    scope?: SortOrder
    procurementId?: SortOrder
    _count?: ContractCountOrderByAggregateInput
    _avg?: ContractAvgOrderByAggregateInput
    _max?: ContractMaxOrderByAggregateInput
    _min?: ContractMinOrderByAggregateInput
    _sum?: ContractSumOrderByAggregateInput
  }

  export type ContractScalarWhereWithAggregatesInput = {
    AND?: ContractScalarWhereWithAggregatesInput | ContractScalarWhereWithAggregatesInput[]
    OR?: ContractScalarWhereWithAggregatesInput[]
    NOT?: ContractScalarWhereWithAggregatesInput | ContractScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Contract"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Contract"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Contract"> | Date | string
    number?: StringWithAggregatesFilter<"Contract"> | string
    prozorroLink?: StringNullableWithAggregatesFilter<"Contract"> | string | null
    startValue?: DecimalWithAggregatesFilter<"Contract"> | Decimal | DecimalJsLike | number | string
    currentValue?: DecimalNullableWithAggregatesFilter<"Contract"> | Decimal | DecimalJsLike | number | string | null
    signatureDate?: DateTimeWithAggregatesFilter<"Contract"> | Date | string
    terminationDate?: DateTimeWithAggregatesFilter<"Contract"> | Date | string
    product?: StringWithAggregatesFilter<"Contract"> | string
    unit?: StringWithAggregatesFilter<"Contract"> | string
    scope?: StringWithAggregatesFilter<"Contract"> | string
    procurementId?: StringWithAggregatesFilter<"Contract"> | string
  }

  export type contractAgreementWhereInput = {
    AND?: contractAgreementWhereInput | contractAgreementWhereInput[]
    OR?: contractAgreementWhereInput[]
    NOT?: contractAgreementWhereInput | contractAgreementWhereInput[]
    id?: StringFilter<"contractAgreement"> | string
    createdAt?: DateTimeFilter<"contractAgreement"> | Date | string
    number?: StringFilter<"contractAgreement"> | string
    signatureDate?: DateTimeFilter<"contractAgreement"> | Date | string
    reason?: StringFilter<"contractAgreement"> | string
    changes?: StringFilter<"contractAgreement"> | string
    contractId?: StringFilter<"contractAgreement"> | string
    contract?: XOR<ContractRelationFilter, ContractWhereInput>
  }

  export type contractAgreementOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    number?: SortOrder
    signatureDate?: SortOrder
    reason?: SortOrder
    changes?: SortOrder
    contractId?: SortOrder
    contract?: ContractOrderByWithRelationInput
  }

  export type contractAgreementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: contractAgreementWhereInput | contractAgreementWhereInput[]
    OR?: contractAgreementWhereInput[]
    NOT?: contractAgreementWhereInput | contractAgreementWhereInput[]
    createdAt?: DateTimeFilter<"contractAgreement"> | Date | string
    number?: StringFilter<"contractAgreement"> | string
    signatureDate?: DateTimeFilter<"contractAgreement"> | Date | string
    reason?: StringFilter<"contractAgreement"> | string
    changes?: StringFilter<"contractAgreement"> | string
    contractId?: StringFilter<"contractAgreement"> | string
    contract?: XOR<ContractRelationFilter, ContractWhereInput>
  }, "id">

  export type contractAgreementOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    number?: SortOrder
    signatureDate?: SortOrder
    reason?: SortOrder
    changes?: SortOrder
    contractId?: SortOrder
    _count?: contractAgreementCountOrderByAggregateInput
    _max?: contractAgreementMaxOrderByAggregateInput
    _min?: contractAgreementMinOrderByAggregateInput
  }

  export type contractAgreementScalarWhereWithAggregatesInput = {
    AND?: contractAgreementScalarWhereWithAggregatesInput | contractAgreementScalarWhereWithAggregatesInput[]
    OR?: contractAgreementScalarWhereWithAggregatesInput[]
    NOT?: contractAgreementScalarWhereWithAggregatesInput | contractAgreementScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"contractAgreement"> | string
    createdAt?: DateTimeWithAggregatesFilter<"contractAgreement"> | Date | string
    number?: StringWithAggregatesFilter<"contractAgreement"> | string
    signatureDate?: DateTimeWithAggregatesFilter<"contractAgreement"> | Date | string
    reason?: StringWithAggregatesFilter<"contractAgreement"> | string
    changes?: StringWithAggregatesFilter<"contractAgreement"> | string
    contractId?: StringWithAggregatesFilter<"contractAgreement"> | string
  }

  export type TaskWhereInput = {
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    id?: StringFilter<"Task"> | string
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
    name?: StringFilter<"Task"> | string
    priority?: EnumPriorityNullableFilter<"Task"> | $Enums.Priority | null
    status?: StringFilter<"Task"> | string
    terminationDate?: DateTimeFilter<"Task"> | Date | string
    isCompleted?: BoolFilter<"Task"> | boolean
    notes?: StringNullableFilter<"Task"> | string | null
    userId?: StringFilter<"Task"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type TaskOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    priority?: SortOrderInput | SortOrder
    status?: SortOrder
    terminationDate?: SortOrder
    isCompleted?: SortOrder
    notes?: SortOrderInput | SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type TaskWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TaskWhereInput | TaskWhereInput[]
    OR?: TaskWhereInput[]
    NOT?: TaskWhereInput | TaskWhereInput[]
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
    name?: StringFilter<"Task"> | string
    priority?: EnumPriorityNullableFilter<"Task"> | $Enums.Priority | null
    status?: StringFilter<"Task"> | string
    terminationDate?: DateTimeFilter<"Task"> | Date | string
    isCompleted?: BoolFilter<"Task"> | boolean
    notes?: StringNullableFilter<"Task"> | string | null
    userId?: StringFilter<"Task"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type TaskOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    priority?: SortOrderInput | SortOrder
    status?: SortOrder
    terminationDate?: SortOrder
    isCompleted?: SortOrder
    notes?: SortOrderInput | SortOrder
    userId?: SortOrder
    _count?: TaskCountOrderByAggregateInput
    _max?: TaskMaxOrderByAggregateInput
    _min?: TaskMinOrderByAggregateInput
  }

  export type TaskScalarWhereWithAggregatesInput = {
    AND?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    OR?: TaskScalarWhereWithAggregatesInput[]
    NOT?: TaskScalarWhereWithAggregatesInput | TaskScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Task"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Task"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Task"> | Date | string
    name?: StringWithAggregatesFilter<"Task"> | string
    priority?: EnumPriorityNullableWithAggregatesFilter<"Task"> | $Enums.Priority | null
    status?: StringWithAggregatesFilter<"Task"> | string
    terminationDate?: DateTimeWithAggregatesFilter<"Task"> | Date | string
    isCompleted?: BoolWithAggregatesFilter<"Task"> | boolean
    notes?: StringNullableWithAggregatesFilter<"Task"> | string | null
    userId?: StringWithAggregatesFilter<"Task"> | string
  }

  export type UserCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    name?: string | null
    surname?: string | null
    password: string
    position?: string | null
    role?: string
    tasks?: TaskCreateNestedManyWithoutUserInput
    procurements?: ProcurementCreateNestedManyWithoutManagerInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    name?: string | null
    surname?: string | null
    password: string
    position?: string | null
    role?: string
    tasks?: TaskUncheckedCreateNestedManyWithoutUserInput
    procurements?: ProcurementUncheckedCreateNestedManyWithoutManagerInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    position?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    tasks?: TaskUpdateManyWithoutUserNestedInput
    procurements?: ProcurementUpdateManyWithoutManagerNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    position?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    tasks?: TaskUncheckedUpdateManyWithoutUserNestedInput
    procurements?: ProcurementUncheckedUpdateManyWithoutManagerNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    name?: string | null
    surname?: string | null
    password: string
    position?: string | null
    role?: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    position?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    position?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
  }

  export type CustomerCreateInput = {
    id?: string
    name: string
    code: string
    email: string
    phone: string
    procurements?: ProcurementCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateInput = {
    id?: string
    name: string
    code: string
    email: string
    phone: string
    procurements?: ProcurementUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    procurements?: ProcurementUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    procurements?: ProcurementUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerCreateManyInput = {
    id?: string
    name: string
    code: string
    email: string
    phone: string
  }

  export type CustomerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
  }

  export type CustomerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
  }

  export type ProcurementCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    expectedValue: Decimal | DecimalJsLike | number | string
    resultValue?: Decimal | DecimalJsLike | number | string | null
    announcedAt?: Date | string | null
    finishedAt?: Date | string | null
    prozorroId?: string | null
    prozorroLink?: string | null
    product: string
    unit: string
    scope: string
    status?: string
    customer: CustomerCreateNestedOneWithoutProcurementsInput
    manager: UserCreateNestedOneWithoutProcurementsInput
    jointProcurement?: JointProcurementCreateNestedOneWithoutProcurementsInput
    contracts?: ContractCreateNestedManyWithoutProcurementInput
  }

  export type ProcurementUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    expectedValue: Decimal | DecimalJsLike | number | string
    resultValue?: Decimal | DecimalJsLike | number | string | null
    announcedAt?: Date | string | null
    finishedAt?: Date | string | null
    prozorroId?: string | null
    prozorroLink?: string | null
    product: string
    unit: string
    scope: string
    status?: string
    customerId: string
    userId: string
    jointProcurementid?: string | null
    contracts?: ContractUncheckedCreateNestedManyWithoutProcurementInput
  }

  export type ProcurementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expectedValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    resultValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    announcedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    prozorroId?: NullableStringFieldUpdateOperationsInput | string | null
    prozorroLink?: NullableStringFieldUpdateOperationsInput | string | null
    product?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    scope?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    customer?: CustomerUpdateOneRequiredWithoutProcurementsNestedInput
    manager?: UserUpdateOneRequiredWithoutProcurementsNestedInput
    jointProcurement?: JointProcurementUpdateOneWithoutProcurementsNestedInput
    contracts?: ContractUpdateManyWithoutProcurementNestedInput
  }

  export type ProcurementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expectedValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    resultValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    announcedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    prozorroId?: NullableStringFieldUpdateOperationsInput | string | null
    prozorroLink?: NullableStringFieldUpdateOperationsInput | string | null
    product?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    scope?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    jointProcurementid?: NullableStringFieldUpdateOperationsInput | string | null
    contracts?: ContractUncheckedUpdateManyWithoutProcurementNestedInput
  }

  export type ProcurementCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    expectedValue: Decimal | DecimalJsLike | number | string
    resultValue?: Decimal | DecimalJsLike | number | string | null
    announcedAt?: Date | string | null
    finishedAt?: Date | string | null
    prozorroId?: string | null
    prozorroLink?: string | null
    product: string
    unit: string
    scope: string
    status?: string
    customerId: string
    userId: string
    jointProcurementid?: string | null
  }

  export type ProcurementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expectedValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    resultValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    announcedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    prozorroId?: NullableStringFieldUpdateOperationsInput | string | null
    prozorroLink?: NullableStringFieldUpdateOperationsInput | string | null
    product?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    scope?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ProcurementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expectedValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    resultValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    announcedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    prozorroId?: NullableStringFieldUpdateOperationsInput | string | null
    prozorroLink?: NullableStringFieldUpdateOperationsInput | string | null
    product?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    scope?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    jointProcurementid?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type JointProcurementCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    expectedValue: Decimal | DecimalJsLike | number | string
    resultValue?: Decimal | DecimalJsLike | number | string | null
    announcedAt?: Date | string | null
    finishedAt?: Date | string | null
    prozorroId?: string | null
    prozorroLink?: string | null
    product: string
    unit: string
    scope: string
    status?: string
    procurements?: ProcurementCreateNestedManyWithoutJointProcurementInput
  }

  export type JointProcurementUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    expectedValue: Decimal | DecimalJsLike | number | string
    resultValue?: Decimal | DecimalJsLike | number | string | null
    announcedAt?: Date | string | null
    finishedAt?: Date | string | null
    prozorroId?: string | null
    prozorroLink?: string | null
    product: string
    unit: string
    scope: string
    status?: string
    procurements?: ProcurementUncheckedCreateNestedManyWithoutJointProcurementInput
  }

  export type JointProcurementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expectedValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    resultValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    announcedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    prozorroId?: NullableStringFieldUpdateOperationsInput | string | null
    prozorroLink?: NullableStringFieldUpdateOperationsInput | string | null
    product?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    scope?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    procurements?: ProcurementUpdateManyWithoutJointProcurementNestedInput
  }

  export type JointProcurementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expectedValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    resultValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    announcedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    prozorroId?: NullableStringFieldUpdateOperationsInput | string | null
    prozorroLink?: NullableStringFieldUpdateOperationsInput | string | null
    product?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    scope?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    procurements?: ProcurementUncheckedUpdateManyWithoutJointProcurementNestedInput
  }

  export type JointProcurementCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    expectedValue: Decimal | DecimalJsLike | number | string
    resultValue?: Decimal | DecimalJsLike | number | string | null
    announcedAt?: Date | string | null
    finishedAt?: Date | string | null
    prozorroId?: string | null
    prozorroLink?: string | null
    product: string
    unit: string
    scope: string
    status?: string
  }

  export type JointProcurementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expectedValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    resultValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    announcedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    prozorroId?: NullableStringFieldUpdateOperationsInput | string | null
    prozorroLink?: NullableStringFieldUpdateOperationsInput | string | null
    product?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    scope?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type JointProcurementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expectedValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    resultValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    announcedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    prozorroId?: NullableStringFieldUpdateOperationsInput | string | null
    prozorroLink?: NullableStringFieldUpdateOperationsInput | string | null
    product?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    scope?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ContractCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    number: string
    prozorroLink?: string | null
    startValue: Decimal | DecimalJsLike | number | string
    currentValue?: Decimal | DecimalJsLike | number | string | null
    signatureDate: Date | string
    terminationDate: Date | string
    product: string
    unit: string
    scope: string
    procurement: ProcurementCreateNestedOneWithoutContractsInput
    agreements?: contractAgreementCreateNestedManyWithoutContractInput
  }

  export type ContractUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    number: string
    prozorroLink?: string | null
    startValue: Decimal | DecimalJsLike | number | string
    currentValue?: Decimal | DecimalJsLike | number | string | null
    signatureDate: Date | string
    terminationDate: Date | string
    product: string
    unit: string
    scope: string
    procurementId: string
    agreements?: contractAgreementUncheckedCreateNestedManyWithoutContractInput
  }

  export type ContractUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    number?: StringFieldUpdateOperationsInput | string
    prozorroLink?: NullableStringFieldUpdateOperationsInput | string | null
    startValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currentValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    signatureDate?: DateTimeFieldUpdateOperationsInput | Date | string
    terminationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    scope?: StringFieldUpdateOperationsInput | string
    procurement?: ProcurementUpdateOneRequiredWithoutContractsNestedInput
    agreements?: contractAgreementUpdateManyWithoutContractNestedInput
  }

  export type ContractUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    number?: StringFieldUpdateOperationsInput | string
    prozorroLink?: NullableStringFieldUpdateOperationsInput | string | null
    startValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currentValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    signatureDate?: DateTimeFieldUpdateOperationsInput | Date | string
    terminationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    scope?: StringFieldUpdateOperationsInput | string
    procurementId?: StringFieldUpdateOperationsInput | string
    agreements?: contractAgreementUncheckedUpdateManyWithoutContractNestedInput
  }

  export type ContractCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    number: string
    prozorroLink?: string | null
    startValue: Decimal | DecimalJsLike | number | string
    currentValue?: Decimal | DecimalJsLike | number | string | null
    signatureDate: Date | string
    terminationDate: Date | string
    product: string
    unit: string
    scope: string
    procurementId: string
  }

  export type ContractUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    number?: StringFieldUpdateOperationsInput | string
    prozorroLink?: NullableStringFieldUpdateOperationsInput | string | null
    startValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currentValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    signatureDate?: DateTimeFieldUpdateOperationsInput | Date | string
    terminationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    scope?: StringFieldUpdateOperationsInput | string
  }

  export type ContractUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    number?: StringFieldUpdateOperationsInput | string
    prozorroLink?: NullableStringFieldUpdateOperationsInput | string | null
    startValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currentValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    signatureDate?: DateTimeFieldUpdateOperationsInput | Date | string
    terminationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    scope?: StringFieldUpdateOperationsInput | string
    procurementId?: StringFieldUpdateOperationsInput | string
  }

  export type contractAgreementCreateInput = {
    id?: string
    createdAt?: Date | string
    number: string
    signatureDate: Date | string
    reason: string
    changes: string
    contract: ContractCreateNestedOneWithoutAgreementsInput
  }

  export type contractAgreementUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    number: string
    signatureDate: Date | string
    reason: string
    changes: string
    contractId: string
  }

  export type contractAgreementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    number?: StringFieldUpdateOperationsInput | string
    signatureDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: StringFieldUpdateOperationsInput | string
    changes?: StringFieldUpdateOperationsInput | string
    contract?: ContractUpdateOneRequiredWithoutAgreementsNestedInput
  }

  export type contractAgreementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    number?: StringFieldUpdateOperationsInput | string
    signatureDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: StringFieldUpdateOperationsInput | string
    changes?: StringFieldUpdateOperationsInput | string
    contractId?: StringFieldUpdateOperationsInput | string
  }

  export type contractAgreementCreateManyInput = {
    id?: string
    createdAt?: Date | string
    number: string
    signatureDate: Date | string
    reason: string
    changes: string
    contractId: string
  }

  export type contractAgreementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    number?: StringFieldUpdateOperationsInput | string
    signatureDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: StringFieldUpdateOperationsInput | string
    changes?: StringFieldUpdateOperationsInput | string
  }

  export type contractAgreementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    number?: StringFieldUpdateOperationsInput | string
    signatureDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: StringFieldUpdateOperationsInput | string
    changes?: StringFieldUpdateOperationsInput | string
    contractId?: StringFieldUpdateOperationsInput | string
  }

  export type TaskCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    priority?: $Enums.Priority | null
    status?: string
    terminationDate: Date | string
    isCompleted?: boolean
    notes?: string | null
    user: UserCreateNestedOneWithoutTasksInput
  }

  export type TaskUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    priority?: $Enums.Priority | null
    status?: string
    terminationDate: Date | string
    isCompleted?: boolean
    notes?: string | null
    userId: string
  }

  export type TaskUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    priority?: NullableEnumPriorityFieldUpdateOperationsInput | $Enums.Priority | null
    status?: StringFieldUpdateOperationsInput | string
    terminationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutTasksNestedInput
  }

  export type TaskUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    priority?: NullableEnumPriorityFieldUpdateOperationsInput | $Enums.Priority | null
    status?: StringFieldUpdateOperationsInput | string
    terminationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type TaskCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    priority?: $Enums.Priority | null
    status?: string
    terminationDate: Date | string
    isCompleted?: boolean
    notes?: string | null
    userId: string
  }

  export type TaskUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    priority?: NullableEnumPriorityFieldUpdateOperationsInput | $Enums.Priority | null
    status?: StringFieldUpdateOperationsInput | string
    terminationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TaskUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    priority?: NullableEnumPriorityFieldUpdateOperationsInput | $Enums.Priority | null
    status?: StringFieldUpdateOperationsInput | string
    terminationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type TaskListRelationFilter = {
    every?: TaskWhereInput
    some?: TaskWhereInput
    none?: TaskWhereInput
  }

  export type ProcurementListRelationFilter = {
    every?: ProcurementWhereInput
    some?: ProcurementWhereInput
    none?: ProcurementWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TaskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProcurementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    password?: SortOrder
    position?: SortOrder
    role?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    password?: SortOrder
    position?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    email?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    password?: SortOrder
    position?: SortOrder
    role?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type CustomerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    email?: SortOrder
    phone?: SortOrder
  }

  export type CustomerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    email?: SortOrder
    phone?: SortOrder
  }

  export type CustomerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    email?: SortOrder
    phone?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type CustomerRelationFilter = {
    is?: CustomerWhereInput
    isNot?: CustomerWhereInput
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type JointProcurementNullableRelationFilter = {
    is?: JointProcurementWhereInput | null
    isNot?: JointProcurementWhereInput | null
  }

  export type ContractListRelationFilter = {
    every?: ContractWhereInput
    some?: ContractWhereInput
    none?: ContractWhereInput
  }

  export type ContractOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProcurementCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    expectedValue?: SortOrder
    resultValue?: SortOrder
    announcedAt?: SortOrder
    finishedAt?: SortOrder
    prozorroId?: SortOrder
    prozorroLink?: SortOrder
    product?: SortOrder
    unit?: SortOrder
    scope?: SortOrder
    status?: SortOrder
    customerId?: SortOrder
    userId?: SortOrder
    jointProcurementid?: SortOrder
  }

  export type ProcurementAvgOrderByAggregateInput = {
    expectedValue?: SortOrder
    resultValue?: SortOrder
  }

  export type ProcurementMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    expectedValue?: SortOrder
    resultValue?: SortOrder
    announcedAt?: SortOrder
    finishedAt?: SortOrder
    prozorroId?: SortOrder
    prozorroLink?: SortOrder
    product?: SortOrder
    unit?: SortOrder
    scope?: SortOrder
    status?: SortOrder
    customerId?: SortOrder
    userId?: SortOrder
    jointProcurementid?: SortOrder
  }

  export type ProcurementMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    expectedValue?: SortOrder
    resultValue?: SortOrder
    announcedAt?: SortOrder
    finishedAt?: SortOrder
    prozorroId?: SortOrder
    prozorroLink?: SortOrder
    product?: SortOrder
    unit?: SortOrder
    scope?: SortOrder
    status?: SortOrder
    customerId?: SortOrder
    userId?: SortOrder
    jointProcurementid?: SortOrder
  }

  export type ProcurementSumOrderByAggregateInput = {
    expectedValue?: SortOrder
    resultValue?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type JointProcurementCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    expectedValue?: SortOrder
    resultValue?: SortOrder
    announcedAt?: SortOrder
    finishedAt?: SortOrder
    prozorroId?: SortOrder
    prozorroLink?: SortOrder
    product?: SortOrder
    unit?: SortOrder
    scope?: SortOrder
    status?: SortOrder
  }

  export type JointProcurementAvgOrderByAggregateInput = {
    expectedValue?: SortOrder
    resultValue?: SortOrder
  }

  export type JointProcurementMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    expectedValue?: SortOrder
    resultValue?: SortOrder
    announcedAt?: SortOrder
    finishedAt?: SortOrder
    prozorroId?: SortOrder
    prozorroLink?: SortOrder
    product?: SortOrder
    unit?: SortOrder
    scope?: SortOrder
    status?: SortOrder
  }

  export type JointProcurementMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    expectedValue?: SortOrder
    resultValue?: SortOrder
    announcedAt?: SortOrder
    finishedAt?: SortOrder
    prozorroId?: SortOrder
    prozorroLink?: SortOrder
    product?: SortOrder
    unit?: SortOrder
    scope?: SortOrder
    status?: SortOrder
  }

  export type JointProcurementSumOrderByAggregateInput = {
    expectedValue?: SortOrder
    resultValue?: SortOrder
  }

  export type ProcurementRelationFilter = {
    is?: ProcurementWhereInput
    isNot?: ProcurementWhereInput
  }

  export type ContractAgreementListRelationFilter = {
    every?: contractAgreementWhereInput
    some?: contractAgreementWhereInput
    none?: contractAgreementWhereInput
  }

  export type contractAgreementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ContractCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    number?: SortOrder
    prozorroLink?: SortOrder
    startValue?: SortOrder
    currentValue?: SortOrder
    signatureDate?: SortOrder
    terminationDate?: SortOrder
    product?: SortOrder
    unit?: SortOrder
    scope?: SortOrder
    procurementId?: SortOrder
  }

  export type ContractAvgOrderByAggregateInput = {
    startValue?: SortOrder
    currentValue?: SortOrder
  }

  export type ContractMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    number?: SortOrder
    prozorroLink?: SortOrder
    startValue?: SortOrder
    currentValue?: SortOrder
    signatureDate?: SortOrder
    terminationDate?: SortOrder
    product?: SortOrder
    unit?: SortOrder
    scope?: SortOrder
    procurementId?: SortOrder
  }

  export type ContractMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    number?: SortOrder
    prozorroLink?: SortOrder
    startValue?: SortOrder
    currentValue?: SortOrder
    signatureDate?: SortOrder
    terminationDate?: SortOrder
    product?: SortOrder
    unit?: SortOrder
    scope?: SortOrder
    procurementId?: SortOrder
  }

  export type ContractSumOrderByAggregateInput = {
    startValue?: SortOrder
    currentValue?: SortOrder
  }

  export type ContractRelationFilter = {
    is?: ContractWhereInput
    isNot?: ContractWhereInput
  }

  export type contractAgreementCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    number?: SortOrder
    signatureDate?: SortOrder
    reason?: SortOrder
    changes?: SortOrder
    contractId?: SortOrder
  }

  export type contractAgreementMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    number?: SortOrder
    signatureDate?: SortOrder
    reason?: SortOrder
    changes?: SortOrder
    contractId?: SortOrder
  }

  export type contractAgreementMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    number?: SortOrder
    signatureDate?: SortOrder
    reason?: SortOrder
    changes?: SortOrder
    contractId?: SortOrder
  }

  export type EnumPriorityNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel> | null
    in?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPriorityNullableFilter<$PrismaModel> | $Enums.Priority | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type TaskCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    terminationDate?: SortOrder
    isCompleted?: SortOrder
    notes?: SortOrder
    userId?: SortOrder
  }

  export type TaskMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    terminationDate?: SortOrder
    isCompleted?: SortOrder
    notes?: SortOrder
    userId?: SortOrder
  }

  export type TaskMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    priority?: SortOrder
    status?: SortOrder
    terminationDate?: SortOrder
    isCompleted?: SortOrder
    notes?: SortOrder
    userId?: SortOrder
  }

  export type EnumPriorityNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel> | null
    in?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPriorityNullableWithAggregatesFilter<$PrismaModel> | $Enums.Priority | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumPriorityNullableFilter<$PrismaModel>
    _max?: NestedEnumPriorityNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type TaskCreateNestedManyWithoutUserInput = {
    create?: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput> | TaskCreateWithoutUserInput[] | TaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutUserInput | TaskCreateOrConnectWithoutUserInput[]
    createMany?: TaskCreateManyUserInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type ProcurementCreateNestedManyWithoutManagerInput = {
    create?: XOR<ProcurementCreateWithoutManagerInput, ProcurementUncheckedCreateWithoutManagerInput> | ProcurementCreateWithoutManagerInput[] | ProcurementUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: ProcurementCreateOrConnectWithoutManagerInput | ProcurementCreateOrConnectWithoutManagerInput[]
    createMany?: ProcurementCreateManyManagerInputEnvelope
    connect?: ProcurementWhereUniqueInput | ProcurementWhereUniqueInput[]
  }

  export type TaskUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput> | TaskCreateWithoutUserInput[] | TaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutUserInput | TaskCreateOrConnectWithoutUserInput[]
    createMany?: TaskCreateManyUserInputEnvelope
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
  }

  export type ProcurementUncheckedCreateNestedManyWithoutManagerInput = {
    create?: XOR<ProcurementCreateWithoutManagerInput, ProcurementUncheckedCreateWithoutManagerInput> | ProcurementCreateWithoutManagerInput[] | ProcurementUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: ProcurementCreateOrConnectWithoutManagerInput | ProcurementCreateOrConnectWithoutManagerInput[]
    createMany?: ProcurementCreateManyManagerInputEnvelope
    connect?: ProcurementWhereUniqueInput | ProcurementWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type TaskUpdateManyWithoutUserNestedInput = {
    create?: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput> | TaskCreateWithoutUserInput[] | TaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutUserInput | TaskCreateOrConnectWithoutUserInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutUserInput | TaskUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TaskCreateManyUserInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutUserInput | TaskUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutUserInput | TaskUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type ProcurementUpdateManyWithoutManagerNestedInput = {
    create?: XOR<ProcurementCreateWithoutManagerInput, ProcurementUncheckedCreateWithoutManagerInput> | ProcurementCreateWithoutManagerInput[] | ProcurementUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: ProcurementCreateOrConnectWithoutManagerInput | ProcurementCreateOrConnectWithoutManagerInput[]
    upsert?: ProcurementUpsertWithWhereUniqueWithoutManagerInput | ProcurementUpsertWithWhereUniqueWithoutManagerInput[]
    createMany?: ProcurementCreateManyManagerInputEnvelope
    set?: ProcurementWhereUniqueInput | ProcurementWhereUniqueInput[]
    disconnect?: ProcurementWhereUniqueInput | ProcurementWhereUniqueInput[]
    delete?: ProcurementWhereUniqueInput | ProcurementWhereUniqueInput[]
    connect?: ProcurementWhereUniqueInput | ProcurementWhereUniqueInput[]
    update?: ProcurementUpdateWithWhereUniqueWithoutManagerInput | ProcurementUpdateWithWhereUniqueWithoutManagerInput[]
    updateMany?: ProcurementUpdateManyWithWhereWithoutManagerInput | ProcurementUpdateManyWithWhereWithoutManagerInput[]
    deleteMany?: ProcurementScalarWhereInput | ProcurementScalarWhereInput[]
  }

  export type TaskUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput> | TaskCreateWithoutUserInput[] | TaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: TaskCreateOrConnectWithoutUserInput | TaskCreateOrConnectWithoutUserInput[]
    upsert?: TaskUpsertWithWhereUniqueWithoutUserInput | TaskUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: TaskCreateManyUserInputEnvelope
    set?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    disconnect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    delete?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    connect?: TaskWhereUniqueInput | TaskWhereUniqueInput[]
    update?: TaskUpdateWithWhereUniqueWithoutUserInput | TaskUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: TaskUpdateManyWithWhereWithoutUserInput | TaskUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: TaskScalarWhereInput | TaskScalarWhereInput[]
  }

  export type ProcurementUncheckedUpdateManyWithoutManagerNestedInput = {
    create?: XOR<ProcurementCreateWithoutManagerInput, ProcurementUncheckedCreateWithoutManagerInput> | ProcurementCreateWithoutManagerInput[] | ProcurementUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: ProcurementCreateOrConnectWithoutManagerInput | ProcurementCreateOrConnectWithoutManagerInput[]
    upsert?: ProcurementUpsertWithWhereUniqueWithoutManagerInput | ProcurementUpsertWithWhereUniqueWithoutManagerInput[]
    createMany?: ProcurementCreateManyManagerInputEnvelope
    set?: ProcurementWhereUniqueInput | ProcurementWhereUniqueInput[]
    disconnect?: ProcurementWhereUniqueInput | ProcurementWhereUniqueInput[]
    delete?: ProcurementWhereUniqueInput | ProcurementWhereUniqueInput[]
    connect?: ProcurementWhereUniqueInput | ProcurementWhereUniqueInput[]
    update?: ProcurementUpdateWithWhereUniqueWithoutManagerInput | ProcurementUpdateWithWhereUniqueWithoutManagerInput[]
    updateMany?: ProcurementUpdateManyWithWhereWithoutManagerInput | ProcurementUpdateManyWithWhereWithoutManagerInput[]
    deleteMany?: ProcurementScalarWhereInput | ProcurementScalarWhereInput[]
  }

  export type ProcurementCreateNestedManyWithoutCustomerInput = {
    create?: XOR<ProcurementCreateWithoutCustomerInput, ProcurementUncheckedCreateWithoutCustomerInput> | ProcurementCreateWithoutCustomerInput[] | ProcurementUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ProcurementCreateOrConnectWithoutCustomerInput | ProcurementCreateOrConnectWithoutCustomerInput[]
    createMany?: ProcurementCreateManyCustomerInputEnvelope
    connect?: ProcurementWhereUniqueInput | ProcurementWhereUniqueInput[]
  }

  export type ProcurementUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<ProcurementCreateWithoutCustomerInput, ProcurementUncheckedCreateWithoutCustomerInput> | ProcurementCreateWithoutCustomerInput[] | ProcurementUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ProcurementCreateOrConnectWithoutCustomerInput | ProcurementCreateOrConnectWithoutCustomerInput[]
    createMany?: ProcurementCreateManyCustomerInputEnvelope
    connect?: ProcurementWhereUniqueInput | ProcurementWhereUniqueInput[]
  }

  export type ProcurementUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<ProcurementCreateWithoutCustomerInput, ProcurementUncheckedCreateWithoutCustomerInput> | ProcurementCreateWithoutCustomerInput[] | ProcurementUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ProcurementCreateOrConnectWithoutCustomerInput | ProcurementCreateOrConnectWithoutCustomerInput[]
    upsert?: ProcurementUpsertWithWhereUniqueWithoutCustomerInput | ProcurementUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: ProcurementCreateManyCustomerInputEnvelope
    set?: ProcurementWhereUniqueInput | ProcurementWhereUniqueInput[]
    disconnect?: ProcurementWhereUniqueInput | ProcurementWhereUniqueInput[]
    delete?: ProcurementWhereUniqueInput | ProcurementWhereUniqueInput[]
    connect?: ProcurementWhereUniqueInput | ProcurementWhereUniqueInput[]
    update?: ProcurementUpdateWithWhereUniqueWithoutCustomerInput | ProcurementUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: ProcurementUpdateManyWithWhereWithoutCustomerInput | ProcurementUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: ProcurementScalarWhereInput | ProcurementScalarWhereInput[]
  }

  export type ProcurementUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<ProcurementCreateWithoutCustomerInput, ProcurementUncheckedCreateWithoutCustomerInput> | ProcurementCreateWithoutCustomerInput[] | ProcurementUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ProcurementCreateOrConnectWithoutCustomerInput | ProcurementCreateOrConnectWithoutCustomerInput[]
    upsert?: ProcurementUpsertWithWhereUniqueWithoutCustomerInput | ProcurementUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: ProcurementCreateManyCustomerInputEnvelope
    set?: ProcurementWhereUniqueInput | ProcurementWhereUniqueInput[]
    disconnect?: ProcurementWhereUniqueInput | ProcurementWhereUniqueInput[]
    delete?: ProcurementWhereUniqueInput | ProcurementWhereUniqueInput[]
    connect?: ProcurementWhereUniqueInput | ProcurementWhereUniqueInput[]
    update?: ProcurementUpdateWithWhereUniqueWithoutCustomerInput | ProcurementUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: ProcurementUpdateManyWithWhereWithoutCustomerInput | ProcurementUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: ProcurementScalarWhereInput | ProcurementScalarWhereInput[]
  }

  export type CustomerCreateNestedOneWithoutProcurementsInput = {
    create?: XOR<CustomerCreateWithoutProcurementsInput, CustomerUncheckedCreateWithoutProcurementsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutProcurementsInput
    connect?: CustomerWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutProcurementsInput = {
    create?: XOR<UserCreateWithoutProcurementsInput, UserUncheckedCreateWithoutProcurementsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProcurementsInput
    connect?: UserWhereUniqueInput
  }

  export type JointProcurementCreateNestedOneWithoutProcurementsInput = {
    create?: XOR<JointProcurementCreateWithoutProcurementsInput, JointProcurementUncheckedCreateWithoutProcurementsInput>
    connectOrCreate?: JointProcurementCreateOrConnectWithoutProcurementsInput
    connect?: JointProcurementWhereUniqueInput
  }

  export type ContractCreateNestedManyWithoutProcurementInput = {
    create?: XOR<ContractCreateWithoutProcurementInput, ContractUncheckedCreateWithoutProcurementInput> | ContractCreateWithoutProcurementInput[] | ContractUncheckedCreateWithoutProcurementInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutProcurementInput | ContractCreateOrConnectWithoutProcurementInput[]
    createMany?: ContractCreateManyProcurementInputEnvelope
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
  }

  export type ContractUncheckedCreateNestedManyWithoutProcurementInput = {
    create?: XOR<ContractCreateWithoutProcurementInput, ContractUncheckedCreateWithoutProcurementInput> | ContractCreateWithoutProcurementInput[] | ContractUncheckedCreateWithoutProcurementInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutProcurementInput | ContractCreateOrConnectWithoutProcurementInput[]
    createMany?: ContractCreateManyProcurementInputEnvelope
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type CustomerUpdateOneRequiredWithoutProcurementsNestedInput = {
    create?: XOR<CustomerCreateWithoutProcurementsInput, CustomerUncheckedCreateWithoutProcurementsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutProcurementsInput
    upsert?: CustomerUpsertWithoutProcurementsInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutProcurementsInput, CustomerUpdateWithoutProcurementsInput>, CustomerUncheckedUpdateWithoutProcurementsInput>
  }

  export type UserUpdateOneRequiredWithoutProcurementsNestedInput = {
    create?: XOR<UserCreateWithoutProcurementsInput, UserUncheckedCreateWithoutProcurementsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProcurementsInput
    upsert?: UserUpsertWithoutProcurementsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProcurementsInput, UserUpdateWithoutProcurementsInput>, UserUncheckedUpdateWithoutProcurementsInput>
  }

  export type JointProcurementUpdateOneWithoutProcurementsNestedInput = {
    create?: XOR<JointProcurementCreateWithoutProcurementsInput, JointProcurementUncheckedCreateWithoutProcurementsInput>
    connectOrCreate?: JointProcurementCreateOrConnectWithoutProcurementsInput
    upsert?: JointProcurementUpsertWithoutProcurementsInput
    disconnect?: JointProcurementWhereInput | boolean
    delete?: JointProcurementWhereInput | boolean
    connect?: JointProcurementWhereUniqueInput
    update?: XOR<XOR<JointProcurementUpdateToOneWithWhereWithoutProcurementsInput, JointProcurementUpdateWithoutProcurementsInput>, JointProcurementUncheckedUpdateWithoutProcurementsInput>
  }

  export type ContractUpdateManyWithoutProcurementNestedInput = {
    create?: XOR<ContractCreateWithoutProcurementInput, ContractUncheckedCreateWithoutProcurementInput> | ContractCreateWithoutProcurementInput[] | ContractUncheckedCreateWithoutProcurementInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutProcurementInput | ContractCreateOrConnectWithoutProcurementInput[]
    upsert?: ContractUpsertWithWhereUniqueWithoutProcurementInput | ContractUpsertWithWhereUniqueWithoutProcurementInput[]
    createMany?: ContractCreateManyProcurementInputEnvelope
    set?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    disconnect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    delete?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    update?: ContractUpdateWithWhereUniqueWithoutProcurementInput | ContractUpdateWithWhereUniqueWithoutProcurementInput[]
    updateMany?: ContractUpdateManyWithWhereWithoutProcurementInput | ContractUpdateManyWithWhereWithoutProcurementInput[]
    deleteMany?: ContractScalarWhereInput | ContractScalarWhereInput[]
  }

  export type ContractUncheckedUpdateManyWithoutProcurementNestedInput = {
    create?: XOR<ContractCreateWithoutProcurementInput, ContractUncheckedCreateWithoutProcurementInput> | ContractCreateWithoutProcurementInput[] | ContractUncheckedCreateWithoutProcurementInput[]
    connectOrCreate?: ContractCreateOrConnectWithoutProcurementInput | ContractCreateOrConnectWithoutProcurementInput[]
    upsert?: ContractUpsertWithWhereUniqueWithoutProcurementInput | ContractUpsertWithWhereUniqueWithoutProcurementInput[]
    createMany?: ContractCreateManyProcurementInputEnvelope
    set?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    disconnect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    delete?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    connect?: ContractWhereUniqueInput | ContractWhereUniqueInput[]
    update?: ContractUpdateWithWhereUniqueWithoutProcurementInput | ContractUpdateWithWhereUniqueWithoutProcurementInput[]
    updateMany?: ContractUpdateManyWithWhereWithoutProcurementInput | ContractUpdateManyWithWhereWithoutProcurementInput[]
    deleteMany?: ContractScalarWhereInput | ContractScalarWhereInput[]
  }

  export type ProcurementCreateNestedManyWithoutJointProcurementInput = {
    create?: XOR<ProcurementCreateWithoutJointProcurementInput, ProcurementUncheckedCreateWithoutJointProcurementInput> | ProcurementCreateWithoutJointProcurementInput[] | ProcurementUncheckedCreateWithoutJointProcurementInput[]
    connectOrCreate?: ProcurementCreateOrConnectWithoutJointProcurementInput | ProcurementCreateOrConnectWithoutJointProcurementInput[]
    createMany?: ProcurementCreateManyJointProcurementInputEnvelope
    connect?: ProcurementWhereUniqueInput | ProcurementWhereUniqueInput[]
  }

  export type ProcurementUncheckedCreateNestedManyWithoutJointProcurementInput = {
    create?: XOR<ProcurementCreateWithoutJointProcurementInput, ProcurementUncheckedCreateWithoutJointProcurementInput> | ProcurementCreateWithoutJointProcurementInput[] | ProcurementUncheckedCreateWithoutJointProcurementInput[]
    connectOrCreate?: ProcurementCreateOrConnectWithoutJointProcurementInput | ProcurementCreateOrConnectWithoutJointProcurementInput[]
    createMany?: ProcurementCreateManyJointProcurementInputEnvelope
    connect?: ProcurementWhereUniqueInput | ProcurementWhereUniqueInput[]
  }

  export type ProcurementUpdateManyWithoutJointProcurementNestedInput = {
    create?: XOR<ProcurementCreateWithoutJointProcurementInput, ProcurementUncheckedCreateWithoutJointProcurementInput> | ProcurementCreateWithoutJointProcurementInput[] | ProcurementUncheckedCreateWithoutJointProcurementInput[]
    connectOrCreate?: ProcurementCreateOrConnectWithoutJointProcurementInput | ProcurementCreateOrConnectWithoutJointProcurementInput[]
    upsert?: ProcurementUpsertWithWhereUniqueWithoutJointProcurementInput | ProcurementUpsertWithWhereUniqueWithoutJointProcurementInput[]
    createMany?: ProcurementCreateManyJointProcurementInputEnvelope
    set?: ProcurementWhereUniqueInput | ProcurementWhereUniqueInput[]
    disconnect?: ProcurementWhereUniqueInput | ProcurementWhereUniqueInput[]
    delete?: ProcurementWhereUniqueInput | ProcurementWhereUniqueInput[]
    connect?: ProcurementWhereUniqueInput | ProcurementWhereUniqueInput[]
    update?: ProcurementUpdateWithWhereUniqueWithoutJointProcurementInput | ProcurementUpdateWithWhereUniqueWithoutJointProcurementInput[]
    updateMany?: ProcurementUpdateManyWithWhereWithoutJointProcurementInput | ProcurementUpdateManyWithWhereWithoutJointProcurementInput[]
    deleteMany?: ProcurementScalarWhereInput | ProcurementScalarWhereInput[]
  }

  export type ProcurementUncheckedUpdateManyWithoutJointProcurementNestedInput = {
    create?: XOR<ProcurementCreateWithoutJointProcurementInput, ProcurementUncheckedCreateWithoutJointProcurementInput> | ProcurementCreateWithoutJointProcurementInput[] | ProcurementUncheckedCreateWithoutJointProcurementInput[]
    connectOrCreate?: ProcurementCreateOrConnectWithoutJointProcurementInput | ProcurementCreateOrConnectWithoutJointProcurementInput[]
    upsert?: ProcurementUpsertWithWhereUniqueWithoutJointProcurementInput | ProcurementUpsertWithWhereUniqueWithoutJointProcurementInput[]
    createMany?: ProcurementCreateManyJointProcurementInputEnvelope
    set?: ProcurementWhereUniqueInput | ProcurementWhereUniqueInput[]
    disconnect?: ProcurementWhereUniqueInput | ProcurementWhereUniqueInput[]
    delete?: ProcurementWhereUniqueInput | ProcurementWhereUniqueInput[]
    connect?: ProcurementWhereUniqueInput | ProcurementWhereUniqueInput[]
    update?: ProcurementUpdateWithWhereUniqueWithoutJointProcurementInput | ProcurementUpdateWithWhereUniqueWithoutJointProcurementInput[]
    updateMany?: ProcurementUpdateManyWithWhereWithoutJointProcurementInput | ProcurementUpdateManyWithWhereWithoutJointProcurementInput[]
    deleteMany?: ProcurementScalarWhereInput | ProcurementScalarWhereInput[]
  }

  export type ProcurementCreateNestedOneWithoutContractsInput = {
    create?: XOR<ProcurementCreateWithoutContractsInput, ProcurementUncheckedCreateWithoutContractsInput>
    connectOrCreate?: ProcurementCreateOrConnectWithoutContractsInput
    connect?: ProcurementWhereUniqueInput
  }

  export type contractAgreementCreateNestedManyWithoutContractInput = {
    create?: XOR<contractAgreementCreateWithoutContractInput, contractAgreementUncheckedCreateWithoutContractInput> | contractAgreementCreateWithoutContractInput[] | contractAgreementUncheckedCreateWithoutContractInput[]
    connectOrCreate?: contractAgreementCreateOrConnectWithoutContractInput | contractAgreementCreateOrConnectWithoutContractInput[]
    createMany?: contractAgreementCreateManyContractInputEnvelope
    connect?: contractAgreementWhereUniqueInput | contractAgreementWhereUniqueInput[]
  }

  export type contractAgreementUncheckedCreateNestedManyWithoutContractInput = {
    create?: XOR<contractAgreementCreateWithoutContractInput, contractAgreementUncheckedCreateWithoutContractInput> | contractAgreementCreateWithoutContractInput[] | contractAgreementUncheckedCreateWithoutContractInput[]
    connectOrCreate?: contractAgreementCreateOrConnectWithoutContractInput | contractAgreementCreateOrConnectWithoutContractInput[]
    createMany?: contractAgreementCreateManyContractInputEnvelope
    connect?: contractAgreementWhereUniqueInput | contractAgreementWhereUniqueInput[]
  }

  export type ProcurementUpdateOneRequiredWithoutContractsNestedInput = {
    create?: XOR<ProcurementCreateWithoutContractsInput, ProcurementUncheckedCreateWithoutContractsInput>
    connectOrCreate?: ProcurementCreateOrConnectWithoutContractsInput
    upsert?: ProcurementUpsertWithoutContractsInput
    connect?: ProcurementWhereUniqueInput
    update?: XOR<XOR<ProcurementUpdateToOneWithWhereWithoutContractsInput, ProcurementUpdateWithoutContractsInput>, ProcurementUncheckedUpdateWithoutContractsInput>
  }

  export type contractAgreementUpdateManyWithoutContractNestedInput = {
    create?: XOR<contractAgreementCreateWithoutContractInput, contractAgreementUncheckedCreateWithoutContractInput> | contractAgreementCreateWithoutContractInput[] | contractAgreementUncheckedCreateWithoutContractInput[]
    connectOrCreate?: contractAgreementCreateOrConnectWithoutContractInput | contractAgreementCreateOrConnectWithoutContractInput[]
    upsert?: contractAgreementUpsertWithWhereUniqueWithoutContractInput | contractAgreementUpsertWithWhereUniqueWithoutContractInput[]
    createMany?: contractAgreementCreateManyContractInputEnvelope
    set?: contractAgreementWhereUniqueInput | contractAgreementWhereUniqueInput[]
    disconnect?: contractAgreementWhereUniqueInput | contractAgreementWhereUniqueInput[]
    delete?: contractAgreementWhereUniqueInput | contractAgreementWhereUniqueInput[]
    connect?: contractAgreementWhereUniqueInput | contractAgreementWhereUniqueInput[]
    update?: contractAgreementUpdateWithWhereUniqueWithoutContractInput | contractAgreementUpdateWithWhereUniqueWithoutContractInput[]
    updateMany?: contractAgreementUpdateManyWithWhereWithoutContractInput | contractAgreementUpdateManyWithWhereWithoutContractInput[]
    deleteMany?: contractAgreementScalarWhereInput | contractAgreementScalarWhereInput[]
  }

  export type contractAgreementUncheckedUpdateManyWithoutContractNestedInput = {
    create?: XOR<contractAgreementCreateWithoutContractInput, contractAgreementUncheckedCreateWithoutContractInput> | contractAgreementCreateWithoutContractInput[] | contractAgreementUncheckedCreateWithoutContractInput[]
    connectOrCreate?: contractAgreementCreateOrConnectWithoutContractInput | contractAgreementCreateOrConnectWithoutContractInput[]
    upsert?: contractAgreementUpsertWithWhereUniqueWithoutContractInput | contractAgreementUpsertWithWhereUniqueWithoutContractInput[]
    createMany?: contractAgreementCreateManyContractInputEnvelope
    set?: contractAgreementWhereUniqueInput | contractAgreementWhereUniqueInput[]
    disconnect?: contractAgreementWhereUniqueInput | contractAgreementWhereUniqueInput[]
    delete?: contractAgreementWhereUniqueInput | contractAgreementWhereUniqueInput[]
    connect?: contractAgreementWhereUniqueInput | contractAgreementWhereUniqueInput[]
    update?: contractAgreementUpdateWithWhereUniqueWithoutContractInput | contractAgreementUpdateWithWhereUniqueWithoutContractInput[]
    updateMany?: contractAgreementUpdateManyWithWhereWithoutContractInput | contractAgreementUpdateManyWithWhereWithoutContractInput[]
    deleteMany?: contractAgreementScalarWhereInput | contractAgreementScalarWhereInput[]
  }

  export type ContractCreateNestedOneWithoutAgreementsInput = {
    create?: XOR<ContractCreateWithoutAgreementsInput, ContractUncheckedCreateWithoutAgreementsInput>
    connectOrCreate?: ContractCreateOrConnectWithoutAgreementsInput
    connect?: ContractWhereUniqueInput
  }

  export type ContractUpdateOneRequiredWithoutAgreementsNestedInput = {
    create?: XOR<ContractCreateWithoutAgreementsInput, ContractUncheckedCreateWithoutAgreementsInput>
    connectOrCreate?: ContractCreateOrConnectWithoutAgreementsInput
    upsert?: ContractUpsertWithoutAgreementsInput
    connect?: ContractWhereUniqueInput
    update?: XOR<XOR<ContractUpdateToOneWithWhereWithoutAgreementsInput, ContractUpdateWithoutAgreementsInput>, ContractUncheckedUpdateWithoutAgreementsInput>
  }

  export type UserCreateNestedOneWithoutTasksInput = {
    create?: XOR<UserCreateWithoutTasksInput, UserUncheckedCreateWithoutTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutTasksInput
    connect?: UserWhereUniqueInput
  }

  export type NullableEnumPriorityFieldUpdateOperationsInput = {
    set?: $Enums.Priority | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutTasksNestedInput = {
    create?: XOR<UserCreateWithoutTasksInput, UserUncheckedCreateWithoutTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutTasksInput
    upsert?: UserUpsertWithoutTasksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTasksInput, UserUpdateWithoutTasksInput>, UserUncheckedUpdateWithoutTasksInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumPriorityNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel> | null
    in?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPriorityNullableFilter<$PrismaModel> | $Enums.Priority | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedEnumPriorityNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Priority | EnumPriorityFieldRefInput<$PrismaModel> | null
    in?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.Priority[] | ListEnumPriorityFieldRefInput<$PrismaModel> | null
    not?: NestedEnumPriorityNullableWithAggregatesFilter<$PrismaModel> | $Enums.Priority | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumPriorityNullableFilter<$PrismaModel>
    _max?: NestedEnumPriorityNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type TaskCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    priority?: $Enums.Priority | null
    status?: string
    terminationDate: Date | string
    isCompleted?: boolean
    notes?: string | null
  }

  export type TaskUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    priority?: $Enums.Priority | null
    status?: string
    terminationDate: Date | string
    isCompleted?: boolean
    notes?: string | null
  }

  export type TaskCreateOrConnectWithoutUserInput = {
    where: TaskWhereUniqueInput
    create: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput>
  }

  export type TaskCreateManyUserInputEnvelope = {
    data: TaskCreateManyUserInput | TaskCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProcurementCreateWithoutManagerInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    expectedValue: Decimal | DecimalJsLike | number | string
    resultValue?: Decimal | DecimalJsLike | number | string | null
    announcedAt?: Date | string | null
    finishedAt?: Date | string | null
    prozorroId?: string | null
    prozorroLink?: string | null
    product: string
    unit: string
    scope: string
    status?: string
    customer: CustomerCreateNestedOneWithoutProcurementsInput
    jointProcurement?: JointProcurementCreateNestedOneWithoutProcurementsInput
    contracts?: ContractCreateNestedManyWithoutProcurementInput
  }

  export type ProcurementUncheckedCreateWithoutManagerInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    expectedValue: Decimal | DecimalJsLike | number | string
    resultValue?: Decimal | DecimalJsLike | number | string | null
    announcedAt?: Date | string | null
    finishedAt?: Date | string | null
    prozorroId?: string | null
    prozorroLink?: string | null
    product: string
    unit: string
    scope: string
    status?: string
    customerId: string
    jointProcurementid?: string | null
    contracts?: ContractUncheckedCreateNestedManyWithoutProcurementInput
  }

  export type ProcurementCreateOrConnectWithoutManagerInput = {
    where: ProcurementWhereUniqueInput
    create: XOR<ProcurementCreateWithoutManagerInput, ProcurementUncheckedCreateWithoutManagerInput>
  }

  export type ProcurementCreateManyManagerInputEnvelope = {
    data: ProcurementCreateManyManagerInput | ProcurementCreateManyManagerInput[]
    skipDuplicates?: boolean
  }

  export type TaskUpsertWithWhereUniqueWithoutUserInput = {
    where: TaskWhereUniqueInput
    update: XOR<TaskUpdateWithoutUserInput, TaskUncheckedUpdateWithoutUserInput>
    create: XOR<TaskCreateWithoutUserInput, TaskUncheckedCreateWithoutUserInput>
  }

  export type TaskUpdateWithWhereUniqueWithoutUserInput = {
    where: TaskWhereUniqueInput
    data: XOR<TaskUpdateWithoutUserInput, TaskUncheckedUpdateWithoutUserInput>
  }

  export type TaskUpdateManyWithWhereWithoutUserInput = {
    where: TaskScalarWhereInput
    data: XOR<TaskUpdateManyMutationInput, TaskUncheckedUpdateManyWithoutUserInput>
  }

  export type TaskScalarWhereInput = {
    AND?: TaskScalarWhereInput | TaskScalarWhereInput[]
    OR?: TaskScalarWhereInput[]
    NOT?: TaskScalarWhereInput | TaskScalarWhereInput[]
    id?: StringFilter<"Task"> | string
    createdAt?: DateTimeFilter<"Task"> | Date | string
    updatedAt?: DateTimeFilter<"Task"> | Date | string
    name?: StringFilter<"Task"> | string
    priority?: EnumPriorityNullableFilter<"Task"> | $Enums.Priority | null
    status?: StringFilter<"Task"> | string
    terminationDate?: DateTimeFilter<"Task"> | Date | string
    isCompleted?: BoolFilter<"Task"> | boolean
    notes?: StringNullableFilter<"Task"> | string | null
    userId?: StringFilter<"Task"> | string
  }

  export type ProcurementUpsertWithWhereUniqueWithoutManagerInput = {
    where: ProcurementWhereUniqueInput
    update: XOR<ProcurementUpdateWithoutManagerInput, ProcurementUncheckedUpdateWithoutManagerInput>
    create: XOR<ProcurementCreateWithoutManagerInput, ProcurementUncheckedCreateWithoutManagerInput>
  }

  export type ProcurementUpdateWithWhereUniqueWithoutManagerInput = {
    where: ProcurementWhereUniqueInput
    data: XOR<ProcurementUpdateWithoutManagerInput, ProcurementUncheckedUpdateWithoutManagerInput>
  }

  export type ProcurementUpdateManyWithWhereWithoutManagerInput = {
    where: ProcurementScalarWhereInput
    data: XOR<ProcurementUpdateManyMutationInput, ProcurementUncheckedUpdateManyWithoutManagerInput>
  }

  export type ProcurementScalarWhereInput = {
    AND?: ProcurementScalarWhereInput | ProcurementScalarWhereInput[]
    OR?: ProcurementScalarWhereInput[]
    NOT?: ProcurementScalarWhereInput | ProcurementScalarWhereInput[]
    id?: StringFilter<"Procurement"> | string
    createdAt?: DateTimeFilter<"Procurement"> | Date | string
    updatedAt?: DateTimeFilter<"Procurement"> | Date | string
    expectedValue?: DecimalFilter<"Procurement"> | Decimal | DecimalJsLike | number | string
    resultValue?: DecimalNullableFilter<"Procurement"> | Decimal | DecimalJsLike | number | string | null
    announcedAt?: DateTimeNullableFilter<"Procurement"> | Date | string | null
    finishedAt?: DateTimeNullableFilter<"Procurement"> | Date | string | null
    prozorroId?: StringNullableFilter<"Procurement"> | string | null
    prozorroLink?: StringNullableFilter<"Procurement"> | string | null
    product?: StringFilter<"Procurement"> | string
    unit?: StringFilter<"Procurement"> | string
    scope?: StringFilter<"Procurement"> | string
    status?: StringFilter<"Procurement"> | string
    customerId?: StringFilter<"Procurement"> | string
    userId?: StringFilter<"Procurement"> | string
    jointProcurementid?: StringNullableFilter<"Procurement"> | string | null
  }

  export type ProcurementCreateWithoutCustomerInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    expectedValue: Decimal | DecimalJsLike | number | string
    resultValue?: Decimal | DecimalJsLike | number | string | null
    announcedAt?: Date | string | null
    finishedAt?: Date | string | null
    prozorroId?: string | null
    prozorroLink?: string | null
    product: string
    unit: string
    scope: string
    status?: string
    manager: UserCreateNestedOneWithoutProcurementsInput
    jointProcurement?: JointProcurementCreateNestedOneWithoutProcurementsInput
    contracts?: ContractCreateNestedManyWithoutProcurementInput
  }

  export type ProcurementUncheckedCreateWithoutCustomerInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    expectedValue: Decimal | DecimalJsLike | number | string
    resultValue?: Decimal | DecimalJsLike | number | string | null
    announcedAt?: Date | string | null
    finishedAt?: Date | string | null
    prozorroId?: string | null
    prozorroLink?: string | null
    product: string
    unit: string
    scope: string
    status?: string
    userId: string
    jointProcurementid?: string | null
    contracts?: ContractUncheckedCreateNestedManyWithoutProcurementInput
  }

  export type ProcurementCreateOrConnectWithoutCustomerInput = {
    where: ProcurementWhereUniqueInput
    create: XOR<ProcurementCreateWithoutCustomerInput, ProcurementUncheckedCreateWithoutCustomerInput>
  }

  export type ProcurementCreateManyCustomerInputEnvelope = {
    data: ProcurementCreateManyCustomerInput | ProcurementCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type ProcurementUpsertWithWhereUniqueWithoutCustomerInput = {
    where: ProcurementWhereUniqueInput
    update: XOR<ProcurementUpdateWithoutCustomerInput, ProcurementUncheckedUpdateWithoutCustomerInput>
    create: XOR<ProcurementCreateWithoutCustomerInput, ProcurementUncheckedCreateWithoutCustomerInput>
  }

  export type ProcurementUpdateWithWhereUniqueWithoutCustomerInput = {
    where: ProcurementWhereUniqueInput
    data: XOR<ProcurementUpdateWithoutCustomerInput, ProcurementUncheckedUpdateWithoutCustomerInput>
  }

  export type ProcurementUpdateManyWithWhereWithoutCustomerInput = {
    where: ProcurementScalarWhereInput
    data: XOR<ProcurementUpdateManyMutationInput, ProcurementUncheckedUpdateManyWithoutCustomerInput>
  }

  export type CustomerCreateWithoutProcurementsInput = {
    id?: string
    name: string
    code: string
    email: string
    phone: string
  }

  export type CustomerUncheckedCreateWithoutProcurementsInput = {
    id?: string
    name: string
    code: string
    email: string
    phone: string
  }

  export type CustomerCreateOrConnectWithoutProcurementsInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutProcurementsInput, CustomerUncheckedCreateWithoutProcurementsInput>
  }

  export type UserCreateWithoutProcurementsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    name?: string | null
    surname?: string | null
    password: string
    position?: string | null
    role?: string
    tasks?: TaskCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProcurementsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    name?: string | null
    surname?: string | null
    password: string
    position?: string | null
    role?: string
    tasks?: TaskUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProcurementsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProcurementsInput, UserUncheckedCreateWithoutProcurementsInput>
  }

  export type JointProcurementCreateWithoutProcurementsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    expectedValue: Decimal | DecimalJsLike | number | string
    resultValue?: Decimal | DecimalJsLike | number | string | null
    announcedAt?: Date | string | null
    finishedAt?: Date | string | null
    prozorroId?: string | null
    prozorroLink?: string | null
    product: string
    unit: string
    scope: string
    status?: string
  }

  export type JointProcurementUncheckedCreateWithoutProcurementsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    expectedValue: Decimal | DecimalJsLike | number | string
    resultValue?: Decimal | DecimalJsLike | number | string | null
    announcedAt?: Date | string | null
    finishedAt?: Date | string | null
    prozorroId?: string | null
    prozorroLink?: string | null
    product: string
    unit: string
    scope: string
    status?: string
  }

  export type JointProcurementCreateOrConnectWithoutProcurementsInput = {
    where: JointProcurementWhereUniqueInput
    create: XOR<JointProcurementCreateWithoutProcurementsInput, JointProcurementUncheckedCreateWithoutProcurementsInput>
  }

  export type ContractCreateWithoutProcurementInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    number: string
    prozorroLink?: string | null
    startValue: Decimal | DecimalJsLike | number | string
    currentValue?: Decimal | DecimalJsLike | number | string | null
    signatureDate: Date | string
    terminationDate: Date | string
    product: string
    unit: string
    scope: string
    agreements?: contractAgreementCreateNestedManyWithoutContractInput
  }

  export type ContractUncheckedCreateWithoutProcurementInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    number: string
    prozorroLink?: string | null
    startValue: Decimal | DecimalJsLike | number | string
    currentValue?: Decimal | DecimalJsLike | number | string | null
    signatureDate: Date | string
    terminationDate: Date | string
    product: string
    unit: string
    scope: string
    agreements?: contractAgreementUncheckedCreateNestedManyWithoutContractInput
  }

  export type ContractCreateOrConnectWithoutProcurementInput = {
    where: ContractWhereUniqueInput
    create: XOR<ContractCreateWithoutProcurementInput, ContractUncheckedCreateWithoutProcurementInput>
  }

  export type ContractCreateManyProcurementInputEnvelope = {
    data: ContractCreateManyProcurementInput | ContractCreateManyProcurementInput[]
    skipDuplicates?: boolean
  }

  export type CustomerUpsertWithoutProcurementsInput = {
    update: XOR<CustomerUpdateWithoutProcurementsInput, CustomerUncheckedUpdateWithoutProcurementsInput>
    create: XOR<CustomerCreateWithoutProcurementsInput, CustomerUncheckedCreateWithoutProcurementsInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutProcurementsInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutProcurementsInput, CustomerUncheckedUpdateWithoutProcurementsInput>
  }

  export type CustomerUpdateWithoutProcurementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
  }

  export type CustomerUncheckedUpdateWithoutProcurementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
  }

  export type UserUpsertWithoutProcurementsInput = {
    update: XOR<UserUpdateWithoutProcurementsInput, UserUncheckedUpdateWithoutProcurementsInput>
    create: XOR<UserCreateWithoutProcurementsInput, UserUncheckedCreateWithoutProcurementsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProcurementsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProcurementsInput, UserUncheckedUpdateWithoutProcurementsInput>
  }

  export type UserUpdateWithoutProcurementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    position?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    tasks?: TaskUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProcurementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    position?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    tasks?: TaskUncheckedUpdateManyWithoutUserNestedInput
  }

  export type JointProcurementUpsertWithoutProcurementsInput = {
    update: XOR<JointProcurementUpdateWithoutProcurementsInput, JointProcurementUncheckedUpdateWithoutProcurementsInput>
    create: XOR<JointProcurementCreateWithoutProcurementsInput, JointProcurementUncheckedCreateWithoutProcurementsInput>
    where?: JointProcurementWhereInput
  }

  export type JointProcurementUpdateToOneWithWhereWithoutProcurementsInput = {
    where?: JointProcurementWhereInput
    data: XOR<JointProcurementUpdateWithoutProcurementsInput, JointProcurementUncheckedUpdateWithoutProcurementsInput>
  }

  export type JointProcurementUpdateWithoutProcurementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expectedValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    resultValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    announcedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    prozorroId?: NullableStringFieldUpdateOperationsInput | string | null
    prozorroLink?: NullableStringFieldUpdateOperationsInput | string | null
    product?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    scope?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type JointProcurementUncheckedUpdateWithoutProcurementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expectedValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    resultValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    announcedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    prozorroId?: NullableStringFieldUpdateOperationsInput | string | null
    prozorroLink?: NullableStringFieldUpdateOperationsInput | string | null
    product?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    scope?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type ContractUpsertWithWhereUniqueWithoutProcurementInput = {
    where: ContractWhereUniqueInput
    update: XOR<ContractUpdateWithoutProcurementInput, ContractUncheckedUpdateWithoutProcurementInput>
    create: XOR<ContractCreateWithoutProcurementInput, ContractUncheckedCreateWithoutProcurementInput>
  }

  export type ContractUpdateWithWhereUniqueWithoutProcurementInput = {
    where: ContractWhereUniqueInput
    data: XOR<ContractUpdateWithoutProcurementInput, ContractUncheckedUpdateWithoutProcurementInput>
  }

  export type ContractUpdateManyWithWhereWithoutProcurementInput = {
    where: ContractScalarWhereInput
    data: XOR<ContractUpdateManyMutationInput, ContractUncheckedUpdateManyWithoutProcurementInput>
  }

  export type ContractScalarWhereInput = {
    AND?: ContractScalarWhereInput | ContractScalarWhereInput[]
    OR?: ContractScalarWhereInput[]
    NOT?: ContractScalarWhereInput | ContractScalarWhereInput[]
    id?: StringFilter<"Contract"> | string
    createdAt?: DateTimeFilter<"Contract"> | Date | string
    updatedAt?: DateTimeFilter<"Contract"> | Date | string
    number?: StringFilter<"Contract"> | string
    prozorroLink?: StringNullableFilter<"Contract"> | string | null
    startValue?: DecimalFilter<"Contract"> | Decimal | DecimalJsLike | number | string
    currentValue?: DecimalNullableFilter<"Contract"> | Decimal | DecimalJsLike | number | string | null
    signatureDate?: DateTimeFilter<"Contract"> | Date | string
    terminationDate?: DateTimeFilter<"Contract"> | Date | string
    product?: StringFilter<"Contract"> | string
    unit?: StringFilter<"Contract"> | string
    scope?: StringFilter<"Contract"> | string
    procurementId?: StringFilter<"Contract"> | string
  }

  export type ProcurementCreateWithoutJointProcurementInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    expectedValue: Decimal | DecimalJsLike | number | string
    resultValue?: Decimal | DecimalJsLike | number | string | null
    announcedAt?: Date | string | null
    finishedAt?: Date | string | null
    prozorroId?: string | null
    prozorroLink?: string | null
    product: string
    unit: string
    scope: string
    status?: string
    customer: CustomerCreateNestedOneWithoutProcurementsInput
    manager: UserCreateNestedOneWithoutProcurementsInput
    contracts?: ContractCreateNestedManyWithoutProcurementInput
  }

  export type ProcurementUncheckedCreateWithoutJointProcurementInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    expectedValue: Decimal | DecimalJsLike | number | string
    resultValue?: Decimal | DecimalJsLike | number | string | null
    announcedAt?: Date | string | null
    finishedAt?: Date | string | null
    prozorroId?: string | null
    prozorroLink?: string | null
    product: string
    unit: string
    scope: string
    status?: string
    customerId: string
    userId: string
    contracts?: ContractUncheckedCreateNestedManyWithoutProcurementInput
  }

  export type ProcurementCreateOrConnectWithoutJointProcurementInput = {
    where: ProcurementWhereUniqueInput
    create: XOR<ProcurementCreateWithoutJointProcurementInput, ProcurementUncheckedCreateWithoutJointProcurementInput>
  }

  export type ProcurementCreateManyJointProcurementInputEnvelope = {
    data: ProcurementCreateManyJointProcurementInput | ProcurementCreateManyJointProcurementInput[]
    skipDuplicates?: boolean
  }

  export type ProcurementUpsertWithWhereUniqueWithoutJointProcurementInput = {
    where: ProcurementWhereUniqueInput
    update: XOR<ProcurementUpdateWithoutJointProcurementInput, ProcurementUncheckedUpdateWithoutJointProcurementInput>
    create: XOR<ProcurementCreateWithoutJointProcurementInput, ProcurementUncheckedCreateWithoutJointProcurementInput>
  }

  export type ProcurementUpdateWithWhereUniqueWithoutJointProcurementInput = {
    where: ProcurementWhereUniqueInput
    data: XOR<ProcurementUpdateWithoutJointProcurementInput, ProcurementUncheckedUpdateWithoutJointProcurementInput>
  }

  export type ProcurementUpdateManyWithWhereWithoutJointProcurementInput = {
    where: ProcurementScalarWhereInput
    data: XOR<ProcurementUpdateManyMutationInput, ProcurementUncheckedUpdateManyWithoutJointProcurementInput>
  }

  export type ProcurementCreateWithoutContractsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    expectedValue: Decimal | DecimalJsLike | number | string
    resultValue?: Decimal | DecimalJsLike | number | string | null
    announcedAt?: Date | string | null
    finishedAt?: Date | string | null
    prozorroId?: string | null
    prozorroLink?: string | null
    product: string
    unit: string
    scope: string
    status?: string
    customer: CustomerCreateNestedOneWithoutProcurementsInput
    manager: UserCreateNestedOneWithoutProcurementsInput
    jointProcurement?: JointProcurementCreateNestedOneWithoutProcurementsInput
  }

  export type ProcurementUncheckedCreateWithoutContractsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    expectedValue: Decimal | DecimalJsLike | number | string
    resultValue?: Decimal | DecimalJsLike | number | string | null
    announcedAt?: Date | string | null
    finishedAt?: Date | string | null
    prozorroId?: string | null
    prozorroLink?: string | null
    product: string
    unit: string
    scope: string
    status?: string
    customerId: string
    userId: string
    jointProcurementid?: string | null
  }

  export type ProcurementCreateOrConnectWithoutContractsInput = {
    where: ProcurementWhereUniqueInput
    create: XOR<ProcurementCreateWithoutContractsInput, ProcurementUncheckedCreateWithoutContractsInput>
  }

  export type contractAgreementCreateWithoutContractInput = {
    id?: string
    createdAt?: Date | string
    number: string
    signatureDate: Date | string
    reason: string
    changes: string
  }

  export type contractAgreementUncheckedCreateWithoutContractInput = {
    id?: string
    createdAt?: Date | string
    number: string
    signatureDate: Date | string
    reason: string
    changes: string
  }

  export type contractAgreementCreateOrConnectWithoutContractInput = {
    where: contractAgreementWhereUniqueInput
    create: XOR<contractAgreementCreateWithoutContractInput, contractAgreementUncheckedCreateWithoutContractInput>
  }

  export type contractAgreementCreateManyContractInputEnvelope = {
    data: contractAgreementCreateManyContractInput | contractAgreementCreateManyContractInput[]
    skipDuplicates?: boolean
  }

  export type ProcurementUpsertWithoutContractsInput = {
    update: XOR<ProcurementUpdateWithoutContractsInput, ProcurementUncheckedUpdateWithoutContractsInput>
    create: XOR<ProcurementCreateWithoutContractsInput, ProcurementUncheckedCreateWithoutContractsInput>
    where?: ProcurementWhereInput
  }

  export type ProcurementUpdateToOneWithWhereWithoutContractsInput = {
    where?: ProcurementWhereInput
    data: XOR<ProcurementUpdateWithoutContractsInput, ProcurementUncheckedUpdateWithoutContractsInput>
  }

  export type ProcurementUpdateWithoutContractsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expectedValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    resultValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    announcedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    prozorroId?: NullableStringFieldUpdateOperationsInput | string | null
    prozorroLink?: NullableStringFieldUpdateOperationsInput | string | null
    product?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    scope?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    customer?: CustomerUpdateOneRequiredWithoutProcurementsNestedInput
    manager?: UserUpdateOneRequiredWithoutProcurementsNestedInput
    jointProcurement?: JointProcurementUpdateOneWithoutProcurementsNestedInput
  }

  export type ProcurementUncheckedUpdateWithoutContractsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expectedValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    resultValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    announcedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    prozorroId?: NullableStringFieldUpdateOperationsInput | string | null
    prozorroLink?: NullableStringFieldUpdateOperationsInput | string | null
    product?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    scope?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    jointProcurementid?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type contractAgreementUpsertWithWhereUniqueWithoutContractInput = {
    where: contractAgreementWhereUniqueInput
    update: XOR<contractAgreementUpdateWithoutContractInput, contractAgreementUncheckedUpdateWithoutContractInput>
    create: XOR<contractAgreementCreateWithoutContractInput, contractAgreementUncheckedCreateWithoutContractInput>
  }

  export type contractAgreementUpdateWithWhereUniqueWithoutContractInput = {
    where: contractAgreementWhereUniqueInput
    data: XOR<contractAgreementUpdateWithoutContractInput, contractAgreementUncheckedUpdateWithoutContractInput>
  }

  export type contractAgreementUpdateManyWithWhereWithoutContractInput = {
    where: contractAgreementScalarWhereInput
    data: XOR<contractAgreementUpdateManyMutationInput, contractAgreementUncheckedUpdateManyWithoutContractInput>
  }

  export type contractAgreementScalarWhereInput = {
    AND?: contractAgreementScalarWhereInput | contractAgreementScalarWhereInput[]
    OR?: contractAgreementScalarWhereInput[]
    NOT?: contractAgreementScalarWhereInput | contractAgreementScalarWhereInput[]
    id?: StringFilter<"contractAgreement"> | string
    createdAt?: DateTimeFilter<"contractAgreement"> | Date | string
    number?: StringFilter<"contractAgreement"> | string
    signatureDate?: DateTimeFilter<"contractAgreement"> | Date | string
    reason?: StringFilter<"contractAgreement"> | string
    changes?: StringFilter<"contractAgreement"> | string
    contractId?: StringFilter<"contractAgreement"> | string
  }

  export type ContractCreateWithoutAgreementsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    number: string
    prozorroLink?: string | null
    startValue: Decimal | DecimalJsLike | number | string
    currentValue?: Decimal | DecimalJsLike | number | string | null
    signatureDate: Date | string
    terminationDate: Date | string
    product: string
    unit: string
    scope: string
    procurement: ProcurementCreateNestedOneWithoutContractsInput
  }

  export type ContractUncheckedCreateWithoutAgreementsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    number: string
    prozorroLink?: string | null
    startValue: Decimal | DecimalJsLike | number | string
    currentValue?: Decimal | DecimalJsLike | number | string | null
    signatureDate: Date | string
    terminationDate: Date | string
    product: string
    unit: string
    scope: string
    procurementId: string
  }

  export type ContractCreateOrConnectWithoutAgreementsInput = {
    where: ContractWhereUniqueInput
    create: XOR<ContractCreateWithoutAgreementsInput, ContractUncheckedCreateWithoutAgreementsInput>
  }

  export type ContractUpsertWithoutAgreementsInput = {
    update: XOR<ContractUpdateWithoutAgreementsInput, ContractUncheckedUpdateWithoutAgreementsInput>
    create: XOR<ContractCreateWithoutAgreementsInput, ContractUncheckedCreateWithoutAgreementsInput>
    where?: ContractWhereInput
  }

  export type ContractUpdateToOneWithWhereWithoutAgreementsInput = {
    where?: ContractWhereInput
    data: XOR<ContractUpdateWithoutAgreementsInput, ContractUncheckedUpdateWithoutAgreementsInput>
  }

  export type ContractUpdateWithoutAgreementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    number?: StringFieldUpdateOperationsInput | string
    prozorroLink?: NullableStringFieldUpdateOperationsInput | string | null
    startValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currentValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    signatureDate?: DateTimeFieldUpdateOperationsInput | Date | string
    terminationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    scope?: StringFieldUpdateOperationsInput | string
    procurement?: ProcurementUpdateOneRequiredWithoutContractsNestedInput
  }

  export type ContractUncheckedUpdateWithoutAgreementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    number?: StringFieldUpdateOperationsInput | string
    prozorroLink?: NullableStringFieldUpdateOperationsInput | string | null
    startValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currentValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    signatureDate?: DateTimeFieldUpdateOperationsInput | Date | string
    terminationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    scope?: StringFieldUpdateOperationsInput | string
    procurementId?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateWithoutTasksInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    name?: string | null
    surname?: string | null
    password: string
    position?: string | null
    role?: string
    procurements?: ProcurementCreateNestedManyWithoutManagerInput
  }

  export type UserUncheckedCreateWithoutTasksInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    email: string
    name?: string | null
    surname?: string | null
    password: string
    position?: string | null
    role?: string
    procurements?: ProcurementUncheckedCreateNestedManyWithoutManagerInput
  }

  export type UserCreateOrConnectWithoutTasksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTasksInput, UserUncheckedCreateWithoutTasksInput>
  }

  export type UserUpsertWithoutTasksInput = {
    update: XOR<UserUpdateWithoutTasksInput, UserUncheckedUpdateWithoutTasksInput>
    create: XOR<UserCreateWithoutTasksInput, UserUncheckedCreateWithoutTasksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTasksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTasksInput, UserUncheckedUpdateWithoutTasksInput>
  }

  export type UserUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    position?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    procurements?: ProcurementUpdateManyWithoutManagerNestedInput
  }

  export type UserUncheckedUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    surname?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    position?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    procurements?: ProcurementUncheckedUpdateManyWithoutManagerNestedInput
  }

  export type TaskCreateManyUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    priority?: $Enums.Priority | null
    status?: string
    terminationDate: Date | string
    isCompleted?: boolean
    notes?: string | null
  }

  export type ProcurementCreateManyManagerInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    expectedValue: Decimal | DecimalJsLike | number | string
    resultValue?: Decimal | DecimalJsLike | number | string | null
    announcedAt?: Date | string | null
    finishedAt?: Date | string | null
    prozorroId?: string | null
    prozorroLink?: string | null
    product: string
    unit: string
    scope: string
    status?: string
    customerId: string
    jointProcurementid?: string | null
  }

  export type TaskUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    priority?: NullableEnumPriorityFieldUpdateOperationsInput | $Enums.Priority | null
    status?: StringFieldUpdateOperationsInput | string
    terminationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TaskUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    priority?: NullableEnumPriorityFieldUpdateOperationsInput | $Enums.Priority | null
    status?: StringFieldUpdateOperationsInput | string
    terminationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TaskUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    priority?: NullableEnumPriorityFieldUpdateOperationsInput | $Enums.Priority | null
    status?: StringFieldUpdateOperationsInput | string
    terminationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    isCompleted?: BoolFieldUpdateOperationsInput | boolean
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProcurementUpdateWithoutManagerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expectedValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    resultValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    announcedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    prozorroId?: NullableStringFieldUpdateOperationsInput | string | null
    prozorroLink?: NullableStringFieldUpdateOperationsInput | string | null
    product?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    scope?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    customer?: CustomerUpdateOneRequiredWithoutProcurementsNestedInput
    jointProcurement?: JointProcurementUpdateOneWithoutProcurementsNestedInput
    contracts?: ContractUpdateManyWithoutProcurementNestedInput
  }

  export type ProcurementUncheckedUpdateWithoutManagerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expectedValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    resultValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    announcedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    prozorroId?: NullableStringFieldUpdateOperationsInput | string | null
    prozorroLink?: NullableStringFieldUpdateOperationsInput | string | null
    product?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    scope?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    jointProcurementid?: NullableStringFieldUpdateOperationsInput | string | null
    contracts?: ContractUncheckedUpdateManyWithoutProcurementNestedInput
  }

  export type ProcurementUncheckedUpdateManyWithoutManagerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expectedValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    resultValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    announcedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    prozorroId?: NullableStringFieldUpdateOperationsInput | string | null
    prozorroLink?: NullableStringFieldUpdateOperationsInput | string | null
    product?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    scope?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    jointProcurementid?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProcurementCreateManyCustomerInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    expectedValue: Decimal | DecimalJsLike | number | string
    resultValue?: Decimal | DecimalJsLike | number | string | null
    announcedAt?: Date | string | null
    finishedAt?: Date | string | null
    prozorroId?: string | null
    prozorroLink?: string | null
    product: string
    unit: string
    scope: string
    status?: string
    userId: string
    jointProcurementid?: string | null
  }

  export type ProcurementUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expectedValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    resultValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    announcedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    prozorroId?: NullableStringFieldUpdateOperationsInput | string | null
    prozorroLink?: NullableStringFieldUpdateOperationsInput | string | null
    product?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    scope?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    manager?: UserUpdateOneRequiredWithoutProcurementsNestedInput
    jointProcurement?: JointProcurementUpdateOneWithoutProcurementsNestedInput
    contracts?: ContractUpdateManyWithoutProcurementNestedInput
  }

  export type ProcurementUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expectedValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    resultValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    announcedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    prozorroId?: NullableStringFieldUpdateOperationsInput | string | null
    prozorroLink?: NullableStringFieldUpdateOperationsInput | string | null
    product?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    scope?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    jointProcurementid?: NullableStringFieldUpdateOperationsInput | string | null
    contracts?: ContractUncheckedUpdateManyWithoutProcurementNestedInput
  }

  export type ProcurementUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expectedValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    resultValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    announcedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    prozorroId?: NullableStringFieldUpdateOperationsInput | string | null
    prozorroLink?: NullableStringFieldUpdateOperationsInput | string | null
    product?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    scope?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    jointProcurementid?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ContractCreateManyProcurementInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    number: string
    prozorroLink?: string | null
    startValue: Decimal | DecimalJsLike | number | string
    currentValue?: Decimal | DecimalJsLike | number | string | null
    signatureDate: Date | string
    terminationDate: Date | string
    product: string
    unit: string
    scope: string
  }

  export type ContractUpdateWithoutProcurementInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    number?: StringFieldUpdateOperationsInput | string
    prozorroLink?: NullableStringFieldUpdateOperationsInput | string | null
    startValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currentValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    signatureDate?: DateTimeFieldUpdateOperationsInput | Date | string
    terminationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    scope?: StringFieldUpdateOperationsInput | string
    agreements?: contractAgreementUpdateManyWithoutContractNestedInput
  }

  export type ContractUncheckedUpdateWithoutProcurementInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    number?: StringFieldUpdateOperationsInput | string
    prozorroLink?: NullableStringFieldUpdateOperationsInput | string | null
    startValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currentValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    signatureDate?: DateTimeFieldUpdateOperationsInput | Date | string
    terminationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    scope?: StringFieldUpdateOperationsInput | string
    agreements?: contractAgreementUncheckedUpdateManyWithoutContractNestedInput
  }

  export type ContractUncheckedUpdateManyWithoutProcurementInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    number?: StringFieldUpdateOperationsInput | string
    prozorroLink?: NullableStringFieldUpdateOperationsInput | string | null
    startValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currentValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    signatureDate?: DateTimeFieldUpdateOperationsInput | Date | string
    terminationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    scope?: StringFieldUpdateOperationsInput | string
  }

  export type ProcurementCreateManyJointProcurementInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    expectedValue: Decimal | DecimalJsLike | number | string
    resultValue?: Decimal | DecimalJsLike | number | string | null
    announcedAt?: Date | string | null
    finishedAt?: Date | string | null
    prozorroId?: string | null
    prozorroLink?: string | null
    product: string
    unit: string
    scope: string
    status?: string
    customerId: string
    userId: string
  }

  export type ProcurementUpdateWithoutJointProcurementInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expectedValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    resultValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    announcedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    prozorroId?: NullableStringFieldUpdateOperationsInput | string | null
    prozorroLink?: NullableStringFieldUpdateOperationsInput | string | null
    product?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    scope?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    customer?: CustomerUpdateOneRequiredWithoutProcurementsNestedInput
    manager?: UserUpdateOneRequiredWithoutProcurementsNestedInput
    contracts?: ContractUpdateManyWithoutProcurementNestedInput
  }

  export type ProcurementUncheckedUpdateWithoutJointProcurementInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expectedValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    resultValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    announcedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    prozorroId?: NullableStringFieldUpdateOperationsInput | string | null
    prozorroLink?: NullableStringFieldUpdateOperationsInput | string | null
    product?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    scope?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    contracts?: ContractUncheckedUpdateManyWithoutProcurementNestedInput
  }

  export type ProcurementUncheckedUpdateManyWithoutJointProcurementInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expectedValue?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    resultValue?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    announcedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    finishedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    prozorroId?: NullableStringFieldUpdateOperationsInput | string | null
    prozorroLink?: NullableStringFieldUpdateOperationsInput | string | null
    product?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    scope?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type contractAgreementCreateManyContractInput = {
    id?: string
    createdAt?: Date | string
    number: string
    signatureDate: Date | string
    reason: string
    changes: string
  }

  export type contractAgreementUpdateWithoutContractInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    number?: StringFieldUpdateOperationsInput | string
    signatureDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: StringFieldUpdateOperationsInput | string
    changes?: StringFieldUpdateOperationsInput | string
  }

  export type contractAgreementUncheckedUpdateWithoutContractInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    number?: StringFieldUpdateOperationsInput | string
    signatureDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: StringFieldUpdateOperationsInput | string
    changes?: StringFieldUpdateOperationsInput | string
  }

  export type contractAgreementUncheckedUpdateManyWithoutContractInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    number?: StringFieldUpdateOperationsInput | string
    signatureDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: StringFieldUpdateOperationsInput | string
    changes?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CustomerCountOutputTypeDefaultArgs instead
     */
    export type CustomerCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CustomerCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProcurementCountOutputTypeDefaultArgs instead
     */
    export type ProcurementCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProcurementCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use JointProcurementCountOutputTypeDefaultArgs instead
     */
    export type JointProcurementCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = JointProcurementCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ContractCountOutputTypeDefaultArgs instead
     */
    export type ContractCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ContractCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CustomerDefaultArgs instead
     */
    export type CustomerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CustomerDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProcurementDefaultArgs instead
     */
    export type ProcurementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProcurementDefaultArgs<ExtArgs>
    /**
     * @deprecated Use JointProcurementDefaultArgs instead
     */
    export type JointProcurementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = JointProcurementDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ContractDefaultArgs instead
     */
    export type ContractArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ContractDefaultArgs<ExtArgs>
    /**
     * @deprecated Use contractAgreementDefaultArgs instead
     */
    export type contractAgreementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = contractAgreementDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TaskDefaultArgs instead
     */
    export type TaskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TaskDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}