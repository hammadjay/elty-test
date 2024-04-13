

const PrimaryButton =  ({
  children,
  ...props
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <button
        className="primary-button"
      {...props}
    >
      {children}
    </button>
  );
}

export default PrimaryButton;