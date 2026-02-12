"use client";

export default function ContactForm({ className, groupClassName, labelClassName, inputClassName, textareaClassName }) {
  return (
    <form className={className} onSubmit={(e) => e.preventDefault()}>
      <div className={groupClassName}>
        <label htmlFor="name" className={labelClassName}>Name</label>
        <input type="text" id="name" className={inputClassName} placeholder="Your name" />
      </div>
      <div className={groupClassName}>
        <label htmlFor="email" className={labelClassName}>Email</label>
        <input type="email" id="email" className={inputClassName} placeholder="your@email.com" />
      </div>
      <div className={groupClassName}>
        <label htmlFor="message" className={labelClassName}>Message</label>
        <textarea id="message" className={textareaClassName} rows={6} placeholder="What's on your mind?" />
      </div>
      <button type="submit" className="btn btn--primary">Send Message</button>
    </form>
  );
}
