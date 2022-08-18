declare module '*.svg' {
  const value: React.DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  >;
  export default value;
}
