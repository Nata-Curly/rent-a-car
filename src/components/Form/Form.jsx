
const Form = () => {
    return ( 
        <div>
            <form>
                <label htmlFor="">
                    Car brand <br/>
                    <input type="text" name="car brend" placeholder="Enter the text"/>
                </label>

                <label htmlFor="">
                    Price/ 1 hour <br/>
                    <input type="price" name="price" placeholder="To $"/>
                </label>

                <label htmlFor="">
                    Сar mileage / km <br/>
                    <input type="km" name="mileage" placeholder="From"/>
                </label>

                <label htmlFor="">
                    <input type="km" name="mileage" placeholder="To"/>
                </label>

                <button type="submit">Search</button>
            </form>
        </div>
     );
}
 
export default Form;