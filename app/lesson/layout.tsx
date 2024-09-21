type LayoutProps = {
  children: React.ReactNode;
};

const LessonLayout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-col h-full w-full">{children}</div>
    </div>
  );
};

export default LessonLayout;
