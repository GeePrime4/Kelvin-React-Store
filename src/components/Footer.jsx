import { BiLogoAmazon } from "react-icons/bi";

const Footer = () => {
    return (
        <footer
            style={{
                backgroundColor: "black",
                color: "white",
                textAlign: "center",
                width: "100%",
            }}             
        >
            <div className="d-inline-flex">
                <h2 className="d-inline display-6">{<BiLogoAmazon size={42} color='white' />}<h3 className="d-inline">&copy;</h3>React Store</h2>
                <p className="d-inline "><h2 className="display-6">| Categories  |</h2>
                    <ul style={{ listStyle: 'none' }}>
                        <li className="">Electronics</li>
                        <li>Jewelery</li>
                        <li>Men's Cloth</li>
                        <li>Women's Cloth</li>
                    </ul>
                </p>
                <div className="d-flex h-25 mt-2">
                    <input type="text" name="request" placeholder="Enter Your Request" className="form-control d-inline" />
                    <button className="btn btn-outline-success d-inline ms-3">Submit</button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
