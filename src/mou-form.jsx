import { useState } from "react";
import CheckBox from "./Checkboxes";

export default function MouForm() {
  const [partner1, setPartner1] = useState("");
  const [partner2, setPartner2] = useState("");
  const [purpose, setPurpose] = useState("");

  function handleChange1(e) {
    setPartner1(e.target.value);
  }
  function handleChange2(e) {
    setPartner2(e.target.value);
  }
  function handlePurpose(e) {
    setPurpose(e.target.value);
  }

  return (
    <form className="mou-form">
      <h2>Memorandum of Understanding</h2>

      <div className="partner-info">
        <p>Between</p>
        <input
          type="text"
          placeholder="(Partner)"
          value={partner1}
          onChange={handleChange1}
        />
        <p>And</p>
        <input
          type="text"
          placeholder="(Partner)"
          value={partner2}
          onChange={handleChange2}
        />
        {partner1 && partner2 ? (
          <h4>
            This Memorandum of Understanding(MOU) sets for the terms and
            understanding between {partner1} and {partner2}
          </h4>
        ) : null}
      </div>
      <div className="details">
        <h3>Background</h3>
        <textarea
          placeholder="(Enter background information here...)"
          rows={6}
        ></textarea>
        <h3>Purpose</h3>
        <textarea
          placeholder="(Purpose/goals of this partnership...)"
          rows={6}
          value={purpose}
          onChange={handlePurpose}
        ></textarea>
        {purpose ? (
          <>
            <h4>
              The above goals will be achieved by undertaking the following
              activities.
            </h4>
            <CheckBox /> {/*To be changed*/}
          </>
        ) : null}
        <h3>Reporting</h3>
        <textarea
          placeholder="(Record who will evaluate effectiveness and adherence to the agreement and when evaluation will happen...)"
          rows={6}
        ></textarea>
        <h3>Funding</h3>
        <textarea
          placeholder="(Specify that this MOU is not a commitment of funds...)"
          rows={6}
        ></textarea>
        <h3>Duration</h3>
        <p>
          This MOU is at-will and may be modified by mutual consent of
          authorized officials from (list partners).{" "}
          {/* List partners to be changed */}
          This MOU shall become effective upon signature by the authorized
          officials from the (list partners) and will remain in effect until
          modified or terminated by any one of the partners by mutual consent.
          In the absence of mutual agreement by the authorized officials from
          (list partners) this MOU shall end on <input type="date" />.
        </p>
      </div>
      <div className="contact-info">
        <div className="partner">
          <p>Partner Name</p>
          <input type="text" placeholder="(Partner Name)" />
          <p>Partner Representative</p>
          <input type="text" placeholder="(Partner Representative)" />
          <p>Position</p>
          <input type="text" placeholder="(Position)" />
          <p>Address</p>
          <input type="text" placeholder="(Address)" />
          <p>Phone</p>
          <input type="text" placeholder="(Phone)" />
          <p>Fax</p>
          <input type="text" placeholder="(Fax)" />
          <p>Email</p>
          <input type="text" placeholder="(Email)" />
        </div>

        <div className="partner">
          <p>Partner Name</p>
          <input type="text" placeholder="(Partner Name)" />
          <p>Partner Representative</p>
          <input type="text" placeholder="(Partner Representative)" />
          <p>Position</p>
          <input type="text" placeholder="(Position)" />
          <p>Address</p>
          <input type="text" placeholder="(Address)" />
          <p>Phone</p>
          <input type="text" placeholder="(Phone)" />
          <p>Fax</p>
          <input type="text" placeholder="(Fax)" />
          <p>Email</p>
          <input type="text" placeholder="(Email)" />
        </div>
      </div>
    </form>
  );
}
