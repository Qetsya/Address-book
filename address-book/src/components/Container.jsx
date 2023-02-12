const containerStyle = {
  maxWidth: "960px",
  marginLeft: "auto",
  marginRight: "auto",
};

const Container = ({ children }) => {
  return <div style={containerStyle}>{children}</div>;
};

export default Container;
