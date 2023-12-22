const [contactInfo, setContactInfo] = useState("");
const updateContactField = (e) => setContactInfo(e.target.value);

return (
  <div>
    <h1>Place an Order</h1>
    <p>
      Your selection: {size} {pepperoniIsChecked ? "pepperoni" : "cheese"}
    </p>
    <form>
      {/*... rest of form*/}
      <button type="submit">Submit Order</button>
      </form>
        <h3>Contact Info</h3>
        <label htmlFor="email">Enter your email address: </label>
        <input
          type="text"
          value={contactInfo}
          id="email"
          placeholder="email address"
          onChange={updateContactField}
        />
      </div>
    </form>
  </div>
);