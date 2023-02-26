const categories = [
  "all",
  "burger",
  "hot dog",
  "sandwich",
  "fries",
  "topping",
  "drink",
  "extra",
];
function Category({category,setCat}) {
    const handleChange = (e)=>{
        setCat(e.target.value)
        console.log(e)
    }
  return (
    <form>
      <fieldset>
        <legend>Category</legend>
        {categories.map((ele)=>{
        return(
        <label><input type="radio" name="cat" onChange={handleChange} 
        value={ele} id={ele} checked={ele === category}/>{" "}{ele}</label>
            )
            
        })}
      </fieldset>
    </form>
  );
};
export default Category;