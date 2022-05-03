import * as React from "react";

export const Typography = {
  H1: React.forwardRef(
    (
      {
        children,
        style
      }: { children: React.ReactNode; style?: React.CSSProperties },
      ref: React.ForwardedRef<HTMLHeadingElement>
    ) => (
      <h1 style={style} ref={ref}>
        {children}
      </h1>
    )
  ),
  H2: React.forwardRef(
    (
      {
        children,
        style
      }: { children: React.ReactNode; style?: React.CSSProperties },
      ref: React.ForwardedRef<HTMLHeadingElement>
    ) => (
      <h2 style={style} ref={ref}>
        {children}
      </h2>
    )
  ),
  H3: React.forwardRef(
    (
      {
        children,
        style
      }: { children: React.ReactNode; style?: React.CSSProperties },
      ref: React.ForwardedRef<HTMLHeadingElement>
    ) => (
      <h3 style={style} ref={ref}>
        {children}
      </h3>
    )
  ),
  H4: React.forwardRef(
    (
      {
        children,
        style
      }: { children: React.ReactNode; style?: React.CSSProperties },
      ref: React.ForwardedRef<HTMLHeadingElement>
    ) => (
      <h4 style={style} ref={ref}>
        {children}
      </h4>
    )
  ),
  H5: React.forwardRef(
    (
      {
        children,
        style
      }: { children: React.ReactNode; style?: React.CSSProperties },
      ref: React.ForwardedRef<HTMLHeadingElement>
    ) => (
      <h5 style={style} ref={ref}>
        {children}
      </h5>
    )
  ),
  H6: React.forwardRef(
    (
      {
        children,
        style
      }: { children: React.ReactNode; style?: React.CSSProperties },
      ref: React.ForwardedRef<HTMLHeadingElement>
    ) => (
      <h6 style={style} ref={ref}>
        {children}
      </h6>
    )
  ),
  P: React.forwardRef(
    (
      {
        children,
        style
      }: { children: React.ReactNode; style?: React.CSSProperties },
      ref: React.ForwardedRef<HTMLDivElement>
    ) => (
      <div style={style} ref={ref}>
        {children}
      </div>
    )
  ),
  BLOCKQUOTE: React.forwardRef(
    (
      {
        children,
        style
      }: { children: React.ReactNode; style?: React.CSSProperties },
      ref: React.ForwardedRef<HTMLQuoteElement>
    ) => (
      <blockquote style={style} ref={ref}>
        {children}
      </blockquote>
    )
  )
};
