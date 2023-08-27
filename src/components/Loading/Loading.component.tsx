type LoadingWithButtonProps = {
  // eslint-disable-next-line react/require-default-props
  textColor?: string;
};

const defaultTextColor: LoadingWithButtonProps = {
  textColor: 'text-info',
};

export default function LoadingWithinButton({
  textColor,
}: LoadingWithButtonProps = defaultTextColor) {
  // You can change the color size by changing the class
  return (
    <div data-testid="loadingButton">
      <div
        className={`spinner-border spinner-border-sm ${textColor}`}
        role="status"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}
