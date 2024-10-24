import { PropsWithChildren } from "@kitajs/html";

export function Layout(props: PropsWithChildren<{ title?: string }>) {
  return (
    <>
      {'<!doctype html>'}
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title safe>{props.title || 'Hello World!'}</title>
          <link rel="stylesheet" href="/style.css" />
          <script src="/htmx.min.js"></script>
        </head>
        <body>{props.children}</body>
      </html>
    </>
  );
}