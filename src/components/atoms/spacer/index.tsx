type SpacerProps = {
  orientation: "vertical" | "horizontal";
  size: string;
};

export default function Spacer({ orientation, size }: SpacerProps) {
  return (
    <div
      style={{
        width: orientation === "vertical" ? "1px" : size,
        height: orientation === "vertical" ? size : "1px",
      }}
    />
  );
}
