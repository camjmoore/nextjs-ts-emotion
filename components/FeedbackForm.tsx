function FeedbackForm() {
  return (
    <form name="feedback" method="post" data-netlify="true">
      <input type="hidden" name="fom-name" value="feedback"/>
      <p>
        <label>
          Your Name:
          <br />
          <input type="text" name="name" />
        </label>
      </p>
      <p>
        <label>
          Feedback:
          <br />
          <textarea name="message" />
        </label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  )
}

export { FeedbackForm };