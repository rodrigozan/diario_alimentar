import { IconPlus } from "@/components/icons";

export function FloatingActionButton({
  onClick,
  label = "Adicionar refeição",
}: {
  onClick: () => void;
  label?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="fixed right-5 bottom-[calc(4.5rem+env(safe-area-inset-bottom))] z-30 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-fab transition-transform active:scale-95 sm:bottom-8 md:right-10"
    >
      <IconPlus className="h-6 w-6" />
    </button>
  );
}
