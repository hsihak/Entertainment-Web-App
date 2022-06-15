function Image(props) {
  const { className, src, alt } = props;
  return (
    <div>
      <img className={className} src={src} alt={alt} />
    </div>
  );
}

export default Image;
