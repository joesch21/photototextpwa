import React from "react";

const RefuelForm = ({ formData, handleFormChange, handleFormSubmit }) => {
  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label htmlFor="flight">Flight Number</label>
        <input
          type="text"
          id="flight"
          name="flight"
          value={formData.flight || ""}
          onChange={handleFormChange}
          placeholder="Enter flight number"
        />
      </div>

      <div>
        <label htmlFor="destination">Destination</label>
        <input
          type="text"
          id="destination"
          name="destination"
          value={formData.destination || ""}
          onChange={handleFormChange}
          placeholder="Enter destination"
        />
      </div>

      <div>
        <label htmlFor="time">Time</label>
        <input
          type="time"
          id="time"
          name="time"
          value={formData.time || ""}
          onChange={handleFormChange}
        />
      </div>

      <div>
        <label htmlFor="bay">Bay</label>
        <input
          type="text"
          id="bay"
          name="bay"
          value={formData.bay || ""}
          onChange={handleFormChange}
          placeholder="Enter bay"
        />
      </div>

      <div>
        <label htmlFor="registration">Registration Number</label>
        <input
          type="text"
          id="registration"
          name="registration"
          value={formData.registration || ""}
          onChange={handleFormChange}
          placeholder="Enter registration number"
        />
      </div>

      <div>
        <label htmlFor="uplift">Uplift (L)</label>
        <input
          type="number"
          id="uplift"
          name="uplift"
          value={formData.uplift || ""}
          onChange={handleFormChange}
          placeholder="Enter uplift in liters"
        />
      </div>
     
           

     
      <button type="submit">Submit</button>
    </form>
  );
};

export default RefuelForm;
