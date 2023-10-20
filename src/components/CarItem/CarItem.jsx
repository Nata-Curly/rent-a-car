

const CarItem = ({ car }) => {
    const {id, year, make, model, type, img, description, fuelConsumption, engineSize, accessories, functionalities, rentalPrice, rentalCompany,  address, mileage} = car;
    return ( 
        <div>
            <img src={img} alt={model} />
            <div>
                <p>{make}</p>
                <p>{model}</p>
                <p>{year}</p>
                <p>{rentalPrice}</p>

            </div>

            <div>
                <p>{address}</p>
                <p></p>
                <p>{rentalCompany}</p>
                <p></p>
                <p>{type}</p>
                <p>{make}</p>
                <p>{mileage}</p>
                <p>{accessories}</p>
            </div>
            
        </div>
     );
}
 
export default CarItem;