// Vintage Warehouse Glasgow — window.VWG. Plain DOM builders, no framework; each returns an element.
// SiteHeader, Hero, OpeningHours, SiteFooter and Invoice are markup patterns (see their README and preview), not builders.

export interface ButtonProps {
  /** The verb. "Shop online", "Add to basket". */
  label: string;
  /** primary = ink fill (default). brick = the accent fill. outline and link sit on the surfaces; inverse and ghost sit on band. */
  variant?: 'primary' | 'brick' | 'outline' | 'link' | 'inverse' | 'ghost';
  /** sm is 36px tall, for inside cards. */
  size?: 'md' | 'sm';
  /** Renders an <a> instead of a <button>. */
  href?: string;
  type?: 'button' | 'submit';
  block?: boolean;
  disabled?: boolean;
  className?: string;
  onClick?: (e: MouseEvent) => void;
}
export declare function Button(props: ButtonProps): HTMLButtonElement | HTMLAnchorElement;

export interface BadgeProps {
  /** One or two words: "Vintage", "New", "In stock", "Sold out", "Mixed sizes". */
  label: string;
  /** vintage = brick on brick-soft; new = blue on blue-soft; stock = stock on stock-soft; sold = muted; danger = danger on danger-soft. */
  tone?: 'neutral' | 'vintage' | 'new' | 'stock' | 'sold' | 'danger';
  className?: string;
}
export declare function Badge(props: BadgeProps): HTMLSpanElement;

export interface ProductCardProps {
  /** Sentence case: "Mixed vintage bag". */
  name: string;
  href?: string;
  /** 4:5 photo of the whole bag. */
  image: string;
  alt?: string;
  /** Sets the badge: Vintage or New. */
  kind: 'vintage' | 'new';
  /** "Approx. 20 kg · 60–80 pieces · mixed sizes" */
  meta?: string;
  pricePence: number;
  /** Defaults to "UK delivery only"; keep it. */
  priceNote?: string;
  /** Dims the photo, swaps the badge and disables the button. */
  soldOut?: boolean;
  onAdd?: (e: MouseEvent) => void;
}
export declare function ProductCard(props: ProductCardProps): HTMLElement;

export interface SectionHeadingProps {
  /** The script lead-in, one to three lowercase words: "find us". */
  lead?: string;
  /** Set uppercase by the style. */
  title: string;
  id?: string;
  intro?: string;
}
export declare function SectionHeading(props: SectionHeadingProps): HTMLDivElement;

export interface FieldProps {
  id: string;
  label: string;
  name?: string;
  type?: 'text' | 'email' | 'tel' | 'password' | 'number';
  placeholder?: string;
  value?: string;
  autocomplete?: string;
  required?: boolean;
  multiline?: boolean;
  hint?: string;
  /** Replaces the hint, turns the border danger and sets aria-invalid. */
  error?: string;
}
export declare function Field(props: FieldProps): HTMLDivElement;

/** "£60.00" from pence. */
export declare function formatPrice(pence: number): string;
/** "0001" — four digits, sequential, never reused. */
export declare function invoiceNumber(n: number): string;

declare global {
  interface Window {
    VWG: {
      Button: typeof Button; Badge: typeof Badge; ProductCard: typeof ProductCard;
      SectionHeading: typeof SectionHeading; Field: typeof Field;
      formatPrice: typeof formatPrice; invoiceNumber: typeof invoiceNumber;
    };
  }
}
