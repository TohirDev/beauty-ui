export type CompoundedComponent<
    P extends object,
    R extends object,
    T extends object,
> = React.ForwardRefExoticComponent<P & React.RefAttributes<R>> & T;
