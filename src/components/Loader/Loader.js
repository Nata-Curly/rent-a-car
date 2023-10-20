import { Dna } from "react-loader-spinner";
import css from './Loader.module.css'
const Loader = () => {
    return (
        <div className={css.loader}>
            <Dna
                visible={true}
                height="300"
                width="300"
                ariaLabel="dna-loading"
                wrapperStyle={{
                    display: 'inline-block', textAlign: 'center'
                }}
                wrapperClass="dna-wrapper" />
        </div>
    );
};
 
export default Loader;
