import css from "./BookCamper.module.css";

const BookCamper = () => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(evt.target.email.value);
    console.log(evt.target.name.value);
    console.log(typeof evt.target.date.value);
    const date = new Date(evt.target.date.value);
    const curDate = Date.now();
    console.log(date.getTime(), curDate);
    // if (!evt.target.name.value) {
    //   alert("Name must be filled up");
    // }
    // if (!evt.target.email.value) {
    //   alert("Email must be filled up");
    // }
    if (curDate > date.getTime()) {
      alert("Date must be in future");
    } else {
      evt.target.reset();
    }

    // if (
    //   evt.target.name.value &&
    //   evt.target.email.value &&
    //   evt.target.date.value
    // ) {
    //   evt.target.reset();
    // } else {
    //   alert("Name, Email and Date must be filled up!");
    // }
  };
  return (
    <div className={css.bookCamperForm}>
      <h2 className={css.formTitle}>Book your campervan now</h2>
      <p className={css.sloganText}>
        Stay connected! We are always ready to help you.
      </p>
      <form action="submit" onSubmit={handleSubmit}>
        <div>
          <input
            className={css.inputStyles}
            placeholder="Name"
            type="text"
            name="name"
            id="name"
            required
          />
          <input
            className={css.inputStyles}
            placeholder="Email"
            type="email"
            name="email"
            id="email"
            required
          />
          <input
            className={css.inputStyles}
            type="date"
            name="date"
            id="date"
            placeholder="Booking date"
            required
          />
          <textarea
            className={css.inputStyles + " " + css.inputTextarea}
            name="comment"
            id="comment"
            placeholder="Comment"
          ></textarea>
        </div>
        <button className={css.sendButton} type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default BookCamper;
