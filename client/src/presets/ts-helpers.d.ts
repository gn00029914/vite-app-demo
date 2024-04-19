import {
    AllowedComponentProps,
    ComponentCustomProps,
    ObjectEmitsOptions,
    VNode,
    VNodeProps
} from 'vue'

declare type PublicProps = VNodeProps &
    AllowedComponentProps &
    ComponentCustomProps

declare type UnionToIntersection<U> = (
    U extends unknown ? (k: U) => void : never
) extends (k: infer I) => void
    ? I
    : never

declare type EmitFn<
    Options = ObjectEmitsOptions,
    Event extends keyof Options = keyof Options
> =
    Options extends Array<infer V>
        ? (event: V, ...args: unknown[]) => void
        : object extends Options
          ? (event: string, ...args: unknown[]) => void
          : UnionToIntersection<
                {
                    [key in Event]: Options[key] extends (
                        ...args: infer Args
                    ) => unknown
                        ? (event: key, ...args: Args) => void
                        : (event: key, ...args: unknown[]) => void
                }[Event]
            >

export class ClassComponent<Props, Slots, Emits> {
    $props: Props & PublicProps
    $slots: Slots
    $emit: EmitFn<Emits>
}

export type GlobalComponentConstructor<T> = {
    new (): T
}

/**
 * Custom types
 */
export declare type Booleanish = boolean | 'true' | 'false'

export declare type Numberish = number | string

export declare type Nullable<T = void> = T | null | undefined

export declare type PassThrough<T = void> = T | object | undefined

export declare type DefaultPassThrough<T = void> =
    | T
    | ((instance?: VNode) => T | undefined)
    | undefined

export declare type HintedString<T extends string> = (string & object) | T
