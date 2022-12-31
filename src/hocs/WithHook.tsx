import { ReactNode, cloneElement, isValidElement } from "react";

type Hook = (...args: any) => any;

type WithHookProps = {
  children: ReactNode[] | ReactNode;
  hook: Hook;
};

export default function WithHook({ hook, children }: WithHookProps) {
  if (children?.constructor.name === "Array") {
    const newChildren = (children as ReactNode[]).map((child: ReactNode) => {
      if (isValidElement(child)) return cloneElement(child, { ...hook() });
      return child;
    });

    return <>{newChildren}</>;
  } else {
    const newChildren = isValidElement(children)
      ? cloneElement(children, { ...hook() })
      : children;

    return <>{newChildren}</>;
  }
}
