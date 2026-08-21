import { IconCoffee, IconSun, IconMoon, IconCookie, IconPencil, IconTrash } from "@/components/icons";
import { MEAL_TYPE_LABEL, type MealLike } from "@/lib/nutrition";
import { cn } from "@/lib/cn";

const TYPE_ICON = {
  breakfast: IconCoffee,
  lunch: IconSun,
  dinner: IconMoon,
  snack: IconCookie,
} as const;

const TYPE_TINT = {
  breakfast: "bg-macro-carb/15 text-macro-carb",
  lunch: "bg-primary/15 text-primary",
  dinner: "bg-macro-fat/15 text-macro-fat",
  snack: "bg-macro-protein/15 text-macro-protein",
} as const;

export function MealCard({
  meal,
  onEdit,
  onDelete,
}: {
  meal: MealLike;
  onEdit?: () => void;
  onDelete?: () => void;
}) {
  const Icon = TYPE_ICON[meal.type];

  return (
    <div className="group flex items-center gap-3 rounded-card border border-border bg-surface p-3 transition-colors hover:border-text-secondary/30">
      <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-[14px] bg-background">
        {meal.photoUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={meal.photoUrl} alt="" className="h-full w-full object-cover" />
        ) : (
          <div className={cn("flex h-full w-full items-center justify-center", TYPE_TINT[meal.type])}>
            <Icon className="h-6 w-6" />
          </div>
        )}
        {/* signature corner notch: the meal-type tab, like a tab on a recipe card */}
        <span
          className={cn(
            "absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-surface",
            TYPE_TINT[meal.type]
          )}
        >
          <Icon className="h-2.5 w-2.5" />
        </span>
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-2">
          <p className="truncate text-body font-medium text-text-primary">{meal.name}</p>
          <p className="nums shrink-0 text-body font-semibold text-text-primary">
            {Math.round(meal.calories)}
            <span className="ml-0.5 text-caption font-normal text-text-secondary">kcal</span>
          </p>
        </div>
        <div className="mt-1 flex items-center gap-2.5 text-caption text-text-secondary">
          <span>{MEAL_TYPE_LABEL[meal.type]}</span>
          <span className="nums text-macro-carb">{Math.round(meal.carbG)}g C</span>
          <span className="nums text-macro-protein">{Math.round(meal.proteinG)}g P</span>
          <span className="nums text-macro-fat">{Math.round(meal.fatG)}g G</span>
        </div>
      </div>

      {(onEdit || onDelete) && (
        <div className="flex shrink-0 items-center gap-1 opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100 sm:opacity-100">
          {onEdit && (
            <button
              type="button"
              onClick={onEdit}
              aria-label="Editar refeição"
              className="flex h-8 w-8 items-center justify-center rounded-button text-text-secondary hover:bg-background hover:text-text-primary"
            >
              <IconPencil className="h-4 w-4" />
            </button>
          )}
          {onDelete && (
            <button
              type="button"
              onClick={onDelete}
              aria-label="Excluir refeição"
              className="flex h-8 w-8 items-center justify-center rounded-button text-text-secondary hover:bg-error/10 hover:text-error"
            >
              <IconTrash className="h-4 w-4" />
            </button>
          )}
        </div>
      )}
    </div>
  );
}
