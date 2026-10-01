
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model CmpUser
 * 
 */
export type CmpUser = $Result.DefaultSelection<Prisma.$CmpUserPayload>
/**
 * Model CmpPost
 * 
 */
export type CmpPost = $Result.DefaultSelection<Prisma.$CmpPostPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more CmpUsers
 * const cmpUsers = await prisma.cmpUser.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more CmpUsers
   * const cmpUsers = await prisma.cmpUser.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.cmpUser`: Exposes CRUD operations for the **CmpUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CmpUsers
    * const cmpUsers = await prisma.cmpUser.findMany()
    * ```
    */
  get cmpUser(): Prisma.CmpUserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cmpPost`: Exposes CRUD operations for the **CmpPost** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CmpPosts
    * const cmpPosts = await prisma.cmpPost.findMany()
    * ```
    */
  get cmpPost(): Prisma.CmpPostDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.10.0
   * Query Engine version: 0edf323efd1d98336f3f0a68684b56f689b900d3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

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
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    CmpUser: 'CmpUser',
    CmpPost: 'CmpPost'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "cmpUser" | "cmpPost"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      CmpUser: {
        payload: Prisma.$CmpUserPayload<ExtArgs>
        fields: Prisma.CmpUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CmpUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmpUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CmpUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmpUserPayload>
          }
          findFirst: {
            args: Prisma.CmpUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmpUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CmpUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmpUserPayload>
          }
          findMany: {
            args: Prisma.CmpUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmpUserPayload>[]
          }
          create: {
            args: Prisma.CmpUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmpUserPayload>
          }
          createMany: {
            args: Prisma.CmpUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CmpUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmpUserPayload>[]
          }
          delete: {
            args: Prisma.CmpUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmpUserPayload>
          }
          update: {
            args: Prisma.CmpUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmpUserPayload>
          }
          deleteMany: {
            args: Prisma.CmpUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CmpUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CmpUserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmpUserPayload>[]
          }
          upsert: {
            args: Prisma.CmpUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmpUserPayload>
          }
          aggregate: {
            args: Prisma.CmpUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCmpUser>
          }
          groupBy: {
            args: Prisma.CmpUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<CmpUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.CmpUserCountArgs<ExtArgs>
            result: $Utils.Optional<CmpUserCountAggregateOutputType> | number
          }
        }
      }
      CmpPost: {
        payload: Prisma.$CmpPostPayload<ExtArgs>
        fields: Prisma.CmpPostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CmpPostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmpPostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CmpPostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmpPostPayload>
          }
          findFirst: {
            args: Prisma.CmpPostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmpPostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CmpPostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmpPostPayload>
          }
          findMany: {
            args: Prisma.CmpPostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmpPostPayload>[]
          }
          create: {
            args: Prisma.CmpPostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmpPostPayload>
          }
          createMany: {
            args: Prisma.CmpPostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CmpPostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmpPostPayload>[]
          }
          delete: {
            args: Prisma.CmpPostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmpPostPayload>
          }
          update: {
            args: Prisma.CmpPostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmpPostPayload>
          }
          deleteMany: {
            args: Prisma.CmpPostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CmpPostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CmpPostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmpPostPayload>[]
          }
          upsert: {
            args: Prisma.CmpPostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CmpPostPayload>
          }
          aggregate: {
            args: Prisma.CmpPostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCmpPost>
          }
          groupBy: {
            args: Prisma.CmpPostGroupByArgs<ExtArgs>
            result: $Utils.Optional<CmpPostGroupByOutputType>[]
          }
          count: {
            args: Prisma.CmpPostCountArgs<ExtArgs>
            result: $Utils.Optional<CmpPostCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
    /**
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    cmpUser?: CmpUserOmit
    cmpPost?: CmpPostOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
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
   * Count Type CmpUserCountOutputType
   */

  export type CmpUserCountOutputType = {
    posts: number
  }

  export type CmpUserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | CmpUserCountOutputTypeCountPostsArgs
  }

  // Custom InputTypes
  /**
   * CmpUserCountOutputType without action
   */
  export type CmpUserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmpUserCountOutputType
     */
    select?: CmpUserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CmpUserCountOutputType without action
   */
  export type CmpUserCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CmpPostWhereInput
  }


  /**
   * Models
   */

  /**
   * Model CmpUser
   */

  export type AggregateCmpUser = {
    _count: CmpUserCountAggregateOutputType | null
    _avg: CmpUserAvgAggregateOutputType | null
    _sum: CmpUserSumAggregateOutputType | null
    _min: CmpUserMinAggregateOutputType | null
    _max: CmpUserMaxAggregateOutputType | null
  }

  export type CmpUserAvgAggregateOutputType = {
    id: number | null
  }

  export type CmpUserSumAggregateOutputType = {
    id: bigint | null
  }

  export type CmpUserMinAggregateOutputType = {
    id: bigint | null
    email: string | null
  }

  export type CmpUserMaxAggregateOutputType = {
    id: bigint | null
    email: string | null
  }

  export type CmpUserCountAggregateOutputType = {
    id: number
    email: number
    _all: number
  }


  export type CmpUserAvgAggregateInputType = {
    id?: true
  }

  export type CmpUserSumAggregateInputType = {
    id?: true
  }

  export type CmpUserMinAggregateInputType = {
    id?: true
    email?: true
  }

  export type CmpUserMaxAggregateInputType = {
    id?: true
    email?: true
  }

  export type CmpUserCountAggregateInputType = {
    id?: true
    email?: true
    _all?: true
  }

  export type CmpUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CmpUser to aggregate.
     */
    where?: CmpUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmpUsers to fetch.
     */
    orderBy?: CmpUserOrderByWithRelationInput | CmpUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CmpUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmpUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmpUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CmpUsers
    **/
    _count?: true | CmpUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CmpUserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CmpUserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CmpUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CmpUserMaxAggregateInputType
  }

  export type GetCmpUserAggregateType<T extends CmpUserAggregateArgs> = {
        [P in keyof T & keyof AggregateCmpUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCmpUser[P]>
      : GetScalarType<T[P], AggregateCmpUser[P]>
  }




  export type CmpUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CmpUserWhereInput
    orderBy?: CmpUserOrderByWithAggregationInput | CmpUserOrderByWithAggregationInput[]
    by: CmpUserScalarFieldEnum[] | CmpUserScalarFieldEnum
    having?: CmpUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CmpUserCountAggregateInputType | true
    _avg?: CmpUserAvgAggregateInputType
    _sum?: CmpUserSumAggregateInputType
    _min?: CmpUserMinAggregateInputType
    _max?: CmpUserMaxAggregateInputType
  }

  export type CmpUserGroupByOutputType = {
    id: bigint
    email: string
    _count: CmpUserCountAggregateOutputType | null
    _avg: CmpUserAvgAggregateOutputType | null
    _sum: CmpUserSumAggregateOutputType | null
    _min: CmpUserMinAggregateOutputType | null
    _max: CmpUserMaxAggregateOutputType | null
  }

  type GetCmpUserGroupByPayload<T extends CmpUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CmpUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CmpUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CmpUserGroupByOutputType[P]>
            : GetScalarType<T[P], CmpUserGroupByOutputType[P]>
        }
      >
    >


  export type CmpUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    posts?: boolean | CmpUser$postsArgs<ExtArgs>
    _count?: boolean | CmpUserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cmpUser"]>

  export type CmpUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
  }, ExtArgs["result"]["cmpUser"]>

  export type CmpUserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
  }, ExtArgs["result"]["cmpUser"]>

  export type CmpUserSelectScalar = {
    id?: boolean
    email?: boolean
  }

  export type CmpUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email", ExtArgs["result"]["cmpUser"]>
  export type CmpUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | CmpUser$postsArgs<ExtArgs>
    _count?: boolean | CmpUserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CmpUserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CmpUserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CmpUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CmpUser"
    objects: {
      posts: Prisma.$CmpPostPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      email: string
    }, ExtArgs["result"]["cmpUser"]>
    composites: {}
  }

  type CmpUserGetPayload<S extends boolean | null | undefined | CmpUserDefaultArgs> = $Result.GetResult<Prisma.$CmpUserPayload, S>

  type CmpUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CmpUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CmpUserCountAggregateInputType | true
    }

  export interface CmpUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CmpUser'], meta: { name: 'CmpUser' } }
    /**
     * Find zero or one CmpUser that matches the filter.
     * @param {CmpUserFindUniqueArgs} args - Arguments to find a CmpUser
     * @example
     * // Get one CmpUser
     * const cmpUser = await prisma.cmpUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CmpUserFindUniqueArgs>(args: SelectSubset<T, CmpUserFindUniqueArgs<ExtArgs>>): Prisma__CmpUserClient<$Result.GetResult<Prisma.$CmpUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CmpUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CmpUserFindUniqueOrThrowArgs} args - Arguments to find a CmpUser
     * @example
     * // Get one CmpUser
     * const cmpUser = await prisma.cmpUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CmpUserFindUniqueOrThrowArgs>(args: SelectSubset<T, CmpUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CmpUserClient<$Result.GetResult<Prisma.$CmpUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CmpUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmpUserFindFirstArgs} args - Arguments to find a CmpUser
     * @example
     * // Get one CmpUser
     * const cmpUser = await prisma.cmpUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CmpUserFindFirstArgs>(args?: SelectSubset<T, CmpUserFindFirstArgs<ExtArgs>>): Prisma__CmpUserClient<$Result.GetResult<Prisma.$CmpUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CmpUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmpUserFindFirstOrThrowArgs} args - Arguments to find a CmpUser
     * @example
     * // Get one CmpUser
     * const cmpUser = await prisma.cmpUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CmpUserFindFirstOrThrowArgs>(args?: SelectSubset<T, CmpUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__CmpUserClient<$Result.GetResult<Prisma.$CmpUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CmpUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmpUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CmpUsers
     * const cmpUsers = await prisma.cmpUser.findMany()
     * 
     * // Get first 10 CmpUsers
     * const cmpUsers = await prisma.cmpUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cmpUserWithIdOnly = await prisma.cmpUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CmpUserFindManyArgs>(args?: SelectSubset<T, CmpUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmpUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CmpUser.
     * @param {CmpUserCreateArgs} args - Arguments to create a CmpUser.
     * @example
     * // Create one CmpUser
     * const CmpUser = await prisma.cmpUser.create({
     *   data: {
     *     // ... data to create a CmpUser
     *   }
     * })
     * 
     */
    create<T extends CmpUserCreateArgs>(args: SelectSubset<T, CmpUserCreateArgs<ExtArgs>>): Prisma__CmpUserClient<$Result.GetResult<Prisma.$CmpUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CmpUsers.
     * @param {CmpUserCreateManyArgs} args - Arguments to create many CmpUsers.
     * @example
     * // Create many CmpUsers
     * const cmpUser = await prisma.cmpUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CmpUserCreateManyArgs>(args?: SelectSubset<T, CmpUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CmpUsers and returns the data saved in the database.
     * @param {CmpUserCreateManyAndReturnArgs} args - Arguments to create many CmpUsers.
     * @example
     * // Create many CmpUsers
     * const cmpUser = await prisma.cmpUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CmpUsers and only return the `id`
     * const cmpUserWithIdOnly = await prisma.cmpUser.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CmpUserCreateManyAndReturnArgs>(args?: SelectSubset<T, CmpUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmpUserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CmpUser.
     * @param {CmpUserDeleteArgs} args - Arguments to delete one CmpUser.
     * @example
     * // Delete one CmpUser
     * const CmpUser = await prisma.cmpUser.delete({
     *   where: {
     *     // ... filter to delete one CmpUser
     *   }
     * })
     * 
     */
    delete<T extends CmpUserDeleteArgs>(args: SelectSubset<T, CmpUserDeleteArgs<ExtArgs>>): Prisma__CmpUserClient<$Result.GetResult<Prisma.$CmpUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CmpUser.
     * @param {CmpUserUpdateArgs} args - Arguments to update one CmpUser.
     * @example
     * // Update one CmpUser
     * const cmpUser = await prisma.cmpUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CmpUserUpdateArgs>(args: SelectSubset<T, CmpUserUpdateArgs<ExtArgs>>): Prisma__CmpUserClient<$Result.GetResult<Prisma.$CmpUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CmpUsers.
     * @param {CmpUserDeleteManyArgs} args - Arguments to filter CmpUsers to delete.
     * @example
     * // Delete a few CmpUsers
     * const { count } = await prisma.cmpUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CmpUserDeleteManyArgs>(args?: SelectSubset<T, CmpUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CmpUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmpUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CmpUsers
     * const cmpUser = await prisma.cmpUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CmpUserUpdateManyArgs>(args: SelectSubset<T, CmpUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CmpUsers and returns the data updated in the database.
     * @param {CmpUserUpdateManyAndReturnArgs} args - Arguments to update many CmpUsers.
     * @example
     * // Update many CmpUsers
     * const cmpUser = await prisma.cmpUser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CmpUsers and only return the `id`
     * const cmpUserWithIdOnly = await prisma.cmpUser.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CmpUserUpdateManyAndReturnArgs>(args: SelectSubset<T, CmpUserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmpUserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CmpUser.
     * @param {CmpUserUpsertArgs} args - Arguments to update or create a CmpUser.
     * @example
     * // Update or create a CmpUser
     * const cmpUser = await prisma.cmpUser.upsert({
     *   create: {
     *     // ... data to create a CmpUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CmpUser we want to update
     *   }
     * })
     */
    upsert<T extends CmpUserUpsertArgs>(args: SelectSubset<T, CmpUserUpsertArgs<ExtArgs>>): Prisma__CmpUserClient<$Result.GetResult<Prisma.$CmpUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CmpUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmpUserCountArgs} args - Arguments to filter CmpUsers to count.
     * @example
     * // Count the number of CmpUsers
     * const count = await prisma.cmpUser.count({
     *   where: {
     *     // ... the filter for the CmpUsers we want to count
     *   }
     * })
    **/
    count<T extends CmpUserCountArgs>(
      args?: Subset<T, CmpUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CmpUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CmpUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmpUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CmpUserAggregateArgs>(args: Subset<T, CmpUserAggregateArgs>): Prisma.PrismaPromise<GetCmpUserAggregateType<T>>

    /**
     * Group by CmpUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmpUserGroupByArgs} args - Group by arguments.
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
      T extends CmpUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CmpUserGroupByArgs['orderBy'] }
        : { orderBy?: CmpUserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CmpUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCmpUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CmpUser model
   */
  readonly fields: CmpUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CmpUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CmpUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    posts<T extends CmpUser$postsArgs<ExtArgs> = {}>(args?: Subset<T, CmpUser$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmpPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CmpUser model
   */
  interface CmpUserFieldRefs {
    readonly id: FieldRef<"CmpUser", 'BigInt'>
    readonly email: FieldRef<"CmpUser", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CmpUser findUnique
   */
  export type CmpUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmpUser
     */
    select?: CmpUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmpUser
     */
    omit?: CmpUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmpUserInclude<ExtArgs> | null
    /**
     * Filter, which CmpUser to fetch.
     */
    where: CmpUserWhereUniqueInput
  }

  /**
   * CmpUser findUniqueOrThrow
   */
  export type CmpUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmpUser
     */
    select?: CmpUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmpUser
     */
    omit?: CmpUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmpUserInclude<ExtArgs> | null
    /**
     * Filter, which CmpUser to fetch.
     */
    where: CmpUserWhereUniqueInput
  }

  /**
   * CmpUser findFirst
   */
  export type CmpUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmpUser
     */
    select?: CmpUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmpUser
     */
    omit?: CmpUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmpUserInclude<ExtArgs> | null
    /**
     * Filter, which CmpUser to fetch.
     */
    where?: CmpUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmpUsers to fetch.
     */
    orderBy?: CmpUserOrderByWithRelationInput | CmpUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CmpUsers.
     */
    cursor?: CmpUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmpUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmpUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CmpUsers.
     */
    distinct?: CmpUserScalarFieldEnum | CmpUserScalarFieldEnum[]
  }

  /**
   * CmpUser findFirstOrThrow
   */
  export type CmpUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmpUser
     */
    select?: CmpUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmpUser
     */
    omit?: CmpUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmpUserInclude<ExtArgs> | null
    /**
     * Filter, which CmpUser to fetch.
     */
    where?: CmpUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmpUsers to fetch.
     */
    orderBy?: CmpUserOrderByWithRelationInput | CmpUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CmpUsers.
     */
    cursor?: CmpUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmpUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmpUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CmpUsers.
     */
    distinct?: CmpUserScalarFieldEnum | CmpUserScalarFieldEnum[]
  }

  /**
   * CmpUser findMany
   */
  export type CmpUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmpUser
     */
    select?: CmpUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmpUser
     */
    omit?: CmpUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmpUserInclude<ExtArgs> | null
    /**
     * Filter, which CmpUsers to fetch.
     */
    where?: CmpUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmpUsers to fetch.
     */
    orderBy?: CmpUserOrderByWithRelationInput | CmpUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CmpUsers.
     */
    cursor?: CmpUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmpUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmpUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CmpUsers.
     */
    distinct?: CmpUserScalarFieldEnum | CmpUserScalarFieldEnum[]
  }

  /**
   * CmpUser create
   */
  export type CmpUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmpUser
     */
    select?: CmpUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmpUser
     */
    omit?: CmpUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmpUserInclude<ExtArgs> | null
    /**
     * The data needed to create a CmpUser.
     */
    data: XOR<CmpUserCreateInput, CmpUserUncheckedCreateInput>
  }

  /**
   * CmpUser createMany
   */
  export type CmpUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CmpUsers.
     */
    data: CmpUserCreateManyInput | CmpUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CmpUser createManyAndReturn
   */
  export type CmpUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmpUser
     */
    select?: CmpUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CmpUser
     */
    omit?: CmpUserOmit<ExtArgs> | null
    /**
     * The data used to create many CmpUsers.
     */
    data: CmpUserCreateManyInput | CmpUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CmpUser update
   */
  export type CmpUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmpUser
     */
    select?: CmpUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmpUser
     */
    omit?: CmpUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmpUserInclude<ExtArgs> | null
    /**
     * The data needed to update a CmpUser.
     */
    data: XOR<CmpUserUpdateInput, CmpUserUncheckedUpdateInput>
    /**
     * Choose, which CmpUser to update.
     */
    where: CmpUserWhereUniqueInput
  }

  /**
   * CmpUser updateMany
   */
  export type CmpUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CmpUsers.
     */
    data: XOR<CmpUserUpdateManyMutationInput, CmpUserUncheckedUpdateManyInput>
    /**
     * Filter which CmpUsers to update
     */
    where?: CmpUserWhereInput
    /**
     * Limit how many CmpUsers to update.
     */
    limit?: number
  }

  /**
   * CmpUser updateManyAndReturn
   */
  export type CmpUserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmpUser
     */
    select?: CmpUserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CmpUser
     */
    omit?: CmpUserOmit<ExtArgs> | null
    /**
     * The data used to update CmpUsers.
     */
    data: XOR<CmpUserUpdateManyMutationInput, CmpUserUncheckedUpdateManyInput>
    /**
     * Filter which CmpUsers to update
     */
    where?: CmpUserWhereInput
    /**
     * Limit how many CmpUsers to update.
     */
    limit?: number
  }

  /**
   * CmpUser upsert
   */
  export type CmpUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmpUser
     */
    select?: CmpUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmpUser
     */
    omit?: CmpUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmpUserInclude<ExtArgs> | null
    /**
     * The filter to search for the CmpUser to update in case it exists.
     */
    where: CmpUserWhereUniqueInput
    /**
     * In case the CmpUser found by the `where` argument doesn't exist, create a new CmpUser with this data.
     */
    create: XOR<CmpUserCreateInput, CmpUserUncheckedCreateInput>
    /**
     * In case the CmpUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CmpUserUpdateInput, CmpUserUncheckedUpdateInput>
  }

  /**
   * CmpUser delete
   */
  export type CmpUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmpUser
     */
    select?: CmpUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmpUser
     */
    omit?: CmpUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmpUserInclude<ExtArgs> | null
    /**
     * Filter which CmpUser to delete.
     */
    where: CmpUserWhereUniqueInput
  }

  /**
   * CmpUser deleteMany
   */
  export type CmpUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CmpUsers to delete
     */
    where?: CmpUserWhereInput
    /**
     * Limit how many CmpUsers to delete.
     */
    limit?: number
  }

  /**
   * CmpUser.posts
   */
  export type CmpUser$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmpPost
     */
    select?: CmpPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmpPost
     */
    omit?: CmpPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmpPostInclude<ExtArgs> | null
    where?: CmpPostWhereInput
    orderBy?: CmpPostOrderByWithRelationInput | CmpPostOrderByWithRelationInput[]
    cursor?: CmpPostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CmpPostScalarFieldEnum | CmpPostScalarFieldEnum[]
  }

  /**
   * CmpUser without action
   */
  export type CmpUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmpUser
     */
    select?: CmpUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmpUser
     */
    omit?: CmpUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmpUserInclude<ExtArgs> | null
  }


  /**
   * Model CmpPost
   */

  export type AggregateCmpPost = {
    _count: CmpPostCountAggregateOutputType | null
    _avg: CmpPostAvgAggregateOutputType | null
    _sum: CmpPostSumAggregateOutputType | null
    _min: CmpPostMinAggregateOutputType | null
    _max: CmpPostMaxAggregateOutputType | null
  }

  export type CmpPostAvgAggregateOutputType = {
    id: number | null
    authorId: number | null
  }

  export type CmpPostSumAggregateOutputType = {
    id: bigint | null
    authorId: bigint | null
  }

  export type CmpPostMinAggregateOutputType = {
    id: bigint | null
    title: string | null
    authorId: bigint | null
  }

  export type CmpPostMaxAggregateOutputType = {
    id: bigint | null
    title: string | null
    authorId: bigint | null
  }

  export type CmpPostCountAggregateOutputType = {
    id: number
    title: number
    authorId: number
    _all: number
  }


  export type CmpPostAvgAggregateInputType = {
    id?: true
    authorId?: true
  }

  export type CmpPostSumAggregateInputType = {
    id?: true
    authorId?: true
  }

  export type CmpPostMinAggregateInputType = {
    id?: true
    title?: true
    authorId?: true
  }

  export type CmpPostMaxAggregateInputType = {
    id?: true
    title?: true
    authorId?: true
  }

  export type CmpPostCountAggregateInputType = {
    id?: true
    title?: true
    authorId?: true
    _all?: true
  }

  export type CmpPostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CmpPost to aggregate.
     */
    where?: CmpPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmpPosts to fetch.
     */
    orderBy?: CmpPostOrderByWithRelationInput | CmpPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CmpPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmpPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmpPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CmpPosts
    **/
    _count?: true | CmpPostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CmpPostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CmpPostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CmpPostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CmpPostMaxAggregateInputType
  }

  export type GetCmpPostAggregateType<T extends CmpPostAggregateArgs> = {
        [P in keyof T & keyof AggregateCmpPost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCmpPost[P]>
      : GetScalarType<T[P], AggregateCmpPost[P]>
  }




  export type CmpPostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CmpPostWhereInput
    orderBy?: CmpPostOrderByWithAggregationInput | CmpPostOrderByWithAggregationInput[]
    by: CmpPostScalarFieldEnum[] | CmpPostScalarFieldEnum
    having?: CmpPostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CmpPostCountAggregateInputType | true
    _avg?: CmpPostAvgAggregateInputType
    _sum?: CmpPostSumAggregateInputType
    _min?: CmpPostMinAggregateInputType
    _max?: CmpPostMaxAggregateInputType
  }

  export type CmpPostGroupByOutputType = {
    id: bigint
    title: string
    authorId: bigint
    _count: CmpPostCountAggregateOutputType | null
    _avg: CmpPostAvgAggregateOutputType | null
    _sum: CmpPostSumAggregateOutputType | null
    _min: CmpPostMinAggregateOutputType | null
    _max: CmpPostMaxAggregateOutputType | null
  }

  type GetCmpPostGroupByPayload<T extends CmpPostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CmpPostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CmpPostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CmpPostGroupByOutputType[P]>
            : GetScalarType<T[P], CmpPostGroupByOutputType[P]>
        }
      >
    >


  export type CmpPostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    authorId?: boolean
    author?: boolean | CmpUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cmpPost"]>

  export type CmpPostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    authorId?: boolean
    author?: boolean | CmpUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cmpPost"]>

  export type CmpPostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    authorId?: boolean
    author?: boolean | CmpUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cmpPost"]>

  export type CmpPostSelectScalar = {
    id?: boolean
    title?: boolean
    authorId?: boolean
  }

  export type CmpPostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "authorId", ExtArgs["result"]["cmpPost"]>
  export type CmpPostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | CmpUserDefaultArgs<ExtArgs>
  }
  export type CmpPostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | CmpUserDefaultArgs<ExtArgs>
  }
  export type CmpPostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | CmpUserDefaultArgs<ExtArgs>
  }

  export type $CmpPostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CmpPost"
    objects: {
      author: Prisma.$CmpUserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      title: string
      authorId: bigint
    }, ExtArgs["result"]["cmpPost"]>
    composites: {}
  }

  type CmpPostGetPayload<S extends boolean | null | undefined | CmpPostDefaultArgs> = $Result.GetResult<Prisma.$CmpPostPayload, S>

  type CmpPostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CmpPostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CmpPostCountAggregateInputType | true
    }

  export interface CmpPostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CmpPost'], meta: { name: 'CmpPost' } }
    /**
     * Find zero or one CmpPost that matches the filter.
     * @param {CmpPostFindUniqueArgs} args - Arguments to find a CmpPost
     * @example
     * // Get one CmpPost
     * const cmpPost = await prisma.cmpPost.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CmpPostFindUniqueArgs>(args: SelectSubset<T, CmpPostFindUniqueArgs<ExtArgs>>): Prisma__CmpPostClient<$Result.GetResult<Prisma.$CmpPostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CmpPost that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CmpPostFindUniqueOrThrowArgs} args - Arguments to find a CmpPost
     * @example
     * // Get one CmpPost
     * const cmpPost = await prisma.cmpPost.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CmpPostFindUniqueOrThrowArgs>(args: SelectSubset<T, CmpPostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CmpPostClient<$Result.GetResult<Prisma.$CmpPostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CmpPost that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmpPostFindFirstArgs} args - Arguments to find a CmpPost
     * @example
     * // Get one CmpPost
     * const cmpPost = await prisma.cmpPost.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CmpPostFindFirstArgs>(args?: SelectSubset<T, CmpPostFindFirstArgs<ExtArgs>>): Prisma__CmpPostClient<$Result.GetResult<Prisma.$CmpPostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CmpPost that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmpPostFindFirstOrThrowArgs} args - Arguments to find a CmpPost
     * @example
     * // Get one CmpPost
     * const cmpPost = await prisma.cmpPost.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CmpPostFindFirstOrThrowArgs>(args?: SelectSubset<T, CmpPostFindFirstOrThrowArgs<ExtArgs>>): Prisma__CmpPostClient<$Result.GetResult<Prisma.$CmpPostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CmpPosts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmpPostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CmpPosts
     * const cmpPosts = await prisma.cmpPost.findMany()
     * 
     * // Get first 10 CmpPosts
     * const cmpPosts = await prisma.cmpPost.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cmpPostWithIdOnly = await prisma.cmpPost.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CmpPostFindManyArgs>(args?: SelectSubset<T, CmpPostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmpPostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CmpPost.
     * @param {CmpPostCreateArgs} args - Arguments to create a CmpPost.
     * @example
     * // Create one CmpPost
     * const CmpPost = await prisma.cmpPost.create({
     *   data: {
     *     // ... data to create a CmpPost
     *   }
     * })
     * 
     */
    create<T extends CmpPostCreateArgs>(args: SelectSubset<T, CmpPostCreateArgs<ExtArgs>>): Prisma__CmpPostClient<$Result.GetResult<Prisma.$CmpPostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CmpPosts.
     * @param {CmpPostCreateManyArgs} args - Arguments to create many CmpPosts.
     * @example
     * // Create many CmpPosts
     * const cmpPost = await prisma.cmpPost.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CmpPostCreateManyArgs>(args?: SelectSubset<T, CmpPostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CmpPosts and returns the data saved in the database.
     * @param {CmpPostCreateManyAndReturnArgs} args - Arguments to create many CmpPosts.
     * @example
     * // Create many CmpPosts
     * const cmpPost = await prisma.cmpPost.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CmpPosts and only return the `id`
     * const cmpPostWithIdOnly = await prisma.cmpPost.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CmpPostCreateManyAndReturnArgs>(args?: SelectSubset<T, CmpPostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmpPostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CmpPost.
     * @param {CmpPostDeleteArgs} args - Arguments to delete one CmpPost.
     * @example
     * // Delete one CmpPost
     * const CmpPost = await prisma.cmpPost.delete({
     *   where: {
     *     // ... filter to delete one CmpPost
     *   }
     * })
     * 
     */
    delete<T extends CmpPostDeleteArgs>(args: SelectSubset<T, CmpPostDeleteArgs<ExtArgs>>): Prisma__CmpPostClient<$Result.GetResult<Prisma.$CmpPostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CmpPost.
     * @param {CmpPostUpdateArgs} args - Arguments to update one CmpPost.
     * @example
     * // Update one CmpPost
     * const cmpPost = await prisma.cmpPost.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CmpPostUpdateArgs>(args: SelectSubset<T, CmpPostUpdateArgs<ExtArgs>>): Prisma__CmpPostClient<$Result.GetResult<Prisma.$CmpPostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CmpPosts.
     * @param {CmpPostDeleteManyArgs} args - Arguments to filter CmpPosts to delete.
     * @example
     * // Delete a few CmpPosts
     * const { count } = await prisma.cmpPost.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CmpPostDeleteManyArgs>(args?: SelectSubset<T, CmpPostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CmpPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmpPostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CmpPosts
     * const cmpPost = await prisma.cmpPost.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CmpPostUpdateManyArgs>(args: SelectSubset<T, CmpPostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CmpPosts and returns the data updated in the database.
     * @param {CmpPostUpdateManyAndReturnArgs} args - Arguments to update many CmpPosts.
     * @example
     * // Update many CmpPosts
     * const cmpPost = await prisma.cmpPost.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CmpPosts and only return the `id`
     * const cmpPostWithIdOnly = await prisma.cmpPost.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CmpPostUpdateManyAndReturnArgs>(args: SelectSubset<T, CmpPostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CmpPostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CmpPost.
     * @param {CmpPostUpsertArgs} args - Arguments to update or create a CmpPost.
     * @example
     * // Update or create a CmpPost
     * const cmpPost = await prisma.cmpPost.upsert({
     *   create: {
     *     // ... data to create a CmpPost
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CmpPost we want to update
     *   }
     * })
     */
    upsert<T extends CmpPostUpsertArgs>(args: SelectSubset<T, CmpPostUpsertArgs<ExtArgs>>): Prisma__CmpPostClient<$Result.GetResult<Prisma.$CmpPostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CmpPosts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmpPostCountArgs} args - Arguments to filter CmpPosts to count.
     * @example
     * // Count the number of CmpPosts
     * const count = await prisma.cmpPost.count({
     *   where: {
     *     // ... the filter for the CmpPosts we want to count
     *   }
     * })
    **/
    count<T extends CmpPostCountArgs>(
      args?: Subset<T, CmpPostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CmpPostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CmpPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmpPostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CmpPostAggregateArgs>(args: Subset<T, CmpPostAggregateArgs>): Prisma.PrismaPromise<GetCmpPostAggregateType<T>>

    /**
     * Group by CmpPost.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CmpPostGroupByArgs} args - Group by arguments.
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
      T extends CmpPostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CmpPostGroupByArgs['orderBy'] }
        : { orderBy?: CmpPostGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CmpPostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCmpPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CmpPost model
   */
  readonly fields: CmpPostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CmpPost.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CmpPostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends CmpUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CmpUserDefaultArgs<ExtArgs>>): Prisma__CmpUserClient<$Result.GetResult<Prisma.$CmpUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CmpPost model
   */
  interface CmpPostFieldRefs {
    readonly id: FieldRef<"CmpPost", 'BigInt'>
    readonly title: FieldRef<"CmpPost", 'String'>
    readonly authorId: FieldRef<"CmpPost", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * CmpPost findUnique
   */
  export type CmpPostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmpPost
     */
    select?: CmpPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmpPost
     */
    omit?: CmpPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmpPostInclude<ExtArgs> | null
    /**
     * Filter, which CmpPost to fetch.
     */
    where: CmpPostWhereUniqueInput
  }

  /**
   * CmpPost findUniqueOrThrow
   */
  export type CmpPostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmpPost
     */
    select?: CmpPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmpPost
     */
    omit?: CmpPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmpPostInclude<ExtArgs> | null
    /**
     * Filter, which CmpPost to fetch.
     */
    where: CmpPostWhereUniqueInput
  }

  /**
   * CmpPost findFirst
   */
  export type CmpPostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmpPost
     */
    select?: CmpPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmpPost
     */
    omit?: CmpPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmpPostInclude<ExtArgs> | null
    /**
     * Filter, which CmpPost to fetch.
     */
    where?: CmpPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmpPosts to fetch.
     */
    orderBy?: CmpPostOrderByWithRelationInput | CmpPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CmpPosts.
     */
    cursor?: CmpPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmpPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmpPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CmpPosts.
     */
    distinct?: CmpPostScalarFieldEnum | CmpPostScalarFieldEnum[]
  }

  /**
   * CmpPost findFirstOrThrow
   */
  export type CmpPostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmpPost
     */
    select?: CmpPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmpPost
     */
    omit?: CmpPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmpPostInclude<ExtArgs> | null
    /**
     * Filter, which CmpPost to fetch.
     */
    where?: CmpPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmpPosts to fetch.
     */
    orderBy?: CmpPostOrderByWithRelationInput | CmpPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CmpPosts.
     */
    cursor?: CmpPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmpPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmpPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CmpPosts.
     */
    distinct?: CmpPostScalarFieldEnum | CmpPostScalarFieldEnum[]
  }

  /**
   * CmpPost findMany
   */
  export type CmpPostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmpPost
     */
    select?: CmpPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmpPost
     */
    omit?: CmpPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmpPostInclude<ExtArgs> | null
    /**
     * Filter, which CmpPosts to fetch.
     */
    where?: CmpPostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CmpPosts to fetch.
     */
    orderBy?: CmpPostOrderByWithRelationInput | CmpPostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CmpPosts.
     */
    cursor?: CmpPostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CmpPosts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CmpPosts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CmpPosts.
     */
    distinct?: CmpPostScalarFieldEnum | CmpPostScalarFieldEnum[]
  }

  /**
   * CmpPost create
   */
  export type CmpPostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmpPost
     */
    select?: CmpPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmpPost
     */
    omit?: CmpPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmpPostInclude<ExtArgs> | null
    /**
     * The data needed to create a CmpPost.
     */
    data: XOR<CmpPostCreateInput, CmpPostUncheckedCreateInput>
  }

  /**
   * CmpPost createMany
   */
  export type CmpPostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CmpPosts.
     */
    data: CmpPostCreateManyInput | CmpPostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CmpPost createManyAndReturn
   */
  export type CmpPostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmpPost
     */
    select?: CmpPostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CmpPost
     */
    omit?: CmpPostOmit<ExtArgs> | null
    /**
     * The data used to create many CmpPosts.
     */
    data: CmpPostCreateManyInput | CmpPostCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmpPostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CmpPost update
   */
  export type CmpPostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmpPost
     */
    select?: CmpPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmpPost
     */
    omit?: CmpPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmpPostInclude<ExtArgs> | null
    /**
     * The data needed to update a CmpPost.
     */
    data: XOR<CmpPostUpdateInput, CmpPostUncheckedUpdateInput>
    /**
     * Choose, which CmpPost to update.
     */
    where: CmpPostWhereUniqueInput
  }

  /**
   * CmpPost updateMany
   */
  export type CmpPostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CmpPosts.
     */
    data: XOR<CmpPostUpdateManyMutationInput, CmpPostUncheckedUpdateManyInput>
    /**
     * Filter which CmpPosts to update
     */
    where?: CmpPostWhereInput
    /**
     * Limit how many CmpPosts to update.
     */
    limit?: number
  }

  /**
   * CmpPost updateManyAndReturn
   */
  export type CmpPostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmpPost
     */
    select?: CmpPostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CmpPost
     */
    omit?: CmpPostOmit<ExtArgs> | null
    /**
     * The data used to update CmpPosts.
     */
    data: XOR<CmpPostUpdateManyMutationInput, CmpPostUncheckedUpdateManyInput>
    /**
     * Filter which CmpPosts to update
     */
    where?: CmpPostWhereInput
    /**
     * Limit how many CmpPosts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmpPostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CmpPost upsert
   */
  export type CmpPostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmpPost
     */
    select?: CmpPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmpPost
     */
    omit?: CmpPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmpPostInclude<ExtArgs> | null
    /**
     * The filter to search for the CmpPost to update in case it exists.
     */
    where: CmpPostWhereUniqueInput
    /**
     * In case the CmpPost found by the `where` argument doesn't exist, create a new CmpPost with this data.
     */
    create: XOR<CmpPostCreateInput, CmpPostUncheckedCreateInput>
    /**
     * In case the CmpPost was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CmpPostUpdateInput, CmpPostUncheckedUpdateInput>
  }

  /**
   * CmpPost delete
   */
  export type CmpPostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmpPost
     */
    select?: CmpPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmpPost
     */
    omit?: CmpPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmpPostInclude<ExtArgs> | null
    /**
     * Filter which CmpPost to delete.
     */
    where: CmpPostWhereUniqueInput
  }

  /**
   * CmpPost deleteMany
   */
  export type CmpPostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CmpPosts to delete
     */
    where?: CmpPostWhereInput
    /**
     * Limit how many CmpPosts to delete.
     */
    limit?: number
  }

  /**
   * CmpPost without action
   */
  export type CmpPostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CmpPost
     */
    select?: CmpPostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CmpPost
     */
    omit?: CmpPostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CmpPostInclude<ExtArgs> | null
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


  export const CmpUserScalarFieldEnum: {
    id: 'id',
    email: 'email'
  };

  export type CmpUserScalarFieldEnum = (typeof CmpUserScalarFieldEnum)[keyof typeof CmpUserScalarFieldEnum]


  export const CmpPostScalarFieldEnum: {
    id: 'id',
    title: 'title',
    authorId: 'authorId'
  };

  export type CmpPostScalarFieldEnum = (typeof CmpPostScalarFieldEnum)[keyof typeof CmpPostScalarFieldEnum]


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


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type CmpUserWhereInput = {
    AND?: CmpUserWhereInput | CmpUserWhereInput[]
    OR?: CmpUserWhereInput[]
    NOT?: CmpUserWhereInput | CmpUserWhereInput[]
    id?: BigIntFilter<"CmpUser"> | bigint | number
    email?: StringFilter<"CmpUser"> | string
    posts?: CmpPostListRelationFilter
  }

  export type CmpUserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    posts?: CmpPostOrderByRelationAggregateInput
  }

  export type CmpUserWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    email?: string
    AND?: CmpUserWhereInput | CmpUserWhereInput[]
    OR?: CmpUserWhereInput[]
    NOT?: CmpUserWhereInput | CmpUserWhereInput[]
    posts?: CmpPostListRelationFilter
  }, "id" | "email">

  export type CmpUserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    _count?: CmpUserCountOrderByAggregateInput
    _avg?: CmpUserAvgOrderByAggregateInput
    _max?: CmpUserMaxOrderByAggregateInput
    _min?: CmpUserMinOrderByAggregateInput
    _sum?: CmpUserSumOrderByAggregateInput
  }

  export type CmpUserScalarWhereWithAggregatesInput = {
    AND?: CmpUserScalarWhereWithAggregatesInput | CmpUserScalarWhereWithAggregatesInput[]
    OR?: CmpUserScalarWhereWithAggregatesInput[]
    NOT?: CmpUserScalarWhereWithAggregatesInput | CmpUserScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"CmpUser"> | bigint | number
    email?: StringWithAggregatesFilter<"CmpUser"> | string
  }

  export type CmpPostWhereInput = {
    AND?: CmpPostWhereInput | CmpPostWhereInput[]
    OR?: CmpPostWhereInput[]
    NOT?: CmpPostWhereInput | CmpPostWhereInput[]
    id?: BigIntFilter<"CmpPost"> | bigint | number
    title?: StringFilter<"CmpPost"> | string
    authorId?: BigIntFilter<"CmpPost"> | bigint | number
    author?: XOR<CmpUserScalarRelationFilter, CmpUserWhereInput>
  }

  export type CmpPostOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    authorId?: SortOrder
    author?: CmpUserOrderByWithRelationInput
  }

  export type CmpPostWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: CmpPostWhereInput | CmpPostWhereInput[]
    OR?: CmpPostWhereInput[]
    NOT?: CmpPostWhereInput | CmpPostWhereInput[]
    title?: StringFilter<"CmpPost"> | string
    authorId?: BigIntFilter<"CmpPost"> | bigint | number
    author?: XOR<CmpUserScalarRelationFilter, CmpUserWhereInput>
  }, "id">

  export type CmpPostOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    authorId?: SortOrder
    _count?: CmpPostCountOrderByAggregateInput
    _avg?: CmpPostAvgOrderByAggregateInput
    _max?: CmpPostMaxOrderByAggregateInput
    _min?: CmpPostMinOrderByAggregateInput
    _sum?: CmpPostSumOrderByAggregateInput
  }

  export type CmpPostScalarWhereWithAggregatesInput = {
    AND?: CmpPostScalarWhereWithAggregatesInput | CmpPostScalarWhereWithAggregatesInput[]
    OR?: CmpPostScalarWhereWithAggregatesInput[]
    NOT?: CmpPostScalarWhereWithAggregatesInput | CmpPostScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"CmpPost"> | bigint | number
    title?: StringWithAggregatesFilter<"CmpPost"> | string
    authorId?: BigIntWithAggregatesFilter<"CmpPost"> | bigint | number
  }

  export type CmpUserCreateInput = {
    id?: bigint | number
    email: string
    posts?: CmpPostCreateNestedManyWithoutAuthorInput
  }

  export type CmpUserUncheckedCreateInput = {
    id?: bigint | number
    email: string
    posts?: CmpPostUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type CmpUserUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    posts?: CmpPostUpdateManyWithoutAuthorNestedInput
  }

  export type CmpUserUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    posts?: CmpPostUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type CmpUserCreateManyInput = {
    id?: bigint | number
    email: string
  }

  export type CmpUserUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
  }

  export type CmpUserUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
  }

  export type CmpPostCreateInput = {
    id?: bigint | number
    title: string
    author: CmpUserCreateNestedOneWithoutPostsInput
  }

  export type CmpPostUncheckedCreateInput = {
    id?: bigint | number
    title: string
    authorId: bigint | number
  }

  export type CmpPostUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    author?: CmpUserUpdateOneRequiredWithoutPostsNestedInput
  }

  export type CmpPostUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    authorId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type CmpPostCreateManyInput = {
    id?: bigint | number
    title: string
    authorId: bigint | number
  }

  export type CmpPostUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
  }

  export type CmpPostUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    authorId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
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

  export type CmpPostListRelationFilter = {
    every?: CmpPostWhereInput
    some?: CmpPostWhereInput
    none?: CmpPostWhereInput
  }

  export type CmpPostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CmpUserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
  }

  export type CmpUserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CmpUserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
  }

  export type CmpUserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
  }

  export type CmpUserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
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

  export type CmpUserScalarRelationFilter = {
    is?: CmpUserWhereInput
    isNot?: CmpUserWhereInput
  }

  export type CmpPostCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    authorId?: SortOrder
  }

  export type CmpPostAvgOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
  }

  export type CmpPostMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    authorId?: SortOrder
  }

  export type CmpPostMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    authorId?: SortOrder
  }

  export type CmpPostSumOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
  }

  export type CmpPostCreateNestedManyWithoutAuthorInput = {
    create?: XOR<CmpPostCreateWithoutAuthorInput, CmpPostUncheckedCreateWithoutAuthorInput> | CmpPostCreateWithoutAuthorInput[] | CmpPostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: CmpPostCreateOrConnectWithoutAuthorInput | CmpPostCreateOrConnectWithoutAuthorInput[]
    createMany?: CmpPostCreateManyAuthorInputEnvelope
    connect?: CmpPostWhereUniqueInput | CmpPostWhereUniqueInput[]
  }

  export type CmpPostUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<CmpPostCreateWithoutAuthorInput, CmpPostUncheckedCreateWithoutAuthorInput> | CmpPostCreateWithoutAuthorInput[] | CmpPostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: CmpPostCreateOrConnectWithoutAuthorInput | CmpPostCreateOrConnectWithoutAuthorInput[]
    createMany?: CmpPostCreateManyAuthorInputEnvelope
    connect?: CmpPostWhereUniqueInput | CmpPostWhereUniqueInput[]
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type CmpPostUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<CmpPostCreateWithoutAuthorInput, CmpPostUncheckedCreateWithoutAuthorInput> | CmpPostCreateWithoutAuthorInput[] | CmpPostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: CmpPostCreateOrConnectWithoutAuthorInput | CmpPostCreateOrConnectWithoutAuthorInput[]
    upsert?: CmpPostUpsertWithWhereUniqueWithoutAuthorInput | CmpPostUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: CmpPostCreateManyAuthorInputEnvelope
    set?: CmpPostWhereUniqueInput | CmpPostWhereUniqueInput[]
    disconnect?: CmpPostWhereUniqueInput | CmpPostWhereUniqueInput[]
    delete?: CmpPostWhereUniqueInput | CmpPostWhereUniqueInput[]
    connect?: CmpPostWhereUniqueInput | CmpPostWhereUniqueInput[]
    update?: CmpPostUpdateWithWhereUniqueWithoutAuthorInput | CmpPostUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: CmpPostUpdateManyWithWhereWithoutAuthorInput | CmpPostUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: CmpPostScalarWhereInput | CmpPostScalarWhereInput[]
  }

  export type CmpPostUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<CmpPostCreateWithoutAuthorInput, CmpPostUncheckedCreateWithoutAuthorInput> | CmpPostCreateWithoutAuthorInput[] | CmpPostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: CmpPostCreateOrConnectWithoutAuthorInput | CmpPostCreateOrConnectWithoutAuthorInput[]
    upsert?: CmpPostUpsertWithWhereUniqueWithoutAuthorInput | CmpPostUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: CmpPostCreateManyAuthorInputEnvelope
    set?: CmpPostWhereUniqueInput | CmpPostWhereUniqueInput[]
    disconnect?: CmpPostWhereUniqueInput | CmpPostWhereUniqueInput[]
    delete?: CmpPostWhereUniqueInput | CmpPostWhereUniqueInput[]
    connect?: CmpPostWhereUniqueInput | CmpPostWhereUniqueInput[]
    update?: CmpPostUpdateWithWhereUniqueWithoutAuthorInput | CmpPostUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: CmpPostUpdateManyWithWhereWithoutAuthorInput | CmpPostUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: CmpPostScalarWhereInput | CmpPostScalarWhereInput[]
  }

  export type CmpUserCreateNestedOneWithoutPostsInput = {
    create?: XOR<CmpUserCreateWithoutPostsInput, CmpUserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: CmpUserCreateOrConnectWithoutPostsInput
    connect?: CmpUserWhereUniqueInput
  }

  export type CmpUserUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<CmpUserCreateWithoutPostsInput, CmpUserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: CmpUserCreateOrConnectWithoutPostsInput
    upsert?: CmpUserUpsertWithoutPostsInput
    connect?: CmpUserWhereUniqueInput
    update?: XOR<XOR<CmpUserUpdateToOneWithWhereWithoutPostsInput, CmpUserUpdateWithoutPostsInput>, CmpUserUncheckedUpdateWithoutPostsInput>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
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

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
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

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type CmpPostCreateWithoutAuthorInput = {
    id?: bigint | number
    title: string
  }

  export type CmpPostUncheckedCreateWithoutAuthorInput = {
    id?: bigint | number
    title: string
  }

  export type CmpPostCreateOrConnectWithoutAuthorInput = {
    where: CmpPostWhereUniqueInput
    create: XOR<CmpPostCreateWithoutAuthorInput, CmpPostUncheckedCreateWithoutAuthorInput>
  }

  export type CmpPostCreateManyAuthorInputEnvelope = {
    data: CmpPostCreateManyAuthorInput | CmpPostCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type CmpPostUpsertWithWhereUniqueWithoutAuthorInput = {
    where: CmpPostWhereUniqueInput
    update: XOR<CmpPostUpdateWithoutAuthorInput, CmpPostUncheckedUpdateWithoutAuthorInput>
    create: XOR<CmpPostCreateWithoutAuthorInput, CmpPostUncheckedCreateWithoutAuthorInput>
  }

  export type CmpPostUpdateWithWhereUniqueWithoutAuthorInput = {
    where: CmpPostWhereUniqueInput
    data: XOR<CmpPostUpdateWithoutAuthorInput, CmpPostUncheckedUpdateWithoutAuthorInput>
  }

  export type CmpPostUpdateManyWithWhereWithoutAuthorInput = {
    where: CmpPostScalarWhereInput
    data: XOR<CmpPostUpdateManyMutationInput, CmpPostUncheckedUpdateManyWithoutAuthorInput>
  }

  export type CmpPostScalarWhereInput = {
    AND?: CmpPostScalarWhereInput | CmpPostScalarWhereInput[]
    OR?: CmpPostScalarWhereInput[]
    NOT?: CmpPostScalarWhereInput | CmpPostScalarWhereInput[]
    id?: BigIntFilter<"CmpPost"> | bigint | number
    title?: StringFilter<"CmpPost"> | string
    authorId?: BigIntFilter<"CmpPost"> | bigint | number
  }

  export type CmpUserCreateWithoutPostsInput = {
    id?: bigint | number
    email: string
  }

  export type CmpUserUncheckedCreateWithoutPostsInput = {
    id?: bigint | number
    email: string
  }

  export type CmpUserCreateOrConnectWithoutPostsInput = {
    where: CmpUserWhereUniqueInput
    create: XOR<CmpUserCreateWithoutPostsInput, CmpUserUncheckedCreateWithoutPostsInput>
  }

  export type CmpUserUpsertWithoutPostsInput = {
    update: XOR<CmpUserUpdateWithoutPostsInput, CmpUserUncheckedUpdateWithoutPostsInput>
    create: XOR<CmpUserCreateWithoutPostsInput, CmpUserUncheckedCreateWithoutPostsInput>
    where?: CmpUserWhereInput
  }

  export type CmpUserUpdateToOneWithWhereWithoutPostsInput = {
    where?: CmpUserWhereInput
    data: XOR<CmpUserUpdateWithoutPostsInput, CmpUserUncheckedUpdateWithoutPostsInput>
  }

  export type CmpUserUpdateWithoutPostsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
  }

  export type CmpUserUncheckedUpdateWithoutPostsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
  }

  export type CmpPostCreateManyAuthorInput = {
    id?: bigint | number
    title: string
  }

  export type CmpPostUpdateWithoutAuthorInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
  }

  export type CmpPostUncheckedUpdateWithoutAuthorInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
  }

  export type CmpPostUncheckedUpdateManyWithoutAuthorInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
  }



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