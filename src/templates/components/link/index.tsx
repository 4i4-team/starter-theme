import Link from "next/link";

export default function LinkComponent({
  href,
  title,
  children,
  ...props
}: {
  href: string;
  title?: string;
  children?: React.ReactNode;
}) {
  return (
    <Link href={href} {...props}>
      {children ?? title ?? href}
    </Link>
  );
}
