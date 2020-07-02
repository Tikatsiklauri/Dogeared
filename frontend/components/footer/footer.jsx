import React from "react";

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <footer className="footer">
                <div className="socialIcons">
                    <div>
                        <a
                            target="_blank"
                            href="https://www.linkedin.com/in/tika-tsiklauri-9a94931a9/"
                            className="socialLink"
                        >
                            <i className="fab fa-linkedin"></i>
                        </a>
                    </div>
                    <div>
                        <a
                            target="_blank"
                            href="https://angel.co/u/tika-tsiklauri"
                            className="socialLink"
                        >
                            <i className="fab fa-angellist"></i>
                        </a>
                    </div>
                    <div>
                        <a
                            target="_blank"
                            href="https://github.com/Tikatsiklauri"
                            className="socialLink"
                        >
                            <i className="fab fa-github"></i>
                        </a>
                    </div>
				</div >
            </footer>
        )
    }
}

export default Footer;