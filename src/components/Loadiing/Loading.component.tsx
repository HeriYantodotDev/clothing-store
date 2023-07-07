export function LoadingWithinButton() {
  // You can change the color size by changing the class 
  return (
    <div>
      <div className="spinner-border spinner-border-sm text-info" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}