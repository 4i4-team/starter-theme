export default function Label({
  id,
  required,
  children,
}: {
  id: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={id}>
      {children}
      {required && <sup>*</sup>}
    </label>
  );
}
