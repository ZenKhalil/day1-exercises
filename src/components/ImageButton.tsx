interface ImageButtonProps {
  image: string;
  onClick: () => void;
}

export default function ImageButton({ image, onClick }: ImageButtonProps) {
  return (
    <button onClick={onClick}>
      <img src={image} alt="Button" width="100rem" height="100rem" />
    </button>
  );
}
