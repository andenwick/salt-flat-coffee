"use client";

export default function NewsletterForm({ className, inputClassName }) {
  return (
    <form
      className={className}
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="email"
        placeholder="your@email.com"
        className={inputClassName}
      />
      <button type="submit" className="btn btn--primary">
        Subscribe
      </button>
    </form>
  );
}
