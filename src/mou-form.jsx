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
    <div className="mou-form">
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
            <CheckBox />
          </>
        ) : null}
      </div>
    </div>
  );
}
