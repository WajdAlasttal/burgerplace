import React from "react";

const Price = ({ min , max ,setMin,setMax}) => {
    const changeMin =(minVal)=>{
        setMin(minVal)
    }
    const changeMax =(maxVal)=>{
        setMax(maxVal)
    }

  return (
    <form>
      <fieldset>
        <legend>Price</legend>
        <label>min price <input type={"range"} onChange={(e)=>changeMin(e.target.value)} value={min} min={0} max={9} /></label>
        <label>max price <input type={"range"} onChange={(e)=>changeMax(e.target.value)} value={max} min={0} max={9} /></label>
      </fieldset>
    </form>
  );
};
export default Price;
