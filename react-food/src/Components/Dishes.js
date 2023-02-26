const Dishes = ({title,dishDesc,price}) => {
  return (
    <>
    <h2>{title}</h2>
    <p>{dishDesc}</p>
    <p>${price.toFixed(2)}</p>
    </>
  );
};
export default Dishes;
{/* <div  className="grid">
    {data.map((item,index)=>
         <ul key={index}>
             <li className="card"><h3>{item.name}</h3>
             <p>{item.description}</p> 
             <p>${item.price.toFixed(2)}</p></li>  
        </ul>
         )}
    </div> */}