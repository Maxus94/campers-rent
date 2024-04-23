import css from "./BookCamper.module.css";

const BookCamper = () => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(evt.target.email.value);
  };
  return (
    <div className={css.bookCamperForm}>
      <h2>Book your campervan now</h2>
      <p>Stay connected! We are always ready to help you.</p>
      <form action="submit" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
        <label htmlFor="date">Booking date</label>
        <input type="date" name="date" id="date" />
        <label htmlFor="comment">Booking date</label>
        <textarea name="comment" id="comment" cols="30" rows="3"></textarea>
        <button type="submit"></button>
      </form>
    </div>
  );
};

export default BookCamper;
