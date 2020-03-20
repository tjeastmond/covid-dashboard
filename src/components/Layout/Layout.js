import Header from '../Header/Header';

const layoutStyle = {
  border: '1px solid #ddd',
  margin: 20,
  padding: 20
};

const Layout = props => {
  return (
    <div style={layoutStyle}>
      <Header />
      {props.children}
    </div>
  );
};

export default Layout;
