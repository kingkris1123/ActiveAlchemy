class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
      logErrorToMyService(error, errorInfo);
    }
  
    render() {
      if (this.state.hasError) {
        return <p>Something went wrong!</p>;
      }
  
      return this.props.children;
    }
  }
  
  export default ErrorBoundary;
  