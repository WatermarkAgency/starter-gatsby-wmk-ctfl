import * as React from "react";
import CSS from "csstype";

export enum TYPE {
  H1 = "Heading1",
  H2 = "Heading2",
  H3 = "Heading3",
  H4 = "Heading4",
  H5 = "Heading5",
  H6 = "Heading6",
  P = "Paragraph",
  Quote = "BlockQuote"
}

export const Typography = {
  [TYPE.H1]: React.forwardRef(
    (
      {
        children,
        style
      }: { children: React.ReactChild; style?: CSS.Properties },
      ref: React.ForwardedRef<HTMLHeadingElement>
    ) => (
      <h1 style={style} ref={ref}>
        {children}
      </h1>
    )
  ),
  [TYPE.H2]: React.forwardRef(
    (
      {
        children,
        style
      }: { children: React.ReactChild; style?: CSS.Properties },
      ref: React.ForwardedRef<HTMLHeadingElement>
    ) => (
      <h2 style={style} ref={ref}>
        {children}
      </h2>
    )
  ),
  [TYPE.H3]: React.forwardRef(
    (
      {
        children,
        style
      }: { children: React.ReactChild; style?: CSS.Properties },
      ref: React.ForwardedRef<HTMLHeadingElement>
    ) => (
      <h3 style={style} ref={ref}>
        {children}
      </h3>
    )
  ),
  [TYPE.H4]: React.forwardRef(
    (
      {
        children,
        style
      }: { children: React.ReactChild; style?: CSS.Properties },
      ref: React.ForwardedRef<HTMLHeadingElement>
    ) => (
      <h4 style={style} ref={ref}>
        {children}
      </h4>
    )
  ),
  [TYPE.H5]: React.forwardRef(
    (
      {
        children,
        style
      }: { children: React.ReactChild; style?: CSS.Properties },
      ref: React.ForwardedRef<HTMLHeadingElement>
    ) => (
      <h5 style={style} ref={ref}>
        {children}
      </h5>
    )
  ),
  [TYPE.H6]: React.forwardRef(
    (
      {
        children,
        style
      }: { children: React.ReactChild; style?: CSS.Properties },
      ref: React.ForwardedRef<HTMLHeadingElement>
    ) => (
      <h6 style={style} ref={ref}>
        {children}
      </h6>
    )
  ),
  [TYPE.P]: React.forwardRef(
    (
      {
        children,
        style
      }: { children: React.ReactChild; style?: CSS.Properties },
      ref: React.ForwardedRef<HTMLDivElement>
    ) => (
      <div style={style} ref={ref}>
        {children}
      </div>
    )
  ),
  [TYPE.Quote]: React.forwardRef(
    (
      {
        children,
        style
      }: { children: React.ReactChild; style?: CSS.Properties },
      ref: React.ForwardedRef<HTMLQuoteElement>
    ) => (
      <blockquote style={style} ref={ref}>
        {children}
      </blockquote>
    )
  )
};
