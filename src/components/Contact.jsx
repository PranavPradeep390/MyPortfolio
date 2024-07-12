// import "./styles.css";

export default function App() {
  function Submit(e) {
    const formEle = document.querySelector("form");
    const formData = new FormData(formEle);
    fetch(
      "https://script.google.com/macros/library/d/13Rje5G72or6rXwX3KVuHrYITLuuLd7mFAQhHAqFHwyW7-jZXTpsWJnUY/1",
      {
        method: "POST",
        body: formData
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div className="App">
      <h1>Contact Me form</h1>
     
      <div>
        <form className="form" onSubmit={(e) => Submit(e)}>
          <input placeholder="Your Name" name="Name" type="text" />
          <input placeholder="Your Email" name="Email" type="text" />
          <input placeholder="Your Message" name="Message" type="text" />
          <input name="Name" type="submit" />
        </form>
      </div>
    </div>
  );
}