// Vintage Warehouse Glasgow — window.VWG. Plain DOM builders, no framework; each returns an element.
// SiteHeader, Hero, Strip, OpeningHours, SiteFooter, Invoice, Prose, Pagination, Basket, Result, Map and ProductPage are markup
// patterns (see their README and preview), not builders. menu, qty, gallery, map and notices wire behaviour onto that markup.

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

export interface StampProps {
  /** "Vintage", "New", "Paid", "Sold out". */
  label: string;
  /** vintage = brick (default); new = blue; stock = Paid; sold = Sold out in danger. */
  tone?: 'vintage' | 'new' | 'stock' | 'sold';
  /** lg is the big tilted stamp across a sold-out photo. */
  size?: 'md' | 'lg';
  className?: string;
}
/** A rubber-stamp label for photos and the invoice; Badge is the pill for tables and lists. */
export declare function Stamp(props: StampProps): HTMLSpanElement;

export interface NoticeProps {
  /** One sentence: "Added to your basket." */
  text: string;
  /** stock = done or paid; danger = an error, announced as an alert; info = a fact worth knowing. None for plain news. */
  tone?: 'neutral' | 'stock' | 'danger' | 'info';
  /** A link after the sentence: { href: '/basket', label: 'View basket' }. */
  link?: { href: string; label: string };
  /** Adds the close button, which removes the notice. */
  dismissible?: boolean;
  /** Defaults to alert for danger, status otherwise. */
  role?: 'status' | 'alert';
  className?: string;
}
/** One sentence beside its colour, at the top of the page content. */
export declare function Notice(props: NoticeProps): HTMLDivElement;

export interface ProductCardProps {
  /** Sentence case: "Mixed vintage bag". */
  name: string;
  href?: string;
  /** 4:5 photo of the whole bag. */
  image: string;
  alt?: string;
  /** Sets the stamp on the photo: Vintage or New. */
  kind: 'vintage' | 'new';
  /** "Approx. 20 kg · 60–80 pieces · mixed sizes" */
  meta?: string;
  pricePence: number;
  /** The delivery charge in pence; writes "+ £12.00 UK delivery", "Free UK delivery" for 0, "UK delivery only" when null. */
  deliveryPence?: number | null;
  /** Overrides the delivery line; defaults to "UK delivery only" when deliveryPence is not given. */
  priceNote?: string;
  /** Dims the photo, adds the Sold out stamp across it and disables the button. */
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
/** "+ £12.00 UK delivery", "Free UK delivery" for 0, or "UK delivery only" when the charge is not set. */
export declare function deliveryLine(pence?: number | null): string;
/** "0001" — four digits, sequential, never reused. */
export declare function invoiceNumber(n: number): string;

export interface MenuController { open(): void; close(): void; toggle(): void; isOpen(): boolean; }
/** The phone menu on a .vwg-header (default: the first on the page): toggles data-menu-open on the header and aria-expanded on the
 *  button; Escape closes and returns focus, a click outside closes, widening past 760px closes. Null when the header has no button or nav#menu. */
export declare function menu(header?: HTMLElement | null): MenuController | null;
/** A .vwg-qty stepper: keeps the number between the input's min and max and fires change on the input. */
export declare function qty(el: HTMLElement): void;
/** A .vwg-product gallery: a thumbnail click swaps the main photo and marks the thumbnail aria-current. */
export declare function gallery(el: HTMLElement): void;
/** A .vwg-map box: Load map swaps the placeholder for an iframe built from data-map-src and data-map-title. */
export declare function map(el: HTMLElement): void;
/** Wires every .vwg-notice-close under root (default: the document) to remove its notice. */
export declare function notices(root?: Document | HTMLElement): void;

declare global {
  interface Window {
    VWG: {
      Button: typeof Button; Badge: typeof Badge; Stamp: typeof Stamp; Notice: typeof Notice; ProductCard: typeof ProductCard;
      SectionHeading: typeof SectionHeading; Field: typeof Field;
      formatPrice: typeof formatPrice; deliveryLine: typeof deliveryLine; invoiceNumber: typeof invoiceNumber;
      menu: typeof menu; qty: typeof qty; gallery: typeof gallery; map: typeof map; notices: typeof notices;
    };
  }
}
