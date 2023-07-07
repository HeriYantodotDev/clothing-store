type LoadingWithButtonProps = {
  textColor?: string;
}

const defaultTextColor: LoadingWithButtonProps = {
  textColor: 'text-info',
};

export function LoadingWithinButton({
  textColor,
}: LoadingWithButtonProps = defaultTextColor) {
  // You can change the color size by changing the class 
  return (
    <div>
      <div className={`spinner-border spinner-border-sm ${textColor}`} role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}